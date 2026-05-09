import { useLanguage } from '../i18n/LanguageContext';

export default function Team() {
    const { t } = useLanguage();
    const leader = {
        ...t('team.leader'),
        linkedin: '#',
        email: 'ceo@gazialwatani.com'
    };

    return (
        <section className="py-20 md:py-32 bg-slate-950 overflow-hidden relative">
            {/* Background decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-orange-500 font-bebas tracking-widest text-sm md:text-base uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">{t('team.badge')}</span>
                    <h2 className="text-4xl md:text-7xl font-bebas tracking-wider text-white mt-4 uppercase">{t('team.title')}</h2>
                </div>

                {/* Single Premium Executive Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="group relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-orange-500/40 transition-all duration-700 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-float">
                        
                        {/* Interactive light sweep effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
                        
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/0 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Left Column: Avatar Badge */}
                        <div className="flex-shrink-0 relative">
                            {/* Decorative Outer Pulsing Ring */}
                            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md group-hover:bg-orange-500/30 group-hover:scale-110 transition-all duration-700"></div>
                            
                            {/* Rotating Border on hover */}
                            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-orange-500 to-red-600 opacity-30 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000 ease-in-out animate-spin-slow"></div>
                            
                            {/* Main Avatar Container */}
                            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center overflow-hidden shadow-2xl z-10">
                                {/* Subtle inner gradient */}
                                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-slate-800"></div>
                                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Monogram */}
                                <span className="text-5xl md:text-6xl font-bebas text-orange-500 group-hover:text-white group-hover:scale-105 transition-all duration-500 tracking-wider relative z-10 select-none">
                                    {leader.initials}
                                </span>

                                {/* Tech-like overlay grid */}
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
                            </div>

                            {/* Verification/Active Badge */}
                            <div className="absolute bottom-1 right-1 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg border border-slate-950 z-20">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                                {t('team.active')}
                            </div>
                        </div>

                        {/* Right Column: Bio & Info */}
                        <div className="flex-grow text-center md:text-left relative z-10">
                            {/* Title / Role Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                <span className="text-orange-500 font-bebas tracking-widest text-xs uppercase">{leader.role}</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-4xl md:text-5xl font-bebas text-white tracking-wide mb-6 group-hover:text-orange-500 transition-colors duration-500">
                                {leader.name}
                            </h3>

                            {/* Actions / Contact Links */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                <a 
                                    href={leader.linkedin}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-slate-300 hover:text-white transition-all duration-300 active:scale-95 text-xs font-semibold font-inter"
                                >
                                    <svg className="w-4 h-4 fill-current text-orange-500 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                    {t('team.linkedin')}
                                </a>
                                <a 
                                    href={`mailto:${leader.email}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white transition-all duration-300 active:scale-95 text-xs font-semibold font-inter shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
                                >
                                    <span className="material-symbols-outlined text-base">mail</span>
                                    {t('team.getInTouch')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
