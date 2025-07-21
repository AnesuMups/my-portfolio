import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-accent-teal font-medium"
            >
              <span>Hello, I'm</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-space font-bold leading-tight"
            >
              <span className="text-text-light dark:text-text-dark">Hello, I'm </span>
              <span className="text-gradient">Anesu Mupandawana</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl font-space font-semibold text-text-light dark:text-text-dark"
            >
              Frontend Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed"
            >
              Crafting solutions that matter. Built in Zimbabwe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>See My Work</span>
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Anesu Mupandawana cv.pdf';
                  link.download = 'Anesu_Mupandawana_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </motion.div>


          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-sky rounded-full opacity-20 animate-mbira-pulse"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary to-accent-sky rounded-full p-1">
                  <div className="w-full h-full bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center overflow-hidden">
                    {/* Professional Profile Image */}
                    <img 
                      src="/profile-image.jpg" 
                      alt="Anesu Mupandawana - Frontend Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center"
                >
                                      <div className="w-8 h-8 bg-accent-teal rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
                                <div className="absolute top-10 -left-10 w-6 h-6 bg-accent-sky rounded-full animate-pulse"></div>
                              <div className="absolute bottom-20 -right-8 w-4 h-4 bg-accent-teal rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 