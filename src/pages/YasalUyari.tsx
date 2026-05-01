/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function YasalUyari() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 md:p-12 rounded-3xl"
      >
        <h1 className="text-4xl font-headline font-black text-white mb-8">Yasal Uyarı</h1>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>vince.capital web sitesinde yer alan her türlü bilgi, içerik, tasarım ve görseller Vince Capital'e aittir. Yazılı izin olmaksızın kısmen veya tamamen kopyalanamaz, dağıtılamaz ve ticari amaçla kullanılamaz.</p>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Yatırım Bilgilendirmesi</h2>
            <p>Bu sitede yer alan bilgiler yatırım tavsiyesi niteliği taşımamaktadır. Vince Capital, paylaşılan bilgilerin güncelliği ve doğruluğu konusunda azami gayreti göstermekle beraber, doğabilecek maddi veya manevi zararlardan sorumlu tutulamaz.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Dış Bağlantılar</h2>
            <p>Web sitemiz üzerinden yönlendirilen üçüncü taraf web sitelerinin içeriklerinden ve gizlilik politikalarından Vince Capital sorumlu değildir.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
