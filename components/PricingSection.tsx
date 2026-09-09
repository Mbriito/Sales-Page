
import React from 'react';
import { ShieldCheck, Download, CreditCard, Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/6ghqN34";

  return (
    <section id="preço" className="py-24 bg-gradient-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-bold text-sm uppercase tracking-widest mb-8 border border-amber-200">
           ✨ INVESTIMENTO ÚNICO
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 serif">Tudo isso por apenas:</h2>
        
        <div className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
          <div className="p-12 md:p-16">
            <div className="flex items-center justify-center gap-2 mb-10">
              <span className="text-3xl font-bold text-gray-400">R$</span>
              <span className="text-8xl md:text-9xl font-black text-gray-900 tracking-tighter">39</span>
              <span className="text-4xl font-bold text-gray-900">,99</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-12 text-left">
               <div className="flex items-center gap-2 text-gray-700 font-medium"><Check className="text-teal-600" /> 50 Pregações Completas</div>
               <div className="flex items-center gap-2 text-gray-700 font-medium"><Check className="text-teal-600" /> Acesso Vitalício</div>
               <div className="flex items-center gap-2 text-gray-700 font-medium"><Check className="text-teal-600" /> Formato Word/PDF</div>
               <div className="flex items-center gap-2 text-gray-700 font-medium"><Check className="text-teal-600" /> Entrega Imediata</div>
            </div>

            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center px-16 py-7 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-3xl text-2xl uppercase transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              COMPRAR E BAIXAR AGORA
            </a>
            
            <div className="mt-12 flex flex-col items-center gap-6">
               <div className="p-6 bg-teal-50 border border-teal-100 rounded-2xl inline-flex items-center gap-4">
                  <ShieldCheck size={40} className="text-teal-600" />
                  <div className="text-left">
                     <p className="font-black text-teal-900 text-lg uppercase leading-none mb-1">7 dias ou seu dinheiro de volta</p>
                     <p className="text-teal-800/70 text-sm">Garantia total de satisfação incondicional.</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <CreditCard size={32} />
                  <Download size={32} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
