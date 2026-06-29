import { Product, GalleryItem, Review, ProcessStep, WhyUsCard } from './types';

// Import images statically so Vite bundles and hashes them correctly in production/Netlify
import sunflowerImg from './assets/images/sunflower_bouquet_1782745518934.jpg';
import roseImg from './assets/images/rose_bouquet_1782745536316.jpg';
import tulipImg from './assets/images/tulip_bouquet_1782745552098.jpg';
import customImg from './assets/images/custom_bouquet_1782745604938.jpg';
import giftHamperImg from './assets/images/gift_hamper_1782745569945.jpg';
import craftProcessImg from './assets/images/craft_process_1782745587249.jpg';

export const CATEGORIES = [
  {
    id: 'sunflower',
    title: 'Sunflower Bouquets',
    description: 'Golden, hand-knit petals that carry the warmth of summer sunshine into your space permanently.',
    image: sunflowerImg,
  },
  {
    id: 'rose',
    title: 'Rose Bouquets',
    description: 'Deep romantic hues and delicate velvet folds, capturing love in everlasting woolen thread.',
    image: roseImg,
  },
  {
    id: 'tulip',
    title: 'Tulip Bouquets',
    description: 'Minimal, graceful stems signaling rebirth and fresh beginnings in beautiful pastel stitchwork.',
    image: tulipImg,
  },
  {
    id: 'custom',
    title: 'Custom Bouquets',
    description: 'A bespoke botanical arrangement personalized to match your story and color aesthetics.',
    image: customImg,
  },
  {
    id: 'hamper',
    title: 'Gift Hampers',
    description: 'Symphonies of premium crochet items, scented candles, and luxury accompaniments for your dearest.',
    image: giftHamperImg,
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'soliel-d-or',
    name: 'The Soleil d’Or Bouquet',
    category: 'sunflower',
    image: sunflowerImg,
    description: 'A dramatic, light-filled tribute to the sun. Hand-stitched with vibrant golden-yellow yarn and deep velvet-brown centers, accented with custom organic olive foliage.',
    features: ['Individually hand-knitted petals', 'Double-reinforced premium cotton yarn', 'Bendable copper cores for bespoke posing', 'Scented with custom botanical oils'],
    flowerTypes: ['Vibrant Sunflowers', 'Eucalyptus Leaves', 'Baby’s Breath Accents'],
    dimensions: 'H 42cm × W 28cm',
    careInstructions: 'Gently dust with a soft makeup brush once a month. Keep away from prolonged direct water.'
  },
  {
    id: 'l-amour-rose',
    name: 'The L’Amour Rose Cascade',
    category: 'rose',
    image: roseImg,
    description: 'A romantic masterpiece in velvet blush and champagne cream. Each rose features over eighty individually woven stitches to replicate the delicate curling petals of natural English roses.',
    features: ['High-thread count premium organic cotton', 'Soft blush and warm champagne color palettes', 'Wrapped in textured high-grammage linen paper', 'Secured with a luxury satin ribbon'],
    flowerTypes: ['Blush Roses', 'Champagne Roses', 'Evergreen Foliage Stems'],
    dimensions: 'H 45cm × W 30cm',
    careInstructions: 'Gently mist with your favorite home fragrance to scent. Store in a dry environment.'
  },
  {
    id: 'printemps-tulipe',
    name: 'The Printemps Tulip Cascade',
    category: 'tulip',
    image: tulipImg,
    description: 'A study in minimalist elegance. Clean pastel peach, cream, and soft rose tulips rise gracefully from delicate leaf cups. A favorite for contemporary, Scandinavian-inspired interiors.',
    features: ['Sleek minimalist silhouettes', 'Ultra-soft milk cotton yarn blend', 'Perfect lightweight freestanding structure', 'Tied with raw-edge linen twine'],
    flowerTypes: ['Pastel Peach Tulips', 'Alabaster White Tulips', 'Sage Green Ribbed Leaves'],
    dimensions: 'H 38cm × W 22cm',
    careInstructions: 'If required, spot-clean with a slightly damp cotton swab. Air dry naturally.'
  },
  {
    id: 'jardin-bespoke',
    name: 'The Jardin Custom Ensemble',
    category: 'custom',
    image: customImg,
    description: 'A completely customized botanical curation. Choose your colors, flower species, and sizing. Our artisans consult directly to bring your exact emotional vision into an everlasting tactile form.',
    features: ['Fully customizable flower count and species', 'Bespoke color palette consultations', 'Signature linen wrapper with gold calligraphed card', 'Exquisite attention to floral pairings'],
    flowerTypes: ['Chamomile', 'Lavender Sprigs', 'Bespoke Buttercups', 'Custom Fillers'],
    dimensions: 'Varies by consultation (approx. 40cm - 50cm)',
    careInstructions: 'Keep in dry vases. Display as a centerpiece or hanging wall accent.'
  },
  {
    id: 'caramel-signature-hamper',
    name: 'The Caramel Signature Hamper',
    category: 'hamper',
    image: giftHamperImg,
    description: 'The ultimate gesture of appreciation. A beautifully structured off-white hamper box featuring our signature handmade rose stem, a hand-poured soy wax candle, and premium organic honey or lavender mist.',
    features: ['Premium textured slide-open wood-pulp box', 'Signature single-stem crochet flower', 'Luxury soy candle in clear frosted glass', 'Handwritten botanical card with custom sealing wax'],
    flowerTypes: ['Luxury Single Stem Rose', 'Everlasting Lavender Bundles'],
    dimensions: 'Box: 30cm × 24cm × 12cm',
    careInstructions: 'Handle with clean hands. Candle should be burnt on a heat-resistant surface.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: sunflowerImg,
    title: 'The Golden Hour Sunflower',
    category: 'Botanical Craft',
    description: 'The beautiful texture of knitted yarn catches the warm afternoon light in our studio.'
  },
  {
    id: 'g2',
    image: roseImg,
    title: 'Woven Blush Detail',
    category: 'Editorial',
    description: 'A study of complex curves and organic rose patterns captured in thread.'
  },
  {
    id: 'g3',
    image: tulipImg,
    title: 'Pastel Tulips Flat Lay',
    category: 'Minimalism',
    description: 'Clean geometry and soft feminine pastel tones, styled on raw organic slate.'
  },
  {
    id: 'g4',
    image: customImg,
    title: 'The Mixed Meadow Consultation',
    category: 'Bespoke Curation',
    description: 'A finished custom request combining chamomile, lavender, and buttercups.'
  },
  {
    id: 'g5',
    image: giftHamperImg,
    title: 'Hand-Tied Silk Bows',
    category: 'Packaging',
    description: 'A detail of our premium textured linen paper and real silk ribbons.'
  },
  {
    id: 'g6',
    image: craftProcessImg,
    title: 'The Artisan’s Hands',
    category: 'Atelier',
    description: 'Patience and detail. It takes up to fifteen hours of meticulous knitting to construct a single bouquet.'
  }
];

// Let's clean up any incorrect paths. Wait, let's make sure the custom bouquet path is exact!
GALLERY_ITEMS[3].image = customImg;

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ananya Sharma',
    text: 'My sunflower bouquet looked even better than the photos. It sits on my vanity table and makes me smile every single morning. Truly premium.',
    rating: 5,
    occasion: 'Self Care Purchase',
    date: 'June 2026'
  },
  {
    id: 'r2',
    name: 'Vikram Aditya',
    text: 'The most beautiful handmade gift I’ve ever received. Sent a rose cascade to my fiancé for our anniversary and she was completely speechless at the level of detail.',
    rating: 5,
    occasion: 'Anniversary Gift',
    date: 'May 2026'
  },
  {
    id: 'r3',
    name: 'Meera Sen',
    text: 'Absolutely stunning craftsmanship. I bought a custom chamomile and tulip hamper. The packaging itself feels like high-end luxury fashion.',
    rating: 5,
    occasion: 'Birthday Surprise',
    date: 'April 2026'
  },
  {
    id: 'r4',
    name: 'Rohan Thakur',
    text: 'A brilliant concept executed with flawless precision. These forever bouquets are much more romantic and meaningful than fresh flowers that fade in a week.',
    rating: 5,
    occasion: 'Mother’s Day',
    date: 'May 2026'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose Bouquet',
    subtitle: 'Curate your vision',
    description: 'Select from our curated collections of roses, sunflowers, and tulips, or initiate a direct chat with us to customize colors and species.'
  },
  {
    number: '02',
    title: 'Handcrafted Carefully',
    subtitle: 'The patience of yarn',
    description: 'Our local artisans in Himachal Pradesh spend 10 to 18 hours meticulously stitching every leaf, stem, and petal using premium organic cotton.'
  },
  {
    number: '03',
    title: 'Premium Packaging',
    subtitle: 'The luxury unboxing',
    description: 'Your bouquet is nestled in high-grammage structural wrapping, tied with pure silk ribbon, and misted with premium lavender essential oils.'
  },
  {
    number: '04',
    title: 'Delivered With Love',
    subtitle: 'Forever keepsake',
    description: 'Safely dispatched across India. Your forever flowers arrive in perfect blooming state, accompanied by a personalized wax-sealed greeting card.'
  }
];

export const WHY_US_CARDS: WhyUsCard[] = [
  {
    id: 'handmade',
    title: '100% Handcrafted',
    description: 'Zero machinery. Every single stitch is cast by hand, carrying the warm, singular human touch of our local artisans.',
    iconName: 'Flower'
  },
  {
    id: 'forever',
    title: 'Forever Flowers',
    description: 'These bouquets never fade, wither, or shed. They remain as vibrant and beautiful years later as the day they were unboxed.',
    iconName: 'Sparkles'
  },
  {
    id: 'packaging',
    title: 'Premium Packaging',
    description: 'Presented in gorgeous heavyweight linen papers, structural box hampers, and silk ties that match the standards of luxury boutiques.',
    iconName: 'Gift'
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description: 'Collaborate directly to create bespoke palettes, specific flower pairings, and personalized dimensions to capture your exact sentiment.',
    iconName: 'Layers'
  },
  {
    id: 'gift',
    title: 'The Perfect Keepsake',
    description: 'A thoughtful, timeless gift for weddings, birthdays, or milestone anniversaries that preserves memory long after the day passes.',
    iconName: 'Heart'
  },
  {
    id: 'love',
    title: 'Made with Patience',
    description: 'We believe craft cannot be rushed. Every petal represents hours of focused love, creativity, and quiet dedication in our atelier.',
    iconName: 'Palette'
  }
];
