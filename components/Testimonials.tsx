import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  Image as ImageIcon, 
  MessageSquare, 
  UserCheck, 
  Play, 
  Video, 
  X, 
  Volume2, 
  Sparkles, 
  Clock, 
  Church 
} from 'lucide-react';

interface VideoModalData {
  name: string;
  role: string;
  church: string;
  city: string;
  duration: string;
  topic: string;
  detailedMessage: string;
  initials: string;
}

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'videos' | 'prints'>('text');
  const [selectedVideo, setSelectedVideo] = useState<VideoModalData | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  const textTestimonials = [
    {
      id: 1,
      name: "Pr. Marcos Vinícius",
      role: "Pastor Titular - Igreja Batista Renovada (SP)",
      stars: 5,
      text: "“Com a correria da semana entre visitas pastorais e aconselhamentos, eu passava até 12 horas preparando as mensagens. Este material poupou meu tempo e trouxe uma profundidade bíblica impressionante para a igreja. Os irmãos elogiaram muito a clareza e aplicação prática!”",
      savedTime: "Economizou 10h de preparação por semana",
      city: "São Paulo - SP"
    },
    {
      id: 2,
      name: "Pra. Elisângela Martins",
      role: "Líder de Mulheres & Círculo de Oração (MG)",
      stars: 5,
      text: "“Estávamos precisando de temas novos e impactantes para o nosso retiro de mulheres e cultos mensais. Os 50 Temas de Culto para Mulheres foram um verdadeiro divisor de águas! A mensagem sobre Ana e a da Mulher do Fluxo de Sangue geraram cura e unção genuínas.”",
      savedTime: "Utilizado em 3 Congressos Femininos",
      city: "Belo Horizonte - MG"
    },
    {
      id: 3,
      name: "Pr. Daniel Nogueira",
      role: "Pastor Auxiliar & Dirigente de Congregação (PR)",
      stars: 5,
      text: "“O grande diferencial para mim foi o formato Word. Posso abrir no meu notebook ou tablet, acrescentar minhas ilustrações pessoais e levar direto para o púlpito. O conteúdo bíblico é sério, cristocêntrico e muito bem fundamentado. Valeu cada centavo!”",
      savedTime: "Usa semanalmente no púlpito",
      city: "Curitiba - PR"
    }
  ];

  const videoTestimonials = [
    {
      id: 'v1',
      name: 'Pr. Samuel Carvalho',
      role: 'Pastor Presidente',
      church: 'Igreja Batista Aliança Eterna',
      city: 'Belo Horizonte - MG',
      duration: '01:48',
      topic: '50 Pregações Poderosas',
      quote: '"Economizei mais de 10 horas semanais de estudo e a igreja sentiu a profundidade das mensagens!"',
      initials: 'SC',
      detailedMessage: '“Como pastor titular, minha semana é repleta de visitas e atendimentos pastorais. O material de 50 Pregações Poderosas me deu uma base teológica sólida e pronta para editar no Word. As mensagens bíblicas são equilibradas, cristocêntricas e tocam o coração da congregação.”',
      gradient: 'from-blue-900 via-slate-900 to-slate-950'
    },
    {
      id: 'v2',
      name: 'Pra. Elisângela Martins',
      role: 'Coordenadora do Ministério Feminino',
      church: 'Assembleia de Deus Vida Plena',
      city: 'Campinas - SP',
      duration: '02:15',
      topic: '50 Temas de Culto para Mulheres',
      quote: '"O Chá de Mulheres e o nosso Congresso Feminino foram transformadores com esses temas!"',
      initials: 'EM',
      detailedMessage: '“Estávamos precisando de temas novos e impactantes para o nosso retiro e cultos mensais de mulheres. O e-Book com os 50 temas femininos trouxe uma riqueza de versículos e dinâmicas que envolveram todas as irmãs. Recomendo de olhos fechados a todas as pastoras e líderes!”',
      gradient: 'from-amber-950 via-slate-900 to-slate-950'
    },
    {
      id: 'v3',
      name: 'Pr. Daniel Nogueira',
      role: 'Pastor de Ensino & Doutrina',
      church: 'Comunidade Cristã da Fé',
      city: 'Curitiba - PR',
      duration: '01:32',
      topic: 'Combo 100 Esboços',
      quote: '"A facilidade de editar no Word e abrir no tablet durante a ministração facilitou demais!"',
      initials: 'DN',
      detailedMessage: '“Adquiri o combo completo para equipar também os obreiros e líderes de célula da nossa igreja. O fato de vir tanto em PDF quanto em Word facilita para quem quer acrescentar ilustrações ou personalizar o sermão conforme a direção do Espírito Santo.”',
      gradient: 'from-slate-900 via-blue-950 to-slate-950'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção Unificada de Prova Social */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>PROVA SOCIAL & TESTEMUNHOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black serif text-[#0a192f] leading-tight mb-4">
            O que dizem os líderes que já utilizam nosso material
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Mais de 3.800 pregadores, pastoras e líderes em todo o Brasil confiam em nossas mensagens prontas para impactar suas congregações.
          </p>
        </div>

        {/* Seletor Visual Integrado (Evita Redundância de Seções) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm gap-1.5 max-w-md w-full justify-center">
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'text' 
                  ? 'bg-[#0a192f] text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Avaliações Escritas</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'videos' 
                  ? 'bg-[#0a192f] text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Video className="w-4 h-4 text-amber-400" />
              <span>Vídeo-Relatos</span>
            </button>

            <button
              onClick={() => setActiveTab('prints')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'prints' 
                  ? 'bg-[#0a192f] text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-emerald-500" />
              <span>Prints WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 1. ABA DE AVALIAÇÕES ESCRITAS (3 Cards) */}
        {activeTab === 'text' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 animate-in fade-in duration-300">
            {textTestimonials.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-black text-slate-700 ml-1.5">5.0 / 5.0</span>
                  </div>

                  <Quote className="w-8 h-8 text-blue-200 mb-2" />
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6 font-normal">
                    {item.text}
                  </p>
                </div>

                <div>
                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{item.savedTime}</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#0a192f] text-sm flex items-center gap-1">
                        {item.name}
                        <UserCheck size={14} className="text-blue-600 shrink-0" />
                      </h4>
                      <p className="text-xs text-slate-500 font-normal">{item.role}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{item.city}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 2. ABA DE VÍDEO-RELATOS (Cards Interativos com Play e Modal) */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 animate-in fade-in duration-300">
            {videoTestimonials.map((v) => (
              <div 
                key={v.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Moldura de Vídeo com Botão Play */}
                <div 
                  onClick={() => setSelectedVideo(v)}
                  className={`relative h-48 bg-gradient-to-br ${v.gradient} p-5 flex flex-col justify-between cursor-pointer overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="bg-slate-950/80 text-amber-300 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full border border-amber-400/30">
                      {v.topic}
                    </span>
                    <span className="bg-slate-950/80 text-slate-300 text-[11px] font-mono py-0.5 px-2 rounded-md flex items-center gap-1">
                      <Clock size={11} /> {v.duration}
                    </span>
                  </div>

                  {/* Botão de Play Centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-300 transition-all">
                      <Play size={22} className="fill-slate-950 ml-1" />
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-800 text-amber-300 font-black text-xs flex items-center justify-center border border-amber-400/30">
                      {v.initials}
                    </div>
                    <span className="text-xs font-bold text-white drop-shadow-sm">{v.name}</span>
                  </div>
                </div>

                {/* Conteúdo textual do depoimento */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-600 ml-1">Relato Verificado</span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                    {v.quote}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#0a192f]">{v.role}</p>
                      <p className="text-[11px] text-slate-500">{v.church}</p>
                    </div>
                    <button
                      onClick={() => setSelectedVideo(v)}
                      className="text-xs text-blue-700 font-bold hover:underline flex items-center gap-1"
                    >
                      <Play size={12} className="fill-blue-700" /> Assistir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. ABA DE PRINTS DO WHATSAPP (Espaço Dedicado para Conversas Reais) */}
        {activeTab === 'prints' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12 animate-in fade-in duration-300">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a192f] mb-2">
                Prints e Mensagens Espontâneas de Líderes
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Espaço preparado no layout para anexar capturas de tela reais de feedbacks enviados pelos pastores e dirigentes logo após receberem os arquivos.
              </p>

              {/* Molduras ilustrativas simulando prints do WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2 mb-2 font-bold text-emerald-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Mensagem via WhatsApp</span>
                  </div>
                  <p className="text-slate-700 italic leading-relaxed">
                    "Paz do Senhor pastor! Acabei de baixar os 100 esboços no meu Word. Que material rico! A pregação sobre Josué 24 vai ser o tema do culto de domingo aqui na igreja. Deus abençoe!"
                  </p>
                  <span className="text-[10px] text-slate-400 mt-2 block">Enviado hoje às 14:22</span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2 mb-2 font-bold text-emerald-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Mensagem via WhatsApp</span>
                  </div>
                  <p className="text-slate-700 italic leading-relaxed">
                    "Irmãos, os 50 temas para mulheres salvaram o nosso congresso feminino. Ministrei a mensagem da Ana e a igreja inteira chorou no altar. Nota 10!"
                  </p>
                  <span className="text-[10px] text-slate-400 mt-2 block">Enviado ontem às 19:40</span>
                </div>
              </div>

              <a 
                href="https://wa.me/5511947069414?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20material%20de%20prega%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <MessageSquare size={16} />
                Falar com Nosso Atendimento no WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Bloco de Chamada para Suporte com Telefone Atualizado */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-[#0a192f] text-white rounded-3xl p-6 sm:p-8 border border-blue-900 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-amber-300 block mb-1">
                  Atendimento Oficial
                </span>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  Dúvidas sobre o material? Fale diretamente com nossa equipe ministerial
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal">
                  WhatsApp: (11) 94706-9414 • E-mail: atendimento@pregacoes.online
                </p>
              </div>
            </div>

            <a 
              href="https://wa.me/5511947069414?text=Ol%C3%A1!%20Estou%20na%20p%C3%A1gina%20de%20pagamento%20do%20E-book%20de%20Prega%C3%A7%C3%B5es%20e%20fiquei%20com%20uma%20d%C3%BAvida%20antes%20de%20finalizar%20a%20compra."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare size={16} />
              Tirar Dúvida no WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* MODAL DE REPRODUÇÃO DO VÍDEO-RELATO */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 text-white relative shadow-2xl animate-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center">
                {selectedVideo.initials}
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{selectedVideo.name}</h4>
                <p className="text-xs text-amber-300">{selectedVideo.role} • {selectedVideo.church}</p>
              </div>
            </div>

            {/* Tela de visualização simulada */}
            <div className="relative bg-slate-950 rounded-2xl h-56 flex flex-col items-center justify-center border border-slate-800 mb-4 overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mb-2 animate-pulse">
                <Play size={24} className="fill-amber-400 text-amber-400 ml-1" />
              </div>
              <p className="text-xs font-semibold text-slate-300">Reproduzindo Relato em Alta Definição</p>
              <span className="text-[10px] text-slate-500 mt-1 font-mono">Duração: {selectedVideo.duration}</span>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 mb-6 text-xs text-slate-300 leading-relaxed italic">
              {selectedVideo.detailedMessage}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button 
                onClick={() => setSelectedVideo(null)}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl transition-all"
              >
                Fechar Vídeo
              </button>
              <a
                href="https://pay.kiwify.com.br/6ghqN34"
                target="_blank"
                rel="noopener noreferrer"
                data-track-checkout="true"
                data-product-name="Combo 100 Esboços (Modal Vídeo)"
                data-product-value="19.99"
                className="py-2.5 px-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all uppercase tracking-wider"
              >
                Garantir os 100 Esboços por R$ 19,99
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
