import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm actively exploring new roles and always open to connecting. If you have a project in mind, a question, or simply want to start a conversation — don't hesitate to get in touch!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {/* Email Box */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-8 h-8 text-primary" />
              <span className="text-xl font-medium">anesumupandawana0@gmail.com</span>
            </div>
          </div>

          {/* Phone Numbers Box */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Phone</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-8 h-8 text-primary" />
                <span className="text-xl font-medium">+263 786107106</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-8 h-8 text-primary" />
                <span className="text-xl font-medium">+263 771691425</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 