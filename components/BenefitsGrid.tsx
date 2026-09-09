
import React from 'react';
import { FastForward, Shield, Anchor, TrendingUp, HeartHandshake } from 'lucide-react';

export const BenefitsGrid: React.FC = () => {
  const benefits = [
    { title: "Preparar sermões mais rápido", desc: "Ganhe tempo para focar na oração e no pastoreio, sem a angústia da folha em branco.", icon: <FastForward size={32} /> },
    { title: "Ter mais segurança ao pregar", desc: "Acesse esboços estruturados que te dão confiança e autoridade no púlpito.", icon: <Shield size={32} /> },
    { title: "Levar mensagens profundas", desc: "Estudos fundamentados na Palavra que realmente tocam o coração da igreja.", icon: <Anchor size={32} /> },
    { title: "Crescer ministerialmente", desc: "Aprimore sua comunicação e ensino com modelos de excelência e clareza.", icon: <TrendingUp size={32} /> },
    { title: "Impactar vidas", desc: "Sermões focados na transformação espiritual e no fortalecimento da fé dos fiéis.", icon: <HeartHandshake size={32} /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 serif">Benefícios para Você</h2>
          <p className="mt-4 text-gray-600 text-lg">Um investimento que reflete no crescimento da sua igreja.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 hover:border-teal-500 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
