import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { MapView } from '../components/Map';
import { AddPropertyModal } from '../components/AddPropertyModal';
import { PropertyDetails } from '../components/PropertyDetails';
import { properties as initialProperties } from '../data/properties';
import { reviews } from '../data/reviews';
import { filterProperties } from '../utils/filters';
import { FilterState, Property } from '../types';
import { Plus, Grid, Map as MapIcon } from 'lucide-react';
import { addMonths, isExpired } from '../utils/dates';

export function Listings() {
  const location = useLocation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>(() => 
    initialProperties.map(p => ({
      ...p,
      expiresAt: addMonths(p.createdAt, 1),
      isActive: true
    }))
  );
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    city: '',
    neighborhood: '',
    type: '',
    priceRange: '',
    roomType: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get('city');
    if (cityParam) {
      setFilters(prev => ({ ...prev, city: cityParam }));
    }
  }, [location]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.city) {
      navigate(`/listings?city=${newFilters.city}`);
    } else {
      navigate('/listings');
    }
  };

  const handleAddProperty = (newProperty: Omit<Property, 'id' | 'createdAt' | 'expiresAt' | 'isActive'>) => {
    const createdAt = new Date();
    const property: Property = {
      ...newProperty,
      id: String(properties.length + 1),
      createdAt,
      expiresAt: addMonths(createdAt, 1),
      isActive: true
    };
    setProperties([property, ...properties]);
  };

  const handleRenewProperty = (propertyId: string) => {
    setProperties(prevProperties => 
      prevProperties.map(property => 
        property.id === propertyId
          ? {
              ...property,
              expiresAt: addMonths(new Date(), 1),
              isActive: true
            }
          : property
      )
    );
  };

  // Filter out expired and inactive properties
  const activeProperties = properties.filter(
    property => !isExpired(property.expiresAt) && property.isActive
  );
  const filteredProperties = filterProperties(activeProperties, filters);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Property Listings</h1>
          <p className="text-gray-600">
            Find your perfect property from our curated selection across Turkey
          </p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          List Your Property
        </button>
      </div>

      <SearchFilters filters={filters} onFilterChange={handleFilterChange} />

      <div className="mb-6 flex justify-end space-x-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            viewMode === 'grid'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Grid size={20} />
          <span className="hidden md:inline">Grid View</span>
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            viewMode === 'map'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <MapIcon size={20} />
          <span className="hidden md:inline">Map View</span>
        </button>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onViewDetails={setSelectedProperty}
              onRenew={handleRenewProperty}
            />
          ))}
          {filteredProperties.length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500">
              No properties found matching your criteria.
            </div>
          )}
        </div>
      ) : (
        <div className="h-[400px] md:h-[600px]">
          <MapView
            properties={filteredProperties}
            onPropertySelect={(id) => {
              const property = properties.find(p => p.id === id);
              if (property) setSelectedProperty(property);
            }}
          />
        </div>
      )}

      <AddPropertyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProperty}
      />

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          reviews={reviews}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}