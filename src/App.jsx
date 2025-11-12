import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, #0f172a 0%, #0a0f1a 30%, #050810 60%, #000000 100%)'
        }}
      >
        <Navbar />
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
