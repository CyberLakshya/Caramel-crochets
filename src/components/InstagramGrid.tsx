import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

// Import images statically so Vite bundles and hashes them correctly in production/Netlify
import sunflowerImg from '../assets/images/sunflower_bouquet_1782745518934.jpg';
import roseImg from '../assets/images/rose_bouquet_1782745536316.jpg';
import tulipImg from '../assets/images/tulip_bouquet_1782745552098.jpg';
import customImg from '../assets/images/custom_bouquet_1782745604938.jpg';

export default function InstagramGrid() {
  // Mock high-end posts with real image assets and luxury engagement statistics
  const instaPosts = [
    {
      id: 'p1',
      image: sunflowerImg,
      likes: '1.4k',
      comments: '48',
    },
    {
      id: 'p2',
      image: roseImg,
      likes: '942',
      comments: '32',
    },
    {
      id: 'p3',
      image: tulipImg,
      likes: '1.1k',
      comments: '56',
    },
    {
      id: 'p4',
      image: customImg,
      likes: '816',
      comments: '29',
    },
  ];

  return (
    <section id="instagram" className="bg-primary py-24 sm:py-32 relative z-20 border-t border-brand-text/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-medium block mb-3">
            Social Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-text tracking-tight mb-4">
            Follow Our Stitch
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            We share behind-the-scenes updates, custom order reveals, and stitching processes on Instagram. Join our blooming community of handcrafted design collectors.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {instaPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/caramel_cro_chets"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="group relative aspect-square rounded-[24px] overflow-hidden bg-secondary shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Instagram Post ${index + 1}`}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-brand-text/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center space-x-1.5 font-sans text-xs font-semibold">
                  <Heart className="h-4 w-4 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-sans text-xs font-semibold">
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>{post.comments}</span>
                </div>
                <div className="absolute top-4 right-4 text-white/70">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Follow Button */}
        <div className="flex justify-center">
          <a
            href="https://instagram.com/caramel_cro_chets"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-transparent border border-brand-text/15 text-brand-text font-sans text-xs tracking-[0.25em] uppercase hover:text-white overflow-hidden transition-colors duration-500"
          >
            {/* Button Hover Background Fill */}
            <span className="absolute inset-0 bg-brand-text translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]" />
            <span className="relative z-10 flex items-center space-x-3 justify-center">
              <Instagram className="h-4 w-4" />
              <span>Follow @caramel_cro_chets</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
