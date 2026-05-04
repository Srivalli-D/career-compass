import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, Calendar, BarChart3, BookOpen, 
  Plus, Play, Pause, RotateCcw, CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyHub = () => {
  const [activeTab, setActiveTab] = useState('timer');
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const tabs = [
    { id: 'timer', label: 'Focus Timer', icon: Clock },
    { id: 'planner', label: 'Planner', icon: Calendar },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'flashcards', label: 'Flashcards', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Study Hub</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white p-2 rounded-2xl border border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl"
          >
            {activeTab === 'timer' && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-12">Pomodoro Timer</h2>
                <div className="text-8xl font-black text-gray-900 mb-12 tabular-nums">
                  {formatTime(timeLeft)}
                </div>
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setIsActive(!isActive)}
                    className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                      isActive ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'btn-primary'
                    }`}
                  >
                    {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    {isActive ? 'Pause' : 'Start Focus'}
                  </button>
                  <button 
                    onClick={() => { setTimeLeft(25 * 60); setIsActive(false); }}
                    className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:text-primary transition-all"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'planner' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Today's Tasks</h2>
                  <button className="flex items-center gap-2 text-primary font-bold">
                    <Plus className="w-5 h-5" /> Add Task
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Research Data Science Careers', priority: 'High', done: true },
                    { title: 'Complete Career Assessment', priority: 'Medium', done: false },
                    { title: 'Review UX Design Roadmap', priority: 'Low', done: false },
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${task.done ? 'bg-primary border-primary' : 'border-gray-200'}`}>
                          {task.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`font-medium ${task.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                          {task.title}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="text-center py-12">
                <BarChart3 className="w-20 h-20 text-primary/20 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Track Your Growth</h3>
                <p className="text-gray-500">Your study statistics will appear here as you complete tasks.</p>
              </div>
            )}

            {activeTab === 'flashcards' && (
              <div className="text-center py-12">
                <BookOpen className="w-20 h-20 text-primary/20 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Active Recall</h3>
                <p className="text-gray-500">Create flashcard decks to master new career skills.</p>
                <button className="btn-primary mt-8">Create First Deck</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default StudyHub;
