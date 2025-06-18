import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  const personalInfo = {
    name: "Ayman Ashraf Mounir",
    title: "Software Engineer",
    subtitle: "Backend Developer | Java & Spring Boot Specialist",
    location: "Cairo, Egypt",
    email: "aymanashrafmounir@gmail.com",
    phone: "+201226333795",
    linkedin: "https://www.linkedin.com/in/mo3gz/",
    github: "https://github.com/mo3gz",
    profileImage: "/assets/images/367497185_6523363137722300_857630299546170183_n-1750205012701.jpg"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-background to-accent-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface shadow-lg mx-auto">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success-500 rounded-full border-4 border-surface flex items-center justify-center">
                <div className="w-3 h-3 bg-surface rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              {personalInfo.subtitle}
            </p>
            <div className="flex items-center justify-center text-text-secondary">
              <Icon name="MapPin" size={16} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Contact Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() => handleContactClick('email', personalInfo.email)}
              className="btn-primary inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <Icon name="Mail" size={20} />
              <span>Email Me</span>
            </button>
            
            <button
              onClick={() => handleContactClick('linkedin', personalInfo.linkedin)}
              className="btn-secondary inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <Icon name="Linkedin" size={20} />
              <span>LinkedIn</span>
            </button>
            
            <button
              onClick={() => handleContactClick('github', personalInfo.github)}
              className="btn-secondary inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <Icon name="Github" size={20} />
              <span>GitHub</span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-text-secondary mb-4">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <Icon name="ChevronDown" size={24} className="text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;