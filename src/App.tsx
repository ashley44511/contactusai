import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import { CausesPage } from "./pages/CausesPage";
import { EmailPage } from "./pages/EmailPage";
import RepresentativesPage  from "./pages/RepresentativesPage";
import { EmailBuilder } from "./pages/EmailBuilder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/representatives" element={<RepresentativesPage />} />
          <Route path="/submit" element={<EmailBuilder/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
