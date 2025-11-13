import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline with mixed typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            All your business on{" "}
            <span className="relative inline-block">
              <span className="font-handwritten text-6xl sm:text-7xl lg:text-8xl relative z-10">
                one platform.
              </span>
              <span className="absolute inset-0 bg-accent/30 -skew-x-3 transform translate-y-2 -z-0 rounded-lg"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-handwritten mb-12 text-foreground/90">
            Simple, efficient, yet affordable!
          </p>

          {/* CTAs and pricing annotation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90">
              Start now - it's free
            </Button>
            <Button size="lg" variant="secondary" className="text-base px-8 py-6">
              Meet an advisor
            </Button>
          </div>

          {/* Pricing annotation with handwritten style and arrow */}
          <div className="relative inline-block">
            <div className="flex items-center gap-2">
              <ArrowDown className="h-12 w-12 text-foreground/60 transform rotate-[-30deg] animate-bounce" />
              <div className="font-handwritten text-2xl sm:text-3xl text-foreground/80">
                <span className="text-accent font-bold text-3xl sm:text-4xl">$24.90</span> / month
                <br />
                <span className="text-xl">for ALL apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event banner */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🇺🇸</div>
                <div>
                  <p className="font-semibold text-foreground">Project Management - San Francisco, CA</p>
                  <p className="text-sm text-muted-foreground">Nov 14, 2025</p>
                </div>
              </div>
              <Button variant="outline" className="whitespace-nowrap">
                Register →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
