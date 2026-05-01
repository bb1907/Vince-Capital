/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'TR' | 'EN' | 'NL' | 'DE' | 'ESP';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  TR: {
    // Nav
    'nav.home': 'Anasayfa',
    'nav.about': 'Hakkımızda',
    'nav.sectors': 'Faaliyet Alanları',
    'nav.companies': 'Şirketlerimiz',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.motto': 'Yarının Standartlarını Bugün İnşa Ediyoruz',
    'hero.title.part1': 'Geleceği',
    'hero.title.part2': 'İnşa Eden',
    'hero.title.part3': 'Güç.',
    'hero.desc': "Vince Capital, teknoloji, yatırım, gayrimenkul ve yapay zeka'nın kesişim noktasında, yarının dünyasını şekillendiren sarsılmaz bir vizyonla küresel yatırımları yönetiyor.",
    'hero.cta.vision': 'Vizyonumuzu Keşfedin',
    'hero.cta.invest': 'Yatırım Alanlarımız',
    
    // About
    'about.title.part1': 'Kurumsal',
    'about.title.part2': 'Miras',
    'about.desc': 'Çeyrek asrı aşkın süredir, Vince Capital olarak inovasyonu gelenekle harmanlayarak global bir etki yaratıyoruz. Sadece şirketleri değil, toplumsal dönüşümü de finanse ediyor; teknoloji, gayrimenkul ve finans alanlarında standartları yeniden tanımlıyoruz.',
    'about.stats.years': 'Yıllık Tecrübe',
    'about.stats.companies': 'Global Şirket',
    
    // Vision/Mission
    'vision.title': 'Vizyonumuz',
    'vision.desc': 'Dijitalleşen dünyada, sürdürülebilir ve teknoloji odaklı yatırımlarımızla global bir "Dijital Monolit" olarak sektörlerin evrimine öncülük etmek ve gelecek nesillere daha yaşanabilir bir dünya bırakmak.',
    'mission.title': 'Misyonumuz',
    'mission.desc': 'Güçlü sermaye yapımız ve inovatif bakış açımızla, paydaşlarımıza en yüksek değeri sağlayan projeler üretmek.',
    
    // Sectors
    'sectors.title.part1': 'Faaliyet',
    'sectors.title.part2': 'Alanları',
    'sectors.tech': 'Teknoloji',
    'sectors.tech.desc': 'Yapay zeka, blockchain ve sürdürülebilir enerji çözümleri.',
    'sectors.invest': 'Yatırım',
    'sectors.invest.desc': 'Girişim sermayesi ve global piyasa portföy yönetimi.',
    'sectors.realestate': 'Gayrimenkul',
    'sectors.realestate.desc': 'İkonik mimari yapılar ve sürdürülebilir yaşam alanları.',
    'sectors.finance': 'Finans',
    'sectors.finance.desc': 'Bankacılık, sigorta ve kurumsal finansal danışmanlık.',

    // Why Us
    'why.title.part1': 'Neden',
    'why.title.part2': 'Vince Capital?',
    'why.desc': 'Güçlü finansal temelimiz, global ağımız ve ödün vermediğimiz etik değerlerimizle, iş ortaklarımıza sadece büyüme değil, sürdürülebilir bir gelecek vaat ediyoruz.',
    'why.strat.tag': 'Strateji',
    'why.strat.title': 'Sarsılmaz Güven',
    'why.strat.desc': 'Şeffaf yönetim ilkelerimizle tüm paydaşlarımız için güvenli bir liman inşa ediyoruz.',
    'why.tech.tag': 'Teknoloji',
    'why.tech.title': 'İnovasyon',
    'why.tech.desc': 'En yeni teknolojileri operasyonlarımızın kalbine entegre ederek verimliliği maksimize ediyoruz.',
    'why.global.tag': 'Global',
    'why.global.title': 'Global Etki',
    'why.global.desc': 'Dünya çapındaki ağımız sayesinde kıtalar arası stratejik köprüler kuruyoruz.',
    'why.team.tag': 'Ekip',
    'why.team.title': 'Uzman Kadro',
    'why.team.desc': 'Alanında uzman vizyoner profesyonellerimizle en karmaşık süreçleri yönetiyoruz.',
    
    // Partners
    'partners.title': 'Stratejik Küresel Ortaklarımız',
    
    // Contact Page
    'contact.title.part1': 'Bize',
    'contact.title.part2': 'Ulaşın',
    'contact.desc': 'Yeni projeler, yatırım fırsatları veya genel sorularınız için ekibimiz sizinle iletişime geçmeye hazır.',
    'contact.hq': 'Genel Merkez',
    'contact.email': 'E-Posta',
    'contact.phone': 'Telefon',
    'contact.form.name': 'Ad Soyad',
    'contact.form.name.placeholder': 'Adınız',
    'contact.form.email': 'E-Posta',
    'contact.form.email.placeholder': 'E-posta adresiniz',
    'contact.form.subject': 'Konu',
    'contact.form.subject.opt1': 'Yatırım Hakkında',
    'contact.form.subject.opt2': 'İş Birliği Teklifi',
    'contact.form.subject.opt3': 'Medya İletişimi',
    'contact.form.subject.opt4': 'Diğer',
    'contact.form.message': 'Mesajınız',
    'contact.form.message.placeholder': 'Size nasıl yardımcı olabiliriz?',
    'contact.form.submit': 'Gönder',
    
    // Footer
    'footer.desc': 'Global pazarlarda inovasyon ve güvenin sembolü. Geleceği birlikte şekillendirelim.',
    'footer.links.quick': 'Hızlı Erişim',
    'footer.links.expertise': 'Uzmanlık',
    'footer.newsletter': 'Bülten Aboneliği',
    'footer.newsletter.desc': 'Yatırım raporlarımızdan haberdar olun.',
    'footer.newsletter.placeholder': 'E-posta',
    'footer.rights': 'Vince Capital. The Digital Monolith. vince.capital',
    'footer.kvkk': 'KVKK',
    'footer.legal': 'Yasal Uyarı',
    'footer.cookies': 'Çerez Politikası',
    'common.explore': 'Keşfet',
    'common.motto.sub': 'Yarının Dünyasını İnşa Ediyoruz'
  },
  EN: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.sectors': 'Sectors',
    'nav.companies': 'Companies',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.motto': "Building Tomorrow's Standards Today",
    'hero.title.part1': 'The Power',
    'hero.title.part2': 'Architecting',
    'hero.title.part3': 'Future.',
    'hero.desc': 'Vince Capital manages global investments with an unwavering vision that shapes tomorrow\'s world at the intersection of technology, investment, real estate and artificial intelligence.',
    'hero.cta.vision': 'Explore Our Vision',
    'hero.cta.invest': 'Investment Areas',
    
    // About
    'about.title.part1': 'Corporate',
    'about.title.part2': 'Heritage',
    'about.desc': 'For over a quarter century, as Vince Capital, we have been creating a global impact by blending innovation with tradition. We not only finance companies but also social transformation; we redefine standards in technology, real estate and finance.',
    'about.stats.years': 'Years Experience',
    'about.stats.companies': 'Global Companies',
    
    // Vision/Mission
    'vision.title': 'Our Vision',
    'vision.desc': 'To lead the evolution of sectors as a global "Digital Monolith" with our sustainable and technology-oriented investments in a digitalizing world and to leave a more livable world for future generations.',
    'mission.title': 'Our Mission',
    'mission.desc': 'To produce projects that provide the highest value to our stakeholders with our strong capital structure and innovative perspective.',
    
    // Sectors
    'sectors.title.part1': 'Activity',
    'sectors.title.part2': 'Sectors',
    'sectors.tech': 'Technology',
    'sectors.tech.desc': 'Artificial intelligence, blockchain and sustainable energy solutions.',
    'sectors.invest': 'Investment',
    'sectors.invest.desc': 'Venture capital and global market portfolio management.',
    'sectors.realestate': 'Real Estate',
    'sectors.realestate.desc': 'Iconic architectural structures and sustainable living spaces.',
    'sectors.finance': 'Finance',
    'sectors.finance.desc': 'Banking, insurance and corporate financial consultancy.',

    // Why Us
    'why.title.part1': 'Why',
    'why.title.part2': 'Vince Capital?',
    'why.desc': 'With our strong financial foundation, our global network and our uncompromising ethical values, we promise our business partners not only growth but also a sustainable future.',
    'why.strat.tag': 'Strategy',
    'why.strat.title': 'Unwavering Trust',
    'why.strat.desc': 'We build a safe harbor for all our stakeholders with our transparent management principles.',
    'why.tech.tag': 'Technology',
    'why.tech.title': 'Innovation Focus',
    'why.tech.desc': 'We maximize efficiency by integrating the latest technologies into the heart of our operations.',
    'why.global.tag': 'Global',
    'why.global.title': 'International Impact',
    'why.global.desc': 'Thanks to our worldwide network, we establish strategic bridges between continents.',
    'why.team.tag': 'Team',
    'why.team.title': 'Expert Staff',
    'why.team.desc': 'We manage the most complex processes with our expert visionary professionals.',
    
    // Partners
    'partners.title': 'Our Strategic Global Partners',
    
    // Contact Page
    'contact.title.part1': 'Get in',
    'contact.title.part2': 'Touch',
    'contact.desc': 'Our team is ready to get in touch with you for new projects, investment opportunities or general questions.',
    'contact.hq': 'Headquarters',
    'contact.email': 'E-Mail',
    'contact.phone': 'Phone',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Your Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'Your email address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.opt1': 'About Investment',
    'contact.form.subject.opt2': 'Collaboration Proposal',
    'contact.form.subject.opt3': 'Media Relations',
    'contact.form.subject.opt4': 'Other',
    'contact.form.message': 'Your Message',
    'contact.form.message.placeholder': 'How can we help you?',
    'contact.form.submit': 'Send',
    
    // Footer
    'footer.desc': 'The symbol of innovation and trust in global markets. Let\'s shape the future together.',
    'footer.links.quick': 'Quick Access',
    'footer.links.expertise': 'Expertise',
    'footer.newsletter': 'Newsletter Subscription',
    'footer.newsletter.desc': 'Be informed about our investment reports.',
    'footer.newsletter.placeholder': 'Email',
    'footer.rights': 'Vince Capital. The Digital Monolith. vince.capital',
    'footer.kvkk': 'KVKK',
    'footer.legal': 'Legal Notice',
    'footer.cookies': 'Cookie Policy',
    'common.explore': 'Explore',
    'common.motto.sub': 'Architecting the Future'
  },
  NL: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'Over Ons',
    'nav.sectors': 'Sectoren',
    'nav.companies': 'Bedrijven',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.motto': 'De Standaarden van Morgen Vandaag Bouwen',
    'hero.title.part1': 'De Kracht',
    'hero.title.part2': 'die de Toekomst',
    'hero.title.part3': 'Architecteert.',
    'hero.desc': 'Vince Capital beheert wereldwijde investeringen met een onwrikbare visie die de wereld van morgen vormgeeft op het snijvlak van technologie, investeringen, vastgoed en kunstmatige intelligentie.',
    'hero.cta.vision': 'Ontdek Onze Visie',
    'hero.cta.invest': 'Investeringsgebieden',
    
    // About
    'about.title.part1': 'Zakelijk',
    'about.title.part2': 'Erfgoed',
    'about.desc': 'Al meer dan een kwart eeuw creëren wij als Vince Capital een mondiale impact door innovatie te combineren met traditie. We financieren niet alleen bedrijven, maar ook maatschappelijke transformatie; we herdefiniëren standaarden in technologie, vastgoed en financiën.',
    'about.stats.years': 'Jaar Ervaring',
    'about.stats.companies': 'Wereldwijde Bedrijven',
    
    // Vision/Mission
    'vision.title': 'Onze Visie',
    'vision.desc': 'Om de evolutie van sectoren te leiden als een wereldwijde "Digitale Monoliet" met onze duurzame en technologiegerichte investeringen in een digitaliserende wereld en om een leefbaardere wereld na te laten voor toekomstige generaties.',
    'mission.title': 'Onze Missie',
    'mission.desc': 'Projecten produceren die de hoogste waarde bieden aan onze belanghebbenden met onze sterke kapitaalstructuur en innovatieve perspectief.',
    
    // Sectors
    'sectors.title.part1': 'Activiteiten',
    'sectors.title.part2': 'Gebieden',
    'sectors.tech': 'Technologie',
    'sectors.tech.desc': 'Kunstmatige intelligentie, blockchain en duurzame energieoplossingen.',
    'sectors.invest': 'Investering',
    'sectors.invest.desc': 'Durfkapitaal en portefeuillebeheer voor de wereldwijde markt.',
    'sectors.realestate': 'Vastgoed',
    'sectors.realestate.desc': 'Iconische architectonische structuren en duurzame leefruimtes.',
    'sectors.finance': 'Financiën',
    'sectors.finance.desc': 'Bankieren, verzekeringen en zakelijk financieel advies.',

    // Why Us
    'why.title.part1': 'Waarom',
    'why.title.part2': 'Vince Capital?',
    'why.desc': 'Met onze sterke financiële basis, ons wereldwijde netwerk en onze compromisloze ethische waarden beloven we onze zakenpartners niet alleen groei, maar ook een duurzame toekomst.',
    'why.strat.tag': 'Strategie',
    'why.strat.title': 'Onwrikbaar Vertrouwen',
    'why.strat.desc': 'We bouwen een veilige haven voor al onze belanghebbenden met onze transparante managementprincipes.',
    'why.tech.tag': 'Technologie',
    'why.tech.title': 'Innovatiefocus',
    'why.tech.desc': 'We maximaliseren de efficiëntie door de nieuwste technologieën te integreren in het hart van onze activiteiten.',
    'why.global.tag': 'Mondiaal',
    'why.global.title': 'Internationale Impact',
    'why.global.desc': 'Dankzij ons wereldwijde netwerk slaan we strategische bruggen tussen continenten.',
    'why.team.tag': 'Team',
    'why.team.title': 'Vakkundig Personeel',
    'why.team.desc': 'We beheren de meest complexe processen met onze deskundige visionaire professionals.',
    
    // Partners
    'partners.title': 'Onze Strategische Wereldwijde Partners',
    
    // Contact Page
    'contact.title.part1': 'Neem',
    'contact.title.part2': 'Contact Op',
    'contact.desc': 'Ons team staat klaar om contact met u op te nemen voor nieuwe projecten, investeringsmogelijkheden of algemene vragen.',
    'contact.hq': 'Hoofdkwartier',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefoon',
    'contact.form.name': 'Volledige Naam',
    'contact.form.name.placeholder': 'Uw Naam',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'Uw e-mailadres',
    'contact.form.subject': 'Onderwerp',
    'contact.form.subject.opt1': 'Over Investeren',
    'contact.form.subject.opt2': 'Samenwerkingsvoorstel',
    'contact.form.subject.opt3': 'Mediarelaties',
    'contact.form.subject.opt4': 'Anders',
    'contact.form.message': 'Uw Bericht',
    'contact.form.message.placeholder': 'Hoe kunnen we u helpen?',
    'contact.form.submit': 'Versturen',
    
    // Footer
    'footer.desc': 'Het symbool van innovatie en vertrouwen in wereldwijde markten. Laten we samen de toekomst vormgeven.',
    'footer.links.quick': 'Snelle Toegang',
    'footer.links.expertise': 'Expertise',
    'footer.newsletter': 'Nieuwsbrief Abonnement',
    'footer.newsletter.desc': 'Blijf op de hoogte van onze investeringsrapporten.',
    'footer.newsletter.placeholder': 'E-mail',
    'footer.rights': 'Vince Capital. De Digitale Monoliet. vince.capital',
    'footer.kvkk': 'KVKK',
    'footer.legal': 'Juridische Kennisgeving',
    'footer.cookies': 'Cookiebeleid',
    'common.explore': 'Ontdek',
    'common.motto.sub': 'Architecten van de Toekomst'
  },
  DE: {
    // Nav
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.sectors': 'Sektoren',
    'nav.companies': 'Unternehmen',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.motto': 'Die Standards von Morgen Heute Bauen',
    'hero.title.part1': 'Die Kraft',
    'hero.title.part2': 'die die Zukunft',
    'hero.title.part3': 'Gestaltet.',
    'hero.desc': 'Vince Capital verwaltet globale Investitionen mit einer unerschütterlichen Vision, die die Welt von morgen an der Schnittstelle von Technologie, Investition, Immobilien und künstlicher Intelligenz prägt.',
    'hero.cta.vision': 'Unsere Vision Entdecken',
    'hero.cta.invest': 'Anlagebereiche',
    
    // About
    'about.title.part1': 'Unternehmen',
    'about.title.part2': 'Erbe',
    'about.desc': 'Seit über einem Vierteljahrhundert schaffen wir als Vince Capital eine globale Wirkung, indem wir Innovation mit Tradition verbinden. Wir finanzieren nicht nur Unternehmen, sondern auch gesellschaftlichen Wandel; wir definieren Standards in Technologie, Immobilien und Finanzen neu.',
    'about.stats.years': 'Jahre Erfahrung',
    'about.stats.companies': 'Globale Unternehmen',
    
    // Vision/Mission
    'vision.title': 'Unsere Vision',
    'vision.desc': 'Die Evolution von Sektoren als globaler "Digitaler Monolith" mit unseren nachhaltigen und technologieorientierten Investitionen in einer sich digitalisierenden Welt anzuführen und zukünftigen Generationen eine lebenswertere Welt zu hinterlassen.',
    'mission.title': 'Unsere Mission',
    'mission.desc': 'Projekte zu produzieren, die unseren Stakeholdern mit unserer starken Kapitalstruktur und innovativen Perspektive den höchsten Wert bieten.',
    
    // Sectors
    'sectors.title.part1': 'Tätigkeits-',
    'sectors.title.part2': 'Bereiche',
    'sectors.tech': 'Technologie',
    'sectors.tech.desc': 'Künstliche Intelligenz, Blockchain und nachhaltige Energielösungen.',
    'sectors.invest': 'Investition',
    'sectors.invest.desc': 'Risikokapital und Portfolio-Management für den globalen Markt.',
    'sectors.realestate': 'Immobilien',
    'sectors.realestate.desc': 'Ikonische architektonische Strukturen und nachhaltige Lebensräume.',
    'sectors.finance': 'Finanzen',
    'sectors.finance.desc': 'Banken, Versicherungen und Unternehmensfinanzberatung.',

    // Why Us
    'why.title.part1': 'Warum',
    'why.title.part2': 'Vince Capital?',
    'why.desc': 'Mit unserem starken finanziellen Fundament, unserem globalen Netzwerk und unseren kompromisslosen ethischen Werten versprechen wir unseren Geschäftspartnern nicht nur Wachstum, sondern eine nachhaltige Zukunft.',
    'why.strat.tag': 'Strategie',
    'why.strat.title': 'Unerschütterliches Vertrauen',
    'why.strat.desc': 'Mit unseren transparenten Managementprinzipien bauen wir einen sicheren Hafen für alle unsere Stakeholder.',
    'why.tech.tag': 'Technologie',
    'why.tech.title': 'Innovationsfokus',
    'why.tech.desc': 'Wir maximieren die Effizienz, indem wir modernste Technologien in das Herz unserer Abläufe integrieren.',
    'why.global.tag': 'Global',
    'why.global.title': 'Internationale Wirkung',
    'why.global.desc': 'Dank unseres weltweiten Netzwerks schlagen wir strategische Brücken zwischen den Kontinenten.',
    'why.team.tag': 'Team',
    'why.team.title': 'Fachpersonal',
    'why.team.desc': 'Wir managen komplexeste Prozesse mit unseren fachkundigen, visionären Profis.',
    
    // Partners
    'partners.title': 'Unsere Strategischen Globalen Partner',
    
    // Contact Page
    'contact.title.part1': 'Kontakt',
    'contact.title.part2': 'Aufnehmen',
    'contact.desc': 'Unser Team freut sich auf Ihre Kontaktaufnahme für neue Projekte, Investmentmöglichkeiten oder allgemeine Fragen.',
    'contact.hq': 'Hauptsitz',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Ihr Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'Ihre E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.subject.opt1': 'Über Investitionen',
    'contact.form.subject.opt2': 'Kooperationsvorschlag',
    'contact.form.subject.opt3': 'Medienanfragen',
    'contact.form.subject.opt4': 'Sonstiges',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.message.placeholder': 'Wie können wir Ihnen helfen?',
    'contact.form.submit': 'Senden',
    
    // Footer
    'footer.desc': 'Das Symbol für Innovation und Vertrauen auf globalen Märkten. Lassen Sie uns gemeinsam die Zukunft gestalten.',
    'footer.links.quick': 'Schnellzugriff',
    'footer.links.expertise': 'Expertise',
    'footer.newsletter': 'Newsletter-Abonnement',
    'footer.newsletter.desc': 'Informieren Sie sich über unsere Investmentberichte.',
    'footer.newsletter.placeholder': 'E-Mail',
    'footer.rights': 'Vince Capital. The Digital Monolith. vince.capital',
    'footer.kvkk': 'Datenschutz',
    'footer.legal': 'Impressum',
    'footer.cookies': 'Cookie-Richtlinie',
    'common.explore': 'Entdecken',
    'common.motto.sub': 'Architekten der Zukunft'
  },
  ESP: {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.sectors': 'Sectores',
    'nav.companies': 'Empresas',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.motto': 'Construyendo los Estándares del Mañana Hoy',
    'hero.title.part1': 'El Poder',
    'hero.title.part2': 'que Construye',
    'hero.title.part3': 'el Futuro.',
    'hero.desc': 'Vince Capital gestiona inversiones globales con una visión inquebrantable que da forma al mundo del mañana en la intersección de la tecnología, la inversión, el sector inmobiliario y la inteligencia artificial.',
    'hero.cta.vision': 'Explora Nuestra Visión',
    'hero.cta.invest': 'Áreas de Inversión',
    
    // About
    'about.title.part1': 'Legado',
    'about.title.part2': 'Corporativo',
    'about.desc': 'Durante más de un cuarto de siglo, como Vince Capital, hemos estado creando un impacto global combinando innovación con tradición. No solo financiamos empresas, sino también la transformación social; redefinimos estándares en tecnología, inmobiliaria y finanzas.',
    'about.stats.years': 'Años de Experiencia',
    'about.stats.companies': 'Empresas Globales',
    
    // Vision/Mission
    'vision.title': 'Nuestra Visión',
    'vision.desc': 'Liderar la evolución de los sectores como un "Monolito Digital" global con nuestras inversiones sostenibles y orientadas a la tecnología en un mundo cada vez más digitalizado y dejar un mundo más habitable para las generaciones futuras.',
    'mission.title': 'Nuestra Misión',
    'mission.desc': 'Producir proyectos que aporten el mayor valor a nuestros grupos de interés con nuestra sólida estructura de capital y perspectiva innovadora.',
    
    // Sectors
    'sectors.title.part1': 'Áreas de',
    'sectors.title.part2': 'Actividad',
    'sectors.tech': 'Tecnología',
    'sectors.tech.desc': 'Inteligencia artificial, blockchain y soluciones de energía sostenible.',
    'sectors.invest': 'Inversión',
    'sectors.invest.desc': 'Capital riesgo y gestión de carteras en mercados globales.',
    'sectors.realestate': 'Inmobiliaria',
    'sectors.realestate.desc': 'Estructuras arquitectónicas icónicas y espacios de vida sostenibles.',
    'sectors.finance': 'Finanzas',
    'sectors.finance.desc': 'Banca, seguros y consultoría financiera corporativa.',

    // Why Us
    'why.title.part1': '¿Por qué',
    'why.title.part2': 'Vince Capital?',
    'why.desc': 'Con nuestra sólida base financiera, nuestra red global y nuestros valores éticos inquebrantables, prometemos a nuestros socios comerciales no solo crecimiento, sino un futuro sostenible.',
    'why.strat.tag': 'Estrategia',
    'why.strat.title': 'Confianza Inquebrantable',
    'why.strat.desc': 'Construimos un refugio seguro para todos nuestros grupos de interés con nuestros principios de gestión transparentes.',
    'why.tech.tag': 'Tecnología',
    'why.tech.title': 'Enfoque en Innovación',
    'why.tech.desc': 'Maximizamos la eficiencia integrando las últimas tecnologías en el corazón de nuestras operaciones.',
    'why.global.tag': 'Global',
    'why.global.title': 'Impacto Internacional',
    'why.global.desc': 'Gracias a nuestra red mundial, establecemos puentes estratégicos entre continentes.',
    'why.team.tag': 'Equipo',
    'why.team.title': 'Personal Experto',
    'why.team.desc': 'Gestionamos los procesos más complejos con nuestros expertos profesionales visionarios.',
    
    // Partners
    'partners.title': 'Nuestros Socios Globales Estratégicos',
    
    // Contact Page
    'contact.title.part1': 'Ponerse en',
    'contact.title.part2': 'Contacto',
    'contact.desc': 'Nuestro equipo está listo para ponerse en contacto con usted para nuevos proyectos, oportunidades de inversión o preguntas generales.',
    'contact.hq': 'Sede Central',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.form.name': 'Nombre Completo',
    'contact.form.name.placeholder': 'Su Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.email.placeholder': 'Su dirección de correo electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.opt1': 'Sobre Inversión',
    'contact.form.subject.opt2': 'Propuesta de Colaboración',
    'contact.form.subject.opt3': 'Relaciones con Medios',
    'contact.form.subject.opt4': 'Otro',
    'contact.form.message': 'Su Mensaje',
    'contact.form.message.placeholder': '¿Cómo podemos ayudarle?',
    'contact.form.submit': 'Enviar',
    
    // Footer
    'footer.desc': 'El símbolo de innovación y confianza en los mercados globales. Construyamos juntos el futuro.',
    'footer.links.quick': 'Acceso Rápido',
    'footer.links.expertise': 'Experiencia',
    'footer.newsletter': 'Suscripción al Boletín',
    'footer.newsletter.desc': 'Infórmese sobre nuestros informes de inversión.',
    'footer.newsletter.placeholder': 'Correo electrónico',
    'footer.rights': 'Vince Capital. El Monolito Digital. vince.capital',
    'footer.kvkk': 'Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.cookies': 'Política de Cookies',
    'common.explore': 'Explorar',
    'common.motto.sub': 'Arquitectos del Futuro'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('vince_lang');
    return (saved as Language) || 'TR';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('vince_lang', newLang);
  };

  const t = (key: string) => {
    const currentLangTranslations = translations[lang];
    if (currentLangTranslations && currentLangTranslations[key]) {
      return currentLangTranslations[key];
    }
    // Fallback to EN if translation is missing
    const enTranslations = translations['EN'];
    if (enTranslations && enTranslations[key]) {
      return enTranslations[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
