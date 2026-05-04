import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import CareerAssessment from './pages/CareerAssessment';
import CareerResults from './pages/CareerResults';
import CareerRoadmap from './pages/CareerRoadmap';
import StudyHub from './pages/StudyHub';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career-assessment" element={<CareerAssessment />} />
        <Route path="/career-results" element={<CareerResults />} />
        <Route path="/career-roadmap" element={<CareerRoadmap />} />
        <Route path="/study" element={<StudyHub />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
