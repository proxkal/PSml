import React from 'react';
import { Container, Truck, Hammer, Anchor, Paintbrush, Pickaxe } from 'lucide-react';
import { motion } from 'framer-motion';

const containerServices = [
  {
    title: "Vente & Location",
    desc: "Leader au Gabon : Conteneurs maritimes et offshore neufs ou d'occasion. DNV 2.7-1 & ISO.",
    icon: <Container className="w-5 h-5" />,
    image: "/assets/bbscontainer/container bleu.jpg"
  },
  {
    title: "Aménagement & Customisation",
    desc: "Transformation sur mesure : Bureaux, ateliers, plomberie et électricité industrielle intégrée.",
    icon: <Hammer className="w-5 h-5" />,
    image: "/assets/bbscontainer/travaux-soudure-interne.jpg"
  },
  {
    title: "Manutention & Logistique",
    desc: "Opérations de levage et manutention sur sites pétroliers avec équipements certifiés.",
    icon: <Truck className="w-5 h-5" />,
    image: "/assets/bbscontainer/Projet Manutention Cimentation Sablage GOC/Projet manutention.jpg"
  },
  {
    title: "Cimentation & Sablage",
    desc: "Expertise technique en traitement de surface et travaux de cimentation industrielle.",
    icon: <Pickaxe className="w-5 h-5" />,
    image: "/assets/bbscontainer/Travaux génie civil.jpeg"
  },
  {
    title: "Peinture Bâtiment & Industriel",
    desc: "Finition et protection anticorrosion pour infrastructures industrielles et tertiaires.",
    icon: <Paintbrush className="w-5 h-5" />,
    image: "/assets/bbscontainer/travaux-peinture-externe.jpg"
  },
  {
    title: "Génie Civil & BTP",
    desc: "Réalisations d'envergure : Bancs de comptage GOC et infrastructures Assala Yendzi.",
    icon: <Anchor className="w-5 h-5" />,
    image: "/assets/bbscontainer/Travaux génie civil site Mboumba GOC banc de comptage.jpeg"
  }
];

const ContainerSolutions = () => {
  return (
    <section id="services" className="bg-[#050505] py-20 text-white border-y border-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#007A7A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-slate-800 pb-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
              Nos Services
            </h2>
            <p className="text-lg font-bold tracking-tight text-[#007A7A] uppercase">
              Expertise Industrielle Multi-Services au Gabon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {containerServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#007A7A]/50 transition-all duration-500 flex overflow-hidden min-h-[200px] sm:min-h-[240px]"
            >
              
              {/* Contenu Texte (Gauche) */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative z-10 bg-[#0a0a0a]">
                <div className="flex items-center gap-3 mb-3 text-[#007A7A]">
                  {service.icon}
                  <h3 className="text-xl md:text-2xl font-black uppercase italic leading-tight tracking-tight group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-semibold uppercase tracking-tight line-clamp-3">
                  {service.desc}
                </p>
              </div>

              {/* Image Verticale (Droite - Dynamique) */}
              <div className="w-24 sm:w-32 md:w-40 border-l border-[#1a1a1a] relative overflow-hidden group-hover:w-1/2 transition-all duration-700 ease-in-out shrink-0">
                <img 
                  src={service.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/80 group-hover:to-transparent transition-all duration-500"></div>
              </div>

              {/* Accentuation BBS */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#007A7A] group-hover:h-full transition-all duration-500 shadow-[2px_0_10px_rgba(0,122,122,0.5)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContainerSolutions;
