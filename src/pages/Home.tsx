import React from 'react';
import { Building2, Users, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b"
            alt="Istanbul Cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Find Your Dream Home in Turkey</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Discover the perfect property across Turkey's most beautiful cities.
            From modern apartments to luxury villas, find your ideal home with us.
          </p>
          <Link
            to="/listings"
            className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Properties
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose RentHub Turkey?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center p-4">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={28} className="text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Extensive Listings</h3>
            <p className="text-sm md:text-base text-gray-600">Wide range of properties across Turkey's most desirable locations</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Trusted Agents</h3>
            <p className="text-sm md:text-base text-gray-600">Work with verified real estate professionals</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={28} className="text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Secure Process</h3>
            <p className="text-sm md:text-base text-gray-600">Safe and transparent rental and buying process</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-sm md:text-base text-gray-600">Properties in the most sought-after neighborhoods</p>
          </div>
        </div>
      </div>

      {/* Featured Cities */}
      <div className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Cities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/listings?city=Istanbul" className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b"
                alt="Istanbul"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Istanbul</h3>
                <p className="text-sm md:text-base">Discover properties in Turkey's largest city</p>
              </div>
            </Link>
            <Link to="/listings?city=Antalya" className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
                alt="Antalya"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Antalya</h3>
                <p className="text-sm md:text-base">Find your perfect Mediterranean home</p>
              </div>
            </Link>
            <Link to="/listings?city=Bodrum" className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1570438395701-aee966d0e8bc"
                alt="Bodrum"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Bodrum</h3>
                <p className="text-sm md:text-base">Luxury properties in the Aegean coast</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}