import React from 'react';
import { MessageCircle, MapPin, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521968912071?text=Olá! Gostaria de solicitar um orçamento para um serviço.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
                <h3 className="text-2xl font-bold">IPS - Reparos</h3>
                <p className="text-gray-400">Seu reparo... nossa missão</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Com 8 anos de experiência no mercado, a IPS - Reparos é especialista em 
              soluções completas para sua casa e empresa. Atendemos com qualidade e 
              garantia em Rio de Janeiro, São Paulo e Teresópolis.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Serviços Elétricos</li>
              <li className="hover:text-white transition-colors cursor-pointer">Encanamento</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ar Condicionado</li>
              <li className="hover:text-white transition-colors cursor-pointer">Eletrodomésticos</li>
              <li className="hover:text-white transition-colors cursor-pointer">Energia Solar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Construção Civil</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informações</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Atendemos:</div>
                  <div>Rio de Janeiro</div>
                  <div>São Paulo</div>
                  <div>Teresópolis</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Horário de Atendimento:</div>
                  <div>Segunda à Sábado</div>
                  <div>08h às 18h</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">8 Anos no Mercado</div>
                  <div>500+ Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 IPS - Reparos. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">WhatsApp:</span>
              <Button 
                onClick={handleWhatsAppClick}
                variant="link"
                className="text-green-400 hover:text-green-300 p-0"
              >
                +55 21 96891-2071
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
