import { motion } from 'framer-motion';
import { ExternalLink, FileText, Calendar } from 'lucide-react';
import { publicationsData } from '../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Publications & </span>
            <span className="text-gradient">Thought Leadership</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Sharing insights on AML/CFT, compliance technology, and regulatory innovation
          </p>
        </motion.div>

        {/* Publications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicationsData.map((publication, index) => (
            <motion.a
              key={publication.id}
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 card-hover cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-dark-800 overflow-hidden">
                {publication.thumbnail ? (
                  <img
                    src={publication.thumbnail}
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback gradient background
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                    <FileText className="w-12 h-12 text-primary-500" />
                  </div>
                )}
                
                {/* Fallback display */}
                <div className="hidden items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                  <FileText className="w-12 h-12 text-primary-500" />
                </div>

                {/* Type badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm border border-dark-700 rounded-lg">
                  <span className="text-xs text-primary-400 font-medium">{publication.type}</span>
                </div>

                {/* Featured badge */}
                {publication.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent-gold/90 backdrop-blur-sm border border-accent-gold rounded-lg">
                    <span className="text-xs text-dark-900 font-bold">Featured</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-primary-400">
                    <span className="font-medium">Read Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-colors line-clamp-2">
                  {publication.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-dark-400 mb-3">
                  <span className="font-medium text-primary-400">{publication.source}</span>
                  {publication.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{publication.date}</span>
                    </div>
                  )}
                </div>

                <p className="text-dark-300 text-sm mb-4 line-clamp-3">
                  {publication.description}
                </p>

                {/* Tags */}
                {publication.tags && publication.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-dark-700/50 border border-dark-600 rounded text-xs text-dark-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-400 mb-6">
            Follow my thought leadership on compliance technology and AML innovation
          </p>
          <a
            href="https://np.linkedin.com/in/kirankumarshah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
