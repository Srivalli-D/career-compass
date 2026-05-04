import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CareerCards from './components/CareerCards';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Assessment from './components/Assessment';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';

function App() {
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  const handleAssessmentComplete = (results: any) => {
    console.log('Assessment Results:', results);
    setAssessmentResult(results);
    // You could save this to Supabase here
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar onStart={() => setShowAssessment(true)} />
      
      <main>
        <Hero onStart={() => setShowAssessment(true)} />
        
        <CareerCards />

        <Process />

        {/* Assessment Modal */}
        <AnimatePresence>
          {showAssessment && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowAssessment(false)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative z-10 w-full max-w-2xl"
              >
                <button 
                  onClick={() => setShowAssessment(false)}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-primary-200 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                {assessmentResult ? (
                  <div className="bg-white p-12 rounded-3xl text-center shadow-2xl">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Assessment Complete!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Based on your interest in <span className="font-bold text-primary">{assessmentResult.interests}</span> and your <span className="font-bold text-primary">{assessmentResult.personality}</span> work style, we're preparing your personalized career roadmap.
                    </p>
                    <button 
                      onClick={() => {
                        setShowAssessment(false);
                        setAssessmentResult(null);
                      }}
                      className="btn-primary w-full"
                    >
                      Back to Home
                    </button>
                  </div>
                ) : (
                  <Assessment onComplete={handleAssessmentComplete} />
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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
