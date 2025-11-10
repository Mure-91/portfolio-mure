import { ChevronDown, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-28 sm:pt-24 md:pt-0 pb-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-2"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-float-3"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Greeting with Profile Image */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="glass rounded-full p-1 mr-3 sm:mr-4 border border-white/10">
              <img
                src="/profile-hero.jpg"
                alt="Luca Murelli"
                className="rounded-full w-10 h-10 sm:w-[60px] sm:h-[60px] object-cover"
              />
            </div>
            <div className="glass rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10">
              <p className="text-sm sm:text-base text-white/75">
                Benvenuto nel mio <strong className="text-white">portfolio professionale</strong> 👋
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div className="relative mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Luca Murelli
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4">
              Sviluppatore Web Freelance
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Oltre 6 anni di esperienza nella realizzazione di siti web, landing page ed e-commerce ad alte prestazioni
            </p>

            {/* Floating icons */}
            <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-16 animate-float-1 transform rotate-12">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/10">
                <span className="text-2xl sm:text-3xl md:text-4xl">💻</span>
              </div>
            </div>

            <div className="absolute top-12 sm:top-16 -right-4 sm:-right-16 animate-float-2 transform -rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/10">
                <span className="text-2xl sm:text-3xl md:text-4xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🎯
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">6+ Anni</p>
                  <p className="text-white/60 text-xs sm:text-sm">di esperienza</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🛒
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">E-commerce</p>
                  <p className="text-white/60 text-xs sm:text-sm">& Landing Page</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  ⚡
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">AI-Assisted</p>
                  <p className="text-white/60 text-xs sm:text-sm">Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Contattami</span>
              </span>
            </button>

            <a
              href="tel:+393470669058"
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>+39 347 066 9058</span>
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
              aria-label="Scroll to about section"
            >
              <div className="glass glass-hover rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-white/10">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
