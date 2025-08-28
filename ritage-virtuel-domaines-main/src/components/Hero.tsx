import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SearchBar from "./SearchBar";
import heroChateau from "@/assets/hero-chateau.jpg";

const Hero = () => {
  const { toast } = useToast();

  const handleExplorePortfolio = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: "Portfolio d'Exception",
      description: "Découvrez notre sélection de biens uniques",
      duration: 3000,
    });
  };

  const handleVirtualTour = () => {
    toast({
      title: "Visite Virtuelle 360°",
      description: "Technologie immersive disponible prochainement",
      duration: 3000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroChateau})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-background">
              Nouvelle génération d'excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-background mb-6 leading-tight">
            L'art de gérer
            <br />
            <span className="text-luxury">l'exception</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl font-light leading-relaxed">
            Découvrez notre collection exclusive de châteaux, domaines et villas d'exception. 
            Un patrimoine unique pour une clientèle exigeante.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-background/80">Biens d'exception</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">€2.5B</div>
              <div className="text-sm text-background/80">Valeur portfolio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">35</div>
              <div className="text-sm text-background/80">Pays présents</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-luxury gap-2 text-lg px-8 py-4"
              onClick={handleExplorePortfolio}
            >
              Explorer le Portfolio
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-outline-luxury gap-2 text-lg bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground"
              onClick={handleVirtualTour}
            >
              <Play className="w-5 h-5" />
              Visite Virtuelle
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;