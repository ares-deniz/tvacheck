import { useState, useEffect } from 'react';
import {
  Camera,
  Zap,
  Shield,
  Download,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Star,
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  ScanEye,
} from 'lucide-react';
import introApp from './assets/intro-app.png';
import scanApp from './assets/scan-app.png';
import fr from '../translation/fr.json';
import nl from '../translation/nl.json';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'fr' | 'nl'>('fr');
  const t = lang === 'fr' ? fr : nl;

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

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fr' ? 'nl' : 'fr'));
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
                  {t.appName}
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t.nav.features}
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t.nav.howItWorks}
              </a>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                aria-label="Toggle language"
                title={t.lang.toggle}
              >
                <Globe className="w-5 h-5" />
                <span className="ml-2 hidden lg:inline">{t.lang.current}</span>
              </button>
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
                {t.nav.download}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                aria-label="Toggle language"
                title={t.lang.toggle}
              >
                <Globe className="w-5 h-5" />
                <span className="ml-2 hidden lg:inline">{t.lang.current}</span>
              </button>
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
              {t.nav.features}
            </a>
            <a
              href="#how-it-works"
              onClick={closeMobileMenu}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#download"
              onClick={closeMobileMenu}
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-center font-semibold"
            >
              {t.nav.download}
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
                  {t.hero.titlePrefix}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {' '}
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>{t.hero.downloadNow}</span>
                  </button>
                </a>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <span>{t.hero.demo}</span>
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
                    {t.hero.users}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.hero.rating}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {t.hero.reviews}
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
                          {t.phone.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                      <div className="text-sm font-semibold text-gray-900">
                        {t.phone.instant}
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>{t.phone.sampleCompany}</div>
                        <div>{t.phone.sampleVat}</div>
                        <div>{t.phone.sampleStatus}</div>
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
              {t.features.heading}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.features.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.features.items.recognitionTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.items.recognitionDesc}
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.features.items.fastTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.items.fastDesc}
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t.features.items.secureTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.features.items.secureDesc}
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
              {t.how.heading}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.how.desc}
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
                {t.how.step1Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.how.step1Desc}
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
                {t.how.step2Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.how.step2Desc}
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
                {t.how.step3Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.how.step3Desc}
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
              <div className="text-4xl font-bold mb-2">{t.interface.title}</div>
              <div className="text-blue-100 ">{t.interface.desc}</div>
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
              {t.policy.privacyTitle}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {t.policy.privacyDesc}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-fuchsia-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <ScanEye className="text-violet-500 dark:text-fuchsia-500" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.policy.cameraTitle}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {t.policy.cameraDesc}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Shield className="text-green-500" />
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.policy.securityTitle}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {t.policy.securityDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-xl -space-y-10 md:space-y-0 mx-auto mb-12 grid grid-cols-1 md:flex justify-center items-center">
          <img src={introApp} alt="logo" sizes="xl" />

          <div className="mx-auto absolute w-32 h-32 bg-fuchsia-400 rounded-full opacity-10 animate-pulse delay-1000 hidden md:flex"></div>

          <img src={scanApp} alt="logo" sizes="xl" className="mt-20 md:mt-0" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.cta.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>{t.cta.ios}</span>
            </button>
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>{t.cta.android}</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.cta.footNote}
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
              <p className="text-gray-400">{t.footer.tagline}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TvaCheck. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
