import { motion } from 'motion/react';
import { MessageSquare, Instagram, Phone, MapPin, Sparkles, Send } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Atelier',
      value: '+91 62303 25035',
      description: 'Send a message directly to initiate your custom floral commissions and design bookings.',
      link: 'https://wa.me/916230325035',
      icon: MessageSquare,
      actionText: 'Message Now',
    },
    {
      id: 'instagram',
      title: 'Instagram DM',
      value: '@caramel_cro_chets',
      description: 'Explore daily studio work, watch behind-the-scenes streams, and direct message our creative director.',
      link: 'https://instagram.com/caramel_cro_chets',
      icon: Instagram,
      actionText: 'Visit Studio Profile',
    },
    {
      id: 'phone',
      title: 'Atelier Concierge',
      value: '+91 62303 25035',
      description: 'Need assistance or have urgent orders? Speak with us directly for personalized, premium care.',
      link: 'tel:+916230325035',
      icon: Phone,
      actionText: 'Place Call',
    },
    {
      id: 'location',
      title: 'Atelier Location',
      value: 'Hamirpur, Himachal Pradesh',
      description: 'Nestled in the tranquil, inspiring valley foothills. We design and ship premium crochet blooms across the nation.',
      link: 'https://maps.google.com/?q=Hamirpur,+Himachal+Pradesh',
      icon: MapPin,
      actionText: 'View Location Map',
    },
  ];

  return (
    <section id="contact" className="bg-secondary py-24 sm:py-32 relative z-20 border-t border-brand-text/5 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            Atelier Enquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
            Connect With Us
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            In pursuit of pure craftsmanship, we forgo automated forms. Every bouquet is a collaboration. Reach out directly via your preferred channel, and our artisan will assist you personally.
          </p>
        </div>

        {/* 4 Cards Grid - Luxury Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="group relative flex flex-col justify-between bg-white p-8 sm:p-10 rounded-[32px] border border-brand-text/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 text-left"
              >
                {/* Header Icon Frame */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary border border-brand-text/5 text-gold group-hover:scale-110 group-hover:bg-accent/40 transition-all duration-500">
                      <IconComponent className="h-5 w-5 stroke-[1.25]" />
                    </div>
                    
                    {/* Tiny premium watermark */}
                    <span className="font-sans text-[8px] tracking-widest text-brand-muted uppercase flex items-center space-x-1.5 opacity-60">
                      <Sparkles className="h-2.5 w-2.5 text-gold" />
                      <span>Verified Atelier</span>
                    </span>
                  </div>

                  {/* Body values */}
                  <h3 className="font-serif text-2xl font-light text-brand-text tracking-tight mb-1">
                    {method.title}
                  </h3>
                  <span className="font-mono text-xs sm:text-sm text-gold tracking-wide block mb-3 font-medium">
                    {method.value}
                  </span>
                  <p className="font-sans text-xs font-light text-brand-muted leading-relaxed max-w-sm mb-8">
                    {method.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-6 border-t border-brand-text/5 flex items-center justify-between text-brand-text group-hover:text-gold transition-colors duration-300">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold">
                    {method.actionText}
                  </span>
                  <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 stroke-[1.5]" />
                </div>

                {/* Thin gold corner line highlight */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-gold/0 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-gold/30 rounded-tl-[32px]" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-gold/0 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-gold/30 rounded-br-[32px]" />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
