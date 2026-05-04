import { Code, Palette, BarChart3, Heart, Zap, Globe } from 'lucide-react';

const careers = [
  {
    title: 'Technology & Software',
    description: 'Build the future with code and innovative digital solutions.',
    icon: Code,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Creative & Design',
    description: 'Express your vision through visual storytelling and UX.',
    icon: Palette,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'Business & Finance',
    description: 'Master markets, strategy, and organizational growth.',
    icon: BarChart3,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Healthcare & Science',
    description: 'Make a difference through research and patient care.',
    icon: Heart,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Energy & Sustainability',
    description: 'Create solutions for a greener and cleaner planet.',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    title: 'Social & Global',
    description: 'Drive impact through policy, education, and advocacy.',
    icon: Globe,
    color: 'bg-purple-50 text-purple-600',
  },
];

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
          {careers.map((career, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${career.color}`}>
                <career.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {career.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCards;
