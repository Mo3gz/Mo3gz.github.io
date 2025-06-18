import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const EducationSection = () => {
  const educationData = {
    degree: "Bachelor of Computer Science",
    university: "Cairo University",
    location: "Cairo, Egypt",
    duration: "2021 - 2025",
    gpa: "2.7/4.0",
    status: "Graduated",
    description: `Completed a comprehensive Computer Science program with focus on software engineering, algorithms, and system design. Gained strong foundation in programming languages, database systems, and software development methodologies.`,
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Development",
      "Object-Oriented Programming",
      "System Analysis & Design"
    ],
    achievements: [
      "Led final year project team of 5 students",
      "Participated in ACM programming contests",
      "Member of Computer Science Student Association"
    ]
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
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
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                {/* University Logo/Icon */}
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="GraduationCap" size={32} className="text-primary" />
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {educationData.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">
                        {educationData.university}
                      </p>
                      <div className="flex items-center text-text-secondary mb-2">
                        <Icon name="MapPin" size={16} className="mr-2" />
                        <span>{educationData.location}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 bg-success-100 text-success-600 rounded-full text-sm font-medium mb-2">
                        <Icon name="CheckCircle" size={16} className="mr-1" />
                        {educationData.status}
                      </div>
                      <p className="text-text-secondary font-medium">{educationData.duration}</p>
                      <p className="text-text-secondary">GPA: {educationData.gpa}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {educationData.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                        <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
                        Relevant Coursework
                      </h4>
                      <div className="space-y-2">
                        {educationData.coursework.map((course, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-text-secondary">{course}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                        <Icon name="Award" size={20} className="mr-2 text-primary" />
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        {educationData.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-start"
                          >
                            <Icon name="Star" size={16} className="text-warning-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;