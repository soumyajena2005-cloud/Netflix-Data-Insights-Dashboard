import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  BarChart3, 
  Code2, 
  FileText, 
  Lightbulb, 
  LayoutDashboard,
  Github,
  Table as TableIcon
} from 'lucide-react';

// Components (We will create these next)
import Overview from './components/Overview';
import Cleaning from './components/Cleaning';
import SQLAnalysis from './components/SQLAnalysis';
import Dashboard from './components/Dashboard';
import InsightsSection from './components/InsightsSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'cleaning', name: 'Data Cleaning', icon: Code2 },
    { id: 'sql', name: 'SQL Analysis', icon: Database },
    { id: 'dashboard', name: 'Analytics Dashboard', icon: BarChart3 },
    { id: 'insights', name: 'Insights', icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Sidebar / Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 border-r border-[#141414] bg-[#E4E3E0] z-50 md:flex flex-col hidden">
        <div className="p-8 border-bottom border-[#141414]/10">
          <div className="flex items-center gap-2 mb-2">
            <LayoutDashboard className="w-6 h-6" />
            <h1 className="text-sm font-mono uppercase tracking-widest font-bold">Netflix Analytics</h1>
          </div>
          <p className="text-[10px] uppercase opacity-50 font-serif italic">Trends & Patterns Pro</p>
        </div>

        <div className="flex-1 px-4 py-8 pointer-events-auto">
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest transition-all duration-200 border border-transparent ${
                  activeTab === tab.id 
                    ? 'bg-[#141414] text-[#E4E3E0]' 
                    : 'hover:border-[#141414] text-[#141414]/60 hover:text-[#141414]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-[#141414]">
          <div className="flex items-center justify-between opacity-50">
            <span className="text-[10px] font-mono uppercase">V 1.0.0</span>
            <div className="flex gap-4">
               <Github className="w-4 h-4 cursor-pointer hover:opacity-100" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen p-0">
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[#141414] bg-[#E4E3E0]">
           <h1 className="text-xs font-mono uppercase font-bold tracking-tighter">Netflix Analytics</h1>
           <select 
              value={activeTab} 
              onChange={(e) => setActiveTab(e.target.value)}
              className="bg-transparent text-xs uppercase font-mono border-none outline-none focus:ring-0"
           >
             {tabs.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
           </select>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {activeTab === 'overview' && <Overview onStart={() => setActiveTab('cleaning')} />}
              {activeTab === 'cleaning' && <Cleaning />}
              {activeTab === 'sql' && <SQLAnalysis />}
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'insights' && <InsightsSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
