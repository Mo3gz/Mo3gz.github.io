import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState(0);

  const experienceData = [
    {
      id: 1,
      title: ".NET Web Developer",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      location: "Cairo, Egypt",
      duration: "Jun 2023 - Dec 2023",
      type: "Trainee",
      description: "Intensive training program focused on .NET web development with hands-on project experience and comprehensive skill development in Microsoft technologies.",
      achievements: [
        "Developed full-stack web applications using ASP.NET MVC and Entity Framework",
        "Implemented RESTful APIs with proper authentication and authorization using ASP.NET Web API",
        "Mastered Microsoft SQL Server database design, optimization, and stored procedures",
        "Built responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Collaborated with team of 8 developers on enterprise-level projects using C#",
        "Participated in code reviews and agile development practices",
        "Gained expertise in Entity Framework for data access and ORM operations"
      ],
      technologies: ["Microsoft SQL Server", "ASP.NET Web API", "ASP.NET MVC", "HTML5", "Cascading Style Sheets (CSS)", "JavaScript", "C#"],
      icon: "Code",
      color: "primary"
    },
    {
      id: 2,
      title: "Linux System Administrator",
      company: "Orange Digital Center",
      location: "Cairo, Egypt",
      duration: "Mar 2023 - May 2023",
      type: "Training Program",
      description: "Comprehensive Linux system administration training program covering network configuration, user management, and system security.",
      achievements: [
        "Mastered Linux command line operations and system administration tasks",
        "Configured and managed Linux servers, services, and network infrastructure",
        "Implemented advanced network configuration and troubleshooting techniques",
        "Managed user accounts, permissions, and access control systems",
        "Developed shell scripting solutions for automation and system monitoring",
        "Applied security hardening techniques and best practices",
        "Completed hands-on labs covering real-world enterprise scenarios"
      ],
      technologies: ["Linux System Administration", "Network Configuration and Troubleshooting", "User Account Management", "Bash Scripting", "System Security", "Server Management"],
      icon: "Terminal",
      color: "accent"
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Siemens",
      location: "Cairo, Egypt",
      duration: "Sep 2022 - Feb 2023",
      type: "Industrial Training",
      description: "Industrial software engineering training with focus on desktop application development, Qt Creator, and software development lifecycle.",
      achievements: [
        "Developed desktop applications using Qt Creator framework and C++",
        "Implemented comprehensive desktop application development workflows",
        "Applied software development lifecycle methodologies in industrial environment",
        "Mastered desktop technologies for cross-platform application development",
        "Participated in software design and architecture planning sessions",
        "Collaborated with international teams on industrial automation projects",
        "Gained experience in embedded systems and industrial communication protocols"
      ],
      technologies: ["Qt Creator", "Desktop Application Development", "Software Development Life cycle", "Desktop Technologies", "Software Design"],
      icon: "Settings",
      color: "secondary"
    },
    {
      id: 4,
      title: "AI Trainee",
      company: "Huawei ICT Academy",
      location: "Cairo, Egypt",
      duration: "Jan 2022 - Aug 2022",
      type: "Certification Program",
      description: "Artificial Intelligence and Machine Learning certification program with practical projects and comprehensive AI curriculum.",
      achievements: [
        "Completed comprehensive AI and ML curriculum with hands-on projects",
        "Implemented machine learning algorithms from scratch using Python",
        "Developed computer vision applications using OpenCV and deep learning",
        "Built neural networks for classification and regression tasks",
        "Applied data analysis and preprocessing techniques for ML models",
        "Earned Huawei AI certification upon successful program completion",
        "Created portfolio of AI projects demonstrating practical skills"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Deep Learning", "Data Analysis", "Neural Networks"],
      icon: "Brain",
      color: "success"
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
                    className={`relative flex items-start ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
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