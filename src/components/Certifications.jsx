export default function Certifications() {
  return (
    <section className="py-12 md:py-24 border-y border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-8">
            <div
                className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                    <span className="font-bold text-white">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl">eco</span>
                    <span className="font-bold text-white">ISO 14001</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl">health_and_safety</span>
                    <span className="font-bold text-white">ISO 45001</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-4xl">language</span>
                    <span className="font-bold text-white">EN 1090-1</span>
                </div>
            </div>
        </div>
    </section>
  );
}
