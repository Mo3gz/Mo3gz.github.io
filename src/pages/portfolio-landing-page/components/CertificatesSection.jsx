import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const CertificatesSection = () => {
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  const certificatesData = [
    {
      id: 1,
      title: "Huawei Certified ICT Associate - Artificial Intelligence",
      issuer: "Huawei ICT Academy",
      date: "August 2022",
      credentialId: "HCIA-AI-2022-08-001",
      description: "Comprehensive certification covering AI fundamentals, machine learning algorithms, deep learning frameworks, and practical AI implementation.",
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Computer Vision", "Natural Language Processing"],
      icon: "Brain",
      color: "success",
      verified: true
    },
    {
      id: 2,
      title: "Oracle Certified Associate - Java SE 8 Programmer",
      issuer: "Oracle Corporation",
      date: "March 2023",
      credentialId: "OCA-JAVA-2023-03-002",
      description: "Professional certification demonstrating proficiency in Java SE 8 programming, object-oriented concepts, and core Java APIs.",
      skills: ["Java", "Object-Oriented Programming", "Java APIs", "Exception Handling", "Collections Framework"],
      icon: "Coffee",
      color: "primary",
      verified: true
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "January 2023",
      credentialId: "AZ-900-2023-01-003",
      description: "Foundational certification covering Azure cloud services, security, privacy, compliance, and Azure pricing and support.",
      skills: ["Azure Cloud Services", "Cloud Computing", "Azure Security", "Cloud Architecture", "Azure Pricing"],
      icon: "Cloud",
      color: "accent",
      verified: true
    },
    {
      id: 4,
      title: "Spring Professional Certification",
      issuer: "VMware (Pivotal)",
      date: "November 2022",
      credentialId: "SPRING-PRO-2022-11-004",
      description: "Advanced certification demonstrating expertise in Spring Framework, Spring Boot, and enterprise application development.",
      skills: ["Spring Framework", "Spring Boot", "Dependency Injection", "Spring MVC", "Spring Data"],
      icon: "Leaf",
      color: "success",
      verified: true
    },
    {
      id: 5,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2022",
      credentialId: "AWS-CCP-2022-09-005",
      description: "Entry-level certification validating overall understanding of AWS Cloud, services, and terminology.",
      skills: ["AWS Cloud Services", "Cloud Architecture", "AWS Security", "AWS Pricing", "Cloud Best Practices"],
      icon: "Server",
      color: "warning",
      verified: true
    },
    {
      id: 6,
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "July 2022",
      credentialId: "CSM-2022-07-006",
      description: "Professional certification in Scrum methodology, agile project management, and team leadership.",
      skills: ["Scrum Methodology", "Agile Development", "Project Management", "Team Leadership", "Sprint Planning"],
      icon: "Users",
      color: "secondary",
      verified: true
    },
    {
      id: 7,
      title: "Google IT Support Professional Certificate",
      issuer: "Google (via Coursera)",
      date: "May 2022",
      credentialId: "GOOGLE-IT-2022-05-007",
      description: "Comprehensive program covering IT fundamentals, networking, operating systems, system administration, and security.",
      skills: ["IT Support", "Network Administration", "System Administration", "Troubleshooting", "IT Security"],
      icon: "Monitor",
      color: "primary",
      verified: true
    },
    {
      id: 8,
      title: "Docker Certified Associate (DCA)",
      issuer: "Docker Inc.",
      date: "April 2022",
      credentialId: "DCA-2022-04-008",
      description: "Professional certification demonstrating skills in containerization, Docker orchestration, and container management.",
      skills: ["Docker", "Containerization", "Docker Compose", "Container Orchestration", "DevOps"],
      icon: "Package",
      color: "accent",
      verified: true
    },
    {
      id: 9,
      title: "Linux Professional Institute Certification (LPIC-1)",
      issuer: "Linux Professional Institute",
      date: "February 2022",
      credentialId: "LPIC-1-2022-02-009",
      description: "Entry-level Linux certification covering system administration, command line, and Linux fundamentals.",
      skills: ["Linux Administration", "Command Line", "System Configuration", "Shell Scripting", "Network Configuration"],
      icon: "Terminal",
      color: "success",
      verified: true
    },
    {
      id: 10,
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "December 2021",
      credentialId: "CEH-2021-12-010",
      description: "Professional certification in ethical hacking, penetration testing, and cybersecurity assessment techniques.",
      skills: ["Ethical Hacking", "Penetration Testing", "Cybersecurity", "Network Security", "Vulnerability Assessment"],
      icon: "Shield",
      color: "error",
      verified: true
    },
    {
      id: 11,
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      date: "October 2021",
      credentialId: "MDB-DEV-2021-10-011",
      description: "Professional certification demonstrating proficiency in MongoDB database development, querying, and application integration.",
      skills: ["MongoDB", "NoSQL Databases", "Database Design", "Aggregation Framework", "Database Performance"],
      icon: "Database",
      color: "success",
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
              Professional Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive collection of professional certifications demonstrating continuous learning 
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