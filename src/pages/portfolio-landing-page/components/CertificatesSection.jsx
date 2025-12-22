import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const CertificatesSection = () => {
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  const certificatesData = [
    {
      id: 1,
      title: "Artificial Intelligence Training",
      issuer: "Huawei ICT Academy - Cairo University",
      date: "September 2023",
      credentialId: "HUAWEI-AI-2023-09",
      description: "Comprehensive certification covering AI fundamentals, machine learning algorithms, and practical AI implementation.",
      skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Data Analysis"],
      icon: "Brain",
      color: "success",
      verified: true
    },
    {
      id: 2,
      title: "Computer Network Fundamentals",
      issuer: "MaharaTech - ITIMooca",
      date: "September 2023",
      credentialId: "GTApaeL8T0",
      description: "Comprehensive program covering network fundamentals, TCP/IP, and networking concepts.",
      skills: ["Computer Networks", "Network Configuration", "TCP/IP", "Network Protocols"],
      icon: "Globe",
      color: "primary",
      verified: true
    },
    {
      id: 3,
      title: "Building a Career in IT field program",
      issuer: "City of Scientific Research and Technological Applications (SRTA-City)",
      date: "August 2023",
      credentialId: "SRTA-CITY-2023",
      description: "Career development program focusing on IT fundamentals and professional growth in technology field.",
      skills: ["IT Fundamentals", "Career Development", "Professional Skills", "Technology Trends"],
      icon: "Briefcase",
      color: "accent",
      verified: true
    },
    {
      id: 4,
      title: "C# Intermediate",
      issuer: "Sololearn",
      date: "May 2024",
      credentialId: "SOLOLEARN-CSHARP",
      description: "Intermediate certification demonstrating proficiency in C# programming, OOP concepts, and .NET development.",
      skills: ["C#", "Object-Oriented Programming", ".NET", "LINQ", "Async Programming"],
      icon: "Hash",
      color: "secondary",
      verified: true
    },
    {
      id: 5,
      title: "Digital Careers: Schneider Global Student Experience",
      issuer: "Schneider Electric",
      date: "July 2024",
      credentialId: "SCHNEIDER-2024",
      description: "Professional development program focusing on digital skills and global career opportunities.",
      skills: ["Digital Skills", "Career Development", "Global Perspective", "Professional Growth"],
      icon: "Award",
      color: "warning",
      verified: true
    },
    {
      id: 6,
      title: "Linux Fundamentals Trainee",
      issuer: "Orange Digital Center Egypt",
      date: "September 2024",
      credentialId: "ORANGE-LINUX-2024",
      description: "Training program covering Linux system administration, network configuration, and user management.",
      skills: ["Linux System Administration", "Network Configuration", "User Account Management", "Command Line"],
      icon: "Terminal",
      color: "success",
      verified: true
    },
    {
      id: 7,
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "June 2023",
      credentialId: "EDRMY99S2ZZT",
      description: "Foundational certification covering cybersecurity principles, threats, and defense mechanisms.",
      skills: ["Cybersecurity", "Network Security", "Data Protection", "Security Best Practices"],
      icon: "Shield",
      color: "error",
      verified: true
    },
    {
      id: 8,
      title: "The 2023 ICPC ECPC Qualifications Collegiate Programming Contest Day 5",
      issuer: "ICPC - International Collegiate Programming Contest",
      date: "August 2023",
      credentialId: "ICPC-2023",
      description: "Participation in international competitive programming contest demonstrating algorithmic problem-solving skills.",
      skills: ["Competitive Programming", "Algorithms", "Problem Solving", "Data Structures"],
      icon: "Code2",
      color: "primary",
      verified: true
    },
    {
      id: 9,
      title: "Intro to programming - Nanodegree Program",
      issuer: "Udacity",
      date: "September 2019",
      credentialId: "UDACITY-INTRO",
      description: "Comprehensive introduction to programming covering fundamentals, data structures, databases, and algorithms.",
      skills: ["Programming Fundamentals", "Data Structures", "Databases", "Algorithms", "Object-Oriented Programming"],
      icon: "Monitor",
      color: "secondary",
      verified: true
    },
    {
      id: 10,
      title: "Front-End Diploma (Web Design)",
      issuer: "IT Sharks",
      date: "March 2019",
      credentialId: "IT-SHARKS-WEB",
      description: "Comprehensive diploma in front-end web development covering design, HTML, CSS, JavaScript, and AJAX.",
      skills: ["Front-End Development", "Web Design", "HTML", "CSS", "JavaScript", "AJAX"],
      icon: "Layout",
      color: "accent",
      verified: true
    },
    {
      id: 11,
      title: "Full-Stack Developer Track - 1 Million Arab Coders",
      issuer: "Udacity",
      date: "June 2018",
      credentialId: "UDACITY-FULLSTACK",
      description: "Full-stack development track covering both front-end and back-end technologies.",
      skills: ["Full Stack Development", "Frontend Development", "Backend Development", "Django"],
      icon: "Layers",
      color: "success",
      verified: true
    },
    {
      id: 12,
      title: "Become a Full Stack Developer with Spring, AWS and Stripe",
      issuer: "Udemy",
      date: "May 2018",
      credentialId: "UDEMY-SPRING-AWS",
      description: "Comprehensive full-stack development course covering Spring Framework, AWS, and payment integration.",
      skills: ["Spring Framework", "Java Development", "AWS", "RESTful APIs", "Backend Development"],
      icon: "Leaf",
      color: "primary",
      verified: true
    },
    {
      id: 13,
      title: "Front-End Developer Track - 1 Million Arab Coders",
      issuer: "Udacity",
      date: "April 2018",
      credentialId: "UDACITY-FRONTEND",
      description: "Front-end developer track focused on modern web development techniques and best practices.",
      skills: ["Front-End Development", "Web Design", "JavaScript", "Responsive Design"],
      icon: "Monitor",
      color: "secondary",
      verified: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
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
      },
      warning: {
        bg: 'bg-warning-100',
        text: 'text-warning-600',
        border: 'border-warning-200'
      },
      error: {
        bg: 'bg-error-100',
        text: 'text-error-600',
        border: 'border-error-200'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  const toggleExpanded = (certificateId) => {
    setExpandedCertificate(expandedCertificate === certificateId ? null : certificateId);
  };

  return (
    <section id="certificates" className="py-20 bg-background">
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
              Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive collection of certifications demonstrating continuous learning
              and expertise across various technologies and methodologies.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((certificate) => {
              const colorClasses = getColorClasses(certificate.color);
              const isExpanded = expandedCertificate === certificate.id;

              return (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  className="card hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  {/* Certificate Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon name={certificate.icon} size={24} className={colorClasses.text} />
                      </div>

                      <div className="flex items-center space-x-2">
                        {certificate.verified && (
                          <div className="flex items-center px-2 py-1 bg-success-100 text-success-600 rounded-full text-xs font-medium">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Verified
                          </div>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
                      {certificate.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-text-secondary">
                        <Icon name="Building" size={14} className="mr-2 flex-shrink-0" />
                        <span className="truncate">{certificate.issuer}</span>
                      </div>

                      <div className="flex items-center text-sm text-text-secondary">
                        <Icon name="Calendar" size={14} className="mr-2 flex-shrink-0" />
                        <span>{certificate.date}</span>
                      </div>

                      <div className="flex items-center text-sm text-text-secondary">
                        <Icon name="Hash" size={14} className="mr-2 flex-shrink-0" />
                        <span className="truncate font-mono text-xs">{certificate.credentialId}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {certificate.description}
                    </p>

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {certificate.skills.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 2 && (
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium">
                          +{certificate.skills.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpanded(certificate.id)}
                      className="flex items-center text-primary hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                    >
                      <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
                      <Icon
                        name={isExpanded ? "ChevronUp" : "ChevronDown"}
                        size={16}
                        className="ml-1 transition-transform duration-200"
                      />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-border bg-secondary-50"
                    >
                      <div className="pt-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                          <Icon name="Award" size={16} className="mr-2 text-primary" />
                          Skills Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {certificate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Certification Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
                These certifications represent my dedication to continuous learning and professional development.
                Each certification has enhanced my technical skills and provided valuable insights into industry
                best practices and emerging technologies.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">11+</h4>
                  <p className="text-text-secondary">Professional Certifications</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mb-3">
                    <Icon name="TrendingUp" size={32} className="text-success-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">100%</h4>
                  <p className="text-text-secondary">Verified Credentials</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-3">
                    <Icon name="BookOpen" size={32} className="text-accent-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">Ongoing</h4>
                  <p className="text-text-secondary">Learning Journey</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;