
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">PE</span>
          </div>
          <span className="text-2xl font-bold text-white serif">Pregação de Excelência</span>
        </div>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          Ferramentas de apoio ministerial para líderes que buscam servir ao Reino com clareza e fidelidade bíblica.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-slate-500 mb-8">
          <a href="#" className="hover:text-teal-400">Termos de Uso</a>
          <a href="#" className="hover:text-teal-400">Política de Privacidade</a>
          <a href="#" className="hover:text-teal-400">Suporte</a>
        </div>
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Pregações de Excelência. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
