import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { useLanguage } from './i18n';
import { dataTranslations, skillsData } from './i18n/data';

export default function App() {
  const lang = useLanguage();
  const experienceData = dataTranslations[lang].experience;
  const educationData = dataTranslations[lang].education;
  const coursesData = dataTranslations[lang].courses;

  return (
    <Routes>
      <Route 
        path="/" 
        element={<HomePage experience={experienceData} education={educationData} />} 
      />
      <Route 
        path="/about" 
        element={
          <AboutPage 
            education={educationData} 
            experience={experienceData} 
            courses={coursesData} 
            skills={skillsData} 
          />
        } 
      />
    </Routes>
  );
}
