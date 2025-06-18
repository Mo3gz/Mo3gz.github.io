import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Fashion Quantity Optimization System",
      description: "Developed a full-stack optimization system using Spring Boot backend that integrates multiple optimization algorithms (Genetic Algorithm and Ant Colony) to maximize fashion retail profitability.",
      longDescription: `Developed a full-stack optimization system using Spring Boot backend that integrates multiple optimization algorithms (Genetic Algorithm and Ant Colony) to maximize fashion retail profitability. Implemented RESTful API endpoints that process product data and budget constraints, orchestrating parallel algorithm execution using CompletableFuture for improved performance. Created a data processing pipeline that handles CSV/Excel inputs and transforms business parameters into optimization models, ensuring data integrity throughout the system. Designed and integrated Python optimization services with Java backend through a robust integration layer, enabling complex mathematical modeling while maintaining system stability. Built an interactive web dashboard with real-time visualization of optimization results, providing actionable business insights for production, pricing, and inventory decisions.`,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["Java Spring Boot", "Optimization Algorithms", "Full-Stack Development", "API Integration", "Data Processing"],
      category: "Full-Stack",
      role: "Team Leader",
      teamSize: 4,
      duration: "4 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/fashion-optimization",
      features: [
        "Real-time inventory tracking and management",
        "ML-based demand forecasting algorithms",
        "Automated reorder point calculations",
        "Comprehensive analytics and reporting dashboard",
        "Multi-store inventory synchronization",
        "Mobile-responsive admin interface"
      ]
    },
    {
      id: 2,
      title: "Laravel Registration Website",
      description: "Developed a multilingual user registration system using Laravel framework. Implemented secure authentication, form validation, and WhatsApp number verification. Created a responsive interface with English and Arabic language support.",
      longDescription: `Developed a multilingual user registration system using Laravel framework. Implemented secure authentication, form validation, and WhatsApp number verification. Created a responsive interface with English and Arabic language support.`,
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop",
      technologies: ["Laravel", "PHP", "XAMPP", "HTML", "Cascading Style Sheets (CSS)", "Tailwind CSS", "SQLite", "MySQL"],
      category: "Backend",
      role: "Lead Developer",
      teamSize: 3,
      duration: "2 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/laravel-registration",
      features: [
        "Secure user registration and authentication",
        "Email verification and password reset",
        "Role-based access control system",
        "User profile management interface",
        "Admin dashboard with user analytics",
        "Rate limiting and security measures"
      ]
    },
    {
      id: 3,
      title: "Garo Estate",
      description: "Developed Garo Estate, a dynamic real estate platform designed for users to browse, filter, and manage property listings with ease. The website features secure login and sign-up, detailed property views with pricing, location, and amenities, along with user profiles and a messaging system for inquiries.",
      longDescription: `Developed Garo Estate, a dynamic real estate platform designed for users to browse, filter, and manage property listings with ease. The website features secure login and sign-up, detailed property views with pricing, location, and amenities, along with user profiles and a messaging system for inquiries. Integrated APIs handle user, city, property, favorites, and inquiries to ensure seamless interactions and data management.`,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["HTML5", "Cascading Style Sheets (CSS)", "JavaScript", "ASP.NET MVC", "ASP.NET Web API"],
      category: "Full-Stack",
      role: "Project Manager",
      teamSize: 5,
      duration: "6 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/garo-estate",
      features: [
        "Property listing management system",
        "Advanced search and filtering options",
        "Client relationship management (CRM)",
        "Appointment scheduling system",
        "Document management and storage",
        "Financial transaction tracking"
      ]
    },
    {
      id: 4,
      title: "Secure Notes Organizer",
      description: "The \'Secure Notes Organizer\' is a desktop application designed to provide users with a secure and organized way to manage sensitive information. The primary focus of the application is to allow users to create, store, and organize notes in a secure environment.",
      longDescription: `The "Secure Notes Organizer" is a desktop application designed to provide users with a secure and organized way to manage sensitive information. The primary focus of the application is to allow users to create, store, and organize notes in a secure environment, ensuring the confidentiality of the stored information. A single server will be running that will save all the users' encrypted authentication data and all the notes. Multiple clients should be able to connect to the server allowing the users to login and see their notes, edit them or add new notes.`,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      technologies: ["Qt Creator", "Desktop Application Development", "MySQL", "JSON", "Gtest"],
      category: "Desktop Application",
      role: "Solo Developer",
      teamSize: 1,
      duration: "3 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/secure-notes",
      features: [
        "End-to-end encryption for all notes",
        "Rich text editor with formatting options",
        "Note categorization and tagging system",
        "Advanced search and filtering capabilities",
        "Cross-platform synchronization",
        "Biometric authentication support"
      ]
    },
    {
      id: 5,
      title: "Othello Game with GUI",
      description: "This project is a graphical implementation of the classic board game Othello. It combines a user-friendly menu interface built with Tkinter and an interactive game interface using Pygame. Users can play against another human or an AI opponent with adjustable difficulty levels.",
      longDescription: `This project is a graphical implementation of the classic board game Othello. It combines a user-friendly menu interface built with Tkinter and an interactive game interface using Pygame. Users can play against another human or an AI opponent with adjustable difficulty levels.`,
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      technologies: ["Pygame", "Python (Programming Language)", "Graphical User Interface (GUI)"],
      category: "Game Development",
      role: "Lead Developer",
      teamSize: 2,
      duration: "2 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/othello-game",
      features: [
        "Single-player mode with AI opponent",
        "Multiplayer support for two players",
        "Multiple AI difficulty levels",
        "Game replay and analysis features",
        "Comprehensive statistics tracking",
        "Intuitive user interface design"
      ]
    },
    {
      id: 6,
      title: "Flight Reservation System",
      description: "Developed a Java desktop application for a Flight Reservation System with SQLite database integration, enabling user management, flight bookings, and administrative control over flights and aircraft.",
      longDescription: `Developed a Java desktop application for a Flight Reservation System with SQLite database integration, enabling user management, flight bookings, and administrative control over flights and aircraft.`,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      technologies: ["Java", "SQLite"],
      category: "Desktop Application",
      role: "Developer",
      teamSize: 3,
      duration: "3 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/flight-reservation",
      features: [
        "User registration and authentication",
        "Flight search and booking",
        "Seat selection interface",
        "Admin panel for flight management",
        "Aircraft inventory system",
        "Booking confirmation and e-tickets"
      ]
    },
    {
      id: 7,
      title: "Student Affairs Website",
      description: "Developed a Student Management System for the Faculty of Computers and Information (FCI), featuring efficient student information management, department assignments, and status toggling.",
      longDescription: `Developed a Student Management System for the Faculty of Computers and Information (FCI), featuring efficient student information management, department assignments, and status toggling. The project utilized Django, Python, JavaScript, and CSS, with a focus on creating a user-friendly interface and seamless frontend-backend communication. Enhanced skills in web development, database management, and teamwork.`,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      technologies: ["Django", "Python (Programming Language)", "JavaScript", "HTML", "Cascading Style Sheets (CSS)", "AJAX"],
      category: "Web Application",
      role: "Technical Lead",
      teamSize: 6,
      duration: "5 months",
      status: "Completed",
      github: "https://github.com/Mo3gz/student-affairs",
      features: [
        "Student enrollment and registration system",
        "Course management and scheduling",
        "Grade tracking and transcript generation",
        "Attendance monitoring system",
        "Faculty and student communication portal",
        "Administrative dashboard and reporting"
      ]
    },
    {
      id: 8,
      title: "Toffee Shop",
      description: "Authored the SRS document for \'Toffee,\' an e-commerce platform for a sweets business, as part of the CS251 Software Engineering course, translating client needs into detailed system requirements.",
      longDescription: `Authored the SRS document for 'Toffee,' an e-commerce platform for a sweets business, as part of the CS251 Software Engineering course, translating client needs into detailed system requirements.`,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
      technologies: ["Figma"],
      category: "UI/UX Design",
      role: "Requirements Analyst",
      teamSize: 4,
      duration: "1 month",
      status: "Completed",
      github: "https://github.com/Mo3gz/toffee-shop",
      features: [
        "User story development",
        "Requirements gathering and documentation",
        "System architecture planning",
        "UI/UX wireframing",
        "Functional and non-functional requirements specification",
        "Use case development and documentation"
      ]
    }
  ];

  const categories = ["All", "Full-Stack", "Backend", "Desktop Application", "Game Development", "Web Application", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleGitHubClick = (e, githubUrl) => {
    e.stopPropagation();
    window.open(githubUrl, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-surface">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating expertise in full-stack development, 
              system design, and problem-solving capabilities.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-secondary-100 text-text-secondary hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="card overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* GitHub Link */}
                    <button
                      onClick={(e) => handleGitHubClick(e, project.github)}
                      className="absolute top-4 right-4 w-10 h-10 bg-surface/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-surface hover:scale-110"
                    >
                      <Icon name="Github" size={20} className="text-text-primary" />
                    </button>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-text-secondary">
                        <Icon name="Users" size={14} className="mr-1" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                      <div className="flex items-center">
                        <Icon name="Crown" size={14} className="mr-1 text-warning-500" />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details */}
                    <div className="flex items-center text-primary font-medium group-hover:text-primary-700 transition-colors duration-200">
                      <span>View Details</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-text-primary/50 backdrop-blur-sm z-1200 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-surface rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-surface/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-surface transition-colors duration-200"
                    >
                      <Icon name="X" size={20} className="text-text-primary" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold text-text-primary mb-2">
                          {selectedProject.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                          <div className="flex items-center">
                            <Icon name="Crown" size={16} className="mr-2 text-warning-500" />
                            <span>{selectedProject.role}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Users" size={16} className="mr-2 text-primary" />
                            <span>{selectedProject.teamSize} team members</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Clock" size={16} className="mr-2 text-accent-600" />
                            <span>{selectedProject.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => handleGitHubClick(e, selectedProject.github)}
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <Icon name="Github" size={20} />
                        <span>View on GitHub</span>
                      </button>
                    </div>

                    <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                      <p>{selectedProject.longDescription}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                        <Icon name="Star" size={20} className="mr-2 text-primary" />
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Icon name="CheckCircle" size={16} className="text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
                        <Icon name="Wrench" size={20} className="mr-2 text-primary" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-primary-50 text-primary rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;