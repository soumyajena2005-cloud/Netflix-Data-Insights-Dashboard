
import { Terminal, Database, Search, ArrowDownRight } from 'lucide-react';

export default function SQLAnalysis() {
  const queries = [
    {
      title: 'Content Split',
      query: 'SELECT type, COUNT(*) FROM netflix GROUP BY type;',
      result: [
        { type: 'Movie', count: '6,131' },
        { type: 'TV Show', count: '2,676' },
      ]
    },
    {
      title: 'Top Origins',
      query: 'SELECT country, COUNT(*) as total FROM netflix GROUP BY 1 ORDER BY 2 DESC LIMIT 5;',
      result: [
        { country: 'United States', total: '2,818' },
        { country: 'India', total: '972' },
        { country: 'United Kingdom', total: '419' },
        { country: 'Japan', total: '245' },
        { country: 'South Korea', total: '199' },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
           <div className="bg-[#141414] text-[#E4E3E0] p-2">
             <Database className="w-6 h-6" />
           </div>
           <h2 className="text-4xl font-bold uppercase tracking-tighter">SQL Exploration</h2>
        </div>
        <p className="max-w-2xl opacity-60">
          Post-cleaning, the data was migrated to a SQL environment for deep-dive exploratory data analysis (EDA). 
          We leveraged aggregate functions and windowing to identify production leaders and content lifecycle.
        </p>
      </div>

      <div className="space-y-16">
        {queries.map((q, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#141414]/10 border border-[#141414]/10">
            {/* Query Section */}
            <div className="bg-[#E4E3E0] p-8 space-y-6">
              <div className="flex justify-between items-center text-[10px] uppercase font-mono opacity-40">
                <span>0{idx+1} | QUERY ENGINE</span>
                <Search className="w-3 h-3" />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold uppercase text-lg tracking-tight">{q.title}</h3>
                <div className="bg-[#141414] p-4 rounded-sm">
                  <code className="text-xs font-mono text-[#E4E3E0] block break-all">
                    {q.query}
                  </code>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white p-8 space-y-6">
              <div className="flex justify-between items-center text-[10px] uppercase font-mono opacity-40 text-[#141414]">
                <span>RESULT SET</span>
                <ArrowDownRight className="w-3 h-3" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr className="border-b border-[#141414]/10">
                      {Object.keys(q.result[0]).map(key => (
                        <th key={key} className="pb-3 uppercase tracking-widest opacity-40 font-normal">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#141414]/5">
                    {q.result.map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((val, j) => (
                          <td key={j} className="py-4 font-bold">{val as string}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#141414] text-[#E4E3E0] p-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-4">
          <h3 className="font-serif italic text-2xl">Refining the scope and validating assumptions.</h3>
          <p className="text-xs opacity-50 uppercase tracking-widest leading-relaxed">
            SQL allowed us to quickly validate the cleaning success by verifying count 
            consistency against raw datasets and exploring 1:N relationships between 
            actors and genres.
          </p>
        </div>
        <div className="w-px h-24 bg-white/10 hidden md:block" />
        <div className="flex gap-8">
           <div className="text-center">
              <p className="text-3xl font-bold font-mono">1.2s</p>
              <p className="text-[10px] opacity-40 uppercase font-mono mt-2">Avg Query Time</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-bold font-mono">24</p>
              <p className="text-[10px] opacity-40 uppercase font-mono mt-2">Total Queries</p>
           </div>
        </div>
      </div>
    </div>
  );
}
