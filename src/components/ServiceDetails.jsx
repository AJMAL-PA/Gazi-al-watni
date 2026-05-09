import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import service1Img from '../assets/service 1.jpeg';
import powderCoatingImg from '../assets/powder coat.jpeg';
import brandingImg from '../assets/branding.jpg';
import BlurText from './BlurText';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServiceDetails() {
    const { t } = useLanguage();
    const imageMap = [
        service1Img,
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        brandingImg,
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        powderCoatingImg
    ];
    const services = t('serviceDetails.services').map((service, idx) => ({
        ...service,
        img: imageMap[idx]
    }));

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-950 text-white relative font-inter">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm">{t('serviceDetails.badge')}</span>
                <BlurText 
                    text={t('serviceDetails.title')}
                    delay={50}
                    direction="top"
                    className="text-3xl md:text-5xl lg:text-6xl font-bebas mt-4 drop-shadow-md justify-center tracking-normal"
                />
                <BlurText 
                    text={t('serviceDetails.subtitle')}
                    delay={15}
                    direction="bottom"
                    className="text-slate-400 text-base md:text-lg mt-4 md:mt-6 leading-relaxed justify-center"
                />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                
                {/* Left: Accordion/List */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full">
                    <div className="space-y-2">
                        {services.map((service, idx) => (
                            <div 
                                key={service.id}
                                onClick={() => setActiveTab(idx)}
                                className={`cursor-pointer border-b border-white/10 py-6 transition-all duration-300 ${activeTab === idx ? 'opacity-100 pl-4 border-orange-500/50 bg-white/5 rounded-t-xl' : 'opacity-40 hover:opacity-70 hover:pl-2'}`}
                            >
                                <div className="flex items-center gap-6 px-4">
                                    <span className="text-2xl font-bigshoulders font-black text-orange-500 uppercase">{service.id}</span>
                                    <h3 className="text-xl md:text-2xl font-bigshoulders font-black uppercase tracking-wide leading-none">{service.title}</h3>
                                </div>
                                
                                {/* Mobile Image (shows only on small screens when active) */}
                                {activeTab === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="mt-6 px-4 lg:hidden"
                                    >
                                        <img src={service.img} alt={service.title} className="w-full h-[300px] object-cover rounded-2xl mb-4 shadow-xl" />
                                        <p className="text-slate-400 text-lg leading-relaxed">{service.desc}</p>
                                        <Link 
                                            to="/services"
                                            className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 shadow-lg inline-block uppercase tracking-widest text-xs"
                                        >
                                            {t('serviceDetails.knowMore')}
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right: Sticky Image & Content (Hidden on Mobile) */}
                <div className="hidden lg:block lg:col-span-7 sticky top-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            transition={{ duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600 to-red-600 rounded-[2.5rem] -z-10 opacity-20 blur-3xl transition-opacity group-hover:opacity-30"></div>
                            <img 
                                src={services[activeTab].img} 
                                alt={services[activeTab].title} 
                                className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-[2rem]">
                                <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
                                    {services[activeTab].desc}
                                </p>
                                <Link 
                                    to="/services"
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 uppercase tracking-widest text-sm inline-block"
                                >
                                    {t('serviceDetails.knowMoreAbout')}
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </section>
  );
}
