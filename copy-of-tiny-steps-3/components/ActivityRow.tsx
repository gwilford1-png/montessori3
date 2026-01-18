import React from 'react';
import { Activity } from '../types';
import { 
  ChevronRight
} from 'lucide-react';

interface ActivityRowProps {
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

const ActivityRow: React.FC<ActivityRowProps> = ({ activity, onClick }) => {
  const ageStyle = getAgeTagStyle(activity.filter_tag);

  return (
    <div 
      onClick={() => onClick(activity)}
      className="flex items-center justify-between p-5 bg-white border-b border-slate-50 hover:bg-blue-50/30 cursor-pointer transition-all duration-200 h-[84px] last:border-b-0 group"
    >
      <div className="flex flex-col flex-1 min-w-0 truncate pr-4 pl-1">
        <span className="font-display font-bold text-slate-800 text-lg leading-tight truncate mb-1.5 group-hover:text-[#007AFF] transition-colors">
          {activity.title}
        </span>
        <div className="flex items-center gap-2.5">
          <span className={`${ageStyle} px-2.5 py-0.5 rounded-lg font-bold text-[9px] uppercase tracking-wider shadow-sm`}>
            {activity.filter_tag}
          </span>
          <span className="text-[10px] font-medium text-slate-400">
            {activity.category}
          </span>
        </div>
      </div>
      
      <div className="text-slate-200 pl-2 group-hover:translate-x-1.5 group-hover:text-[#007AFF] transition-all">
        <ChevronRight size={22} strokeWidth={3} />
      </div>
    </div>
  );
};

export default ActivityRow;