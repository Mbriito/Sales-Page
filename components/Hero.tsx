
import React from 'react';
import { Tooltip } from './Tooltip';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide uppercase mb-6 serif shadow-sm">
            Apoio Ministerial Estratégico para Pastores
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 serif">
            Pregações de Excelência: <br />
            <span className="text-teal-600">50 Sermões Prontos</span> <br />
            para Ministérios Impactantes.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-normal">
            Acesse <strong>esboços de pregações poderosas</strong> fundamentadas na Bíblia. 
            Ferramentas essenciais para líderes que buscam pregar com clareza, autoridade e profundidade teológica, 
            otimizando o tempo de preparação semanal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#preço" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 transition transform hover:-translate-y-1 text-lg">
              Quero Acessar os 50 Sermões
            </a>
            <a href="#solucao" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl border border-gray-200 transition text-lg">
              Saber Mais
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <Tooltip text="Você receberá o acesso em seu e-mail segundos após a confirmação do pagamento.">
              <span className="flex items-center gap-1 border-b border-dotted border-gray-300">✅ Acesso Imediato</span>
            </Tooltip>
            <Tooltip text="Receba arquivos em PDF e Word (Editável) para usar no celular ou computador.">
              <span className="flex items-center gap-1 border-b border-dotted border-gray-300">✅ 100% Digital</span>
            </Tooltip>
            <Tooltip text="Satisfação total ou seu dinheiro de volta em até 7 dias, sem burocracia.">
              <span className="flex items-center gap-1 border-b border-dotted border-gray-300">✅ Garantia Incondicional</span>
            </Tooltip>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/church/800/600" 
              alt="Pastor pregando com esboço de sermão pronto" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
