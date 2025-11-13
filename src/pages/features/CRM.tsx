import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import crmHeroImage from "@/assets/crm-hero.png";

const CRM = () => {
  const features = [
    {
      title: "Contact Management",
      description: "Centralize all customer information in one place with detailed profiles, interaction history, and custom fields.",
    },
    {
      title: "Sales Pipeline",
      description: "Visualize your sales process with customizable pipeline stages and automated workflows to close deals faster.",
    },
    {
      title: "Lead Scoring",
      description: "Automatically prioritize leads based on engagement, behavior, and demographics to focus on high-value opportunities.",
    },
    {
      title: "Email Integration",
      description: "Sync emails automatically and track all communications directly within the CRM for complete visibility.",
    },
    {
      title: "Activity Tracking",
      description: "Log calls, meetings, and tasks automatically to maintain a complete record of customer interactions.",
    },
    {
      title: "Reports & Analytics",
      description: "Get real-time insights into sales performance, conversion rates, and team productivity with customizable dashboards.",
    },
  ];

  const useCases = [
    {
      title: "Sales Team Management",
      description: "Empower your sales team with tools to track leads, manage opportunities, and collaborate effectively. Monitor individual and team performance with detailed analytics.",
    },
    {
      title: "Customer Service Excellence",
      description: "Provide exceptional customer support with complete visibility into customer history, past interactions, and ongoing issues. Resolve problems faster with context.",
    },
    {
      title: "Marketing Campaign Tracking",
      description: "Track the effectiveness of marketing campaigns by monitoring lead sources, conversion rates, and ROI. Segment customers for targeted outreach.",
    },
    {
      title: "Account Management",
      description: "Manage key accounts with dedicated relationship tracking, renewal reminders, and upsell opportunities. Build stronger, long-term relationships.",
    },
  ];

  const benefits = [
    "Increase sales productivity by up to 34%",
    "Improve customer retention rates by 27%",
    "Reduce sales cycle time by automating follow-ups",
    "360-degree view of every customer interaction",
    "Mobile access for sales teams on the go",
    "Seamless integration with email and calendar",
    "Customizable workflows to match your process",
    "Real-time collaboration across teams",
  ];

  return (
    <FeaturePageLayout
      title="CRM"
      subtitle="Build lasting customer relationships"
      description="Manage your entire customer lifecycle from lead to loyal customer with powerful, intuitive CRM tools that grow with your business."
      heroImage={crmHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default CRM;
