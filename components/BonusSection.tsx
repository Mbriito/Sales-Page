import React from 'react';
import { Gift, Sparkles, CheckCircle2 } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const bonuses = [
    { 
      id: 1, 
      title: "Guia Prático de Oratória & Comunicação", 
      desc: "Técnicas bíblicas e profissionais para melhorar sua dicção, postura, entonação de voz e presença no púlpito.", 
      value: "47,00" 
    },
    { 
      id: 2, 
      title: "10 Esboços Visuais Para Células e Estudos", 
      desc: "Estudos prontos para pequenos grupos, escolas bíblicas e reuniões de edificação no lar.", 
      value: "37,00" 
    },
    { 
      id: 3, 
      title: "Checklist do Pregador Eficaz", 
      desc: "Lista passo a passo com tudo o que você deve conferir antes de subir ao púlpito para ministrar.", 
      value: "27,00" 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#2d0a14] via-[#380d19] to-[#1f060d] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-600/30 text-rose-300 border border-rose-500/30 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> PRESENTES EXCLUSIVOS DA SUA COMPRA
          </span>

          <h2 className="text-3xl md:text-5xl font-black mb-4 serif text-rose-50">
            Bônus Especiais Inclusos Gratuitamente
          </h2>
          <p className="text-rose-200/80 text-sm md:text-base font-light">
            Ao garantir seu e-Book hoje, você recebe instantaneamente estes 3 materiais complementares:
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="bg-stone-900/80 border border-rose-900/40 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-rose-500/50 transition-all text-left flex flex-col justify-between"
            >
              <Gift className="w-16 h-16 text-rose-500/10 absolute -top-3 -right-3 group-hover:scale-125 transition-transform pointer-events-none" />
              
              <div>
                <span className="inline-block px-4 py-1 bg-rose-700 text-white text-[10px] font-extrabold rounded-full mb-6 tracking-widest uppercase shadow-sm">
                  BÔNUS #{bonus.id}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{bonus.title}</h3>
                <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed mb-6">{bonus.desc}</p>
              </div>

              <div className="pt-4 border-t border-rose-900/40 flex items-center justify-between">
                <span className="text-xs text-stone-400">Valor Normal:</span>
                <span className="text-amber-300 font-extrabold text-sm line-through">R$ {bonus.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Box resumo de valor */}
        <div className="bg-gradient-to-r from-rose-950/80 via-[#420f1d] to-rose-950/80 p-8 md:p-12 rounded-[3rem] border border-amber-400/40 inline-block max-w-2xl w-full shadow-2xl">
          <p className="text-rose-200/90 uppercase tracking-widest font-extrabold text-xs mb-2">
            Valor Total dos Bônus:
          </p>
          <div className="text-4xl md:text-6xl font-black text-rose-300/40 mb-2 serif tracking-tight line-through">
            R$ 111,00
          </div>
          <div className="text-2xl md:text-4xl font-black text-amber-300 uppercase tracking-tight mb-8">
            100% GRÁTIS PARA VOCÊ HOJE!
          </div>

          <a 
            href="#oferta" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 hover:from-rose-800 hover:to-pink-800 text-white px-10 py-5 rounded-2xl font-black text-base md:text-lg uppercase tracking-wider transition-all shadow-xl hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            GARANTIR MEU ACESSO COM BÔNUS
          </a>
        </div>

      </div>
    </section>
  );
};
