import { ArrowLeft, Baby, ChevronDown, Filter, Info, LayoutGrid, List, Menu, Search, Shapes, ShieldCheck, ShoppingBag, Sparkles, X, Brain, CheckCircle2 } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ActivityCard from './components/ActivityCard';
import ActivityDetail from './components/ActivityDetail';
import ActivityRow from './components/ActivityRow';
import SafetyModal from './components/SafetyModal';
import ShoppingList from './components/ShoppingList';
import BundleView from './components/BundleView';
import ExecutiveFunctionInfo from './components/ExecutiveFunctionInfo';
import { AGE_FILTERS, INITIAL_ACTIVITIES, ACTIVITY_BUNDLES } from './constants';
import { Activity, SectionType, ViewMode } from './types';

const App: React.FC = () => {
  const [activities] = useState<Activity[]>(INITIAL_ACTIVITIES);
  const [viewMode, setViewMode] = useState<ViewMode>('LIST');
  const [displayStyle, setDisplayStyle] = useState<'GRID' | 'ROWS'>('GRID');
  const [selectedType] = useState<SectionType>('Activity');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAgeFilterOpen, setIsAgeFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('All');
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredItems = useMemo(() => {
    return activities.filter(activity => {
      const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            activity.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAge = selectedAge === 'All' || activity.filter_tag === selectedAge;
      return matchesSearch && matchesAge;
    });
  }, [activities, searchQuery, selectedAge]);

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setViewMode('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedActivity(null);
    setViewMode('LIST');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans pb-16 transition-colors duration-500">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* Side Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative w-72 h-full bg-white border-r border-slate-200 shadow-2xl p-6 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#007AFF] rounded-lg text-white">
                  <Baby size={20} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1E293B]">TinySteps</h3>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg">
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              <button 
                onClick={() => { setViewMode('LIST'); setIsMenuOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all ${viewMode === 'LIST' ? 'bg-[#007AFF] text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Shapes size={18} />
                Activities
              </button>
              <button 
                onClick={() => { setViewMode('BUNDLES'); setIsMenuOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all ${viewMode === 'BUNDLES' ? 'bg-[#00C2FF] text-white shadow-lg shadow-cyan-100' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Sparkles size={18} />
                Bundles
              </button>
              <button 
                onClick={() => { setViewMode('SCIENCE'); setIsMenuOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all ${viewMode === 'SCIENCE' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Brain size={18} />
                Science
              </button>
              <div className="h-px bg-slate-100 my-4 mx-4"></div>
              <button 
                onClick={() => { setViewMode('SHOPPING'); setIsMenuOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all ${viewMode === 'SHOPPING' ? 'bg-[#6366F1] text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <ShoppingBag size={18} />
                Buy Items
              </button>
            </nav>
          </div>
        </div>
      )}

      {viewMode === 'SHOPPING' && (
        <ShoppingList activities={activities} selectedAge={selectedAge} onAgeChange={setSelectedAge} onBack={handleBackToList} />
      )}

      {viewMode === 'BUNDLES' && (
        <BundleView bundles={ACTIVITY_BUNDLES} activities={activities} onActivityClick={handleActivityClick} onBack={handleBackToList} />
      )}

      {viewMode === 'SCIENCE' && (
        <ExecutiveFunctionInfo onBack={handleBackToList} />
      )}

      {viewMode === 'LIST' && (
        <>
          {/* Kinedu-style Hero Banner */}
          {showBanner && (
            <div className="bg-[#007AFF] relative overflow-hidden pt-8 pb-12 px-6 rounded-b-[2.5rem] shadow-xl shadow-blue-500/10">
              <button 
                onClick={() => setShowBanner(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2"
              >
                <X size={20} />
              </button>
              
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                     <Baby size={48} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 p-2 rounded-full border-4 border-[#007AFF]">
                    <Sparkles size={14} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-white font-display font-bold text-2xl mb-2">Make the most out of TinySteps!</h1>
                  <p className="text-blue-50 text-sm leading-relaxed max-w-md">
                    By keeping your baby's milestones updated, we'll show you exactly which activities you need to boost development.
                  </p>
                </div>
              </div>

              {/* Decorative Bubbles */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          )}

          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 mb-6">
            <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-50 transition-all">
                <Menu size={24} strokeWidth={2.5} />
              </button>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsAgeFilterOpen(!isAgeFilterOpen)}
                  className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-sm text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:border-[#007AFF] transition-all"
                >
                  <Filter size={14} className="text-[#007AFF]" />
                  {selectedAge === 'All' ? 'All Ages' : selectedAge}
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-4xl mx-auto px-4 pb-24">
            {/* Category Header (Green) */}
            <div className="bg-[#D8F3DC]/30 py-3 px-6 rounded-xl mb-4 text-center">
               <h2 className="text-[#2D6A4F] font-display font-bold text-lg">Daily Growth Plan</h2>
            </div>

            <div className="flex flex-col">
              {filteredItems.map(activity => (
                <ActivityCard 
                  key={activity.id} 
                  activity={activity} 
                  onClick={handleActivityClick}
                />
              ))}
            </div>

            {/* Babbling Header (Orange) */}
            <div className="bg-[#FFEDD5]/50 py-3 px-6 rounded-xl mb-4 mt-8 text-center">
               <h2 className="text-[#9A3412] font-display font-bold text-lg">Communication Skills</h2>
            </div>

            <button className="w-full mt-10 py-5 bg-slate-100 text-slate-400 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-inner transition-all hover:bg-slate-200">
              Save & Continue
            </button>
          </main>
        </>
      )}

      {viewMode === 'DETAIL' && selectedActivity && (
        <ActivityDetail activity={selectedActivity} onBack={handleBackToList} />
      )}
      
      <SafetyModal isOpen={isSafetyModalOpen} onClose={() => setIsSafetyModalOpen(false)} />
    </div>
  );
};

export default App;