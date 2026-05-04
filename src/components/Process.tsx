import { UserPlus, ClipboardList, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your background, interests, and hobbies.',
    icon: UserPlus,
  },
  {
    title: 'Take the Assessment',
    description: 'Our AI-driven test evaluates your personality and technical skills.',
    icon: ClipboardList,
  },
  {
    title: 'Get Your Roadmap',
    description: 'Receive a personalized career path with learning resources and job tips.',
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Three Simple Steps to Your Future
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've streamlined the discovery process to help you find clarity in minutes, not months.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl text-center relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                <div className="absolute top-0 right-0 text-6xl font-black text-gray-50 -z-10">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
