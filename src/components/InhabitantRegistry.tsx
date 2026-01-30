import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Resident {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const residents: Resident[] = [
  {
    id: 1,
    name: "Lord Barnaby",
    title: "Miniature Donkey in Residence",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-menagerie-at-southlake/main/public/images/resident-donkey.png",
    bio: "Barnaby prefers his oats on a silver tray and his siestas on red velvet."
  },
  {
    id: 2,
    name: "Countess Cleo",
    title: "Alpaca of Distinction",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-menagerie-at-southlake/main/public/images/resident-alpaca.png",
    bio: "Often found draped in Hermès silk, Cleo defines the term 'pasture chic'."
  },
  {
    id: 3,
    name: "The Marquis",
    title: "Pygmy Goat de Luxe",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-menagerie-at-southlake/main/public/images/resident-goat.png",
    bio: "A connoisseur of marble pedestals and high-altitude aestheticism."
  }
];

const ResidentCard = ({ resident }: { resident: Resident }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative group cursor-pointer aspect-[3/4] overflow-hidden bg-emerald-900 border-[8px] border-gold-100 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src={resident.image} 
        alt={resident.name}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ scale: isHovered ? 1.05 : 1 }}
      />
      
      {/* Lens Flare Overlay Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,245,210,0.4) 30%, transparent 60%)',
              filter: 'blur(40px)'
            }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/10 transition-colors" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-3xl font-serif italic mb-1">{resident.name}</h3>
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold-400 mb-4">{resident.title}</p>
        <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
          {resident.bio}
        </p>
      </div>
      
      {/* Gilded Inner Border Overlay */}
      <div className="absolute inset-2 border border-gold-400/20 pointer-events-none" />
    </motion.div>
  );
};

const InhabitantRegistry = () => {
  return (
    <section id="registry" className="py-32 px-6 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.5em] text-gold-600 mb-4 block font-semibold">The Inhabitant Registry</span>
            <h2 className="text-5xl md:text-6xl font-serif italic text-emerald-950 leading-tight">
              An Assembly of Exceptional Residents
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <p className="text-xs uppercase tracking-widest text-emerald-900/40">Volume I &bull; Spring Summer</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {residents.map((res) => (
            <ResidentCard key={res.id} resident={res} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InhabitantRegistry;