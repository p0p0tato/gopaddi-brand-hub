import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AppAccentProvider } from "@/components/theme/AppAccentProvider";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Foundations from "./pages/Foundations.tsx";
import AppRoute from "./pages/AppRoute.tsx";
import Components from "./pages/Components.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import Downloads from "./pages/Downloads.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AppAccentProvider appKey={null}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/foundations" element={<Foundations />} />
                <Route path="/apps/:slug" element={<AppRoute />} />
                <Route path="/components" element={<Components />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </AppAccentProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
