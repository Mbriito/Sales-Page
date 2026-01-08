
import React from 'react';
import { ShieldCheck, Zap, Globe, Share2, TrendingUp, MessageCircle, Clock, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/5511984808967?text=${encodeURIComponent("Tenho uma dúvida sobre os sermões.")}`;

  return (
    <section id="preço" className="py-24 bg-gradient-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 serif">
            Invista no Seu Chamado Hoje
          </h2>
          <p className="text-gray-600 text-lg">Um investimento estratégico para um impacto ministerial eterno.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-visible flex flex-col md:flex-row border border-gray-100 relative">
          {/* Banner de Destaque Superior */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full font-bold shadow-lg z-10 flex items-center gap-2 animate-bounce">
            <Star size={18} fill="currentColor" />
            OFERTA POR TEMPO LIMITADO
            <Star size={18} fill="currentColor" />
          </div>

          <div className="md:w-3/5 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 underline decoration-teal-500 underline-offset-8">Acesso Vitalício: 50 Sermões</h3>
            <div className="space-y-4 mb-8">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Acesso Imediato via E-mail" },
                { icon: <Share2 className="w-5 h-5" />, text: "Arquivos 100% Editáveis e Adaptáveis" },
                { icon: <TrendingUp className="w-5 h-5" />, text: "Material focado em Crescimento de Igreja" },
                { icon: <Globe className="w-5 h-5" />, text: "Pague uma vez, acesse para sempre" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="text-teal-600">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-teal-50 rounded-xl flex items-center gap-4 mb-6 border border-teal-100">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
              <div>
                <p className="text-sm font-bold text-teal-900">Garantia Blindada de 7 Dias</p>
                <p className="text-xs text-teal-800/70">Risco zero. Satisfação total ou seu investimento de volta.</p>
              </div>
            </div>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition"
            >
              <MessageCircle size={18} />
              Ainda tem dúvidas? Fale no WhatsApp
            </a>
          </div>
          
          <div className="md:w-2/5 bg-teal-600 p-8 lg:p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background pattern for depth */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <div className="inline-flex items-center gap-2 bg-teal-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase mb-4 tracking-tighter ring-1 ring-white/20">
              <Clock size={12} /> ÚLTIMAS VAGAS COM DESCONTO
            </div>

            <div className="mb-8">
              <span className="text-teal-300 line-through text-lg block">De R$ 297,00</span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold opacity-80">R$</span>
                <span className="text-7xl font-black tracking-tighter">49</span>
                <span className="text-2xl font-bold self-end mb-2">,00</span>
              </div>
              <p className="text-teal-100 mt-2 font-medium">Pagamento único</p>
            </div>

            <button className="w-full py-5 px-6 bg-white text-teal-700 font-black rounded-xl hover:bg-teal-50 transition-all shadow-xl text-lg uppercase tracking-tight transform hover:scale-105 active:scale-95">
              APROVEITAR ESTA OFERTA
            </button>
            
            <div className="mt-6 flex flex-col gap-2 opacity-80">
              <p className="text-[10px] uppercase font-bold tracking-widest">Cartão, Pix ou Boleto</p>
              <p className="text-[10px] flex items-center justify-center gap-1">
                 <ShieldCheck className="w-3 h-3" /> Transação 100% Criptografada
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            *Esta promoção de R$ 49,00 é exclusiva para novos membros e pode ser encerrada a qualquer momento sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};
