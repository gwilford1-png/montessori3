import React, { useState, useMemo } from 'react';
import { Activity } from '../types';
import { ArrowLeft, ShoppingBag, Package, ImagePlus, ExternalLink, Sparkles } from 'lucide-react';
import { AGE_FILTERS } from '../constants';

interface ShoppingListProps {
  activities: Activity[];
  onBack: () => void;
  selectedAge: string;
  onAgeChange: (age: string) => void;
}

// List of classic Montessori items found in our database
const MONTESSORI_CLASSICS = [
  "Munari Mobile", "Octahedron Mobile", "Gobbi Mobile", "Dancers Mobile", 
  "Interlocking wooden rings", "Amish puzzle ball", "Object permanence box", 
  "Wooden coin box", "Imbucare peg box", "Single shape knob puzzles", 
  "Horizontal peg stacker", "Wooden nut and bolt set", "Padlock and key set",
  "Graduated ring stacker", "Pink Tower", "Brown Stair"
];

const isMontessoriClassic = (itemName: string) => {
  return MONTESSORI_CLASSICS.some(classic => 
    itemName.toLowerCase().includes(classic.toLowerCase())
  );
};

const ShoppingList: React.FC<ShoppingListProps> = ({ activities, onBack, selectedAge, onAgeChange }) => {
  const [filterMode, setFilterMode] = useState<'All' | 'Montessori'>('All');

  // Aggregate unique items based on selected age and Montessori filter
  const allItems = useMemo(() => {
    const items = Array.from(new Set<string>(
      activities
        .filter(a => selectedAge === 'All' || a.filter_tag === selectedAge)
        .flatMap(a => a.items_required || [])
    )).sort();

    if (filterMode === 'Montessori') {
      return items.filter(isMontessoriClassic);
    }
    return items;
  }, [activities, selectedAge, filterMode]);

  const formatAgeLabel = (age: string) => {
    if (age === 'All') return 'All';
    return age.replace(' Months', 'm');
  };

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
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Buy Items</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6366F1] text-white rounded-3xl shadow-lg shadow-indigo-100 mb-6">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-3">Buy Items</h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Essential items for prepared environments. Explore classic Montessori tools or general developmental aids.
          </p>

          {/* Type Filter Selector */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setFilterMode('All')}
              className={`px-5 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                filterMode === 'All'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-200'
                  : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterMode('Montessori')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                filterMode === 'Montessori'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                  : 'bg-white text-indigo-400 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Sparkles size={12} strokeWidth={3} />
              Montessori Only
            </button>
          </div>

          {/* Age Selector */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar mb-10 justify-center max-w-xl mx-auto px-4">
            {AGE_FILTERS.map((age) => (
              <button
                key={age}
                onClick={() => onAgeChange(age)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border whitespace-nowrap ${
                  selectedAge === age
                    ? 'bg-[#007AFF] text-white border-[#007AFF] shadow-md shadow-blue-100' 
                    : 'bg-white text-slate-400 border-slate-100 hover:bg-slate-50'
                }`}
              >
                {formatAgeLabel(age)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {allItems.length > 0 ? (
            allItems.map((item, idx) => {
              const isClassic = isMontessoriClassic(item);
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-5 p-4 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-slate-200/40 transition-all group overflow-hidden relative"
                >
                  {/* Image Placeholder Box */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                    <ImagePlus size={24} strokeWidth={1.5} className="mb-1 opacity-40" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-center px-3 opacity-60">Ready for Preview</span>
                  </div>

                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Essential</span>
                        {isClassic && (
                          <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
                            <Sparkles size={9} strokeWidth={3} />
                            Classic
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl capitalize leading-tight mb-3 truncate group-hover:text-[#007AFF] transition-colors">
                        {item}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a 
                        href={`https://www.amazon.com/s?k=${encodeURIComponent(item + ' montessori')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#007AFF] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100 active:scale-95"
                      >
                        Find on Amazon
                        <ExternalLink size={14} strokeWidth={3} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-slate-200 mx-4">
              <Package size={48} className="mx-auto mb-4 text-slate-200" />
              <p className="text-slate-400 text-sm font-medium italic">No matches found in this category.</p>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 rounded-[2.5rem] border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-[10px] font-bold text-slate-300 text-center uppercase tracking-widest leading-relaxed px-6">
            Note: We recommend sourcing natural, sustainable items whenever possible to align with Montessori principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;