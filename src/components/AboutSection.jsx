import { useEffect, useState } from 'react';
import { Code2, Search, TrendingUp, Server } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-32 md:pb-24 relative"
      style={{
        background: 'linear-gradient(to bottom, #050810 0%, #030609 100%)'
      }}
    >
      {/* Dots ancora più sottili */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.025) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Ciao, sono Luca
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-8 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="/profile.png"
                  alt="Luca Murelli - Sviluppatore Web Freelance"
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 w-80 h-80 sm:w-[420px] sm:h-[420px] object-cover"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4 text-white/75 leading-relaxed md:leading-8 text-base sm:text-xl md:text-xl">
                <p>
                  Sono un web developer freelance che da 6 anni aiuta aziende, e-commerce e professionisti a costruire la loro presenza digitale.
                </p>
                <p>
                  Il mio approccio è semplice: capisco cosa ti serve, scelgo le tecnologie giuste e costruisco un sito che fa esattamente quello che deve fare. Senza fronzoli, senza perdite di tempo.
                </p>
                <p>
                  Lavoro principalmente con WordPress e Shopify, ma mi piace sperimentare anche con l'AI e altre tecnologie che possono rendere il tuo sito più performante e intelligente.
                </p>
                <p>
                  Che tu abbia già tutto chiaro o sia solo all'inizio, posso aiutarti a trasformare la tua idea in un sito web professionale che ti rappresenta davvero.
                </p>
              </div>

              {/* Key Skills Icons */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <Code2 className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white font-semibold text-sm">Sviluppo</p>
                  <p className="text-white/60 text-xs mt-1">WordPress & Shopify</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <Server className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white font-semibold text-sm">Hosting</p>
                  <p className="text-white/60 text-xs mt-1">Gestione completa</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <TrendingUp className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white font-semibold text-sm">CRO</p>
                  <p className="text-white/60 text-xs mt-1">Ottimizzazione conversioni</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    <Search className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white font-semibold text-sm">SEO Tecnica</p>
                  <p className="text-white/60 text-xs mt-1">Ottimizzazione avanzata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
