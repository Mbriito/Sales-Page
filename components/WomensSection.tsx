import React from 'react';
import { Heart, Sparkles, BookOpen, Crown, Flower2, CheckCircle2, ArrowRight, Star, ShieldCheck, Laptop, Smartphone, Tablet } from 'lucide-react';

interface WomensSectionProps {
  onSelectCombo?: () => void;
  onSelectWomensOnly?: () => void;
}

export const WomensSection: React.FC<WomensSectionProps> = ({ onSelectCombo, onSelectWomensOnly }) => {
  const themesPreview = [
    {
      title: "Mulheres de Valor no Reino",
      desc: "Estudos inspiradores sobre Ester, Rute, Ana, Débora, Maria e Provérbios 31, revelando o propósito e a dignidade feminina segundo Deus.",
      badge: "Identidade & Propósito",
      icon: <Crown className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Cura Emocional e Renovação da Mente",
      desc: "Mensagens acolhedoras sobre como superar feridas do passado, ansiedade, rejeição e encontrar descanso e paz no amor incondicional do Pai.",
      badge: "Cura & Restauração",
      icon: <Heart className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Sabedoria no Lar e na Família",
      desc: "Sermões práticos para o fortalecimento do casamento, educação cristã dos filhos e como edificar a casa com mansidão e discernimento.",
      badge: "Edificação Familiar",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Mulheres que Oram e Intercedem",
      desc: "Ministrações poderosas sobre a autoridade da mulher na oração, guerra espiritual no lar, perseverança e milagres gerados no altar.",
      badge: "Oração & Intercessão",
      icon: <Flower2 className="w-6 h-6 text-rose-500" />
    }
  ];

  return (
    <section id="mulheres" className="py-24 bg-gradient-to-b from-[#fdf6f0] via-[#f8ede6] to-[#f5e6dd] text-stone-800 relative overflow-hidden border-y border-rose-200/60">
      {/* Elementos decorativos suaves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-300/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho com Badge Feminino */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-rose-100 text-rose-800 border border-rose-300/70 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Crown className="w-4 h-4 text-rose-600" /> NOVIDADE EXCLUSIVA PARA MINISTÉRIOS FEMININOS
          </span>

          <h2 className="text-3xl md:text-5xl font-black serif text-[#3b0d19] leading-tight mb-6">
            50 Temas de Culto <br />
            <span className="bg-gradient-to-r from-rose-700 via-pink-700 to-amber-700 bg-clip-text text-transparent">
              Para Mulheres
            </span>
          </h2>

          <p className="text-stone-700 text-lg md:text-xl font-light leading-relaxed">
            Sermões e estudos bíblicos profundos, preparados especialmente para 
            <strong> Chá de Mulheres, Congressos Femininos, Círculos de Oração, Encontros de Pastoras e Células.</strong>
          </p>
        </div>

        {/* Destaque Principal do Produto em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Card Esquerdo - Mockup e Destaque */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-[3rem] border border-rose-200 shadow-xl text-center group">
              <div className="absolute top-4 right-4 bg-rose-600 text-white px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md">
                Edição Especial
              </div>

              {/* Capa do Livro em Todos os Dispositivos */}
              <div className="overflow-hidden rounded-2xl shadow-xl border border-rose-200 my-4 relative group">
                <img 
                  src="/src/assets/images/ebook_devices_mockup_1785285805027.jpg" 
                  alt="Ebooks 50 Pregações Poderosas e 50 Temas para Mulheres em Notebook, Tablet e Smartphone" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-stone-950/80 p-3 text-rose-100 text-xs font-bold text-center">
                  📱 Notebook, Tablet e Celular (Word e PDF)
                </div>
              </div>

              {/* Box de Preço Individual do Produto */}
              <div className="mt-4 p-4 rounded-2xl bg-rose-50/80 border border-rose-200 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs text-stone-500 line-through">De R$ 147,00</span>
                  <div className="flex items-baseline gap-1 text-rose-950 font-black">
                    <span className="text-sm">R$</span>
                    <span className="text-3xl">34,99</span>
                  </div>
                </div>
                <a
                  href="#oferta"
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Ver Oferta
                </a>
              </div>

            </div>
          </div>

          {/* Card Direito - Conteúdo e Benefícios dos 50 Temas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-rose-200 shadow-md">
              <h3 className="text-2xl font-black text-[#3b0d19] serif mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-rose-600" />
                O Que Você Vai Encontrar Nesse Ebook Exclusivo:
              </h3>

              <ul className="space-y-4 mb-8 text-stone-700 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>Sermões Estruturados:</strong> Introdução cativante, tópicos bíblicos explicados, aplicações para o cotidiano feminino e encerramento em oração.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>Versículos e Contexto Histórico:</strong> Ricas análises teológicas sobre grandes mulheres da Bíblia sem complicação.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>Formato Word e PDF:</strong> Altere, adicione suas anotações pessoais ou imprima em poucos cliques.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                  <span><strong>Compatível com Todos os Dispositivos:</strong> Leia ou edite diretamente no seu Notebook, Celular ou Tablet.</span>
                </li>
              </ul>

              {/* Botões de Ação Direta */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-rose-100">
                <a
                  href="#oferta"
                  className="flex-1 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 hover:from-rose-800 hover:to-pink-800 text-white py-4 px-6 rounded-2xl font-extrabold text-center text-sm md:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 transition-all hover:scale-[1.02]"
                >
                  <BookOpen className="w-5 h-5" />
                  Garantir 50 Temas para Mulheres (R$ 34,99)
                </a>

                <a
                  href="#oferta"
                  className="bg-amber-500 hover:bg-amber-600 text-stone-950 py-4 px-6 rounded-2xl font-black text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  <Star className="w-4 h-4 fill-stone-950" />
                  Ver Combo Completo por R$ 49,99
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Amostra dos Temas em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themesPreview.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/90 p-6 rounded-3xl border border-rose-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-rose-100/80 rounded-2xl">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-800 bg-rose-100/60 px-3 py-1 rounded-full border border-rose-200">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#3b0d19] mb-2">{item.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-rose-100 flex items-center text-[11px] font-bold text-rose-700">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Mensagens completas & prontas
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
