import React from 'react';
import { ShieldCheck, RotateCcw, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-2xl bg-blue-900 text-amber-300 flex items-center justify-center mx-auto mb-5 shadow-md">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <span className="text-blue-700 font-black text-xs uppercase tracking-widest block mb-2">
            RISCO ABSOLUTAMENTE ZERO
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black serif text-[#0a192f] mb-4">
            Garantia Incondicional de 7 Dias
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto mb-6">
            Confiamos tanto na qualidade e na base bíblica do nosso material que te damos 7 dias inteiros para testar. Se por qualquer motivo você não ficar 100% satisfeito com as mensagens e esboços, devolvemos todo o seu dinheiro. Sem burocracia e sem ressentimentos!
          </p>

          <div className="inline-flex items-center gap-2 text-slate-700 font-bold text-xs bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
            <RotateCcw className="w-4 h-4 text-blue-600" /> Reembolso direto e simplificado via plataforma Kiwify
          </div>

        </div>

      </div>
    </section>
  );
};
