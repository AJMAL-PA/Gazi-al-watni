import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [logoDone, setLogoDone] = useState(false);
    const [showText, setShowText] = useState(false);
    const [textDone, setTextDone] = useState(false);
    const { t, dir } = useLanguage();

    const text1 = t('preloader.text1');
    const text2 = t('preloader.text2');

    useEffect(() => {
        if (logoDone) {
            const timeout = setTimeout(() => {
                setShowText(true);
            }, 600); // Wait 600ms after logo unblurs before sliding and showing text
            return () => clearTimeout(timeout);
        }
    }, [logoDone]);

    useEffect(() => {
        // Disable scroll when loading
        document.body.style.overflow = 'hidden';

        if (textDone) {
            const timeout = setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'unset';
            }, 1000); // Hold for 1 second after text is fully visible before fading out
            return () => clearTimeout(timeout);
        }
    }, [textDone]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#081425] overflow-hidden"
                >
                    {/* Dynamic Background Elements */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[800px] h-[800px] bg-orange-600/20 blur-[150px] rounded-full"
                    />
                    
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                    />

                    <motion.div 
                        layout 
                        className="relative flex flex-col items-center"
                    >
                        {/* Logo/Icon and Text Animation Row (Logo moves to Right) */}
                        <motion.div 
                            layout 
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="flex flex-row items-center justify-center gap-6 md:gap-8 min-h-[120px]"
                        >
                            {/* Arabic Text with Staggered Word Blur Effect */}
                            <AnimatePresence>
                                {showText && (
                                    <motion.h1 
                                        layout
                                        initial={{ opacity: 0, filter: "blur(20px)", x: 20 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                                        exit={{ opacity: 0, filter: "blur(20px)", x: 20 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="text-4xl md:text-6xl font-bebas text-slate-50 tracking-wider flex items-center gap-3 select-none"
                                        style={{ direction: dir }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, filter: "blur(15px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                        >
                                            {text1}
                                        </motion.span>
                                        <motion.span 
                                            className="text-orange-500"
                                            initial={{ opacity: 0, filter: "blur(15px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                            onAnimationComplete={() => {
                                                setTextDone(true);
                                            }}
                                        >
                                            {text2}
                                        </motion.span>
                                    </motion.h1>
                                )}
                            </AnimatePresence>

                            {/* Logo */}
                            <motion.div
                                layout
                                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                transition={{ 
                                    opacity: { duration: 0.8 },
                                    filter: { duration: 0.8 },
                                    scale: { duration: 0.8 },
                                    layout: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
                                }}
                                onAnimationComplete={() => {
                                    if (!logoDone) {
                                        setLogoDone(true);
                                    }
                                }}
                                className="w-20 h-20 md:w-24 md:h-24 bg-white p-3.5 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/10 border border-white/10"
                            >
                                <img src={logo} alt="Gazi Alwatani Logo" className="w-full h-full object-contain" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
