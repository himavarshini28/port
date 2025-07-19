import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics. Built with modern technologies to ensure scalability and performance.",
      longDescription: "This comprehensive e-commerce platform handles everything from product management to payment processing. Features include real-time inventory tracking, advanced analytics dashboard, user authentication, shopping cart functionality, and integrated payment systems. The platform is built to scale and handle high traffic loads efficiently.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Payment Integration", "Real-time Analytics", "Inventory Management", "User Authentication", "Admin Dashboard"]
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      longDescription: "A comprehensive project management solution designed for teams. Includes task assignment, progress tracking, real-time notifications, file sharing, and team collaboration features. Built with modern technologies to ensure smooth real-time communication and data synchronization.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Real-time Collaboration", "Task Assignment", "Progress Tracking", "File Sharing", "Team Chat"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights, data visualization, and predictive modeling.",
      longDescription: "An intelligent analytics platform that combines traditional data analysis with machine learning capabilities. Features interactive dashboards, predictive analytics, data visualization, and automated reporting. The system can process large datasets and provide actionable insights for business decision-making.",
      technologies: ["Python", "React", "TensorFlow", "D3.js", "FastAPI"],
      github: "https://github.com",
      live: "https://demo.com",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Real-time Processing", "Automated Reports"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Project List */}
          <div className="lg:col-span-2 space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedProject === index ? 'bg-gray-800 text-white border-white shadow-lg' : 'hover:bg-gray-900'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-gray text-sm">
                  {project.technologies.slice(0, 3).join(' | ')}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:col-span-3">
            <div className="card h-full">
              <h3 className="text-2xl font-bold text-white mb-3">
                {projects[selectedProject].title}
              </h3>
              
              <p className="text-gray mb-4 leading-relaxed text-sm">
                {projects[selectedProject].longDescription}
              </p>
              
              <div className="mb-4">
                <h4 className="text-white text-base font-semibold mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white text-base font-semibold mb-2">Technologies Used</h4>
                <p className="text-gray text-sm">
                  {projects[selectedProject].technologies.join(' | ')}
                </p>
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
