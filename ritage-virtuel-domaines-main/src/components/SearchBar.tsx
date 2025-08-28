import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  MapPin, 
  Home, 
  Euro, 
  Filter,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const propertyTypes = [
    "Villa", "Château", "Appartement", "Penthouse", "Domaine", "Hôtel Particulier"
  ];

  const priceRanges = [
    "< 5M€", "5M€ - 10M€", "10M€ - 20M€", "20M€ - 50M€", "> 50M€"
  ];

  const popularLocations = [
    "Côte d'Azur", "Paris", "Bordeaux", "Provence", "Normandie", "Île-de-France"
  ];

  const handleSearch = () => {
    const filters = { searchQuery, selectedType, priceRange, location };
    const activeFilters = Object.values(filters).filter(Boolean).length;
    
    toast({
      title: "Recherche lancée",
      description: `${activeFilters} filtre(s) appliqué(s). Résultats en cours de chargement...`,
      duration: 3000,
    });
    
    console.log("Recherche:", filters);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("");
    setPriceRange("");
    setLocation("");
    
    toast({
      title: "Filtres effacés",
      description: "Tous les filtres ont été remis à zéro",
      duration: 2000,
    });
  };

  const hasFilters = searchQuery || selectedType || priceRange || location;

  return (
    <Card className="w-full card-shadow border-0 bg-card/95 backdrop-blur-sm">
      <CardContent className="p-6">
        {/* Main Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher un bien, une ville, une référence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-background border-border focus:border-primary"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2">
            <Button
              variant={isExpanded ? "default" : "outline"}
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gap-2 h-12"
            >
              <Filter className="w-4 h-4" />
              Filtres
            </Button>
            
            <Button 
              size="lg" 
              className="btn-luxury h-12 px-8 gap-2"
              onClick={handleSearch}
            >
              <Search className="w-4 h-4" />
              Rechercher
            </Button>
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <Home className="w-4 h-4 inline mr-2" />
                  Type de bien
                </label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <Badge
                      key={type}
                      variant={selectedType === type ? "default" : "secondary"}
                      className={cn(
                        "cursor-pointer transition-smooth",
                        selectedType === type 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-primary/10"
                      )}
                      onClick={() => setSelectedType(selectedType === type ? "" : type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <Euro className="w-4 h-4 inline mr-2" />
                  Gamme de prix
                </label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <Badge
                      key={range}
                      variant={priceRange === range ? "default" : "secondary"}
                      className={cn(
                        "cursor-pointer transition-smooth",
                        priceRange === range 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-primary/10"
                      )}
                      onClick={() => setPriceRange(priceRange === range ? "" : range)}
                    >
                      {range}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Localisation
                </label>
                <div className="flex flex-wrap gap-2">
                  {popularLocations.map((loc) => (
                    <Badge
                      key={loc}
                      variant={location === loc ? "default" : "secondary"}
                      className={cn(
                        "cursor-pointer transition-smooth",
                        location === loc 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-primary/10"
                      )}
                      onClick={() => setLocation(location === loc ? "" : loc)}
                    >
                      {loc}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            {hasFilters && (
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                  Effacer tous les filtres
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchBar;