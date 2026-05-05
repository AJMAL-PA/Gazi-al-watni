export default function Industries() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-10 md:mb-16">
                <span className="text-primary font-label-caps mb-4 block uppercase tracking-widest text-xs md:text-sm">Sectors</span>
                <h2 className="font-headline-lg text-3xl md:text-5xl lg:text-6xl text-white">Empowering Global Growth</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="text-center group p-8 glass-card rounded-[2.5rem] hover:border-primary/50 transition-all duration-500">
                    <div
                        className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center shimmer-hover transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                        <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors">architecture</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white mb-4">Construction</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">Foundational steel for skyscrapers and civic
                        infrastructure.</p>
                </div>
                <div className="text-center group p-8 glass-card rounded-[2.5rem] hover:border-primary/50 transition-all duration-500">
                    <div
                        className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center shimmer-hover transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                        <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors">directions_car</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white mb-4">Automotive</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">Lightweight, high-strength alloys for modern mobility.
                    </p>
                </div>
                <div className="text-center group p-8 glass-card rounded-[2.5rem] hover:border-primary/50 transition-all duration-500">
                    <div
                        className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center shimmer-hover transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                        <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors">precision_manufacturing</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white mb-4">Manufacturing</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">Component materials for heavy machinery and tooling.</p>
                </div>
                <div className="text-center group p-8 glass-card rounded-[2.5rem] hover:border-primary/50 transition-all duration-500">
                    <div
                        className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center shimmer-hover transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                        <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors">oil_barrel</span>
                    </div>
                    <h3 className="text-2xl font-bebas tracking-wider text-white mb-4">Infrastructure</h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">Pipeline systems and renewable energy frameworks.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
