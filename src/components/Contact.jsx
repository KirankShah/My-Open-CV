import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, Send, Twitter, Youtube } from 'lucide-react';
import { profileData } from '../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Let's </span>
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Open to opportunities in RegTech, FinTech, compliance technology, and financial crime risk management
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-dark-300 leading-relaxed mb-6">
                  I'm currently exploring opportunities where I can combine my 17+ years of AML/CFT expertise with technology innovation and strategic leadership.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  Whether you're looking for regulatory compliance leadership, compliance technology implementation, or strategic advisory — let's discuss how I can add value to your organization.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-500 text-sm">Email</div>
                    <div className="text-white font-medium">{profileData.email}</div>
                  </div>
                </a>


                <div className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-500 text-sm">Location</div>
                    <div className="text-white font-medium">{profileData.location}</div>
                  </div>
                </div>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-500 text-sm">LinkedIn</div>
                    <div className="text-white font-medium">Connect with me</div>
                  </div>
                </a>

                <a
                  href={profileData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Twitter className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-500 text-sm">X (Twitter)</div>
                    <div className="text-white font-medium">@KiranKumarShah_</div>
                  </div>
                </a>

                <a
                  href={profileData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-800/50 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Youtube className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-dark-500 text-sm">YouTube</div>
                    <div className="text-white font-medium">Kiran RegTech</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Primary CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 shadow-2xl shadow-primary-500/20">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Ready to Connect?
                </h3>
                <p className="text-primary-100 mb-6">
                  Download my complete CV or connect on LinkedIn to learn more about my experience and capabilities.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={profileData.cvPath}
                    download
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all active:scale-95"
                  >
                    <Download className="w-5 h-5" />
                    Download Complete CV
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-900 border border-primary-500 transition-all active:scale-95"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#featured-demo"
                  className="flex flex-col items-center justify-center gap-2 p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all text-center group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Send className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-white font-medium text-sm">View AI Demo</span>
                </a>

                <a
                  href="#projects"
                  className="flex flex-col items-center justify-center gap-2 p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-all text-center group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Send className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-white font-medium text-sm">View Projects</span>
                </a>
              </div>

              {/* Availability status */}
              <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-dark-400 text-sm">
                  Open to full-time positions in RegTech, FinTech, and financial services compliance
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-500 text-sm">
            Preferred contact method: <span className="text-primary-400 font-medium">LinkedIn</span> or <span className="text-primary-400 font-medium">Email</span> · Follow on <span className="text-primary-400 font-medium">X</span> or <span className="text-primary-400 font-medium">YouTube</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
