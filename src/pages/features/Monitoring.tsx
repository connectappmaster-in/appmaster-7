import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import monitoringHeroImage from "@/assets/monitoring-hero.png";

const Monitoring = () => {
  const features = [
    {
      title: "Real-Time Monitoring",
      description: "Monitor server health, application performance, and network status with real-time metrics and instant alerts.",
    },
    {
      title: "Infrastructure Visibility",
      description: "Visualize your entire IT infrastructure with network topology maps, dependency tracking, and resource utilization.",
    },
    {
      title: "Alert Management",
      description: "Configure intelligent alerts with customizable thresholds, escalation policies, and multi-channel notifications.",
    },
    {
      title: "Performance Analytics",
      description: "Analyze historical performance data with trend analysis, capacity planning, and predictive insights.",
    },
    {
      title: "Uptime Tracking",
      description: "Track system uptime and availability with SLA reporting, downtime analysis, and incident correlation.",
    },
    {
      title: "Log Management",
      description: "Centralize and analyze logs from all sources with powerful search, filtering, and automated log correlation.",
    },
  ];

  const useCases = [
    {
      title: "Infrastructure Monitoring",
      description: "Monitor servers, networks, and cloud resources in real-time. Detect issues before they impact users with proactive monitoring and intelligent alerting.",
    },
    {
      title: "Application Performance",
      description: "Track application performance metrics, response times, and error rates. Identify bottlenecks and optimize user experience with detailed insights.",
    },
    {
      title: "Network Operations",
      description: "Monitor network health, bandwidth usage, and device status across your infrastructure. Detect and resolve network issues quickly with comprehensive visibility.",
    },
    {
      title: "Cloud Infrastructure",
      description: "Monitor multi-cloud environments with unified dashboards. Track costs, performance, and availability across AWS, Azure, and Google Cloud.",
    },
  ];

  const benefits = [
    "Detect issues 10x faster with real-time alerts",
    "Reduce MTTR by 60% with root cause analysis",
    "99.9% uptime with proactive monitoring",
    "Comprehensive infrastructure visibility",
    "Automated incident response workflows",
    "Predictive analytics for capacity planning",
    "Integration with existing tools",
    "Scale from startup to enterprise",
  ];

  return (
    <FeaturePageLayout
      title="Monitoring"
      subtitle="Always know what's happening"
      description="Gain complete visibility into your IT infrastructure with real-time monitoring, intelligent alerts, and comprehensive performance analytics."
      heroImage={monitoringHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Monitoring;
