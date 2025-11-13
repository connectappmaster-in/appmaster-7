import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import subscriptionsHeroImage from "@/assets/subscriptions-hero.png";

const Subscriptions = () => {
  const features = [
    {
      title: "Recurring Billing",
      description: "Automate subscription billing with flexible pricing models, proration, and automated invoice generation.",
    },
    {
      title: "License Management",
      description: "Track software and service licenses across your organization with automated renewal reminders and usage monitoring.",
    },
    {
      title: "Payment Processing",
      description: "Accept recurring payments securely with multiple payment methods and automatic retry logic for failed transactions.",
    },
    {
      title: "Subscription Analytics",
      description: "Monitor MRR, ARR, churn rates, and customer lifetime value with real-time subscription analytics and reporting.",
    },
    {
      title: "Self-Service Portal",
      description: "Let customers manage their subscriptions, update payment methods, and view billing history through a branded portal.",
    },
    {
      title: "Dunning Management",
      description: "Automatically handle failed payments with smart retry logic and customizable email notifications to reduce churn.",
    },
  ];

  const useCases = [
    {
      title: "SaaS Subscription Management",
      description: "Manage software subscriptions with flexible plans, usage-based billing, and automated provisioning. Handle upgrades, downgrades, and cancellations seamlessly.",
    },
    {
      title: "Membership Programs",
      description: "Run membership and loyalty programs with tiered access levels, recurring fees, and member benefits tracking for enhanced customer engagement.",
    },
    {
      title: "License Tracking",
      description: "Monitor all software licenses and subscriptions across your organization. Track costs, renewal dates, and optimize spending on recurring services.",
    },
    {
      title: "Service Subscriptions",
      description: "Manage recurring service contracts with automated billing, service level tracking, and renewal management for professional services.",
    },
  ];

  const benefits = [
    "Reduce billing errors by 95%",
    "Automate subscription renewals",
    "Decrease involuntary churn by 40%",
    "Real-time revenue recognition",
    "Self-service reduces support tickets",
    "Flexible pricing models supported",
    "Comprehensive revenue analytics",
    "Integrate with accounting systems",
  ];

  return (
    <FeaturePageLayout
      title="Subscriptions"
      subtitle="Recurring revenue made easy"
      description="Simplify subscription management with automated billing, payment processing, and comprehensive analytics for recurring revenue businesses."
      heroImage={subscriptionsHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Subscriptions;
