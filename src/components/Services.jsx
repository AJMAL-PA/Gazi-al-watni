import service1Img from '../assets/service 1.jpeg';
import powderCoatingImg from '../assets/powder coat.jpeg';
import brandingImg from '../assets/branding.jpg';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const cards = t('servicesCards');
  const imageMap = [service1Img, 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop', brandingImg, 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', powderCoatingImg];

  return (
    <section className="pt-12 pb-20 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {cards.map((card, idx) => (
                    <div key={idx} className="group relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            className="w-full h-full object-cover grayscale md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            alt={card.title}
                            src={imageMap[idx]}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                            <span className="text-[10px] font-inter text-orange-500 mb-2 tracking-widest uppercase font-bold">
                                {card.label}
                            </span>
                            <h3 className="font-bigshoulders font-black text-white uppercase leading-none tracking-wide text-xl md:text-[1.35rem] min-h-[auto] md:min-h-[3.5rem] flex items-start">
                                {card.title}
                            </h3>
                            <p className="text-xs text-slate-300 mt-3 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed max-w-[90%]">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
