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
      <DialogContent className="...existing classes... scrollbar-hide max-w-4xl w-[95vw] sm:w-[90vw] md:w-full max-h-[90vh] p-0 m-2 overflow-y-auto overflow-x-hidden border-[8px] sm:border-[12px] border-[#00A4A4] rounded-[24px] mr-6 md:mr-0 sm:rounded-[32px] bg-white">
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
            {/* Heading */}
            <DialogHeader className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8 px-2">
              <p className="text-[#008080] text-sm sm:text-base md:text-lg font-['Gill_Sans_MT',sans-serif]">
                Hello there! We are still
              </p>
              <DialogTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight">
                <span className="text-[#008080]">Cooking our </span>
                <span className="text-[#FF9801]">Website</span>
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base md:text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] max-w-2xl mx-auto px-2">
                We are going to launch very soon. For now Subscribe to our Newsletter to get the
                latest Financial Market Updates.
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 sm:space-y-8 px-2">
              {/* Interest Selection */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-center text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base md:text-lg px-2">
                  Which Financial Market interest you the most?
                </p>
                {/* <div className="space-y-3 sm:space-y-4"> */}
                  {/* Mobile: Single column, Desktop: Two rows */}
                  {/* <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                    {interests.slice(0, 4).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "w-full sm:w-auto px-3 sm:px-4 h-10 sm:h-11 rounded-lg sm:rounded-xl border font-['Gill_Sans_MT',sans-serif] text-xs sm:text-sm transition-all",
                          selectedInterests.includes(interest)
                            ? "border-[#00A4A4] bg-[#00A4A4]/10 text-[#00A4A4]"
                            : "border-[#030712]/20 text-[#030712] hover:border-[#00A4A4]/50"
                        )}
                      >
                        {interest}
                      </button>
                    ))}
                  </div> */}
                  {/* <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                    {interests.slice(4).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "w-full sm:w-auto px-3 sm:px-4 h-10 sm:h-11 rounded-lg sm:rounded-xl border font-['Gill_Sans_MT',sans-serif] text-xs sm:text-sm transition-all",
                          selectedInterests.includes(interest)
                            ? "border-[#00A4A4] bg-[#00A4A4]/10 text-[#00A4A4]"
                            : "border-[#030712]/20 text-[#030712] hover:border-[#00A4A4]/50"
                        )}
                      >
                        {interest}
                      </button>
                    ))}
                  </div> */}
                {/* </div> */}
              </div>

              {/* Asset Classes Input */}
              <div className="relative pb-2">
                <input
                  type="text"
                  placeholder="Enter your Asset Class..."
                  value=''
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 pr-28 sm:pr-48 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base placeholder:text-[#030712]/60 focus:outline-none focus:border-[#00A4A4]"
                  required
                />
                {/* <button
                  type="submit"
                  className="absolute right-1 top-1 h-9 sm:h-10 px-3 sm:px-5 bg-[#FF9801] hover:bg-[#FF9801]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-1 sm:gap-3 transition-colors text-xs sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Subscribe Now</span>
                  <span className="sm:hidden">Subscribe</span>
                </button> */}
              </div>

              {/* Email Input */}
              <div className="relative pb-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 sm:h-12 px-3 sm:px-4 pr-28 sm:pr-48 rounded-lg border-2 border-black/15 font-['Gill_Sans_MT',sans-serif] text-sm sm:text-base placeholder:text-[#030712]/60 focus:outline-none focus:border-[#00A4A4]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-9 sm:h-10 px-3 sm:px-5 bg-[#FF9801] hover:bg-[#FF9801]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] flex items-center gap-1 sm:gap-3 transition-colors text-xs sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Subscribe Now</span>
                  <span className="sm:hidden">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}