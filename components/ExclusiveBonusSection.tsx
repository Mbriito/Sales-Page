import React, { useState } from 'react';
import { 
  Gift, 
  Sparkles, 
  Mic, 
  CalendarDays, 
  HeartHandshake, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Image as ImageIcon, 
  Upload,
  BookOpen,
  FileText,
  Users,
  Check
} from 'lucide-react';

interface ExclusiveBonusSectionProps {
  checkoutUrl?: string;
}

export const ExclusiveBonusSection: React.FC<ExclusiveBonusSectionProps> = ({
  checkoutUrl = "https://pay.kiwify.com.br/6ghqN34"
}) => {
  // URLs customizáveis de imagem caso o usuário queira colar os links das capas 3D diretamente
  const [bonus1Img, setBonus1Img] = useState<string>("");
  const [bonus2Img, setBonus2Img] = useState<string>("");
  const [bonus3Img, setBonus3Img] = useState<string>("");
  const [showUrlInputs, setShowUrlInputs] = useState<boolean>(false);

  const bonusData = [
    {
      id: "bonus-1",
      number: "1",
      badge: "BÔNUS 1 • GRÁTIS HOJE",
      icon: Mic,
      title: "Bônus 1 – Guia Prático de Oratória Cristã",
      description: "Foco em respiração/pausas, contato visual e dinâmica vocal para combater o nervosismo no altar.",
      details: [
        "Técnicas de respiração e pausas estratégicas",
        "Contato visual seguro com toda a congregação",
        "Modulação e dinâmica vocal sem travar no altar"
      ],
      customImg: bonus1Img,
      setCustomImg: setBonus1Img,
      placeholderLabel: "Capa 3D: Guia Prático de Oratória Cristã",
      themeColor: "from-amber-400 to-amber-600",
      accentBorder: "hover:border-amber-400",
      iconBg: "bg-amber-400/20 text-amber-300",
      defaultRender: (
        <div className="w-full h-full bg-[#0b1b33] rounded-xl flex flex-col justify-between p-4 text-center border border-amber-400/40 relative overflow-hidden shadow-inner">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="flex items-center justify-between text-[10px] text-amber-300/80 font-bold uppercase tracking-wider">
            <span>Oratória Sacra</span>
            <span className="bg-amber-400/20 px-2 py-0.5 rounded text-amber-300">Formato PDF</span>
          </div>
          <div className="my-auto py-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md mb-2">
              <Mic size={20} />
            </div>
            <h5 className="text-sm font-black serif text-white uppercase tracking-wide leading-tight">
              O Púlpito<br /><span className="text-amber-300">Sem Medo</span>
            </h5>
            <p className="text-[10px] text-slate-300 mt-1">Guia Prático de Oratória Cristã</p>
          </div>
          <div className="text-[9px] text-slate-400 border-t border-slate-800 pt-1.5 flex items-center justify-center gap-1">
            <Check size={11} className="text-emerald-400" /> Domine o nervosismo no altar
          </div>
        </div>
      )
    },
    {
      id: "bonus-2",
      number: "2",
      badge: "BÔNUS 2 • GRÁTIS HOJE",
      icon: CalendarDays,
      title: "Bônus 2 – O Planner do Pregador",
      description: "Fichas para impressão e organização das mensagens do ano e mapas mentais de pregação.",
      details: [
        "Fichas litúrgicas e homiléticas prontas para impressão",
        "Organização de séries bíblicas e mensagens do ano inteiro",
        "Mapas mentais estruturados de pregação (Introdução a Conclusão)"
      ],
      customImg: bonus2Img,
      setCustomImg: setBonus2Img,
      placeholderLabel: "Capa 3D: O Planner do Pregador",
      themeColor: "from-blue-400 to-blue-600",
      accentBorder: "hover:border-blue-400",
      iconBg: "bg-blue-400/20 text-blue-300",
      defaultRender: (
        <div className="w-full h-full bg-[#fdfbf7] rounded-xl flex flex-col justify-between p-4 text-center border-2 border-[#d9cbb8] text-slate-900 relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-slate-600 font-bold uppercase tracking-wider border-b border-[#e5dacf] pb-1">
            <span>Instrumento Ministerial</span>
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded text-[9px] font-black">Word + PDF</span>
          </div>
          <div className="my-auto py-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md mb-2">
              <CalendarDays size={20} />
            </div>
            <h5 className="text-sm font-black serif text-slate-950 uppercase tracking-wide leading-tight">
              O Planner<br /><span className="text-amber-800">Do Pregador</span>
            </h5>
            <p className="text-[10px] text-slate-600 mt-1 font-serif italic">Planejamento & Mapas Mentais</p>
          </div>
          <div className="text-[9px] text-slate-600 border-t border-[#e5dacf] pt-1.5 flex items-center justify-center gap-1">
            <Check size={11} className="text-emerald-600" /> Fichas prontas para impressão
          </div>
        </div>
      )
    },
    {
      id: "bonus-3",
      number: "3",
      badge: "BÔNUS 3 • GRÁTIS HOJE",
      icon: HeartHandshake,
      title: "Bônus 3 – Dinâmicas Rápidas para Círculo de Oração e Jovens",
      description: "Quebra-gelos práticos com lições bíblicas (O Fio que Não se Rompe, O Peso da Carga e O Verdadeiro Valor).",
      details: [
        "Dinâmica 'O Fio que Não se Rompe' (União e Comunhão)",
        "Dinâmica 'O Peso da Carga' (Descanso e Alívio em Cristo)",
        "Dinâmica 'O Verdadeiro Valor' (Identidade e Autoestima Cristã)"
      ],
      customImg: bonus3Img,
      setCustomImg: setBonus3Img,
      placeholderLabel: "Capa 3D: Dinâmicas Rápidas",
      themeColor: "from-rose-400 to-rose-600",
      accentBorder: "hover:border-rose-400",
      iconBg: "bg-rose-400/20 text-rose-300",
      defaultRender: (
        <div className="w-full h-full bg-gradient-to-br from-[#1a0f26] via-[#121029] to-[#0d162d] rounded-xl flex flex-col justify-between p-4 text-center border border-rose-400/40 text-white relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold uppercase tracking-wider">
            <span>Mulheres & Jovens</span>
            <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded text-[9px]">25 Dinâmicas</span>
          </div>
          <div className="my-auto py-2">
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-rose-400 to-amber-500 text-slate-950 flex items-center justify-center shadow-md mb-2">
              <HeartHandshake size={20} />
            </div>
            <h5 className="text-sm font-black serif text-white uppercase tracking-wide leading-tight">
              Dinâmicas<br /><span className="text-rose-300">Rápidas & Bíblicas</span>
            </h5>
            <p className="text-[10px] text-slate-300 mt-1">Círculo de Oração & Jovens</p>
          </div>
          <div className="text-[9px] text-slate-400 border-t border-slate-800 pt-1.5 flex items-center justify-center gap-1">
            <Check size={11} className="text-emerald-400" /> Lições práticas prontas
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="bonus" className="py-20 lg:py-28 bg-[#071324] text-white relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Luzes de fundo decorativas */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO COM O TÍTULO EM DESTAQUE EXATO SOLICITADO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>Presentes Inclusos no Seu Acesso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black serif text-white leading-tight mb-5">
            Comprando HOJE, você leva <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">3 BÔNUS EXCLUSIVOS</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Além dos <strong>100 Esboços Prontos</strong>, preparamos este pacote ministerial complementar para enriquecer suas ministrações e o planejamento do seu culto:
          </p>

          {/* Opção para o usuário inserir links diretos de capas 3D se quiser */}
          <div className="mt-4">
            <button
              onClick={() => setShowUrlInputs(!showUrlInputs)}
              className="text-[11px] text-slate-400 hover:text-amber-300 inline-flex items-center gap-1.5 underline underline-offset-4 transition"
            >
              <ImageIcon size={13} /> {showUrlInputs ? "Ocultar campos de imagem" : "Inserir links das capas 3D (Opcional)"}
            </button>

            {showUrlInputs && (
              <div className="mt-4 p-4 bg-slate-900 border border-slate-700 rounded-2xl max-w-xl mx-auto text-left text-xs space-y-3 animate-in fade-in">
                <p className="text-slate-300 font-medium">
                  Cole as URLs das suas capas 3D para exibi-las no topo de cada bloco:
                </p>
                <div>
                  <label className="text-slate-400 text-[11px] block mb-1">Capa Bônus 1 (Oratória Cristã):</label>
                  <input 
                    type="text" 
                    value={bonus1Img} 
                    onChange={(e) => setBonus1Img(e.target.value)}
                    placeholder="https://exemplo.com/capa-bonus-1.png"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-[11px] block mb-1">Capa Bônus 2 (O Planner do Pregador):</label>
                  <input 
                    type="text" 
                    value={bonus2Img} 
                    onChange={(e) => setBonus2Img(e.target.value)}
                    placeholder="https://exemplo.com/capa-bonus-2.png"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-[11px] block mb-1">Capa Bônus 3 (Dinâmicas Rápidas):</label>
                  <input 
                    type="text" 
                    value={bonus3Img} 
                    onChange={(e) => setBonus3Img(e.target.value)}
                    placeholder="https://exemplo.com/capa-bonus-3.png"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-white outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 BLOCOS (CARDS) ALINHADOS LADO A LADO NO DESKTOP E EM COLUNA NO CELULAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 items-stretch">
          {bonusData.map((bonus) => {
            const IconComponent = bonus.icon;
            return (
              <div 
                key={bonus.id}
                id={bonus.id}
                className={`bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 shadow-xl group hover:-translate-y-1 ${bonus.accentBorder}`}
              >
                <div>
                  
                  {/* ESPAÇO (PLACEHOLDER) DE IMAGEM NO TOPO DE CADA BLOCO PARA A CAPA 3D */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-950 border-2 border-dashed border-slate-700/80 group-hover:border-amber-400/60 transition-all p-3 mb-5 flex items-center justify-center overflow-hidden">
                    {bonus.customImg ? (
                      <img 
                        src={bonus.customImg} 
                        alt={bonus.title}
                        className="w-full h-full object-contain rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Placeholder Visual Renderizado com Alta Definição */
                      bonus.defaultRender
                    )}

                    {/* Tag no Canto do Placeholder */}
                    <div className="absolute top-2 right-2 bg-slate-950/90 text-amber-300 font-mono text-[9px] px-2 py-0.5 rounded-md border border-slate-800 flex items-center gap-1">
                      <ImageIcon size={10} /> Espaço Capa 3D
                    </div>
                  </div>

                  {/* Badge de Destaque */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                      {bonus.badge}
                    </span>
                    <span className="text-xs font-black text-emerald-400 uppercase">
                      R$ 0,00
                    </span>
                  </div>

                  {/* Título Exato */}
                  <h3 className="text-lg sm:text-xl font-black serif text-white leading-snug mb-3">
                    {bonus.title}
                  </h3>

                  {/* Descrição Exata Fornecida */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {bonus.description}
                  </p>

                  {/* Detalhamento dos Tópicos */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2 mb-4">
                    {bonus.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Selo de Liberação */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-amber-300 font-medium flex items-center gap-1">
                    <Sparkles size={12} /> Acesso Imediato
                  </span>
                  <span>Formato Digital (Word + PDF)</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* TEXTO DE ANCORAGEM PARA GERAR URGÊNCIA (TEXTO EXATO SOLICITADO) */}
        <div className="bg-gradient-to-r from-[#0f2744] via-[#13335a] to-[#0f2744] rounded-3xl border-2 border-amber-400/80 p-6 sm:p-10 shadow-2xl relative text-center max-w-3xl mx-auto">
          
          <div className="inline-block bg-emerald-500 text-slate-950 font-black text-xs uppercase px-4 py-1 rounded-full mb-4 tracking-wider shadow">
            ECONOMIA DE MAIS DE R$ 150,00
          </div>

          <p className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-relaxed mb-6 font-serif">
            "Se você fosse comprar tudo isso separadamente, pagaria mais de R$ 150,00. Mas levando o material hoje, todos esses bônus saem por R$ 0,00 (Grátis)."
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-slate-400 line-through text-sm sm:text-base">Valor Total: R$ 150,00</span>
            <span className="text-amber-300 font-bold">•</span>
            <div className="flex items-baseline text-white">
              <span className="text-xs text-amber-400 uppercase font-extrabold mr-1">Hoje no Combo:</span>
              <span className="text-3xl sm:text-4xl font-black serif text-emerald-400">GRÁTIS (R$ 0,00)</span>
            </div>
          </div>

          {/* BOTÃO GRANDE E CHAMATIVO DE CALL TO ACTION (CTA COM TEXTO EXATO) */}
          <div className="max-w-md mx-auto">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-checkout="true"
              data-product-name="Garantir 3 Bônus Exclusivos (Seção Bônus)"
              data-product-value="19.99"
              className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_15px_35px_rgba(245,158,11,0.35)] hover:scale-[1.03] active:scale-[0.98] border border-amber-300 text-center"
            >
              <Zap className="w-5 h-5 fill-slate-950 shrink-0" />
              <span>QUERO GARANTIR MEUS BÔNUS AGORA</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <p className="text-[11px] text-slate-400 mt-3">
              Liberado imediatamente junto com os 100 Esboços • Acesso Vitalício
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
