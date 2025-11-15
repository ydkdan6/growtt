import "./global.css";
import { Toaster } from "./components/ui/toaster";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "././components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Verify from "./pages/Auth/Verify";
import OnboardingStep1 from "./pages/Onboarding/OnboardingStep1";
import OnboardingStep2 from "./pages/Onboarding/OnboardingStep2";
import OnboardingStep3 from "./pages/Onboarding/OnboardingStep3";
import OnboardingStep4 from "./pages/Onboarding/OnboardingStep4";
import OnboardingStep5 from "./pages/Onboarding/OnboardingStep5";
import OnboardingInitial from "./pages/Onboarding/Onboarding";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/onboarding" element={<OnboardingInitial />} />
          <Route path="/Onboarding/step1" element={<OnboardingStep1 />} />
          <Route path="/Onboarding/step2" element={<OnboardingStep2 />} />
          <Route path="/Onboarding/step3" element={<OnboardingStep3 />} />
          <Route path="/Onboarding/step4" element={<OnboardingStep4 />} />
          <Route path="/Onboarding/step5" element={<OnboardingStep5 />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
