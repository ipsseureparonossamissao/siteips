import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521968912071?text=Olá! Gostaria de solicitar um orçamento para um serviço.', '_blank');
  };

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Copacabana, RJ",
      service: "Reparo de ar condicionado",
      rating: 5,
      comment: "Excelente atendimento! O técnico chegou no horário marcado e resolveu o problema do meu ar condicionado rapidamente. Preço justo e serviço de qualidade. Recomendo!",
      initials: "MS"
    },
    {
      name: "João Santos",
      location: "Vila Madalena, SP",
      service: "Instalação elétrica",
      rating: 5,
      comment: "Precisava de uma instalação elétrica urgente na minha loja e a equipe da IPS foi fantástica. Profissionais competentes e muito cuidadosos. Voltarei a contratar!",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      location: "Teresópolis, RJ",
      service: "Conserto de fogão",
      rating: 5,
      comment: "Meu fogão estava com problemas há semanas. A IPS resolveu tudo em uma visita só! Atendimento pelo WhatsApp foi super prático e o orçamento muito honesto.",
      initials: "AC"
    },
    {
      name: "Carlos Oliveira",
      location: "Barra da Tijuca, RJ",
      service: "Limpeza de painéis solares",
      rating: 5,
      comment: "Serviço impecável na limpeza dos meus painéis solares. A equipe foi muito profissional e cuidadosa. Após o serviço, a eficiência dos painéis melhorou bastante!",
      initials: "CO"
    },
    {
      name: "Luciana Ferreira",
      location: "Tijuca, RJ",
      service: "Encanamento",
      rating: 5,
      comment: "Estava com um vazamento urgente e a IPS me atendeu no mesmo dia! Resolveram o problema rapidamente e ainda deram dicas para evitar futuros problemas. Nota 10!",
      initials: "LF"
    },
    {
      name: "Roberto Lima",
      location: "Moema, SP",
      service: "Conserto de máquina de lavar",
      rating: 5,
      comment: "Minha máquina de lavar parou de funcionar e eu achei que teria que comprar uma nova. A equipe da IPS conseguiu consertar e ainda deu garantia. Economizei muito!",
      initials: "RL"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 clientes satisfeitos em Rio de Janeiro, São Paulo e Teresópolis. 
            Veja alguns depoimentos reais sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Service */}
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-3">
                      <AvatarFallback className="bg-blue-600 text-white font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer ser nosso próximo cliente satisfeito?
          </h3>
          <p className="text-gray-600 mb-6">
            Junte-se aos mais de 500 clientes que já confiaram na qualidade dos nossos serviços. 
            Solicite seu orçamento grátis agora mesmo!
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Solicitar Orçamento Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
