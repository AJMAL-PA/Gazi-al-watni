import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full border-t border-white/5 font-inter">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Gazi Alwatani Logo" className="h-10 w-auto object-contain bg-transparent" />
                    <span className="text-white font-bebas tracking-wider text-xl font-bold uppercase whitespace-nowrap">
                        GAZI ALWATANI
                    </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">Providing trustworthy and professional services while maintaining full compliance with Ministry of Commerce regulations.</p>
                <div className="flex gap-4">
                    <a 
                      href="https://wa.me/7052495749?text=Hello%20Gazi%20Alwatani%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-500 transition-all duration-300"
                    >
                        <FaWhatsapp className="text-lg" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 transition-all duration-300"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    >
                        <FaFacebookF className="text-lg" />
                    </a>
                </div>
            </div>
            <div>
                <h4 className="text-white mb-6">Solutions</h4>
                <ul className="space-y-4 text-sm">
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Aerospace Alloys</a>
                    </li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Structural Beams</a>
                    </li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Maritime Steel</a>
                    </li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Energy
                            Infrastructure</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white mb-6">Company</h4>
                <ul className="space-y-4 text-sm">
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Careers</a></li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Global Locations</a>
                    </li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Compliance</a></li>
                    <li><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">Investors</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white mb-6">Newsletter</h4>
                <p className="text-xs text-slate-500 mb-4">Quarterly insights on global steel markets and manufacturing
                    trends.</p>
                <div className="flex gap-2">
                    <input
                        className="bg-slate-900 border border-white/5 rounded px-3 py-2 text-xs focus:outline-none w-full"
                        placeholder="Email" type="email" />
                    <button className="bg-primary text-primary-container px-4 py-2 rounded text-xs font-bold">JOIN</button>
                </div>
            </div>
        </div>
        <div
            className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>© 2025 Gazi Alwatani. Registered with Ministry of Commerce (KSA).</div>
            <div className="flex gap-6">
                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                <a className="hover:text-white transition-colors" href="#">Compliance</a>
            </div>
        </div>
    </footer>
  );
}
