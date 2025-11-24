import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { GrowttLogo } from "../logo";
import { Mail, Check, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { useApi } from "../../context/apiContext";
import type { ApiError } from "../../services/apiClient";

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewsletterModal({ open, onOpenChange }: NewsletterModalProps) {
  const { api } = useApi();
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setEmail("");
    setFocus("");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!email || !focus) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.addNewsletterSubscriber({
        email: email.trim(),
        asset_class: focus.trim(),
      });

      // Show thank you message
      setShowThankYou(true);
      resetForm();

      // Auto close after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        onOpenChange(false);
      }, 3000);

    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || "Failed to subscribe. Please try again.");
      console.error("Newsletter subscription error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!loading) {
      onOpenChange(open);
      if (!open) {
        // Reset form when modal closes
        setTimeout(resetForm, 300);
        setShowThankYou(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="scrollbar-hide max-w-4xl w-[95vw] sm:w-[90vw] md:w-full max-h-[90vh] p-0 m-2 overflow-y-auto overflow-x-hidden border-[8px] sm:border-[12px] border-[#00A4A4] rounded-[24px] mr-6 md:mr-0 sm:rounded-[32px] bg-white">
        <div className="relative min-h-[10px] p-4 sm:p-6 md:p-8 lg:p-12">
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
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[0px] pt-12 sm:pt-16 pb-4 sm:pb-0">
            {showThankYou ? (
              // Thank You Message
              <div className="text-center space-y-6 py-12 px-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#008080] font-['Gill_Sans_MT',sans-serif]">
                    Thank You!
                  </h3>
                  <p className="text-base sm:text-lg text-[#008080]/80 font-['Gill_Sans_MT',sans-serif] max-w-md mx-auto">
                    You've successfully subscribed to our newsletter. We'll keep you updated with the latest financial market insights.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Heading */}
                <DialogHeader className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 px-2">
                  <p className="text-center text-[#008080] text-sm sm:text-base md:text-lg font-['Gill_Sans_MT',sans-serif]">
                    Hello there! We are still
                  </p>
                  <DialogTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight">
                    <span className="text-[#008080]">Cooking our </span>
                    <span className="text-[#FF9801]">Website</span>
                  </DialogTitle>
                  <DialogDescription className="text-center text-sm sm:text-base md:text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] max-w-2xl mx-auto px-2">
                    We are going to launch very soon. For now Subscribe to our Newsletter to get the
                    latest Financial Market Updates.
                  </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 sm:space-y-8 px-2">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm sm:text-base font-['Gill_Sans_MT',sans-serif] animate-in fade-in duration-300">
                      {error}
                    </div>
                  )}

                  {/* Interest Selection */}
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-center text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg px-2">
                      What is your industry focus?
                    </p>
                  </div>

                  {/* Asset Classes Input */}
                  <div className="relative pb-2">
                    <input
                      type="text"
                      placeholder="Example: Oil & Gas"
                      value={focus}
                      onChange={(e) => setFocus(e.target.value)}
                      disabled={loading}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 pr-28 sm:pr-48 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base placeholder:text-[#030712]/60 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative pb-2">
                    <p className="text-center text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg px-2">
                      Enter your email here
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="mt-4 w-full h-11 sm:h-12 px-3 sm:px-4 pr-28 sm:pr-48 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base placeholder:text-[#030712]/60 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-1 top-10 md:top-12 h-9 sm:h-10 px-3 sm:px-5 bg-[#FF9801] hover:bg-[#FF9801]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-1 sm:gap-3 transition-colors text-xs sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          <span className="hidden sm:inline">Subscribing...</span>
                          <span className="sm:hidden">...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="hidden sm:inline">Subscribe Now</span>
                          <span className="sm:hidden">Subscribe</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}