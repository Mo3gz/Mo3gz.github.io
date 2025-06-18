import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const AboutSection = () => {
  const aboutData = {
    summary: `I'm a passionate software engineer with expertise in backend development, specializing in Java and Spring Boot frameworks. With hands-on experience in .NET, Python, and modern web technologies, I focus on building scalable, efficient applications that solve real-world problems.

My journey in software development has been driven by curiosity and a commitment to continuous learning. I thrive in collaborative environments where I can contribute to innovative projects while expanding my technical skills and knowledge.

Currently based in Cairo, Egypt, I'm actively seeking opportunities to contribute to impactful software projects and grow within a dynamic development team.`,
    highlights: [
      {
        icon: "Code2",
        title: "Backend Development",
        description: "Specialized in Java, Spring Boot, .NET Core, and database design"
      },
      {
        icon: "Layers",
        title: "Full-Stack Experience",
        description: "Frontend development with React, Qt Creator, and modern web technologies"
      },
      {
        icon: "Users",
        title: "Team Leadership",
        description: "Led multiple project teams and mentored junior developers"
      },
      {
        icon: "Zap",
        title: "Problem Solving",
        description: "Strong analytical skills with focus on efficient, scalable solutions"
      }
    ],
    contactInfo: {
      email: "aymanashrafmounir@gmail.com",
      phone: "+201226333795",
      linkedin: "https://www.linkedin.com/in/mo3gz/",
      github: "https://github.com/mo3gz",
      location: "Cairo, Egypt"
    }
  };

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

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <motion.div variants={itemVariants}>
              <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                <p className="mb-6 leading-relaxed">{aboutData.summary}</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Get In Touch
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleContactClick('email', aboutData.contactInfo.email)}
                    className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200 group"
                  >
                    <Icon name="Mail" size={20} className="text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <p className="text-sm text-text-secondary">Email</p>
                      <p className="text-text-primary font-medium">{aboutData.contactInfo.email}</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleContactClick('phone', aboutData.contactInfo.phone)}
                    className="flex items-center p-4 bg-accent-100 rounded-lg hover:bg-accent-200 transition-colors duration-200 group"
                  >
                    <Icon name="Phone" size={20} className="text-accent-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <p className="text-sm text-text-secondary">Phone</p>
                      <p className="text-text-primary font-medium">{aboutData.contactInfo.phone}</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleContactClick('linkedin', aboutData.contactInfo.linkedin)}
                    className="flex items-center p-4 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors duration-200 group"
                  >
                    <Icon name="Linkedin" size={20} className="text-secondary-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <p className="text-sm text-text-secondary">LinkedIn</p>
                      <p className="text-text-primary font-medium">Connect with me</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleContactClick('github', aboutData.contactInfo.github)}
                    className="flex items-center p-4 bg-success-100 rounded-lg hover:bg-success-200 transition-colors duration-200 group"
                  >
                    <Icon name="Github" size={20} className="text-success-600 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-left">
                      <p className="text-sm text-text-secondary">GitHub</p>
                      <p className="text-text-primary font-medium">View Projects</p>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                What I Bring
              </h3>
              
              <div className="space-y-6">
                {aboutData.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-6 bg-background rounded-lg border border-border hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={highlight.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;