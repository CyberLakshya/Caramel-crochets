import { motion } from 'motion/react';
import { WHY_US_CARDS } from '../data';
import * as Icons from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-primary py-24 sm:py-32 relative z-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
            Stitched for Longevity
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            Unlike real flora that withers and fades in days, Caramel Crochets designs bouquets to encapsulate your memories permanently. We believe in beauty that endures.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_CARDS.map((card, index) => {
            // Dynamically select Lucide Icon
            let IconComponent = Icons.Sparkles;
            if (card.iconName === 'Flower') IconComponent = Icons.Flower;
            if (card.iconName === 'Gift') IconComponent = Icons.Gift;
            if (card.iconName === 'Layers') IconComponent = Icons.Layers;
            if (card.iconName === 'Heart') IconComponent = Icons.Heart;
            if (card.iconName === 'Palette') IconComponent = Icons.Palette;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="group relative p-8 bg-secondary/40 backdrop-blur-sm rounded-2xl border border-brand-text/5 text-left hover:bg-secondary hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                {/* Floating Gold Accented Icon Frame */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-brand-text/5 text-gold group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-500">
                  <IconComponent className="h-5 w-5 stroke-[1.25]" />
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-light text-brand-text tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-sans text-xs sm:text-sm font-light text-brand-muted leading-relaxed">
                  {card.description}
                </p>

                {/* Tiny corner highlight line */}
                <div className="absolute top-0 right-0 h-[1px] w-0 bg-gold/50 transition-all duration-500 group-hover:w-8" />
                <div className="absolute top-0 right-0 h-0 w-[1px] bg-gold/50 transition-all duration-500 group-hover:h-8" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
