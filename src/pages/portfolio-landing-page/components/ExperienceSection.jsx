import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState(-1);

  const experienceData = [
    {
      id: 1,
      title: "Software Engineer",
      company: "AZM Squad",
      location: "Remote",
      duration: "Jul 2025 - Oct 2025",
      type: "Internship",
      description: "Intensive training focused on .NET Core and React.js fundamentals with practical application development.",
      achievements: [
        "Completed intensive training track on .NET Core and React.js fundamentals",
        "Deepened understanding of Clean Architecture and RESTful API design principles",
        "Built and deployed practice applications demonstrating frontend-backend integration",
        "Developed full-stack applications using modern web development practices",
        "Gained hands-on experience with microservices architecture"
      ],
      technologies: [".NET Core", "React.js", "RESTful APIs", "Clean Architecture"],
      icon: "Code",
      color: "primary"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      company: "Deloitte",
      location: "Remote",
      duration: "Jul 2025 - Aug 2025",
      type: "Internship",
      description: "Technical mentorship program focusing on Java Spring Boot and React ecosystems.",
      achievements: [
        "Selected for technical mentorship program focusing on Java Spring Boot and React",
        "Gained exposure to industry standards for microservices and agile development",
        "Learned enterprise-level development practices and architectural patterns",
        "Developed real-world applications using Spring Boot and React"
      ],
      technologies: ["Java Spring Boot", "React.js", "Microservices", "Agile Development"],
      icon: "Layers",
      color: "success"
    },
    {
      id: 3,
      title: "Software Engineer for Training AI Data",
      company: "Outlier",
      location: "Remote",
      duration: "Nov 2024 - Mar 2025",
      type: "Freelance",
      description: "Tested and optimized AI models by identifying and correcting failure cases.",
      achievements: [
        "Tested and optimized AI models for accuracy improvement",
        "Identified and corrected failure cases to enhance model reliability",
        "Contributed to AI model development and refinement",
        "Improved overall model accuracy through systematic testing"
      ],
      technologies: ["AI Training", "Machine Learning", "Data Analysis"],
      icon: "Brain",
      color: "accent"
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      location: "Cairo, Egypt",
      duration: "Apr 2024 - Oct 2024",
      type: "Full-time",
      description: "Developed scalable web applications and RESTful APIs using .NET Core and ASP.NET MVC.",
      achievements: [
        "Designed and implemented responsive web pages, enhancing usability",
        "Developed scalable RESTful APIs using .NET Core Web API and ASP.NET MVC",
        "Integrated frontend and backend for seamless user experience",
        "Mastered Microsoft SQL Server database design and optimization",
        "Applied SOLID principles and design patterns in enterprise applications"
      ],
      technologies: ["Microsoft SQL Server", "ASP.NET Web API", "ASP.NET MVC", ".NET Core", "HTML5", "CSS", "JavaScript", "C#"],
      icon: "Code",
      color: "secondary"
    },
    {
      id: 5,
      title: "Software Engineer Training - Desktop Track",
      company: "Siemens Digital Industries Software",
      location: "Cairo, Egypt",
      duration: "Oct 2023 - Feb 2024",
      type: "Internship",
      description: "Software Engineering Diploma with focus on desktop application development.",
      achievements: [
        "Participated in Software Engineering Diploma at Siemens Software Academy",
        "Built Secure Notes Organizer app with client-server architecture using C++ and Qt",
        "Led REST API integration and collaborated in Agile team environment",
        "Optimized memory usage and performance, applying SOLID and design patterns",
        "Developed secure desktop applications with modern UI/UX"
      ],
      technologies: ["Qt Creator", "Desktop Application Development", "C++", "REST APIs", "SOLID Principles"],
      icon: "Settings",
      color: "warning"
    }
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

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-100',
        text: 'text-primary',
        border: 'border-primary-200'
      },
      accent: {
        bg: 'bg-accent-100',
        text: 'text-accent-600',
        border: 'border-accent-200'
      },
      secondary: {
        bg: 'bg-secondary-100',
        text: 'text-secondary-600',
        border: 'border-secondary-200'
      },
      success: {
        bg: 'bg-success-100',
        text: 'text-success-600',
        border: 'border-success-200'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="experience" className="py-20 bg-surface">
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
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experienceData.map((experience, index) => {
                const colorClasses = getColorClasses(experience.color);
                const isExpanded = expandedExperience === index;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={experience.id}
                    variants={itemVariants}
                    className={`relative flex items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 md:left-1/2 w-8 h-8 ${colorClasses.bg} ${colorClasses.border} border-2 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10`}>
                      <Icon name={experience.icon} size={16} className={colorClasses.text} />
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <motion.div
                        className="card p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        onClick={() => setExpandedExperience(isExpanded ? -1 : index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-text-primary mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-lg font-semibold text-primary mb-1">
                              {experience.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                              <div className="flex items-center">
                                <Icon name="MapPin" size={14} className="mr-1" />
                                {experience.location}
                              </div>
                              <div className="flex items-center">
                                <Icon name="Calendar" size={14} className="mr-1" />
                                {experience.duration}
                              </div>
                              <span className={`px-2 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium`}>
                                {experience.type}
                              </span>
                            </div>
                          </div>
                          <Icon
                            name={isExpanded ? "ChevronUp" : "ChevronDown"}
                            size={20}
                            className="text-text-secondary ml-4 flex-shrink-0"
                          />
                        </div>

                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {/* Achievements */}
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                                  <Icon name="Target" size={18} className="mr-2 text-primary" />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {experience.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className="flex items-start">
                                      <Icon name="CheckCircle" size={16} className="text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                                      <span className="text-text-secondary">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Technologies */}
                              <div>
                                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                                  <Icon name="Wrench" size={18} className="mr-2 text-primary" />
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;