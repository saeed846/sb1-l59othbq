import React, { useState } from 'react';
import { Home, Plus, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ProfileButton } from './ProfileButton';

interface HeaderProps {
  onAddProperty?: () => void;
}

export function Header({ onAddProperty }: HeaderProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Home className="text-blue-600" size={24} />
            <span className="text-xl font-bold">RentHub Turkey</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/listings" 
              className={`${location.pathname === '/listings' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Listings
            </Link>
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {onAddProperty && (
              <button 
                onClick={onAddProperty}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={20} />
                List Property
              </button>
            )}
            <ProfileButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/listings" 
                className={`${location.pathname === '/listings' ? 'text-blue-600' : 'text-gray-600'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Listings
              </Link>
              <Link 
                to="/about" 
                className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {onAddProperty && (
                <button 
                  onClick={() => {
                    onAddProperty();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  List Property
                </button>
              )}
              <div className="mt-2">
                <ProfileButton />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}