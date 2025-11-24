import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Eye, UserPlus } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface ProblemTableViewProps {
  problems: any[];
  selectedIds: number[];
  onSelectProblem: (id: number) => void;
  onSelectAll: (checked: boolean) => void;
  onEditProblem?: (problem: any) => void;
  onAssignProblem?: (problem: any) => void;
}

export const ProblemTableView = ({ 
  problems, 
  selectedIds, 
  onSelectProblem, 
  onSelectAll,
  onEditProblem,
  onAssignProblem
}: ProblemTableViewProps) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'investigating': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-300';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 hover:bg-red-600 text-white';
      case 'high': return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'medium': return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'low': return 'bg-green-500 hover:bg-green-600 text-white';
      default: return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedIds.length === problems.length && problems.length > 0}
                onCheckedChange={onSelectAll}
              />
            </TableHead>
            <TableHead>Problem #</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems.map((problem) => (
            <TableRow key={problem.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell onClick={(e) => e.stopPropagation()}>
                <Checkbox
                  checked={selectedIds.includes(problem.id)}
                  onCheckedChange={() => onSelectProblem(problem.id)}
                />
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                <Badge variant="outline" className="font-mono">
                  {problem.problem_number}
                </Badge>
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                <div className="max-w-xs">
                  <div className="font-medium truncate">{problem.title}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {problem.description}
                  </div>
                </div>
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                <Badge variant="outline" className={getStatusColor(problem.status)}>
                  {problem.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                <Badge className={getPriorityColor(problem.priority)}>
                  {problem.priority}
                </Badge>
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                {problem.assignee?.name || (
                  <span className="text-muted-foreground italic">Unassigned</span>
                )}
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                {problem.category?.name || '-'}
              </TableCell>
              <TableCell onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}>
                <div className="text-sm">
                  {format(new Date(problem.created_at), 'MMM dd, yyyy')}
                </div>
              </TableCell>
              <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(`/helpdesk/problems/${problem.id}`)}
                    title="View"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditProblem?.(problem);
                    }}
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAssignProblem?.(problem);
                    }}
                    title="Assign"
                  >
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
