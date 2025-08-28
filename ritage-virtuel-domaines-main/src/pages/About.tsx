import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Crown, 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp,
  Shield,
  Star,
  ArrowRight
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description: "Nous nous engageons à offrir un service d'exception à chacun de nos clients."
    },
    {
      icon: Users,
      title: "Confiance",
      description: "La confiance est au cœur de nos relations durables avec nos clients."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour optimiser nos services."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Notre équipe combine expérience et expertise du marché du luxe."
    }
  ];

  const team = [
    {
      name: "Alexandre Dubois",
      role: "Fondateur & Directeur Général",
      description: "15 ans d'expérience dans l'immobilier de prestige international."
    },
    {
      name: "Sophie Martin",
      role: "Directrice Commerciale",
      description: "Spécialiste des propriétés d'exception et des clients internationaux."
    },
    {
      name: "Jean-Pierre Durand",
      role: "Conseiller Patrimonial",
      description: "Expert en optimisation fiscale et structuration patrimoniale."
    },
    {
      name: "Marie Leroy",
      role: "Responsable Conciergerie",
      description: "Coordinatrice des services personnalisés haut de gamme."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              À Propos de Nous
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Nouvelle Génération
              <br />
              <span className="text-luxury">d'Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Héritage & Domaines naît en 2024 avec une vision moderne du luxe immobilier. 
              Notre approche innovante combine tradition française et excellence contemporaine.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-muted-foreground">Excellence garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Notre Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Redéfinir l'Expérience
                <span className="text-luxury"> du Luxe Immobilier</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous créons des expériences uniques pour une clientèle internationale exigeante, 
                en combinant innovation technologique et service personnalisé d'exception.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="font-medium">Service client 24/7 multilingue</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="font-medium">Technologie de pointe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="font-medium">Réseau international</span>
                </div>
              </div>
            </div>
            <div className="luxury-gradient rounded-3xl p-12 text-center text-accent">
              <Crown className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Vision 2024
              </h3>
              <p className="text-lg leading-relaxed">
                Devenir la référence européenne pour l'acquisition de biens d'exception 
                grâce à notre approche innovante et notre service ultra-personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nos Valeurs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Les Piliers de Notre
              <span className="text-luxury"> Excellence</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-0 card-shadow hover:luxury-shadow transition-luxury">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 luxury-gradient rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Notre Équipe Fondatrice
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              L'Excellence Incarnée par
              <span className="text-luxury"> nos Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Une équipe passionnée et expérimentée, unie par la vision commune 
              d'offrir un service d'exception à notre clientèle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 card-shadow hover:luxury-shadow transition-luxury">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Prêt à Découvrir l'Excellence ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour une consultation personnalisée et découvrez 
            comment nous pouvons vous accompagner dans vos projets d'exception.
          </p>
          <Button size="lg" className="btn-luxury gap-2">
            Nous Contacter
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;