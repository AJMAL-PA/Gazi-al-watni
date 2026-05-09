import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';
import SectionReveal from '../components/SectionReveal';

import gallery1 from '../assets/gallery_1.jpg';
import gallery2 from '../assets/gallery_2.jpg';
import gallery3 from '../assets/gallery_3.jpg';
import gallery4 from '../assets/gallery_4.jpg';
import gallery5 from '../assets/gallery_5.jpg';
import gallery6 from '../assets/gallery_6.jpg';
import gallery7 from '../assets/gallery_7.jpg';
import gallery8 from '../assets/gallery_8.jpg';
import gallery9 from '../assets/WhatsApp Image 2026-05-04 at 7.28.02 PM copy.jpeg';
import { useLanguage } from '../i18n/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categoryLabels = t('galleryPage.categories');
  const categories = [
    { key: 'all', label: categoryLabels.all },
    { key: 'fabrication', label: categoryLabels.fabrication },
    { key: 'logistics', label: categoryLabels.logistics },
    { key: 'interior', label: categoryLabels.interior }
  ];

  const itemImages = {
    1: gallery1,
    2: gallery2,
    3: gallery3,
    4: gallery4,
    5: gallery5,
    6: gallery6,
    7: gallery7,
    8: gallery8,
    9: gallery9
  };

  const galleryItems = t('galleryPage.items').map((item) => ({
    ...item,
    src: itemImages[item.id]
  }));

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 font-inter uppercase tracking-[0.3em] text-sm block mb-4">{t('galleryPage.heroBadge')}</span>
          <BlurText 
            text={t('galleryPage.heroTitle')}
            delay={50}
            direction="top"
            className="text-5xl md:text-8xl font-bebas mb-8 justify-center tracking-normal"
          />
          <p className="text-slate-400 font-inter text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('galleryPage.heroBody')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <SectionReveal className="pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 md:px-7 md:py-2.5 rounded-full font-inter uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border flex-shrink-0 ${
                filter === cat.key 
                  ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </SectionReveal>

      {/* Gallery Grid */}
      <SectionReveal className="py-12 px-6 min-h-[800px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-orange-500 font-inter uppercase tracking-widest text-xs mb-2">{categoryLabels[item.category]}</span>
                    <h3 className="text-2xl font-bebas mb-2 tracking-normal">{item.title}</h3>
                    <p className="text-slate-300 font-inter text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="relative py-32 px-6 overflow-hidden bg-slate-950">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={gallery2}
            alt="CTA background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        {/* Glow accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block text-orange-500 font-inter uppercase tracking-[0.4em] text-xs font-bold border border-orange-500/30 rounded-full px-5 py-2 bg-orange-500/10">
            {t('galleryPage.ctaBadge')}
          </span>

          <h2 className="text-5xl md:text-7xl font-bebas tracking-tight leading-tight text-white">
            {t('galleryPage.ctaTitleLine1')}<br />
            <span className="text-orange-500">{t('galleryPage.ctaTitleHighlight')}</span>
          </h2>

          <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            {t('galleryPage.ctaBody')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bebas uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] hover:scale-105 transition-all duration-300 text-lg"
            >
              {t('galleryPage.ctaPrimary')}
            </a>
            <a
              href="/services"
              className="px-10 py-5 bg-white/5 border border-white/20 text-white font-bebas uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 text-lg"
            >
              {t('galleryPage.ctaSecondary')}
            </a>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
