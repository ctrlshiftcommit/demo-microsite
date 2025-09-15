import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { BookTest } from './pages/BookTest';
import { AboutDoctors } from './pages/AboutDoctors';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import './styles/globals.css';
import { Toaster } from 'react-hot-toast';

/**
 * Main App Component
 * - Sets up routing for the medical diagnostic lab website
 * - Includes global components like Header, Footer, and Chatbot
 * - Manages overall application layout and navigation
 */
function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Global Toast Notifications */}
        <Toaster position="top-right" />
        
        {/* Main Header Navigation */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-test" element={<BookTest />} />
            <Route path="/doctors" element={<AboutDoctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
        
        {/* Floating Chatbot Widget */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;