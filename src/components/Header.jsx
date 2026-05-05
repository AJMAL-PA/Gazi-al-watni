import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'pt-0 px-0' : 'pt-4 md:pt-6 px-4 md:px-8'}`}>
            {/* Scroll Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-transparent backdrop-blur-xl transition-opacity duration-500 -z-10 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <nav className={`flex justify-between items-center max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'p-4 md:px-8 md:py-4' : 'bg-black/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-2xl md:rounded-none  border-none md:border-none'}`}>
                {/* Left: Logo */}
                <Link to="/" className="flex items-center gap-2 md:gap-3 cursor-pointer flex-1">
                    <img src={logo} alt="Gazi National Logo" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Center: Floating Pill Nav (Desktop) */}
                <div className="hidden md:flex items-center bg-black/60 border border-orange-500/20 backdrop-blur-xl rounded-full p-1.5 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            className={`font-inter tracking-wide text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300 ${location.pathname === link.path ? 'text-orange-100 bg-orange-600/20 shadow-[0_0_10px_rgba(234,88,12,0.1)]' : 'text-slate-300 hover:text-orange-200 hover:bg-orange-600/10'}`}
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="flex justify-end items-center flex-1 gap-4">
                    <a
                        href="https://wa.me/7052495749?text=Hello%20Gazi%20National%20Establishment%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex bg-orange-600/10 backdrop-blur-md border border-orange-500/30 hover:bg-orange-600/20 hover:border-orange-500/60 transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.15)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] px-6 py-3 rounded-full text-white font-inter tracking-wide uppercase text-xs font-extrabold active:scale-95 whitespace-nowrap">
                        Get a Quote
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX className="w-8 h-8" /> : <HiMenuAlt3 className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-slate-950 z-[60] flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="Gazi National Logo" className="h-8 w-auto object-contain" />
                            </div>
                            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-xl">
                                <HiX className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-bebas tracking-wide transition-colors ${location.pathname === link.path ? 'text-orange-500' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-12 border-t border-white/10">
                            <a
                                href="https://wa.me/7052495749?text=Hello%20Gazi%20National%20Establishment%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                className="w-full bg-orange-600 text-white py-4 rounded-2xl flex items-center justify-center font-bold uppercase tracking-widest text-sm shadow-xl shadow-orange-600/20"
                            >
                                Get a Quote
                            </a>
                            <div className="mt-8 flex gap-6 justify-center text-slate-500">
                                {/* Social links could go here */}
                                <span>Follow us on social media for updates</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

