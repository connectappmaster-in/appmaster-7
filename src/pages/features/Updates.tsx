import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import updatesHeroImage from "@/assets/updates-hero.png";

const Updates = () => {
  const features = [
    {
      title: "Patch Management",
      description: "Automate software updates and security patches across all devices with scheduled deployments and rollback capabilities.",
    },
    {
      title: "Version Control",
      description: "Track software versions across your infrastructure with detailed change logs and compliance reporting.",
    },
    {
      title: "Deployment Scheduling",
      description: "Plan and schedule update rollouts with maintenance windows, phased deployments, and automated testing.",
    },
    {
      title: "Compliance Tracking",
      description: "Ensure all systems meet security and compliance standards with automated vulnerability scanning and patch status reporting.",
    },
    {
      title: "Rollback Protection",
      description: "Safely deploy updates with automatic rollback capabilities if issues are detected during deployment.",
    },
    {
      title: "Multi-Platform Support",
      description: "Manage updates across Windows, macOS, Linux, mobile devices, and applications from a single dashboard.",
    },
  ];

  const useCases = [
    {
      title: "Enterprise Patch Management",
      description: "Manage security patches and updates across thousands of devices with automated deployment, testing, and compliance reporting for enterprise environments.",
    },
    {
      title: "Software Update Automation",
      description: "Automate application updates with scheduled deployments, user notifications, and minimal disruption to business operations.",
    },
    {
      title: "Security Compliance",
      description: "Maintain security compliance by ensuring all systems receive critical security patches promptly with automated vulnerability scanning and remediation.",
    },
    {
      title: "Remote Device Management",
      description: "Deploy updates to remote and mobile workforces with bandwidth-aware distribution and offline update capabilities for distributed teams.",
    },
  ];

  const benefits = [
    "Reduce security vulnerabilities by 85%",
    "Automate 95% of update deployments",
    "Minimize system downtime during updates",
    "Ensure compliance with security policies",
    "Rollback failed updates instantly",
    "Bandwidth-optimized distribution",
    "Comprehensive update audit trails",
    "Support for all major platforms",
  ];

  return (
    <FeaturePageLayout
      title="Updates"
      subtitle="Stay secure and up-to-date"
      description="Automate software updates and patch management across your entire infrastructure to maintain security and minimize vulnerabilities."
      heroImage={updatesHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Updates;
