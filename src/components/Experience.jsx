import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            17+ years of progressive leadership in AML/CFT, compliance technology, and financial crime risk management
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-[11px] md:left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-dark-700" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-1.5 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-dark-900 shadow-lg shadow-primary-500/50" />

              {/* Experience card */}
              <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6 md:p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-dark-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary-400" />
                      <span className="font-medium text-primary-300">{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {experience.type && (
                    <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-sm text-primary-400">
                      {experience.type}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-3 text-dark-300"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary-500 rounded-full" />
                      <p className="leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies/Skills used */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-dark-700">
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-700/50 border border-dark-600 rounded-lg text-xs text-dark-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CV CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-400 mb-6">
            Want to see the complete career history and detailed achievements?
          </p>
          <a
            href="/cv/Kiran_Shah_CV.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Briefcase className="w-5 h-5" />
            Download Complete CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
