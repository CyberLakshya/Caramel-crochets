import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Heart } from 'lucide-react';
import { useRef } from 'react';

// Import images statically so Vite bundles and hashes them correctly in production/Netlify
import sunflowerImg from '../assets/images/sunflower_bouquet_1782745518934.jpg';
import roseImg from '../assets/images/rose_bouquet_1782745536316.jpg';
import tulipImg from '../assets/images/tulip_bouquet_1782745552098.jpg';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const yImage1 = useTransform(scrollY, [0, 800], [0, -60]);
  const yImage2 = useTransform(scrollY, [0, 800], [0, 40]);
  const yImage3 = useTransform(scrollY, [0, 800], [0, -20]);
  
  const handleScrollClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-secondary pt-24 pb-16 flex items-center md:pt-32"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-beige-light/35 blur-[150px] pointer-events-none" />

      {/* Floating Crochet Petals (Micro interactions) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: -50, 
              rotate: Math.random() * 360,
              opacity: 0.15 + Math.random() * 0.25 
            }}
            animate={{ 
              y: "110vh",
              x: [
                "calc(0% + 0px)", 
                `calc(${Math.random() > 0.5 ? '' : '-'}${30 + Math.random() * 50}px)`, 
                "calc(0% + 0px)"
              ],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 15 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2.5
            }}
            className="absolute text-gold/30"
            style={{ top: -100 }}
          >
            {/* Elegant tiny flower icon path */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2C10.5 4.5 10.5 6.5 12 9C13.5 6.5 13.5 4.5 12 2Z" fill="currentColor" />
              <path d="M12 22C10.5 19.5 10.5 17.5 12 15C13.5 17.5 13.5 19.5 12 22Z" fill="currentColor" />
              <path d="M2 12C4.5 10.5 6.5 10.5 9 12C6.5 13.5 4.5 13.5 2 12Z" fill="currentColor" />
              <path d="M22 12C19.5 10.5 17.5 10.5 15 12C17.5 13.5 19.5 13.5 22 12Z" fill="currentColor" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium">
              Forever Flowers. Forever Feelings.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-brand-text tracking-tight leading-[1.1] mb-6"
          >
            Handcrafted Flowers, <br />
            <span className="italic font-normal font-serif text-gold">Made To Last Forever.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-sans text-brand-muted text-base sm:text-lg max-w-lg leading-relaxed mb-10 font-light"
          >
            Beautiful handmade crochet bouquets designed to celebrate life's most meaningful moments. Handwoven with patience and love in the heart of Himachal Pradesh.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollClick('#collection')}
              className="group relative px-8 py-4 bg-brand-text text-white font-sans text-xs tracking-[0.2em] uppercase overflow-hidden hover:text-brand-text focus:outline-none transition-colors duration-500"
            >
              {/* Button Hover Slide Accent */}
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Collection</span>
                <Heart className="h-3 w-3 fill-current" />
              </span>
            </button>

            <a
              href="https://instagram.com/caramel_cro_chets"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-8 py-4 border border-brand-text/15 bg-transparent font-sans text-xs tracking-[0.2em] text-brand-text uppercase hover:border-gold hover:text-gold transition-colors duration-300 focus:outline-none"
            >
              <span>Instagram</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Location / Craftsmanship Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center space-x-8 font-sans text-[10px] tracking-widest text-brand-muted uppercase"
          >
            <div>
              <p className="font-semibold text-brand-text mb-1">ORIGIN</p>
              <p>Hamirpur, HP</p>
            </div>
            <div className="h-6 w-[1px] bg-brand-text/10" />
            <div>
              <p className="font-semibold text-brand-text mb-1">HANDMADE TIME</p>
              <p>12+ Hrs / Bouquet</p>
            </div>
            <div className="h-6 w-[1px] bg-brand-text/10" />
            <div>
              <p className="font-semibold text-brand-text mb-1">DURABILITY</p>
              <p>Lifelong Keepsake</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Overlapping Editorial Collage Layout */}
        <div className="lg:col-span-6 relative h-[520px] sm:h-[600px] w-full flex items-center justify-center">
          
          {/* Main Backdrop Frame */}
          <div className="absolute inset-4 sm:inset-10 border border-brand-text/5 bg-white/10 rounded-[40px] pointer-events-none" />

          {/* Collage Image 1: Sunflower Bouquet (Right Side) */}
          <motion.div
            style={{ y: yImage1 }}
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute right-0 top-6 sm:top-12 w-[55%] max-w-[280px] aspect-[3/4] z-20 shadow-[10px_20px_50px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden border border-white/40"
          >
            <img
              src={sunflowerImg}
              alt="Handcrafted Crochet Sunflower Bouquet"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md py-1.5 px-3 rounded-full text-[9px] tracking-widest font-sans text-brand-text uppercase border border-white shadow-sm font-medium">
              Sunflower No.1
            </div>
          </motion.div>

          {/* Collage Image 2: Rose Bouquet (Left Side - Overlapping) */}
          <motion.div
            style={{ y: yImage2 }}
            initial={{ opacity: 0, x: -60, rotate: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-0 bottom-4 sm:bottom-12 w-[50%] max-w-[250px] aspect-[3/4] z-30 shadow-[15px_30px_60px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden border border-white/40"
          >
            <img
              src={roseImg}
              alt="Handcrafted Crochet Rose Bouquet"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md py-1.5 px-3 rounded-full text-[9px] tracking-widest font-sans text-brand-text uppercase border border-white shadow-sm font-medium">
              Rose Cascade
            </div>
          </motion.div>

          {/* Collage Image 3: Tulip Bouquet (Center Back) */}
          <motion.div
            style={{ y: yImage3 }}
            initial={{ opacity: 0, scale: 0.9, y: -40 }}
            animate={{ opacity: 0.8, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-1/4 top-0 w-[45%] max-w-[210px] aspect-[3/4] z-10 shadow-[5px_10px_30px_rgba(0,0,0,0.04)] rounded-2xl overflow-hidden brightness-[0.97]"
          >
            <img
              src={tulipImg}
              alt="Handcrafted Crochet Tulip Bouquet"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Elegant Circular Text/Stamp Floating */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -right-4 bottom-1/4 z-30 hidden sm:flex h-24 w-24 items-center justify-center rounded-full bg-beige-light/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white"
          >
            <svg viewBox="0 0 100 100" className="absolute h-20 w-20 text-brand-text">
              <path
                id="curve"
                d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0"
                fill="none"
              />
              <text className="font-sans text-[7.5px] tracking-[0.22em] uppercase fill-current">
                <textPath href="#curve">
                  • 100% HANDMADE WITH LOVE • FOREVER BLOOMS
                </textPath>
              </text>
            </svg>
            <Heart className="h-5 w-5 text-gold fill-gold/20" />
          </motion.div>
        </div>

      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => handleScrollClick('#collection')}
          className="flex flex-col items-center space-y-2 text-brand-muted hover:text-gold transition-colors focus:outline-none"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
