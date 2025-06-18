import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    email: "ayman.ashraf@example.com",
    phone: "+20 1234567890",
    location: "Cairo, Egypt",
    linkedin: "https://linkedin.com/in/ayman-ashraf",
    github: "https://github.com/Mo3gz"
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'linkedin': case'github':
        window.open(value, '_blank');
        break;
      default:
        break;
    }
  };

  const handleLinkClick = (href) => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-text-primary text-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ayman Ashraf Mounir</h3>
              <p className="text-surface/80 mb-6 leading-relaxed">
                Passionate software engineer specializing in backend development with Java and Spring Boot. 
                Based in Cairo, Egypt, I'm dedicated to building scalable, efficient applications and 
                continuously expanding my technical expertise.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleContactClick('linkedin', contactInfo.linkedin)}
                  className="w-10 h-10 bg-surface/10 hover:bg-surface/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label="LinkedIn Profile"
                >
                  <Icon name="Linkedin" size={20} className="text-surface group-hover:scale-110 transition-transform duration-200" />
                </button>
                
                <button
                  onClick={() => handleContactClick('github', contactInfo.github)}
                  className="w-10 h-10 bg-surface/10 hover:bg-surface/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label="GitHub Profile"
                >
                  <Icon name="Github" size={20} className="text-surface group-hover:scale-110 transition-transform duration-200" />
                </button>
                
                <button
                  onClick={() => handleContactClick('email', contactInfo.email)}
                  className="w-10 h-10 bg-surface/10 hover:bg-surface/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label="Email Contact"
                >
                  <Icon name="Mail" size={20} className="text-surface group-hover:scale-110 transition-transform duration-200" />
                </button>
                
                <button
                  onClick={() => handleContactClick('phone', contactInfo.phone)}
                  className="w-10 h-10 bg-surface/10 hover:bg-surface/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label="Phone Contact"
                >
                  <Icon name="Phone" size={20} className="text-surface group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-surface/80 hover:text-surface transition-colors duration-200 flex items-center group"
                    >
                      <Icon name="ChevronRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <button
                  onClick={() => handleContactClick('email', contactInfo.email)}
                  className="flex items-start text-surface/80 hover:text-surface transition-colors duration-200 group"
                >
                  <Icon name="Mail" size={16} className="mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="break-all">{contactInfo.email}</span>
                </button>
                
                <button
                  onClick={() => handleContactClick('phone', contactInfo.phone)}
                  className="flex items-center text-surface/80 hover:text-surface transition-colors duration-200 group"
                >
                  <Icon name="Phone" size={16} className="mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span>{contactInfo.phone}</span>
                </button>
                
                <div className="flex items-center text-surface/80">
                  <Icon name="MapPin" size={16} className="mr-3 flex-shrink-0" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-surface/20 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-surface/60 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} Ayman Ashraf Mounir. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center text-surface/60 hover:text-surface text-sm transition-colors duration-200 group"
              >
                <span className="mr-2">Back to Top</span>
                <Icon name="ArrowUp" size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;