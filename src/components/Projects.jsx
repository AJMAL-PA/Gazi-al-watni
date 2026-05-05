export default function Projects() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-6xl font-bebas tracking-wider text-white mb-10 md:mb-16 text-center">Signature Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt="A modern glass and steel skyscraper reaching into a dark navy twilight sky."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwgJ8nHYgBuUXK-EcFmyEvRTplpiXcTXGlQn_JDv_ENTge11PUK1MJ04Kf2CKBCwN7xX3ySD2-Y1JfOZaCnXr7DtZwW4WS9n9hdw7dv_A4txvi5_yPXOgrlZtCvm_sfbO262r0wK-9hSwtgfERPnSJTAsOrkY4UyDEyccRZd_DbcXEfbWtWRic1f6SA-IY3O4hPI3v7crZeH_RcfttedL4rLkY8NUb8xcUDt9JoDZRHIHE3pOizICGrd_knBoUzuydA6viqVoK4pvw" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                        <span className="text-sm font-bebas tracking-[0.3em] text-orange-500 mb-2 uppercase">COMMERCIAL</span>
                        <h3 className="text-4xl font-bebas leading-[0.9] text-white mb-4 uppercase">The Meridian<br/>Tower</h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-inter max-w-[280px]">12,000
                            tons of structural I-beams and custom cladding.</p>
                    </div>
                </div>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt="A vast suspension bridge at dusk."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKcUiGucReV1F_hZEgnZm60xSg69kESPBUEJ6UGOT5r5j5DbwzqZu4r23I0IxiAIQB0sZ7glpV83yy0iJ2IY4JIlF38XPuXU45PlGLhqSO3uupcHrnCdXTmpbwbhlnuN7Gqt2GdtmX7lPUU3mu_qvdffZ6suF1Wx5svYXw6Bka3FdEI_zb4wH3Z5YoBllUEkoFYzjP9QzdEc6k3SCRSZ8hZYbm1nUwq20eWcXGojGEzPGj5CGgdXhWSxO3-U7eT4YotiY2sPXeqXka" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                        <span className="text-sm font-bebas tracking-[0.3em] text-orange-500 mb-2 uppercase">INFRASTRUCTURE</span>
                        <h3 className="text-4xl font-bebas leading-[0.9] text-white mb-4 uppercase">East-Link<br/>Bridge</h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-inter max-w-[280px]">
                            Corrosion-resistant marine-grade alloy plating.</p>
                    </div>
                </div>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt="A clean, futuristic industrial plant."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgVp2oqlzRK5789hmm2aFHBKOXXndD3eQJE7PPJwO43VMfMdTZNBsfpei8nvjt3AaTuEnIDntaaVBjWuUmbmdkQX4qjPlDIAGb-Xtswc8EGRe9WaWLhhYXasCIhzJO8pWKJQ6ePQxMEZRGFnVE5qZTDNFD6dHediKdROCEqoE4fVI9jol3SAk-hOyPg2qb7CFZnv1xhmQs1vS0gNMNwQVaSxkZ1AvPynZ41A13vCh3OMf2IDTNdiRRCEb2oR6LuqSx9va994SJ5kNt" />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                        <span className="text-sm font-bebas tracking-[0.3em] text-orange-500 mb-2 uppercase">INDUSTRIAL</span>
                        <h3 className="text-4xl font-bebas leading-[0.9] text-white mb-4 uppercase">Giga-Plant<br/>X</h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-inter max-w-[280px]">Full
                            facility steel supply including high-pressure tubing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
