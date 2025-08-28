import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, Eye, Cookie, Scale } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Informations Légales
              </Badge>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Transparence et
                <span className="text-luxury"> Conformité</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Toutes les informations légales concernant Héritage & Domaines 
                et l'utilisation de nos services.
              </p>
            </div>

            <Tabs defaultValue="mentions" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="mentions">Mentions</TabsTrigger>
                <TabsTrigger value="cgu">CGU</TabsTrigger>
                <TabsTrigger value="confidentialite">Confidentialité</TabsTrigger>
                <TabsTrigger value="cookies">Cookies</TabsTrigger>
                <TabsTrigger value="rgpd">RGPD</TabsTrigger>
              </TabsList>

              <TabsContent value="mentions">
                <Card className="border-0 card-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Scale className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl font-playfair">Mentions Légales</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <h3>Éditeur du Site</h3>
                    <p>
                      <strong>Héritage & Domaines SAS</strong><br />
                      Capital social : 100 000 €<br />
                      SIRET : 123 456 789 00012<br />
                      RCS Paris : 123 456 789<br />
                      TVA Intracommunautaire : FR12 123456789
                    </p>

                    <h3>Siège Social</h3>
                    <p>
                      15 Place Vendôme<br />
                      75001 Paris, France<br />
                      Téléphone : +33 1 42 60 30 30<br />
                      Email : contact@heritage-domaines.fr
                    </p>

                    <h3>Directeur de Publication</h3>
                    <p>Alexandre Dubois, Président</p>

                    <h3>Hébergement</h3>
                    <p>
                      Site hébergé par Lovable<br />
                      Conformément aux articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                      pour la Confiance dans l'économie numérique.
                    </p>

                    <h3>Propriété Intellectuelle</h3>
                    <p>
                      L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) 
                      est protégé par le droit d'auteur. Toute reproduction, même partielle, 
                      est interdite sans autorisation préalable.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cgu">
                <Card className="border-0 card-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl font-playfair">Conditions Générales d'Utilisation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <h3>1. Objet</h3>
                    <p>
                      Les présentes conditions générales ont pour objet de définir les modalités 
                      et conditions d'utilisation des services proposés sur le site heritage-domaines.fr.
                    </p>

                    <h3>2. Acceptation des Conditions</h3>
                    <p>
                      L'utilisation du site implique l'acceptation pleine et entière des conditions 
                      générales d'utilisation décrites ci-après. Ces conditions sont susceptibles 
                      d'être modifiées sans préavis.
                    </p>

                    <h3>3. Services Proposés</h3>
                    <p>
                      Héritage & Domaines propose des services d'accompagnement pour l'acquisition, 
                      la vente et la gestion de biens immobiliers d'exception.
                    </p>

                    <h3>4. Responsabilité</h3>
                    <p>
                      Les informations diffusées sur le site sont données à titre indicatif. 
                      Héritage & Domaines ne saurait être tenue responsable des erreurs, 
                      d'une absence de disponibilité des informations et/ou de la présence de virus.
                    </p>

                    <h3>5. Données Personnelles</h3>
                    <p>
                      Les données personnelles recueillies font l'objet d'un traitement informatique 
                      destiné à améliorer nos services. Conformément au RGPD, vous disposez d'un droit 
                      d'accès, de rectification et de suppression de vos données.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="confidentialite">
                <Card className="border-0 card-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl font-playfair">Politique de Confidentialité</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <h3>Collecte des Données</h3>
                    <p>
                      Nous collectons uniquement les données nécessaires à la fourniture de nos services :
                    </p>
                    <ul>
                      <li>Données d'identification (nom, prénom, email)</li>
                      <li>Données de contact (téléphone, adresse)</li>
                      <li>Préférences et critères de recherche</li>
                      <li>Données de navigation (cookies techniques)</li>
                    </ul>

                    <h3>Utilisation des Données</h3>
                    <p>Vos données sont utilisées pour :</p>
                    <ul>
                      <li>Vous proposer des biens correspondant à vos critères</li>
                      <li>Vous contacter concernant nos services</li>
                      <li>Améliorer notre site et nos services</li>
                      <li>Respecter nos obligations légales</li>
                    </ul>

                    <h3>Partage des Données</h3>
                    <p>
                      Nous ne vendons, ne louons ni ne partageons vos données avec des tiers, 
                      sauf dans les cas suivants :
                    </p>
                    <ul>
                      <li>Avec votre consentement explicite</li>
                      <li>Pour répondre à une obligation légale</li>
                      <li>Avec nos partenaires de confiance (sous contrat de confidentialité)</li>
                    </ul>

                    <h3>Sécurité</h3>
                    <p>
                      Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                      appropriées pour protéger vos données contre tout accès non autorisé, 
                      modification, divulgation ou destruction.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cookies">
                <Card className="border-0 card-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Cookie className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl font-playfair">Politique des Cookies</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <h3>Qu'est-ce qu'un Cookie ?</h3>
                    <p>
                      Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la 
                      visite d'un site internet. Il permet de reconnaître votre navigateur et 
                      d'améliorer votre expérience de navigation.
                    </p>

                    <h3>Types de Cookies Utilisés</h3>
                    
                    <h4>Cookies Techniques (Obligatoires)</h4>
                    <p>
                      Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas 
                      être désactivés. Ils permettent notamment la navigation et l'utilisation 
                      des fonctionnalités de base.
                    </p>

                    <h4>Cookies de Performance (Optionnels)</h4>
                    <p>
                      Ces cookies nous aident à comprendre comment les visiteurs utilisent le site 
                      en collectant des informations de manière anonyme. Ils nous permettent 
                      d'améliorer les performances du site.
                    </p>

                    <h4>Cookies de Personnalisation (Optionnels)</h4>
                    <p>
                      Ces cookies permettent au site de retenir vos préférences (langue, région, etc.) 
                      pour vous offrir une expérience plus personnalisée.
                    </p>

                    <h3>Gestion des Cookies</h3>
                    <p>
                      Vous pouvez à tout moment modifier vos préférences de cookies via les paramètres 
                      de votre navigateur ou en utilisant notre outil de gestion des cookies.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rgpd">
                <Card className="border-0 card-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Eye className="w-6 h-6 text-primary" />
                      <CardTitle className="text-2xl font-playfair">Conformité RGPD</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <h3>Vos Droits</h3>
                    <p>
                      Conformément au Règlement Général sur la Protection des Données (RGPD), 
                      vous disposez des droits suivants :
                    </p>

                    <h4>Droit d'Accès</h4>
                    <p>
                      Vous pouvez demander l'accès aux données personnelles que nous détenons à votre sujet.
                    </p>

                    <h4>Droit de Rectification</h4>
                    <p>
                      Vous pouvez demander la correction de données personnelles inexactes ou incomplètes.
                    </p>

                    <h4>Droit à l'Effacement</h4>
                    <p>
                      Vous pouvez demander la suppression de vos données personnelles dans certaines conditions.
                    </p>

                    <h4>Droit à la Portabilité</h4>
                    <p>
                      Vous pouvez demander à recevoir vos données dans un format structuré et lisible.
                    </p>

                    <h4>Droit d'Opposition</h4>
                    <p>
                      Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.
                    </p>

                    <h3>Exercer vos Droits</h3>
                    <p>
                      Pour exercer vos droits, contactez-nous à l'adresse : <br />
                      <strong>rgpd@heritage-domaines.fr</strong>
                    </p>
                    <p>
                      Nous nous engageons à répondre à votre demande dans un délai maximum de 30 jours.
                    </p>

                    <h3>Délégué à la Protection des Données</h3>
                    <p>
                      Pour toute question relative à la protection de vos données personnelles, 
                      vous pouvez contacter notre Délégué à la Protection des Données à l'adresse : 
                      <strong>dpo@heritage-domaines.fr</strong>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;