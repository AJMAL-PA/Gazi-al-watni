import React from 'react';
import BlurText from '../components/BlurText';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import service1Img from '../assets/service 1.jpeg';
import powderCoatingImg from '../assets/powder coat.jpeg';
import brandingImg from '../assets/branding.jpg';
import SectionReveal from '../components/SectionReveal';

const services = [
  {
    id: '01',
    title: 'Precision Cutting & Bending',
    desc: 'Our state-of-the-art CNC cutting and forming technologies ensure unparalleled accuracy for high-tolerance steel shaping. We bend, cut, and shape raw materials to your exact specifications, reducing waste and accelerating project timelines.',
    details: 'Equipped with the latest laser and plasma cutting systems, we can handle materials of varying thicknesses with micro-millimeter precision. Our bending capabilities include advanced press brakes that ensure consistent angles and complex geometries for every component.',
    img: service1Img
  },
  {
    id: '02',
    title: 'Heavy Steel Fabrication',
    desc: 'We specialize in robust structural assembly and heavy fabrication works for large-scale industrial projects.',
    details: 'From massive steel beams to complex industrial frameworks, our fabrication processes are designed for durability and strength. We follow strict international welding standards to ensure that every structural element can withstand extreme loads and environmental conditions.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Industrial Powder Coating',
    desc: 'Protect your investments with our durable, high-grade powder coating solutions.',
    details: 'Our powder coating facility features multi-stage cleaning and pretreatment processes to ensure maximum adhesion and corrosion resistance. We offer a wide range of colors and finishes, all baked at high temperatures to create a finish that is significantly tougher than conventional liquid paint.',
    img: brandingImg
  },
  {
    id: '04',
    title: 'Commercial Interior Solutions',
    desc: 'Elevate your commercial space with custom metalwork and aesthetic steel solutions.',
    details: 'We blend functionality with high-end design. Our team works closely with architects and interior designers to create bespoke metal features, from floating staircases and decorative partitions to specialized furniture and light fixtures.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Exhibition & Branding',
    desc: 'Make a lasting impression with bespoke metal fabrication for structural brand installations.',
    details: 'We specialize in monumental signage and exhibition stands that demand attention. Using a combination of metal fabrication and integrated lighting solutions, we build installations that are not only structurally sound but also visually stunning.',
    img: powderCoatingImg
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 bg-slate-950 text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-tech font-bold tracking-[0.3em] uppercase text-sm">Industrial Excellence</span>
          <BlurText 
            text="Comprehensive Steel Solutions"
            delay={50}
            direction="top"
            className="text-5xl md:text-7xl font-bebas mt-6 mb-8 justify-center tracking-[0.1em]"
          />
          <p className="text-slate-400 font-inter text-xl max-w-3xl mx-auto leading-relaxed">
            From initial design to final installation, we provide a full spectrum of high-performance steel services tailored to meet the rigorous demands of modern industry.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto space-y-32">
        {services.map((service, idx) => (
          <SectionReveal 
            key={service.id}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
          >
            {/* Image Column */}
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-orange-600/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bebas text-orange-500/30">{service.id}</span>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bebas font-medium tracking-[0.1em]">{service.title}</h2>
              <p className="text-orange-500 font-semibold text-lg">{service.desc}</p>
              <p className="text-slate-400 text-lg leading-relaxed">
                {service.details}
              </p>
              <div className="pt-4">
                <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 uppercase tracking-wider text-xs">
                  Inquire About This Service
                </button>
              </div>
            </div>
          </SectionReveal>
        ))}
      </section>

      {/* CTA Section */}
      <SectionReveal className="py-24 px-6 bg-white/5 border-y border-white/5 font-inter">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bebas tracking-[0.1em]">Ready to Start Your Project?</h2>
          <p className="text-slate-400 text-lg">
            Our team of experts is standing by to help you engineer the perfect solution for your steel fabrication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/7052495749?text=Hello%20Gazi%20National%20Establishment%2C%20I%20would%20like%20to%20speak%20with%20your%20team%20regarding%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.3)] text-center"
            >
              CONTACT OUR SALES TEAM
            </a>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
