import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface BetaTesterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BetaTesterModal({ open, onOpenChange }: BetaTesterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="my-[50px] max-w-3xl scale-y-1 p-0 mt-2 mb-2 overflow-y-auto scrollbar-hide border-[12px] border-[#00A4A4] rounded-[32px] bg-white">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/beta-early-access-banner.png"
            alt="Growtt Early Access — Beta Testing Programme"
            className="w-full max-h-[420px] object-cover"
          />

          <div className="px-6 sm:px-10 py-8 space-y-6">
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-3xl sm:text-4xl font-bold font-['Gill_Sans_MT',sans-serif] leading-tight">
                <span className="text-[#008080]">Join our </span>
                <span className="text-[#FF9801]">Beta Testing </span>
                <span className="text-[#008080]">Programme</span>
              </DialogTitle>
              <DialogDescription className="text-base sm:text-lg text-[#008080]/60 font-['Gill_Sans_MT',sans-serif] max-w-xl mx-auto">
                Be among the first to try Growtt before launch. Get early
                access, help shape the product with your feedback, and join a
                community building a better way to invest.
              </DialogDescription>
            </DialogHeader>

            <Link
              to="/beta-testing"
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white rounded-lg font-['Gill_Sans_MT',sans-serif] text-base font-semibold transition-colors"
            >
              Join Beta Testers
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
