import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const NavigationHeader = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certificates', label: 'Certificates', href: '#certificates' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements
        .filter(section => section.element)
        .find((section, index, array) => {
          const nextSection = array[index + 1];
          const sectionTop = section.offset - 100;
          const sectionBottom = nextSection ? nextSection.offset - 100 : document.body.scrollHeight;
          
          return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (href, sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 60;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-200 ease-out ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-sm shadow-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick('#about', 'about');
                }}
                className="text-xl font-semibold text-text-primary hover:text-primary transition-colors duration-200"
              >
                Portfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={section.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSectionClick(section.href, section.id);
                    }}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 ease-out relative ${
                      activeSection === section.id
                        ? 'text-primary' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-200 ease-out" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Icon 
                  name={isMobileMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="transition-transform duration-200"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-1100 md:hidden">
          <div 
            className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-surface border-b border-border shadow-lg animate-slide-down">
            <div className="px-6 py-4 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={section.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.href, section.id);
                  }}
                  className={`block px-3 py-3 text-base font-medium transition-all duration-200 ease-out rounded-md ${
                    activeSection === section.id
                      ? 'text-primary bg-primary-50' :'text-text-secondary hover:text-primary hover:bg-secondary-100'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationHeader;