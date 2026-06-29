import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer to update active section
      const sections = navItems.map((item) => document.getElementById(item.href.replace('#', '')));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.replace('#', ''));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.replace('#', ''));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 blur-nav border-b border-brand-text/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-lg font-semibold tracking-[0.2em] text-brand-text uppercase transition-colors duration-300 group-hover:text-gold">
              Caramel Crochets
            </span>
            <span className="font-sans text-[9px] tracking-[0.35em] text-brand-muted uppercase transition-colors duration-300 group-hover:text-brand-text">
              Atelier d'Art
            </span>
          </a>

          {/* Nav Menu (Desktop) */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative py-2 font-sans text-xs tracking-[0.2em] text-brand-text uppercase transition-all duration-300 hover:text-gold focus:outline-none"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Social / Contact Shortcuts (Desktop) */}
          <div className="hidden items-center space-x-6 md:flex">
            <a
              href="https://instagram.com/caramel_cro_chets"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-brand-text transition-colors duration-300 hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/916230325035"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-brand-text px-4 py-2 font-sans text-[10px] tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-gold hover:text-brand-text"
            >
              Inquire
            </a>
          </div>

          {/* Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block text-brand-text transition-colors duration-300 hover:text-gold focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-brand-text/30 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-secondary p-8 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-16 flex flex-col space-y-6">
                <span className="font-serif text-xs tracking-[0.25em] text-brand-muted uppercase">
                  Navigation
                </span>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`font-sans text-lg tracking-[0.15em] uppercase transition-colors duration-300 ${
                          isActive ? 'text-gold' : 'text-brand-text hover:text-gold'
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer with Business details */}
              <div className="flex flex-col space-y-6 border-t border-brand-text/5 pt-8">
                <div className="flex flex-col space-y-3 font-sans text-xs tracking-wider text-brand-muted">
                  <a
                    href="https://instagram.com/caramel_cro_chets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-gold"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@caramel_cro_chets</span>
                  </a>
                  <a href="tel:+916230325035" className="flex items-center space-x-2 hover:text-gold">
                    <Phone className="h-4 w-4" />
                    <span>+91 62303 25035</span>
                  </a>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Hamirpur, Himachal Pradesh</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/916230325035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-none bg-brand-text py-3 text-center font-sans text-xs tracking-[0.2em] text-white uppercase hover:bg-gold hover:text-brand-text transition-all"
                >
                  Message Atelier
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
