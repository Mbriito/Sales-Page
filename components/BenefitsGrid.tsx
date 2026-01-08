
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const BenefitsGrid: React.FC = () => {
  const benefits = [
    { title: "Mais Tempo para Oração", desc: "Ganha tempo valioso para se conectar com Deus.", img: "https://picsum.photos/seed/pray/600/400" },
    { title: "Segurança ao Ministrar", desc: "Pregue com a confiança de quem está bem preparado.", img: "https://picsum.photos/seed/preach/600/400" },
    { title: "Mensagens Impactantes", desc: "Comunique a Palavra de forma clara e poderosa.", img: "https://picsum.photos/seed/impact/600/400" },
  ];

  const details = [
    "Pregações com interpretação bíblica clara",
    "Temas variados: Família, Fé, Evangelismo",
    "Estrutura completa com introdução e conclusão",
    "Sugestões de aplicação prática para a vida diária",
    "Acesso 100% digital e imediato em qualquer lugar",
    "Arquivos editáveis para você adaptar ao seu estilo"
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 serif">
            Benefícios para o Seu Ministério
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais do que conteúdo, entregamos liberdade e paz para que você foque no pastoreio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:-translate-y-2 transition duration-300">
              <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 serif">O Que Você Recebe Hoje:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-teal-50 rounded-2xl p-8 border border-teal-100">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Menos Estresse Semanal</h4>
                <p className="text-teal-800/70 text-sm">Durma melhor sabendo que tem um recurso confiável. Diminua a ansiedade do peso da preparação constante.</p>
              </div>
              <div className="pt-6 border-t border-teal-200">
                <h4 className="font-bold text-teal-900 mb-2">Mais Tempo para Pastorear</h4>
                <p className="text-teal-800/70 text-sm">Dedique-se ao que realmente importa: visitar enfermos, aconselhar e fortalecer a igreja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
