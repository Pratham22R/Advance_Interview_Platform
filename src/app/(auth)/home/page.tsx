"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import HomeContent from "./HomeContent"; // We'll move actual content to this file

export default function HomePage() {
  return (
    <>
      <SignedIn>
        <HomeContent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
