import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop', alt: 'Precision Welding', span: 'col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop', alt: 'Warehouse Storage', span: 'col-span-1' },
    { src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop', alt: 'Global Logistics', span: 'col-span-1 row-span-1 sm:row-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop', alt: 'CNC Metal Cutting', span: 'col-span-1' },
    { src: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop', alt: 'Heavy Machinery', span: 'col-span-1 sm:col-span-2' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', alt: 'Commercial Interiors', span: 'col-span-1 sm:col-span-2' }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black text-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs md:text-sm">Visual Showcase</span>
                <BlurText 
                    text="Industrial Gallery"
                    delay={50}
                    direction="top"
                    className="text-3xl md:text-5xl lg:text-6xl font-bebas tracking-normal mt-4 drop-shadow-md justify-center"
                />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
                {images.map((img, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`relative group overflow-hidden rounded-2xl shadow-lg ${img.span}`}
                    >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</span>
                        </div>
                        {/* Image */}
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 md:mt-16 flex justify-center">
                <Link 
                    to="/gallery"
                    className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 uppercase tracking-wider text-sm flex items-center justify-center gap-3 group"
                >
                    <span>View Full Gallery</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    </section>
  );
}
