import { motion } from 'motion/react';
import { CATEGORIES } from '../data';
import { ArrowRight } from 'lucide-react';

interface CollectionSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function CollectionSection({ onSelectCategory }: CollectionSectionProps) {
  return (
    <section id="collection" className="bg-primary py-24 sm:py-32 relative z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-brand-text/5 pb-8">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
              The Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight">
              Curated Collections
            </h2>
            <p className="mt-3 font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
              Every design is conceptualized and built entirely by hand, representing hours of meticulous craftsmanship. Explore our forever arrangements.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-serif text-sm italic text-brand-muted block">
              Forever Flowers. Forever Feelings.
            </span>
          </div>
        </div>

        {/* Categories Grid (Luxury Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col justify-between h-[450px] bg-secondary rounded-[24px] overflow-hidden border border-brand-text/5 relative shadow-sm transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
            >
              {/* Image Container with Luxury Zoom Animation */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105 group-hover:brightness-[0.95]"
                />
                {/* Subtle Luxury Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-brand-text/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Top Details (Floating) */}
              <div className="relative z-10 p-8 flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
                  No. 0{index + 1}
                </span>
                <span className="rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-[9px] tracking-widest font-sans text-white/90 uppercase border border-white/10">
                  Crochet Blooms
                </span>
              </div>

              {/* Bottom Details (Text & Interaction) */}
              <div className="relative z-10 p-8 text-left">
                <h3 className="font-serif text-2xl font-light text-white tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs font-light text-white/95 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {cat.description}
                </p>
                
                {/* Expand indicator link */}
                <div className="mt-6 flex items-center space-x-2 text-white group-hover:text-gold transition-colors duration-300">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium">
                    View Stems
                  </span>
                  <motion.div
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                </div>
              </div>

              {/* Aesthetic Thin Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-gold/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-gold/35" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-gold/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-gold/35" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
