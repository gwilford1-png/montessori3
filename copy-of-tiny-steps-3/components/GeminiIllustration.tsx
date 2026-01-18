import React, { useMemo } from 'react';
import { Brain, Heart, Activity, Sparkles, MessageCircle, Wrench, Shapes } from 'lucide-react';

interface GeminiIllustrationProps {
  title: string;
  category?: string;
  context?: string;
  imagePrompt?: string;
  className?: string;
}

/**
 * GeminiIllustration - Refined for Modern Kinedu Aesthetic
 */
const GeminiIllustration: React.FC<GeminiIllustrationProps> = ({ title, category, className }) => {
  const FallbackIcon = useMemo(() => {
    switch (category) {
      case 'Physical': return Activity;
      case 'Cognitive': return Brain;
      case 'Social': return Heart;
      case 'Sensory': return Sparkles;
      case 'Language': return MessageCircle;
      case 'Practical Life': return Wrench;
      default: return Shapes;
    }
  }, [category]);

  return (
    <div className={`flex flex-col items-center justify-center gap-2 p-4 ${className}`}>
      <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-500">
        <FallbackIcon size={32} strokeWidth={1.5} className="text-[#007AFF]" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[9px] font-bold uppercase tracking-widest text-center text-slate-400">
          {category || 'Activity'}
        </span>
        <div className="w-4 h-0.5 bg-slate-100 mt-1 rounded-full"></div>
      </div>
    </div>
  );
};

export default GeminiIllustration;