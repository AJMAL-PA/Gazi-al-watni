import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [langIndex, setLangIndex] = useState(0);

    const contents = [
        {
            heading: "Precision Steel Solutions",
            description: "Premium manufacturing and logistics engineered for high-performance infrastructure.",
            dir: "ltr"
        },
        {
            heading: "حلول الصلب الدقيقة",
            description: "تصنيع ولوجستيات متميزة مصممة للبنية التحتية عالية الأداء.",
            dir: "rtl"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLangIndex((prev) => (prev + 1) % contents.length);
        }, 5000); // Switch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/gazi hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col items-center text-center mt-20 md:mt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={langIndex}
                        initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`flex flex-col items-center w-full ${contents[langIndex].dir === 'rtl' ? 'font-inter' : ''}`}
                        dir={contents[langIndex].dir}
                    >
                        <h1 className={`text-white mb-4 md:mb-6 drop-shadow-2xl justify-center leading-tight ${contents[langIndex].dir === 'rtl' ? 'text-5xl sm:text-6xl md:text-8xl font-black' : 'font-bebas italic text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-9xl'}`}>
                            {contents[langIndex].heading}
                        </h1>
                        <p className={`text-slate-200 mb-8 md:mb-12 max-w-3xl drop-shadow-lg leading-relaxed px-4 md:px-0 ${contents[langIndex].dir === 'rtl' ? 'text-lg md:text-2xl font-semibold' : 'font-light font-inter text-sm md:text-lg lg:text-xl'}`}>
                            {contents[langIndex].description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none px-6 sm:px-0">
                    <Link
                        to="/services"
                        className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full backdrop-blur-md border border-orange-500/50 transition-all text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] active:scale-95 text-center whitespace-nowrap">
                        Explore Services
                    </Link>
                    <a
                        href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-black/40 hover:bg-orange-600/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full backdrop-blur-md border border-orange-500/30 hover:border-orange-500/80 transition-all text-sm sm:text-base font-semibold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.15)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95 whitespace-nowrap">
                        Get a Quote <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}


