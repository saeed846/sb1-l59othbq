import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { TURKISH_CITIES, NEIGHBORHOODS } from '../constants/locations';
import { FilterState } from '../types';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    if (key === 'city') {
      newFilters.neighborhood = '';
    }
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        className="md:hidden w-full flex items-center justify-between p-2 mb-4 border rounded-lg"
      >
        <span className="flex items-center gap-2">
          <Filter size={20} />
          Filters
        </span>
        <span>{isFiltersOpen ? '−' : '+'}</span>
      </button>

      <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
            >
              <option value="">Any City</option>
              {TURKISH_CITIES.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Neighborhood</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.neighborhood}
              onChange={(e) => handleFilterChange('neighborhood', e.target.value)}
              disabled={!filters.city}
            >
              <option value="">Any Neighborhood</option>
              {filters.city && NEIGHBORHOODS[filters.city]?.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="room">Room</option>
            </select>
          </div>

          <div className="w-full md:w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="">Any</option>
              <option value="0-5000">0 - 5,000 TL</option>
              <option value="5000-10000">5,000 - 10,000 TL</option>
              <option value="10000-20000">10,000 - 20,000 TL</option>
              <option value="20000-30000">20,000 - 30,000 TL</option>
              <option value="30000">30,000+ TL</option>
            </select>
          </div>

          <div className="w-full md:w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.roomType}
              onChange={(e) => handleFilterChange('roomType', e.target.value)}
            >
              <option value="">Any</option>
              <option value="1+0">1+0 (Studio)</option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
              <option value="4+1">4+1</option>
              <option value="5+1">5+1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}