import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET is not set");
    }

    // ✅ Normalize headers manually (Convex doesn't expose .entries())
    const svix_id =
      request.headers.get("svix-id") || request.headers.get("Svix-Id");
    const svix_signature =
      request.headers.get("svix-signature") || request.headers.get("Svix-Signature");
    const svix_timestamp =
      request.headers.get("svix-timestamp") || request.headers.get("Svix-Timestamp");

    if (!svix_id || !svix_signature || !svix_timestamp) {
      console.error("❌ Missing required headers", {
        svix_id,
        svix_signature,
        svix_timestamp,
      });
      throw new Error("Missing required headers");
    }

    // 🔁 Use raw body (Clerk requires raw JSON string for svix to verify)
    const payload = await request.text();

    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
      evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-signature": svix_signature,
        "svix-timestamp": svix_timestamp,
      }) as WebhookEvent;
    } catch (err) {
      console.error("❌ Webhook verification failed:", err);
      throw new Error("Invalid webhook signature");
    }

    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const email = email_addresses.length > 0 ? email_addresses[0].email_address : "";
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        await ctx.runMutation(api.users.syncUser, {
          clerkId: id,
          email,
          name,
          image: image_url,
        });
      } catch (err) {
        console.error("❌ Error syncing user:", err);
        return new Response("Error syncing user", { status: 500 });
      }
    }

    return new Response("✅ Webhook processed successfully", { status: 200 });
  }),
});

export default http;
