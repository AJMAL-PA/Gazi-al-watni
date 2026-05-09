import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const solutionItems = t('footer.solutionItems');
    const companyItems = t('footer.companyItems');

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
                <p className="text-slate-500 text-sm leading-relaxed">{t('footer.summary')}</p>
                <div className="flex gap-4">
                    <a 
                      href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
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
                <h4 className="text-white mb-6">{t('footer.solutions')}</h4>
                <ul className="space-y-4 text-sm">
                    {solutionItems.map((item) => (
                        <li key={item}><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">{item}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-white mb-6">{t('footer.company')}</h4>
                <ul className="space-y-4 text-sm">
                    {companyItems.map((item) => (
                        <li key={item}><a className="text-slate-500 hover:text-slate-100 transition-colors" href="#">{item}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-white mb-6">{t('footer.newsletter')}</h4>
                <p className="text-xs text-slate-500 mb-4">{t('footer.newsletterBody')}</p>
                <div className="flex gap-2">
                    <input
                        className="bg-slate-900 border border-white/5 rounded px-3 py-2 text-xs focus:outline-none w-full"
                        placeholder={t('footer.emailPlaceholder')} type="email" />
                    <button className="bg-primary text-primary-container px-4 py-2 rounded text-xs font-bold">{t('footer.join')}</button>
                </div>
            </div>
        </div>
        <div
            className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>{t('footer.copyright')}</div>
            <div className="flex gap-6">
                <a className="hover:text-white transition-colors" href="#">{t('footer.links.privacy')}</a>
                <a className="hover:text-white transition-colors" href="#">{t('footer.links.terms')}</a>
                <a className="hover:text-white transition-colors" href="#">{t('footer.links.compliance')}</a>
            </div>
        </div>
    </footer>
  );
}
