"use client";
import { useEffect, useState } from "react";

export default function LoaderUI() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[calc(100vh-4rem-1px)] flex flex-col items-center justify-center gap-4">
      {!showText ? (
        <img src="/pulse1.svg" alt="Loading heartbeat" className="w-40 h-40" />
      ) : (
        <div className="text-muted-foreground text-lg animate-fadeIn">
          Preparing your interview space...
        </div>
      )}
    </div>
  );
}
