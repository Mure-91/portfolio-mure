import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Search, TrendingUp, Calendar, ShoppingBag, Users } from 'lucide-react';

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      // Blocca scroll su body e html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Ripristina scroll
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
      client: 'Polispecialistica Verona',
      industry: 'Healthcare',
      year: '2024',
      challenge: 'Il centro medico aveva un sito web obsoleto con un eccellente posizionamento SEO organico costruito negli anni. La sfida era modernizzare completamente il design e l\'esperienza utente senza perdere il ranking sui motori di ricerca, mantenendo tutte le keyword strategiche e migliorando le conversioni.',
      solution: 'Ho eseguito un redesign completo mantenendo la struttura URL esistente e implementando redirect 301 strategici. Ottimizzato il Core Web Vitals per migliorare sia l\'esperienza utente che il ranking SEO. Implementato un sistema di prenotazioni online integrato e migliorato la navigazione per facilitare la ricerca dei servizi medici.',
      results: [
        'Posizionamento SEO mantenuto al 100%',
        '+45% di conversioni prenotazioni online',
        '92/100 Google PageSpeed Score',
        '-65% bounce rate sulla home page'
      ],
      iframeUrl: 'https://polispecialisticoverona.it'
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
      client: 'Radici d\'Olivo',
      industry: 'Hospitality & Tourism',
      year: '2023',
      challenge: 'Il B&B dipendeva completamente da piattaforme di terze parti come Booking.com, pagando alte commissioni su ogni prenotazione. Mancava una presenza online professionale che trasmettesse il valore dell\'esperienza offerta e che permettesse prenotazioni dirette senza intermediari.',
      solution: 'Sviluppato da zero un sito WordPress con design elegante che riflette l\'identità del brand. Integrato un sistema di booking avanzato con calendario in tempo reale, pagamenti sicuri e conferme automatiche. Implementato SEO locale per posizionarsi su ricerche organiche. Creato contenuti fotografici professionali e ottimizzato per mobile.',
      results: [
        '+180% prenotazioni dirette nel primo anno',
        'Riduzione commissioni terze parti del 65%',
        'Posizionamento #1 per "B&B zona [località]"',
        '4.9/5 stelle media recensioni Google'
      ],
      iframeUrl: 'https://radicidolivo.com'
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
      client: '1944 Paris',
      industry: 'Beauty & Cosmetics',
      year: '2024',
      challenge: 'Brand francese di cosmetica professionale cruelty-free voleva espandere la distribuzione nel mercato italiano. Necessitavano di un e-commerce che riflettesse l\'eleganza e la qualità premium del brand, gestisse multilingua (IT/FR/EN), integrasse un programma fedeltà e ottimizzasse il percorso d\'acquisto per massimizzare le conversioni.',
      solution: 'Sviluppato e-commerce su Shopify con design custom che riflette l\'identità premium del brand. Implementato sistema multilingua con SEO ottimizzato per ogni lingua. Integrato programma fedeltà con punti e rewards. Ottimizzato checkout in un unico step per ridurre l\'abbandono carrello. Creato sistema di upsell e cross-sell intelligente basato su AI.',
      results: [
        '+250% conversioni vs benchmark settore',
        'Tasso abbandono carrello ridotto al 42%',
        'AOV (valore medio ordine) +85%',
        '12.000+ clienti fidelizzati in 6 mesi'
      ],
      iframeUrl: 'https://1944paris-italia.it'
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
      client: 'L\'Immobile Costruzioni',
      industry: 'Construction & Real Estate',
      year: '2023',
      challenge: 'Azienda edile con 20+ anni di esperienza ma presenza online obsoleta e poco efficace nella generazione di lead qualificati. Serviva un sito che trasmettesse autorevolezza, si posizionasse su keyword strategiche del settore edile e convertisse visitatori in richieste di preventivo qualificate.',
      solution: 'Creato sito WordPress corporate con architettura SEO ottimizzata per keyword ad alto valore commerciale. Implementato sistema di recensioni Google integrato per social proof. Sviluppata sezione blog per content marketing e authority building. Ottimizzati form di contatto con sistema di lead scoring. Creato portfolio progetti con case study dettagliati.',
      results: [
        '+320% traffico organico qualificato',
        'Posizionamento top 3 per 15+ keyword strategiche',
        '+180% richieste preventivo mensili',
        'Tasso conversione lead-to-client del 28%'
      ],
      iframeUrl: 'https://www.limmobilecostruzioni.it'
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
            Progetti che fanno la differenza
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto animate-fade-in-up mb-4"
            style={{ animationDelay: '0.2s' }}
          >
            Ogni progetto è un'opportunità per creare qualcosa di straordinario. Ecco alcuni dei lavori di cui vado più fiero.
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
              <div
                className="glass glass-hover rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
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
                      onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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

        {/* Modal Popup - React Portal */}
        {selectedProject && createPortal(
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            style={{
              animation: 'fadeIn 0.3s ease-out',
              overflow: 'hidden',
              zIndex: 9999,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <div
              className="bg-[#1e293b] rounded-2xl w-full shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'zoomIn 0.4s ease-out',
                maxWidth: '1150px',
                maxHeight: '90vh',
                position: 'relative',
                zIndex: 10000
              }}
            >
              {/* Close Button */}
              <div className="sticky top-0 z-10 flex justify-end p-2 md:p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#0f172a] hover:bg-[#334155] rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  <span className="text-white text-2xl">×</span>
                </button>
              </div>

              <div className="px-4 md:px-8 pb-4 md:pb-8">
                <div className="max-w-[1100px] mx-auto md:mx-0">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    {selectedProject.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6 text-gray-400 text-xs md:text-sm">
                    <span><strong className="text-gray-300">Cliente:</strong> {selectedProject.client}</span>
                    <span><strong className="text-gray-300">Industry:</strong> {selectedProject.industry}</span>
                    <span><strong className="text-gray-300">Anno:</strong> {selectedProject.year}</span>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Challenge</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Solution</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Results</h3>
                    <ul className="space-y-1 md:space-y-2">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                          <span className="text-green-400 mr-2 text-lg md:text-xl">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags?.map((tech, i) => (
                        <span key={i} className="bg-[#0f172a] text-gray-300 px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Preview Iframe */}
                  {selectedProject.iframeUrl && (
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Live Preview</h3>

                      {/* MacBook Frame */}
                      <div className="bg-[#0f172a] p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ maxWidth: '1100px' }}>
                        {/* Top bar MacBook style - NASCOSTO SU MOBILE */}
                        <div className="hidden md:flex bg-[#1a1a1a] rounded-t-lg px-4 py-2 items-center gap-2 mb-1">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="bg-[#2a2a2a] text-gray-400 text-xs px-4 py-1 rounded inline-block max-w-md truncate">
                              {selectedProject.iframeUrl}
                            </div>
                          </div>
                        </div>

                        {/* Iframe container - RESPONSIVE */}
                        <div className="bg-white rounded-lg md:rounded-b-lg overflow-hidden relative iframe-height-container" style={{
                          width: '100%',
                          paddingBottom: '168.75%'
                        }}>
                          <style>{`
                            @media (min-width: 768px) {
                              .iframe-height-container {
                                padding-bottom: 62.5% !important;
                              }
                              .iframe-height-container iframe {
                                width: 1440px !important;
                                height: 900px !important;
                                transform: scale(0.73) !important;
                                transform-origin: top left !important;
                              }
                            }
                            @media (max-width: 767px) {
                              .iframe-height-container {
                                padding-bottom: 168.75% !important;
                              }
                              .iframe-height-container iframe {
                                width: 375px !important;
                                height: 2000px !important;
                                transform: scale(0.85) !important;
                                transform-origin: top left !important;
                              }
                            }
                          `}</style>
                          <iframe
                            src={selectedProject.iframeUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                              width: '375px',
                              height: '2000px',
                              transform: 'scale(0.85)',
                              transformOrigin: 'top left',
                              border: 'none'
                            }}
                            title={selectedProject.title}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-center text-sm md:text-base"
                      >
                        Visita il sito
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-[#334155] hover:bg-[#475569] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
                    >
                      Chiudi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.getElementById('modal-root')
        )}
      </div>
    </section>
  );
}
