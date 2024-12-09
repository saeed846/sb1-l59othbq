import { TURKISH_CITIES } from '../constants/locations';

export type City = typeof TURKISH_CITIES[number];

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  city: City;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  images: string[];
  videoUrl?: string;
  amenities: string[];
  type: 'house' | 'apartment' | 'room';
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
  location: {
    lat: number;
    lng: number;
  };
  features: string[];
  furnished: boolean;
  petFriendly: boolean;
  contact: {
    name: string;
    phone: string;
    email: string;
    whatsapp?: string;
  };
}

export interface FilterState {
  city: string;
  neighborhood: string;
  type: string;
  priceRange: string;
  roomType: string;
  furnished?: boolean;
  petFriendly?: boolean;
  features?: string[];
}

export interface PriceRange {
  min: number;
  max: number | null;
}

export interface Review {
  id: string;
  propertyId: string;
  rating: number;
  comment: string;
  author: string;
  createdAt: Date;
  verified: boolean;
}

export interface PropertyLocation {
  lat: number;
  lng: number;
  title: string;
  price: number;
  type: string;
  id: string;
}