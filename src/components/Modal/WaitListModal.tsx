import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { GrowttLogo } from "../logo";
import { Mail } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribe: () => void;
}

export function WaitlistModal({ open, onOpenChange, onSubscribe }: WaitlistModalProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubscribe();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" mr-[50px] max-w-2xl p-0 m-2 overflow-hidden border-[12px] border-[#00A4A4] rounded-[32px] bg-white">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
