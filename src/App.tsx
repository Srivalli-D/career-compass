import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerCards from './components/CareerCards';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import { CheckCircle2, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <CareerCards />

        <Process />

        {/* Features Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Why Choose Career Compass?
                </h2>
                <div className="space-y-6">
                  {[
                    { title: 'Personalized Insights', desc: 'Get recommendations based on your unique personality traits and strengths.' },
                    { title: 'Real-time Market Data', desc: 'Access current salary trends, job demand, and required skill sets.' },
                    { title: 'Actionable Roadmap', desc: 'Receive a step-by-step guide on how to transition into your dream career.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square bg-primary/5 rounded-3xl overflow-hidden flex items-center justify-center border border-primary/10">
                   {/* Placeholder for an image or graphic */}
                   <div className="p-8 glass-card rounded-2xl max-w-xs rotate-3 animate-pulse">
                      <div className="h-4 w-20 bg-primary/20 rounded mb-4" />
                      <div className="h-8 w-full bg-primary/10 rounded mb-6" />
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded" />
                        <div className="h-2 w-3/4 bg-gray-100 rounded" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-24 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Ready to Find Your True Calling?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join over 50,000 students and professionals who have found their perfect path with Career Compass.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-xl inline-flex items-center gap-2">
              Start Your Assessment <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Career Compass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
