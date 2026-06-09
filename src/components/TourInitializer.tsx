import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTour } from "../context/TourContext";

const DASHBOARD_ROUTES = ["/dashboard", "/invest", "/learn", "/growttai", "/profile"];

export function TourInitializer() {
  const { startTour } = useTour();
  const { pathname } = useLocation();

  useEffect(() => {
    const isDashboard = DASHBOARD_ROUTES.some((r) => pathname.startsWith(r));
    if (!isDashboard) return;
    const t = setTimeout(() => startTour(), 900);
    return () => clearTimeout(t);
  }, [pathname, startTour]);

  return null;
}
