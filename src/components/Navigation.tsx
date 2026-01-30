import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gold-200/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-emerald-900/60">
          <a href="#registry" className="hover:text-gold-600 transition-colors">The Residents</a>
          <a href="#manifesto" className="hover:text-gold-600 transition-colors">Philosophy</a>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-serif italic tracking-tight text-emerald-950">
            The Menagerie <span className="text-xs block text-center uppercase tracking-[0.4em] not-italic mt-1 text-gold-600">Southlake</span>
          </h1>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-emerald-900/60">
          <a href="#" className="hover:text-gold-600 transition-colors">Visits</a>
          <a href="#" className="hover:text-gold-600 transition-colors">Private Hire</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;