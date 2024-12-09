import React from 'react';
import { Building2, Users, Shield, Trophy } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About RentHub Turkey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to helping you find the perfect property in Turkey.
          With years of experience and a commitment to excellence, we make your
          property journey seamless and enjoyable.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
          <div className="text-gray-600">Properties Listed</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
          <div className="text-gray-600">Cities Covered</div>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for excellence in every aspect of our service</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trust</h3>
            <p className="text-gray-600">Building trust through transparency and honesty</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
            <p className="text-gray-600">Your satisfaction is our top priority</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">Curating only the finest properties for our clients</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Ahmet Yilmaz</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Ayse Demir</h3>
            <p className="text-gray-600">Head of Sales</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Mehmet Kaya</h3>
            <p className="text-gray-600">Property Consultant</p>
          </div>
        </div>
      </div>
    </div>
  );
}