import { Crown, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Acquisition & Vente", href: "#" },
        { label: "Location Prestige", href: "#" },
        { label: "Conciergerie Privée", href: "#" },
        { label: "Fiscalité Patrimoniale", href: "#" },
        { label: "Conseil Juridique", href: "#" },
      ]
    },
    {
      title: "Biens",
      links: [
        { label: "Châteaux", href: "#" },
        { label: "Villas de Prestige", href: "#" },
        { label: "Appartements d'Exception", href: "#" },
        { label: "Domaines Viticoles", href: "#" },
        { label: "International", href: "#" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", href: "/about" },
        { label: "Notre Équipe", href: "#" },
        { label: "Carrières", href: "#" },
        { label: "Presse", href: "#" },
        { label: "Partenaires", href: "#" },
      ]
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions Légales", href: "/legal" },
        { label: "Politique de Confidentialité", href: "/legal" },
        { label: "CGU", href: "/legal" },
        { label: "RGPD", href: "/legal" },
        { label: "Cookies", href: "/legal" },
      ]
    }
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-accent-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Restez Informé des Opportunités Exceptionnelles
            </h3>
            <p className="text-xl text-accent-foreground/80 mb-8">
              Recevez en avant-première nos biens exclusifs et nos analyses de marché
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Votre adresse email"
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button className="luxury-gradient text-accent px-6 gap-2">
                S'abonner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-accent-foreground/60 mt-4">
              Pas de spam. Désinscription en un clic.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
                <Crown className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold">
                  Héritage & Domaines
                </h2>
                <p className="text-sm text-accent-foreground/80">
                  L'excellence en héritage
                </p>
              </div>
            </div>
            
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Nouvelle société spécialisée dans l'accompagnement d'une clientèle internationale exigeante 
              pour l'acquisition, la vente et la gestion de biens d'exception.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-accent-foreground/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>15 Place Vendôme, 75001 Paris</span>
              </div>
              <div className="flex items-center gap-3 text-accent-foreground/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>+33 1 42 60 30 30</span>
              </div>
              <div className="flex items-center gap-3 text-accent-foreground/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@heritage-domaines.fr</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="hover:bg-accent-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-accent-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-accent-foreground/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-playfair font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-accent-foreground/80 hover:text-accent-foreground transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Héritage & Domaines. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/legal" className="text-accent-foreground/60 hover:text-accent-foreground transition-smooth">
                Conditions d'utilisation
              </a>
              <a href="/legal" className="text-accent-foreground/60 hover:text-accent-foreground transition-smooth">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;