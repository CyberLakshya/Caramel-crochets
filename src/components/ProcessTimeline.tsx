import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-secondary py-24 sm:py-32 relative z-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            The Atelier Workflow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
            Stitch by Stitch
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            From the first selection of woolen threads to the delicate misting of lavender oils in the box, discover how we curate your forever bouquets.
          </p>
        </div>

        {/* Process Flow - Desktop Grid, Mobile Stack */}
        <div className="relative">
          {/* Subtle connecting line in background (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-text/5 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left bg-white lg:bg-transparent rounded-3xl p-8 lg:p-0 border border-brand-text/5 lg:border-none shadow-sm lg:shadow-none transition-all duration-300"
              >
                {/* Large Stamp-Style Number */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary border border-brand-text/5 text-gold group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-500">
                  <span className="font-serif text-lg font-light tracking-wide">{step.number}</span>
                </div>

                {/* Arrow Connector (between steps - responsive) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-[28px] left-[calc(25%*${index+1}-24px)] pointer-events-none text-gold/30">
                    {/* Visual spacer */}
                  </div>
                )}

                {/* Header Title */}
                <h3 className="font-serif text-xl font-light text-brand-text tracking-tight mb-1">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <span className="font-sans text-[10px] tracking-[0.2em] text-gold uppercase block mb-3 font-medium">
                  {step.subtitle}
                </span>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm font-light text-brand-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Down Arrow / Right Arrow indicator depending on screen (Responsive) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="mt-8 lg:hidden text-gold/40">
                    <ArrowDown className="h-4 w-4 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
