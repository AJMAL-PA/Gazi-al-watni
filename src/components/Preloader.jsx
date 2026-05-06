import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Disable scroll when loading
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        // Re-enable scroll when done
                        document.body.style.overflow = 'unset';
                    }, 800);
                    return 100;
                }
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'unset';
        };
    }, []);

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

                    <div className="relative flex flex-col items-center">
                        {/* Logo/Icon Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mb-12 flex flex-col items-center"
                        >
                            <motion.div
                                initial={{ rotate: -10, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="w-24 h-24 bg-white p-3.5 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/10 border border-white/10"
                            >
                                <img src={logo} alt="Gazi Alwatani Logo" className="w-full h-full object-contain" />
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bebas text-slate-50 tracking-wider text-center"
                            >
                                GAZI <span className="text-orange-500">ALWATANI</span>
                            </motion.h1>
                        </motion.div>

                        {/* Progress Container */}
                        <div className="w-80 space-y-4">
                            <div className="flex justify-between items-end px-1">
                                <motion.span 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="font-inter text-orange-500/80 text-[10px] tracking-[0.4em] uppercase"
                                >
                                    Initializing Systems
                                </motion.span>
                                <motion.span 
                                    className="font-inter text-slate-400 text-[10px] tracking-widest"
                                >
                                    {Math.round(progress)}%
                                </motion.span>
                            </div>
                            
                            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative border border-white/5 backdrop-blur-sm">
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut" }}
                                    style={{ backgroundSize: '200% 100%' }}
                                />
                                {/* Shimmer overlay */}
                                <motion.div 
                                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer tagline */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 1 }}
                            className="font-inter text-slate-400 text-[10px] tracking-[0.6em] uppercase"
                        >
                            TRUSTWORTHY & PROFESSIONAL SERVICES
                        </motion.div>
                        
                        {/* Decorative line */}
                        <motion.div 
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 0.2 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="w-12 h-[1px] bg-orange-500"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
