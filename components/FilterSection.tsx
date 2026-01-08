
import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

export const FilterSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Check className="text-green-400 w-8 h-8" />
              Este Recurso É Para Você Se:
            </h3>
            <ul className="space-y-4">
              {[
                "Leva a sério o ministério da Palavra e busca excelência.",
                "Quer mais tempo para orar, cuidar do rebanho e família.",
                "Entende que boas ferramentas ajudam, não substituem.",
                "Está comprometido com pregações bíblicas relevantes.",
                "Quer sempre melhorar como comunicador do Evangelho."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <X className="text-red-400 w-8 h-8" />
              Este Recurso NÃO É Para Quem:
            </h3>
            <ul className="space-y-4">
              {[
                "Busca atalhos sem dedicação ao estudo espiritual.",
                "Não valoriza a base bíblica e teológica do ministério.",
                "Prefere improvisar sem qualquer planejamento.",
                "Não quer adaptar o conteúdo à sua realidade local.",
                "Vê o ministério só como obrigação, não como chamado."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex flex-col md:flex-row items-center gap-6">
          <AlertCircle className="w-12 h-12 text-teal-400 flex-shrink-0" />
          <p className="text-slate-200">
            <strong>Importante:</strong> Pregações Prontas é uma ferramenta para líderes sérios. Não prometemos resultados automáticos – a unção vem de Deus, mas a preparação é nossa responsabilidade.
          </p>
        </div>
      </div>
    </section>
  );
};
