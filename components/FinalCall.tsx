
import React from 'react';

export const FinalCall: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/6ghqN34";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 serif">
          Pregue a Palavra. Cumpra Seu Chamado. Honre a Deus.
        </h2>
        
        <blockquote className="text-xl md:text-2xl text-gray-600 italic mb-12 max-w-4xl mx-auto leading-relaxed">
          "Pregue a palavra, esteja preparado, seja persistente, corrija, repreenda e exorte com toda paciência e doutrina" 
          <span className="block mt-4 font-bold text-teal-600 not-italic">— 2 Timóteo 4:2</span>
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          <div className="p-6">
            <h4 className="font-bold text-gray-900 mb-2">Grande Responsabilidade</h4>
            <p className="text-gray-600 text-sm">Somos cuidadores da Palavra. Cada pregação pode mudar vidas e guiar pessoas a Cristo.</p>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-gray-900 mb-2">Tempo Valioso</h4>
            <p className="text-gray-600 text-sm">Não podemos perder tempo com desorganização. Há vidas esperando pelo cuidado pastoral.</p>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-gray-900 mb-2">Honrando a Deus</h4>
            <p className="text-gray-600 text-sm">Quando nos preparamos bem e pregamos com clareza, estamos honrando o Senhor do ministério.</p>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 inline-block max-w-3xl">
          <p className="text-lg text-gray-700 mb-8">
            Que Deus o abençoe e fortaleça seu ministério. A obra é vasta – e você foi chamado para essa tarefa gloriosa. 
            Não deixe que a falta de tempo comprometa a qualidade da Palavra na sua igreja.
          </p>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-teal-600 text-white font-bold rounded-2xl text-xl hover:bg-teal-700 transition shadow-lg text-center"
          >
            Começar Agora com Excelência
          </a>
        </div>
      </div>
    </section>
  );
};
