import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import ticketsHeroImage from "@/assets/tickets-hero.png";

const Tickets = () => {
  const features = [
    {
      title: "Ticket Management",
      description: "Organize and prioritize support tickets with customizable workflows, automated routing, and SLA tracking.",
    },
    {
      title: "Multi-Channel Support",
      description: "Handle requests from email, chat, phone, and self-service portals in one unified ticketing system.",
    },
    {
      title: "Automated Workflows",
      description: "Set up rules to automatically assign, escalate, and respond to tickets based on priority and category.",
    },
    {
      title: "Knowledge Base Integration",
      description: "Link tickets to knowledge base articles and suggest solutions automatically to reduce resolution time.",
    },
    {
      title: "SLA Management",
      description: "Track service level agreements with automated alerts for breaches and comprehensive compliance reporting.",
    },
    {
      title: "Team Collaboration",
      description: "Enable internal notes, ticket assignment, and team discussions to resolve issues faster together.",
    },
  ];

  const useCases = [
    {
      title: "IT Help Desk",
      description: "Manage internal IT support requests efficiently with automated ticket routing, priority management, and comprehensive tracking of hardware and software issues.",
    },
    {
      title: "Customer Support Teams",
      description: "Deliver exceptional customer service with organized ticket queues, quick response templates, and detailed customer history for personalized support.",
    },
    {
      title: "Facilities Management",
      description: "Track maintenance requests, facility issues, and building services with location-based routing and status updates for building occupants.",
    },
    {
      title: "Service Desk Operations",
      description: "Run enterprise service desks with multi-tier support, escalation workflows, and comprehensive reporting for continuous improvement.",
    },
  ];

  const benefits = [
    "Reduce average resolution time by 40%",
    "Improve first-contact resolution rates",
    "Automated ticket routing saves hours daily",
    "Complete audit trail for compliance",
    "Self-service portal reduces ticket volume",
    "Mobile app for on-the-go support",
    "Real-time dashboard for team performance",
    "Integrate with existing IT tools seamlessly",
  ];

  return (
    <FeaturePageLayout
      title="Tickets"
      subtitle="Support made simple"
      description="Streamline your support operations with a powerful ticketing system that helps teams resolve issues faster and keep customers happy."
      heroImage={ticketsHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Tickets;
