
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Fale Conosco</span>
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Pronto para fazer parte da nossa rede de parceiros de sucesso?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-primary">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-luxury flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Telefone Comercial</h4>
                    <a 
                      href="https://wa.me/5532984143694" 
                      className="text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (32) 98414-3694
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">E-mail Comercial</h4>
                    <a 
                      href="mailto:comercial.imperiumaromas@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      comercial.imperiumaromas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                    <address className="text-foreground not-italic">
                      RUA MARIA LANZIOTTI BARRA, 195, CASA 1<br />
                      SANTA CRUZ - Juiz de Fora - MG<br />
                      CEP: 36088-230
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-luxury flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horário de Funcionamento</h4>
                    <p className="text-foreground">
                      Segunda a Sexta: 09h às 16h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-bg-accent flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">CNPJ</h4>
                    <p className="text-foreground">26.258.237/0001-60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-2xl font-serif font-semibold">WhatsApp Comercial</h3>
                </div>
                <p className="mb-6 text-white/90">
                  Fale diretamente com nossa equipe comercial e descubra as melhores oportunidades de parceria.
                </p>
                <a 
                  href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer as oportunidades de parceria da Imperium Aromas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    Iniciar Conversa
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Siga-nos nas Redes</h3>
                <p className="text-foreground mb-6">
                  Acompanhe novidades, dicas e cases de sucesso dos nossos parceiros.
                </p>
                <a 
                  href="https://www.instagram.com/imperium_aromasluxo.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 text-primary hover:text-accent transition-colors font-semibold"
                >
                  <div className="w-10 h-10 rounded-full gradient-bg-luxury flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IG</span>
                  </div>
                  <span>@imperium_aromasluxo.oficial</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">Pronto para Começar?</h3>
                <p className="text-foreground mb-6">
                  Entre em contato conosco e descubra como podemos impulsionar seu negócio juntos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/5532984143694?text=Gostaria de ser revendedor dos produtos Imperium Aromas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full gradient-bg-luxury hover:opacity-90 text-white">
                      Ser Revendedor
                    </Button>
                  </a>
                  <a 
                    href="mailto:comercial.imperiumaromas@gmail.com"
                  >
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Enviar E-mail
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
