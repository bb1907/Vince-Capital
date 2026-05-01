/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function CerezPolitikasi() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 md:p-12 rounded-3xl"
      >
        <h1 className="text-4xl font-headline font-black text-white mb-8">Çerez Politikası</h1>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>vince.capital olarak, web sitemizdeki deneyiminizi geliştirmek ve size daha iyi hizmet sunabilmek için çerezler (cookies) kullanmaktayız.</p>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Çerez Nedir?</h2>
            <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza bırakılan küçük veri dosyalarıdır. Sitenin düzgün çalışması ve tercihlerinizin hatırlanması için kullanılır.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Kullanım Amaçları</h2>
            <p>Sitemizde temel işlevsellik, performans analizi ve kullanıcı deneyimi optimizasyonu amacıyla zorunlu ve analitik çerezler kullanılmaktadır.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Çerez Yönetimi</h2>
            <p>Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Ancak bu durum sitemizin bazı özelliklerinin çalışmamasına neden olabilir.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
