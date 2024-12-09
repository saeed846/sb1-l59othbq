import React from 'react';
import { Bed, Bath, Square, MapPin, AlertCircle } from 'lucide-react';
import { Property } from '../types';
import { getRemainingDays } from '../utils/dates';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onRenew?: (propertyId: string) => void;
}

export function PropertyCard({ property, onViewDetails, onRenew }: PropertyCardProps) {
  const remainingDays = getRemainingDays(property.expiresAt);
  const isExpiringSoon = remainingDays <= 7;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {isExpiringSoon && (
          <div className="absolute top-2 right-2">
            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <AlertCircle size={16} />
              {remainingDays > 0 
                ? `Expires in ${remainingDays} days`
                : 'Expired'
              }
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <MapPin size={16} />
          <span>{property.neighborhood}, {property.city}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span>{property.bedrooms}+1</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square size={18} />
            <span>{property.area} m²</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-2xl font-bold text-blue-600">{property.price.toLocaleString('tr-TR')} TL</p>
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              onClick={() => onViewDetails(property)}
              className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors min-h-[48px]"
            >
              View Details
            </button>
            {isExpiringSoon && onRenew && (
              <button
                onClick={() => onRenew(property.id)}
                className="flex-1 sm:flex-none bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Renew
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}