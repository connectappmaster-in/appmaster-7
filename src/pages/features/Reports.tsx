import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import reportsHeroImage from "@/assets/reports-hero.png";

const Reports = () => {
  const features = [
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with drag-and-drop widgets, real-time data, and customizable visualizations.",
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear insights with charts, graphs, heatmaps, and interactive visualizations.",
    },
    {
      title: "Scheduled Reports",
      description: "Automate report generation and distribution with scheduled exports in PDF, Excel, and CSV formats.",
    },
    {
      title: "KPI Tracking",
      description: "Monitor key performance indicators with goal tracking, trend analysis, and automated alerts for threshold breaches.",
    },
    {
      title: "Ad-Hoc Analysis",
      description: "Perform on-demand data analysis with powerful filtering, grouping, and drill-down capabilities.",
    },
    {
      title: "Report Sharing",
      description: "Share reports and dashboards securely with team members, stakeholders, and clients with granular access controls.",
    },
  ];

  const useCases = [
    {
      title: "Executive Reporting",
      description: "Provide executives with high-level dashboards showing KPIs, trends, and business performance metrics. Enable data-driven decision making at all levels.",
    },
    {
      title: "Operational Analytics",
      description: "Monitor day-to-day operations with real-time dashboards tracking system performance, resource utilization, and service delivery metrics.",
    },
    {
      title: "Compliance Reporting",
      description: "Generate audit-ready reports demonstrating compliance with regulatory requirements. Track security metrics and policy adherence automatically.",
    },
    {
      title: "Performance Analysis",
      description: "Analyze IT performance metrics including incident response times, system uptime, and service quality. Identify improvement opportunities with trend analysis.",
    },
  ];

  const benefits = [
    "Save 15 hours per week on reporting",
    "Real-time data visualization",
    "Automated report distribution",
    "Custom dashboards for every role",
    "Export in multiple formats",
    "Drill-down for detailed analysis",
    "Mobile-responsive dashboards",
    "Integration with all data sources",
  ];

  return (
    <FeaturePageLayout
      title="Reports"
      subtitle="Data-driven insights"
      description="Transform your data into actionable insights with powerful reporting and analytics tools that make complex information easy to understand."
      heroImage={reportsHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Reports;
