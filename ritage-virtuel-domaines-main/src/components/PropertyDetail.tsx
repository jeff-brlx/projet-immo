import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Heart,
  Share2,
  MapPin,
  Home,
  Maximize,
  Car,
  Trees,
  Waves,
  Calendar,
  Phone,
  Mail,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyDetailProps {
  property?: {
    id: number;
    title: string;
    location: string;
    price: string;
    surface: string;
    bedrooms: number;
    bathrooms: number;
    parking: number;
    garden: string;
    pool: boolean;
    yearBuilt: number;
    images: string[];
    type: string;
    status: string;
    description: string;
    features: string[];
    agent: {
      name: string;
      phone: string;
      email: string;
      photo: string;
    };
  };
  onClose?: () => void;
}

const PropertyDetail = ({ property, onClose }: PropertyDetailProps) => {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  // Mock data si pas de property fournie
  const defaultProperty = {
    id: 1,
    title: "Villa Moderne Californienne",
    location: "Cannes, Côte d'Azur",
    price: "€8,900,000",
    surface: "450 m²",
    bedrooms: 6,
    bathrooms: 4,
    parking: 3,
    garden: "2,500 m²",
    pool: true,
    yearBuilt: 2020,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    type: "Villa",
    status: "Exclusivité",
    description: "Exceptionnelle villa contemporaine offrant une vue mer panoramique à 180°. Architecture signée par un architecte de renom, cette propriété unique allie luxe, confort et modernité. Située dans un environnement privilégié, elle bénéficie d'une intimité totale tout en étant proche des commodités.",
    features: [
      "Vue mer panoramique",
      "Piscine à débordement chauffée",
      "Cuisine équipée Boffi",
      "Domotique intégrée",
      "Ascenseur privatif",
      "Cave à vin climatisée",
      "Système de sécurité 24h/24",
      "Parking couvert 3 voitures",
      "Jardin paysager",
      "Terrasses multiples"
    ],
    agent: {
      name: "Sophie Martineau",
      phone: "+33 6 12 34 56 78",
      email: "s.martineau@heritage-domaines.fr",
      photo: "/api/placeholder/100/100"
    }
  };

  const propertyData = property || defaultProperty;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === propertyData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? propertyData.images.length - 1 : prev - 1
    );
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Retiré des favoris" : "Ajouté aux favoris",
      description: propertyData.title,
      duration: 3000,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié",
      description: "Le lien de cette propriété a été copié dans le presse-papier",
      duration: 3000,
    });
  };

  const handleContact = () => {
    toast({
      title: "Demande de contact envoyée",
      description: "L'agent vous contactera dans les plus brefs délais",
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onClose && (
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Retour
                </Button>
              )}
              <div>
                <h1 className="text-xl font-playfair font-bold text-foreground">
                  {propertyData.title}
                </h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {propertyData.location}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleFavorite}>
                <Heart className={cn(
                  "w-4 h-4",
                  isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
                )} />
              </Button>
              <Button size="sm" className="btn-luxury">
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Images & Virtual Tour */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image Carousel */}
            <Card className="overflow-hidden border-0 card-shadow">
              <div className="relative aspect-[16/10]">
                <img
                  src={propertyData.images[currentImageIndex]}
                  alt={propertyData.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Status Badge */}
                <Badge className={cn(
                  "absolute top-4 left-4",
                  getStatusColor(propertyData.status)
                )}>
                  {propertyData.status}
                </Badge>

                {/* Virtual Tour Button */}
                <Button
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground"
                  onClick={() => setShowVirtualTour(true)}
                >
                  <Play className="w-4 h-4 mr-1" />
                  Visite 360°
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-background/80 rounded-full px-3 py-1 text-sm">
                  {currentImageIndex + 1} / {propertyData.images.length}
                </div>
              </div>
            </Card>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {propertyData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden border-2 transition-smooth",
                    currentImageIndex === index 
                      ? "border-primary" 
                      : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    src={image}
                    alt={`Vue ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Property Details */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {propertyData.description}
                </p>

                <Separator className="my-6" />

                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Caractéristiques
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Key Info */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {propertyData.price}
                  </div>
                  <Badge variant="secondary">
                    Réf. HD-{propertyData.id.toString().padStart(3, '0')}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <Maximize className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{propertyData.surface}</div>
                    <div className="text-xs text-muted-foreground">Surface</div>
                  </div>
                  <div className="text-center">
                    <Home className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{propertyData.bedrooms}</div>
                    <div className="text-xs text-muted-foreground">Chambres</div>
                  </div>
                  <div className="text-center">
                    <Car className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{propertyData.parking}</div>
                    <div className="text-xs text-muted-foreground">Parking</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{propertyData.yearBuilt}</div>
                    <div className="text-xs text-muted-foreground">Année</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full btn-luxury gap-2"
                    onClick={handleContact}
                  >
                    <Phone className="w-4 h-4" />
                    Prendre Contact
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Télécharger la Fiche
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Eye className="w-4 h-4" />
                    Programmer une Visite
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Contact */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Votre Conseiller
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={propertyData.agent.photo}
                    alt={propertyData.agent.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">
                      {propertyData.agent.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Conseiller Expert
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                    <Phone className="w-4 h-4" />
                    {propertyData.agent.phone}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-0 card-shadow bg-gradient-to-br from-primary/5 to-primary-glow/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Informations Complémentaires
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{propertyData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Salles de bain:</span>
                    <span className="font-medium">{propertyData.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jardin:</span>
                    <span className="font-medium">{propertyData.garden}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Piscine:</span>
                    <span className="font-medium">{propertyData.pool ? "Oui" : "Non"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;