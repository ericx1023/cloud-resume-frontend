import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/brutalist/Hero';
import Summary from './components/brutalist/Summary';
import Experience from './components/brutalist/Experience';
import Education from './components/brutalist/Education';
import Projects from './components/brutalist/Projects';
import TechStack from './components/brutalist/TechStack';
import { getPersonalInfo } from './config';

// Replace with your API Gateway URL
const API_URL = 'https://5udg206bdk.execute-api.us-east-1.amazonaws.com/Prod';

function App() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const apiCalledRef = useRef(false);
  const personalInfo = getPersonalInfo();

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
    const techStackSection = document.getElementById('tech-stack');
    techStackSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        {/* Phase 2: Hero */}
        <Hero 
          personalInfo={personalInfo} 
          visitorCount={visitorCount} 
          onVisitorClick={handleVisitorClick} 
        />

        {/* Phase 3: Summary */}
        <Summary />

        {/* Phase 4: Experience */}
        <Experience />

        {/* Phase 5: Education */}
        <Education />

        {/* Phase 6: Projects */}
        <Projects />

        {/* Phase 7: Tech Stack */}
        <TechStack />
      </main>
    </div>
  );
}

export default App;
