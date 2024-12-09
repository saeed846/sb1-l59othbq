import React, { useState } from 'react';
import { User, LogIn, LogOut, Settings, Home, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LoginModal } from './LoginModal';
import { SignupModal } from './SignupModal';

export function ProfileButton() {
  const { currentUser, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => currentUser ? setShowDropdown(!showDropdown) : setShowLoginModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <User size={20} />
          <span className="hidden md:inline">
            {currentUser ? `Hi, ${currentUser.displayName || 'User'}` : 'Login/Signup'}
          </span>
        </button>

        {showDropdown && currentUser && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <button
              onClick={() => {
                setShowDropdown(false);
                // Navigate to profile page
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
            >
              <Settings size={16} />
              Profile Settings
            </button>
            <button
              onClick={() => {
                setShowDropdown(false);
                // Navigate to my properties page
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
            >
              <Home size={16} />
              My Properties
            </button>
            <button
              onClick={() => {
                setShowDropdown(false);
                // Open add property modal
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
            >
              <Plus size={16} />
              Add Property
            </button>
            <hr className="my-2" />
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-red-600"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />

      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
}