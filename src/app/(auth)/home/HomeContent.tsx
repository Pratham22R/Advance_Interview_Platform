// src/app/(auth)/home/HomeContent.tsx
"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "@/../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import { motion } from "framer-motion";

export default function HomeContent() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interview.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container max-w-7xl mx-auto p-6 relative">
      <div className="absolute -z-10 blur-3xl w-72 h-72 bg-teal-500/20 rounded-full top-10 left-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg bg-card p-6 border shadow-sm mb-10"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
          Welcome back!
        </h1>
        <p className="text-muted-foreground mt-2">
          {isInterviewer
            ? "Manage your interviews and review candidates effectively"
            : "Access your upcoming interviews and preparations"}
        </p>
      </motion.div>

      {isInterviewer ? (
        <>
          <h2 className="text-lg text-muted-foreground font-medium mb-2 mt-4 uppercase tracking-widest">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <motion.div
                key={action.title}
                whileHover={{ scale: 1.02 }}
                className="hover:shadow-[0_0_20px_#0ba38080] transition-all"
              >
                <ActionCard action={action} onClick={() => handleQuickAction(action.title)} />
              </motion.div>
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        <>
          <div>
            <h1 className="text-3xl font-bold">Your Interviews</h1>
            <p className="text-muted-foreground mt-1">
              View and join your scheduled interviews
            </p>
          </div>

          <div className="mt-8">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <motion.div
                    key={interview._id}
                    whileHover={{ scale: 1.02 }}
                    className="transition-shadow hover:shadow-lg"
                  >
                    <MeetingCard interview={interview} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-5xl mb-4">📭</div>
                You have no scheduled interviews at the moment
              </div>
            )}
          </div>

          <div className="mt-10 p-4 rounded-lg border bg-muted">
            <h3 className="text-lg font-semibold mb-1">✨ Pro Tip</h3>
            <p className="text-sm text-muted-foreground">
              Make sure to test your camera and mic 10 minutes before your interview starts!
            </p>
          </div>
        </>
      )}
    </div>
  );
}
