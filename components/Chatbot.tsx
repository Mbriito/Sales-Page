import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, ChevronRight, MessageCircle, ShieldCheck, Crown, Lock, Instagram, Zap } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatbotProps {
  onOpenPrivacy?: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenPrivacy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: `Paz do Senhor! 🙏
Sou a assistente virtual da 'Pregações de Excelência' (@fontepregador) — estou aqui para te ajudar a enriquecer seu ministério com esboços bíblicos e ministrações femininas completas (Word e PDF).

Acesse de qualquer Notebook, Celular ou Tablet!

⚡ **PROMOÇÃO RELÂMPAGO 5 MINUTOS:**
🔥 Os 2 E-Books juntos por apenas **R$ 19,99**!

Nossas opções regulares:
1️⃣ **Combo Completo (100 Mensagens: 50 Gerais + 50 Mulheres)** — R$ 49,99
2️⃣ **50 Pregações Poderosas** — R$ 39,99
3️⃣ **50 Temas de Culto para Mulheres** — R$ 34,99

Como posso te ajudar hoje?` 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  const quickReplies = [
    { id: '1', label: '⚡ Promoção R$ 19,99', text: 'Como funciona a oferta dos 2 e-books por R$ 19,99 nos próximos 5 minutos?' },
    { id: '2', label: '🌸 Temas de Mulheres', text: 'Quero ver sobre os 50 Temas de Culto para Mulheres' },
    { id: '3', label: '📖 50 Pregações', text: 'Gostaria de ver os temas das 50 Pregações Poderosas' },
    { id: '4', label: '📱 Instagram @fontepregador', text: 'Qual é o Instagram e Facebook oficial?' },
    { id: '5', label: '🔒 Privacidade e LGPD', text: 'Como funciona a política de privacidade e segurança do site?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `Você é a assistente ministerial virtual atenciosa da 'Pregações de Excelência' (@fontepregador).

          REGRAS DE RESPOSTA ESPECÍFICAS:
          
          1. SE O USUÁRIO PERGUNTAR SOBRE A OFERTA RELÂMPAGO 5 MINUTOS (R$ 19,99):
          Explique que por tempo limitado (próximos 5 minutos) o comprador pode levar os 2 e-Books completos ('50 Pregações Poderosas' + '50 Temas de Culto para Mulheres') por apenas R$ 19,99 com acesso imediato no Word e PDF.

          2. SE O USUÁRIO PERGUNTAR SOBRE O COMBO REGULAR:
          Explique que o Combo normal sai por R$ 49,99 (Economia de mais de R$ 340,00) e dá direito aos 2 e-books + 3 bônus exclusivos.

          3. SE O USUÁRIO PERGUNTAR SOBRE REDES SOCIAIS:
          Informe o Instagram oficial @fontepregador (https://instagram.com/fontepregador) e o Facebook /fontepregador.

          4. COMPATIBILIDADE DE DISPOSITIVOS:
          Asegure que todos os arquivos são enviados nos formatos Word (.docx editável) e PDF, podendo ser lidos ou editados em Notebook, Celular e Tablet.

          5. DETALHES DA LOJA:
          - Preço Combo Relâmpago 5 min: R$ 19,99
          - Preço Combo Regular: R$ 49,99
          - Preço Produto Geral: R$ 39,99
          - Preço Produto Mulheres: R$ 34,99
          - Garantia: 7 Dias Incondicional.
          - WhatsApp: (11) 94706-9414.
          - E-mail: atendimento@pregacoes.online.
          
          Tom de voz: Fraterno, respeitoso, ministerial e acolhedor.`,
        },
      });
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) initChat();
      const response = await chatRef.current!.sendMessage({ message: text });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Desculpe, tente novamente.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Estou com uma breve instabilidade. Se preferir, pode me chamar no WhatsApp pelo link no site!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {/* Janela do Chat */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[350px] md:w-[410px] max-h-[580px] h-[80vh] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-rose-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3b0d19] via-[#4f1325] to-[#2d0a14] p-5 text-white flex justify-between items-center shadow-md relative overflow-hidden">
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-rose-500/20 rounded-2xl flex items-center justify-center border border-rose-400/30">
                <Crown size={22} className="text-amber-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-rose-50">Atendimento @fontepregador</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-rose-200/90 uppercase tracking-wider font-bold">Online para Ajudar</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors text-rose-200">
              <X size={20} />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fdf8f5]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-rose-700 text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 border border-rose-100 rounded-tl-none'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
            
            {/* Respostas Rápidas */}
            {!isLoading && messages[messages.length - 1].role === 'model' && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleSendMessage(reply.text)}
                    className="bg-white border border-rose-200 text-rose-900 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-rose-50 hover:border-rose-300 transition-all flex items-center gap-1.5 text-left shadow-xs"
                  >
                    {reply.label}
                    <ChevronRight size={13} className="text-rose-500" />
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-rose-100 text-xs text-stone-400 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-rose-600 rounded-full animate-bounce"></span>
                  </div>
                  <span>Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form / Input */}
          <div className="p-3 bg-white border-t border-rose-100">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); setInput(''); }}
              className="flex items-center gap-2 bg-stone-100 rounded-xl px-3 py-1 border border-rose-100 focus-within:border-rose-400 focus-within:bg-white transition-all"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua dúvida..."
                className="flex-1 bg-transparent border-none py-2 text-xs focus:ring-0 outline-none text-stone-800"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-rose-700 text-white p-2 rounded-lg hover:bg-rose-800 disabled:opacity-40 transition-all"
              >
                <Send size={15} />
              </button>
            </form>
            
            <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400 px-1">
              <span className="flex items-center gap-1"><ShieldCheck size={11} className="text-rose-600" /> Garantia 7 Dias</span>
              {onOpenPrivacy && (
                <button onClick={onOpenPrivacy} className="text-rose-700 font-semibold hover:underline flex items-center gap-1">
                  <Lock size={10} /> Privacidade LGPD
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Toggle Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) initChat();
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 z-50 ${
          isOpen ? 'bg-stone-900 text-white' : 'bg-gradient-to-r from-rose-700 to-pink-700 text-white'
        }`}
        aria-label="Abrir suporte virtual"
      >
        {isOpen ? <X size={26} /> : <Crown size={26} className="text-amber-200" />}
      </button>
    </div>
  );
};
