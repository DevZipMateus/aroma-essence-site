
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
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/lovable-uploads/67a0b711-2afa-4f7e-96a4-33ad8af7ad6b.png" 
              alt="Imperium Aromas Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="text-xl font-serif font-bold gradient-text">Imperium</h2>
              <p className="text-xs text-muted-foreground font-medium">AROMAS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('missao')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Missão & Visão
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="gradient-bg-luxury hover:opacity-90 text-white font-semibold px-6 py-2 luxury-shadow"
            >
              Seja Parceiro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-white/98 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('missao')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Missão & Visão
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <div className="px-4">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full gradient-bg-luxury hover:opacity-90 text-white font-semibold py-2 luxury-shadow"
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
