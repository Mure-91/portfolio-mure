import { useEffect, useState } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = {
    'CMS & Piattaforme': [
      { name: 'WordPress', level: 'Avanzato', icon: '🔷' },
      { name: 'Shopify', level: 'Avanzato', icon: '🛍️' },
      { name: 'WooCommerce', level: 'Avanzato', icon: '🛒' },
    ],
    'Visual Builder': [
      { name: 'Elementor', level: 'Esperto', icon: '🎨' },
      { name: 'Divi', level: 'Avanzato', icon: '🖌️' },
      { name: 'WPBakery', level: 'Intermedio', icon: '🏗️' },
    ],
    Specializzazioni: [
      { name: 'SEO Tecnica', level: 'Avanzato', icon: '🔍' },
      { name: 'CRO', level: 'Avanzato', icon: '📈' },
      { name: 'AI-Assisted Dev', level: 'Esperto', icon: '🤖' },
      { name: 'Hosting/Domini', level: 'Avanzato', icon: '🌐' },
    ],
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Competenze Tecniche
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
              Stack tecnologico moderno per progetti ad alte prestazioni
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div
                key={category}
                className={`glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 150}ms`,
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-3">
                  {category}
                </h3>

                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group hover:bg-white/5 rounded-xl p-3 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <span className="text-white font-semibold text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible
                              ? skill.level === 'Esperto'
                                ? '100%'
                                : skill.level === 'Avanzato'
                                ? '85%'
                                : '70%'
                              : '0%',
                            transitionDelay: `${categoryIndex * 150 + index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
