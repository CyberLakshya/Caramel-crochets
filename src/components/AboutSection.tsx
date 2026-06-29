import { motion } from 'motion/react';
import { Sparkles, Heart, Award } from 'lucide-react';

// Import image statically so Vite bundles and hashes it correctly in production/Netlify
import craftProcessImg from '../assets/images/craft_process_1782745587249.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="bg-primary py-24 sm:py-32 relative z-20 overflow-hidden border-t border-brand-text/5">
      {/* Abstract Background Design Details */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left Column: Portrait Photography of Craft Process */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          
          {/* Aesthetic Frame Outline */}
          <div className="absolute inset-4 -translate-x-4 translate-y-4 border border-gold/20 rounded-[24px] pointer-events-none z-0" />

          {/* Core Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-[15px_30px_60px_rgba(0,0,0,0.06)] border border-brand-text/5"
          >
            <img
              src={craftProcessImg}
              alt="Hands of the artisan crafting crochet bouquet"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

          {/* Floating Atelier Stamp badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 -right-4 z-20 bg-secondary px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-brand-text/5 text-left max-w-xs hidden sm:block"
          >
            <p className="font-serif text-sm font-medium text-brand-text mb-1">Hamirpur Atelier</p>
            <p className="font-sans text-[10px] text-brand-muted leading-relaxed">
              Every single flower originates in the tranquil landscapes of Himachal Pradesh, crafted in peace.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Sophisticated Storytelling */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            Atelier Origins
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-text tracking-tight mb-8">
            The Patience <br />
            <span className="italic font-normal text-gold font-serif">of Handcrafted Beauty.</span>
          </h2>

          <div className="space-y-6 font-sans text-xs sm:text-sm font-light text-brand-muted leading-relaxed max-w-xl">
            <p>
              In an age dominated by instant machine replication, we choose a different cadence. At Caramel Crochets, based in the mountain heights of Hamirpur, Himachal Pradesh, our flowers represent a slower, more deliberate form of beauty.
            </p>
            <p>
              Every stem begins as a simple spool of organic cotton. Over hours of concentrated focus, our hands guide the crochet needles—casting tens of thousands of individual loops to create structured rosebuds, elegant tulip trumpets, and radiating golden sunflower disks. 
            </p>
            <p className="border-l-2 border-gold pl-4 py-1 italic text-brand-text font-serif text-sm sm:text-base">
              "We do not create temporary decor; we weave lasting keepsakes that capture fleeting sentiments."
            </p>
            <p>
              Because these bouquets never drop their leaves, wither, or require watering, they become eternal anchors for your memories. They serve as timeless gifts for birthdays, weddings, or quiet spaces of self-reflection. They do not fade—exactly like the memories you celebrate.
            </p>
          </div>

          {/* Key Value Points */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-text/5">
            <div className="flex items-start space-x-3">
              <Award className="h-5 w-5 text-gold flex-shrink-0 mt-0.5 stroke-[1.25]" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-text">Pristine Quality</h4>
                <p className="font-sans text-[10px] text-brand-muted mt-1">High-thread count organic cotton yarn.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="h-5 w-5 text-gold flex-shrink-0 mt-0.5 stroke-[1.25]" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-text">100% Original</h4>
                <p className="font-sans text-[10px] text-brand-muted mt-1">Single-artisan signature creations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="h-5 w-5 text-gold flex-shrink-0 mt-0.5 stroke-[1.25]" />
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-text">Bespoke Fitting</h4>
                <p className="font-sans text-[10px] text-brand-muted mt-1">Tailored sizing and custom coloring.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
