import { 
  Calculator, 
  BookOpen, 
  PenTool, 
  Users, 
  Wrench, 
  ShoppingBag,
  MessageSquare,
  FileText,
  Zap,
  Calendar,
  Headphones,
  Globe,
  Heart,
  Send,
  TrendingUp,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  name: string;
  icon: React.ElementType;
  color: string;
}

const features: Feature[] = [
  { name: "Accounting", icon: Calculator, color: "bg-feature-purple" },
  { name: "Knowledge", icon: BookOpen, color: "bg-feature-blue" },
  { name: "Sign", icon: PenTool, color: "bg-feature-teal" },
  { name: "CRM", icon: Users, color: "bg-feature-pink" },
  { name: "Studio", icon: Wrench, color: "bg-feature-blue" },
  { name: "Subscriptions", icon: TrendingUp, color: "bg-feature-orange" },
  { name: "Rental", icon: Package, color: "bg-feature-purple" },
  { name: "Point of Sale", icon: ShoppingBag, color: "bg-feature-pink" },
  { name: "Discuss", icon: MessageSquare, color: "bg-feature-orange" },
  { name: "Documents", icon: FileText, color: "bg-feature-blue" },
  { name: "Project", icon: Zap, color: "bg-feature-teal" },
  { name: "Timesheets", icon: Calendar, color: "bg-feature-purple" },
  { name: "Field Service", icon: Zap, color: "bg-feature-orange" },
  { name: "Planning", icon: Calendar, color: "bg-feature-teal" },
  { name: "Helpdesk", icon: Headphones, color: "bg-feature-green" },
  { name: "Website", icon: Globe, color: "bg-feature-blue" },
  { name: "Social Marketing", icon: Heart, color: "bg-feature-pink" },
  { name: "Email Marketing", icon: Send, color: "bg-feature-purple" },
];

export const FeatureGrid = () => {
  return (
    <section id="apps" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`${feature.color} p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {feature.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies already using our platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
              Get started for free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              View all features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
