
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';
import { yearStats, countryStats, genreStats, ratingStats, typeComparison } from '../data/netflixData';
import { Filter, Maximize2, Download, Info } from 'lucide-react';

const COLORS = ['#141414', '#3d3d3d', '#666666', '#8f8f8f', '#b8b8b8', '#e1e1e1'];

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">Interactive Dashboard</h2>
          <p className="max-w-2xl opacity-60">
            A visual synthesis of Netflix's global library. This dashboard highlights the 
            transition from legacy movies to the 'Original Series' era.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="p-3 border border-[#141414]/10 hover:bg-[#141414] hover:text-white transition-all">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-3 border border-[#141414] bg-[#141414] text-white hover:opacity-90 transition-all">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard label="Total Titles" value="8,807" delta="+12%" />
        <KPICard label="Total Movies" value="6,131" delta="+5%" />
        <KPICard label="TV Shows" value="2,676" delta="+22%" />
        <KPICard label="Countries" value="119" delta="+2" />
      </div>

      {/* Main Grid Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Growth Trend */}
        <div className="lg:col-span-8 bg-white border border-[#141414]/10 p-8 space-y-8 min-h-[450px] flex flex-col">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="font-bold uppercase text-xs tracking-widest">Content Growth Over Time</h3>
              <p className="text-[10px] opacity-40 uppercase font-mono">2015 - 2021 Releases</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yearStats}>
                <defs>
                  <linearGradient id="colorMovies" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#141414" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#141414" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#14141411" />
                <XAxis dataKey="year" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', border: 'none', color: '#E4E3E0', fontSize: '10px', borderRadius: '0' }}
                  itemStyle={{ color: '#E4E3E0' }}
                />
                <Area type="monotone" dataKey="movies" stroke="#141414" fillOpacity={1} fill="url(#colorMovies)" />
                <Area type="monotone" dataKey="tvShows" stroke="#888888" strokeDasharray="5 5" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="lg:col-span-4 bg-white border border-[#141414]/10 p-8 space-y-8 flex flex-col">
          <div className="space-y-1">
            <h3 className="font-bold uppercase text-xs tracking-widest">Audience Rating</h3>
            <p className="text-[10px] opacity-40 uppercase font-mono">Distribution by Rating Class</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ratingStats}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {ratingStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none translate-y-1">
              <span className="text-xl font-bold font-mono">8.8K</span>
              <span className="text-[8px] uppercase opacity-40 font-mono tracking-tighter">Total Entries</span>
            </div>
          </div>
          <div className="space-y-2">
            {ratingStats.slice(0, 3).map((r, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] uppercase font-mono">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5" style={{ backgroundColor: COLORS[i] }} />
                  {r.name}
                </span>
                <span className="opacity-50">{Math.round((r.value / 8807) * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Countries */}
        <div className="lg:col-span-6 bg-white border border-[#141414]/10 p-8 space-y-8 min-h-[350px] flex flex-col">
          <div className="space-y-1">
             <h3 className="font-bold uppercase text-xs tracking-widest">Geographical Distribution</h3>
             <p className="text-[10px] opacity-40 uppercase font-mono">Top Producing Countries</p>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryStats} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#14141411" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" fontSize={10} width={90} tickLine={false} axisLine={false} />
                <Tooltip 
                   cursor={{fill: '#f5f5f5'}} 
                   contentStyle={{ backgroundColor: '#141414', border: 'none', color: '#E4E3E0', fontSize: '10px' }}
                />
                <Bar dataKey="count" fill="#141414" barSize={10} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Genres */}
        <div className="lg:col-span-6 bg-white border border-[#141414]/10 p-8 space-y-8 min-h-[350px] flex flex-col">
          <div className="space-y-1">
             <h3 className="font-bold uppercase text-xs tracking-widest">Top Genre Categories</h3>
             <p className="text-[10px] opacity-40 uppercase font-mono">Most Frequent Classifications</p>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genreStats}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#14141411" />
                <XAxis dataKey="genre" fontSize={8} tickLine={false} axisLine={false} dy={10} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                   cursor={{fill: '#f5f5f5'}} 
                   contentStyle={{ backgroundColor: '#141414', border: 'none', color: '#E4E3E0', fontSize: '10px' }}
                />
                <Bar dataKey="count" fill="#141414" barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Analysis Disclaimer */}
      <div className="p-6 bg-[#141414]/5 border-l-4 border-[#141414] flex gap-4 items-start">
        <Info className="w-5 h-5 mt-1 opacity-50" />
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase">Technical Note on Data Latency</p>
          <p className="text-[10px] opacity-60 leading-relaxed max-w-3xl">
            This dashboard uses a snapshot of the Netflix Titles dataset (2021). Trends shown reflect the historical catalog 
            distribution prior to the major 2022 membership restructure. Chart data reflects pre-calculated SQL views of 
            the cleaned dataset.
          </p>
        </div>
      </div>
    </div>
  );
}

function KPICard({ label, value, delta }: any) {
  return (
    <div className="bg-white p-6 border border-[#141414]/10 space-y-2">
      <p className="text-[10px] uppercase opacity-40 tracking-widest font-mono">{label}</p>
      <div className="flex items-baseline justify-between">
        <h4 className="text-2xl font-bold font-mono tracking-tighter">{value}</h4>
        <span className="text-[10px] font-mono text-green-600 font-bold">{delta}</span>
      </div>
    </div>
  );
}
