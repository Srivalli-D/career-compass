import React from 'react';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Career Discovery</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight animate-slide-up">
          Discover Your <span className="text-primary">Perfect Career</span> Path Today
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Stop guessing and start growing. Our AI-driven platform analyzes your personality, skills, and interests to find the career you'll love.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary flex items-center justify-center gap-2">
            Get Your Free Report <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2">
            Watch Demo <PlayCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { label: 'Active Users', value: '50k+' },
            { label: 'Career Paths', value: '500+' },
            { label: 'Accuracy', value: '98%' },
            { label: 'Success Rate', value: '94%' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
