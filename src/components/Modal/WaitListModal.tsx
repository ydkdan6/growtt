import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { GrowttLogo } from "../logo";
import { Mail, Check, Loader2, AlertCircle } from "lucide-react";
import { useApi } from "../../context/apiContext";
import type { ApiError } from "../../services/apiClient";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribe: () => void;
}

export function WaitlistModal({ open, onOpenChange, onSubscribe }: WaitlistModalProps) {
  const { api } = useApi();
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("waitlist");
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const resetForm = () => {
    setEmail("");
    setFocus("waitlist");
    setError(null);
    setIsDuplicate(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !focus) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError(null);
    setIsDuplicate(false);

    try {
      await api.addNewsletterSubscriber({
        email: email.trim(),
        asset_class: focus.trim(),
      });

      setShowThankYou(true);
      resetForm();

      setTimeout(() => {
        setShowThankYou(false);
        onOpenChange(false);
      }, 3000);

    } catch (err) {
      const apiError = err as ApiError;
      
      // Check for duplicate email error
      const errorMessage = apiError.message?.toLowerCase() || '';
      const isDuplicateEmail = 
        errorMessage.includes('already subscribed') ||
        errorMessage.includes('already exists') ||
        errorMessage.includes('duplicate') ||
        errorMessage.includes('already registered') ||
        apiError.status === 409;

      if (isDuplicateEmail) {
        setIsDuplicate(true);
        setError("This email has already been submitted to our waitlist. We'll keep you updated!");
      } else {
        setError(apiError.message || "Failed to join waitlist. Please try again.");
      }
      
      console.error("Waitlist subscription error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!loading) {
      onOpenChange(open);
      if (!open) {
        setTimeout(resetForm, 300);
        setShowThankYou(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="my-[50px] max-w-2xl scale-y-1 p-0 mt-2 mb-2 overflow-y-auto scrollbar-hide border-[12px] border-[#00A4A4] rounded-[32px] bg-white">
        <div className="relative min-h-[10px] p-12">
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
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[40px] pt-16">
            {/* User Avatars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-[#008080]/60 text-lg font-['Gill_Sans_MT',sans-serif]">
                Join 1000+ others on the waitlist
              </span>
            </div>

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
                    You've successfully joined our Waitlist. We'll keep you updated with the latest financial market insights.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Heading */}
                <DialogHeader className="text-center space-y-6 mb-8">
                  <DialogTitle className="text-5xl sm:text-6xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight">
                    <span className="text-[#008080]">Join the </span>
                    <span className="text-[#FF9801]">Growtt </span>
                    <span className="text-[#008080]">Waitlist Today</span>
                  </DialogTitle>
                  <DialogDescription className="text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] max-w-xl">
                    Don't miss out. Get early access to Growtt's investment revolution.
                  </DialogDescription>
                </DialogHeader>

                {/* Error Message */}
                {error && (
                  <div className={`w-full max-w-xl mb-6 px-4 py-3 rounded-lg text-sm font-['Gill_Sans_MT',sans-serif] animate-in fade-in duration-300 flex items-start gap-2 ${
                    isDuplicate 
                      ? 'bg-blue-50 border border-blue-200 text-blue-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-xl relative">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="w-full h-12 px-4 pr-44 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-black/60 focus:outline-none focus:border-[#00A4A4] disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-1 top-1 h-10 px-5 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Get Notified
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