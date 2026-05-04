
import { ArrowRight, FileText, Database, Code2, BarChart3, ListChecks } from 'lucide-react';

interface OverviewProps {
  onStart: () => void;
}

export default function Overview({ onStart }: OverviewProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] font-mono opacity-50">Data Analytics Project</p>
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase">
            Netflix <br />
            <span className="italic font-serif font-normal">Insights</span>
          </h2>
        </div>
        
        <p className="max-w-xl text-lg leading-relaxed opacity-80">
          A deep dive into the streaming giant's content catalog. This end-to-end project 
          transforms raw data into actionable business intelligence through rigorous 
          cleaning, SQL exploration, and visual storytelling.
        </p>

        <button 
          onClick={onStart}
          className="group flex items-center gap-4 bg-[#141414] text-[#E4E3E0] px-8 py-4 uppercase text-xs tracking-widest font-bold hover:gap-6 transition-all"
        >
          Explore Project Lifecycle
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Grid of Steps */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141414]/10 border border-[#141414]/10">
        <StepCard 
          num="01" 
          title="Data Cleaning" 
          desc="Pandas preprocessing, null handling, and feature engineering."
          icon={Code2}
        />
        <StepCard 
          num="02" 
          title="SQL Analysis" 
          desc="Exploratory analysis using complex joins and aggregations."
          icon={Database}
        />
        <StepCard 
          num="03" 
          title="Visual Dashboard" 
          desc="Interactive charts revealing trends and geographical patterns."
          icon={BarChart3}
        />
        <StepCard 
          num="04" 
          title="Business Insights" 
          desc="Actionable conclusions translated from the data patterns."
          icon={ListChecks}
        />
      </section>

      {/* Project Specs */}
      <div className="pt-16 border-t border-[#141414]/10 flex flex-wrap gap-12">
        <div className="space-y-1">
          <p className="text-[10px] uppercase opacity-40 font-mono">Dataset size</p>
          <p className="text-sm font-mono font-bold uppercase">8,800+ Titles</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase opacity-40 font-mono">Tools used</p>
          <p className="text-sm font-mono font-bold uppercase">Python, SQL, Power BI</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] uppercase opacity-40 font-mono">Primary Focus</p>
          <p className="text-sm font-mono font-bold uppercase">Global Trends & Media Habits</p>
        </div>
      </div>
    </div>
  );
}

function StepCard({ num, title, desc, icon: Icon }: any) {
  return (
    <div className="bg-[#E4E3E0] p-8 space-y-6 group hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors cursor-default">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-mono opacity-50 group-hover:opacity-100">{num}</span>
        <Icon className="w-5 h-5 opacity-40 group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold uppercase text-sm tracking-widest">{title}</h3>
        <p className="text-xs opacity-60 leading-relaxed group-hover:opacity-100">{desc}</p>
      </div>
    </div>
  );
}
