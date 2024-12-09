import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface ReviewsProps {
  reviews: Review[];
  propertyId: string;
}

export function Reviews({ reviews, propertyId }: ReviewsProps) {
  const propertyReviews = reviews.filter(review => review.propertyId === propertyId);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
      {propertyReviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet</p>
      ) : (
        propertyReviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="font-medium">{review.author}</span>
                {review.verified && (
                  <span className="flex items-center text-green-600 text-sm">
                    <CheckCircle size={14} className="mr-1" />
                    Verified Stay
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(review.createdAt, { addSuffix: true })}
              </span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}