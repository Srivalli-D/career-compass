import { useState } from 'react';
import { Compass, Menu, X } from 'lucide-react';

const Navbar = ({ onStart }: { onStart: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-700">
              Career Compass
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">How it works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors font-medium">Success Stories</a>
            <button onClick={onStart} className="btn-primary">Start Free Test</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">How it works</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">Success Stories</a>
            <button className="w-full mt-4 btn-primary">Start Free Test</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
