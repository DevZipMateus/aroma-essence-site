
import { Users, Target, Heart, Award, Handshake, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Nossa História</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12 anos transformando conhecimento e propósito em oportunidades de negócio
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg-luxury flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">O Início da Jornada</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Nossa história começou em <strong>2012</strong>, quando dois amigos uniram forças para transformar conhecimento e propósito em um negócio de impacto. Um trazia a experiência na área de aromatizantes de ambiente, o outro o domínio em gestão e controle.
                  </p>
                </div>
              </div>
              
              <div className="pl-16">
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Dessa união nasceu uma empresa com o objetivo de oferecer muito mais do que produtos: <strong>criamos oportunidades de renda e promovemos bem-estar através dos aromas.</strong>
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Desde o início, nosso foco sempre foi o <strong>B2B</strong>, ajudando empreendedores e revendedores a crescerem com um portfólio de produtos de qualidade, que conquistam clientes e geram resultados.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Fé e Princípios</h3>
              <p className="text-muted-foreground">
                Princípios cristãos como base de todas as nossas decisões e relacionamentos comerciais.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-luxury flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Confiança</h3>
              <p className="text-muted-foreground">
                Construímos relacionamentos sólidos baseados na confiança mútua com parceiros e clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-accent flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Empreendedorismo</h3>
              <p className="text-muted-foreground">
                Utilizamos o empreendedorismo como ferramenta de transformação social e geração de oportunidades.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-primary flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Excelência</h3>
              <p className="text-muted-foreground">
                Comprometimento com a excelência em produtos e atendimento, sempre superando expectativas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-luxury flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Bem-estar</h3>
              <p className="text-muted-foreground">
                O bem-estar é o resultado final de tudo que fazemos, tanto para clientes quanto parceiros.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Parceria</h3>
              <p className="text-muted-foreground">
                Construímos parcerias duradouras focadas no crescimento mútuo e no sucesso compartilhado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
