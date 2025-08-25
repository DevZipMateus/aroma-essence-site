
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated golden orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-luxury/30 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-l from-accent/25 to-luxury/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-tr from-luxury/20 to-accent/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Floating golden particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-luxury rounded-full animate-float opacity-80"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-luxury rounded-full animate-float opacity-70" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-luxury rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      {/* Decorative Elements - Hidden on mobile and small tablets */}
      <div className="hidden lg:block absolute top-20 left-10 w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-luxury/20 animate-float border border-luxury/30"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-accent/30 animate-float border border-accent/40" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center animate-fade-in-up">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-luxury/20 backdrop-blur-sm border border-luxury/40 mb-4 sm:mb-6">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-luxury flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-luxury whitespace-nowrap">12 Anos de Excelência B2B</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-3 sm:mb-4 lg:mb-6 text-shadow leading-tight">
              Transforme Vidas
              <br />
              <span className="text-luxury">Através dos Aromas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Líder em aromatizantes de ambiente premium para revenda. 
              <strong className="block sm:inline text-luxury mt-1 sm:mt-0"> Seu sucesso é a nossa essência.</strong>
            </p>

            {/* Features */}
            <div className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center justify-center lg:justify-start text-white/90">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">Produtos Premium</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-white/90">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">Oportunidades B2B</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-white/90">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-luxury flex-shrink-0" />
                <span className="text-sm sm:text-base whitespace-nowrap">Resultados Comprovados</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 lg:mb-16">
              <Button 
                onClick={scrollToContato}
                size="lg"
                className="w-full sm:w-auto bg-luxury hover:bg-luxury/90 text-luxury-foreground font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg luxury-shadow group touch-target"
              >
                Seja Nosso Parceiro
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <a 
                href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer as oportunidades de parceria da Imperium Aromas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold bg-white/20 hover:bg-white/30 text-white border border-luxury/40 hover:border-luxury/60 rounded-lg transition-all duration-300 backdrop-blur-sm touch-target"
              >
                WhatsApp Comercial
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-luxury/20">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-luxury mb-1 sm:mb-2">12+</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-base">Anos de Mercado</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-luxury mb-1 sm:mb-2">B2B</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-base">Foco Exclusivo</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-luxury mb-1 sm:mb-2">Premium</div>
                <div className="text-white/80 text-xs sm:text-sm lg:text-base">Qualidade Garantida</div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border border-luxury/20 aspect-[9/16] object-cover"
              >
                <source src="/lovable-uploads/galeria/cheiro.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              
              {/* Video overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
