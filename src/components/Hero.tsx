
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
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-luxury/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-accent/30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/10 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">12 Anos de Excelência B2B</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow">
            Transforme Vidas
            <br />
            <span className="text-luxury">Através dos Aromas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Líder em aromatizantes de ambiente premium para revenda. 
            <strong> Seu sucesso é a nossa essência.</strong>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center text-white/90">
              <Sparkles className="w-5 h-5 mr-2 text-luxury" />
              <span>Produtos Premium</span>
            </div>
            <div className="flex items-center text-white/90">
              <Trophy className="w-5 h-5 mr-2 text-luxury" />
              <span>Oportunidades B2B</span>
            </div>
            <div className="flex items-center text-white/90">
              <ArrowRight className="w-5 h-5 mr-2 text-luxury" />
              <span>Resultados Comprovados</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContato}
              size="lg"
              className="bg-luxury hover:bg-luxury/90 text-luxury-foreground font-semibold px-8 py-4 text-lg luxury-shadow group"
            >
              Seja Nosso Parceiro
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a 
              href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer as oportunidades de parceria da Imperium Aromas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/40 hover:border-white/60 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              WhatsApp Comercial
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">12+</div>
              <div className="text-white/80">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">B2B</div>
              <div className="text-white/80">Foco Exclusivo</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">Premium</div>
              <div className="text-white/80">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
