import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Home, Maximize, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Import images
import villaMmoderne from "@/assets/villa-moderne.jpg";
import domaineHistorique from "@/assets/domaine-historique.jpg";
import penthouseLuxe from "@/assets/penthouse-luxe.jpg";

const FeaturedProperties = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<number[]>([]);

  const properties = [
    {
      id: 1,
      title: "Villa Moderne Californienne",
      location: "Cannes, Côte d'Azur",
      price: "€8,900,000",
      surface: "450 m²",
      bedrooms: 6,
      image: villaMmoderne,
      type: "Villa",
      status: "Exclusivité",
      description: "Vue mer panoramique, piscine à débordement, architecture contemporaine",
    },
    {
      id: 2,
      title: "Domaine Historique",
      location: "Bordeaux, Gironde",
      price: "€15,500,000",
      surface: "1,200 m²",
      bedrooms: 12,
      image: domaineHistorique,
      type: "Château",
      status: "Nouveau",
      description: "Vignoble inclus, parc de 50 hectares, patrimoine classé",
    },
    {
      id: 3,
      title: "Penthouse d'Exception",
      location: "Paris 16ème",
      price: "€12,200,000",
      surface: "380 m²",
      bedrooms: 4,
      image: penthouseLuxe,
      type: "Appartement",
      status: "Rare",
      description: "Vue Tour Eiffel, terrasse 200m², finitions luxueuses",
    },
  ];

  const toggleFavorite = (id: number) => {
    const isAdding = !favorites.includes(id);
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
    
    toast({
      title: isAdding ? "Ajouté aux favoris" : "Retiré des favoris",
      description: isAdding ? "Ce bien a été ajouté à vos favoris" : "Ce bien a été retiré de vos favoris",
      duration: 2000,
    });
  };

  const handlePropertyDetails = (property: any) => {
    toast({
      title: "Détails du bien",
      description: `Consultation des détails de ${property.title}`,
      duration: 3000,
    });
  };

  const handlePropertyView = (property: any) => {
    toast({
      title: "Visite virtuelle", 
      description: `Démarrage de la visite de ${property.title}`,
      duration: 3000,
    });
  };

  const handleViewAllPortfolio = () => {
    toast({
      title: "Portfolio complet",
      description: "Accès à l'ensemble de nos biens d'exception",
      duration: 3000,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Exclusivité":
        return "bg-primary text-primary-foreground";
      case "Nouveau":
        return "bg-emerald-500 text-white";
      case "Rare":
        return "bg-rose-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="properties" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Portfolio Exclusif
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Biens d'Exception
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une sélection rigoureuse de propriétés uniques, choisies pour leur caractère exceptionnel 
            et leur potentiel patrimonial.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden card-shadow hover:luxury-shadow transition-luxury border-0 bg-card"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-luxury" />
                
                {/* Status Badge */}
                <Badge 
                  className={cn(
                    "absolute top-4 left-4 font-medium",
                    getStatusColor(property.status)
                  )}
                >
                  {property.status}
                </Badge>

                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background transition-smooth"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart 
                    className={cn(
                      "w-4 h-4 transition-smooth",
                      favorites.includes(property.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-muted-foreground"
                    )} 
                  />
                </Button>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-background/90"
                      onClick={() => handlePropertyView(property)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Type */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {property.type}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    Réf. HD-{property.id.toString().padStart(3, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{property.surface}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>{property.bedrooms} ch.</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">
                    {property.price}
                  </div>
                  <Button 
                    size="sm" 
                    className="btn-luxury text-xs px-4 gap-1"
                    onClick={() => handlePropertyDetails(property)}
                  >
                    Détails
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-outline-luxury gap-2"
            onClick={handleViewAllPortfolio}
          >
            Voir tout le Portfolio
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;