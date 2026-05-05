import { motion } from 'framer-motion';
import BlurText from './BlurText';

export default function MissionVision() {
  return (
    <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Purpose & Direction</span>
                <BlurText 
                    text="Our Driving Force"
                    delay={50}
                    direction="top"
                    className="text-4xl md:text-5xl lg:text-6xl font-bebas mt-4 drop-shadow-md justify-center tracking-normal"
                />
                <BlurText 
                    text="Discover the core principles that guide our everyday operations and shape our long-term ambitions in the global steel industry."
                    delay={15}
                    direction="bottom"
                    className="text-slate-400 font-inter text-lg mt-6 leading-relaxed justify-center"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 font-inter">
                
                {/* Mission Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative group bg-white/5 border border-white/10 p-10 lg:p-14 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-colors duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(234,88,12,0.4)] transform group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bebas mb-6 tracking-normal">Our Mission</h2>
                        
                        <p className="text-slate-400 text-lg leading-relaxed">
                            To engineer the foundations of modern trade by delivering structural steel fabrication and precision metal works of uncompromising quality. We strive to provide transparent, durable, and sustainable solutions that empower global infrastructure projects and exceed our clients' most rigorous demands.
                        </p>
                    </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group bg-white/5 border border-white/10 p-10 lg:p-14 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full group-hover:bg-red-500/30 transition-colors duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(220,38,38,0.4)] transform group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bebas mb-6 tracking-normal">Our Vision</h2>
                        
                        <p className="text-slate-400 text-lg leading-relaxed">
                            To be the vanguard of industrial metal innovation, universally recognized as the most trusted partner in large-scale fabrication. We envision a future where our sustainable manufacturing technologies set the global standard for safety, resilience, and architectural excellence.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
}
