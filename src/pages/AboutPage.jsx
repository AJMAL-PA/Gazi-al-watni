import Features from '../components/Features';
import Certifications from '../components/Certifications';
import Process from '../components/Process';
import BlurText from '../components/BlurText';
import MissionVision from '../components/MissionVision';
import SectionReveal from '../components/SectionReveal';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-950 min-h-screen text-white overflow-hidden">
      
      {/* New Hero / Trusted Partner Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Collage */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] md:h-[600px] w-full mt-8 lg:mt-0"
        >
          {/* Main Large Image (Robotic Arm) */}
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Robotic arm welding metal"
            className="absolute top-0 left-0 w-[80%] h-[400px] md:h-[500px] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10" 
          />
          {/* Small Top Right Image (Worker) */}
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial worker"
            className="absolute top-12 right-0 w-[35%] h-[180px] md:h-[220px] object-cover rounded-2xl shadow-2xl border-8 border-slate-950 z-20" 
          />
          {/* Small Bottom Right Image (Laser Cutting) */}
          <img 
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
            alt="Close up of metal cutting"
            className="absolute bottom-8 right-10 w-[45%] h-[200px] md:h-[240px] object-cover rounded-2xl shadow-2xl border-8 border-slate-950 z-30" 
          />
          {/* Subtle glow effect behind */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-orange-600/20 blur-[100px] rounded-full z-0"></div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6 lg:pl-6"
        >
          <span className="text-slate-300 font-bold tracking-widest uppercase text-[11px] md:text-sm">PRECISION. INNOVATION. RELIABILITY.</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight mt-2 tracking-normal">
            Gazi National <br/>
            <span className="text-orange-600">Establishment</span>
          </h1>
          
          <div className="space-y-6 text-slate-400 font-inter text-base md:text-lg leading-relaxed pt-2">
            <p>
              Gazi National Establishment is a legally registered business entity operating under the regulations of the Ministry of Commerce. With an active commercial registration, the company ensures compliance, transparency, and credibility in all its operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div>
                    <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">Unified National Number</p>
                    <p className="text-white text-xl font-bebas">7052495749</p>
                </div>
                <div>
                    <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">Registration Number</p>
                    <p className="text-white text-xl font-bebas">7052495749</p>
                </div>
                <div>
                    <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">Business Status</p>
                    <p className="text-white text-xl font-bebas">Active</p>
                </div>
                <div>
                    <p className="text-orange-500 font-bold text-sm uppercase tracking-wider">Issue Date</p>
                    <p className="text-white text-xl font-bebas">11 November 2025</p>
                </div>
            </div>
            <p>
              We are committed to providing trustworthy and professional services, maintaining legal compliance with government regulations, and ensuring quality and reliability in our operations. The company holds an active commercial registration certificate, verifying its legitimacy and authorization to conduct business.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionReveal><MissionVision /></SectionReveal>
      <SectionReveal><Process /></SectionReveal>
      <SectionReveal><Features /></SectionReveal>
      <SectionReveal><Certifications /></SectionReveal>
    </main>
  );
}
