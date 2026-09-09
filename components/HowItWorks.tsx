import React from 'react';
import { CreditCard, Mail, Download, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "1",
      icon: <CreditCard className="w-8 h-8 text-rose-700" />,
      title: "Escolha Seu Plano",
      desc: "Selecione o e-Book de 50 Pregações (R$ 39,99), os 50 Temas para Mulheres (R$ 34,99) ou o Combo Completo com desconto especial."
    },
    {
      num: "2",
      icon: <Mail className="w-8 h-8 text-rose-700" />,
      title: "Receba no Seu E-mail",
      desc: "Após a confirmação do pagamento, você receberá instantaneamente um e-mail seguro com seu link de acesso."
    },
    {
      num: "3",
      icon: <Download className="w-8 h-8 text-rose-700" />,
      title: "Baixe e Edite à Vontade",
      desc: "Abra os arquivos em formato Word ou PDF no seu celular ou computador, altere o que desejar e leve para suas ministrações!"
    }
  ];

  return (
    <section className="py-24 bg-[#fdf8f5] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-rose-700 text-xs font-black uppercase tracking-widest block mb-2">
          SIMPLES, RÁPIDO E 100% DIGITAL
        </span>
        <h2 className="text-3xl md:text-5xl font-black serif text-[#3b0d19] mb-16">
          Como Funciona o Acesso ao Material
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-rose-100 shadow-sm relative text-left hover:shadow-lg transition-all">
              <span className="w-10 h-10 rounded-full bg-rose-700 text-white font-black text-sm flex items-center justify-center mb-6 shadow-md">
                0{s.num}
              </span>
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-[#3b0d19] mb-2">{s.title}</h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>

        <a 
          href="#oferta" 
          className="inline-flex items-center gap-2 text-rose-800 font-extrabold hover:text-rose-600 transition-colors uppercase tracking-wider text-sm"
        >
          Ir para a página de pedido segura <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
};
