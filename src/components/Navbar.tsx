"use client";
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";
import { useUserRole } from "../hooks/useUserRole";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function Navbar() {
  const { isInterviewer } = useUserRole();
  const pathname = usePathname();

  return (
    <nav className="border-b w-full">
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="size-8 text-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            EvalMeet
          </span>
        </Link>

        {/* Right Section (Buttons) */}
        <SignedIn>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            {isInterviewer && (
              <Button
                className="border border-[#0ba380] bg-transparent text-[#0ba380] hover:bg-[#0ba380] hover:text-white transition-colors"
              >
                <Link href="/home">Home</Link>
              </Button>
            )}
            {pathname !== "/dashboard" && <DasboardBtn />}
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
