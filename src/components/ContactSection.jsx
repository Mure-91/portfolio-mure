import { useState } from 'react';
import { Mail, Phone, Send, Check, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // Simulate form submission (in production, replace with actual API call)
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus({ submitting: false, submitted: true, error: false });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus({ submitting: false, submitted: false, error: false });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-black"
    >
      {/* Trace dots appena percettibili */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-3"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Contattami
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            Hai un progetto in mente? Parliamone insieme!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Informazioni di Contatto</h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:luca.murelli.91@gmail.com"
                  className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="glass glass-hover rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      luca.murelli.91@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+393470669058"
                  className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="glass glass-hover rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Telefono</p>
                    <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                      +39 347 066 9058
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Disponibilità</h3>
              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Attualmente disponibile per nuovi progetti freelance. Rispondo solitamente entro 24 ore.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass glass-hover rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Invia un Messaggio</h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm sm:text-base font-medium">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Il tuo nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm sm:text-base font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="tua.email@esempio.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2 text-sm sm:text-base font-medium">
                  Oggetto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Di cosa vuoi parlare?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm sm:text-base font-medium">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Raccontami del tuo progetto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting || status.submitted}
                className="w-full glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center space-x-2">
                  {status.submitting && (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Invio in corso...</span>
                    </>
                  )}
                  {status.submitted && (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Messaggio inviato!</span>
                    </>
                  )}
                  {!status.submitting && !status.submitted && (
                    <>
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Invia Messaggio</span>
                    </>
                  )}
                </span>
              </button>

              {/* Success Message */}
              {status.submitted && (
                <div className="flex items-center space-x-2 text-green-400 text-sm bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                  <Check className="w-5 h-5" />
                  <span>Grazie per il tuo messaggio! Ti risponderò al più presto.</span>
                </div>
              )}

              {/* Error Message */}
              {status.error && (
                <div className="flex items-center space-x-2 text-red-400 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                  <span>Si è verificato un errore. Riprova o contattami direttamente via email.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
