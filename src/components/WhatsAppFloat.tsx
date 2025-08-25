
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after component becomes visible
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 8000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 mr-2 animate-fade-in-up">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-700 pr-6">
              <strong>Pronto para crescer?</strong><br />
              Fale conosco no WhatsApp e descubra nossas oportunidades B2B!
            </p>
            <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer as oportunidades de parceria da Imperium Aromas"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float group"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
