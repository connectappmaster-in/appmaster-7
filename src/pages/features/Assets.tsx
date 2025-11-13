import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import assetsHeroImage from "@/assets/assets-hero.png";

const Assets = () => {
  const features = [
    {
      title: "Hardware Inventory",
      description: "Track all hardware assets including computers, servers, mobile devices, and peripherals with detailed specifications and locations.",
    },
    {
      title: "Software License Management",
      description: "Monitor software licenses, compliance, renewal dates, and costs to avoid over-licensing and ensure compliance.",
    },
    {
      title: "Barcode & QR Code Scanning",
      description: "Use mobile devices to scan barcodes and QR codes for quick asset check-ins, transfers, and audits.",
    },
    {
      title: "Lifecycle Management",
      description: "Track assets from procurement to disposal with automated depreciation calculations and maintenance schedules.",
    },
    {
      title: "Contract Management",
      description: "Store and manage vendor contracts, warranties, and service agreements with automated renewal reminders.",
    },
    {
      title: "Audit & Reporting",
      description: "Generate comprehensive asset reports, compliance audits, and cost analyses with customizable dashboards.",
    },
  ];

  const useCases = [
    {
      title: "IT Asset Management",
      description: "Maintain a complete inventory of all IT hardware and software across your organization. Track asset lifecycle, maintenance schedules, and optimize IT spending.",
    },
    {
      title: "Equipment Tracking",
      description: "Monitor company equipment from tools to vehicles with location tracking, assignment history, and maintenance records for operational efficiency.",
    },
    {
      title: "Compliance Management",
      description: "Ensure software license compliance and hardware audit readiness with automated tracking and detailed reporting for regulatory requirements.",
    },
    {
      title: "Financial Reporting",
      description: "Track asset depreciation, calculate total cost of ownership, and optimize capital expenditure with comprehensive financial analytics.",
    },
  ];

  const benefits = [
    "Reduce asset tracking time by 75%",
    "Prevent software license violations",
    "Optimize hardware utilization rates",
    "Automated depreciation calculations",
    "Complete asset lifecycle visibility",
    "Mobile scanning for quick audits",
    "Integration with procurement systems",
    "Reduce IT asset costs by 30%",
  ];

  return (
    <FeaturePageLayout
      title="Assets"
      subtitle="Track what matters"
      description="Gain complete visibility and control over your IT assets with comprehensive tracking, lifecycle management, and compliance reporting."
      heroImage={assetsHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Assets;
