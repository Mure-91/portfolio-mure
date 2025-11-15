import { Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 sm:py-16 bg-black border-t"
      style={{
        borderColor: 'rgba(255, 255, 255, 0.03)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Luca Murelli<span className="text-blue-400">.</span>
            </h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Sviluppatore Web Freelance specializzato in siti web, e-commerce e soluzioni AI. Realizzo siti web professionali dal 2019
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {['Home', 'Chi Sono', 'Portfolio', 'Competenze'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href="mailto:luca.murelli.91@gmail.com"
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                <span>luca.murelli.91@gmail.com</span>
              </a>
              <a
                href="tel:+393470669058"
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>+39 347 066 9058</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {currentYear} Luca Murelli. Tutti i diritti riservati.
            </p>
            <p className="text-white/60 text-sm flex items-center space-x-1">
              <span>Realizzato con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>e React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
