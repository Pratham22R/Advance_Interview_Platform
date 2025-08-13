"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import toast from "react-hot-toast";
import LoaderUI from "@/components/LoaderUI";
import { getCandidateInfo, groupInterviews } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { INTERVIEW_CATEGORY } from "@/constants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  CalendarIcon,
  CheckCircle2Icon,
  ClockIcon,
  XCircleIcon,
  CalendarPlusIcon,
} from "lucide-react";
import { format } from "date-fns";
import CommentDialog from "@/components/CommentDialog";

type Interview = Doc<"interviews">;

function DashboardPage() {
  const users = useQuery(api.users.getUsers);
  const interviews = useQuery(api.interview.getAllInterviews);
  const updateStatus = useMutation(api.interview.updateInterviewStatus);

  const handleStatusUpdate = async (
    interviewId: Id<"interviews">,
    status: string
  ) => {
    try {
      await updateStatus({ id: interviewId, status });
      toast.success(`Interview marked as ${status}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  if (!interviews || !users) return <LoaderUI />;

  const groupedInterviews = groupInterviews(interviews);
  const hasInterviews = INTERVIEW_CATEGORY.some(
    (cat) => groupedInterviews[cat.id]?.length > 0
  );

  return (
    <div className="max-w-2xl mx-auto px-2 py-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-medium">Dashboard</span>
        <Link href="/schedule">
          <Button size="sm" variant="outline">
            <CalendarPlusIcon className="h-4 w-4 mr-1" />
            Schedule
          </Button>
        </Link>
      </div>

      {!hasInterviews ? (
        <div className="text-center text-muted-foreground py-12 text-sm">
          No interviews yet.
        </div>
      ) : (
        <div className="space-y-6">
          {INTERVIEW_CATEGORY.map(
            (category) =>
              groupedInterviews[category.id]?.length > 0 && (
                <section key={category.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base font-semibold">{category.title}</span>
                    <Badge variant={category.variant} className="text-xs">
                      {groupedInterviews[category.id].length}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {groupedInterviews[category.id].map((interview: Interview) => {
                      const candidateInfo = getCandidateInfo(users, interview.candidateId);
                      const startTime = new Date(interview.startTime);

                      return (
                        <Card key={interview._id} className="p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={candidateInfo.image} />
                              <AvatarFallback>{candidateInfo.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{candidateInfo.name}</div>
                              <div className="text-xs text-muted-foreground">{interview.title}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              {format(startTime, "MMM dd")}
                            </span>
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-3 w-3" />
                              {format(startTime, "hh:mm a")}
                            </span>
                          </div>
                          {interview.status === "completed" && (
                            <div className="flex gap-1 mb-2">
                              <Button
                                size="sm"
                                className="flex-1"
                                onClick={() => handleStatusUpdate(interview._id, "succeeded")}
                              >
                                <CheckCircle2Icon className="h-3 w-3 mr-1" />
                                Pass
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="flex-1"
                                onClick={() => handleStatusUpdate(interview._id, "failed")}
                              >
                                <XCircleIcon className="h-3 w-3 mr-1" />
                                Fail
                              </Button>
                            </div>
                          )}
                          <CommentDialog interviewId={interview._id} />
                        </Card>
                      );
                    })}
                  </div>
                </section>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
