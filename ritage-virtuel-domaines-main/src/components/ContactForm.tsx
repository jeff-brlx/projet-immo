import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageCircle
} from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message envoyé avec succès",
      description: "Nous vous recontacterons dans les plus brefs délais.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      propertyInterest: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 42 56 78 90",
      description: "Lun-Ven 9h-19h"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@heritage-domaines.fr",
      description: "Réponse sous 2h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Avenue des Champs-Élysées",
      description: "Paris 8ème, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven: 9h-19h",
      description: "Sam: 10h-16h"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Contact Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Parlons de Votre
            <br />
            <span className="text-luxury">Projet Immobilier</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans tous vos projets immobiliers d'exception.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                Nous Contacter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sujet *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Acquisition villa Côte d'Azur"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Property Interest */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bien d'intérêt (Référence)
                  </label>
                  <Input
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleInputChange}
                    placeholder="Ex: HD-001, Villa Moderne Californienne"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Décrivez-nous votre projet immobilier..."
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-luxury h-12 text-lg gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Informations de Contact
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="card-shadow border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h4>
                            <p className="text-foreground font-medium mb-1">
                              {info.value}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground mb-3">
                      Engagement Qualité
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Réponse garantie sous 2 heures</li>
                      <li>• Accompagnement personnalisé</li>
                      <li>• Confidentialité absolue</li>
                      <li>• Vision moderne du luxe</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;