import React, { useEffect } from 'react';
import Icon from '../AppIcon';

const MobileMenuOverlay = ({ 
  isOpen, 
  onClose, 
  sections, 
  activeSection, 
  onSectionClick 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSectionClick = (href, sectionId) => {
    onSectionClick(href, sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-1100 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-x-0 top-0 bg-surface shadow-lg animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">Navigation</h2>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
            aria-label="Close menu"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="px-6 py-4">
          <div className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={section.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick(section.href, section.id);
                }}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ease-out ${
                  activeSection === section.id
                    ? 'text-primary bg-primary-50 border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-secondary-100'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="flex-1">{section.label}</span>
                {activeSection === section.id && (
                  <Icon name="ChevronRight" size={20} className="text-primary" />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-secondary-50">
          <p className="text-sm text-text-secondary text-center">
            Scroll or tap to navigate sections
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;