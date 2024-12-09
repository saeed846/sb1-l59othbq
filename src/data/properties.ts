import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Bosphorus View Apartment',
    description: 'Stunning apartment with panoramic Bosphorus views and modern amenities. Recently renovated with high-end finishes throughout.',
    price: 15000,
    city: 'Istanbul',
    neighborhood: 'Besiktas',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    images: [],
    amenities: ['WiFi', 'Gym', 'Parking', 'Air Conditioning'],
    type: 'apartment',
    createdAt: new Date(),
    location: {
      lat: 41.0422,
      lng: 29.0083
    },
    features: ['24/7 Security', 'Elevator', 'Built-in Kitchen', 'Central Heating'],
    furnished: true,
    petFriendly: false,
    contact: {
      name: 'Ahmet Yilmaz',
      phone: '+90 532 555 1234',
      email: 'ahmet.yilmaz@example.com',
      whatsapp: '905325551234'
    }
  },
  {
    id: '2',
    title: 'Cozy Studio in Historic District',
    description: 'Charming studio in the heart of historic peninsula, perfect for young professionals or students.',
    price: 8000,
    city: 'Istanbul',
    neighborhood: 'Beyoglu',
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    images: [],
    amenities: ['WiFi', 'Security', 'Furnished'],
    type: 'apartment',
    createdAt: new Date(),
    location: {
      lat: 41.0359,
      lng: 28.9773
    },
    features: ['High-Speed Internet', 'Modern Appliances'],
    furnished: true,
    petFriendly: true,
    contact: {
      name: 'Zeynep Kaya',
      phone: '+90 533 555 5678',
      email: 'zeynep.kaya@example.com',
      whatsapp: '905335555678'
    }
  },
  {
    id: '3',
    title: 'Luxury Villa with Pool',
    description: 'Spectacular villa with private pool and garden, offering the perfect blend of luxury and comfort.',
    price: 35000,
    city: 'Antalya',
    neighborhood: 'Konyaalti',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    images: [],
    amenities: ['Pool', 'Garden', 'Garage', 'Smart Home'],
    type: 'house',
    createdAt: new Date(),
    location: {
      lat: 36.8665,
      lng: 30.6333
    },
    features: ['Private Pool', 'Garden', 'Smart Home System', 'Double Garage'],
    furnished: false,
    petFriendly: true,
    contact: {
      name: 'Mehmet Demir',
      phone: '+90 535 555 9012',
      email: 'mehmet.demir@example.com',
      whatsapp: '905355559012'
    }
  }
];