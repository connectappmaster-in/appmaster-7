import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

export default function HelpdeskProblemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: problem, isLoading } = useQuery({
    queryKey: ["helpdesk-problem", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("helpdesk_problems")
        .select(
          `*,
           category:helpdesk_categories(name)
          `
        )
        .eq("id", Number(id))
        .maybeSingle();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  const { data: createdByUser } = useQuery({
    queryKey: ["problem-created-by", problem?.created_by],
    queryFn: async () => {
      if (!problem?.created_by) return null;
      const { data } = await supabase
        .from("users")
        .select("name, email")
        .eq("id", problem.created_by)
        .maybeSingle();
      return data;
    },
    enabled: !!problem?.created_by,
  });

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <p className="text-lg font-semibold">Problem not found</p>
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Problems
        </Button>
      </div>
    );
  }

  const getPriorityColor = (priority: string | null) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500 text-white";
      case "high":
        return "bg-orange-500 text-white";
      case "medium":
        return "bg-yellow-500 text-white";
      case "low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="font-mono text-sm px-2 py-0.5">
            {problem.problem_number}
          </Badge>
          {problem.priority && (
            <Badge className={getPriorityColor(problem.priority)}>
              {problem.priority}
            </Badge>
          )}
          {problem.status && (
            <Badge variant="outline" className="capitalize">
              {problem.status.replace("_", " ")}
            </Badge>
          )}
          {problem.category && (
            <Badge variant="outline">{problem.category.name}</Badge>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{problem.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {problem.description && (
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {problem.description}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Assigned to</div>
              <div>{problem.assigned_to || "Unassigned"}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Created by</div>
              <div>{createdByUser?.name || createdByUser?.email || problem.created_by || "Unknown"}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Created at</div>
              <div>
                {problem.created_at
                  ? format(new Date(problem.created_at), "MMM dd, yyyy HH:mm")
                  : "-"}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Resolved at</div>
              <div>
                {problem.resolved_at
                  ? format(new Date(problem.resolved_at), "MMM dd, yyyy HH:mm")
                  : "-"}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Closed at</div>
              <div>
                {problem.closed_at
                  ? format(new Date(problem.closed_at), "MMM dd, yyyy HH:mm")
                  : "-"}
              </div>
            </div>
          </div>

          {(problem.root_cause || problem.workaround || problem.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {problem.root_cause && (
                <div>
                  <div className="font-medium mb-1">Root cause</div>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {problem.root_cause}
                  </p>
                </div>
              )}
              {problem.workaround && (
                <div>
                  <div className="font-medium mb-1">Workaround</div>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {problem.workaround}
                  </p>
                </div>
              )}
              {problem.solution && (
                <div>
                  <div className="font-medium mb-1">Solution</div>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {problem.solution}
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
