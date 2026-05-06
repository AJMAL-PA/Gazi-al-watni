import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';

export default function About() {
  return (
    <section className="py-12 md:py-24 bg-slate-950 text-white font-inter">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Left side: Image */}
                <div className="relative">
                    <img 
                        className="w-full h-[400px] md:h-[600px] object-cover rounded-[2rem] shadow-2xl"
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                        alt="Steel manufacturing facility" 
                    />
                    {/* Decorative flame gradient glow behind the image */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-orange-600 to-red-600 rounded-[2.5rem] -z-10 opacity-20 blur-2xl"></div>
                </div>
                
                {/* Right side: Content */}
                <div className="space-y-6 md:space-y-8 lg:pl-8">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm">About Us</span>
                    
                    <BlurText 
                        text="Forging the Future of Global Infrastructure"
                        delay={50}
                        direction="top"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight text-white drop-shadow-md tracking-normal max-w-[90%] md:max-w-none"
                    />
                    
                    <BlurText 
                        text="Gazi Alwatani is a registered and officially recognized business operating under the Ministry of Commerce. We are committed to delivering reliable, professional, and high-quality industrial services while ensuring full legal compliance and operational transparency."
                        delay={10}
                        direction="bottom"
                        className="text-slate-400 text-lg leading-relaxed"
                    />
                    


                    {/* Know More Button */}
                    <div className="pt-4">
                        <Link 
                            to="/about"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-block font-inter uppercase tracking-widest text-sm"
                        >
                            Know More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
