import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics. Built with modern technologies to ensure scalability and performance.",
      longDescription: "This comprehensive e-commerce platform handles everything from product management to payment processing. Features include real-time inventory tracking, advanced analytics dashboard, user authentication, shopping cart functionality, and integrated payment systems. The platform is built to scale and handle high traffic loads efficiently.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Payment Integration", "Real-time Analytics", "Inventory Management", "User Authentication", "Admin Dashboard"]
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      longDescription: "A comprehensive project management solution designed for teams. Includes task assignment, progress tracking, real-time notifications, file sharing, and team collaboration features. Built with modern technologies to ensure smooth real-time communication and data synchronization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Real-time Collaboration", "Task Assignment", "Progress Tracking", "File Sharing", "Team Chat"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights, data visualization, and predictive modeling.",
      longDescription: "An intelligent analytics platform that combines traditional data analysis with machine learning capabilities. Features interactive dashboards, predictive analytics, data visualization, and automated reporting. The system can process large datasets and provide actionable insights for business decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "TensorFlow", "D3.js", "FastAPI"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Real-time Processing", "Automated Reports"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Project List */}
          <div className="lg:col-span-2 space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card cursor-pointer transition-all duration-300 ${
                  selectedProject === index ? 'bg-white text-black' : 'hover:bg-gray-900'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        selectedProject === index
                          ? 'bg-black text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs bg-gray-700 text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:col-span-3">
            <div className="card h-full">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {projects[selectedProject].title}
              </h3>
              
              <p className="text-gray mb-6 leading-relaxed">
                {projects[selectedProject].longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white text-lg font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-black border border-gray-400 rounded-full text-sm text-gray hover:bg-white hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={projects[selectedProject].github}
                  className="btn btn-outline flex items-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
                <a
                  href={projects[selectedProject].live}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
