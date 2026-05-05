import { Link } from 'react-router-dom';
import BlurText from './BlurText';

export default function Hero() {
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
                <BlurText
                    text="Precision Steel Solutions"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="font-bebas italic text-5xl sm:text-6xl md:text-8xl text-white mb-4 md:mb-6 drop-shadow-2xl justify-center leading-none"
                />
                <p className="font-inter text-sm md:text-lg lg:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl drop-shadow-lg font-light leading-relaxed px-4 md:px-0">
                    Premium manufacturing and logistics engineered for durability, resilience, and long-lasting performance in the world's most demanding infrastructure projects.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
                    <Link
                        to="/services"
                        className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-8 py-4 rounded-full backdrop-blur-md border border-orange-500/50 transition-all font-semibold shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] active:scale-95 text-center">
                        Explore Services
                    </Link>
                    <a
                        href="https://wa.me/7052495749?text=Hello%20Gazi%20National%20Establishment%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-black/40 hover:bg-orange-600/20 text-white px-8 py-4 rounded-full backdrop-blur-md border border-orange-500/30 hover:border-orange-500/80 transition-all font-semibold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.15)] hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95">
                        Get a Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

