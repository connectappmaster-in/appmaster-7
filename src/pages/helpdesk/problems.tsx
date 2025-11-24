import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CreateProblemDialog } from "@/components/helpdesk/CreateProblemDialog";
import { EditProblemDialog } from "@/components/helpdesk/EditProblemDialog";
import { AssignProblemDialog } from "@/components/helpdesk/AssignProblemDialog";
import { ProblemTableView } from "@/components/helpdesk/ProblemTableView";

export default function HelpdeskProblems() {
  const [createProblemOpen, setCreateProblemOpen] = useState(false);
  const [editProblem, setEditProblem] = useState<any>(null);
  const [assignProblem, setAssignProblem] = useState<any>(null);
  const [selectedProblemIds, setSelectedProblemIds] = useState<number[]>([]);

  const { data: allProblems } = useQuery({
    queryKey: ['helpdesk-problems'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('helpdesk_problems')
        .select(`
          *,
          category:helpdesk_categories(name)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Fetch created_by users separately
      if (data && data.length > 0) {
        const userIds = [...new Set(data.map(p => p.created_by).filter(Boolean))];
        if (userIds.length > 0) {
          const { data: users } = await supabase
            .from('users')
            .select('id, name, email')
            .in('id', userIds);
          
          if (users) {
            const userMap = Object.fromEntries(users.map(u => [u.id, u]));
            return data.map(problem => ({
              ...problem,
              created_by_user: problem.created_by ? userMap[problem.created_by] : null
            }));
          }
        }
      }
      
      return data || [];
    }
  });

  const problems = allProblems || [];

  const handleSelectProblem = (id: number) => {
    setSelectedProblemIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectAllProblems = (checked: boolean) => {
    setSelectedProblemIds(checked ? problems.map((p: any) => p.id) : []);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 pt-2 pb-3">
        <div className="space-y-2">
          {/* Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCreateProblemOpen(true)} 
              className="gap-1.5 h-8 ml-auto"
            >
              <Plus className="h-3.5 w-3.5" />
              <span className="text-sm">New Problem</span>
            </Button>
          </div>

          {/* Problems Content */}
          {problems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 border border-dashed rounded-lg">
              <div className="rounded-full bg-muted p-4 mb-3">
                <AlertTriangle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-base font-semibold mb-1">No problems found</h3>
              <p className="text-xs text-muted-foreground mb-4 text-center max-w-md">
                Create a problem record to track recurring issues and document solutions
              </p>
              <Button onClick={() => setCreateProblemOpen(true)} size="sm" className="gap-1.5 h-8">
                <Plus className="h-3.5 w-3.5" />
                <span className="text-sm">Create First Problem</span>
              </Button>
            </div>
          ) : (
            <ProblemTableView 
              problems={problems} 
              selectedIds={selectedProblemIds} 
              onSelectProblem={handleSelectProblem} 
              onSelectAll={handleSelectAllProblems}
              onEditProblem={setEditProblem}
              onAssignProblem={setAssignProblem}
            />
          )}
        </div>

        <CreateProblemDialog open={createProblemOpen} onOpenChange={setCreateProblemOpen} />
        {editProblem && (
          <EditProblemDialog 
            open={!!editProblem} 
            onOpenChange={(open) => !open && setEditProblem(null)}
            problem={editProblem}
          />
        )}
        {assignProblem && (
          <AssignProblemDialog 
            open={!!assignProblem} 
            onOpenChange={(open) => !open && setAssignProblem(null)}
            problem={assignProblem}
          />
        )}
      </div>
    </div>
  );
}
