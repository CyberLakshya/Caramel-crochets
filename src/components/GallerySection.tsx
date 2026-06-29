import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { X, ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ''; // Unlock background scroll
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  return (
    <section id="gallery" className="bg-primary py-24 sm:py-32 relative z-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-brand-text/5 pb-8">
          <div className="max-w-xl text-left">
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
              The Atelier Aesthetic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight">
              Visual Chronicles
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              An immersive glimpse into our Hamirpur studio. Every bouquet represents hours of quiet attention, fine material choices, and timeless styling. Click any frame to inspect the details.
            </p>
          </div>
          <div className="mt-6 md:mt-0 font-sans text-[10px] tracking-widest text-brand-muted uppercase">
            Atelier Gallery • 2026 Collection
          </div>
        </div>

        {/* Pinterest style Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance] w-full">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-secondary border border-brand-text/5 cursor-pointer shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden w-full h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                />
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-brand-text/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 text-left">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white">
                      <ZoomIn className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-[8px] tracking-widest text-gold uppercase font-semibold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg font-light text-white tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive Lightbox Dialog */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-text/95 p-4 sm:p-10 backdrop-blur-md"
              onClick={closeLightbox}
            >
              {/* Close light box trigger */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-brand-text border border-white/15 transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Prev Navigation Trigger */}
              <button
                onClick={showPrev}
                className="absolute left-4 sm:left-8 z-[110] p-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-brand-text border border-white/15 transition-all focus:outline-none"
                aria-label="Previous Image"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              {/* Next Navigation Trigger */}
              <button
                onClick={showNext}
                className="absolute right-4 sm:right-8 z-[110] p-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-brand-text border border-white/15 transition-all focus:outline-none"
                aria-label="Next Image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Main lightbox photo and detail frame */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="relative max-w-4xl max-h-[80vh] flex flex-col items-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />

                {/* Details under Image */}
                <div className="mt-6 text-center text-white/90 max-w-xl">
                  <span className="font-sans text-[8px] tracking-[0.3em] text-gold uppercase block mb-1">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-xl font-light tracking-wide mb-2">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h3>
                  <p className="font-sans text-xs font-light text-white/90 leading-relaxed">
                    {GALLERY_ITEMS[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
