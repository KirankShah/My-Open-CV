import { Linkedin, Mail, MapPin, ArrowUp, Twitter, Youtube } from 'lucide-react';
import { profileData } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {profileData.name}
            </h3>
            <p className="text-dark-400 mb-6 leading-relaxed">
              {profileData.title}
            </p>
            <p className="text-dark-500 text-sm leading-relaxed">
              Combining 17+ years of AML/CFT expertise with hands-on technology innovation. Building AI-driven compliance solutions that transform financial crime risk management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-dark-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {profileData.location}
                </div>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={profileData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  <Twitter className="w-4 h-4 flex-shrink-0" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href={profileData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  <Youtube className="w-4 h-4 flex-shrink-0" />
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-dark-500 text-sm text-center md:text-left">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>

          {/* Certifications badge */}
          <div className="text-dark-500 text-sm text-center">
            <span className="text-primary-400 font-medium">CAMS | CAMS-Audit | CISA | CISSP | FCCA</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-dark-400 hover:text-primary-400 transition-colors" />
            </a>
            <a
              href={profileData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5 text-dark-400 hover:text-primary-400 transition-colors" />
            </a>
            <a
              href={profileData.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-dark-400 hover:text-primary-400 transition-colors" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2 bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-500/50 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-dark-400 hover:text-primary-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all hover:scale-110 active:scale-95 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
