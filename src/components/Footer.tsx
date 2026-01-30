import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gold-200 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif italic text-emerald-950 mb-6">The Menagerie</h2>
          <p className="text-sm text-emerald-900/60 max-w-sm font-light leading-relaxed">
            Southlake's premier animal interaction estate. Private viewings by appointment only. High fashion, higher standards.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gold-600 mb-6 font-bold">The Estate</h4>
          <ul className="space-y-4 text-xs tracking-wide text-emerald-900/60">
            <li><a href="#" className="hover:text-emerald-950 transition-colors">Inhabitant Registry</a></li>
            <li><a href="#" className="hover:text-emerald-950 transition-colors">Private Hire</a></li>
            <li><a href="#" className="hover:text-emerald-950 transition-colors">Editorial Inquiry</a></li>
            <li><a href="#" className="hover:text-emerald-950 transition-colors">Boutique Stays</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gold-600 mb-6 font-bold">Contact</h4>
          <ul className="space-y-4 text-xs tracking-wide text-emerald-900/60 font-medium">
            <li>SOUTHLAKE, TEXAS</li>
            <li>MEMBERS@THEMENAGERIE.COM</li>
            <li>@THEMENAGERIE_SOUTHLAKE</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] tracking-widest text-emerald-900/40 uppercase">© 2024 The Menagerie at Southlake. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] tracking-widest text-emerald-900/40 uppercase hover:text-emerald-950">Privacy</a>
          <a href="#" className="text-[10px] tracking-widest text-emerald-900/40 uppercase hover:text-emerald-950">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;