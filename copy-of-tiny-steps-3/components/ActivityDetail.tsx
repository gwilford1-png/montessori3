
import React, { useState, useMemo, useEffect } from 'react';
import { Activity } from '../types';
import GeminiIllustration from './GeminiIllustration';
import { 
  ArrowLeft, 
  ShoppingBag, 
  ArrowRight, 
  Share2, 
  ChevronDown, 
  Clock, 
  Wrench, 
  Leaf 
} from 'lucide-react';

interface ActivityDetailProps {
  activity: Activity;
  activities?: Activity[];
  onSelectActivity?: (activity: Activity) => void;
}

interface ActivityDetailComponentProps extends ActivityDetailProps {
  onBack: () => void;
}

const ActivityDetail: React.FC<ActivityDetailComponentProps> = ({ 
  activity, 
  onBack, 
  activities = [], 
  onSelectActivity 
}) => {
  const [isPauseExpanded, setIsPauseExpanded] = useState(false);

  // Scroll to top when activity changes
  useEffect(() => {
    const container = document.querySelector('.activity-detail-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activity.id]);

  const primaryMaterial = activity.materials[0];

  const handleShare = async () => {
    const shareData = {
      title: `TinySteps: ${activity.title}`,
      text: `Check out this developmental activity for your little one: ${activity.title}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.debug('Sharing failed', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        alert('Could not copy link.');
      }
    }
  };

  const nextActivity = useMemo(() => {
    const currentIndex = activities.findIndex(a => a.id === activity.id);
    if (currentIndex !== -1 && currentIndex < activities.length - 1) {
      return activities[currentIndex + 1];
    }
    return null;
  }, [activities, activity.id]);

  return (
    <div className="activity-detail-container fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-[110] bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 h-14 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-all active:scale-95"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Back</span>
        </button>
        <div className="hidden sm:block">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Activity Guide</span>
        </div>
        <div className="w-8 sm:w-0"></div>
      </nav>

      <div className="max-w-xl mx-auto px-6 pt-6 pb-20">
        {/* Visual Header */}
        <div className="mb-6">
          <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-sage-50/40 border border-slate-100 mb-2">
            <GeminiIllustration 
              title={activity.title}
              category={activity.category}
              className="w-full h-full opacity-80 scale-90"
            />
          </div>
          <p className="text-[9px] text-slate-400 text-center font-medium uppercase tracking-widest italic opacity-60">
            Observation is the foundation of growth.
          </p>
        </div>

        {/* Info & Category Icons */}
        <div className="flex flex-col gap-3 mb-6">
          <span className="text-[10px] font-bold text-[#007AFF] uppercase tracking-[0.2em]">
            {activity.filter_tag}
          </span>
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar whitespace-nowrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/70 text-blue-800 border border-blue-100 rounded-full text-[9px] font-bold uppercase tracking-wide">
              <Clock size={12} strokeWidth={2.5} className="text-[#007AFF]" /> 2–5 min
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage-50/70 text-sage-800 border border-sage-100 rounded-full text-[9px] font-bold uppercase tracking-wide">
              <Wrench size={12} strokeWidth={2.5} className="text-sage-600" /> 1m Setup
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-[9px] font-bold uppercase tracking-wide">
              <Leaf size={12} strokeWidth={2.5} className="text-slate-400" /> Best calm
            </div>
          </div>
        </div>

        {/* Title & One-sentence Reassurance */}
        <h1 className="text-3xl font-display font-bold text-slate-900 leading-tight mb-2.5">
          {activity.title}
        </h1>
        <div className="mb-10 border-l-2 border-sage-200 pl-4 py-0.5">
          <p className="text-slate-500 text-base italic leading-relaxed font-medium">
            "{activity.reassurance}"
          </p>
        </div>

        {/* Content Flow */}
        <div className="space-y-10">
          {/* Objective & Outcome Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Objective</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">
                {activity.objective}
              </p>
            </section>
            <section>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Outcome</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">
                {activity.outcome}
              </p>
            </section>
          </div>

          {/* Why Matters Section */}
          <section className="bg-sage-50/40 p-6 rounded-2xl border border-sage-100/50">
            <h3 className="text-[10px] font-bold text-sage-600 uppercase tracking-widest mb-3">Why This Matters</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {activity.why_matters}
            </p>
          </section>

          {/* BUY ITEM - PRIMARY CTA WITH AFFILIATE DISCLOSURE */}
          {primaryMaterial && (
            <div className="py-2 flex flex-col items-center">
              <a 
                href={`https://www.amazon.com/s?k=${encodeURIComponent(primaryMaterial + ' montessori')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full min-h-[56px] px-8 py-4 bg-[#007AFF] text-white rounded-2xl text-[13px] font-bold uppercase tracking-[0.05em] hover:bg-blue-600 transition-all shadow-[0_12px_24px_-8px_rgba(0,122,255,0.4)] active:scale-[0.98] outline-none"
              >
                <ShoppingBag size={18} strokeWidth={2.5} />
                <span className="pt-0.5">Buy Item</span>
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="mt-4 px-2 space-y-1.5 text-center">
                <p className="text-[9px] text-slate-400 uppercase tracking-widest opacity-60 font-medium">
                  A carefully selected material for this stage.
                </p>
                <p className="text-[8px] text-slate-400 leading-relaxed max-w-[280px] mx-auto italic opacity-50">
                  This link may be an affiliate link. We only recommend materials that align with Montessori principles and your child’s current stage.
                </p>
              </div>
            </div>
          )}

          {/* Preparation & Observation List */}
          <section>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-5">Preparation & Observation</h3>
            <div className="space-y-4 relative">
              {activity.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start relative">
                  {idx < activity.steps.length - 1 && (
                    <div className="absolute left-[13.5px] top-7 w-[1px] h-[calc(100%+4px)] bg-slate-100" aria-hidden="true" />
                  )}
                  <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-white border border-sage-200 text-sage-600 flex items-center justify-center text-[10px] font-bold shadow-sm">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed pt-0.5">
                    {step.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Lightweight Collapsible Accordion */}
          <section className={`border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 ${isPauseExpanded ? 'bg-sage-50/20 shadow-sm' : 'bg-white'}`}>
            <button 
              onClick={() => setIsPauseExpanded(!isPauseExpanded)}
              className="w-full px-5 py-4 flex items-center justify-between group"
            >
              <h3 className="text-[11px] font-bold text-slate-700 uppercase tracking-widest pt-0.5">When to Pause</h3>
              <ChevronDown 
                size={16} 
                strokeWidth={3} 
                className={`text-slate-300 transition-transform duration-300 ${isPauseExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isPauseExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-5 pb-5 pt-1">
                <p className="text-slate-600 text-base leading-relaxed">
                  {activity.when_to_pause}
                </p>
              </div>
            </div>
          </section>

          {/* Next Activity Preview */}
          {nextActivity && onSelectActivity && (
            <section className="pt-8 border-t border-slate-50">
              <div 
                onClick={() => onSelectActivity(nextActivity)}
                className="bg-slate-50/40 rounded-[1.5rem] p-5 border border-slate-100 flex items-center gap-4 cursor-pointer hover:bg-white hover:border-[#007AFF]/20 transition-all group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <GeminiIllustration 
                    title={nextActivity.title}
                    category={nextActivity.category}
                    className="scale-[0.4]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[8px] font-bold text-[#007AFF] uppercase tracking-widest mb-0.5 block opacity-70">Next Guide</span>
                  <h4 className="text-sm font-display font-bold text-slate-900 truncate">
                    {nextActivity.title}
                  </h4>
                </div>
                <ArrowRight size={14} className="text-[#007AFF] group-hover:translate-x-1 transition-transform" />
              </div>
            </section>
          )}

          {/* Share with a Mum */}
          <div className="flex flex-col items-center pt-8 border-t border-slate-50">
            <button 
              onClick={handleShare}
              className="flex items-center gap-3 px-8 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all active:scale-95 group"
            >
              <Share2 size={16} strokeWidth={2.5} className="opacity-60" />
              <div className="flex flex-col items-start leading-tight pt-0.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em]">Share with a Mum</span>
                <span className="text-[8px] font-medium opacity-50 uppercase tracking-widest">Send this activity</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
