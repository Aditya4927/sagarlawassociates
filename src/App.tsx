import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      {/* ✅ SEO only — DO NOT wrap layout */}
      <Helmet>
        <title>Sagar Law Associates | Trusted Legal Excellence</title>
        <meta
          name="description"
          content="Sagar Law Associates - Premier law firm offering expert legal services in civil litigation, corporate law, family law, property disputes, and criminal defense."
        />
        <link rel="canonical" href="https://www.sagarlawassociates.com/" />
      </Helmet>

      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;