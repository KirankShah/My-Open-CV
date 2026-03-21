import { motion } from 'framer-motion';
import { Shield, Cpu, BarChart3, CheckCircle, Users, Zap } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: 'Regulatory Depth',
      description: 'MLRO-level expertise managing enterprise AML/CFT programs across 200+ branches with zero critical regulatory findings',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Cpu,
      title: 'Technology Capability',
      description: 'Hands-on AI/ML implementation using Python, LangChain, and advanced analytics to build production-ready compliance solutions',
      color: 'from-accent-cyan to-primary-500'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Compliance',
      description: 'Expert in Power BI dashboards, predictive analytics, and data modeling that reduced false positives by 35% and manual reporting by 70%',
      color: 'from-primary-600 to-accent-cyan'
    },
    {
      icon: CheckCircle,
      title: 'Audit & Internal Control Strength',
      description: '6 professional certifications (CAMS-Audit, CISA, CISSP) with deep IT audit, cybersecurity, and governance expertise',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: Users,
      title: 'Training & Leadership',
      description: 'Developed and delivered AML/CFT training to 5000+ staff achieving 95%+ assessment scores and strong stakeholder management',
      color: 'from-accent-cyan to-primary-600'
    },
    {
      icon: Zap,
      title: 'AML/CFT Transformation Experience',
      description: 'Led regulatory-ready compliance transformations combining policy development, technology implementation, and operational excellence',
      color: 'from-primary-600 to-primary-500'
    }
  ];

  return (
    <section id="differentiators" className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Key </span>
            <span className="text-gradient">Differentiators</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            A unique combination of regulatory expertise, technical capability, and strategic leadership
          </p>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl p-8 hover:border-primary-500/30 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-dark-300 leading-relaxed">
                {item.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-dark-400 mb-6">
            Interested in learning how these capabilities can add value to your organization?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;
