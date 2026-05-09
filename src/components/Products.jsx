import { useLanguage } from '../i18n/LanguageContext';

export default function Products() {
    const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
                <div>
                                        <span className="text-primary font-label-caps mb-2 md:mb-4 block text-xs md:text-sm">{t('products.badge')}</span>
                                        <h2 className="font-headline-lg text-3xl md:text-5xl lg:text-6xl text-white">{t('products.title')}</h2>
                </div>
                <a className="text-primary hover:text-white transition-colors font-label-caps border-b border-primary pb-1 text-xs md:text-sm"
                                        href="#">{t('products.viewAll')}</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                {/* Main Product */}
                <div className="md:col-span-8 glass-card rounded-3xl overflow-hidden relative group cursor-pointer">
                    <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        alt="High-quality cold-rolled steel coils"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmYbTpJCBeCqrP4K9WzouiN73YNfCFXkk6UewtKFBe7eUKsB9MH-TJeemOyO-Eda58SI4uYR22pHIlKlUbNvrtW4iC7YlUrL8qNGmBsph_cosVssqh0MKtuAjrBcT5oHrNeLiotUw1krNsxgBAU9h7e-N3GhSvggpSZ3qP7DQYmSSlGr1cMpiYYGEp027vpiuvj_hWtSkHMGod4Dr5hGPso2Z1QtBrFQBTMf_miAmbYsA5YOJenTqeipiqdRWT3WlWCBtC61p_Vuzt" />
                    <div
                        className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
                        <h3 className="text-3xl font-black text-white mb-2">{t('products.items.steelCoils.title')}</h3>
                        <p className="text-on-surface-variant max-w-md">{t('products.items.steelCoils.desc')}</p>
                    </div>
                </div>
                {/* Small Product 1 */}
                <div className="md:col-span-4 glass-card rounded-3xl overflow-hidden relative group cursor-pointer">
                    <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        alt="Modern geometric structural steel beams"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZjL5YGGyB9XYWXBOgc4DPF9DKSVJuG5ymS_38j27_f5t577mS5HumXYEHj8ZM37ypvnbcSTL9GTedoSeaMnoaxy_39jqMYow2IwFSZZMot9no4TVWFQUqH4bDVdpNsTge4Zj-nHJyAFzVC14cllLGJsZSRP8PhWDwOJhlpRV2Ij_D0r45G4zCDnQxRsm2jFz6PPua5Da4jMTNkhcAQu1la1dNiBc-YHkH41cyLFZV06VkZpd9K4VCp9U2FOgJ33Q_QxY_HCUSrq8" />
                    <div
                        className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
                        <h3 className="text-xl font-bold text-white mb-1">{t('products.items.structuralSteel.title')}</h3>
                        <p className="text-xs text-on-surface-variant">{t('products.items.structuralSteel.desc')}</p>
                    </div>
                </div>
                {/* Small Product 2 */}
                <div className="md:col-span-4 glass-card rounded-3xl overflow-hidden relative group cursor-pointer">
                    <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        alt="Precision-manufactured steel pipes"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-dthFYuZhgQbtRqsyT7-y5zzwVu7F1ay_Sx1bYmXbOUr4ZUyyVERdCJKk6RFaNdhf6d6JKR-thAHqtOAn0_-x35W49H3BG5kbxUfpym6DPmASDQKSvv7UV9fDfgupcaMm1ZIRVLE1YinhV0sfwpLshH1oHnwQ_KyI8sGPQndXL1liQw7eYjxbQHIkLjJJoN7pa-UzricX1gfrPGy3Jw8FjxTEG3nVIpgxssk5Ygx_067pVPQfZmfx84bcdAkQnGiJwofFgPvN21Ca" />
                    <div
                        className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
                        <h3 className="text-xl font-bold text-white mb-1">{t('products.items.pipesTubes.title')}</h3>
                        <p className="text-xs text-on-surface-variant">{t('products.items.pipesTubes.desc')}</p>
                    </div>
                </div>
                {/* Small Product 3 */}
                <div className="md:col-span-8 glass-card rounded-3xl overflow-hidden relative group cursor-pointer">
                    <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                        alt="Large-scale industrial steel sheets"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbz0eHa7A8Dl_BFi_cfddi6-mvYHuCJr-vwOLQFXFxNb6AE0KHUUUhpJuuqMVDbsuUsFa-JafK4WMeTie9R2s1vjgSX1c1IyqnuGevkCo2gb2gFN79UZgxin9MsC6VpcbL_Z40kN7fwlodNP1T0bqIMl0_B7j60c4Y4-6U-oIly5oRVyfcbN06J_K2Mttqd7-em7cURTrSYw0JomTKEgCgbXS00tP8kRk3_zdQi3_SqV05ED93ifTBYQhScwm-0nBx6vJVTKVDDIlb" />
                    <div
                        className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-2">{t('products.items.industrialSheets.title')}</h3>
                        <p className="text-sm text-on-surface-variant">{t('products.items.industrialSheets.desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
