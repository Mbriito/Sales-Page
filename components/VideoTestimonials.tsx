import React, { useState } from 'react';
import { Play, Star, CheckCircle2, ShieldCheck, Video, X, Volume2, Sparkles, Quote, Clock, Church, UserCheck } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  church: string;
  city: string;
  duration: string;
  topic: string;
  badgeColor: string;
  quote: string;
  avatarBg: string;
  avatarInitials: string;
  highlightText: string;
  detailedMessage: string;
  thumbnailGradient: string;
}

export const VideoTestimonials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoList: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Pr. Samuel Carvalho',
      role: 'Pastor Presidente',
      church: 'Igreja Batista Renovada',
      city: 'Belo Horizonte - MG',
      duration: '01:48',
      topic: '50 Pregações Poderosas',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      quote: '"Economizei mais de 10 horas semanais de estudo e a igreja sentiu a profundidade das mensagens!"',
      avatarBg: 'from-amber-600 to-rose-700',
      avatarInitials: 'SC',
      highlightText: 'Sermões bíblicos com excelente profundidade exegética e aplicação prática para o domingo.',
      detailedMessage: '“Como pastor titular, minha semana é repleta de visitas e atendimentos pastorais. O material de 50 Pregações Poderosas me deu uma base teológica sólida e pronta para editar no Word. As mensagens bíblicas são equilibradas, cristocêntricas e tocam o coração da membresia.”',
      thumbnailGradient: 'from-[#3b0d19] via-[#5c1628] to-[#1f060d]'
    },
    {
      id: '2',
      name: 'Pra. Elisângela Martins',
      role: 'Coordenadora de Mulheres',
      church: 'Assembleia de Deus Ministério Vida',
      city: 'Campinas - SP',
      duration: '02:15',
      topic: '50 Temas de Culto para Mulheres',
      badgeColor: 'bg-pink-100 text-rose-900 border-pink-300',
      quote: '"O Chá de Mulheres e o nosso Congresso Feminino foram transformadores com esses temas!"',
      avatarBg: 'from-pink-600 to-rose-800',
      avatarInitials: 'EM',
      highlightText: 'Abordagens sobre cura interior, Ester, Rute e restauração familiar com muita unção.',
      detailedMessage: '“Estávamos precisando de temas novos e impactantes para o nosso retiro e cultos mensais de mulheres. O e-Book com os 50 temas femininos trouxe uma riqueza de versículos e dinâmicas que envolveram todas as irmãs. Recomendo de olhos fechados a todas as pastoras e líderes!”',
      thumbnailGradient: 'from-[#4a1020] via-[#6d1b32] to-[#2e0813]'
    },
    {
      id: '3',
      name: 'Pr. Daniel Nogueira',
      role: 'Pastor de Ensino & Doutrina',
      church: 'Comunidade Cristã Aliança',
      city: 'Curitiba - PR',
      duration: '01:32',
      topic: 'Combo Completo (100 Mensagens)',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
      quote: '"A facilidade de editar no Word e abrir no tablet durante a ministração facilitou demais!"',
      avatarBg: 'from-rose-700 to-stone-900',
      avatarInitials: 'DN',
      highlightText: 'Arquivos 100% editáveis no Word, prontos para anotações e uso no púlpito.',
      detailedMessage: '“Adquiri o combo completo para equipar também os obreiros e líderes de célula da nossa igreja. O fato de vir tanto em PDF quanto em Word facilita para quem quer acrescentar ilustrações ou personalizar o sermão conforme a direção do Espírito Santo.”',
      thumbnailGradient: 'from-[#2e0914] via-[#471120] to-[#170308]'
    },
    {
      id: '4',
      name: 'Missionária Raquel Bastos',
      role: 'Líder de Círculo de Oração',
      church: 'Igreja Pentecostal Deus é Fiel',
      city: 'Salvador - BA',
      duration: '02:04',
      topic: 'Mulheres que Oram',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      quote: '"As mensagens trouxeram renovo e autoridade espiritual para a nossa reunião de oração semanal."',
      avatarBg: 'from-amber-700 to-pink-700',
      avatarInitials: 'RB',
      highlightText: 'Foco prático em oração no lar, autoridade cristã e intercessão pela família.',
      detailedMessage: '“Toda semana eu precisava de uma palavra edificante para alimentar as irmãs no círculo de oração. Esse material é ouro puro nas mãos de quem serve na obra do Senhor. O valor é simbólico diante do tamanho da bênção.”',
      thumbnailGradient: 'from-[#380c18] via-[#591427] to-[#20050e]'
    }
  ];

  return (
    <section id="depoimentos-video" className="py-24 bg-gradient-to-b from-[#fbf4ee] via-white to-[#fdf8f5] text-stone-800 relative overflow-hidden border-t border-rose-100">
      
      {/* Luzes decorativas sutis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-200/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-100/90 text-rose-800 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-rose-200 shadow-sm">
            <Video className="w-3.5 h-3.5 text-rose-600" />
            <span>TESTEMUNHOS & VÍDEO-RELATOS</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black serif text-[#3b0d19] leading-tight mb-4">
            Veja o Que Pastores e Líderes <br />
            <span className="bg-gradient-to-r from-rose-700 via-pink-700 to-amber-700 bg-clip-text text-transparent">
              Estão Falando em Vídeo
            </span>
          </h2>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
            Pastores titulares, pastoras de ministérios femininos e missionárias compartilham como os e-Books transformaram suas ministrações e preparações de cultos.
          </p>
        </div>

        {/* Grid de Vídeo Testemunhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {videoList.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedVideo(item);
                setIsPlaying(true);
              }}
              className="group cursor-pointer bg-white rounded-3xl border border-rose-100 hover:border-rose-300 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* Thumbnail / Moldura de Vídeo Estilizada */}
              <div className={`relative h-56 bg-gradient-to-br ${item.thumbnailGradient} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                
                {/* Efeito de grade sutil e brilho */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>

                {/* Topo do Thumbnail: Badge e Duração */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
                    {item.topic}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-rose-100 border border-white/10">
                    <Clock size={11} className="text-amber-300" />
                    {item.duration}
                  </span>
                </div>

                {/* Botão Central de Play com Pulso */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-110 group-hover:bg-amber-300 transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping"></span>
                    <Play className="w-6 h-6 fill-stone-950 ml-1 relative z-10" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-200 mt-2.5 drop-shadow-md flex items-center gap-1">
                    <Sparkles size={12} /> Assistir Relato
                  </span>
                </div>

                {/* Rodapé do Thumbnail: Nome e Igreja */}
                <div className="relative z-10 flex items-center gap-2.5 pt-2 border-t border-white/15">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${item.avatarBg} text-white font-black text-xs flex items-center justify-center border border-white/30 shadow-sm shrink-0`}>
                    {item.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate flex items-center gap-1">
                      {item.name}
                      <CheckCircle2 size={12} className="text-amber-300 shrink-0" />
                    </p>
                    <p className="text-[10px] text-rose-200/80 truncate font-light">{item.church}</p>
                  </div>
                </div>

              </div>

              {/* Corpo do Card com Citação */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex gap-1 text-amber-400 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-700 italic font-normal leading-relaxed line-clamp-3 mb-3">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-3 border-t border-rose-50 flex items-center justify-between text-[11px]">
                  <span className="text-rose-700 font-bold flex items-center gap-1">
                    <UserCheck size={13} /> {item.role}
                  </span>
                  <span className="text-stone-400 text-[10px]">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Credibilidade Ministerial */}
        <div className="bg-[#fcf5f0] border border-rose-200/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-rose-700 text-amber-300 flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-[#3b0d19] text-base md:text-lg">
                Mais de 3.800 Líderes e Pregadores Edificados em Todo o Brasil
              </h3>
              <p className="text-stone-600 text-xs md:text-sm font-light">
                Conteúdo biblicamente embasado, pronto para leitura e edição no Word em qualquer dispositivo.
              </p>
            </div>
          </div>

          <a
            href="#oferta"
            className="shrink-0 bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-800 hover:to-pink-800 text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all text-center"
          >
            Quero Meus E-Books por R$ 19,99
          </a>
        </div>

      </div>

      {/* Modal Interativo de Vídeo Player Estilizado */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1d060c] text-white rounded-3xl border border-rose-800/60 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Header do Modal */}
            <div className="p-4 bg-gradient-to-r from-[#3b0d19] to-[#25060e] flex items-center justify-between border-b border-rose-900/50">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${selectedVideo.avatarBg} text-white font-black text-xs flex items-center justify-center border border-white/30`}>
                  {selectedVideo.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    {selectedVideo.name}
                    <span className="text-[10px] bg-amber-400 text-stone-950 font-black px-2 py-0.2 rounded-full uppercase">
                      Verificado
                    </span>
                  </h4>
                  <p className="text-[11px] text-rose-200/80">{selectedVideo.church} • {selectedVideo.city}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl text-rose-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar depoimento em vídeo"
              >
                <X size={20} />
              </button>
            </div>

            {/* Simulação de Player de Vídeo em Alta Definição */}
            <div className="relative bg-gradient-to-b from-[#2e0914] via-[#1a040b] to-[#0d0205] aspect-video flex flex-col justify-between p-6 overflow-hidden">
              
              {/* Marca d'água ministerial */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-rose-200">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Depoimento Real de Ministério</span>
              </div>

              {/* Indicador de Som / Áudio */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] text-amber-300 flex items-center gap-1.5">
                <Volume2 size={12} /> Áudio Otimizado
              </div>

              {/* Área Central: Ondas de Áudio e Citação Destacada */}
              <div className="my-auto text-center max-w-lg mx-auto z-10">
                <Quote className="w-10 h-10 text-amber-400/40 mx-auto mb-2" />
                <p className="text-base md:text-lg font-serif italic text-rose-100 leading-relaxed mb-4">
                  {selectedVideo.detailedMessage}
                </p>

                {/* Simulador de Onda de Áudio */}
                <div className="flex items-center justify-center gap-1 h-8 mb-2">
                  <span className="w-1 bg-amber-400 rounded-full h-3 animate-pulse"></span>
                  <span className="w-1 bg-amber-400 rounded-full h-6 animate-pulse [animation-delay:0.1s]"></span>
                  <span className="w-1 bg-amber-400 rounded-full h-8 animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-1 bg-amber-400 rounded-full h-4 animate-pulse [animation-delay:0.3s]"></span>
                  <span className="w-1 bg-rose-400 rounded-full h-7 animate-pulse [animation-delay:0.15s]"></span>
                  <span className="w-1 bg-amber-400 rounded-full h-5 animate-pulse [animation-delay:0.25s]"></span>
                  <span className="w-1 bg-amber-400 rounded-full h-8 animate-pulse [animation-delay:0.35s]"></span>
                  <span className="w-1 bg-rose-400 rounded-full h-3 animate-pulse"></span>
                </div>
                <p className="text-[10px] text-rose-300/80 uppercase tracking-widest font-mono">
                  {selectedVideo.highlightText}
                </p>
              </div>

              {/* Barra de Controles Inferior do Vídeo */}
              <div className="relative z-10 bg-black/60 backdrop-blur-md rounded-2xl p-3 border border-white/10 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold"
                  >
                    {isPlaying ? <span className="text-xs">❚❚</span> : <Play size={14} className="fill-stone-950 ml-0.5" />}
                  </button>
                  <span className="text-amber-300 font-mono text-[11px]">00:42 / {selectedVideo.duration}</span>
                </div>

                {/* Barra de Progresso */}
                <div className="flex-1 bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-2/5 rounded-full"></div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-rose-200 font-bold">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span>5.0</span>
                </div>
              </div>

            </div>

            {/* Rodapé com Botão de Ação Direta */}
            <div className="p-4 bg-[#280812] border-t border-rose-900/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left text-xs text-rose-200">
                <span className="font-bold text-white block">Gostou desse testemunho?</span>
                <span className="text-rose-300/80 text-[11px]">Leve o material completo com 90% de desconto.</span>
              </div>

              <a
                href="#oferta"
                onClick={() => setSelectedVideo(null)}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg text-center"
              >
                Garantir E-Books por R$ 19,99
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
