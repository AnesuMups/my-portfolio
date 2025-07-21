import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS3', 'Tailwind'],
    backend: ['Node.js', 'Python', 'JavaScript'],
    database: ['MySQL', 'Firebase', 'PostgreSQL', 'MS Excel'],
    programming: ['JavaScript', 'Python', 'TypeScript'],
    ai: ['OpenAI API', 'PyTorch', 'Conversational AI'],
    tools: ['Git', 'Vercel', 'Postman']
  };



  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
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
            About <span className="text-gradient">Me</span>
          </h2>

        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* About Me Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mb-16"
          >
            <div className="space-y-4 text-white leading-relaxed text-lg">
              <p>
                As a versatile frontend developer with partial full-stack experience, I build web interfaces that are both visually engaging and highly functional. My main focus is designing dynamic user experiences through creative UI solutions, while occasionally contributing to backend development to deliver more holistic products.
              </p>
              <p>
                My interests are rooted in the intersection of web technology and artificial intelligence. I have practical experience working with large language models and developing advanced conversational AI systems using retrieval-augmented generation techniques. This unique mix allows me to enhance digital products with smart, interactive features.
              </p>
              <p>
                If you're looking to enrich your applications with intelligent language-powered solutions or automate complex tasks using multi-agent AI, I bring both the technical know-how and innovative approach to make that vision a reality.
              </p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills Header */}
            <div className="text-center">
              <h3 className="text-3xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4">
                Technical <span className="text-blue-600 dark:text-blue-300">Skills</span>
              </h3>
              <p className="text-blue-600 dark:text-blue-300 mb-12">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  Database & Storage
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.database.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Programming Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.programming.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* AI & ML */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  AI & Machine Learning
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.ai.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700"
              >
                <h4 className="text-xl font-space font-bold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-600"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 