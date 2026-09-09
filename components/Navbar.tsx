import React from 'react';
import { BookOpen, ShieldCheck, Instagram, Facebook, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  checkoutUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenPrivacy, 
  onOpenTerms,
  checkoutUrl = "https://pay.kiwify.com.br/6ghqN34"
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      
      {/* Top Banner de Urgência & Redes Sociais */}
      <div className="bg-gradient-to-r from-blue-950 via-[#0a192f] to-blue-950 text-slate-200 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <a 
              href="https://instagram.com/fontepregador" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold"
            >
              <Instagram size={13} className="text-pink-400" />
              <span>@fontepregador</span>
            </a>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck size={13} /> Material Bíblico Verificado
            </span>
          </div>

          <div className="mx-auto sm:mx-0 font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
            <span className="animate-pulse">⚡</span> OFERTA ESPECIAL: 100 ESBOÇOS COMPLETOS POR APENAS <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black">R$ 19,99</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
            <span>Envio Imediato via E-mail</span>
          </div>
        </div>
      </div>

      {/* Barra Principal da Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Logo / Marca */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-slate-950 shadow-md">
              <BookOpen className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black text-white serif block leading-tight">
                Pregações de Excelência
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase block">
                50 Esboços + 50 Pregações de Mulheres
              </span>
            </div>
          </a>

          {/* Links Rápidos Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-bold text-slate-200">
            <a href="#especificidade" className="hover:text-amber-300 transition">O Que Você Recebe</a>
            <a href="#depoimentos" className="hover:text-amber-300 transition">Depoimentos</a>
            <a href="#faq" className="hover:text-amber-300 transition">Perguntas Frequentes</a>
            <a href="#oferta" className="hover:text-amber-300 transition text-amber-400">Garantir E-books</a>
          </nav>

          {/* Botão de Ação Direta no Topo */}
          <div className="flex items-center gap-3">
            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-checkout="true"
              data-product-name="Combo 100 Esboços (Navbar)"
              data-product-value="19.99"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Acessar Agora</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
