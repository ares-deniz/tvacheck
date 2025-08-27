import { useState, useEffect } from 'react';
import {
  Camera,
  Zap,
  Shield,
  Download,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Users,
  Star,
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  ScanEye,
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      id="home"
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <a href="#home">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  TvaCheck
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Caractéristiques
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Comment ça marche
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <a
                href="#download"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Télécharger
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800`}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              onClick={closeMobileMenu}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
            >
              Caractéristiques
            </a>
            <a
              href="#how-it-works"
              onClick={closeMobileMenu}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
            >
              Comment ça marche
            </a>
            <a
              href="#download"
              onClick={closeMobileMenu}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              Télécharger
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-gray-900 dark:to-zinc-700 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Reconnaissance instantanée du numéro de
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {' '}
                    TVA
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Chez TvaCheck, nous fournissons une application fiable pour
                  vérifier les numéros de TVA en Belgique, permettant aux
                  entreprises de vérifier rapidement tout problème lié à leur
                  enregistrement et conformité TVA.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Télécharger maintenant</span>
                  </button>
                </a>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <span>Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    1000+ utilisateurs
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    4.9
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    (200 ) avis
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-96">
                {/* Phone mockup */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                <div className="absolute inset-2 bg-black rounded-[2.5rem] flex flex-col">
                  {/* Screen */}
                  <div className="flex-1 bg-white dark:bg-gray-100 rounded-[2.2rem] m-2 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-semibold text-gray-900">
                        TvaCheck
                      </div>
                      <Camera className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="flex-1 bg-gray-100 dark:bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-xs text-gray-600">
                          Vérifications Fiables des Numéros de TVA
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                      <div className="text-sm font-semibold text-gray-900">
                        Vérification de TVA Instantanée
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>Entreprise: Nom de l'entreprise</div>
                        <div>TVA: BE0123456789</div>
                        <div>Status: Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-white bg-gradient-to-b dark:from-zinc-900 dark:via-black dark:to-zinc-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Vérifications Fiables des Numéros de TVA
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Notre mission est de simplifier la vérification de la TVA pour les
              entreprises en Belgique, en les aidant à maintenir leur conformité
              et à éviter les problèmes potentiels liés à leurs enregistrements
              TVA, grâce à notre application conviviale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Reconnaissance instantanée
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                La technologie OCR avancée reconnaît les numéros TVA des photos
                en quelques millisecondes.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Rapide comme l'éclair
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Obtenez instantanément des informations commerciales complètes,
                y compris les détails de l'entreprise, son statut et ses
                coordonnées.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sécurisé et privé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tous les traitements de données s'effectuent localement sur
                votre appareil. Votre confidentialité et votre sécurité sont nos
                priorités absolues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comment fonctionne TvaCheck
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trois étapes simples pour obtenir des informations complètes sur
              la TVA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Prendre une photo ou l'ajouter manuellement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pointez simplement votre appareil photo vers n’importe quel
                numéro de TVA sur des documents, des factures ou des cartes de
                visite.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Traitement instantané
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre technologie OCR basée sur l’IA reconnaît et valide
                instantanément le numéro de TVA.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                  <CheckCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Obtenez des résultats
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recevez des informations commerciales complètes, notamment le
                nom de l’entreprise, son adresse et son statut de vérification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center text-white">
            <div className="flex flex-col items-center mx-auto">
              <div className="text-4xl font-bold mb-2">
                Interface conviviale
              </div>
              <div className="text-blue-100 ">
                Naviguez facilement dans l’application pour vérifier les numéros
                de TVA sans complications ni confusion.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy and privacy */}
      <section
        id="download"
        className="py-20 bg-white bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4 justify-items-center text-center">
          <div className="max-w-3xl mx-auto bg-yellow-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Globe className="text-blue-500" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Politique de Confidentialité de TVA Check BE
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              Les informations de TVA Check BE proviennent directement de
              sources officielles, notamment le site de l'économie belge,
              data.be et checkobligationderetenue.be. Ces plateformes
              garantissent la fiabilité des données fournies sur les entreprises
              et les statuts de TVA. Cependant, TVA Check BE ne peut être tenu
              responsable des inexactitudes ou des mises à jour manquantes
              provenant de ces sources officielles. Notre objectif est de
              faciliter l'accès aux informations, mais nous conseillons vivement
              aux utilisateurs de consulter les sources officielles pour toute
              vérification approfondie.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-fuchsia-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <ScanEye className="text-violet-500 dark:text-fuchsia-500" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Permissions d’Accès à la Caméra
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              TVA Check BE requiert l'accès à la caméra de votre appareil pour
              permettre la capture et la lecture des numéros de TVA directement
              depuis des documents papier. Cette permission est strictement
              utilisée pour faciliter la numérisation et ne donne lieu à aucune
              collecte de données personnelles ou sensibles.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Shield className="text-green-500" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Protection des Données et Sécurité
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              TVA Check BE ne collecte, ne stocke ni ne partage aucune donnée
              personnelle. Toutes les informations traitées par l’application
              proviennent exclusivement des sites officiels mentionnés et sont
              affichées uniquement à titre d'information. Nous garantissons que
              l'application est sécurisée et respecte votre vie privée. Aucune
              donnée sensible n'est enregistrée ou transmise à des tiers. En
              utilisant TVA Check BE, vous reconnaissez que les informations
              fournies sont basées sur des sources publiques officielles et
              accessibles au grand public, telles que listées dans
              l’application.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prêt à transformer votre flux de travail TVA ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Rejoignez des milliers de professionnels qui font confiance à
            TvaCheck pour la reconnaissance instantanée de leur numéro de TVA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Télécharger gratuitement pour iOS</span>
            </button>
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Bientôt disponible pour Android</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Téléchargement gratuit • Fonctionnalités premium disponibles • Pas
            de publicité
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="download"
        className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TvaCheck</span>
              </div>
              <p className="text-gray-400">
                Vérification instantanée de la TVA pour les entreprises belges.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TvaCheck. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
