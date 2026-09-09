import React from 'react';
import { BookOpen, Lock, Mail, ShieldCheck, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const whatsappPreMsg = encodeURIComponent("Olá! Estou na página de pagamento do E-book de Pregações e fiquei com uma dúvida antes de finalizar a compra.");

  return (
    <footer className="bg-[#071324] py-14 sm:py-16 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          
          {/* Coluna 1: Marca & Redes */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-black serif">Pregações de Excelência</h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-normal mb-4">
              Capacitando pregadores, pastoras e dirigentes com materiais bíblicos profundos, prontos e 100% editáveis no Word e PDF.
            </p>

            <div className="space-y-2 pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">Siga nossas Redes:</span>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <a 
                  href="https://instagram.com/fontepregador" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={15} className="text-pink-400" />
                  <span>@fontepregador</span>
                </a>
                <a 
                  href="https://facebook.com/fontepregador" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook size={15} className="text-blue-400" />
                  <span>/fontepregador</span>
                </a>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 font-mono">
              © {new Date().getFullYear()} Pregações de Excelência. Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos & Segurança */}
          <div>
            <h4 className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <Lock size={14} /> Links & Políticas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <a href="#especificidade" className="hover:text-amber-300 transition-colors">
                  O Que Você Vai Encontrar
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-300 transition-colors">
                  Depoimentos de Líderes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-amber-300 transition-colors text-amber-300">
                  Oferta Promocional (100 Esboços por R$ 19,99)
                </a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-amber-300 transition-colors text-left underline decoration-slate-600 underline-offset-4"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTerms} 
                  className="hover:text-amber-300 transition-colors text-left underline decoration-slate-600 underline-offset-4"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Suporte */}
          <div>
            <h4 className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <Mail size={14} /> Atendimento & Suporte
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <span className="text-slate-400 block">WhatsApp Oficial:</span>
                <a 
                  href={`https://wa.me/5511947069414?text=${whatsappPreMsg}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 font-bold hover:underline flex items-center gap-1 mt-0.5"
                >
                  <MessageCircle size={14} /> (11) 94706-9414
                </a>
              </li>
              <li>
                <span className="text-slate-400 block">E-mail:</span>
                <a href="mailto:atendimento@pregacoes.online" className="text-slate-200 font-medium hover:underline">
                  atendimento@pregacoes.online
                </a>
              </li>
              <li>
                <span className="text-slate-400 block">Formato de Entrega:</span>
                <span className="text-slate-200">100% Digital via E-mail imediatamente após aprovação.</span>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold flex items-center gap-1 mb-1">
                <ShieldCheck size={13} /> Compra Segura
              </span>
              Transação criptografada pela Kiwify. Seus dados cadastrais e financeiros estão 100% protegidos.
            </div>
          </div>

        </div>

        {/* Aviso Legal de Rodapé */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
          <p className="max-w-3xl mx-auto">
            Aviso Legal: Este produto é um material de apoio pastoral e de estudo bíblico. As mensagens foram formuladas à luz dos princípios das Escrituras Sagradas. Não garantimos resultados específicos, pois a eficácia da pregação depende da unção divina, do preparo e da dedicação ministerial individual de cada líder.
          </p>
        </div>

      </div>
    </footer>
  );
};
