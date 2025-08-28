import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Key, 
  Users, 
  Shield, 
  FileText, 
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Phone,
  Mail
} from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services: any = {
    "acquisition-vente": {
      icon: TrendingUp,
      title: "Acquisition & Vente",
      subtitle: "Excellence dans l'Accompagnement Immobilier",
      description: "Notre service d'acquisition et de vente de biens d'exception combine expertise du marché, négociation stratégique et accompagnement personnalisé pour optimiser chaque transaction.",
      color: "text-emerald-500",
      features: [
        "Évaluation expertisée par nos spécialistes certifiés",
        "Négociation exclusive avec les meilleures conditions",
        "Due diligence complète et analyse juridique",
        "Financement optimisé et solutions sur mesure",
        "Accompagnement post-acquisition complet",
        "Réseau international de partenaires privilégiés"
      ],
      process: [
        {
          step: "1",
          title: "Analyse des Besoins",
          description: "Entretien approfondi pour définir vos critères et objectifs d'investissement."
        },
        {
          step: "2",
          title: "Recherche Ciblée",
          description: "Sélection rigoureuse de biens correspondant à vos exigences spécifiques."
        },
        {
          step: "3",
          title: "Évaluation Expertisée",
          description: "Analyse complète de la valeur, du potentiel et des risques associés."
        },
        {
          step: "4",
          title: "Négociation Stratégique",
          description: "Optimisation des conditions d'achat et sécurisation de la transaction."
        },
        {
          step: "5",
          title: "Finalisation",
          description: "Accompagnement jusqu'à la signature et remise des clés."
        }
      ]
    },
    "location-prestige": {
      icon: Key,
      title: "Location Prestige",
      subtitle: "Gestion Locative Haut de Gamme",
      description: "Service complet de gestion locative premium pour propriétaires exigeants, garantissant rentabilité optimale et tranquillité d'esprit absolue.",
      color: "text-blue-500",
      features: [
        "Sélection rigoureuse des locataires premium",
        "Gestion administrative et comptable complète",
        "Maintenance préventive et corrective 24/7",
        "Reporting mensuel détaillé et transparent",
        "Optimisation fiscale et conseils patrimoniaux",
        "Service de conciergerie intégré"
      ],
      process: [
        {
          step: "1",
          title: "Audit du Bien",
          description: "Évaluation complète et recommandations d'optimisation."
        },
        {
          step: "2",
          title: "Marketing Premium",
          description: "Campagne de commercialisation ciblée et exclusive."
        },
        {
          step: "3",
          title: "Sélection Locataires",
          description: "Processus rigoureux de vérification et validation."
        },
        {
          step: "4",
          title: "Gestion Active",
          description: "Suivi permanent et maintenance proactive."
        },
        {
          step: "5",
          title: "Optimisation Continue",
          description: "Amélioration constante de la rentabilité et de la valeur."
        }
      ]
    }
  };

  const currentService = services[serviceId as string];

  if (!currentService) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Service non trouvé</h1>
          <Link to="/">
            <Button className="btn-luxury">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-6">
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>
            
            <div className="w-20 h-20 luxury-gradient rounded-3xl mx-auto mb-6 flex items-center justify-center">
              <IconComponent className={`w-10 h-10 text-accent`} />
            </div>
            
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Service Premium
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              {currentService.title}
            </h1>
            
            <p className="text-xl font-medium text-primary mb-6">
              {currentService.subtitle}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Nos <span className="text-luxury">Garanties d'Excellence</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Notre <span className="text-luxury">Processus d'Excellence</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-8">
              {currentService.process.map((step: any, index: number) => (
                <Card key={index} className="text-center border-0 card-shadow hover:luxury-shadow transition-luxury">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 luxury-gradient rounded-full mx-auto mb-6 flex items-center justify-center text-accent font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-playfair font-semibold mb-4">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-playfair font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-playfair font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Service Disponible</div>
              </div>
              <div>
                <div className="text-4xl font-playfair font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Années d'Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-playfair text-foreground mb-8 leading-relaxed">
              "Un service exceptionnel qui dépasse toutes les attentes. L'expertise et le professionnalisme 
              de l'équipe ont rendu possible l'acquisition de notre propriété de rêve."
            </blockquote>
            <cite className="text-muted-foreground">
              — Catherine M., Cliente depuis 2024
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Prêt à Commencer Votre Projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez nos experts pour une consultation personnalisée et découvrez 
              comment nous pouvons vous accompagner dans la réalisation de vos ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-luxury gap-2">
                <Phone className="w-5 h-5" />
                Appeler Maintenant
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-luxury gap-2">
                <Mail className="w-5 h-5" />
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;