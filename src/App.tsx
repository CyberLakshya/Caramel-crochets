import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionSection from './components/CollectionSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductModal from './components/ProductModal';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import ProcessTimeline from './components/ProcessTimeline';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramGrid from './components/InstagramGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Product } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll Progression Tracking (Luxury Gold Line)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Custom Cursor Spring Positions (Desktop only)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobileDevice, setIsMobileDevice] = useState(true);
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkDevice = () => {
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobileDevice(touchDevice);
    };
    checkDevice();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') !== null;
      setCursorHovered(isInteractive);
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Smooth scroll down to the products catalog
    const catalogElement = document.getElementById('products-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cursor motion spring configurations for elastic trailing effect
  const cursorX = useSpring(mousePos.x - 4, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(mousePos.y - 4, { stiffness: 400, damping: 28 });
  const trailX = useSpring(mousePos.x - 16, { stiffness: 120, damping: 20 });
  const trailY = useSpring(mousePos.y - 16, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* Luxury Loading Screen */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main Website Wrapper */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative min-h-screen bg-secondary text-brand-text selection:bg-accent selection:text-brand-text"
        >
          {/* Scroll Progress Bar */}
          <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-gold origin-left z-[9999] pointer-events-none"
          />

          {/* Custom Desktop Cursor */}
          {!isMobileDevice && window.innerWidth >= 1024 && (
            <>
              {/* Inner Dot */}
              <motion.div
                style={{ x: cursorX, y: cursorY }}
                animate={{ scale: cursorHovered ? 1.5 : 1 }}
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold z-[9999] pointer-events-none mix-blend-difference"
              />
              {/* Outer trailing organic ring */}
              <motion.div
                style={{ x: trailX, y: trailY }}
                animate={{
                  scale: cursorHovered ? 1.8 : 1,
                  borderColor: cursorHovered ? '#C6A66A' : '#1B1B1B',
                  borderWidth: cursorHovered ? '2px' : '1px',
                }}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-text/30 z-[9998] pointer-events-none mix-blend-difference transition-colors duration-300"
              />
            </>
          )}

          {/* Floating Navigation Header */}
          <Navbar />

          {/* Hero Showcase Section */}
          <Hero />

          {/* Collections Catalog Section */}
          <CollectionSection onSelectCategory={handleSelectCategory} />

          {/* Featured Stems & Bouquet Details */}
          <FeaturedProducts
            selectedCategory={selectedCategory}
            onSelectProduct={setSelectedProduct}
          />

          {/* Why Stitched / Pillars Section */}
          <WhyChooseUs />

          {/* Pinterest-style Masonry Gallery */}
          <GallerySection />

          {/* Craft workflow timeline */}
          <ProcessTimeline />

          {/* Atelier Split Story */}
          <AboutSection />

          {/* Sliding appreciations section */}
          <TestimonialsSection />

          {/* Connected Instagram Feed Grid */}
          <InstagramGrid />

          {/* Direct WhatsApp/DM contacts section */}
          <ContactSection />

          {/* Minimal Foot Signature */}
          <Footer />

          {/* Detailed Product Inspector Modal */}
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          {/* Back to Top floating arrow bubble */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={handleBackToTop}
                className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-white text-brand-text shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-brand-text/5 hover:bg-gold hover:text-brand-text transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
