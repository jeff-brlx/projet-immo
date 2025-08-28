import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown, Globe, User, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("FR");

  const navigationItems = [
    { label: "Accueil", href: "/" },
    { label: "Biens d'Exception", href: "#properties" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const languages = ["FR", "EN", "DE", "IT"];

  const handleLanguageChange = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLanguage = languages[nextIndex];
    setLanguage(newLanguage);
    toast({
      title: "Langue modifiée",
      description: `Interface changée en ${newLanguage}`,
      duration: 2000,
    });
  };

  const handleSearch = () => {
    toast({
      title: "Recherche avancée",
      description: "Fonctionnalité de recherche activée",
      duration: 2000,
    });
  };

  const handleClientSpace = () => {
    window.location.href = '/login';
  };

  const handleDiscover = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-foreground">
                Héritage & Domaines
              </h1>
              <p className="text-xs text-muted-foreground font-inter">
                L'excellence en héritage
              </p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground hover:text-primary transition-smooth font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={handleLanguageChange}
              >
                <Globe className="w-4 h-4" />
                {language}
              </Button>
            </div>

            {/* Search */}
            <Button variant="ghost" size="sm" onClick={handleSearch}>
              <Search className="w-4 h-4" />
            </Button>

            {/* Client Space */}
            <Button variant="outline" size="sm" className="gap-2" onClick={handleClientSpace}>
              <User className="w-4 h-4" />
              Espace Client
            </Button>

            <Button className="btn-luxury" onClick={handleDiscover}>
              Découvrir
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
            <nav className="flex flex-col space-y-4 pt-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium py-2 cursor-pointer"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="gap-2 justify-center" onClick={handleClientSpace}>
                <User className="w-4 h-4" />
                Espace Client
              </Button>
              <Button className="btn-luxury justify-center" onClick={handleDiscover}>
                Découvrir
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;