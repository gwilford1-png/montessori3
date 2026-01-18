import React from 'react';
import { Activity } from '../types';
import GeminiIllustration from './GeminiIllustration';
import { 
  ArrowLeft, 
  Tag, 
  Brain, 
  Heart, 
  Activity as ActivityIcon, 
  Sparkles, 
  ShieldAlert,
  ChevronRight,
  MessageCircle,
  Wrench,
  ExternalLink,
  BookOpen,
  Check,
  ShoppingBag,
  Package,
  ListOrdered
} from 'lucide-react';

interface ActivityDetailProps {
  activity: Activity;
  onBack: () => void;
  onNext?: () => void;
}

const CategoryBadge = ({ category }: { category: string }) => {
  let bgColor = "bg-slate-100";
  let textColor = "text-slate-500";
  let Icon = Tag;

  switch (category) {
    case 'Physical': 
      bgColor = "bg-blue-50";
      textColor = "text-blue-600";
      Icon = ActivityIcon;
      break;
    case 'Cognitive':
      bgColor = "bg-indigo-50";
      textColor = "text-indigo-600";
      Icon = Brain;
      break;
    case 'Social':
      bgColor = "bg-rose-50";
      textColor = "text-rose-600";
      Icon = Heart;
      break;
    case 'Sensory':
    case 'Visual':
    case 'Auditory':
    case 'Tactile':
      bgColor = "bg-cyan-50";
      textColor = "text-cyan-600";
      Icon = Sparkles;
      break;
    case 'Language':
      bgColor = "bg-violet-50";
      textColor = "text-violet-600";
      Icon = MessageCircle;
      break;
    case 'Practical Life':
      bgColor = "bg-slate-100";
      textColor = "text-slate-600";
      Icon = Wrench;
      break;
  }

  return (
    <span className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest ${bgColor} ${textColor}`}>
      <Icon size={14} strokeWidth={3} />
      {category}
    </span>
  );
};

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity, onBack, onNext }) => {
  return (
    <div className="animate-in slide-in-from-right-8 duration-500 bg-[#F8FAFC] min-h-screen text-slate-800 pb-20">
      <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 h-16 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white text-slate-900 shadow-sm hover:bg-slate-50 transition-all border border-slate-100"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#007AFF] uppercase tracking-widest">{activity.filter_tag}</span>
        </div>

        {onNext ? (
          <button 
            onClick={onNext}
            className="flex items-center gap-2 px-5 h-10 bg-[#007AFF] rounded-2xl text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 active:scale-95"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Next</span>
            <ChevronRight size={16} strokeWidth={3} />
          </button>
        ) : <div className="w-10" />}
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CategoryBadge category={activity.category} />
            <div className="h-px w-8 bg-slate-200"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scientific Milestone</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            {activity.title}
          </h1>

          <p className="text-slate-500 text-xl leading-relaxed font-sans font-medium mb-10">
            {activity.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Objective</p>
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed">{activity.what_is_it}</p>
             </div>
             <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500">
                    <Sparkles size={16} strokeWidth={3} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Outcome</p>
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed italic">{activity.why_is_it_good}</p>
             </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mb-16">
          <div className="aspect-[16/9] rounded-[3rem] overflow-hidden bg-white shadow-xl border border-white">
            <GeminiIllustration 
              title={activity.title}
              category={activity.category}
              className="w-full h-full opacity-80"
            />
            <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-3 text-white">
              <ListOrdered size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Step-by-step guide</span>
            </div>
          </div>
        </div>

        {/* Instructions Sequence */}
        <div className="relative space-y-12 mb-20 px-4">
          <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-slate-100 rounded-full"></div>
          
          {(activity.steps && activity.steps.length > 0 ? activity.steps : [{ caption: activity.what_is_it }]).map((step, idx) => (
            <div key={idx} className="relative flex gap-10 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 text-[#007AFF] flex items-center justify-center text-lg font-bold shadow-sm z-10 transition-colors hover:border-blue-100">
                {idx + 1}
              </div>
              <div className="flex-1 pt-3">
                <p className="text-slate-700 text-xl leading-relaxed font-sans font-medium">
                  {step.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Items & Precautions Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {activity.items_required && activity.items_required.length > 0 && (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-3">
                <Package size={20} className="text-indigo-500" />
                Materials Needed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activity.items_required.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-blue-100 transition-all">
                    <span className="text-sm font-bold text-slate-700 truncate mr-4">{item}</span>
                    <a 
                      href={`https://www.amazon.com/s?k=${encodeURIComponent(item)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm"
                    >
                      <ShoppingBag size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-3">
              <ShieldAlert size={20} className="text-rose-500" />
              Safety Instructions
            </h3>
            <div className="space-y-3">
              {activity.donts.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0"></div>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Reference */}
        {activity.reference_link && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/10 rounded-2xl">
                <BookOpen size={28} className="text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Reference Material</span>
                <span className="text-lg font-display font-bold">{new URL(activity.reference_link).hostname}</span>
              </div>
            </div>
            <a 
              href={activity.reference_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Learn More
              <ExternalLink size={14} strokeWidth={3} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail;