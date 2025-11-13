import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface Feature {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface FeaturePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: Feature[];
  useCases: UseCase[];
  benefits: string[];
}

export const FeaturePageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  useCases,
  benefits,
}: FeaturePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground">bizflow</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-sm font-medium">
                Sign in
              </Button>
              <Button className="text-sm font-medium bg-primary hover:bg-primary/90">
                Try it free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-2xl sm:text-3xl font-handwritten text-accent mb-6">{subtitle}</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
                Start free trial
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                Watch demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
            <img src={heroImage} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose {title}?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses already using {title} to streamline their operations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
              Start free trial
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-bold text-foreground">bizflow</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2025 bizflow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
