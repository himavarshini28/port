import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "RentIt",
      description: "A rental marketplace platform connecting property owners with tenants through an intuitive interface with property listings and booking system.",
      longDescription: "RentIt is a full-stack rental marketplace that transforms the property rental experience. Property owners can create detailed listings with photos and descriptions, while tenants can search, filter, and book properties easily. The platform features user authentication, property management tools, booking system, and real-time communication between users.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/himavarshini28/RentIt",
      live: "https://rent-it-dusky.vercel.app/",
      features: ["Property Listings", "Search & Filter", "Booking System", "User Authentication"]
    },
    {
      title: "WD-Compiler",
      description: "An online code compiler for HTML, CSS, and JavaScript where developers can write code and see live output instantly, with code sharing capabilities.",
      longDescription: "WD-Compiler is a web-based development environment that allows developers to write HTML, CSS, and JavaScript code with real-time preview. Users can see their code output instantly on the right side of the screen, making it perfect for quick prototyping and learning. The platform includes features for sharing code snippets with friends and collaborating on web development projects.",
      technologies: ["React", "Node.js", "Express", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/himavarshini28/WD-compiler",
      live: "https://wd-compiler-9hr6.vercel.app/",
      features: ["Live Code Preview", "HTML/CSS/JS Editor", "Code Sharing", "Real-time Output", "Responsive Design"]
    },
    {
      title: "TODO CLI",
      description: "A command-line interface application for managing todos directly from the terminal, designed as a fun developer tool for task management.",
      longDescription: "TODO CLI is a lightweight command-line application that allows developers to manage their tasks efficiently from the terminal. Built for developers who prefer working in the command line, this tool provides a simple and fast way to add, view, update, and delete todos without leaving the terminal environment. Perfect for quick task management during development sessions.",
      technologies: ["Node.js", "JSON"],
      github: "https://github.com/himavarshini28/todo-cli",
      live: "",
      features: ["Command Line Interface", "Add/Delete Todos", "View Todo List", "JSON Data Storage", "Terminal Based"]
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
                    <li key={index} className="flex items-center text-gray text-sm gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-4"></div>
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
                {projects[selectedProject].live && (
                  <a
                    href={projects[selectedProject].live}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
