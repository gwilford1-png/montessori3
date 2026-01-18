import React, { useState } from 'react';
import { Activity } from '../types';
import GeminiIllustration from './GeminiIllustration';
import { 
  Check, 
  Package,
  Circle
} from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  onClick: (activity: Activity) => void;
}

const getAgeTagStyle = (age: string) => {
  if (age.includes('0-3')) return 'bg-blue-500 text-white'; 
  if (age.includes('3-6')) return 'bg-sky-500 text-white'; 
  if (age.includes('6-12')) return 'bg-indigo-500 text-white'; 
  if (age.includes('12-18')) return 'bg-violet-500 text-white'; 
  if (age.includes('18-24')) return 'bg-slate-700 text-white';
  if (age.includes('24+')) return 'bg-slate-900 text-white';
  return 'bg-blue-600 text-white';
};

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
   console.log("ACTIVITY CARD FULL:", activity);

  const [isComplete, setIsComplete] = useState(false);
  
  const itemsText = activity.items_required && activity.items_required.length > 0
    ? activity.items_required.join(", ")
    : "No items needed";

  const ageStyle = getAgeTagStyle(activity.filter_tag);

  const handleCompleteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

    return (
    <div
      onClick={() => onClick(activity)}
      className="bg-white rounded-2xl flex flex-row items-center cursor-pointer group transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-50 mb-4 mx-1"
    >
   {/* Icon Area */}
<div className="p-4 shrink-0">
  <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50/50 transition-colors overflow-hidden">
    {activity.steps?.[0]?.image_url ? (
      <img
        src={activity.steps[0].image_url}
        alt={activity.title}
        className="w-full h-full object-cover"
      />
    ) : (
      <GeminiIllustration
        title={activity.title}
        category={activity.category}
        className="w-full h-full scale-75"
      />
    )}
  </div>
</div>


      {/* Content Area */}
      <div className="flex flex-col flex-grow min-w-0 py-4 pr-2">
        <h3 className="text-[17px] font-display font-bold text-slate-800 leading-tight mb-1 group-hover:text-[#007AFF] transition-colors">
          {activity.title}
        </h3>

        <p className="text-slate-400 text-xs line-clamp-2 pr-4 leading-relaxed font-medium">
          {activity.what_is_it}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1">
            <Package size={10} />
            {itemsText}
          </span>
        </div>
      </div>

      {/* Complete Checkbox Area (Kinedu Style) */}
      <div
        onClick={handleCompleteToggle}
        className="flex flex-col items-center justify-center px-6 border-l border-slate-50 min-h-[100px] hover:bg-slate-50/50 transition-colors rounded-r-2xl"
      >
        <span
          className={`text-[10px] font-bold uppercase tracking-wider mb-2 transition-colors ${
            isComplete ? 'text-[#007AFF]' : 'text-slate-300'
          }`}
        >
          Complete
        </span>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            isComplete
              ? 'bg-[#007AFF] border-[#007AFF] text-white'
              : 'border-slate-100 text-slate-200'
          }`}
        >
          <Check size={20} strokeWidth={3} className={isComplete ? 'scale-100' : 'scale-0'} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
