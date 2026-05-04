import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight, ChevronLeft, Flag, MapPin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  {
    title: 'Phase 1: Foundation',
    status: 'completed',
    items: ['HTML/CSS Fundamentals', 'Basic JavaScript', 'Version Control (Git)'],
  },
  {
    title: 'Phase 2: React Core',
    status: 'current',
    items: ['Hooks & State Management', 'Component Architecture', 'Routing & API Integration'],
  },
  {
    title: 'Phase 3: Backend & Databases',
    status: 'upcoming',
    items: ['Node.js Basics', 'Supabase/Firebase Integration', 'Database Schema Design'],
  },
  {
    title: 'Phase 4: Advanced Topics',
    status: 'upcoming',
    items: ['Testing & Performance', 'Cloud Deployment', 'Portfolio Building'],
  },
];

const CareerRoadmap = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/career-results" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Your Learning Roadmap</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-primary p-10 rounded-3xl text-white mb-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl shadow-primary/20">
          <div>
            <span className="text-primary-100 font-bold uppercase tracking-widest text-sm block mb-2">Current Path</span>
            <h2 className="text-3xl font-bold mb-4">Full Stack Developer</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-1"><Flag className="w-4 h-4" /> 4 Phases</div>
              <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Entry Level</div>
              <div className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> 12 Modules</div>
            </div>
          </div>
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 backdrop-blur-md">
            <span className="text-2xl font-black">25%</span>
          </div>
        </div>

        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 -z-0" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-16"
            >
              <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center border-4 bg-white z-10 transition-colors ${
                phase.status === 'completed' ? 'border-primary text-primary' : 
                phase.status === 'current' ? 'border-primary bg-primary text-white' : 'border-gray-200 text-gray-300'
              }`}>
                {phase.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6 fill-current" />}
              </div>
              
              <div className={`p-8 rounded-3xl border transition-all ${
                phase.status === 'current' ? 'bg-white border-primary shadow-xl scale-[1.02]' : 'bg-white border-gray-100 shadow-sm'
              }`}>
                <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
                  {phase.title}
                  {phase.status === 'current' && <span className="text-xs bg-primary text-white px-3 py-1 rounded-full uppercase tracking-tighter">In Progress</span>}
                </h3>
                <div className="grid gap-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <div className={`w-2 h-2 rounded-full ${phase.status === 'completed' ? 'bg-primary' : 'bg-gray-200'}`} />
                      {item}
                    </div>
                  ))}
                </div>
                {phase.status === 'current' && (
                  <button className="btn-primary mt-8 w-full flex items-center justify-center gap-2">
                    Continue Learning <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareerRoadmap;
