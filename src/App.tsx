import React, { useEffect, useState, useRef } from 'react';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import CloudResumeStack from './components/CloudResumeStack';

// Replace with your API Gateway URL
const API_URL = 'https://5udg206bdk.execute-api.us-east-1.amazonaws.com/Prod';

function App() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const apiCalledRef = useRef(false);
  const cloudResumeRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  
  // Use custom hook for scroll animations
  const {
    section1Opacity,
    section1Y,
    section2Opacity,
    section2Y,
    section3Opacity,
    section3Y,
    section4Opacity,
    section4Y,
    section5Opacity,
    section5Y,
    section6Opacity,
    section6Y
  } = useScrollAnimations();

  useEffect(() => {
    const fetchCount = async () => {
      if (apiCalledRef.current) return;
      apiCalledRef.current = true;

      try {
        const response = await fetch(`${API_URL}/count`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchCount();
  }, []);

  const handleVisitorClick = () => {
    cloudResumeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 4000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="relative">
        <Header 
          section1Opacity={section1Opacity} 
          section1Y={section1Y} 
          visitorCount={visitorCount} 
          onVisitorClick={handleVisitorClick} 
        />
        
        <ProfessionalSummary 
          section2Opacity={section2Opacity} 
          section2Y={section2Y} 
        />
        
        <WorkExperience 
          section3Opacity={section3Opacity} 
          section3Y={section3Y} 
        />
        
        <Education 
          section4Opacity={section4Opacity} 
          section4Y={section4Y} 
        />
        
        <Projects 
          section5Opacity={section5Opacity} 
          section5Y={section5Y} 
        />
        
        <CloudResumeStack 
          section6Opacity={section6Opacity} 
          section6Y={section6Y} 
          cloudResumeRef={cloudResumeRef} 
          isBlinking={isBlinking} 
        />
      </main>
    </div>
  );
}

export default App;