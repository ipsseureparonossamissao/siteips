import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, MapPin, Award, Users } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521968912071?text=Olá! Gostaria de solicitar um orçamento para um serviço.', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reparos e Instalações com
                <span className="text-blue-600"> Qualidade Profissional</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                8 anos de experiência levando soluções completas para sua casa ou empresa. 
                Atendemos Rio de Janeiro, São Paulo e Teresópolis.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-600">Anos no mercado</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Clientes satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Cidades</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-lg rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
              >
                Ver Todos os Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Atendimento rápido</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Profissionais qualificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Garantia nos serviços</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-gray-800">Elétrica</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-gray-800">Encanamento</div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-gray-800">Ar Condicionado</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-gray-800">Eletrodomésticos</div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
