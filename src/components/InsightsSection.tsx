
import { Lightbulb, Target, TrendingUp, Users, Globe, Download, CheckCircle } from 'lucide-react';
import { insights } from '../data/netflixData';

export default function InsightsSection() {
  return (
    <div className="space-y-16">
      {/* Narrative Header */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 text-[#141414]">
             <Lightbulb className="w-8 h-8" />
             <h2 className="text-4xl font-bold uppercase tracking-tighter">Business Insights</h2>
          </div>
          <p className="text-lg opacity-80 leading-relaxed font-serif italic">
            "Beyond the numbers, we see a strategic shift towards globalized, mature storytelling 
            and episodic engagement."
          </p>
        </div>
        <div className="md:w-72 p-6 border border-[#141414] bg-[#141414] text-white space-y-4">
           <h4 className="text-[10px] uppercase tracking-widest font-mono opacity-50">Conclusion Score</h4>
           <div className="text-5xl font-mono font-bold tracking-tighter">A+</div>
           <p className="text-[10px] opacity-60 leading-relaxed">
             Based on 98% data accuracy post-cleaning and multi-stage validation.
           </p>
        </div>
      </div>

      {/* Numerical Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
           <h3 className="text-xs uppercase font-mono tracking-widest opacity-40">Strategic Findings</h3>
           <div className="space-y-px bg-[#141414]/10 border border-[#141414]/10">
             {insights.slice(0, 4).map((text, i) => (
               <InsightRow key={i} index={i+1} text={text} />
             ))}
           </div>
        </div>
        <div className="space-y-8">
           <h3 className="text-xs uppercase font-mono tracking-widest opacity-40">Consumer Trends</h3>
           <div className="space-y-px bg-[#141414]/10 border border-[#141414]/10">
             {insights.slice(4).map((text, i) => (
               <InsightRow key={i} index={i+5} text={text} />
             ))}
           </div>
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="space-y-8 pt-16 border-t border-[#141414]/10">
        <h3 className="text-xs uppercase font-mono tracking-widest opacity-40">Project Deliverables</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DeliverableCard 
            title="Python Script" 
            format=".IPYNB" 
            size="2.4 MB" 
            icon={CheckCircle}
          />
          <DeliverableCard 
            title="SQL Analysis" 
            format=".SQL" 
            size="15 KB" 
            icon={CheckCircle}
          />
          <DeliverableCard 
            title="Power BI" 
            format=".PBIX" 
            size="18.5 MB" 
            icon={CheckCircle}
          />
          <DeliverableCard 
            title="Final Dataset" 
            format=".CSV" 
            size="4.2 MB" 
            icon={CheckCircle}
          />
        </div>
      </div>
    </div>
  );
}

function InsightRow({ index, text }: any) {
  return (
    <div className="bg-[#E4E3E0] p-6 flex gap-6 items-start group hover:bg-white transition-colors">
      <span className="text-lg font-mono font-bold opacity-20 group-hover:opacity-100 transition-opacity">0{index}</span>
      <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">{text}</p>
    </div>
  );
}

function DeliverableCard({ title, format, size, icon: Icon }: any) {
  return (
    <div className="border border-[#141414]/10 p-6 space-y-4 hover:border-[#141414] transition-all cursor-pointer bg-white group">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-[#141414]/5 group-hover:bg-[#141414] group-hover:text-white transition-colors">
           <Download className="w-4 h-4" />
        </div>
        <Icon className="w-4 h-4 text-green-600" />
      </div>
      <div className="space-y-1">
        <h4 className="text-xs font-bold uppercase tracking-tight">{title}</h4>
        <div className="flex justify-between text-[9px] font-mono opacity-40 uppercase">
          <span>{format}</span>
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
}
