import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, CheckCircle2, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-blue-300">
      <button
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50/70 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-[#0a192f] text-base sm:text-lg pr-2 leading-snug">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 font-normal animate-in fade-in duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por padrão

  const faqs = [
    {
      question: "Como vou receber o material?",
      answer: "O acesso é 100% digital. Você receberá um e-mail com o link para baixar o material imediatamente após a confirmação do pagamento."
    },
    {
      question: "É livro físico?",
      answer: "Não, é um E-book em formato PDF. Isso permite que você leia direto no celular, tablet, computador ou imprima se preferir."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos PIX e Cartão de Crédito com liberação imediata, ou Boleto Bancário."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo, devolvemos 100% do seu dinheiro."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção Solicitado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>QUEBRA DE OBJEÇÕES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black serif text-[#0a192f] leading-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Tire todas as suas dúvidas antes de finalizar o seu pedido.
          </p>
        </div>

        {/* Formato Estilo Sanfona (Accordion) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Suporte Adicional no WhatsApp */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-[#0a192f] text-sm sm:text-base">
              Ainda tem alguma dúvida antes de comprar?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Nossa equipe ministerial está online para te responder no WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5511947069414?text=Ol%C3%A1!%20Estou%20na%20p%C3%A1gina%20de%20pagamento%20do%20E-book%20de%20Prega%C3%A7%C3%B5es%20e%20fiquei%20com%20uma%20d%C3%BAvida%20antes%20de%20finalizar%20a%20compra."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shrink-0 shadow-sm"
          >
            <MessageCircle size={16} />
            Tirar Dúvida no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
