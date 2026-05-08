import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';
import SectionReveal from '../components/SectionReveal';

import gallery1 from '../assets/gallery_1.jpg';
import gallery2 from '../assets/gallery_2.jpg';
import gallery3 from '../assets/gallery_3.jpg';
import gallery4 from '../assets/gallery_4.jpg';
import gallery5 from '../assets/gallery_5.jpg';
import gallery6 from '../assets/gallery_6.jpg';
import gallery7 from '../assets/gallery_7.jpg';
import gallery8 from '../assets/gallery_8.jpg';
import gallery9 from '../assets/WhatsApp Image 2026-05-04 at 7.28.02 PM copy.jpeg';

const categories = ['All', 'Fabrication', 'Logistics', 'Interior'];

const galleryItems = [
  { id: 1, category: 'Fabrication', src: gallery1, title: 'Steel Plate Rolling', desc: 'Heavy-duty rolling machines processing industrial steel plates.' },
  { id: 2, category: 'Fabrication', src: gallery2, title: 'Structural Welding', desc: 'Precision manual arc welding for high-strength steel beams.' },
  { id: 3, category: 'Logistics', src: gallery3, title: 'Heavy Logistics', desc: 'Transporting massive pre-fabricated steel structures to project sites.' },
  { id: 4, category: 'Interior', src: gallery4, title: 'Architectural Metalwork', desc: 'Polished metal frames and structures for modern commercial spaces.' },
  { id: 5, category: 'Fabrication', src: gallery5, title: 'Precision Assembly', desc: 'Close-up of precise component fitting for steel structures.' },
  { id: 6, category: 'Fabrication', src: gallery6, title: 'Industrial Plasma Cutting', desc: 'High-speed CNC plasma cutting of thick steel plates.' },
  { id: 7, category: 'Fabrication', src: gallery7, title: 'Metal Fabrication Line', desc: 'Automated assembly line processing heavy steel parts.' },
  { id: 8, category: 'Fabrication', src: gallery8, title: 'Structural Engineering', desc: 'On-site engineering inspection of major steel frameworks.' },
  { id: 9, category: 'Fabrication', src: gallery9, title: 'Bespoke Steel Components', desc: 'Custom steel fabrication and finish designed for highly-demanding industrial environments.' }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 font-inter uppercase tracking-[0.3em] text-sm block mb-4">Project Showcase</span>
          <BlurText 
            text="The Industrial Portfolio"
            delay={50}
            direction="top"
            className="text-5xl md:text-8xl font-bebas mb-8 justify-center tracking-normal"
          />
          <p className="text-slate-400 font-inter text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of strength, precision, and architectural elegance through our most significant project milestones.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <SectionReveal className="pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 md:px-7 md:py-2.5 rounded-full font-inter uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border flex-shrink-0 ${
                filter === cat 
                  ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionReveal>

      {/* Gallery Grid */}
      <SectionReveal className="py-12 px-6 min-h-[800px]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-orange-500 font-inter uppercase tracking-widest text-xs mb-2">{item.category}</span>
                    <h3 className="text-2xl font-bebas mb-2 tracking-normal">{item.title}</h3>
                    <p className="text-slate-300 font-inter text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="relative py-32 px-6 overflow-hidden bg-slate-950">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={gallery2}
            alt="CTA background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        {/* Glow accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block text-orange-500 font-inter uppercase tracking-[0.4em] text-xs font-bold border border-orange-500/30 rounded-full px-5 py-2 bg-orange-500/10">
            Let's Build Something Great
          </span>

          <h2 className="text-5xl md:text-7xl font-bebas tracking-tight leading-tight text-white">
            Ready to Start<br />
            <span className="text-orange-500">Your Next Project?</span>
          </h2>

          <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Whether it's precision fabrication, structural steel, or large-scale industrial installations — our team is ready to bring your vision to life with uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/966531104409?text=Hello%20Gazi%20Alwatani%2C%20I%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bebas uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] hover:scale-105 transition-all duration-300 text-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="/services"
              className="px-10 py-5 bg-white/5 border border-white/20 text-white font-bebas uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 text-lg"
            >
              View Our Services
            </a>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
