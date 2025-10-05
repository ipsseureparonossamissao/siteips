import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Wrench, 
  Zap, 
  Droplets, 
  Wind, 
  Flame, 
  Sun, 
  Hammer, 
  Settings,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521968912071?text=Olá! Gostaria de solicitar um orçamento para um serviço.', '_blank');
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Serviços Elétricos",
      description: "Instalações, reparos e manutenção elétrica residencial e comercial",
      items: ["Eletricista", "Instalação de ventilador de teto", "Serviços de fixação"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Encanamento",
      description: "Soluções completas em hidráulica e encanamento",
      items: ["Encanamento", "Conserto de cuba", "Fixação de telas"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Ar Condicionado",
      description: "Instalação, manutenção e higienização de sistemas de climatização",
      items: ["Higienização de ar condicionado", "Instalação", "Manutenção preventiva"]
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Eletrodomésticos",
      description: "Reparo e manutenção de todos os tipos de eletrodomésticos",
      items: ["Conserto de fogão", "Conserto de máquina", "Conserto de micro-ondas"]
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energia Solar",
      description: "Manutenção e limpeza de sistemas de energia solar",
      items: ["Limpeza de painéis solares", "Manutenção preventiva", "Inspeção técnica"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Construção Civil",
      description: "Serviços de pedreiro e acabamento",
      items: ["Pedreiro", "Rejunte", "Reparos estruturais"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços de reparo e instalação com qualidade profissional 
            e garantia em todos os trabalhos realizados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Precisa de outro tipo de serviço?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está sempre pronta para atender suas necessidades específicas. 
            Entre em contato e vamos encontrar a melhor solução para você!
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
