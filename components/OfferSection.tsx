import React from 'react';
import { Download, Shield, Check, Sparkles, Crown, BookOpen, Star, Zap, Laptop, Smartphone, Tablet } from 'lucide-react';

interface OfferProps {
  timeLeft: { hours: string; minutes: string; seconds: string };
  flashTimeLeft?: { minutes: string; seconds: string };
}

export const OfferSection: React.FC<OfferProps> = ({ 
  timeLeft, 
  flashTimeLeft = { minutes: '04', seconds: '58' } 
}) => {
  // Links de Checkout Kiwify
  const checkoutPromo5MinUrl = "https://pay.kiwify.com.br/6ghqN34"; // Promoção 100 Esboços (R$ 19,99)
  const checkoutComboUrl = "https://pay.kiwify.com.br/6ghqN34"; // Combo Regular (R$ 49,99)
  const checkoutGeralUrl = "https://pay.kiwify.com.br/6ghqN34"; // 50 Pregações (R$ 39,99)
  const checkoutMulheresUrl = "https://pay.kiwify.com.br/6ghqN34"; // 50 Temas Mulheres (R$ 34,99)

  return (
    <section id="oferta" className="py-20 lg:py-24 bg-gradient-to-b from-[#0a192f] via-[#0f2744] to-[#071324] text-white relative overflow-hidden">
      
      {/* Brilhos sutis em azul e âmbar */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BANNER PRINCIPAL DA PROMOÇÃO DE LANÇAMENTO (R$ 19,99) */}
        <div className="max-w-4xl mx-auto bg-slate-900/95 rounded-3xl p-6 sm:p-10 border-2 border-amber-400 text-center shadow-[0_0_50px_rgba(245,158,11,0.25)] mb-16 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-widest py-1 px-4 rounded-bl-2xl shadow-sm">
            ⚡ Promoção Relâmpago
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/15 border border-amber-400/40 text-amber-300 rounded-full font-bold tracking-wider text-xs uppercase mb-4">
            <Zap className="w-4 h-4 fill-amber-300 animate-bounce" /> 
            LEVE OS 2 E-BOOKS PELO VALOR DE 1!
          </div>

          <h3 className="text-2xl sm:text-4xl font-black serif text-white mb-3">
            Receba 50 Esboços + 50 Pregações de Mulheres <br />
            <span className="text-amber-300">Por Apenas R$ 19,99</span>
          </h3>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto mb-6 font-normal leading-relaxed">
            Tenha em mãos <strong>100 mensagens bíblicas prontas</strong> no Word e PDF. 
            Economize semanas de estudo e pregue com unção e ousadia!
          </p>

          {/* Cronômetro Regressivo */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="bg-slate-950 p-3 sm:p-4 rounded-2xl border border-slate-800 min-w-[85px] sm:min-w-[100px] text-center">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono block">
                {flashTimeLeft.minutes}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Minutos</span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-amber-400">:</span>
            <div className="bg-slate-950 p-3 sm:p-4 rounded-2xl border border-slate-800 min-w-[85px] sm:min-w-[100px] text-center">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono block">
                {flashTimeLeft.seconds}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Segundos</span>
            </div>
          </div>

          {/* Botão Principal de Conversão Kiwify */}
          <div className="mb-4">
            <a
              href={checkoutPromo5MinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 px-8 py-5 rounded-2xl font-black text-base sm:text-xl uppercase tracking-wide transition-all shadow-[0_15px_35px_rgba(245,158,11,0.35)] hover:scale-105 active:scale-95 border border-amber-300"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              QUERO ACESSAR OS 100 ESBOÇOS AGORA
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> Pagamento 100% Seguro (Kiwify)</span>
            <span>•</span>
            <span>Liberado Imediatamente via PIX ou Cartão</span>
            <span>•</span>
            <span className="text-amber-300 font-bold">7 Dias de Garantia</span>
          </div>

        </div>

        {/* Título Comparativo */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black serif text-white leading-tight mb-2">
            Opções Disponíveis para Seu Ministério
          </h2>
          <p className="text-slate-300 text-sm">
            Escolha o pacote que melhor atende à sua demanda pastoral e ministerial hoje.
          </p>
        </div>

        {/* CARDS COMPARATIVOS DOS PACOTES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* PACOTE 1: 50 Pregações Poderosas (Individual) */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Opção Individual</span>
              <h3 className="text-xl sm:text-2xl font-black serif text-white mb-2">50 Pregações Poderosas</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                Esboços bíblicos completos para sermões de domingo, cultos de ensino, doutrina e evangelismo.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 mb-6">
                <span className="text-xs text-slate-500 line-through block">De R$ 197,00 por:</span>
                <div className="flex items-baseline gap-1 text-white my-1">
                  <span className="text-sm font-bold text-amber-400">R$</span>
                  <span className="text-4xl font-black serif">39,99</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold uppercase">Acesso Vitalício</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 50 Pregações Gerais Completas</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Introdução, 3 Tópicos e Conclusão</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Formatos Word (.docx) e PDF</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Acesso em Computador, Tablet e Celular</li>
              </ul>
            </div>

            <a
              href={checkoutGeralUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-checkout="true"
              data-product-name="50 Pregações Poderosas (Individual)"
              data-product-value="39.99"
              className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
            >
              Comprar 50 Pregações (R$ 39,99)
            </a>
          </div>

          {/* PACOTE 2: COMBO COMPLETO 100 MENSAGENS (DESTAQUE) */}
          <div className="bg-gradient-to-b from-[#0f2744] to-[#0a192f] rounded-3xl border-2 border-amber-400 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl transform lg:-translate-y-2">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest py-1 px-5 rounded-full shadow-md flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 fill-slate-950" /> MELHOR CUSTO-BENEFÍCIO
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-2 mt-1">Combo Promocional</span>
              <h3 className="text-2xl sm:text-3xl font-black serif text-white mb-2">
                Combo 100 Esboços
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                50 Pregações Gerais + 50 Pregações Exclusivas para Círculo de Oração e Mulheres.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-400/40 mb-6">
                <span className="text-xs text-slate-400 line-through block">De R$ 297,00 por apenas:</span>
                <div className="flex items-baseline gap-1 text-white my-1">
                  <span className="text-base font-bold text-amber-400">R$</span>
                  <span className="text-5xl font-black serif text-amber-300">19,99</span>
                </div>
                <span className="text-[11px] text-amber-300 font-bold uppercase">Preço Especial por tempo limitado</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200 mb-8 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> <strong>50 Pregações Poderosas (Geral)</strong></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> <strong>50 Temas de Culto para Mulheres</strong></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Total de 100 Mensagens Bíblicas Prontas</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Editáveis no Word (.docx) e Leitura em PDF</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Bônus: Guia de Oratória & Ilustrações</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Suporte VIP no WhatsApp</li>
              </ul>
            </div>

            <a
              href={checkoutPromo5MinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-checkout="true"
              data-product-name="Combo 100 Esboços (Promo R$ 19,99)"
              data-product-value="19.99"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg text-center"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              QUERO OS 2 E-BOOKS POR R$ 19,99
            </a>
          </div>

          {/* PACOTE 3: 50 Temas para Mulheres (Individual) */}
          <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Opção Individual</span>
              <h3 className="text-xl sm:text-2xl font-black serif text-white mb-2">50 Temas para Mulheres</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                Esboços tocantes para Círculo de Oração, Congressos Femininos e Chás de Mulheres.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 mb-6">
                <span className="text-xs text-slate-500 line-through block">De R$ 147,00 por:</span>
                <div className="flex items-baseline gap-1 text-white my-1">
                  <span className="text-sm font-bold text-amber-400">R$</span>
                  <span className="text-4xl font-black serif">34,99</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold uppercase">Acesso Vitalício</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 50 Pregações Femininas Completas</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Dinâmicas de Grupo & Orações</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Formatos Word (.docx) e PDF</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Acesso em Computador, Tablet e Celular</li>
              </ul>
            </div>

            <a
              href={checkoutMulheresUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-checkout="true"
              data-product-name="50 Temas de Culto para Mulheres"
              data-product-value="34.99"
              className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
            >
              Comprar Temas de Mulheres (R$ 34,99)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
