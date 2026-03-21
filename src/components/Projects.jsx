import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
  // Filter non-featured projects (featured one is shown in FeaturedDemo section)
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Building AI-driven compliance solutions that transform operations
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 card-hover"
            >
              {/* Project thumbnail */}
              <div className="relative h-48 bg-dark-800 overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback gradient background
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                    <Play className="w-12 h-12 text-primary-500" />
                  </div>
                )}
                
                {/* Fallback display */}
                <div className="hidden items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                  <Play className="w-12 h-12 text-primary-500" />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm border border-dark-700 rounded-lg">
                  <span className="text-xs text-primary-400 font-medium">{project.category}</span>
                </div>

                {/* Status badge */}
                {project.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm border border-dark-700 rounded-lg">
                    <span className="text-xs text-dark-300 font-medium">{project.status}</span>
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>

                <p className="text-dark-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dark-700/50 border border-dark-600 rounded text-xs text-dark-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-dark-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 bg-dark-700/30 rounded">
                        <div className="text-lg font-bold text-primary-400">{metric.value}</div>
                        <div className="text-xs text-dark-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-dark-700">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-700/50 hover:bg-dark-700 border border-dark-600 hover:border-primary-500/50 rounded-lg text-sm text-dark-300 hover:text-primary-400 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500/50 rounded-lg text-sm text-primary-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {!project.githubLink && !project.liveDemo && project.publicationLinks && project.publicationLinks.length > 0 && (
                    <a
                      href={project.publicationLinks[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500/50 rounded-lg text-sm text-primary-400 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">
            More projects and technical demos coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
