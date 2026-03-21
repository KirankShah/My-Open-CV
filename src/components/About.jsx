import { motion } from 'framer-motion';
import { Award, TrendingUp, Shield, Users } from 'lucide-react';
import { profileData } from '../data/profile';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: `${profileData.yearsOfExperience}+` },
    { icon: Shield, label: 'Certifications', value: '6' },
    { icon: TrendingUp, label: 'Major Institutions', value: '6+' },
    { icon: Users, label: 'Team Training', value: '5000+' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Executive </span>
            <span className="text-gradient">Profile</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Combining deep regulatory expertise with technology innovation and executive leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Stats cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {profileData.executiveSummary.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg text-dark-300 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Value proposition highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-500/5 to-primary-600/5 border border-primary-500/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-3">Regulatory Depth</h4>
            <p className="text-dark-300">
              17+ years managing AML/CFT programs, MLRO experience, zero critical findings in regulatory examinations
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-cyan/5 to-primary-500/5 border border-accent-cyan/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-3">Technology Innovation</h4>
            <p className="text-dark-300">
              Built AI-assisted compliance solutions, reduced false positives by 35%, hands-on Python/AI/ML implementation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
