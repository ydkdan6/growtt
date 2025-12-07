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
    const [focus, setFocus] = useState("wailtist");
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
    <Dialog open={open} onOpenChange={onOpenChange}>
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

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xl relative">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 pr-44 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-black/60 focus:outline-none focus:border-[#00A4A4]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-10 px-5 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-3 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Get Notified
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
