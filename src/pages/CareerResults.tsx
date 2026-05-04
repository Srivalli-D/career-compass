import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Share2, Download, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const recommendations = [
  { title: 'Full Stack Developer', match: 98, desc: 'Your logical thinking and technical interests make you a perfect fit for building end-to-end web applications.' },
  { title: 'Data Scientist', match: 92, desc: 'Your analytical skills align perfectly with data modeling and statistical analysis roles.' },
  { title: 'UX Designer', match: 85, desc: 'Your creative side suggests you would excel in creating user-centered digital experiences.' },
];

const CareerResults = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-bold">Your Career Matches</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
            <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Download className="w-5 h-5" /></button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discovery Complete!</h2>
          <p className="text-lg text-gray-600">We've identified 3 career paths that match your profile.</p>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{rec.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${rec.match}%` }} />
                    </div>
                    <span className="text-sm font-bold text-primary">{rec.match}% Match</span>
                  </div>
                </div>
                <Link to="/career-roadmap" className="btn-primary flex items-center gap-2 py-3">
                  View Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-gray-600 leading-relaxed">{rec.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareerResults;
