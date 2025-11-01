import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

const GrowttLogo = () => (
  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
    <text x="0" y="18" fill="white" fontSize="18" fontWeight="bold" fontFamily="Gill Sans MT, sans-serif">
      Growtt
    </text>
  </svg>
);

interface FAQModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const faqs = [
  {
    question: "What is Growtt?",
    answer:
      "Growtt is a platform that helps you discover and invest in real opportunities across Nigeria, from treasury bills to real estate, all in one place.",
  },
  {
    question: "Is my money safe on Growtt?",
    answer:
      "Yes! Growtt partners with trusted financial institutions and uses bank-level security to keep your funds and data protected.",
  },
  {
    question: "Do I need to be an expert to start investing?",
    answer:
      "Not at all! Growtt is built for beginners and professionals alike. You can learn, practice, and grow at your own pace using our Learning Path and AI tools.",
  },
];

export function FAQModal({ open, onOpenChange }: FAQModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2 ...existing classes... scrollbar-hide max-w-4xl w-[95vw] sm:w-[90vw] md:w-full max-h-[90vh] p-0 overflow-y-auto overflow-x-hidden border-[8px] sm:border-[12px] border-[#00A4A4] rounded-[24px] mr-6 md:mr-0 sm:rounded-[32px] bg-white">
        <div className="relative min-h-[10px] p-3 sm:p-6 md:p-8 lg:p-12 overflow-y-auto scrollbar-hide">
          {/* Logo Badge */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#00A4A4] rounded-b-xl sm:rounded-b-2xl px-3 py-2 sm:px-4 sm:py-3 z-20">
            <GrowttLogo />
          </div>

          {/* Decorative background circles - hidden on mobile for performance */}
          <div className="hidden sm:block absolute -left-20 -top-20 w-[276px] h-[276px] rounded-full bg-[#006666]/40 blur-[100px]" />
          <div className="hidden sm:block absolute -right-20 -top-20 w-[276px] h-[276px] rounded-full bg-[#006666]/10 blur-[100px]" />
          <div className="hidden sm:block absolute -left-10 -bottom-20 w-[276px] h-[276px] rounded-full bg-[#006666]/20 blur-[100px]" />
          <div className="hidden sm:block absolute -left-40 top-32 w-[276px] h-[276px] rounded-full bg-[#FF9800]/60 blur-[100px]" />
          <div className="hidden sm:block absolute -right-10 bottom-0 w-[276px] h-[276px] rounded-full bg-[#FF9800]/40 blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 pt-12 sm:pt-16 pb-4 sm:pb-0">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Left Side - Header */}
              <div className="space-y-3 sm:space-y-4 px-2">
                <DialogHeader className="space-y-3 sm:space-y-4">
                  <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight text-left">
                    <span className="text-[#008080]">You got </span>
                    <span className="text-[#FF9801]">Questions?</span>
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base md:text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-left">
                    We've got the info you need to help you understand Growtt even better.
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Right Side - FAQ Accordion */}
              <div className="space-y-3 sm:space-y-4 px-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[#F5F5F5] bg-white hover:border-[#00A4A4]/20 transition-colors text-left"
                    >
                      <span className="text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg">
                        {faq.question}
                      </span>
                      <Plus
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6 text-[#008080]/60 flex-shrink-0 transition-transform",
                          expandedIndex === index && "rotate-45"
                        )}
                      />
                    </button>
                    {expandedIndex === index && (
                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[#F5F5F5] bg-white">
                        <p className="text-[#008080] font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 sm:mt-[19px] text-center px-2 pb-2">
              <p className="text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg inline">
                You still have questions?{" "}
              </p>
              <a
                href="#"
                className="text-[#FF9801]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg underline decoration-[#FF9801]/60 hover:text-[#FF9801] transition-colors"
              >
                Contact our support team
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-[#00A4A4] text-white rounded-lg font-['Gill_Sans_MT',sans-serif] hover:bg-[#008080] transition-colors"
      >
        Open FAQ
      </button>
      <FAQModal open={open} onOpenChange={setOpen} />
    </div>
  );
}