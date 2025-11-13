import { FeaturePageLayout } from "@/components/FeaturePageLayout";
import complianceHeroImage from "@/assets/compliance-hero.png";

const Compliance = () => {
  const features = [
    {
      title: "Policy Management",
      description: "Create, distribute, and enforce security policies across your organization with automated compliance checking.",
    },
    {
      title: "Audit Trail",
      description: "Maintain comprehensive audit logs of all system changes, access attempts, and user activities for compliance reporting.",
    },
    {
      title: "Security Assessments",
      description: "Conduct regular security audits and vulnerability assessments with automated scanning and risk scoring.",
    },
    {
      title: "Regulatory Compliance",
      description: "Meet GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory requirements with pre-built compliance frameworks.",
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate security risks with risk registers, impact analysis, and remediation tracking.",
    },
    {
      title: "Compliance Reporting",
      description: "Generate compliance reports and evidence packages for auditors with customizable templates and automated data collection.",
    },
  ];

  const useCases = [
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with GDPR, HIPAA, SOC 2, and other regulations. Track compliance status, manage documentation, and prepare for audits with confidence.",
    },
    {
      title: "Security Audits",
      description: "Conduct internal and external security audits with comprehensive checklists, evidence collection, and automated compliance checking for continuous security assurance.",
    },
    {
      title: "Policy Enforcement",
      description: "Implement and enforce security policies across your organization. Monitor compliance, track exceptions, and ensure consistent application of security standards.",
    },
    {
      title: "Risk Assessment",
      description: "Identify and assess security risks with risk scoring, impact analysis, and remediation tracking to maintain a strong security posture.",
    },
  ];

  const benefits = [
    "Reduce audit preparation time by 70%",
    "Continuous compliance monitoring",
    "Automated policy enforcement",
    "Complete audit trail for all activities",
    "Pre-built compliance frameworks",
    "Risk-based approach to security",
    "Evidence collection automation",
    "Multi-framework compliance support",
  ];

  return (
    <FeaturePageLayout
      title="Compliance"
      subtitle="Stay compliant with confidence"
      description="Simplify compliance management with automated policy enforcement, continuous monitoring, and comprehensive audit reporting."
      heroImage={complianceHeroImage}
      features={features}
      useCases={useCases}
      benefits={benefits}
    />
  );
};

export default Compliance;
