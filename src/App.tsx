/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  ChevronRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import KVKK from "./pages/KVKK";
import YasalUyari from "./pages/YasalUyari";
import CerezPolitikasi from "./pages/CerezPolitikasi";

const Logo = () => {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="relative z-10 w-full h-full flex items-center justify-center scale-110">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decisive Rising Monoliths */}
            <motion.path 
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              d="M6 34L16 30V10L6 14V34Z" 
              fill="currentColor" 
              className="text-primary opacity-40"
            />
            <motion.path 
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              d="M18 36L34 30V6L18 12V36Z" 
              fill="currentColor" 
              className="text-primary shadow-[0_0_20px_rgba(107,216,203,0.5)]"
            />
            {/* Accent Line */}
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              d="M16 10L18 12M16 30L18 36" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-2xl z-0"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white font-headline font-black text-2xl tracking-tighter uppercase leading-none">
          Vince <span className="text-primary">Capital</span>
        </span>
        <span className="text-[7px] uppercase tracking-[0.6em] text-outline font-bold mt-1.5 opacity-70 group-hover:text-primary transition-colors">
          {t('common.motto.sub')}
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { title: t('nav.home'), path: "/" },
    { title: t('nav.about'), path: "/#hakkımızda" },
    { title: t('nav.sectors'), path: "/#faaliyet-alanları" },
    { title: t('nav.companies'), path: "/#şirketlerimiz" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-surface/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo />

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            link.path.startsWith("/#") ? (
              <a 
                key={link.title} 
                href={link.path} 
                className="text-on-surface-variant font-medium text-sm hover:text-white transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ) : (
              <Link 
                key={link.title} 
                to={link.path} 
                className="text-on-surface-variant font-medium text-sm hover:text-white transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-surface-container-high/50 hover:bg-surface-container-highest px-3 py-2 rounded-xl border border-white/5 backdrop-blur-md text-xs font-black text-white transition-all shadow-lg active:scale-95">
              <span className="text-base leading-none">{lang === 'TR' ? '🇹🇷' : lang === 'EN' ? '🇬🇧' : lang === 'NL' ? '🇳🇱' : lang === 'ESP' ? '🇪🇸' : '🇩🇪'}</span>
              <span className="tracking-widest">{lang}</span>
              <ChevronDown className="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute right-0 mt-2 w-40 bg-surface-container-highest/95 border border-white/10 rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl translate-y-2 group-hover:translate-y-0">
              <div className="p-2 grid grid-cols-1 gap-1">
                {(['TR', 'EN', 'NL', 'DE', 'ESP'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${lang === l ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-white/5 hover:text-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg leading-none">{l === 'TR' ? '🇹🇷' : l === 'EN' ? '🇬🇧' : l === 'NL' ? '🇳🇱' : l === 'ESP' ? '🇪🇸' : '🇩🇪'}</span>
                      {l}
                    </div>
                    {lang === l && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className="text-on-surface-variant hover:text-white transition-colors hidden xl:block">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/iletisim" className="monolith-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-lg hidden sm:block">
            {t('nav.contact')}
          </Link>
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-surface border-b border-white/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              link.path.startsWith("/#") ? (
                <a 
                  key={link.title} 
                  href={link.path} 
                  className="text-on-surface-variant font-bold text-lg hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ) : (
                <Link 
                  key={link.title} 
                  to={link.path} 
                  className="text-on-surface-variant font-bold text-lg hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              )
            ))}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['TR', 'EN', 'NL', 'DE', 'ESP'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 min-w-[70px] py-3 rounded-xl border font-black text-[10px] transition-all ${lang === l ? 'bg-primary border-primary text-on-primary' : 'bg-surface-container border-white/5 text-on-surface-variant'}`}
                >
                  <span className="mr-2">{l === 'TR' ? '🇹🇷' : l === 'EN' ? '🇬🇧' : l === 'NL' ? '🇳🇱' : l === 'ESP' ? '🇪🇸' : '🇩🇪'}</span>
                  {l}
                </button>
              ))}
            </div>
            <Link to="/iletisim" className="monolith-gradient text-on-primary p-4 rounded-xl font-bold text-center">
              {t('nav.contact')}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-[#010915]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1">
            <div className="mb-8 scale-75 origin-left">
              <Logo />
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              {t('footer.desc')}
            </p>
          </div>

          {[
            { title: t('footer.links.quick'), links: [{n: t('nav.about'), p: "/#hakkımızda"}, {n: t('nav.sectors'), p: "/#faaliyet-alanları"}, {n: t('nav.companies'), p: "/#şirketlerimiz"}, {n: t('nav.contact'), p: "/iletisim"}] },
            { title: t('footer.links.expertise'), links: [{n: t('sectors.tech'), p: "#"}, {n: t('sectors.realestate'), p: "#"}, {n: t('sectors.finance'), p: "#"}, {n: t('sectors.tech'), p: "#"}] }
          ].map((col) => (
            <div key={col.title}>
              <h6 className="text-white font-bold font-headline uppercase text-xs tracking-widest mb-8">{col.title}</h6>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l.n}>
                    {l.p.startsWith("/#") ? (
                      <a href={l.p} className="text-on-surface-variant hover:text-primary text-sm transition-colors">{l.n}</a>
                    ) : (
                      <Link to={l.p} className="text-on-surface-variant hover:text-primary text-sm transition-colors">{l.n}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h6 className="text-white font-bold font-headline uppercase text-xs tracking-widest mb-8">{t('footer.newsletter')}</h6>
            <p className="text-on-surface-variant text-sm mb-6">{t('footer.newsletter.desc')}</p>
            <div className="flex bg-surface-container rounded-xl p-1.5 border border-white/5">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-transparent border-none text-white text-sm px-4 flex-grow focus:outline-none" 
              />
              <button className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            {[
              { n: t('footer.kvkk'), p: "/kvkk" },
              { n: t('footer.legal'), p: "/yasal-uyari" },
              { n: t('footer.cookies'), p: "/cerez-politikasi" }
            ].map(l => (
              <Link key={l.n} to={l.p} className="text-[10px] md:text-xs text-on-surface-variant hover:text-white transition-all uppercase tracking-tighter">
                {l.n}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-surface selection:bg-primary/30">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/kvkk" element={<KVKK />} />
              <Route path="/yasal-uyari" element={<YasalUyari />} />
              <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

