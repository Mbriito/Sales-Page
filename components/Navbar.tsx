
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PE</span>
            </div>
            <span className="text-xl font-bold text-gray-900 serif">Pregação de Excelência</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#problemas" className="text-gray-600 hover:text-teal-600 transition">Desafios</a>
            <a href="#solucao" className="text-gray-600 hover:text-teal-600 transition">O Recurso</a>
            <a href="#beneficios" className="text-gray-600 hover:text-teal-600 transition">Benefícios</a>
            <a href="#preço" className="text-gray-600 hover:text-teal-600 transition font-semibold">Garantir Acesso</a>
          </div>
          <div className="flex md:hidden">
             <a href="#preço" className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">Começar</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
