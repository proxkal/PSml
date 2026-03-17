import React from 'react';
import { Container, Wrench, ShieldCheck, Truck, Droplets, Hammer, Anchor, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerServices = [
  {
    title: "Vente & Location",
    desc: "Leader au Gabon : Conteneurs maritimes et offshore neufs ou d'occasion.",
    icon: <Container className="w-6 h-6" />,
    tags: ["DNV 2.7-1", "Standard ISO"],
    image: "/assets/bbscontainer/container bleu.jpg"
  },
  {
    title: "Customisation & Aménagement",
    desc: "Transformation sur mesure : Bureaux, ateliers, plomberie et électricité intégrée.",
    icon: <Hammer className="w-6 h-6" />,
    tags: ["Bureaux", "Ateliers", "Vie de Base"],
    image: "/assets/bbscontainer/travaux-soudure-interne.jpg"
  },
  {
    title: "Récupération & Maintenance",
    desc: "Expertise sur sites pétroliers : Maintenance de toitures et structures modulaires.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tags: ["Maintenance", "Étanchéité"],
    image: "/assets/bbscontainer/equipe-toiture.jpg"
  },
  {
    title: "Ingénierie Pétrolière GOC",
    desc: "Projets majeurs : Pose de bancs de comptage et merlons sur le site GOC Mboumba.",
    icon: <Anchor className="w-6 h-6" />,
    tags: ["GOC Mboumba", "Banc de Comptage"],
    image: "/assets/bbscontainer/Travaux génie civil site Mboumba GOC banc de comptage.jpeg"
  },
  {
    title: "Génie Civil Assala",
    desc: "Réalisations d'envergure : Construction de la boulangerie sur le site Assala Yendzi.",
    icon: <Wrench className="w-6 h-6" />,
    tags: ["Assala Yendzi", "BTP Industriel"],
    image: "/assets/bbscontainer/Travaux génie civil site Yendzi Assala construction de la nouvelle boulangerie.jpeg"
  },
  {
    title: "Logistique & RH",
    desc: "Mise à disposition de personnel qualifié pour les opérations pétrolières au Gabon.",
    icon: <Truck className="w-6 h-6" />,
    tags: ["Main d'œuvre", "Logistique"],
    image: "/assets/bbscontainer/equipe bbs.jpeg"
  }
];

const ContainerSolutions = () => {
  return (
    <section id="services" className="bg-[#050505] py-16 text-white border-y border-[#1a1a1a] relative overflow-hidden">
      {/* Grille de fond millimétrée très sombre */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#007A7A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête compact */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">
              Nos Services
            </h2>
            <p className="text-sm md:text-base font-bold tracking-tight text-[#007A7A] uppercase">
              Ingénierie, Logistique & Solutions Conteneurs
            </p>
          </div>
        </div>

        {/* Matrice de Services Compacte */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {containerServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a0a] border border-[#1a1a1a] p-0 hover:border-[#007A7A]/50 transition-all duration-300 flex flex-col overflow-hidden h-[320px]"
            >
              
              {/* Partie Image (Hauteur fixe réduite) */}
              <div className="h-40 relative overflow-hidden shrink-0">
                <img 
                  src={service.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                
                {/* Icône flottante */}
                <div className="absolute bottom-4 left-4 p-2 bg-[#007A7A] text-white rounded shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              {/* Partie Texte (Contenu compact) */}
              <div className="flex-1 p-5 flex flex-col justify-start relative z-10 bg-[#0a0a0a]">
                <h3 className="text-lg font-black uppercase italic leading-tight mb-2 group-hover:text-[#007A7A] transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-semibold uppercase tracking-tight line-clamp-3">
                  {service.desc}
                </p>
                
                {/* Tags discrets */}
                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black bg-slate-900 text-slate-500 px-2 py-0.5 rounded border border-slate-800 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ligne latérale d'accentuation BBS Green */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#007A7A] group-hover:h-full transition-all duration-500 shadow-[4px_0_15px_rgba(0,122,122,0.4)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContainerSolutions;
