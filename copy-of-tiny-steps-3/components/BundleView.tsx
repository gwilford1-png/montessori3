import React, { useState, useMemo } from 'react';
import { ActivityBundle, Activity } from '../types';
import ActivityCard from './ActivityCard';
import { ArrowLeft, Sparkles, ChevronDown, ChevronUp, Layers, Filter, X } from 'lucide-react';

interface BundleViewProps {
  bundles: ActivityBundle[];
  activities: Activity[];
  onActivityClick: (activity: Activity) => void;
  onBack: () => void;
}

const BundleView: React.FC<BundleViewProps> = ({ bundles, activities, onActivityClick, onBack }) => {
  const [expandedBundles, setExpandedBundles] = useState<Record<string, boolean>>({});
  const [selectedAge, setSelectedAge] = useState<string>('All Bundles');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleBundle = (id: string) => {
    setExpandedBundles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getFullActivity = (itemId: number): Activity | undefined => {
    return activities.find(a => a.id === String(itemId));
  };

  const ageOptions = useMemo(() => {
    const ages = Array.from(new Set(bundles.map(b => b.age_range)));
    return ['All Bundles', ...ages];
  }, [bundles]);

  const filteredBundles = useMemo(() => {
    if (selectedAge === 'All Bundles') return bundles;
    return bundles.filter(b => b.age_range === selectedAge);
  }, [bundles, selectedAge]);

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500 min-h-screen bg-[#F8FAFC] pb-20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 px-4">
        <div className="max-w-4xl mx-auto h-full flex items-center justify-between">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={24} strokeWidth={2.5} />
          </button>
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Curated Bundles</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00C2FF] text-white rounded-3xl shadow-lg shadow-cyan-100 mb-6">
            <Sparkles size={32} />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-3">Activity Bundles</h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Sequenced sets designed for progressive developmental milestones.
          </p>

          {/* Age Filter Dropdown */}
          <div className="relative inline-block text-left mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-3 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#007AFF] transition-all min-w-[160px] justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter size={14} className="text-[#007AFF]" />
                {selectedAge}
              </span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {isFilterOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsFilterOpen(false)}
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-2xl z-20 py-3 animate-in fade-in zoom-in-95 duration-200">
                  {ageOptions.map((age) => (
                    <button
                      key={age}
                      onClick={() => {
                        setSelectedAge(age);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors ${
                        selectedAge === age ? 'text-[#007AFF] bg-blue-50/50' : 'text-slate-600'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {filteredBundles.map((bundle) => {
            const isExpanded = !!expandedBundles[bundle.id];
            return (
              <div 
                key={bundle.id} 
                className={`bg-white rounded-[2rem] border transition-all duration-300 ${isExpanded ? 'border-blue-100 shadow-xl shadow-blue-500/5 ring-1 ring-blue-50' : 'border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-slate-200/50'}`}
              >
                {/* Refined Header */}
                <div 
                  className={`p-5 sm:p-6 flex items-center justify-between cursor-pointer rounded-[2rem] transition-colors ${isExpanded ? 'bg-blue-50/30' : 'bg-white'}`}
                  onClick={() => toggleBundle(bundle.id)}
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${isExpanded ? 'bg-[#007AFF] text-white shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                        {bundle.age_range}
                      </span>
                      
                      <span className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${isExpanded ? 'text-blue-600' : 'text-slate-400'}`}>
                        <Layers size={11} strokeWidth={3} />
                        {bundle.items.length} Activities
                      </span>
                    </div>

                    <h2 className="text-xl font-display font-bold text-slate-900 leading-tight">
                      {bundle.name}
                    </h2>
                    
                    {!isExpanded && (
                       <p className="text-slate-400 text-[11px] font-medium mt-1 italic">
                        {bundle.tagline}
                      </p>
                    )}
                  </div>
                  
                  <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isExpanded ? 'bg-[#007AFF] text-white shadow-lg shadow-blue-200 rotate-180' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                    <ChevronDown size={20} strokeWidth={3} />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-6 pt-0 animate-in slide-in-from-top-4 duration-300">
                    <div className="mb-6 p-5 bg-white rounded-2xl border border-blue-50 shadow-sm">
                       <p className="text-slate-600 text-sm italic leading-relaxed">
                        {bundle.tagline}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {bundle.items.map((item) => {
                        const fullActivity = getFullActivity(item.id);
                        if (!fullActivity) return null;
                        return (
                          <ActivityCard 
                            key={fullActivity.id} 
                            activity={fullActivity} 
                            onClick={onActivityClick} 
                          />
                        );
                      })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                        <Sparkles size={14} className="text-cyan-400" />
                        Milestone Sequence
                      </div>
                      <button 
                        onClick={() => toggleBundle(bundle.id)}
                        className="text-[10px] font-bold uppercase tracking-widest text-[#007AFF] hover:opacity-70 transition-opacity flex items-center gap-2"
                      >
                        Collapse
                        <ChevronUp size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredBundles.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-slate-200 shadow-sm">
              <p className="text-slate-400 text-sm font-medium italic mb-4">No bundles found for this group.</p>
              <button 
                onClick={() => setSelectedAge('All Bundles')}
                className="text-[11px] font-bold uppercase tracking-widest text-[#007AFF] hover:underline"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 rounded-[2.5rem] border border-dashed border-slate-200 bg-slate-50/50 text-center">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Coming Next</p>
          <p className="text-[11px] text-slate-400 font-medium italic">Curating specialized items for tactile and auditory refinement.</p>
        </div>
      </div>
    </div>
  );
};

export default BundleView;