import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Plans from "./pages/Plans";
import Support from "./pages/Support";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import TrackOrder from "./pages/TrackOrder";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Investors from "./pages/Investors";
import UnlimitedPlans from "./pages/UnlimitedPlans";
import Prepaid from "./pages/Prepaid";
import Business from "./pages/Business";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/unlimited-plans" element={<UnlimitedPlans />} />
          <Route path="/prepaid" element={<Prepaid />} />
          <Route path="/business" element={<Business />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
