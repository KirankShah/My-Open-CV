import { motion } from 'framer-motion';
import { Play, Youtube, Clock } from 'lucide-react';
import { videosData } from '../data/videos';

const Videos = () => {
  return (
    <section id="videos" className="section-padding bg-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Video </span>
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Technical demos, thought leadership, and professional insights
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 card-hover"
            >
              {/* Video player / thumbnail */}
              <div className="relative aspect-video bg-dark-800 overflow-hidden">
                {video.type === 'local' && video.videoPath ? (
                  // Local video file
                  <video
                    controls
                    poster={video.thumbnail}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  >
                    <source src={video.videoPath} type="video/mp4" />
                  </video>
                ) : video.type === 'youtube' && video.youtubeId ? (
                  // YouTube embed
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : video.thumbnail ? (
                  // Thumbnail-only display
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : (
                  // Placeholder
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                    <Play className="w-12 h-12 text-primary-500" />
                  </div>
                )}

                {/* Fallback display */}
                <div className="hidden items-center justify-center h-full bg-gradient-to-br from-primary-500/10 to-accent-cyan/10">
                  <div className="text-center p-4">
                    <Play className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                    <p className="text-dark-400 text-sm">Video will be available soon</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm border border-dark-700 rounded-lg">
                  <span className="text-xs text-primary-400 font-medium">{video.category}</span>
                </div>

                {/* Featured badge */}
                {video.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent-gold/90 backdrop-blur-sm border border-accent-gold rounded-lg">
                    <span className="text-xs text-dark-900 font-bold">Featured</span>
                  </div>
                )}

                {/* Duration badge */}
                {video.duration && (
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-dark-900/90 backdrop-blur-sm border border-dark-700 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-dark-400" />
                    <span className="text-xs text-dark-300">{video.duration}</span>
                  </div>
                )}
              </div>

              {/* Video details */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-colors line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-dark-300 text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-dark-700/50 border border-dark-600 rounded text-xs text-dark-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Publish date */}
                {video.publishDate && (
                  <div className="text-xs text-dark-500">
                    Published: {video.publishDate}
                  </div>
                )}

                {/* YouTube link button */}
                {video.type === 'youtube' && video.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 hover:border-red-600/50 rounded-lg text-sm text-red-400 transition-all"
                  >
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More videos coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-400 mb-6">
            More technical demos and compliance insights coming soon
          </p>
          <a
            href="https://www.youtube.com/@kirankumarshah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;
