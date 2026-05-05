export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-6xl font-bebas tracking-wider text-white mb-12 md:mb-20 text-center uppercase">Client Testimonials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] relative group hover:bg-white/[0.08] transition-all duration-500">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(234,88,12,0.3)]">
                        <span className="material-symbols-outlined text-white">format_quote</span>
                    </div>
                    <div className="flex gap-1 text-orange-500 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">star</span>)}
                    </div>
                    <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">"Gazi National's commitment to delivery timelines and operational transparency is unparalleled. They are a true partner in our operations."</p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bebas text-xl">RC</div>
                        <div>
                            <div className="text-white font-bebas tracking-wide text-lg">Robert Chen</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest">Procurement Director, AeroLink Intl.</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] relative group hover:bg-white/[0.08] transition-all duration-500 lg:mt-12">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(234,88,12,0.3)]">
                        <span className="material-symbols-outlined text-white">format_quote</span>
                    </div>
                    <div className="flex gap-1 text-orange-500 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">star</span>)}
                    </div>
                    <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">"The metallurgical precision of their custom alloys allowed us to reduce component weight by 14% without compromising structural integrity."</p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bebas text-xl">EV</div>
                        <div>
                            <div className="text-white font-bebas tracking-wide text-lg">Dr. Elena Vos</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest">Chief Engineer, Nord-Tech Automotive</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] relative group hover:bg-white/[0.08] transition-all duration-500 lg:mt-24">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(234,88,12,0.3)]">
                        <span className="material-symbols-outlined text-white">format_quote</span>
                    </div>
                    <div className="flex gap-1 text-orange-500 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" data-weight="fill">star</span>)}
                    </div>
                    <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">"Their sustainable manufacturing initiatives align perfectly with our ESG goals. A premium supplier that cares about the future."</p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bebas text-xl">MT</div>
                        <div>
                            <div className="text-white font-bebas tracking-wide text-lg">Marcus Thorne</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest">Sustainability Officer, Global Build Corp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
