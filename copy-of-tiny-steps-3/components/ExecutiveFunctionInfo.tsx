
import React from 'react';
import { ArrowLeft, Brain, ShieldCheck, Target, Zap, Heart, Users, TrendingUp, Sparkles } from 'lucide-react';

interface ScienceInfoProps {
  onBack: () => void;
}

const ExecutiveFunctionInfo: React.FC<ScienceInfoProps> = ({ onBack }) => {
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
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">The Science of Montessori</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-[2rem] shadow-xl shadow-indigo-100 mb-8 animate-pulse">
            <Brain size={40} />
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">
            The Foundation of Tomorrow
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
            How purposeful activity in early childhood builds the cognitive engines of successful adults.
          </p>
        </div>

        {/* Pillars of EF */}
        <section className="mb-20">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007AFF] mb-8 text-center">
            The Three Pillars of Executive Function
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Target size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900">Inhibitory Control</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Montessori tasks require waiting, precise movements, and following sequences. This "effortful control" is the antidote to impulsivity, teaching children to stop and think before they act.
              </p>
            </div>

            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                  <Zap size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900">Cognitive Flexibility</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                When a child encounters a "problem" (like a spill or a puzzle piece that doesn't fit), Montessori encourages independent problem-solving. This builds the mental agility needed to switch perspectives and adapt to change.
              </p>
            </div>

            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl">
                  <TrendingUp size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900">Working Memory</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Multi-step activities (like washing a table or baking) require holding information in mind while performing a task. This strengthens the brain's ability to manage complex, long-term projects later in life.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-8">Montessori vs. Traditional Methods</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                <div className="p-2 bg-blue-500 rounded-xl mt-1">
                  <Users size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-blue-300 text-sm mb-1 uppercase tracking-wider">Social Regulation</h5>
                  <p className="text-white/70 text-sm">Studies show Montessori children are better at negotiating conflicts and exhibit higher levels of social justice and empathy compared to traditional school peers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                <div className="p-2 bg-indigo-500 rounded-xl mt-1">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-indigo-300 text-sm mb-1 uppercase tracking-wider">Self-Correction</h5>
                  <p className="text-white/70 text-sm">By using "Control of Error" materials, children learn that mistakes are feedback, not failures. This builds high resilience and self-reliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long term outcome */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <Heart size={14} fill="currentColor" />
            The Long-Term Impact
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Regulated, Well-Rounded Adults</h3>
          <p className="text-slate-500 leading-relaxed mb-10">
            Research indicates that the early development of Executive Function is a better predictor of success than IQ. Montessori alumni often show higher levels of intrinsic motivation, creative thinking, and emotional stability in adulthood.
          </p>
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-[#007AFF] text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95"
          >
            Explore Activities
          </button>
        </section>
      </div>
    </div>
  );
};

export default ExecutiveFunctionInfo;
