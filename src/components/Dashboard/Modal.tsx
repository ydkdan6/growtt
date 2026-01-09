import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[462px] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const InfoModal = ({ isOpen, onClose, message }: InfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#008080] via-[#B38C00] to-[#FF9800] p-5 shadow-2xl">
        <div className="flex-1 text-center font-bold leading-6 text-white">
          {message}
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </Modal>
  );
};

export default Modal;
