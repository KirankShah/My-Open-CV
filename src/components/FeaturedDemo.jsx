import { motion } from 'framer-motion';
import { Play, Github, ExternalLink, Youtube } from 'lucide-react';
import { projectsData } from '../data/projects';

const FeaturedDemo = () => {
  const featuredProject = projectsData.find(p => p.featured);
  
  if (!featuredProject) return null;

  return (
    <section id="featured-demo" className="section-padding bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Featured Project</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Showcasing AI-driven compliance innovation that transforms AML screening operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Demo section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 shadow-2xl group">
              {featuredProject.demoVideo ? (
                <video
                  controls
                  poster={featuredProject.thumbnail}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if video not found
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                >
                  <source src={featuredProject.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : featuredProject.thumbnail ? (
                <img
                  src={featuredProject.thumbnail}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-dark-800 to-dark-900">
                  <Play className="w-20 h-20 text-primary-500" />
                </div>
              )}
              
              {/* Fallback display if video fails to load */}
              <div className="hidden items-center justify-center h-full bg-gradient-to-br from-dark-800 to-dark-900">
                <div className="text-center p-8">
                  <Play className="w-20 h-20 text-primary-500 mx-auto mb-4" />
                  <p className="text-dark-400">Demo video will be available soon</p>
                </div>
              </div>
            </div>

            {/* Video thumbnail overlay when not playing */}
            {featuredProject.thumbnail && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              </div>
            )}
          </motion.div>

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-primary-400 font-medium mb-4">
                {featuredProject.category}
              </p>
              <p className="text-dark-300 text-lg leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Domain Knowledge</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-lg text-sm text-dark-300 hover:border-primary-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {featuredProject.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-dark-300">
                    <span className="text-primary-500 mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {featuredProject.metrics && featuredProject.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {featuredProject.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-lg p-4 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="text-2xl font-bold text-primary-400">{metric.value}</div>
                    <div className="text-sm text-dark-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {featuredProject.youtubeLink && (
                <a
                  href={featuredProject.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Watch on YouTube
                </a>
              )}
              {featuredProject.githubLink && (
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {featuredProject.liveDemo && (
                <a
                  href={featuredProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Status badge */}
            {featuredProject.status && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-300 text-sm font-medium">
                  {featuredProject.status} • {featuredProject.completionDate}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDemo;
