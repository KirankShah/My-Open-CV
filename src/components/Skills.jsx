import { motion } from 'framer-motion';
import { Shield, Cpu, BarChart, CheckCircle, Lock, FileText, Users } from 'lucide-react';
import { skillsData } from '../data/skills';

const Skills = () => {
  // Icon mapping
  const iconMap = {
    'shield-check': Shield,
    'cpu': Cpu,
    'bar-chart': BarChart,
    'check-circle': CheckCircle,
    'lock': Lock,
    'file-text': FileText,
    'users': Users,
  };

  // Skill level colors
  const levelColors = {
    expert: 'bg-primary-500',
    advanced: 'bg-accent-cyan',
    intermediate: 'bg-dark-500',
  };

  return (
    <section id="skills" className="section-padding bg-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Skills & </span>
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Deep expertise across compliance, technology, analytics, and leadership
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon] || Shield;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-8 hover:border-primary-500/30 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-dark-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-dark-500 uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill level bar */}
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: skill.level === 'expert' ? '100%' : 
                                   skill.level === 'advanced' ? '75%' : '50%' 
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full rounded-full ${levelColors[skill.level] || levelColors.intermediate}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill level legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-500 rounded" />
            <span className="text-dark-400 text-sm">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent-cyan rounded" />
            <span className="text-dark-400 text-sm">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-dark-500 rounded" />
            <span className="text-dark-400 text-sm">Intermediate</span>
          </div>
        </motion.div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-500/5 to-accent-cyan/5 border border-primary-500/20 rounded-xl p-8">
            <p className="text-lg text-dark-300 leading-relaxed">
              <span className="text-white font-bold">Core Strength:</span> Rare combination of deep regulatory compliance expertise with hands-on technology implementation. Not just compliance oversight — I build the solutions that make compliance more effective, efficient, and audit-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
