import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen } from 'lucide-react';
import { certificationsData, educationData, continuingEducationData } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Certifications & </span>
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Continuous professional development across compliance, technology, audit, and finance
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3"
          >
            <Award className="w-7 h-7 text-primary-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="text-primary-400 text-sm font-bold">{cert.year}</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h4>

                <p className="text-dark-400 text-sm mb-3">
                  {cert.issuer}
                </p>

                <span className="inline-block px-3 py-1 bg-dark-700/50 border border-dark-600 rounded-lg text-xs text-dark-400">
                  {cert.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-7 h-7 text-primary-400" />
            Formal Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-cyan/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <span className="text-accent-cyan text-sm font-bold">{edu.year}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h4>

                <p className="text-primary-400 font-medium mb-2">
                  {edu.field}
                </p>

                <p className="text-dark-400 text-sm mb-1">
                  {edu.institution}
                </p>

                <p className="text-dark-500 text-xs">
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        {continuingEducationData && continuingEducationData.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3"
            >
              <BookOpen className="w-7 h-7 text-primary-400" />
              Continuing Professional Development
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {continuingEducationData.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark-800/50 border border-dark-700 rounded-lg p-4 hover:border-primary-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-4 h-4 text-primary-400" />
                    <span className="text-xs text-dark-500">{course.year}</span>
                  </div>

                  <h5 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {course.title}
                  </h5>

                  <p className="text-xs text-dark-400">
                    {course.provider}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certification summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-xl p-8">
            <p className="text-lg text-dark-300 leading-relaxed">
              <span className="text-white font-bold">Unique Multi-Disciplinary Expertise:</span> One of the few professionals holding all six certifications spanning AML/CFT (CAMS, CAMS-Audit), IT Audit (CISA), Cybersecurity (CISSP), and Finance (FCCA) — enabling a rare combination of compliance depth, technical capability, and executive leadership.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
