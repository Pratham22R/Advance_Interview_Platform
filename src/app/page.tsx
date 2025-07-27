import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          Sign In
        </Button>
      </SignInButton>
    </div>
  );
}
