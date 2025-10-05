import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521968912071?text=Olá! Gostaria de solicitar um orçamento para um serviço.', '_blank');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 rounded bg-gradient-to-b from-cyan-300 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <div className="w-8 h-8 rounded bg-gradient-to-b from-gray-800 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div className="w-8 h-8 rounded bg-gradient-to-b from-green-100 to-blue-200 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-sm">S</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IPS - Reparos</h1>
              <p className="text-xs text-gray-600">Seu reparo... nossa missão</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#servicos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all w-fit"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
