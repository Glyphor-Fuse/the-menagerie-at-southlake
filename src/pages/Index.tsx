import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import InhabitantRegistry from '@/components/InhabitantRegistry';
import EstateManifesto from '@/components/EstateManifesto';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory-50 selection:bg-gold-200 selection:text-gold-900">
      <Navigation />
      <main>
        <Hero />
        <InhabitantRegistry />
        <EstateManifesto />
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif italic mb-8">Join the Registry</h2>
            <p className="text-sm uppercase tracking-widest text-emerald-900/60 mb-12">Request an Invitation for Private Viewings</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-ivory-100 border-none px-6 py-4 text-xs tracking-widest focus:ring-1 focus:ring-gold-400 outline-none"
              />
              <button className="bg-emerald-950 text-white px-8 py-4 text-xs tracking-[0.3em] font-medium hover:bg-gold-600 transition-colors">
                REQUEST
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;