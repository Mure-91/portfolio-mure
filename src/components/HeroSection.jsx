import { ChevronDown, Mail } from 'lucide-react';
import { DotShaderBackground } from './ui/DotShaderBackground';

export default function HeroSection() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-28 sm:pt-24 md:pt-20 pb-12 bg-[#0f172a]"
    >
      {/* DOT SHADER BACKGROUND con WebGL */}
      <div className="absolute inset-0">
        <DotShaderBackground />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-6 sm:pt-8">
        <div className="animate-fade-in-up">
          {/* Greeting with Profile Image */}
          <div className="flex flex-col items-center justify-center gap-4 mb-6 sm:mb-8">
            <div className="rounded-full p-1 border border-white/10">
              <img
                src="/profile-hero.jpg"
                alt="Luca Murelli"
                className="rounded-full w-20 h-20 sm:w-28 sm:h-28 object-cover"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/75 font-medium">
              Benvenuto nel mio <strong className="text-white">portfolio professionale</strong> 👋
            </p>
          </div>

          {/* Main heading */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              REALIZZO IL TUO SITO WEB. 
              professionale. veloce. efficace.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Sviluppatore web freelance con 6 anni di esperienza. 
              Specializzato in siti web, e-commerce e soluzioni AI. 
              Trasformo la tua idea nel sito web che desideri.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🎯
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">6 Anni</p>
                  <p className="text-white/60 text-xs sm:text-sm">di esperienza</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🚀
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">Siti Veloci</p>
                  <p className="text-white/60 text-xs sm:text-sm">Ottimizzati SEO</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-xl p-4 sm:p-6 border border-white/10 group sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  📱
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-sm sm:text-base">100% Responsive</p>
                  <p className="text-white/60 text-xs sm:text-sm">Mobile-First</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-[#60a5fa] hover:bg-[#3b82f6] border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Contattami</span>
              </span>
            </button>

            <button
              onClick={scrollToPortfolio}
              className="bg-[#60a5fa] hover:bg-[#3b82f6] border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>I miei lavori</span>
              </span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={scrollToPortfolio}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
              aria-label="Scroll to portfolio section"
            >
              <div className="glass glass-hover rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-white/10">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Fade overlay verso Portfolio */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: '250px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(7, 11, 20, 0.7) 50%, rgba(7, 11, 20, 0.95) 100%)'
        }}
      />
    </section>
  );
}
