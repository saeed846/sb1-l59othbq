import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="bg-white border-t mt-16">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="text-center text-gray-600">
                <p>© 2024 RentHub Turkey. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;