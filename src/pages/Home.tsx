/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MemoryStick as Memory, 
  TrendingUp, 
  Building2, 
  Landmark, 
  Rocket, 
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxT2f31W2krFYyRMtFEsGYJCnsRFVOclT6G0aGxGFLo3UrvjR-JyO5QFPoN_gWS8ykej3gx1OFoDLioezTBhsILga3QO--weHX9qhuC1TsypqUJdI_XpjvASkiJMXF8QjH_nf_kdRclV_l65GMAl79fF0ScRVI759D9Qfhbj600uY-q3aHa3lSK9SF7JUeO1FhTMoH9DeaUJ9N0SOzxPjE1UQKrdbn8A7eTqM0TVEUaEM15XP7wCASEh4AV5EyK7BQD27yZaAupg",
  tech: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_2LZCo4K0Otkw9FZ2XjBBkNvAToiA-hAc4OJs1L54Iv7VnzoDTslU88Qc3T72DnmLlT7OObXwV9I6HzGQ79ukjZoVJwoiyM_uOc71j3kkxQRDhrwGIXjaoGT9DzIMYVod8jKOK9Nn8YS_xx4PZxRDRRvWdpsF_6yjr0DyzHTynW9LKL7rHPYtVC8VzDLgtiV5HTwqOG7n1j-KXniOKVItoKk-6CZsJyQKykmq4tJVUI0hnv_ahxa_ccygh4azsvZn8BZGbh_hww",
  investment: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP0g1jZnIHO-O25eDz4WJbEs1-v8XAyFcyixhJHRlXz0c6rRx_47J-_L9yexSxdrxoaJ4FJmR743F3KBxJeqKSydFY_ai8JAQIsu_ab5u4XDqZJxFx6xTRdm6-QW9I0ktZWRKArxXbkDPvgTEQwraTgbTWDdL0IGxehRlfG8BRz2qvrAuOp9THi-7P51aULTffzRK7ClYnhtyITfVJI5vOhRc0gpWckGSAnHRcAPUIo-n7EaBdNq6YOEnaP1FVlhrgN2TKNAVeZg",
  realestate: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-VTOq_QEODWdDjLNqvw474YVsotYPUuyZkLVnVik_gRXk-1LkUdyLSZxNFChlMnajTPU4TE7qSJK8yKNle9VdasT0bjAUnl5InyQUtFYaZeWZkmad1vBUbcl8YqYcce4_O4z5m4msDtF9Y5-SNzzmtSc-5B_ucEIxUCW5jL_-h-YtT-OZVEROJTHteKOKVMc2X3RGM1dRG6OeHOENpcwb_OBXzhbaPs-K9fSI6KgURrU2LqkQVQmhWTNzPOIcmgOBYeVptdzN3Q",
  finance: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaLmrCDgNbYGF7w0xey7--LnNti-bMUm04VkRlMoZH6b4PFRqw1mEAuHjHBeA0j_BUmP7zHaclLwaqXI1sOBSIO44G42vYHP_7kXgqN_w5N4V7emKcNsvRBwGI4QCvwtw0UyjUo0H1kSw3HZDSz1A5yYe_BlLENY3yyF65U2XQa6pPeBdcRPjX4NTyb6W-QGrhHmR6eiXHpLakuJcyC33ju8G3DTvzoGVeUi68yOmpamLGeYdRsQaU2mcOLUdX6-l_0wdckJzrXA"
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="anasayfa">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/60 to-surface z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={IMAGES.hero} 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Futuristic Monolith"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-6 block text-sm italic">{t('hero.motto')}</span>
            <h1 className="text-6xl md:text-8xl font-black font-headline text-white leading-[1.1] mb-8 tracking-tighter">
              {t('hero.title.part1')} <span className="text-gradient">{t('hero.title.part2')}</span><br />{t('hero.title.part3')}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/iletisim" className="px-8 py-4 monolith-gradient text-on-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(107,216,203,0.3)] text-center">
                {t('hero.cta.vision')}
              </Link>
              <a href="#faaliyet-alanları" className="px-8 py-4 border border-outline-variant text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-colors text-center">
                {t('hero.cta.invest')}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex">
          <span className="text-xs uppercase tracking-widest text-outline">{t('common.explore')}</span>
          <motion.div 
            animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] bg-primary"
          />
        </div>
      </section>

      {/* Corporate Heritage */}
      <section className="py-32 relative" id="hakkımızda">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black font-headline text-white mb-8 tracking-tight">{t('about.title.part1')} <span className="text-primary">{t('about.title.part2')}</span></h2>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed">
              {t('about.desc')}
            </p>
            <div className="grid grid-cols-2 gap-12 justify-center max-w-lg mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black text-tertiary mb-2">25+</span>
                <span className="text-xs uppercase tracking-widest text-outline font-bold">{t('about.stats.years')}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black text-tertiary mb-2">40+</span>
                <span className="text-xs uppercase tracking-widest text-outline font-bold">{t('about.stats.companies')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: Vision & Mission */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass-card p-10 md:p-14 rounded-3xl"
            >
              <Eye className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-3xl md:text-4xl font-black font-headline text-white mb-6">{t('vision.title')}</h3>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                {t('vision.desc')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="monolith-gradient p-10 md:p-14 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <Rocket className="w-12 h-12 text-on-primary mb-8" />
                <h3 className="text-3xl font-black font-headline text-on-primary mb-6">{t('mission.title')}</h3>
                <p className="text-on-primary-container text-lg font-medium leading-relaxed">
                  {t('mission.desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faaliyet Alanları */}
      <section className="py-32" id="faaliyet-alanları">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black font-headline text-white mb-6">{t('sectors.title.part1')} <span className="text-primary">{t('sectors.title.part2')}</span></h2>
            <div className="w-24 h-1 monolith-gradient mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: "tech", label: t('sectors.tech'), icon: Memory, img: IMAGES.tech, desc: t('sectors.tech.desc') },
              { id: "invest", label: t('sectors.invest'), icon: TrendingUp, img: IMAGES.investment, desc: t('sectors.invest.desc') },
              { id: "realestate", label: t('sectors.realestate'), icon: Building2, img: IMAGES.realestate, desc: t('sectors.realestate.desc') },
              { id: "finance", label: t('sectors.finance'), icon: Landmark, img: IMAGES.finance, desc: t('sectors.finance.desc') }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt={item.label} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-4">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-2xl font-bold font-headline text-white mb-2">{item.label}</h4>
                  <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vince Capital */}
      <section className="py-32 bg-surface-container-low overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] monolith-gradient rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-black font-headline text-white mb-8 tracking-tight">{t('why.title.part1')} <br /><span className="text-primary">{t('why.title.part2')}</span></h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                {t('why.desc')}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { tag: t('why.strat.tag'), title: t('why.strat.title'), desc: t('why.strat.desc') },
                  { tag: t('why.tech.tag'), title: t('why.tech.title'), desc: t('why.tech.desc') },
                  { tag: t('why.global.tag'), title: t('why.global.title'), desc: t('why.global.desc') },
                  { tag: t('why.team.tag'), title: t('why.team.title'), desc: t('why.team.desc') }
                ].map((feature, i) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-2xl hover:border-primary/20 transition-colors"
                  >
                    <span className="text-tertiary text-xs font-black tracking-widest block mb-4 uppercase">{feature.tag}</span>
                    <h5 className="text-xl font-bold text-white mb-3">{feature.title}</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-24 bg-surface" id="şirketlerimiz">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-outline-variant text-[10px] md:text-xs uppercase tracking-[0.5em] mb-16 font-bold">{t('partners.title')}</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center opacity-40 gap-10 md:gap-4">
            {["VECNA GLOBAL", "INCE GLOBAL", "SOOLX", "YAPZEK.AI", "SMART TECH", "SHARONX"].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-black tracking-tighter text-on-surface-variant grayscale brightness-200">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

