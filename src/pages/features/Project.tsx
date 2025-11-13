import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import projectHeroImage from "@/assets/project-hero.png";

const Project = () => {
  const features = [
    {
      title: "Task Management",
      description: "Create, assign, and track tasks with customizable workflows, priorities, and due dates. Never miss a deadline.",
    },
    {
      title: "Kanban Boards",
      description: "Visualize project progress with intuitive drag-and-drop Kanban boards that adapt to your workflow.",
    },
    {
      title: "Gantt Charts",
      description: "Plan complex projects with interactive Gantt charts showing dependencies, milestones, and critical paths.",
    },
    {
      title: "Team Collaboration",
      description: "Collaborate in real-time with comments, file sharing, and @mentions to keep everyone aligned.",
    },
    {
      title: "Time Tracking",
      description: "Track time spent on tasks and projects for accurate billing and productivity insights.",
    },
    {
      title: "Resource Management",
      description: "Allocate team resources efficiently and prevent burnout with workload balancing and capacity planning.",
    },
  ];

  const useCases = [
    {
      title: "Software Development",
      description: "Manage agile sprints, track bugs, and coordinate releases with integrated development workflows. Perfect for engineering teams of any size.",
    },
    {
      title: "Marketing Campaigns",
      description: "Plan and execute marketing campaigns with content calendars, approval workflows, and performance tracking. Keep all stakeholders informed.",
    },
    {
      title: "Construction Projects",
      description: "Coordinate complex construction projects with milestone tracking, resource scheduling, and document management. Stay on time and budget.",
    },
    {
      title: "Event Planning",
      description: "Organize events from concept to execution with task lists, vendor management, and timeline tracking. Deliver flawless events every time.",
    },
  ];

  const benefits = [
    "Improve project delivery by 30%",
    "Reduce project planning time by 50%",
    "Increase team productivity by 25%",
    "Complete visibility across all projects",
    "Eliminate status update meetings",
    "Integrated time tracking and billing",
    "Customizable workflows for any process",
    "Mobile apps for on-the-go updates",
  ];

  return (
    <FeaturePageLayout
      title="Project Management"
      subtitle="Deliver projects on time, every time"
      description="Streamline project planning, execution, and delivery with powerful tools that keep teams aligned and projects on track."
      heroImage={projectHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Project;
