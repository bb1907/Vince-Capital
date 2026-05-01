/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function KVKK() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 md:p-12 rounded-3xl"
      >
        <h1 className="text-4xl font-headline font-black text-white mb-8">Kişisel Verilerin Korunması (KVKK)</h1>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Veri Sorumlusu</h2>
            <p>Vince Capital olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan çerçevede ve mevzuat tarafından emredilen sınırlar içerisinde işlemekteyiz.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Toplanan kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, ürün ve hizmetlerimizin beğeni, kullanım alışkanlıkları ve ihtiyaçlarınıza göre özelleştirilerek sizlere önerilmesi amacıyla işlenmektedir.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Kişisel Verilerin Aktarımı</h2>
            <p>Kişisel verileriniz; iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilmektedir.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Veri Sahibinin Hakları</h2>
            <p>KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel veri işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve uygunluğunu öğrenme, yurt içinde veya dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
