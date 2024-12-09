import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    propertyId: '1',
    rating: 5,
    comment: 'Amazing view of the Bosphorus! The apartment was exactly as described and the host was very helpful.',
    author: 'Mehmet A.',
    createdAt: new Date('2024-02-15'),
    verified: true
  },
  {
    id: '2',
    propertyId: '1',
    rating: 4,
    comment: 'Great location and modern amenities. Only minor issue was parking.',
    author: 'Sarah K.',
    createdAt: new Date('2024-02-10'),
    verified: true
  },
  {
    id: '3',
    propertyId: '2',
    rating: 5,
    comment: 'Perfect location in the heart of Istanbul. Walking distance to everything!',
    author: 'John D.',
    createdAt: new Date('2024-02-05'),
    verified: true
  }
];