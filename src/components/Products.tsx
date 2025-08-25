
import { Sparkles, Waves, Droplets, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      icon: Sparkles,
      title: "Aromatizantes Spray",
      description: "Nossa linha principal de sprays aromatizadores premium, desenvolvidos com fragrâncias exclusivas e duração prolongada.",
      features: ["Fragrâncias exclusivas", "Longa duração", "Embalagem premium", "Ideal para revenda"]
    },
    {
      icon: Waves,
      title: "Difusores de Ambiente",
      description: "Difusores sofisticados que proporcionam aromatização contínua e elegante para ambientes comerciais e residenciais.",
      features: ["Aromatização contínua", "Design elegante", "Fácil manuseio", "Alto valor agregado"]
    },
    {
      icon: Droplets,
      title: "Sabonetes Líquidos",
      description: "Linha complementar de sabonetes líquidos com fragrâncias harmoniosas, perfeitos para completar o portfólio.",
      features: ["Fragrâncias harmoniosas", "Qualidade premium", "Embalagem atrativa", "Margem competitiva"]
    },
    {
      icon: Heart,
      title: "Escalda Pés e Sais",
      description: "Produtos de bem-estar que expandem as possibilidades de venda, oferecendo experiências sensoriais completas.",
      features: ["Experiência sensorial", "Bem-estar garantido", "Nicho diferenciado", "Oportunidade única"]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Nosso Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produtos premium desenvolvidos para maximizar suas oportunidades de negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-white to-muted/20 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-bg-luxury flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary to-accent text-white max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Pronto para Expandir Seu Negócio?
              </h3>
              <p className="text-lg mb-8 text-white/90">
                Descubra como nossos produtos premium podem transformar suas oportunidades de vendas
              </p>
              <a 
                href="https://wa.me/5532984143694?text=Olá! Gostaria de conhecer o portfólio completo da Imperium Aromas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Conheça Nosso Catálogo
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
