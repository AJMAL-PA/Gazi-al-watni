import { useState } from 'react';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';
import SectionReveal from '../components/SectionReveal';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const subjectOptions = t('contactPage.form.subjectOptions');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(subjectOptions[0]?.value || 'custom-fabrication');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fullName.trim() || !message.trim()) {
      alert(t('contactPage.form.alertMissing'));
      return;
    }

    const subjectLabel = subjectOptions.find((option) => option.value === subject)?.label || subject;

    const formattedMessage = encodeURIComponent(
      t('contactPage.form.whatsappTemplate', {
        name: fullName,
        email: email || t('contactPage.form.notProvided'),
        subject: subjectLabel,
        message
      })
    );
    
    const whatsappUrl = `https://wa.me/966531104409?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <main className="pt-32 bg-slate-950 text-white min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs border border-orange-500/30 rounded-full px-4 py-1.5 bg-orange-500/5">
            {t('contactPage.heroBadge')}
          </span>
          <BlurText 
            text={t('contactPage.heroTitle')}
            delay={50}
            direction="top"
            className="text-5xl md:text-7xl font-bebas mt-8 mb-6 justify-center tracking-[0.1em]"
          />
          <p className="text-slate-400 font-inter text-xl max-w-3xl mx-auto leading-relaxed">
            {t('contactPage.heroBody')}
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-orange-500/30 transition-colors group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <span className="material-symbols-outlined text-orange-500 group-hover:text-white">mail</span>
              </div>
              <h3 className="text-xl font-bebas mb-2 tracking-widest">{t('contactPage.info.emailUs')}</h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed">gazialwatani@gmail.com</p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-orange-500/30 transition-colors group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <span className="material-symbols-outlined text-orange-500 group-hover:text-white">call</span>
              </div>
              <h3 className="text-xl font-bebas mb-2 tracking-widest">{t('contactPage.info.callUs')}</h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed">+966 53 110 4409</p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-orange-500/30 transition-colors group md:col-span-2">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <span className="material-symbols-outlined text-orange-500 group-hover:text-white">location_on</span>
              </div>
              <h3 className="text-xl font-bebas mb-2 tracking-widest">{t('contactPage.info.visitFacility')}</h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed">
                {t('contactPage.locationLine1')}<br/>
                {t('contactPage.locationLine2')}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
            <h3 className="text-xl font-bebas mb-6 tracking-widest text-orange-500">{t('contactPage.info.followProgress')}</h3>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20am%20interested%20in%20your%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-500 hover:border-green-500 transition-all duration-300 group"
                title={t('social.whatsapp')}
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:border-transparent transition-all duration-300 group"
                title={t('social.instagram')}
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                title={t('social.facebook')}
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="mailto:steelcoreglobal@gmail.com" 
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                title="Gmail"
              >
                <SiGmail className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl -mr-16 -mt-16"></div>
          <h2 className="text-3xl font-bebas mb-8 tracking-widest">{t('contactPage.formTitle')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">{t('contactPage.form.fullName')}</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 outline-none transition-colors" 
                  placeholder={t('contactPage.form.placeholderName')} 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">{t('contactPage.form.email')}</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 outline-none transition-colors" 
                  placeholder={t('contactPage.form.placeholderEmail')} 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">{t('contactPage.form.subject')}</label>
              <select 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 outline-none transition-colors appearance-none"
              >
                {subjectOptions.map((option) => (
                  <option key={option.value} className="bg-slate-900" value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">{t('contactPage.form.message')}</label>
              <textarea 
                rows="4" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500/50 outline-none transition-colors resize-none" 
                placeholder={t('contactPage.form.placeholderMessage')}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-bebas text-xl tracking-[0.2em] rounded-2xl transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] active:scale-95">
              {t('contactPage.form.send')}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Map/Facility Section placeholder */}
      <SectionReveal className="py-24 px-6 max-w-7xl mx-auto">
        <div className="h-[400px] bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center text-slate-500 font-inter italic">
          {t('contactPage.mapPlaceholder')}
        </div>
      </SectionReveal>

      {/* Bottom CTA Section */}
      <SectionReveal className="py-24 px-6 border-t border-white/5 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="text-orange-500 font-inter uppercase tracking-[0.3em] text-sm block">{t('contactPage.ctaBadge')}</span>
          <h2 className="text-4xl md:text-6xl font-bebas leading-tight tracking-[0.1em]">{t('contactPage.ctaTitleLine1')}<br/><span className="text-orange-600">{t('contactPage.ctaTitleHighlight')}</span></h2>
          <div className="pt-4">
            <a
              href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20would%20like%20to%20contact%20you%20regarding%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-white text-slate-950 font-bebas uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
            >
              {t('contactPage.ctaButton')}
            </a>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
