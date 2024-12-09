import { Property, PriceRange } from '../types';

export const parsePriceRange = (range: string): PriceRange | null => {
  if (!range) return null;
  
  const [min, max] = range.split('-').map(Number);
  return {
    min,
    max: max || null
  };
};

export const filterProperties = (
  properties: Property[],
  filters: {
    city: string;
    neighborhood: string;
    type: string;
    priceRange: string;
    roomType: string;
  }
): Property[] => {
  return properties.filter(property => {
    if (filters.city && property.city !== filters.city) return false;
    if (filters.neighborhood && property.neighborhood !== filters.neighborhood) return false;
    if (filters.type && property.type !== filters.type) return false;
    
    if (filters.priceRange) {
      const range = parsePriceRange(filters.priceRange);
      if (range) {
        if (property.price < range.min) return false;
        if (range.max && property.price > range.max) return false;
      }
    }
    
    if (filters.roomType) {
      const [rooms] = filters.roomType.split('+').map(Number);
      if (property.bedrooms !== rooms) return false;
    }
    
    return true;
  });
};