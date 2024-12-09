import React, { useState } from 'react';
import { Property, Review } from '../types';
import { Reviews } from './Reviews';
import { MapView } from './Map';
import { 
  Bed, Bath, Square, MapPin, 
  PawPrint, Sofa, Check, ChevronLeft, ChevronRight,
  Phone, Mail, MessageSquare, Share2
} from 'lucide-react';

interface PropertyDetailsProps {
  property: Property;
  reviews: Review[];
  onClose: () => void;
}

export function PropertyDetails({ property, reviews, onClose }: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');
  const images = [property.imageUrl, ...(property.images || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to the landlord
    console.log('Message sent:', message);
    setMessage('');
    setShowContactForm(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Check out this property: ${property.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="relative h-64 md:h-96">
            <img 
              src={images[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white min-h-[48px] min-w-[48px]"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white min-h-[48px] min-w-[48px]"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 min-h-[48px] min-w-[48px]"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <MapPin size={16} />
            <span>{property.neighborhood}, {property.city}</span>
          </div>

          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{property.title}</h2>
            <button
              onClick={handleShare}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Share2 size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-600 mb-4">{property.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Bed size={20} />
                  <span>{property.bedrooms}+1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square size={20} />
                  <span>{property.area} m²</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {property.furnished && (
                  <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <Sofa size={16} />
                    Furnished
                  </span>
                )}
                {property.petFriendly && (
                  <span className="flex items-center gap-1 text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <PawPrint size={16} />
                    Pet Friendly
                  </span>
                )}
              </div>

              {property.features && property.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {property.videoUrl && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Video Tour:</h3>
                  <video
                    src={property.videoUrl}
                    controls
                    className="w-full rounded-lg"
                    preload="metadata"
                  />
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-3xl font-bold text-blue-600">
                  {property.price.toLocaleString('tr-TR')} TL
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="font-medium">{property.contact.name}</span>
                    </p>
                    <a
                      href={`tel:${property.contact.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Phone size={16} />
                      {property.contact.phone}
                    </a>
                    <a
                      href={`mailto:${property.contact.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                      <Mail size={16} />
                      {property.contact.email}
                    </a>
                    {property.contact.whatsapp && (
                      <a
                        href={`https://wa.me/${property.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                      >
                        <MessageSquare size={16} />
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                {!showContactForm ? (
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="h-[300px]">
                <MapView 
                  properties={[property]}
                  onPropertySelect={() => {}}
                />
              </div>
            </div>
          </div>

          <Reviews reviews={reviews} propertyId={property.id} />
        </div>
      </div>
    </div>
  );
}