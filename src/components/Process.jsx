export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-6xl font-bebas tracking-wider text-white mb-12 md:mb-20 text-center">Seamless Fulfillment Cycle</h2>
            <div className="relative">
                <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 z-0"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    <div className="text-center group">
                        <div
                            className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-950 mb-8 ring-1 ring-orange-500/30 group-hover:ring-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/10 shadow-2xl">
                            <span className="font-bebas text-orange-500 text-3xl">01</span>
                        </div>
                        <h4 className="text-xl font-bebas tracking-widest text-white mb-3">Inquiry</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Detailed requirement assessment and volume
                            forecasting.</p>
                    </div>
                    <div className="text-center group">
                        <div
                            className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-950 mb-8 ring-1 ring-white/10 group-hover:ring-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/10 shadow-2xl">
                            <span className="font-bebas text-orange-500 text-3xl">02</span>
                        </div>
                        <h4 className="text-xl font-bebas tracking-widest text-white mb-3">Processing</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Custom fabrication or mill-direct inventory
                            allocation.</p>
                    </div>
                    <div className="text-center group">
                        <div
                            className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-950 mb-8 ring-1 ring-white/10 group-hover:ring-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/10 shadow-2xl">
                            <span className="font-bebas text-orange-500 text-3xl">03</span>
                        </div>
                        <h4 className="text-xl font-bebas tracking-widest text-white mb-3">Quality Check</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Rigorous metallurgical testing and digital
                            verification.</p>
                    </div>
                    <div className="text-center group">
                        <div
                            className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center border-4 border-slate-950 mb-8 ring-1 ring-white/10 group-hover:ring-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500/10 shadow-2xl">
                            <span className="font-bebas text-orange-500 text-3xl">04</span>
                        </div>
                        <h4 className="text-xl font-bebas tracking-widest text-white mb-3">Delivery</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">Global multi-modal logistics with last-mile
                            precision.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
