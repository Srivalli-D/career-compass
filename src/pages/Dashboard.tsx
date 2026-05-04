import { motion } from 'framer-motion';
import { GraduationCap, Compass, Briefcase, ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Career Assessment',
    desc: 'Discover your strengths and personality traits.',
    icon: Compass,
    link: '/career-assessment',
    color: 'bg-violet-50 text-violet-600',
    btnText: 'Start Assessment',
  },
  {
    title: 'Study Hub',
    desc: 'Manage your study planner, timer, and resources.',
    icon: GraduationCap,
    link: '/study',
    color: 'bg-blue-50 text-blue-600',
    btnText: 'Open Study Hub',
  },
  {
    title: 'Career Roadmap',
    desc: 'Your step-by-step path to career success.',
    icon: Briefcase,
    link: '/career-roadmap',
    color: 'bg-green-50 text-green-600',
    btnText: 'View Roadmap',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Compass className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">Career Compass</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 pl-4 border-l border-gray-100">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary">
              SD
            </div>
            <span className="font-semibold text-gray-700 hidden sm:block">Srivalli D</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Srivalli! 👋</h1>
          <p className="text-gray-600">Track your progress and discover your potential today.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color}`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{card.desc}</p>
              <Link
                to={card.link}
                className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 group-hover:bg-primary group-hover:text-white transition-all font-semibold"
              >
                {card.btnText}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="mt-16">
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Ready for your results?</h2>
                <p className="text-gray-600">Complete the assessment to unlock personalized career paths and roadmaps.</p>
              </div>
              <Link to="/career-assessment" className="btn-primary flex items-center gap-2">
                Continue Assessment <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
