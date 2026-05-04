import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'UX Designer at Google',
    content: 'Career Compass helped me realize that my passion for psychology perfectly matched a career in UX Design. The roadmap was a lifesaver!',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    content: 'I was lost after graduation. This platform gave me the confidence to pursue coding and showed me exactly where to start.',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    content: 'The accuracy of the AI assessment is mind-blowing. It picked up on strengths I didn\'t even know I had.',
    avatar: 'ER',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Future Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful professionals who found their path through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-primary-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
