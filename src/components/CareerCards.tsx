import { Code, Palette, BarChart3, Heart, Zap, Globe } from 'lucide-react';
import careerData from '../data/careers.json';

const iconMap: Record<string, any> = {
  'tech-software': Code,
  'creative-design': Palette,
  'business-finance': BarChart3,
  'healthcare-science': Heart,
  'energy-sustainability': Zap,
  'social-global': Globe,
};

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  pink: 'bg-pink-50 text-pink-600',
  green: 'bg-green-50 text-green-600',
  red: 'bg-red-50 text-red-600',
  yellow: 'bg-yellow-50 text-yellow-600',
  purple: 'bg-purple-50 text-purple-600',
};

const CareerCards = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Diverse Career Universes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI engine maps your unique profile against thousands of roles across these major sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerData.careers.map((career) => {
            const Icon = iconMap[career.id] || Globe;
            const colorClass = colorMap[career.color] || 'bg-gray-50 text-gray-600';
            
            return (
              <div 
                key={career.id}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {career.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {career.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-sm">
                  <span className="font-medium text-gray-500">Salary: {career.salary}</span>
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                    career.demand === 'High' || career.demand === 'Very High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {career.demand}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerCards;
