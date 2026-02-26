import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <title>Sagar Law Associates | Trusted Legal Excellence</title>

        <meta
          name="description"
          content="Sagar Law Associates - Premier law firm offering expert legal services in civil litigation, corporate law, family law, property disputes, and criminal defense."
        />

        <link
          rel="canonical"
          href="https://www.sagarlawassociates.com/"
        />
      </Helmet>

      {/* EXISTING WEBSITE CONTENT BELOW */}
      <div>
        {/* your navbar, sections, footer etc */}
      </div>
    </>
  );
}
const queryClient = new QueryClient();

const App = () => (
  
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
