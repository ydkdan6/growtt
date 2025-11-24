import "./global.css";
import { Toaster } from "./components/ui/toaster";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "././components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/apiContext";
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
import OnboardingStep6 from "./pages/Onboarding/OnboardingStep6";
import OnboardingStep7 from "./pages/Onboarding/OnboardingStep7";
import OnboardingStep8 from "./pages/Onboarding/OnboardingStep8";
import OnboardingStep9 from "./pages/Onboarding/OnboardingStep9";
import OnboardingStep10 from "./pages/Onboarding/OnboardingStep10";
import OnboardingStep11 from "./pages/Onboarding/OnboardingStep11";
import OnboardingStep12 from "./pages/Onboarding/OnboardingStep12";
import OnboardingStep13 from "./pages/Onboarding/OnboardingStep13";
import OnboardingInitial from "./pages/Onboarding/Onboarding";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ApiProvider>
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
          <Route path="/Onboarding/step6" element={<OnboardingStep6 />} />
          <Route path="/Onboarding/step7" element={<OnboardingStep7 />} />
          <Route path="/Onboarding/step8" element={<OnboardingStep8 />} />
          <Route path="/Onboarding/step9" element={<OnboardingStep9 />} />
          <Route path="/Onboarding/step10" element={<OnboardingStep10 />} />
          <Route path="/Onboarding/step11" element={<OnboardingStep11 />} />
          <Route path="/Onboarding/step12" element={<OnboardingStep12 />} />
          <Route path="/Onboarding/step13" element={<OnboardingStep13 />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ApiProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
