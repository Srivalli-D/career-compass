import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Brain, Sparkles, Target } from 'lucide-react';

const steps = [
  {
    id: 'intro',
    title: 'Let\'s get started',
    description: 'We\'ll ask a few questions to understand your strengths and interests.',
    icon: Sparkles,
  },
  {
    id: 'personality',
    title: 'Your Personality',
    description: 'How would you describe your work style?',
    options: [
      { label: 'Analytical & Logical', value: 'analytical' },
      { label: 'Creative & Imaginative', value: 'creative' },
      { label: 'Empathetic & People-focused', value: 'empathetic' },
      { label: 'Organized & Detail-oriented', value: 'organized' },
    ],
    icon: Brain,
  },
  {
    id: 'interests',
    title: 'Your Interests',
    description: 'Which areas excite you the most?',
    options: [
      { label: 'Solving complex problems with code', value: 'tech' },
      { label: 'Designing beautiful visual experiences', value: 'design' },
      { label: 'Helping people and improving lives', value: 'social' },
      { label: 'Managing projects and business growth', value: 'business' },
    ],
    icon: Target,
  },
];

const Assessment = ({ onComplete }: { onComplete: (results: any) => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectOption = (value: string) => {
    setAnswers({ ...answers, [steps[currentStep].id]: value });
  };

  const current = steps[currentStep];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-primary p-8 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <current.icon className="w-8 h-8" />
          <h2 className="text-2xl font-bold">{current.title}</h2>
        </div>
        <div className="text-primary-100 text-sm font-medium">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <p className="text-lg text-gray-600">{current.description}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {current.options ? (
              <div className="grid gap-4">
                {current.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => selectOption(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      answers[current.id] === option.value
                        ? 'border-primary bg-primary-50 text-primary'
                        : 'border-gray-100 hover:border-primary-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{option.label}</span>
                      {answers[current.id] === option.value && <CheckCircle className="w-5 h-5" />}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-400">
                <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Click "Next" to begin your journey.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 font-semibold ${
              currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-primary'
            }`}
          >
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
          <button
            onClick={handleNext}
            disabled={current.options && !answers[current.id]}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === steps.length - 1 ? 'Get Results' : 'Next'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
