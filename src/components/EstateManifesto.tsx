import React from 'react';

const EstateManifesto = () => {
  return (
    <section id="manifesto" className="relative py-40 overflow-hidden bg-emerald-950 text-white">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <img src="https://raw.githubusercontent.com/Glyphor-Fuse/the-menagerie-at-southlake/main/public/images/manifesto-interior.png" className="w-full h-full object-cover grayscale" alt="texture" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h3 className="text-xs uppercase tracking-[0.6em] text-gold-400 mb-12 block">The Philosophy</h3>
            <p className="text-4xl md:text-5xl font-serif italic leading-snug mb-12">
              "We have divorced the petting zoo from the mud. In its place, we offer a curated encounter where the raw spirit of nature meets the manicured elegance of high estate living."
            </p>
            <div className="h-[1px] w-24 bg-gold-600 mb-12" />
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold-400 mb-4 font-bold">Uncompromising Luxury</h4>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  Every encounter is staged within our meticulously designed Southlake grounds, ensuring an atmosphere of absolute refinement.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gold-400 mb-4 font-bold">The Editorial Lens</h4>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  We treat our residents not as exhibits, but as subjects of high-fashion photography. Each interaction is a frame of living history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateManifesto;