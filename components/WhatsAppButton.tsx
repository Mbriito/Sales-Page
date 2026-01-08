
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5511984808967"; 
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as 50 Pregações de Excelência.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2 group">
      <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block animate-bounce">
        Dúvidas? Fale conosco!
      </div>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:rotate-12 animate-whatsapp"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};
