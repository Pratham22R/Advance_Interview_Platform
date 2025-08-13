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
    <div className="container max-w-7xl mx-auto p-4 md:p-6 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track and manage interviews</p>
        </div>
        <Link href="/schedule">
          <Button size="lg">
            <CalendarPlusIcon className="h-4 w-4 mr-2" />
            Schedule New Interview
          </Button>
        </Link>
      </div>

      {!hasInterviews ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <CalendarIcon className="w-12 h-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Interviews Yet</h2>
          <p className="text-muted-foreground max-w-md">
            Once you schedule interviews, they’ll show up here for tracking and evaluation.
          </p>
        </div>
      ) : (
        INTERVIEW_CATEGORY.map(
          (category) =>
            groupedInterviews[category.id]?.length > 0 && (
              <section key={category.id} className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                  <Badge variant={category.variant}>
                    {groupedInterviews[category.id].length}
                  </Badge>
                </div>

                {/* Horizontal-aligned grid like InterviewScheduleUI */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {groupedInterviews[category.id].map((interview: Interview) => {
                    const candidateInfo = getCandidateInfo(users, interview.candidateId);
                    const startTime = new Date(interview.startTime);

                    return (
                      <Card
                        key={interview._id}
                        className="hover:shadow-md transition-all"
                      >
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={candidateInfo.image} />
                              <AvatarFallback>{candidateInfo.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">{candidateInfo.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{interview.title}</p>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              {format(startTime, "MMM dd")}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              {format(startTime, "hh:mm a")}
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="p-4 pt-0 flex flex-col gap-3">
                          {interview.status === "completed" && (
                            <div className="flex gap-2 w-full">
                              <Button
                                className="flex-1"
                                onClick={() => handleStatusUpdate(interview._id, "succeeded")}
                              >
                                <CheckCircle2Icon className="h-4 w-4 mr-2" />
                                Pass
                              </Button>
                              <Button
                                variant="destructive"
                                className="flex-1"
                                onClick={() => handleStatusUpdate(interview._id, "failed")}
                              >
                                <XCircleIcon className="h-4 w-4 mr-2" />
                                Fail
                              </Button>
                            </div>
                          )}
                          <CommentDialog interviewId={interview._id} />
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </section>
            )
        )
      )}
    </div>
  );
}

export default DashboardPage;
