import React from 'react';
import { BookOpen, Users, Shield, Star, Heart, Crown, Sparkles, Flame } from 'lucide-react';

export const ThemesSection: React.FC = () => {
  const themes = [
    { 
      icon: <BookOpen className="w-6 h-6 text-rose-700" />, 
      title: "Fundamentos da Fé & Graça", 
      desc: "Salvação, Oração, Jejum, Santidade, Perdão, Louvor, Avivamento e o Fruto do Espírito Santo.",
      tag: "Para Todos os Cultos" 
    },
    { 
      icon: <Crown className="w-6 h-6 text-rose-700" />, 
      title: "Identidade & Mulher de Deus", 
      desc: "Provérbios 31, Ester, Rute, Ana, Maria, Valor Feminino no Reino e Cura das Emoções.",
      tag: "Cultos de Mulheres" 
    },
    { 
      icon: <Users className="w-6 h-6 text-rose-700" />, 
      title: "Família & Vida Cristã", 
      desc: "Edificação do Casamento, Educação Cristã dos Filhos, Finanças no Lar, União e Harmonia Familiar.",
      tag: "Família & Casal" 
    },
    { 
      icon: <Flame className="w-6 h-6 text-rose-700" />, 
      title: "Autoridade Espiritual", 
      desc: "Armadura de Deus, Batalha Espiritual no Lar, Oração de Intercessão e Libertação pelo Nome de Jesus.",
      tag: "Círculo de Oração" 
    },
    { 
      icon: <Heart className="w-6 h-6 text-rose-700" />, 
      title: "Superação & Encorajamento", 
      desc: "Consolo nas Tribulações, Vitória sobre a Ansiedade, Esperança no Deserto e Restauração de Sonhos.",
      tag: "Cura & Animo" 
    },
    { 
      icon: <Star className="w-6 h-6 text-rose-700" />, 
      title: "Datas & Celebrações Especiais", 
      desc: "Dia das Mães, Chá das Mulheres, Aniversário de Ministério, Congressos, Páscoa e Encerramentos de Ano.",
      tag: "Eventos Especiais" 
    }
  ];

  return (
    <section className="py-24 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-700 text-xs font-black uppercase tracking-widest block mb-2">
            VARIEDADE BÍBLICA INCOMPARÁVEL
          </span>
          <h2 className="text-3xl md:text-5xl font-black serif text-[#3b0d19]">
            Temas Abrangentes Para Cada Ocasião
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-3">
            Mensagens alinhadas às necessidades reais da congregação e do público feminino.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, i) => (
            <div 
              key={i} 
              className="p-8 bg-[#fdfaf8] rounded-3xl border border-rose-100 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-rose-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-rose-100/70 rounded-2xl">
                    {theme.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-800 bg-rose-100/80 px-3 py-1 rounded-full border border-rose-200">
                    {theme.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#3b0d19] mb-2">{theme.title}</h3>
                <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">{theme.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-rose-100/60 text-[11px] font-bold text-rose-800 flex items-center gap-1.5">
                <Sparkles size={13} className="text-rose-600" /> Esboço Teológico Completo
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
