import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ArrowUpRight, Check, Eye } from 'lucide-react';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectProduct: (product: Product) => void;
}

export default function FeaturedProducts({ selectedCategory, onSelectProduct }: FeaturedProductsProps) {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'all');

  // Sync state if selectedCategory changes from parent
  useMemo(() => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const filters = [
    { label: 'All Stems', value: 'all' },
    { label: 'Sunflowers', value: 'sunflower' },
    { label: 'Roses', value: 'rose' },
    { label: 'Tulips', value: 'tulip' },
    { label: 'Custom Curation', value: 'custom' },
    { label: 'Gift Hampers', value: 'hamper' },
  ];

  return (
    <section id="products-catalog" className="bg-secondary py-24 sm:py-32 relative z-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            The Atelier Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
            Forever Arrangements
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            Meticulously hand-knit. Soft to the touch, and designed to carry your emotions through the years. No watering, no fading—simply timeless.
          </p>
        </div>

        {/* Categories Pill Filter (Luxury Aesthetic) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-6 py-2.5 font-sans text-[10px] tracking-widest uppercase transition-all duration-500 focus:outline-none border border-brand-text/5 ${
                  isActive 
                    ? 'text-brand-text bg-white shadow-sm' 
                    : 'text-brand-muted bg-transparent hover:text-brand-text'
                }`}
              >
                {filter.label}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 border border-gold pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-brand-text/5 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.035)] hover:-translate-y-2 transition-all duration-500"
                onClick={() => onSelectProduct(product)}
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                  />
                  
                  {/* Subtle Elegant Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-text/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="flex items-center space-x-2 bg-white/95 backdrop-blur-md text-brand-text text-[10px] tracking-widest uppercase font-sans font-medium px-5 py-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <Eye className="h-3.5 w-3.5 text-gold" />
                      <span>Inspect Craft</span>
                    </span>
                  </div>

                  {/* Aesthetic Corner Stamp */}
                  <div className="absolute top-4 right-4 rounded-full bg-white/70 backdrop-blur-md px-3.5 py-1 text-[8px] tracking-widest font-sans text-brand-text uppercase border border-white/50">
                    Handmade
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 text-left flex flex-col flex-grow justify-between">
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase block mb-2 font-medium">
                      {product.category === 'sunflower' ? 'Sunflower Series' :
                       product.category === 'rose' ? 'Rose Series' :
                       product.category === 'tulip' ? 'Tulip Series' :
                       product.category === 'custom' ? 'Custom Studio' : 'Luxury Hamper'}
                    </span>
                    <h3 className="font-serif text-xl font-light text-brand-text tracking-tight mb-3 group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="font-sans text-xs font-light text-brand-muted leading-relaxed line-clamp-3 mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights and Inquire trigger */}
                  <div className="pt-6 border-t border-brand-text/5 flex items-center justify-between">
                    <span className="font-sans text-[9px] tracking-widest text-brand-muted uppercase">
                      Atelier d'Art HP
                    </span>
                    <div className="flex items-center space-x-1.5 text-gold group-hover:text-brand-text transition-colors duration-300">
                      <span className="font-sans text-[10px] tracking-[0.15em] uppercase font-medium">
                        Details
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
