import { Heart, Zap, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:fadlyihsanandanny@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/fadlyihsanandanny', label: 'LinkedIn' },
    { icon: Github, href: 'https://zdha.github.io/portfolio/', label: 'Portfolio' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and tagline */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center justify-center gap-2 mb-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fadly Ihsan Andanny
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground max-w-md">
              Electrical Engineer & Web Developer passionate about creating innovative solutions
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-center">
              © {new Date().getFullYear()} Fadly Ihsan Andanny. All rights reserved.
            </p>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Back to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full text-sm text-primary transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}