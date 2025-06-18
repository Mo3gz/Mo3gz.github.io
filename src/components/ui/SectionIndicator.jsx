import React, { useState, useEffect } from 'react';

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements
        .filter(section => section.element)
        .find((section, index, array) => {
          const nextSection = array[index + 1];
          const sectionTop = section.offset - 150;
          const sectionBottom = nextSection ? nextSection.offset - 150 : document.body.scrollHeight;
          
          return scrollTop >= sectionTop && scrollTop < sectionBottom;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-1000 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {/* Progress indicator */}
        <div className="relative w-1 h-32 bg-secondary-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section dots */}
        <div className="flex flex-col items-center space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="group relative flex items-center"
              aria-label={`Go to ${section.label} section`}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ease-out ${
                  activeSection === section.id
                    ? 'bg-primary border-primary scale-125' :'bg-transparent border-secondary-300 hover:border-primary hover:scale-110'
                }`}
              />
              
              {/* Tooltip */}
              <div className="absolute right-6 px-3 py-1 bg-text-primary text-surface text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {section.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-text-primary rotate-45" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionIndicator;