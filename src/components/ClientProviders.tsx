"use client";

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isProtectedRoute = pathname.startsWith("/home") || 
                           pathname.startsWith("/meeting") ||
                           pathname.startsWith("/schedule") ||
                           pathname.startsWith("/recordings") ||
                           pathname.startsWith("/(admin)");

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ConvexClerkProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SignedIn>
            <div className="min-h-screen">
              {isProtectedRoute && <Navbar />}
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
