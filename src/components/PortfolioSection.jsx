import { useEffect, useState } from 'react';
import { ExternalLink, Search, TrendingUp, Calendar, ShoppingBag, Building2, Users } from 'lucide-react';

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Polispecialistica Verona',
      url: 'polispecialisticoverona.it',
      link: 'https://polispecialisticoverona.it',
      description: 'Redesign completo del sito web mantenendo e migliorando l\'ottimo posizionamento SEO organico esistente.',
      tags: ['WordPress', 'SEO', 'Redesign'],
      icon: '🏥',
      image: '/polispecialistica.png',
      highlights: [
        { icon: Search, text: 'SEO organico mantenuto' },
        { icon: TrendingUp, text: 'UX migliorata' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Radici d\'Olivo',
      url: 'radicidolivo.com',
      link: 'https://radicidolivo.com',
      description: 'Sviluppo completo da zero con sistema di prenotazioni integrato. Incremento significativo delle prenotazioni dirette.',
      tags: ['WordPress', 'Booking System', 'E-commerce'],
      icon: '🌿',
      image: '/radicidolivo.png',
      highlights: [
        { icon: Calendar, text: 'Sistema prenotazioni' },
        { icon: TrendingUp, text: 'Conversioni aumentate' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: '1944 Paris Italia',
      url: '1944paris-italia.it',
      link: 'https://1944paris-italia.it/',
      description: 'E-commerce completo per il prestigioso brand francese di make-up e skincare professionale cruelty-free. Sviluppo su Shopify con design elegante e raffinato, integrazione sistema fedeltà, gestione multilingua e ottimizzazione del percorso d\'acquisto per massimizzare le conversioni.',
      tags: ['Shopify', 'E-commerce', 'Multilingua'],
      icon: '💄',
      image: '/1944paris.png',
      highlights: [
        { icon: ShoppingBag, text: 'E-commerce completo' },
        { icon: TrendingUp, text: 'CRO ottimizzato' },
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 4,
      title: 'L\'Immobile Costruzioni',
      url: 'limmobilecostruzioni.it',
      link: 'https://www.limmobilecostruzioni.it/',
      description: 'Sito corporate per azienda leader nelle costruzioni e ristrutturazioni con oltre 20 anni di esperienza. Ottimo posizionamento SEO organico su keyword strategiche del settore edile. Integrazione sistema recensioni Google, sezione blog per content marketing e struttura ottimizzata per la lead generation.',
      tags: ['WordPress', 'SEO', 'Lead Generation'],
      icon: '🏗️',
      image: '/limmobile.png',
      highlights: [
        { icon: Search, text: 'SEO keyword strategiche' },
        { icon: Users, text: 'Lead generation' },
      ],
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-800 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float-1"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-2"
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Progetti in Evidenza
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto animate-fade-in-up mb-4"
            style={{ animationDelay: '0.2s' }}
          >
            Alcuni dei progetti che ho realizzato con successo
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="glass glass-hover rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project Header with Background Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for better readability */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70`}></div>

                  {/* Content */}
                  <div className="relative h-full p-6 sm:p-8 flex items-start justify-between">
                    <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {project.icon}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover rounded-xl p-3 hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-white/10"
                      aria-label={`Visita ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors mb-4 text-sm sm:text-base flex items-center space-x-1"
                  >
                    <span>{project.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <p className="text-white/75 leading-relaxed mb-6 text-sm sm:text-base flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-white/80 text-sm"
                      >
                        <highlight.icon className="w-4 h-4 text-blue-400" />
                        <span>{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
