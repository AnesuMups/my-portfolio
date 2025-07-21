import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Agriculture Marketplace for Smallholder Farmers",
      description: "A comprehensive school fee crowdfunding platform specifically designed for Zimbabwe. The application features a professional, trust-building design tailored to support students in need of financial assistance. It includes featured campaigns, detailed student profiles, and real-time progress tracking, with support for both USD and ZWL donations. The platform enables seamless social sharing, donor recognition, and secure payment processing. The interface is fully responsive, with smooth animations, intuitive navigation, and a warm color scheme of blues and oranges to convey approachability and reliability across all devices.",
      image: "/agric.jpg",
      tech: ["React", "Node.js", "Vite", "Tailwind Css", "Javascript"],
      github: "#",
      live: "https://agric-market-place.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "School Fee Crowdfunding Platform for Zimbabwe",
      description: "A purpose-built web application designed to help students in Zimbabwe raise school fees through community and donor support. The platform features secure donation processing, real-time campaign progress tracking, and professional student profiles to build trust and transparency. Key functionalities include leaderboards, social media sharing, and multi-currency support (USD/ZWL). With a clean, responsive design using warm blues and oranges, the platform offers an engaging user experience enhanced by smooth animations, micro-interactions, and secure payment indicators.",
      image: "/images (1).jpg",
      tech: ["React", "Node.js", "Vite", "Tailwind Css", "Javascript"],
      github: "#",
      live: "https://school-fees-app-two.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Harare City Council Voice Assistance Chatbot",
      description: "I've developed a voice-assisted chatbot concept specifically designed to bridge the communication gap between the Harare City Council and its residents. The chatbot provides real-time information on municipal services and supports users with legal, health, or accessibility challenges. Built with Natural Language Processing (NLP), it offers a user-friendly, multilingual interface tailored to Harare’s diverse population. Key features include service alerts for critical issues, an integrated feedback system for improving city operations, and support for inclusive, voice-based interactions. This solution aims to modernize local governance, promote civic engagement, and improve service delivery within the city.",
      image: "/download (4).jpg",
      tech: ["React", "Node.js", "TypeScript", "Tailwind Css", "Shadcn UI", "Web API"],
      github: "#",
      live: "https://cityofharare-voice-assistant.vercel.app",
      featured: true
    }
  ];



  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white mb-12 text-center">
            A collection of projects that showcase my skills in front-end development, user experience design, and problem-solving.
          </p>
        </motion.div>



        {/* Projects Grid */}
        <div className="relative">
          <div
            id="projects-scroll"
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 lg:w-96"
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                                         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-sky/5 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                                             <div className="absolute top-4 left-4 bg-accent-teal text-background-dark px-3 py-1 rounded-full text-sm font-medium z-20">
                        Featured
                      </div>
                    )}

                    {/* Diagonal Cut Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent z-10"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-all duration-300 group-hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 group-hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Diagonal Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-primary opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 