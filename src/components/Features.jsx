export default function Features() {
  return (
    <section className="py-12 md:py-24 bg-slate-950 font-inter">
        <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-transparent border border-white/10 p-12 rounded-[2.5rem] hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-black transition-colors">shield_with_heart</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white group-hover:text-black mb-4 transition-colors">Precision Quality</h3>
                    <p className="text-slate-400 group-hover:text-black/80 text-base leading-relaxed transition-colors">Every production batch undergoes a 12-point electronic
                        inspection to guarantee 0.01mm tolerance levels.</p>
                </div>
                <div className="bg-transparent border border-white/10 p-12 rounded-[2.5rem] hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-black transition-colors">payments</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white group-hover:text-black mb-4 transition-colors">Direct Pricing</h3>
                    <p className="text-slate-400 group-hover:text-black/80 text-base leading-relaxed transition-colors">Eliminating intermediaries to provide transparent,
                        mill-direct pricing for institutional-scale procurement.</p>
                </div>
                <div className="bg-transparent border border-white/10 p-12 rounded-[2.5rem] hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-black transition-colors">local_shipping</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white group-hover:text-black mb-4 transition-colors">Global Network</h3>
                    <p className="text-slate-400 group-hover:text-black/80 text-base leading-relaxed transition-colors">Integrated logistics with real-time tracking across 40+
                        maritime and rail hubs globally.</p>
                </div>
                <div className="bg-transparent border border-white/10 p-12 rounded-[2.5rem] hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-black transition-colors">support_agent</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white group-hover:text-black mb-4 transition-colors">Expert Support</h3>
                    <p className="text-slate-400 group-hover:text-black/80 text-base leading-relaxed transition-colors">Dedicated account managers with metallurgical engineering
                        backgrounds available 24/7.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
