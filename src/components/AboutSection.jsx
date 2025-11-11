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
    <section id="about" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>

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
                <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="/profile.png"
                  alt="Luca Murelli - Sviluppatore Web Freelance"
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 w-64 h-64 sm:w-80 sm:h-80 object-cover"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-4 text-white/75 leading-relaxed text-base sm:text-lg">
                <p>
                  Da anni aiuto imprenditori e brand a trasformare la loro visione in realtà digitali che funzionano davvero.
                </p>
                <p>
                  Non mi limito a creare siti belli: costruisco esperienze che convertono visitatori in clienti, ottimizzate per performance e pensate per crescere nel tempo.
                </p>
                <p>
                  Lavoro con tecnologie moderne come React, Next.js e Tailwind CSS per garantire siti veloci, scalabili e facili da gestire.
                </p>
              </div>

              {/* Key Skills Icons */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group">
                  <Search className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-semibold text-sm">SEO Tecnica</p>
                  <p className="text-white/60 text-xs mt-1">Ottimizzazione avanzata</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group">
                  <TrendingUp className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-semibold text-sm">CRO</p>
                  <p className="text-white/60 text-xs mt-1">Ottimizzazione conversioni</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group">
                  <Code2 className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-semibold text-sm">Sviluppo</p>
                  <p className="text-white/60 text-xs mt-1">WordPress & Shopify</p>
                </div>

                <div className="glass glass-hover rounded-xl p-4 border border-white/10 group">
                  <Server className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-semibold text-sm">Hosting</p>
                  <p className="text-white/60 text-xs mt-1">Gestione completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
