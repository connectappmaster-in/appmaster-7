import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import accountingHeroImage from "@/assets/accounting-hero.png";

const Accounting = () => {
  const features = [
    {
      title: "Invoice Management",
      description: "Create, send, and track professional invoices with automated payment reminders and online payment options.",
    },
    {
      title: "Expense Tracking",
      description: "Capture and categorize expenses automatically with receipt scanning and bank feed integration.",
    },
    {
      title: "Financial Reporting",
      description: "Generate comprehensive financial statements including P&L, balance sheets, and cash flow reports in real-time.",
    },
    {
      title: "Bank Reconciliation",
      description: "Automatically match transactions with bank statements to keep your books accurate and up-to-date.",
    },
    {
      title: "Tax Compliance",
      description: "Stay compliant with automatic tax calculations, VAT tracking, and tax return preparation support.",
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international transactions with automatic currency conversion and exchange rate updates.",
    },
  ];

  const useCases = [
    {
      title: "Small Business Bookkeeping",
      description: "Simplify bookkeeping for small businesses with automated invoicing, expense tracking, and financial reporting. No accounting degree required.",
    },
    {
      title: "Freelancer Finance Management",
      description: "Track income, expenses, and taxes easily as a freelancer. Generate professional invoices and get paid faster with online payment integration.",
    },
    {
      title: "E-commerce Accounting",
      description: "Manage online store finances with integrated inventory tracking, multi-channel sales reconciliation, and automated tax calculations.",
    },
    {
      title: "Non-Profit Financial Management",
      description: "Track donations, grants, and expenses with fund accounting features. Generate reports for donors and regulatory compliance.",
    },
  ];

  const benefits = [
    "Save up to 10 hours per week on bookkeeping",
    "Reduce accounting errors by 90%",
    "Get paid 2x faster with online invoicing",
    "Real-time financial visibility",
    "Automatic tax calculations and filing",
    "Bank-level security for your data",
    "Collaborate with your accountant in real-time",
    "Scale from startup to enterprise",
  ];

  return (
    <FeaturePageLayout
      title="Accounting"
      subtitle="Financial clarity made simple"
      description="Take control of your finances with comprehensive accounting tools that automate bookkeeping, streamline invoicing, and provide real-time insights."
      heroImage={accountingHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Accounting;
