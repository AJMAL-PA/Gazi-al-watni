import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="font-headline-lg text-white mb-6">{t('contactSection.title')}</h2>
                    <p className="font-body-lg text-on-surface-variant mb-12">{t('contactSection.body')}</p>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t('contactSection.mainOffice')}</h4>
                                <p className="text-on-surface-variant">{t('contactSection.location')}</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t('contactSection.generalInquiries')}</h4>
                                <p className="text-on-surface-variant">steelcoreglobal@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">phone_in_talk</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t('contactSection.supportLine')}</h4>
                                <p className="text-on-surface-variant">+966 53 110 4409</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-64 rounded-3xl overflow-hidden glass-card">
                        <img className="w-full h-full object-cover grayscale opacity-50"
                            alt="A stylized map showing global trade routes."
                            data-location="London"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWpA6aaslpPrAK6P2LBs1BV5SJRsf02nmI0jWKtvjRysmAINqY0IiJtjNcSxZKx9bcGTGUvourCK-B6pJ1hZdZZrnQ1fbsoFf74DKSphnBQC_uTor9r7fGQqJdWMYf2a4UnSLh5XB0Lk5mVTx6KtdZ1UK9RfbRXHsx2kt7PPW_lc44hNvyINnZvH8DUAeL6RoQMB7PTcP3KMELDucu87iqBvy_Ney0RHD-UDKFJ1OwS6iR_0bGkoYpyzBIS-kmdAlYUpdGOANH07cl" />
                    </div>
                </div>
                <div className="glass-card p-12 rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="font-label-caps text-slate-400 mb-2 block" htmlFor="firstName">{t('contactSection.form.firstName')}</label>
                                <input
                                    id="firstName"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    type="text" />
                            </div>
                            <div>
                                <label className="font-label-caps text-slate-400 mb-2 block" htmlFor="lastName">{t('contactSection.form.lastName')}</label>
                                <input
                                    id="lastName"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    type="text" />
                            </div>
                        </div>
                        <div>
                            <label className="font-label-caps text-slate-400 mb-2 block" htmlFor="email">{t('contactSection.form.email')}</label>
                            <input
                                id="email"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                type="email" />
                        </div>
                        <div>
                            <label className="font-label-caps text-slate-400 mb-2 block" htmlFor="inquiryType">{t('contactSection.form.inquiryType')}</label>
                            <select
                                id="inquiryType"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                                {t('contactSection.form.options').map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-label-caps text-slate-400 mb-2 block" htmlFor="message">{t('contactSection.form.message')}</label>
                            <textarea
                                id="message"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                rows="4"></textarea>
                        </div>
                        <button
                            type="button"
                            className="metallic-btn w-full py-5 rounded-xl text-primary-container font-black uppercase tracking-widest text-sm shadow-xl">{t('contactSection.form.submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
