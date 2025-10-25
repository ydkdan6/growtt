import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { GrowttLogo } from "../logo";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

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
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-[12px] border-[#00A4A4] rounded-[32px] bg-white">
        <div className="relative min-h-[600px] p-12">
          {/* Logo Badge */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#00A4A4] rounded-b-2xl px-4 py-3">
            <GrowttLogo />
          </div>

          {/* Decorative background circles */}
          <div className="absolute -left-20 -top-20 w-[276px] h-[276px] rounded-full bg-[#006666]/40 blur-[100px]" />
          <div className="absolute -right-20 -top-20 w-[276px] h-[276px] rounded-full bg-[#006666]/10 blur-[100px]" />
          <div className="absolute -left-10 -bottom-20 w-[276px] h-[276px] rounded-full bg-[#006666]/20 blur-[100px]" />
          <div className="absolute -left-40 top-32 w-[276px] h-[276px] rounded-full bg-[#FF9800]/60 blur-[100px]" />
          <div className="absolute -right-10 bottom-0 w-[276px] h-[276px] rounded-full bg-[#FF9800]/40 blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 pt-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Side - Header */}
              <div className="space-y-4">
                <DialogHeader className="space-y-4">
                  <DialogTitle className="text-5xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight text-left">
                    <span className="text-[#008080]">You got </span>
                    <span className="text-[#FF9801]">Questions?</span>
                  </DialogTitle>
                  <DialogDescription className="text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-left">
                    We've got the info you need to help you understand Growtt even better.
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Right Side - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-3 rounded-2xl border-4 border-[#F5F5F5] bg-white hover:border-[#00A4A4]/20 transition-colors text-left"
                    >
                      <span className="text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-lg">
                        {faq.question}
                      </span>
                      <Plus
                        className={cn(
                          "w-6 h-6 text-[#008080]/60 flex-shrink-0 transition-transform",
                          expandedIndex === index && "rotate-45"
                        )}
                      />
                    </button>
                    {expandedIndex === index && (
                      <div className="p-3 rounded-2xl border-4 border-[#F5F5F5] bg-white">
                        <p className="text-[#008080] font-['Gill_Sans_MT',sans-serif] text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <p className="text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-lg inline">
                You still have questions?{" "}
              </p>
              <a
                href="#"
                className="text-[#FF9801]/60 font-['Gill_Sans_MT',sans-serif] text-lg underline decoration-[#FF9801]/60 hover:text-[#FF9801] transition-colors"
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
