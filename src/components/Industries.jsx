export default function Industries() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <div className="mb-16 md:mb-24">
                <span className="text-orange-500 font-inter font-bold mb-4 block uppercase tracking-[0.3em] text-xs md:text-sm">Sectors</span>
                <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider">Empowering <span className="text-orange-600">Global Growth</span></h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-transparent mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Construction Card */}
                <div className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-700 overflow-hidden text-center">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-orange-600/10 blur-2xl group-hover:bg-orange-600/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 mb-10 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                            <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-white transition-colors">architecture</span>
                        </div>
                        <h3 className="text-3xl font-bebas tracking-widest text-white mb-4 group-hover:text-orange-500 transition-colors">Construction</h3>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed group-hover:text-slate-200 transition-colors">Foundational steel for skyscrapers and civic infrastructure projects worldwide.</p>
                    </div>
                </div>

                {/* Automotive Card */}
                <div className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-700 overflow-hidden text-center">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-orange-600/10 blur-2xl group-hover:bg-orange-600/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 mb-10 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                            <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-white transition-colors">directions_car</span>
                        </div>
                        <h3 className="text-3xl font-bebas tracking-widest text-white mb-4 group-hover:text-orange-500 transition-colors">Automotive</h3>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed group-hover:text-slate-200 transition-colors">Lightweight, high-strength alloys engineered for the future of modern mobility.</p>
                    </div>
                </div>

                {/* Manufacturing Card */}
                <div className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-700 overflow-hidden text-center">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-orange-600/10 blur-2xl group-hover:bg-orange-600/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 mb-10 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                            <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-white transition-colors">precision_manufacturing</span>
                        </div>
                        <h3 className="text-3xl font-bebas tracking-widest text-white mb-4 group-hover:text-orange-500 transition-colors">Manufacturing</h3>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed group-hover:text-slate-200 transition-colors">Precision component materials for heavy industrial machinery and tooling.</p>
                    </div>
                </div>

                {/* Infrastructure Card */}
                <div className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-700 overflow-hidden text-center">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-orange-600/10 blur-2xl group-hover:bg-orange-600/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 mb-10 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                            <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:text-white transition-colors">oil_barrel</span>
                        </div>
                        <h3 className="text-3xl font-bebas tracking-widest text-white mb-4 group-hover:text-orange-500 transition-colors">Infrastructure</h3>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed group-hover:text-slate-200 transition-colors">Pipeline systems and structural frameworks for renewable energy projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
