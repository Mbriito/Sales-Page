
import React from 'react';
import { Clock, AlertCircle, Heart, Battery, HelpCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const pains = [
    { 
      title: "Pressão Semanal", 
      desc: "A pressão de preparar mensagens impactantes todas as semanas recai sobre você. O tempo voa e o púlpito espera.",
      icon: <AlertCircle className="w-6 h-6 text-teal-600" />
    },
    { 
      title: "Falta de Tempo", 
      desc: "Entre visitas, reuniões e família, achar tempo para estudar a fundo parece uma missão impossível.",
      icon: <Clock className="w-6 h-6 text-teal-600" />
    },
    { 
      title: "Ansiedade", 
      desc: "O receio de não entregar uma mensagem que realmente atenda às necessidades da sua congregação.",
      icon: <Heart className="w-6 h-6 text-teal-600" />
    },
    { 
      title: "Cansaço", 
      desc: "A sensação de estar sempre correndo, sem nunca conseguir um momento real de descanso ministerial.",
      icon: <Battery className="w-6 h-6 text-teal-600" />
    },
    { 
      title: "Dúvidas", 
      desc: "Será que esta mensagem realmente vai tocar os corações e mudar vidas?",
      icon: <HelpCircle className="w-6 h-6 text-teal-600" />
    }
  ];

  return (
    <section id="problemas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 serif">
            Sabemos a Responsabilidade que Você Carrega
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-all hover:shadow-soft group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
