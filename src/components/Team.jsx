import { Link } from 'react-router-dom';

export default function Team() {
    const teamMembers = [
        {
            name: "Eng. Gazi Al-Mutairi",
            role: "Founder & CEO",
            initials: "GM",
            linkedin: "#",
            email: "ceo@gazialwatani.com"
        },
        {
            name: "Ahmed Al-Ahmadi",
            role: "Chief Operations Officer",
            initials: "AA",
            linkedin: "#",
            email: "operations@gazialwatani.com"
        },
        {
            name: "Sarah Jenkins",
            role: "Head of Supply Chain",
            initials: "SJ",
            linkedin: "#",
            email: "supply@gazialwatani.com"
        },
        {
            name: "Dr. Tariq Al-Fahad",
            role: "Technical Director",
            initials: "TF",
            linkedin: "#",
            email: "technical@gazialwatani.com"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-orange-500 font-bebas tracking-widest text-sm md:text-base uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">Our Leadership</span>
                    <h2 className="text-4xl md:text-7xl font-bebas tracking-wider text-white mt-4 uppercase">Meet Our Team</h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        An elite task force of industry veterans, engineers, and supply chain specialists dedicated to precision, reliability, and high-performance steel solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative group hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center text-center hover:border-orange-500/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-600/0 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                            {/* Stylized Badge Avatar */}
                            <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-white/10 group-hover:border-orange-500 group-hover:scale-105 transition-all duration-500 flex items-center justify-center shadow-lg">
                                {/* Decorative internal glow ring */}
                                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="text-4xl font-bebas text-orange-500 group-hover:text-white transition-colors duration-300 tracking-wider relative z-10">{member.initials}</span>
                            </div>

                            <h3 className="text-2xl font-bebas tracking-wide text-white mb-1 group-hover:text-orange-500 transition-colors duration-300 relative z-10">{member.name}</h3>
                            <span className="text-orange-500/80 uppercase font-bebas tracking-widest text-xs mb-6 relative z-10">{member.role}</span>

                            {/* Contact Links */}
                            <div className="flex items-center gap-4 relative z-10">
                                <a 
                                    href={member.linkedin} 
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-500 hover:text-white text-slate-400 transition-all duration-300 active:scale-95"
                                    title="LinkedIn"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a 
                                    href={`mailto:${member.email}`} 
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-500 hover:text-white text-slate-400 transition-all duration-300 active:scale-95"
                                    title="Email"
                                >
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
