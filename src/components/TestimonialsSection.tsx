import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
    }, 6000); // 6 seconds slow auto-slide
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
  };

  return (
    <section id="reviews" className="bg-secondary py-24 sm:py-32 relative z-20 border-t border-brand-text/5 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            Atelier Notes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight">
            Client Appreciations
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="w-full max-w-3xl bg-white p-8 sm:p-14 rounded-[32px] border border-brand-text/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] relative flex flex-col justify-between"
            >
              {/* Quote Mark floating */}
              <div className="absolute top-8 right-8 text-accent/50">
                <Quote className="h-10 w-10 stroke-[0.5] fill-current" />
              </div>

              <div>
                {/* 5 Golden Stars */}
                <div className="flex space-x-1.5 mb-6 justify-center sm:justify-start">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Testimonial Copy */}
                <p className="font-serif text-lg sm:text-2xl font-light text-brand-text leading-relaxed tracking-wide text-center sm:text-left mb-8 italic">
                  "{REVIEWS[currentIndex].text}"
                </p>
              </div>

              {/* Client Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-brand-text/5 gap-4">
                <div className="text-center sm:text-left">
                  <span className="font-serif text-base font-medium text-brand-text block">
                    {REVIEWS[currentIndex].name}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest text-brand-muted uppercase block mt-1">
                    Occasion: {REVIEWS[currentIndex].occasion}
                  </span>
                </div>
                <div className="font-sans text-[10px] tracking-widest text-brand-muted uppercase text-center sm:text-right font-light">
                  {REVIEWS[currentIndex].date} • Verified Collector
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual Arrow Controls (Desktop Side Controls) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white hover:bg-gold hover:text-brand-text text-brand-text shadow-md border border-brand-text/5 pointer-events-auto -translate-x-1/2 transition-colors focus:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white hover:bg-gold hover:text-brand-text text-brand-text shadow-md border border-brand-text/5 pointer-events-auto translate-x-1/2 transition-colors focus:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 mt-10">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                currentIndex === index ? 'w-8 bg-gold' : 'w-2 bg-brand-text/10 hover:bg-brand-text/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
