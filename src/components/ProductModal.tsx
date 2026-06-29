import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Instagram, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Caramel Crochets, I am completely in love with the handcrafted "${product.name}" featured on your luxury atelier website. I would love to inquire about having this bouquet created for a special occasion. Could you please share more details about the booking process? Thank you!`
    );
    window.open(`https://wa.me/916230325035?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop filter blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-text/30 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-secondary rounded-[32px] overflow-hidden border border-white/50 shadow-2xl z-10 max-h-[90vh] overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-12"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-text shadow-sm hover:text-gold transition-colors focus:outline-none"
            aria-label="Close details"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Left Column: Premium Photography Frame */}
          <div className="md:col-span-5 relative h-[350px] md:h-full min-h-[350px] bg-white">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            
            {/* Subtle floating gold stamp inside card */}
            <div className="absolute bottom-6 left-6 bg-secondary/80 backdrop-blur-md py-2 px-4 rounded-full flex items-center space-x-2 border border-white/40">
              <Sparkles className="h-3 w-3 text-gold" />
              <span className="font-sans text-[8px] tracking-[0.25em] text-brand-text uppercase font-medium">
                Atelier Original
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Specs & Inquiries */}
          <div className="md:col-span-7 p-8 sm:p-12 text-left flex flex-col justify-between">
            <div>
              {/* Category Breadcrumb */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold uppercase font-medium">
                  Atelier
                </span>
                <span className="text-brand-muted font-light text-xs">/</span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-brand-muted uppercase font-medium">
                  {product.category} Series
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
                {product.name}
              </h2>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm font-light text-brand-muted leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {/* Flowers Components */}
                <div>
                  <h4 className="font-serif text-sm font-medium tracking-wide text-brand-text border-b border-brand-text/5 pb-2 mb-3">
                    Floral Blueprint
                  </h4>
                  <ul className="space-y-1.5">
                    {product.flowerTypes.map((flower, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-brand-muted font-light">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        <span>{flower}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Craft Features */}
                <div>
                  <h4 className="font-serif text-sm font-medium tracking-wide text-brand-text border-b border-brand-text/5 pb-2 mb-3">
                    Craft Details
                  </h4>
                  <ul className="space-y-1.5">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-brand-muted font-light">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dimensions & Care Details */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-brand-text/5 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div>
                  <span className="font-sans text-[9px] tracking-widest text-brand-muted uppercase block mb-1">
                    DIMENSIONS
                  </span>
                  <span className="font-serif text-sm text-brand-text font-light">
                    {product.dimensions}
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[9px] tracking-widest text-brand-muted uppercase block mb-1">
                    CARE & PRESERVATION
                  </span>
                  <span className="font-serif text-xs text-brand-muted italic leading-relaxed">
                    {product.careInstructions}
                  </span>
                </div>
              </div>
            </div>

            {/* Inquiry Trigger & CTA */}
            <div className="border-t border-brand-text/5 pt-8 flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto flex-1 group flex items-center justify-center space-x-3 px-8 py-4 bg-brand-text text-white font-sans text-xs tracking-[0.2em] uppercase overflow-hidden hover:bg-gold hover:text-brand-text transition-all duration-300 focus:outline-none"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Inquire via WhatsApp</span>
              </button>

              <a
                href="https://instagram.com/caramel_cro_chets"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 border border-brand-text/10 bg-white font-sans text-xs tracking-[0.2em] text-brand-text uppercase hover:border-gold hover:text-gold transition-colors duration-300 focus:outline-none"
              >
                <Instagram className="h-4 w-4" />
                <span>DM on Instagram</span>
              </a>
            </div>

            {/* Note about bespoke orders */}
            <p className="mt-4 font-sans text-[9px] tracking-wider text-brand-muted flex items-center justify-center sm:justify-start space-x-1.5 opacity-70">
              <AlertCircle className="h-3 w-3 text-gold" />
              <span>All orders are custom queued. Delivery times estimate 7-12 days due to manual artisan process.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
