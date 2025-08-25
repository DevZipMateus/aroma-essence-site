
import { ArrowRight, Sparkles, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContato = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg-hero opacity-90"></div>
      
      {/* Decorative Elements - Hidden on small screens */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 rounded-full bg-luxury/20 animate-float"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 rounded-full bg-accent/30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="hidden lg:block absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/10 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-6">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span className="text-xs sm:text-sm font-medium">12 Anos de Excelência B2B</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 text-shadow leading-tight">
            Transforme Vidas
            <br />
            <span className="text-luxury">Através dos Aromas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Líder em aromatizantes de ambiente premium para revenda. 
            <strong className="block sm:inline"> Seu sucesso é a nossa essência.</strong>
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
              <span className="text-sm sm:text-base">Produtos Premium</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
              <span className="text-sm sm:text-base">Oportunidades B2B</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-white/90">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
              <span className="text-sm sm:text-base">Resultados Comprovados</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              onClick={scrollToContato}
              size="lg"
              className="w-full sm:w-auto bg-luxury hover:bg-luxury/90 text-luxury-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg luxury-shadow group"
            >
              Seja Nosso Parceiro
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer as oportunidades de parceria da Imperium Aromas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/40 hover:border-white/60 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              WhatsApp Comercial
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 max-w-2xl lg:max-w-none mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-luxury mb-2">12+</div>
              <div className="text-white/80 text-sm sm:text-base">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-luxury mb-2">B2B</div>
              <div className="text-white/80 text-sm sm:text-base">Foco Exclusivo</div>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-luxury mb-2">Premium</div>
              <div className="text-white/80 text-sm sm:text-base">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
