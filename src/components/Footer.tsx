import React from 'react';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-brand-text border-t border-brand-text/5 py-16 sm:py-24 relative z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-8 items-start mb-16">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <span className="font-serif text-xl font-semibold tracking-[0.2em] uppercase text-brand-text mb-3">
              Caramel Crochets
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-medium mb-4 block">
              Forever Flowers. Forever Feelings.
            </span>
            <p className="font-sans text-xs font-light text-brand-muted leading-relaxed max-w-xs">
              Every flower is handcrafted with patience, creativity, and love in Himachal Pradesh. Designed to capture special memories permanently.
            </p>
          </div>

          {/* Column 2: Navigation Shortcuts */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-text uppercase mb-6">
              Navigation
            </h4>
            <div className="flex flex-col space-y-3 font-sans text-xs tracking-wider text-brand-muted">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-gold transition-colors">
                Atelier Home
              </a>
              <a href="#collection" onClick={(e) => handleNavClick(e, '#collection')} className="hover:text-gold transition-colors">
                Collections Catalog
              </a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-gold transition-colors">
                Visual Gallery
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-gold transition-colors">
                Artisan Story
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-gold transition-colors">
                Client Notes
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-text uppercase mb-6">
              The Atelier
            </h4>
            <div className="flex flex-col space-y-4 font-sans text-xs tracking-wider text-brand-muted">
              <a
                href="https://instagram.com/caramel_cro_chets"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-gold transition-colors"
              >
                <Instagram className="h-4 w-4 text-gold" />
                <span>@caramel_cro_chets</span>
              </a>
              <a
                href="tel:+916230325035"
                className="flex items-center space-x-3 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>+91 62303 25035</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <span>Hamirpur, Himachal Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and lakshya credits */}
        <div className="pt-8 border-t border-brand-text/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          
          {/* Copyright Left */}
          <span className="font-sans text-[10px] tracking-[0.15em] text-brand-muted uppercase font-light">
            © {new Date().getFullYear()} Caramel Crochets Atelier. All Rights Reserved.
          </span>

          {/* Lakshya signature credit right (Clear, elegant, and visible) */}
          <span className="font-sans text-[11px] tracking-[0.15em] text-brand-text uppercase flex items-center space-x-1.5 font-semibold transition-colors">
            <span>Developed by</span>
            <span className="font-serif italic font-bold tracking-[0.1em] text-gold ml-0.5">Lakshya</span>
          </span>

        </div>
      </div>
    </footer>
  );
}
