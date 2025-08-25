
import { Crown, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-bg-luxury flex items-center justify-center flex-shrink-0">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-luxury">Imperium</h3>
                <p className="text-xs sm:text-sm text-white/80 font-medium">AROMAS</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Há 12 anos transformando vidas através dos aromas, oferecendo produtos premium 
              que geram bem-estar e criam oportunidades de renda para nossos parceiros.
            </p>
            <p className="text-luxury font-semibold text-base sm:text-lg">
              "Seu sucesso é a nossa essência"
            </p>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-luxury">Contato</h4>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://wa.me/5532984143694" 
                className="flex items-center space-x-3 text-white/90 hover:text-luxury transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">(32) 98414-3694</span>
              </a>
              <a 
                href="mailto:comercial.imperiumaromas@gmail.com" 
                className="flex items-start space-x-3 text-white/90 hover:text-luxury transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">comercial.imperiumaromas@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <address className="not-italic text-sm sm:text-base leading-relaxed">
                  RUA MARIA LANZIOTTI BARRA, 195, CASA 1<br />
                  SANTA CRUZ - Juiz de Fora - MG<br />
                  CEP: 36088-230
                </address>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-luxury">Empresa</h4>
            <div className="space-y-3 sm:space-y-4 text-white/90">
              <div>
                <strong className="block text-sm sm:text-base">CNPJ:</strong>
                <span className="text-sm sm:text-base">26.258.237/0001-60</span>
              </div>
              <div>
                <strong className="block text-sm sm:text-base">Horário:</strong>
                <span className="text-sm sm:text-base">Segunda a Sexta<br />09h às 16h</span>
              </div>
              <a 
                href="https://www.instagram.com/imperium_aromasluxo.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-luxury transition-colors text-sm sm:text-base touch-target"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">@imperium_aromasluxo.oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center md:text-left">
              © 2024 Imperium Aromas. Todos os direitos reservados.
            </p>
            <div className="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-4 text-xs sm:text-sm text-white/70 text-center">
              <span>Desenvolvido desde 2012</span>
              <span className="hidden xs:inline">•</span>
              <span>Qualidade Premium B2B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
