import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF, FaTimes, FaList } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

export default function SocialFloatingBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-4 scale-90 md:scale-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 bg-black/80 backdrop-blur-xl border border-orange-500/20 p-2 md:p-3 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.15)]"
          >
            <a href="#" title="Facebook" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300">
              <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" title="YouTube" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" title="Instagram" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-all duration-300">
              <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a 
              href="https://wa.me/7052495749?text=Hello%20Gazi%20National%20Establishment%2C%20I%20am%20interested%20in%20your%20services." 
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-green-500 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 border border-orange-500/50 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300 z-50 active:scale-95"
      >
        {isOpen ? <FaTimes className="w-5 h-5 md:w-6 md:h-6" /> : <FaList className="w-5 h-5 md:w-6 md:h-6" />}
      </button>
    </div>
  );
}
