export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  flowerTypes: string[];
  dimensions: string;
  careInstructions: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  occasion: string;
  date: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WhyUsCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
