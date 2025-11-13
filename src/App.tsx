import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CRM from "./pages/features/CRM";
import Accounting from "./pages/features/Accounting";
import Project from "./pages/features/Project";
import EmailMarketing from "./pages/features/EmailMarketing";
import Tickets from "./pages/features/Tickets";
import Assets from "./pages/features/Assets";
import Subscriptions from "./pages/features/Subscriptions";
import Updates from "./pages/features/Updates";
import Monitoring from "./pages/features/Monitoring";
import Compliance from "./pages/features/Compliance";
import Reports from "./pages/features/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/crm" element={<CRM />} />
          <Route path="/features/accounting" element={<Accounting />} />
          <Route path="/features/project" element={<Project />} />
          <Route path="/features/email-marketing" element={<EmailMarketing />} />
          <Route path="/features/tickets" element={<Tickets />} />
          <Route path="/features/assets" element={<Assets />} />
          <Route path="/features/subscriptions" element={<Subscriptions />} />
          <Route path="/features/updates" element={<Updates />} />
          <Route path="/features/monitoring" element={<Monitoring />} />
          <Route path="/features/compliance" element={<Compliance />} />
          <Route path="/features/reports" element={<Reports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
