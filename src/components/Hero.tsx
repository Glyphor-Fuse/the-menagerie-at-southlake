import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/the-menagerie-at-southlake/main/public/images/hero-estate.png" 
          alt="The Menagerie Estate" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-emerald-950/40" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center text-white px-4"
      >
        <span className="text-xs uppercase tracking-[0.5em] mb-6 block font-light opacity-80">A Departure From the Mundane</span>
        <h2 className="text-6xl md:text-8xl font-serif italic mb-8 leading-tight">
          Where Nature Meets <br />High Editorial
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gold-400" />
          <p className="text-sm uppercase tracking-[0.3em] font-light">The Estate of Living Art</p>
          <div className="h-[1px] w-12 bg-gold-400" />
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white opacity-60">
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;