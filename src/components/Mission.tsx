
import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Mission = () => {
  return (
    <section id="missao" className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Missão, Visão & Valores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os pilares que guiam nossa jornada de transformação através dos aromas
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center h-full flex flex-col">
              <div className="w-20 h-20 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Missão</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Transformar vidas através dos aromas, oferecendo produtos que gerem bem-estar e, ao mesmo tempo, 
                <strong> criem oportunidades de renda</strong> para empreendedores e parceiros comerciais.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center h-full flex flex-col">
              <div className="w-20 h-20 rounded-full gradient-bg-luxury flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Visão</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Ser <strong>referência nacional</strong> em aromatizantes de ambiente no mercado B2B, 
                reconhecida por unir qualidade, propósito e resultados, sempre alinhados a 
                <strong> valores cristãos.</strong>
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group lg:col-span-1">
            <CardContent className="p-8 text-center h-full flex flex-col">
              <div className="w-20 h-20 rounded-full gradient-bg-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Valores</h3>
              <div className="text-left space-y-3 flex-grow">
                <p className="text-muted-foreground"><strong>Fé</strong> e princípios cristãos</p>
                <p className="text-muted-foreground"><strong>Confiança</strong> nas relações</p>
                <p className="text-muted-foreground"><strong>Empreendedorismo</strong> transformador</p>
                <p className="text-muted-foreground"><strong>Excelência</strong> em tudo</p>
                <p className="text-muted-foreground"><strong>Bem-estar</strong> como resultado</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="text-center">
          <Card className="border-none shadow-lg bg-white max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-primary mb-6">
                "Seu sucesso é a nossa essência"
              </blockquote>
              <p className="text-lg text-muted-foreground">
                Mais que um slogan, é o compromisso que assumimos com cada parceiro que escolhe crescer conosco.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
