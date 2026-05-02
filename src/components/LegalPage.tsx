import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { LucideIcon } from 'lucide-react';

interface LegalPageProps {
  titleKey: string;
  contentKey: string;
  icon: LucideIcon;
}

export function LegalPage({ titleKey, contentKey, icon: Icon }: LegalPageProps) {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary w-6 h-6" />
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tight">
                {t(titleKey)}
              </h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {t(contentKey)}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-gray-500 text-sm italic">
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="text-primary font-mono text-xs tracking-widest uppercase">
                Vince Capital Legal Department
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
