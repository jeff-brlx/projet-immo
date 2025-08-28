import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Crown, 
  Mail, 
  Lock, 
  User, 
  Phone,
  Eye,
  EyeOff,
  Shield,
  Star
} from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Connexion réussie",
      description: "Bienvenue dans votre espace client privé",
      duration: 3000,
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    toast({
      title: "Inscription réussie",
      description: "Votre compte a été créé avec succès",
      duration: 3000,
    });
  };

  const benefits = [
    "Accès prioritaire aux biens exclusifs",
    "Alertes personnalisées selon vos critères",
    "Conseiller dédié disponible 24/7",
    "Rapports de marché privilégiés",
    "Invitations aux événements privés",
    "Service de conciergerie premium"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Espace Client Privé
              </Badge>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Accès Exclusif à
                <span className="text-luxury"> l'Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connectez-vous à votre espace personnel pour accéder à nos services premium 
                et découvrir nos biens d'exception en avant-première.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Login/Register Forms */}
              <Card className="border-0 card-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 luxury-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-playfair">Espace Client</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="login">Connexion</TabsTrigger>
                      <TabsTrigger value="register">Inscription</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="login-email">Adresse email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="votre@email.com"
                              className="pl-10"
                              value={loginForm.email}
                              onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="login-password">Mot de passe</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="login-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="pl-10 pr-10"
                              value={loginForm.password}
                              onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <Link to="#" className="text-primary hover:underline">
                            Mot de passe oublié ?
                          </Link>
                        </div>
                        
                        <Button type="submit" className="w-full btn-luxury">
                          Se Connecter
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="register">
                      <form onSubmit={handleRegister} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input
                                id="firstName"
                                placeholder="Prénom"
                                className="pl-10"
                                value={registerForm.firstName}
                                onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                              <Input
                                id="lastName"
                                placeholder="Nom"
                                className="pl-10"
                                value={registerForm.lastName}
                                onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Adresse email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="register-email"
                              type="email"
                              placeholder="votre@email.com"
                              className="pl-10"
                              value={registerForm.email}
                              onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+33 1 23 45 67 89"
                              className="pl-10"
                              value={registerForm.phone}
                              onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Mot de passe</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="register-password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10"
                              value={registerForm.password}
                              onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="confirm-password"
                              type="password"
                              placeholder="••••••••"
                              className="pl-10"
                              value={registerForm.confirmPassword}
                              onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full btn-luxury">
                          Créer mon Compte
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="space-y-8">
                <Card className="border-0 card-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-playfair font-semibold">
                        Avantages Membres
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-primary fill-current flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 luxury-gradient text-accent">
                  <CardContent className="p-8 text-center">
                    <Crown className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      Service Premium 24/7
                    </h3>
                    <p className="text-accent/90 leading-relaxed">
                      Bénéficiez d'un accompagnement personnalisé avec votre conseiller dédié, 
                      disponible à tout moment pour répondre à vos besoins spécifiques.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;