
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const feedback = [
    { name: "Pastor João Mendes", local: "Lisboa", text: "Este recurso é uma bênção. Economizo horas de preparo e dedico mais tempo ao aconselhamento. As mensagens são sólidas." },
    { name: "Pastora Ana Silva", local: "Porto", text: "Como líder de igreja pequena, faço de tudo. O Pregações Prontas me ajuda a manter o ensino de qualidade sem sacrificar outras tarefas." },
    { name: "Missionário Carlos Santos", local: "Coimbra", text: "A estrutura das mensagens me ajudou a ser um pregador melhor. Aprendi a organizar e aplicar a palavra com mais clareza." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 serif">
            O Que Líderes Como Você Estão Dizendo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((f, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100">
              <Quote className="absolute top-4 right-6 w-12 h-12 text-teal-100" />
              <p className="text-gray-600 italic mb-6 relative z-10">"{f.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{f.name}</p>
                <p className="text-teal-600 text-sm">{f.local}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
