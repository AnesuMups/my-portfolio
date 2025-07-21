import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white mb-12 text-center">
            My professional experience and roles in technology and development.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent-sky/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
          >
            {/* Job Title and Company */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-space font-bold text-white mb-2">
                  Junior IT Support
                </h3>
                <p className="text-primary font-semibold text-lg">City of Harare</p>
              </div>
              <div className="text-sm text-white mt-2 lg:mt-0">
                Feb 2024 – Aug 2024
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Developing internal tools for data processing and reporting.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Troubleshoot and resolve technical support queries.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Administering Windows and Linux servers, including user account management and system updates.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Assisted in the maintenance and troubleshooting of hardware, software, and network issues to ensure minimal downtime.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Monitor network performance and implement security measures.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white">
                  Created IT procedures and system configurations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Timeline; 