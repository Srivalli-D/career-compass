import { motion } from 'framer-motion';
import { BookOpen, Video, Globe, ExternalLink, ChevronLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Google UX Design Professional Certificate',
    type: 'Course',
    platform: 'Coursera',
    icon: Video,
    tag: 'Free to Audit',
    link: 'https://coursera.org',
  },
  {
    title: 'Refactoring UI',
    type: 'E-book',
    platform: 'Self-hosted',
    icon: BookOpen,
    tag: 'Recommended',
    link: '#',
  },
  {
    title: 'Modern React with Redux',
    type: 'Course',
    platform: 'Udemy',
    icon: Video,
    tag: 'Bestseller',
    link: '#',
  },
  {
    title: 'GitHub Career Guide',
    type: 'Article',
    platform: 'GitHub',
    icon: Globe,
    tag: 'Essential',
    link: '#',
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Learning Resources</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Curated for Your Path</h2>
            <p className="text-gray-600">The best tools and courses to help you master your chosen career.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search resources..."
              className="pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <res.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{res.type}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">{res.title}</h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-500">{res.platform}</span>
                <a 
                  href={res.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;
