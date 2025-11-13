import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground">bizflow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#apps" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Apps
            </a>
            <a href="#industries" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Industries
            </a>
            <a href="#community" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#help" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Help
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium">
              Sign in
            </Button>
            <Button className="text-sm font-medium bg-primary hover:bg-primary/90">
              Try it free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#apps" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md">
              Apps
            </a>
            <a href="#industries" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md">
              Industries
            </a>
            <a href="#community" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md">
              Community
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md">
              Pricing
            </a>
            <a href="#help" className="block px-3 py-2 text-base font-medium text-foreground hover:bg-secondary rounded-md">
              Help
            </a>
            <div className="flex flex-col gap-2 px-3 pt-4">
              <Button variant="outline" className="w-full">
                Sign in
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Try it free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
