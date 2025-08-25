
import { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/98 backdrop-blur-md shadow-lg' : 'bg-black/95 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0" onClick={() => scrollToSection('hero')}>
            <img 
              src="/lovable-uploads/67a0b711-2afa-4f7e-96a4-33ad8af7ad6b.png" 
              alt="Imperium Aromas Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
            />
            <div className="hidden xs:block min-w-0">
              <h2 className="text-base sm:text-lg lg:text-xl font-serif font-bold gradient-text leading-tight">Imperium</h2>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-tight">AROMAS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('missao')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              Missão & Visão
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="gradient-bg-luxury hover:opacity-90 text-white font-semibold px-3 xl:px-4 2xl:px-6 py-2 luxury-shadow text-sm xl:text-base whitespace-nowrap"
            >
              Seja Parceiro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-800 rounded-md transition-colors flex-shrink-0 touch-target"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 py-3 sm:py-4 border-t border-border bg-black/98 backdrop-blur-md rounded-lg shadow-lg mx-1">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left px-3 sm:px-4 py-3 text-foreground hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-md text-sm sm:text-base touch-target"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left px-3 sm:px-4 py-3 text-foreground hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-md text-sm sm:text-base touch-target"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('missao')}
                className="text-left px-3 sm:px-4 py-3 text-foreground hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-md text-sm sm:text-base touch-target"
              >
                Missão & Visão
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left px-3 sm:px-4 py-3 text-foreground hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-md text-sm sm:text-base touch-target"
              >
                Contato
              </button>
              <div className="px-3 sm:px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full gradient-bg-luxury hover:opacity-90 text-white font-semibold py-3 luxury-shadow text-sm sm:text-base touch-target"
                >
                  Seja Parceiro
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
