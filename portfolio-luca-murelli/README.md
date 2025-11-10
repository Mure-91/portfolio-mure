# Portfolio Luca Murelli

Portfolio personale professionale di Luca Murelli, Sviluppatore Web Freelance.

## 🚀 Tecnologie Utilizzate

- **React** - Libreria JavaScript per UI
- **Vite** - Build tool e dev server ultra-veloce
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icone moderne e leggere

## ✨ Caratteristiche

- Design dark theme elegante e professionale
- Completamente responsive per tutti i dispositivi
- Animazioni fluide e moderne
- Effetti glass morphism
- Form di contatto funzionale
- Navigazione smooth scroll
- Performance ottimizzate

## 📋 Sezioni del Portfolio

1. **Hero** - Presentazione iniziale con CTA
2. **Chi Sono** - Biografia e competenze chiave
3. **Competenze Tecniche** - Stack tecnologico organizzato per categorie
4. **Esperienza** - Timeline professionale
5. **Portfolio** - Progetti in evidenza con dettagli
6. **Contatti** - Form di contatto e informazioni

## 🛠️ Installazione e Sviluppo

### Prerequisiti

- Node.js (versione 16 o superiore)
- npm o yarn

### Installazione

```bash
# Installa le dipendenze
npm install
```

### Avvio in modalità sviluppo

```bash
# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173/`

### Build per produzione

```bash
# Crea la build ottimizzata per produzione
npm run build
```

### Preview della build di produzione

```bash
# Visualizza la build di produzione in locale
npm run preview
```

## 📁 Struttura del Progetto

```
portfolio-luca-murelli/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Personalizzazione

### Colori

I colori principali sono definiti in `src/index.css` e `tailwind.config.js`. Puoi modificare la palette colori secondo le tue preferenze.

### Contenuti

I contenuti del portfolio (testi, progetti, esperienze) sono hardcoded nei componenti. Per modificarli:

- **Progetti**: `src/components/PortfolioSection.jsx`
- **Esperienza**: `src/components/ExperienceSection.jsx`
- **Competenze**: `src/components/SkillsSection.jsx`
- **Informazioni personali**: Vari componenti

### Form di Contatto

Il form attualmente simula l'invio. Per integrarlo con un backend:

1. Modifica `src/components/ContactSection.jsx`
2. Sostituisci il `setTimeout` con una chiamata API reale
3. Configura il tuo endpoint backend (es. EmailJS, Formspree, o API custom)

## 📱 Responsive Design

Il portfolio è completamente responsive e ottimizzato per:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deploy

Il portfolio può essere facilmente deployato su:

- **Vercel** (consigliato per progetti Vite/React)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Deploy su Vercel

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 Licenza

© 2025 Luca Murelli. Tutti i diritti riservati.

## 📞 Contatti

- Email: luca.murelli.91@gmail.com
- Telefono: +39 347 066 9058
