import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafetyModal: React.FC<SafetyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white rounded-[2.5rem] border border-slate-100 max-w-sm w-full p-10 relative animate-in zoom-in-95 duration-300 shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-blue-50 border border-blue-100 text-[#007AFF] rounded-[1.75rem] flex items-center justify-center mb-8 shadow-sm">
            <ShieldCheck size={40} strokeWidth={2} />
          </div>
          
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
            Our Philosophy
          </h3>
          
          <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8 italic">
            "Education is a natural process carried out by the child and is not acquired by listening to words but by experiences in the environment."
          </p>
          
          <div className="w-12 h-0.5 bg-slate-100 mb-8 rounded-full"></div>
          
          <p className="text-slate-300 leading-relaxed text-[10px] font-bold mb-10 uppercase tracking-[0.2em]">
            Curated via CDC & Montessori Standards.
          </p>

          <button
            onClick={onClose}
            className="w-full py-4 bg-[#007AFF] text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyModal;