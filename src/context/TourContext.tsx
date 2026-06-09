import { createContext, useContext, useState, ReactNode } from "react";

const TOUR_KEY = "growtt_tour_completed";

export const tourSteps = [
  {
    id: "seeds",
    title: "Your Seeds Balance",
    description:
      "Seeds are your learning currency on Growtt. Earn them by completing lessons — then spend them to unlock AI insights, custom portfolios, and premium investment opportunities.",
    selector: "[data-tour='seeds']",
    route: "/profile",
    position: "top" as const,
  },
  {
    id: "profile",
    title: "Your Profile",
    description:
      "View your wallet balance, account tier, and KYC status. Update personal details, manage preferences, and control everything about your account from here.",
    selector: "[data-tour='profile-header']",
    route: "/profile",
    position: "bottom" as const,
  },
  {
    id: "news",
    title: "News & Learning Resources",
    description:
      "Stay sharp with curated investment news, market commentary, and hand-picked learning resources — updated regularly and tailored to your interests.",
    selector: "[data-tour='learning-resources']",
    route: "/dashboard",
    position: "left" as const,
  },
  {
    id: "learn-lessons",
    title: "Lessons & Learning Tracks",
    description:
      "Follow expert-designed tracks and structured lessons to build your investment knowledge step by step. Track your progress and pick up exactly where you left off.",
    selector: "[data-tour='learn-progress']",
    route: "/learn",
    position: "bottom" as const,
  },
  {
    id: "invest-portfolio",
    title: "Your Investment Portfolio",
    description:
      "Monitor your total portfolio value, asset allocation, and performance — all in one real-time view so you always know where you stand.",
    selector: "[data-tour='invest-portfolio']",
    route: "/invest",
    position: "bottom" as const,
  },
  {
    id: "invest-assets",
    title: "Browse & Purchase Assets",
    description:
      "Explore a diverse range of investment opportunities — from government bonds to alternative deals — and invest directly with just a few steps.",
    selector: "[data-tour='invest-filters']",
    route: "/invest",
    position: "bottom" as const,
  },
];

export type TourStepType = (typeof tourSteps)[number];

interface TourContextType {
  active: boolean;
  step: number;
  totalSteps: number;
  currentStep: TourStepType;
  next: () => void;
  prev: () => void;
  skip: () => void;
  startTour: () => void;
}

const TourContext = createContext<TourContextType | null>(null);

export function TourProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  const complete = () => {
    setActive(false);
    localStorage.setItem(TOUR_KEY, "true");
  };

  const startTour = () => {
    if (localStorage.getItem(TOUR_KEY) === "true") return;
    if (active) return;
    setStep(0);
    setActive(true);
  };

  const next = () => {
    if (step < tourSteps.length - 1) {
      setStep((s) => s + 1);
    } else {
      complete();
    }
  };

  const prev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  return (
    <TourContext.Provider
      value={{
        active,
        step,
        totalSteps: tourSteps.length,
        currentStep: tourSteps[step],
        next,
        prev,
        skip: complete,
        startTour,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export const useTour = () => {
  const ctx = useContext(TourContext);
  if (!ctx) throw new Error("useTour must be used within TourProvider");
  return ctx;
};
