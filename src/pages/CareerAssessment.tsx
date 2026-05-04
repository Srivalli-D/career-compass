import { useNavigate } from 'react-router-dom';
import Assessment from '../components/Assessment';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerAssessmentPage = () => {
  const navigate = useNavigate();

  const handleComplete = (results: any) => {
    console.log('Assessment Results:', results);
    // In a real app, you'd save results here
    navigate('/career-results');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/dashboard" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">Career Assessment</h1>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
           <Assessment onComplete={handleComplete} />
        </div>
      </main>
    </div>
  );
};

export default CareerAssessmentPage;
