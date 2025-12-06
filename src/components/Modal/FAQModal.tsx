import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Plus, X } from "lucide-react";
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

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
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

export function FAQModal({ open, onOpenChange }: FAQModalProps, { isOpen, onClose, onContactClick }: ServicesDropdownProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  

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

            {isContactOpen && (
                    <>
                      {/* Overlay */}
                      <div 
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        onClick={() => setIsContactOpen(false)}
                      />
            
                      {/* Modal - Desktop (centered) / Mobile (bottom sheet) */}
                      <div 
                        className="fixed left-0 right-0 bottom-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:w-[400px] w-full bg-white md:rounded-2xl rounded-t-3xl shadow-xl z-50 overflow-hidden border-t md:border border-gray-200 max-h-[50vh] md:max-h-auto"
                      >
                        <div className="p-6">
                          {/* Close button for mobile */}
                          <button 
                            onClick={() => setIsContactOpen(false)}
                            className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X size={20} className="text-gray-600" />
                          </button>
            
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            What do you want?
                          </h3>
            
                          <div className="space-y-4">
                            {/* Phone Call Option */}
                            <a
                              href="tel:+2348070832810"
                              className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                            >
                              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16.7561 10.3905C16.4609 10.3905 16.2145 10.2912 16.0169 10.0927C15.8192 9.89425 15.7204 9.64825 15.7204 9.35475C15.7204 9.05775 15.8188 8.81083 16.0156 8.614C16.2124 8.41717 16.4583 8.31875 16.7531 8.31875C17.0464 8.31875 17.2919 8.41717 17.4896 8.614C17.6873 8.81083 17.7861 9.05675 17.7861 9.35175C17.7861 9.64658 17.6874 9.89342 17.4899 10.0922C17.2925 10.2911 17.0479 10.3905 16.7561 10.3905ZM19.8861 21.1487C17.9284 21.1487 15.9366 20.6781 13.9106 19.7367C11.8844 18.7954 10.006 17.4594 8.27536 15.7287C6.54486 13.9982 5.20794 12.1189 4.26461 10.0907C3.32128 8.06275 2.84961 6.07192 2.84961 4.11825C2.84961 3.75642 2.97103 3.45358 3.21386 3.20975C3.45653 2.96575 3.75794 2.84375 4.11811 2.84375L7.61811 2.84375C7.91928 2.84375 8.17211 2.94008 8.37661 3.13275C8.58111 3.32525 8.72269 3.57842 8.80136 3.89225L9.47461 6.9375C9.51711 7.22467 9.51153 7.481 9.45786 7.7065C9.40419 7.93217 9.29286 8.1255 9.12386 8.2865L6.60561 10.77C7.02294 11.4713 7.46536 12.1267 7.93286 12.7362C8.40019 13.3456 8.91953 13.9257 9.49086 14.4765C10.0917 15.0978 10.7188 15.66 11.3721 16.163C12.0256 16.6662 12.7074 17.1057 13.4176 17.4817L15.8224 15.014C16.017 14.8027 16.2399 14.6597 16.4909 14.585C16.742 14.5105 16.9954 14.4978 17.2509 14.547L20.1061 15.1792C20.4199 15.2657 20.6731 15.4253 20.8656 15.658C21.0583 15.8907 21.1546 16.1611 21.1546 16.4692V19.8802C21.1546 20.2426 21.0325 20.5446 20.7884 20.7862C20.5442 21.0279 20.2434 21.1487 19.8861 21.1487Z"
                                    fill="#030712"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  Make phone call
                                </p>
                                <p className="text-sm text-gray-600">
                                  +234 807 083 2810
                                </p>
                              </div>
                            </a>
            
                            {/* WhatsApp Option */}
                            <a
                              href="https://wa.me/2348070832810"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
                            >
                              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M5.84961 18.1487L3.30411 20.6943C3.03478 20.9636 2.72503 21.0257 2.37486 20.8805C2.02469 20.7355 1.84961 20.4765 1.84961 20.1035L1.84961 3.553C1.84961 3.09133 2.01853 2.69108 2.35636 2.35225C2.69403 2.01325 3.09286 1.84375 3.55286 1.84375L20.4454 1.84375C20.907 1.84375 21.3073 2.01325 21.6461 2.35225C21.9851 2.69108 22.1546 3.09133 22.1546 3.553L22.1546 16.4455C22.1546 16.9055 21.9851 17.3043 21.6461 17.642C21.3073 17.9798 20.907 18.1487 20.4454 18.1487L5.84961 18.1487Z"
                                    fill="#030712"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  Whatsapp message
                                </p>
                                <p className="text-sm text-gray-600">
                                  +234 807 083 2810
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

            {/* Footer */}
            <div className="mt-8 sm:mt-[19px] text-center px-2 pb-2">
              <p className="text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg inline">
                You still have questions?{" "}
              </p>
              <a
                href="#"
                onClick={() => {
                  // e.preventDefault();
                  // onContactClick();
                  setIsContactOpen(true)
                }}
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