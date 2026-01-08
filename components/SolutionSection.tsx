
import React from 'react';
import { BookOpen, Layout, Settings } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-24 bg-teal-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">
            Um Recurso para o Seu Ministério
          </h2>
          <p className="text-teal-100 text-lg leading-relaxed">
            Conheça as <strong>Pregações Prontas</strong>. Não é para substituir sua comunhão com Deus ou a direção do Espírito Santo. 
            É uma ferramenta de apoio que te ajuda a preparar sermões e libera tempo para o que mais importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-4">Base Bíblica Sólida</h3>
            <p className="text-teal-100/80">Estudo cuidadoso da Bíblia aplicado à realidade das igrejas evangélicas de hoje.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-4">Estrutura Profissional</h3>
            <p className="text-teal-100/80">Introdução marcante, desenvolvimento claro e conclusão que transforma vidas.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-4">Flexibilidade Total</h3>
            <p className="text-teal-100/80">Você tem liberdade total para adaptar, personalizar e seguir a direção do Espírito.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium text-teal-300 italic">
            "Isto não é um atalho espiritual. É um recurso estratégico para líderes que ensinam com excelência."
          </p>
        </div>
      </div>
    </section>
  );
};
