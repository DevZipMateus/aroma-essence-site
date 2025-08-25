
import { Crown, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg-luxury flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-luxury">Imperium</h3>
                <p className="text-sm text-white/80 font-medium">AROMAS</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Há 12 anos transformando vidas através dos aromas, oferecendo produtos premium 
              que geram bem-estar e criam oportunidades de renda para nossos parceiros.
            </p>
            <p className="text-luxury font-semibold text-lg">
              "Seu sucesso é a nossa essência"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-luxury">Contato</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5532984143694" 
                className="flex items-center space-x-3 text-white/90 hover:text-luxury transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                <span>(32) 98414-3694</span>
              </a>
              <a 
                href="mailto:comercial.imperiumaromas@gmail.com" 
                className="flex items-center space-x-3 text-white/90 hover:text-luxury transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>comercial.imperiumaromas@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  RUA MARIA LANZIOTTI BARRA, 195, CASA 1<br />
                  SANTA CRUZ - Juiz de Fora - MG<br />
                  CEP: 36088-230
                </address>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-luxury">Empresa</h4>
            <div className="space-y-4 text-white/90">
              <p>
                <strong>CNPJ:</strong><br />
                26.258.237/0001-60
              </p>
              <p>
                <strong>Horário:</strong><br />
                Segunda a Sexta<br />
                09h às 16h
              </p>
              <a 
                href="https://www.instagram.com/imperium_aromasluxo.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-luxury transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@imperium_aromasluxo.oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Imperium Aromas. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span>Desenvolvido desde 2012</span>
              <span>•</span>
              <span>Qualidade Premium B2B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
