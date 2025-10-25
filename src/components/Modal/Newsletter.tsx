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
import { cn } from "../../lib/utils";

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const interests = [
  "Agro-Investments",
  "Real Estate Investments",
  "Commercial Papers",
  "Savings Bonds",
  "Female-Led Startups",
  "Club Deals",
  "High-Yield Savings",
];

export function NewsletterModal({ open, onOpenChange }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { email, interests: selectedInterests });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 m-2 overflow-hidden border-[12px] border-[#00A4A4] rounded-[32px] bg-white">
        <div className="relative min-h-[10px] p-6">
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
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[0px] pt-16">
            {/* Heading */}
            <DialogHeader className="text-center space-y-0 mb-8">
              <p className="text-[#008080] text-lg font-['Gill_Sans_MT',sans-serif]">
                Hello there! We are still
              </p>
              <DialogTitle className="text-5xl sm:text-6xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight">
                <span className="text-[#008080]">Cooking our </span>
                <span className="text-[#FF9801]">Website</span>
              </DialogTitle>
              <DialogDescription className="text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] max-w-2xl mx-auto">
                We are going to launch very soon. For now Subscribe to our Newsletter to get the
                latest Financial Market Updates.
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-8">
              {/* Interest Selection */}
              <div className="space-y-6">
                <p className="text-center text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-lg">
                  Which Financial Market interest you the most? (Select one or more)
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {interests.slice(0, 4).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "px-4 h-11 rounded-xl border font-['Gill_Sans_MT',sans-serif] text-sm transition-all",
                          selectedInterests.includes(interest)
                            ? "border-[#00A4A4] bg-[#00A4A4]/10 text-[#00A4A4]"
                            : "border-[#030712]/20 text-[#030712] hover:border-[#00A4A4]/50"
                        )}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {interests.slice(4).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "px-4 h-11 rounded-xl border font-['Gill_Sans_MT',sans-serif] text-sm transition-all",
                          selectedInterests.includes(interest)
                            ? "border-[#00A4A4] bg-[#00A4A4]/10 text-[#00A4A4]"
                            : "border-[#030712]/20 text-[#030712] hover:border-[#00A4A4]/50"
                        )}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 pr-48 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-base placeholder:text-[#030712]/60 focus:outline-none focus:border-[#00A4A4]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-10 px-5 bg-[#FF9801] hover:bg-[#FF9801]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-3 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
