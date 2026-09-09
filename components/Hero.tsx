import React, { useState } from 'react';
import { CheckCircle2, Star, Shield, Clock, Tablet, Smartphone, Laptop, Sparkles, ArrowDown, Zap, Upload, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  flashTimeLeft?: { minutes: string; seconds: string };
  checkoutUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  flashTimeLeft = { minutes: '04', seconds: '59' },
  checkoutUrl = "https://pay.kiwify.com.br/6ghqN34"
}) => {
  const [mockupImage, setMockupImage] = useState<string>("/src/assets/images/ebook_devices_mockup_1785285805027.jpg");
  const [showImageInput, setShowImageInput] = useState<boolean>(false);
  const [customImageUrl, setCustomImageUrl] = useState<string>("");

  const handleApplyCustomImage = () => {
    if (customImageUrl.trim()) {
      setMockupImage(customImageUrl.trim());
      setShowImageInput(false);
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#0a192f] via-[#0f2744] to-[#071324] text-white overflow-hidden">
      
      {/* Luzes decorativas sutis em tons de azul confiável e dourado nobre */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Coluna de Texto Principal (Atenção e Desejo) */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            
            {/* Tag de Destaque Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-400/40 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Material Prático para Pregadores e Líderes</span>
            </div>

            {/* Headline Principal Solicitada */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black serif text-white leading-tight mb-6">
              Economize Horas de Preparação e Pregue com Ousadia. Receba{" "}
              <span className="text-amber-300 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                50 Esboços Completos + 50 Pregações Exclusivas
              </span>{" "}
              para Círculo de Oração e Mulheres.
            </h1>

            {/* Subtítulo Solicitado */}
            <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl leading-relaxed font-normal">
              Mensagens bíblicas completas, com contexto, aplicação prática e versículos. 
              O material definitivo para pregadores e dirigentes.
            </p>

            {/* Mini-card de Oferta com Urgência */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-400/40 mb-8 max-w-xl shadow-lg backdrop-blur-md text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-2 mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Zap className="w-4 h-4 fill-amber-300" />
                  <span>PROMOÇÃO ESPECIAL DE LANÇAMENTO</span>
                </div>
                <div className="bg-slate-950 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-amber-300 border border-amber-500/30">
                  ⏱️ Restam: {flashTimeLeft.minutes}:{flashTimeLeft.seconds}
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-400 line-through">De R$ 197,00</span>
                <span className="text-xs text-slate-300">Por apenas:</span>
                <span className="text-3xl font-black text-amber-300 serif">R$ 19,99</span>
                <span className="text-xs text-slate-300 font-medium">(Os 2 E-books inclusos no Word e PDF)</span>
              </div>
            </div>

            {/* Botão Principal Solicitado (Call to Action) */}
            <div className="mb-6">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track-checkout="true"
                data-product-name="Combo 100 Esboços (Hero)"
                data-product-value="19.99"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-base sm:text-lg px-8 py-5 rounded-2xl shadow-[0_15px_35px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center uppercase tracking-wide border border-amber-300"
              >
                <Zap className="w-5 h-5 fill-slate-950" />
                QUERO ACESSAR OS 100 ESBOÇOS AGORA
              </a>
            </div>

            {/* Micro selos de credibilidade */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Compra 100% Segura</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Acesso Imediato</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Garantia de 7 Dias</span>
              </div>
            </div>

          </div>

          {/* Coluna da Imagem (Placeholder Mockup 3D: Tablet + Celular) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none order-1 lg:order-2">
            <div className="relative">
              
              {/* Efeito Glow */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-2xl transform scale-95"></div>

              {/* Moldura do Mockup 3D com Placeholder */}
              <div className="relative bg-slate-900/90 border-2 border-amber-400/50 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
                
                {/* Etiqueta de Identificação do Mockup */}
                <div className="flex items-center justify-between gap-2 mb-3 bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <Tablet className="w-4 h-4" />
                    <Smartphone className="w-4 h-4" />
                    <span>Mockup 3D: Tablet & Celular</span>
                  </div>
                  <button 
                    onClick={() => setShowImageInput(!showImageInput)}
                    className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 underline underline-offset-2"
                  >
                    <Upload size={12} /> {showImageInput ? "Fechar" : "Trocar Imagem"}
                  </button>
                </div>

                {/* Caixa expansível para o usuário colar link do Canva se quiser */}
                {showImageInput && (
                  <div className="mb-3 p-3 bg-slate-950 rounded-xl border border-amber-400/40 text-xs text-left animate-in fade-in">
                    <p className="text-slate-300 mb-2 font-medium">
                      Cole a URL do seu mockup exportado do Canva (ou deixe o padrão):
                    </p>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={customImageUrl}
                        onChange={(e) => setCustomImageUrl(e.target.value)}
                        placeholder="https://sua-imagem-mockup.png" 
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-amber-400"
                      />
                      <button 
                        onClick={handleApplyCustomImage}
                        className="bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg font-bold hover:bg-amber-300 text-xs"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                )}

                {/* Exibição da Imagem de Mockup 3D */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 shadow-inner group">
                  <img 
                    src={mockupImage} 
                    alt="Mockup 3D dos E-books 50 Pregações Poderosas e 50 Temas de Mulheres em Tablet e Celular" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Faixa inferior de compatibilidade */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-left">
                    <div className="text-xs font-bold text-amber-300">
                      100 Mensagens Bíblicas Prontas & Editáveis
                    </div>
                    <div className="text-[11px] text-slate-300 flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1"><Laptop size={12} className="text-amber-400" /> Computador (.docx Word)</span>
                      <span className="flex items-center gap-1"><Tablet size={12} className="text-amber-400" /> Tablet</span>
                      <span className="flex items-center gap-1"><Smartphone size={12} className="text-amber-400" /> Celular (.PDF)</span>
                    </div>
                  </div>
                </div>

                {/* Legenda Informativa */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300 px-1">
                  <span>📱 Compatível com qualquer dispositivo</span>
                  <span className="text-amber-300 font-semibold">Formato Word & PDF</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
