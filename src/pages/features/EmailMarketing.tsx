import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import emailMarketingHeroImage from "@/assets/email-marketing-hero.png";

const EmailMarketing = () => {
  const features = [
    {
      title: "Drag-and-Drop Editor",
      description: "Create beautiful, responsive emails with an intuitive visual editor. No coding required.",
    },
    {
      title: "Automation Workflows",
      description: "Set up automated email sequences triggered by customer behavior, dates, or custom events.",
    },
    {
      title: "Segmentation",
      description: "Target the right audience with advanced segmentation based on behavior, demographics, and engagement.",
    },
    {
      title: "A/B Testing",
      description: "Optimize your campaigns with built-in A/B testing for subject lines, content, and send times.",
    },
    {
      title: "Analytics Dashboard",
      description: "Track open rates, click-throughs, conversions, and ROI with comprehensive reporting and insights.",
    },
    {
      title: "Template Library",
      description: "Start fast with professionally designed templates for every occasion and industry.",
    },
  ];

  const useCases = [
    {
      title: "E-commerce Promotions",
      description: "Drive sales with targeted promotional campaigns, abandoned cart recovery, and personalized product recommendations. Increase revenue with automated sequences.",
    },
    {
      title: "Newsletter Publishing",
      description: "Build and engage your audience with regular newsletters. Share valuable content, company updates, and industry insights to establish thought leadership.",
    },
    {
      title: "Customer Onboarding",
      description: "Welcome new customers with automated onboarding sequences that educate, engage, and drive product adoption. Reduce churn and increase lifetime value.",
    },
    {
      title: "Event Marketing",
      description: "Promote webinars, conferences, and events with targeted invitations, reminders, and follow-up campaigns. Maximize attendance and engagement.",
    },
  ];

  const benefits = [
    "Increase email ROI by up to 400%",
    "Save 5+ hours per week on email creation",
    "Improve open rates by 50% with segmentation",
    "Automate 80% of your email marketing",
    "Personalize at scale with dynamic content",
    "99.9% deliverability rate",
    "GDPR and CAN-SPAM compliant",
    "Integration with 1000+ apps",
  ];

  return (
    <FeaturePageLayout
      title="Email Marketing"
      subtitle="Engage customers at scale"
      description="Create, send, and automate email campaigns that convert. Build meaningful relationships with your audience through personalized, targeted communication."
      heroImage={emailMarketingHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default EmailMarketing;
