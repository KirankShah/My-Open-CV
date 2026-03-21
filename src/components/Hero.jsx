import { motion } from 'framer-motion';
import { Download, Linkedin, MapPin, Play } from 'lucide-react';
import { profileData } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 backdrop-blur-lg border border-dark-700 rounded-full"
            >
              <MapPin className="w-4 h-4 text-primary-400" />
              <span className="text-dark-300 text-sm">{profileData.location}</span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
              >
                <span className="text-white">{profileData.name}</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-dark-300 font-medium"
              >
                {profileData.title}
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-dark-400 leading-relaxed max-w-xl"
            >
              {profileData.tagline}
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {profileData.badges.map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-lg"
                >
                  <span className="text-primary-300 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={profileData.cvPath}
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              
              <a
                href="#featured-demo"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View AI Demo
              </a>
              
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-full filter blur-2xl opacity-20 animate-pulse" />
              
              {/* Profile image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&size=400&background=0ea5e9&color=fff&bold=true`;
                  }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary-600 to-primary-700 px-6 py-4 rounded-2xl shadow-xl border border-primary-500/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{profileData.yearsOfExperience}+</div>
                  <div className="text-sm text-primary-200">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-dark-400 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
