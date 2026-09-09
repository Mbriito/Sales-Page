import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-[#21070e] text-white relative overflow-hidden">
      
      {/* Luzes de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-400 text-xs font-black uppercase tracking-widest block mb-3">
            O DESAFIO DE QUEM PREGA A PALAVRA
          </span>
          <h2 className="text-3xl md:text-5xl font-black serif leading-tight text-white">
            Você Passa Horas Tentando Estruturar <br />
            <span className="bg-gradient-to-r from-amber-200 via-rose-300 to-amber-200 bg-clip-text text-transparent">
              Sermões Impactantes Toda Semana?
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card dos Problemas */}
          <div className="bg-rose-950/40 border border-rose-900/50 p-8 md:p-10 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-black text-rose-300 mb-6 flex items-center gap-3 border-b border-rose-900/50 pb-4">
              <XCircle className="w-6 h-6 text-rose-500 shrink-0" /> Os Principais Desafios no Púlpito:
            </h3>
            <ul className="space-y-4">
              {[
                "⏰ Falta de tempo na rotina corrida para estudo aprofundado",
                "📚 Dificuldade para encontrar contexto histórico e aplicação prática",
                "😰 Pressão para pregar algo renovado e edificante em cada culto",
                "🌸 Falta de temas específicos e profundos para o Culto de Mulheres",
                "💤 Mensagens repetitivas por falta de esboços estruturados",
                "📖 Bloqueio de ideias ao abrir a Bíblia antes da ministração"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-rose-100/90 text-sm md:text-base font-light">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card da Solução */}
          <div className="bg-gradient-to-br from-[#3b0d19] to-[#280811] border border-rose-500/30 p-8 md:p-10 rounded-[2.5rem] shadow-xl">
            <h3 className="text-xl font-black text-amber-300 mb-6 flex items-center gap-3 border-b border-rose-800/40 pb-4">
              <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" /> Como Este Ebook Transforma Seu Ministério:
            </h3>
            <ul className="space-y-4">
              {[
                "⚡ 100 mensagens prontas (50 Gerais + 50 para Mulheres)",
                "📖 Contexto teológico rico, ilustrações e aplicação prática",
                "🎯 Conteúdo que toca corações e edifica vidas de verdade",
                "⏱️ Economize mais de 120 horas de preparação estressante",
                "💻 Formato 100% editável em Word para você personalizar à sua maneira",
                "🙏 Versículos chave selecionados e oração de encerramento pronta"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white text-sm md:text-base font-semibold">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">
          <a 
            href="#oferta" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 hover:from-rose-800 hover:to-pink-800 text-white px-8 py-5 rounded-2xl font-black text-base uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            GARANTIR MEUS ESBOÇOS PRONTOS AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
