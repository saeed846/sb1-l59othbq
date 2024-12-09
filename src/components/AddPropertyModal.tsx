import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TURKISH_CITIES, NEIGHBORHOODS } from '../constants/locations';
import { Property } from '../types';
import { MediaUpload } from './MediaUpload';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (property: Omit<Property, 'id' | 'createdAt'>) => void;
}

export function AddPropertyModal({ isOpen, onClose, onAdd }: AddPropertyModalProps) {
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    neighborhood: '',
    roomType: '1+0',
    bathrooms: '',
    area: '',
    imageUrl: '',
    images: [] as string[],
    videoUrl: '',
    type: 'apartment',
    amenities: [] as string[],
    furnished: false,
    petFriendly: false,
    features: [] as string[],
    contact: {
      name: '',
      phone: '',
      email: '',
      whatsapp: ''
    }
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const location = {
      lat: 41.0082,
      lng: 28.9784
    };

    onAdd({
      ...formData,
      price: Number(formData.price),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      city: selectedCity as any,
      location,
      bedrooms: formData.type === 'room' 
        ? Number(formData.roomType)
        : parseInt(formData.roomType.split('+')[0])
    });
    onClose();
  };

  const handleImagesChange = (urls: string[]) => {
    setFormData({
      ...formData,
      images: urls,
      imageUrl: urls[0] || ''
    });
  };

  const handleVideoChange = (url: string) => {
    setFormData({
      ...formData,
      videoUrl: url
    });
  };

  const handleContactChange = (key: keyof typeof formData.contact, value: string) => {
    setFormData({
      ...formData,
      contact: {
        ...formData.contact,
        [key]: value
      }
    });
  };

  const renderRoomTypeSelect = () => {
    if (formData.type === 'room') {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Rooms</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.roomType}
            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
          >
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
          </select>
        </div>
      );
    }

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">Room Type</label>
        <select
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.roomType}
          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
        >
          <option value="1+0">1+0 (Studio)</option>
          <option value="1+1">1+1</option>
          <option value="2+1">2+1</option>
          <option value="3+1">3+1</option>
          <option value="4+1">4+1</option>
          <option value="5+1">5+1</option>
        </select>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add New Property</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price (TL)</label>
              <input
                type="number"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setFormData({ ...formData, neighborhood: '' });
                }}
              >
                <option value="">Select City</option>
                {TURKISH_CITIES.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Neighborhood</label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.neighborhood}
                onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                disabled={!selectedCity}
              >
                <option value="">Select Neighborhood</option>
                {selectedCity && NEIGHBORHOODS[selectedCity]?.map((neighborhood) => (
                  <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.type}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    type: e.target.value as any,
                    roomType: e.target.value === 'room' ? '1' : '1+0'
                  });
                }}
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="room">Room</option>
              </select>
            </div>

            {renderRoomTypeSelect()}

            <div>
              <label className="block text-sm font-medium text-gray-700">Area (m²)</label>
              <input
                type="number"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <MediaUpload
            onImagesChange={handleImagesChange}
            onVideoChange={handleVideoChange}
          />

          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.furnished}
                onChange={(e) => setFormData({ ...formData, furnished: e.target.checked })}
              />
              <span className="text-sm text-gray-700">Furnished</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.petFriendly}
                onChange={(e) => setFormData({ ...formData, petFriendly: e.target.checked })}
              />
              <span className="text-sm text-gray-700">Pet Friendly</span>
            </label>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.contact.name}
                  onChange={(e) => handleContactChange('name', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+90 XXX XXX XXXX"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.contact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.contact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp (Optional)</label>
                <input
                  type="tel"
                  placeholder="+90 XXX XXX XXXX"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.contact.whatsapp}
                  onChange={(e) => handleContactChange('whatsapp', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}