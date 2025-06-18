import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillsData = {
    languages: {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "C#", icon: "Hash" },
        { name: "Python", icon: "Snake" },
        { name: "JavaScript", icon: "Zap" },
        { name: "C++", icon: "Cpu" },
        { name: "Java", icon: "Coffee" }
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "HTML", icon: "Layout" },
        { name: "CSS", icon: "Palette" },
        { name: "JavaScript", icon: "Zap" },
        { name: "AJAX", icon: "RefreshCw" },
        { name: "Tailwind CSS", icon: "Wind" },
        { name: "Figma", icon: "Pen" },
        { name: "React", icon: "Atom" },
        { name: "Qt Creator", icon: "Square" },
        { name: "Web Design", icon: "Globe" },
        { name: "GUI Design", icon: "Smartphone" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Java Spring Boot", icon: "Leaf" },
        { name: ".NET Core Web API", icon: "Box" },
        { name: "ASP.NET MVC", icon: "Grid" },
        { name: "PHP", icon: "FileCode" },
        { name: "Laravel", icon: "Star" },
        { name: "Django", icon: "Package" },
        { name: "RESTful APIs", icon: "Link" },
        { name: "API Integration", icon: "Paperclip" },
        { name: "Data Processing", icon: "Database" },
        { name: "Full-Stack Development", icon: "Layers" }
      ]
    },
    database: {
      title: "Database Management",
      icon: "Database",
      skills: [
        { name: "Microsoft SQL Server", icon: "Database" },
        { name: "MySQL", icon: "HardDrive" },
        { name: "SQLite", icon: "Disc" },
        { name: "SQL Server Programming", icon: "Code" }
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: "Package",
      skills: [
        { name: "Selenium", icon: "PlayCircle" },
        { name: "Pygame", icon: "Gamepad" },
        { name: "Web Scraping", icon: "Spider" },
        { name: "Design Patterns", icon: "Puzzle" }
      ]
    },
    devtools: {
      title: "Development Tools",
      icon: "Wrench",
      skills: [
        { name: "GitHub", icon: "GitBranch" },
        { name: "JIRA", icon: "Trello" },
        { name: "XAMPP", icon: "Server" },
        { name: "Gtest", icon: "TestTube" },
        { name: "JSON", icon: "Braces" }
      ]
    },
    software: {
      title: "Software Design & Engineering",
      icon: "Cog",
      skills: [
        { name: "Algorithms", icon: "GitCommit" },
        { name: "Data Structures", icon: "Box" },
        { name: "SDLC (Software Development Life Cycle)", icon: "RefreshCw" },
        { name: "Multi-threaded Programming", icon: "Network" },
        { name: "Object-Oriented Programming (OOP)", icon: "Package" },
        { name: "Desktop Application Development", icon: "Cpu" }
      ]
    },
    networking: {
      title: "Networking & Operating Systems",
      icon: "Globe",
      skills: [
        { name: "Linux Fundamentals", icon: "Terminal" },
        { name: "Linux System Administration", icon: "Server" },
        { name: "Network Configuration and Troubleshooting", icon: "Wifi" },
        { name: "User Account Management", icon: "Users" },
        { name: "Socket Programming", icon: "Link" },
        { name: "UDP", icon: "Send" },
        { name: "Ethernet", icon: "Cable" },
        { name: "DNS", icon: "Globe" }
      ]
    },
    optimization: {
      title: "Optimization & Modeling",
      icon: "TrendingUp",
      skills: [
        { name: "Stochastic Modeling", icon: "LineChart" },
        { name: "Systems Modeling", icon: "GitMerge" },
        { name: "Linear Programming", icon: "TrendingUp" },
        { name: "Non-Linear Programming", icon: "Activity" },
        { name: "Learning from Data", icon: "BarChart" },
        { name: "Computational Intelligence", icon: "Brain" },
        { name: "Optimization Algorithms", icon: "Settings" }
      ]
    },
    other: {
      title: "Other Proficiencies",
      icon: "Plus",
      skills: [
        { name: "Cloud Computing", icon: "Cloud" },
        { name: "Amazon Web Services (AWS)", icon: "Server" },
        { name: "AI Training", icon: "Brain" }
      ]
    }
  };

  const categories = Object.keys(skillsData);

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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
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
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains of software development.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const categoryData = skillsData[category];
                const isActive = activeCategory === category;
                
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary border border-border'
                    }`}
                  >
                    <Icon name={categoryData.icon} size={20} className="mr-2" />
                    <span className="hidden sm:inline">{categoryData.title}</span>
                    <span className="sm:hidden">{categoryData.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="card p-4 hover:shadow-lg transition-all duration-200 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon name={skill.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Continuous Learning
              </h3>
              <p className="text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous improvement and staying updated with the latest technologies. 
                Currently expanding my knowledge in cloud technologies, microservices architecture, 
                and advanced system design patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-primary-50 rounded-lg">
                  <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
                  <span className="text-primary font-medium">Always Learning</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-success-50 rounded-lg">
                  <Icon name="Users" size={20} className="text-success-600 mr-2" />
                  <span className="text-success-600 font-medium">Team Collaboration</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-accent-50 rounded-lg">
                  <Icon name="Zap" size={20} className="text-accent-600 mr-2" />
                  <span className="text-accent-600 font-medium">Problem Solving</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;