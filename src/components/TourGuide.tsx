import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTour } from "../context/TourContext";

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface TooltipPos {
  top: number;
  left: number;
}

const TOOLTIP_W = 300;
const TOOLTIP_H = 210;
const PAD = 10;

export function TourGuide() {
  const { active, step, totalSteps, currentStep, next, prev, skip } = useTour();
  const navigate = useNavigate();
  const location = useLocation();
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPos>({ top: 0, left: 0 });
  const rafRef = useRef<number | null>(null);
  const retryRef = useRef(0);

  const computeTooltip = useCallback(
    (rect: DOMRect): TooltipPos => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const pref = currentStep.position;
      const centeredLeft = Math.min(
        Math.max(rect.left + rect.width / 2 - TOOLTIP_W / 2, 12),
        vw - TOOLTIP_W - 12
      );

      if (pref === "bottom" && rect.bottom + TOOLTIP_H + 20 < vh) {
        return { top: rect.bottom + PAD + 12, left: centeredLeft };
      }
      if (rect.top - TOOLTIP_H - 20 > 0) {
        return { top: rect.top - TOOLTIP_H - PAD - 12, left: centeredLeft };
      }
      if (pref === "left" && rect.left - TOOLTIP_W - 20 > 0) {
        return {
          top: Math.min(Math.max(rect.top + rect.height / 2 - TOOLTIP_H / 2, 12), vh - TOOLTIP_H - 12),
          left: rect.left - TOOLTIP_W - PAD - 12,
        };
      }
      if (rect.right + TOOLTIP_W + 20 < vw) {
        return {
          top: Math.min(Math.max(rect.top + rect.height / 2 - TOOLTIP_H / 2, 12), vh - TOOLTIP_H - 12),
          left: rect.right + PAD + 12,
        };
      }
      // Fallback: float above center
      return { top: Math.max(rect.top - TOOLTIP_H - PAD - 12, 12), left: centeredLeft };
    },
    [currentStep.position]
  );

  const positionOn = useCallback(
    (el: Element) => {
      const rect = el.getBoundingClientRect();
      setTargetRect({
        top: rect.top - PAD,
        left: rect.left - PAD,
        width: rect.width + PAD * 2,
        height: rect.height + PAD * 2,
      });
      setTooltipPos(computeTooltip(rect));
    },
    [computeTooltip]
  );

  useEffect(() => {
    if (!active) {
      setTargetRect(null);
      return;
    }

    if (location.pathname !== currentStep.route) {
      setTargetRect(null);
      navigate(currentStep.route);
      return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    retryRef.current = 0;
    setTargetRect(null);

    const seek = () => {
      const el = document.querySelector(currentStep.selector);
      if (!el) {
        if (retryRef.current < 80) {
          retryRef.current++;
          rafRef.current = requestAnimationFrame(seek);
        }
        return;
      }
      const rect = el.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (!inView) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => positionOn(el), 550);
        return;
      }
      positionOn(el);
    };

    // Small delay to let page paint after navigation
    const t = setTimeout(() => {
      rafRef.current = requestAnimationFrame(seek);
    }, 120);

    return () => {
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, step, location.pathname, currentStep, navigate, positionOn]);

  if (!active) return null;

  return (
    <>
      {/* Click shield — blocks background interaction during tour */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 9990 }}
        onClick={(e) => e.stopPropagation()}
      />

      <AnimatePresence>
        {targetRect && (
          <>
            {/* Spotlight ring — box-shadow darkens everything outside the element */}
            <motion.div
              key={`spotlight-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed pointer-events-none"
              style={{
                zIndex: 9991,
                top: targetRect.top,
                left: targetRect.left,
                width: targetRect.width,
                height: targetRect.height,
                borderRadius: 16,
                boxShadow:
                  "0 0 0 9999px rgba(3,7,18,0.62), 0 0 0 2px #00A4A4, 0 0 28px rgba(0,164,164,0.5)",
              }}
            />

            {/* Tooltip card */}
            <motion.div
              key={`tooltip-${step}`}
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed"
              style={{
                zIndex: 9992,
                top: tooltipPos.top,
                left: tooltipPos.left,
                width: TOOLTIP_W,
              }}
            >
              <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden">
                {/* Brand accent bar */}
                <div className="h-[3px] bg-gradient-to-r from-[#008080] via-[#00A4A4] to-[#FF9800]" />

                <div className="px-5 pt-4 pb-5">
                  {/* Progress dots + skip */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: i === step ? 16 : 5,
                            height: 5,
                            background:
                              i === step
                                ? "#008080"
                                : i < step
                                ? "#00A4A4"
                                : "#e5e7eb",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={skip}
                      className="text-[11px] text-gray-400 hover:text-gray-500 font-['Gill_Sans_MT',sans-serif] transition-colors leading-none"
                    >
                      Skip tour
                    </button>
                  </div>

                  {/* Step label */}
                  <p className="text-[10px] font-bold text-[#FF9800] uppercase tracking-[0.1em] mb-1 font-['Gill_Sans_MT',sans-serif]">
                    Step {step + 1} of {totalSteps}
                  </p>

                  {/* Title */}
                  <h3 className="text-[#008080] font-bold text-[15px] font-['Gill_Sans_MT',sans-serif] mb-1.5 leading-snug">
                    {currentStep.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[12.5px] font-['Gill_Sans_MT',sans-serif] leading-relaxed mb-4">
                    {currentStep.description}
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prev}
                      disabled={step === 0}
                      className="text-[13px] text-[#008080] font-semibold font-['Gill_Sans_MT',sans-serif] disabled:opacity-25 hover:text-[#00A4A4] transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={next}
                      className="flex items-center gap-1 px-5 py-2 bg-[#008080] hover:bg-[#00A4A4] active:scale-95 text-white text-[13px] rounded-xl font-['Gill_Sans_MT',sans-serif] font-semibold transition-all"
                    >
                      {step === totalSteps - 1 ? "Done ✓" : "Next →"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Subtle full-screen dim while navigating between pages */}
      <AnimatePresence>
        {!targetRect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            style={{ zIndex: 9991 }}
          >
            <div className="w-8 h-8 border-[3px] border-[#00A4A4] border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
