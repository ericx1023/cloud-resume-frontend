import React from 'react';
import { Timeline } from './ui/timeline';

type Props = {};

const Education: React.FC<Props> = () => {
  const educations = [
    {
      title: "2014",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">PC School Taiwan</h3>
          <p className="text-blue-600 font-medium">Java Programming & Android Development</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Key topics:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Java", "OOP", "Android", "Mobile Development", "UI Design"].map((topic, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Built several Android applications as part of coursework
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Learned fundamental programming concepts and mobile development principles
            </li>
          </ul>
        </div>
      ),
    },{
      title: "2005 - 2006",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">University of Kent, Canterbury, UK</h3>
          <p className="text-blue-600 font-medium">MSc. Group Processing and Intergroup Relations</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Key courses:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Social Psychology", "Group Dynamics", "Research Methods", "Statistics"].map((course, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Conducted research on intergroup relations and social identity theory
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Developed skills in quantitative and qualitative research methods
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "1998 - 2003",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Chun-Yuan Christian University</h3>
          <p className="text-blue-600 font-medium">Bachelor of Psychology</p>
          <div className="mt-2 mb-4">
            <p className="text-sm text-gray-500 font-medium">Key courses:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["General Psychology", "Cognitive Psychology", "Experimental Psychology", "Clinical Psychology"].map((course, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
                  {course}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li className="text-gray-600 text-base md:text-lg">
              Participated in various psychological research projects
            </li>
            <li className="text-gray-600 text-base md:text-lg">
              Developed a strong foundation in understanding human behavior and cognition
            </li>
          </ul>
        </div>
      ),
    },
   
  ];

  return (
    <Timeline 
      data={educations}
      title="Education"
      subtitle="My academic journey and qualifications"
    />
  );
};

export default Education; 