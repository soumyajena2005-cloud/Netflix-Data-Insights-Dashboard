
import { CheckCircle2, AlertCircle, FileCode, Play } from 'lucide-react';

export default function Cleaning() {
  const codeSnippet = `import pandas as pd
import numpy as np

# 1. Load Dataset
df = pd.read_csv('netflix_titles.csv')

# 2. Handle missing values
df['director'] = df['director'].fillna('Unknown')
df['country'] = df['country'].fillna(df['country'].mode()[0])

# 3. Convert date fields
df['date_added'] = pd.to_datetime(df['date_added'].str.strip())

# 4. Feature Engineering: Content Duration Category
def categorize(dur):
    try:
        val = int(dur.split(' ')[0])
        return 'Short' if val < 60 else 'Feature'
    except: return 'TV Show'

df['duration_type'] = df['duration'].apply(categorize)`;

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold uppercase tracking-tighter">Data Cleaning Stage</h2>
        <p className="max-w-2xl opacity-60">
          The raw dataset contained inconsistent date formats and significant missing values 
          in the director and cast columns. We used Python for preprocessing and feature extraction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Process Checklist */}
        <div className="space-y-8 lg:col-span-1">
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest opacity-40">Preprocessing Tasks</h3>
            <div className="space-y-4">
              <TaskItem done title="Handle Null Values" desc="Filled 'Unknown' for director/cast." />
              <TaskItem done title="Standardize Types" desc="Parsed 'date_added' string to datetime." />
              <TaskItem done title="Feature Engineering" desc="Derived Year/Month and Duration categories." />
              <TaskItem active title="Export Pipeline" desc="Final CSV generation for SQL ingestion." />
            </div>
          </div>
          
          <div className="p-6 border border-[#141414]/10 bg-[#141414]/5 space-y-4 leading-relaxed">
            <div className="flex gap-2 text-[#141414]">
              <AlertCircle className="w-4 h-4 mt-1" />
              <p className="text-xs font-bold uppercase tracking-tight">Key Discovery</p>
            </div>
            <p className="text-xs opacity-70">
              Over 30% of the dataset had missing director information. Simple deletion would 
              have biased the results toward specific production houses. Placeholder imputation 
              preserved the sample size.
            </p>
          </div>
        </div>

        {/* Code View */}
        <div className="lg:col-span-2 bg-[#141414] rounded-sm overflow-hidden flex flex-col">
          <div className="bg-[#141414] border-b border-white/10 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase">cleaning_pipeline.ipynb</span>
            </div>
            <button className="text-[10px] font-mono text-white/40 hover:text-white flex items-center gap-2">
              <Play className="w-3 h-3 text-green-500" />
              RUN ALL
            </button>
          </div>
          <pre className="p-8 text-xs font-mono text-[#E4E3E0]/80 leading-relaxed overflow-x-auto selection:bg-white selection:text-[#141414]">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function TaskItem({ title, desc, done, active }: any) {
  return (
    <div className={`flex gap-4 p-4 border transition-all ${active ? 'border-[#141414] bg-white' : 'border-[#141414]/5'}`}>
      <div className="mt-1">
        {done ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <div className="w-4 h-4 rounded-full border border-[#141414]/20" />}
      </div>
      <div>
        <h4 className={`text-xs font-bold uppercase ${!done && !active ? 'opacity-30' : ''}`}>{title}</h4>
        <p className="text-[10px] opacity-50 mt-1">{desc}</p>
      </div>
    </div>
  );
}
