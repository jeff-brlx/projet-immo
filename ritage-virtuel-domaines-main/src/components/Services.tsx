import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  FileText, 
  Key, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const { toast } = useToast();

  const handleServiceLearnMore = (service: any) => {
    const serviceSlug = service.title.toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    window.location.href = `/service/${serviceSlug}`;
  };

  const handleFreeConsultation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: "Consultation Gratuite",
      description: "Contactez-nous pour programmer votre consultation",
      duration: 3000,
    });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Téléchargement de la brochure",
      description: "Brochure des services en cours de téléchargement",
      duration: 3000,
    });
  };

  const services = [
    {
      icon: TrendingUp,
      title: "Acquisition & Vente",
      description: "Accompagnement personnalisé pour l'achat et la vente de biens d'exception",
      features: [
        "Évaluation expertisée",
        "Négociation exclusive",
        "Due diligence complète",
        "Financement optimisé"
      ],
      color: "text-emerald-500"
    },
    {
      icon: Key,
      title: "Location Prestige",
      description: "Gestion locative haut de gamme pour propriétaires exigeants",
      features: [
        "Sélection rigoureuse locataires",
        "Gestion administrative complète",
        "Maintenance premium",
        "Reporting mensuel détaillé"
      ],
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Conciergerie Privée",
      description: "Services personnalisés pour simplifier votre quotidien de luxe",
      features: [
        "Majordome personnel",
        "Gestion domestique",
        "Services à la carte",
        "Disponibilité 24/7"
      ],
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Fiscalité Patrimoniale",
      description: "Optimisation fiscale et structuration patrimoniale sur mesure",
      features: [
        "Conseil fiscal expert",
        "Structuration offshore",
        "Optimisation IFI",
        "Transmission patrimoine"
      ],
      color: "text-amber-500"
    },
    {
      icon: FileText,
      title: "Conseil Juridique",
      description: "Expertise juridique spécialisée en droit immobilier de luxe",
      features: [
        "Audit juridique complet",
        "Rédaction actes",
        "Contentieux spécialisé",
        "Veille réglementaire"
      ],
      color: "text-red-500"
    },
    {
      icon: Globe,
      title: "International",
      description: "Développement à l'international avec nos partenaires de confiance",
      features: [
        "Réseau mondial",
        "Expertise locale",
        "Accompagnement visa",
        "Solutions multi-pays"
      ],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Services Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            L'Excellence au Service
            <br />
            <span className="text-luxury">de vos Ambitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services haut de gamme, pensée pour répondre 
            aux besoins les plus exigeants de notre clientèle internationale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group card-shadow hover:luxury-shadow transition-luxury border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-luxury group-hover:scale-110",
                      "bg-gradient-to-br from-muted to-muted/50"
                    )}>
                      <IconComponent className={cn("w-8 h-8", service.color)} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-between group-hover:bg-primary/5 transition-smooth"
                    onClick={() => handleServiceLearnMore(service)}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Besoin d'un Service Personnalisé ?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour concevoir une solution sur mesure 
            adaptée à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-luxury gap-2"
              onClick={handleFreeConsultation}
            >
              Consultation Gratuite
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-luxury"
              onClick={handleDownloadBrochure}
            >
              Télécharger la Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default Services;