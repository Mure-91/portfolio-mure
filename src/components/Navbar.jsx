import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Chi Sono', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Competenze', href: '#skills' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 flex-shrink-0"
          >
            LM<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="hidden md:block glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Contattami
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass glass-hover rounded-lg p-2 text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/10 px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}

          {/* CTA Button - Mobile */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="block mt-4 glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 text-center"
          >
            Contattami
          </a>
        </div>
      </div>
    </nav>
  );
}
