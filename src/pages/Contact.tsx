/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24"
      >
        <div className="lg:col-span-5">
          <h1 className="text-5xl md:text-6xl font-black font-headline text-white mb-8">{t('contact.title.part1')} <span className="text-primary">{t('contact.title.part2')}</span></h1>
          <p className="text-on-surface-variant text-lg mb-12 max-w-md">
            {t('contact.desc')}
          </p>
          
          <div className="space-y-8">
            {[
              { icon: MapPin, title: t('contact.hq'), content: "Levent Plaza, Büyükdere Cad. No:193, Beşiktaş / İstanbul" },
              { icon: Mail, title: t('contact.email'), content: "info@vince.capital" },
              { icon: Phone, title: t('contact.phone'), content: "+90 (212) 555 00 00" }
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h6 className="text-white font-bold mb-1">{item.title}</h6>
                  <p className="text-on-surface-variant text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-card p-10 md:p-14 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{t('contact.form.name')}</label>
                  <input 
                    type="text"
                    placeholder={t('contact.form.name.placeholder')}
                    className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{t('contact.form.email')}</label>
                  <input 
                    type="email"
                    placeholder={t('contact.form.email.placeholder')}
                    className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{t('contact.form.subject')}</label>
                <select className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                  <option className="bg-surface">{t('contact.form.subject.opt1')}</option>
                  <option className="bg-surface">{t('contact.form.subject.opt2')}</option>
                  <option className="bg-surface">{t('contact.form.subject.opt3')}</option>
                  <option className="bg-surface">{t('contact.form.subject.opt4')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{t('contact.form.message')}</label>
                <textarea 
                  rows={4}
                  placeholder={t('contact.form.message.placeholder')}
                  className="w-full bg-surface-container-highest/50 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" 
                />
              </div>

              <button className="w-full py-4 monolith-gradient text-on-primary font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(107,216,203,0.3)] transition-all uppercase tracking-widest">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

