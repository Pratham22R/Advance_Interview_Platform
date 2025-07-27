"use client";

import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SignedIn>
            <div className="min-h-screen">
              <Navbar />
              <main className="px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>

          <Toaster />
        </ThemeProvider>
      </ConvexClerkProvider>
    </ClerkProvider>
  );
}
