import { Mail, Linkedin, Github, MapPin, Phone, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import profileImage from 'figma:asset/ebd06bb87d993d9f5211b2970e71013446e5adaa.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image with Enhanced Animations */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="relative group">
              {/* Animated rings */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-3xl blur-2xl opacity-40"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={profileImage} 
                  alt="Fadly Ihsan Andanny" 
                  className="relative w-64 h-80 md:w-72 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Hero Content with Stagger Animation */}
          <div className="flex-1 text-center md:text-left">
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary mb-4 backdrop-blur-sm">
                ⚡ Electrical Engineer & Web Developer
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-foreground via-blue-200 to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              FADLY IHSAN ANDANNY
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-blue-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              S.T. | Bachelor of Electrical Engineering
            </motion.p>
            
            <motion.p 
              className="text-base text-muted-foreground mb-6 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A fresh graduate in Electrical Engineering from Andalas University, with a focus on Control Engineering. 
              Skilled in control systems, automation, and electrical engineering applications. Also a web developer with 
              experience in building modern, efficient, and user-friendly web applications. Highly motivated, adaptable, 
              and eager to contribute both my engineering expertise and development skills to professional environments.
            </motion.p>

            {/* Contact Info with Hover Effects */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="mailto:fadlyihsanandanny@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                fadlyihsanandanny@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+6285271400799" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                +62 852 7140 0799
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/fadlyihsanandanny" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://zdha.github.io/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Portfolio
              </motion.a>
              <motion.span 
                className="flex items-center gap-2 text-sm text-muted-foreground"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4" />
                Padang, West Sumatera, Indonesia
              </motion.span>
            </motion.div>

            {/* CTA Buttons with Motion */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg shadow-primary/25"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
                  onClick={() => scrollToSection('experience')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  View Experience
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        transition={{ 
          duration: 0.6, 
          delay: 1,
        }}
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}