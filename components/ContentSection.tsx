import React from 'react';
import { CheckCircle2, BookOpen, Layers, Heart, Sparkles, Compass, Check, ArrowRight, Zap } from 'lucide-react';

interface ContentSectionProps {
  checkoutUrl?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  checkoutUrl = "https://pay.kiwify.com.br/6ghqN34"
}) => {
  const bulletPoints = [
    {
      title: "Mensagens Estruturadas (Introdução, Desenvolvimento e Conclusão)",
      desc: "Cada mensagem possui quebra-gelo inicial, contexto bíblico, 3 a 4 tópicos expositivos profundos e apelo final tocante."
    },
    {
      title: "Passagens Bíblicas com Contexto Histórico e Teológico",
      desc: "Você não recebe apenas versículos soltos; recebe a explicação do cenário cultural, geográfico e original de cada texto sagrado."
    },
    {
      title: "Ilustrações Marcantes e Aplicações Práticas para o Cotidiano",
      desc: "Exemplos reais e metáforas edificantes que prendem a atenção da congregação do início ao fim da ministração."
    },
    {
      title: "Formato 100% Editável no Word (.docx) e Pronto para Leitura em PDF",
      desc: "Adicione suas próprias notas, personalize os tópicos no computador ou abra direto no celular ou tablet no púlpito."
    },
    {
      title: "50 Sermões Gerais para Domingos, Cultos de Doutrina e Evangelismo",
      desc: "Sermões sobre fé, restauração familiar, milagres, vida de oração, salvação e intimidade com o Espírito Santo."
    },
    {
      title: "50 Pregações Exclusivas para Círculo de Oração, Chás e Congressos Femininos",
      desc: "Ministrações voltadas para o coração da mulher cristã: identidade, cura emocional, sabedoria no lar e poder na oração."
    }
  ];

  const themeExamples = [
    {
      number: "Tema 01",
      title: "Como vencer o vale (Salmos 23)",
      text: "Salmos 23:4",
      highlight: "O cuidado do Bom Pastor e o segredo para atravessar tempos de solidão e incerteza com paz e autoridade espiritual.",
      category: "50 Pregações Poderosas"
    },
    {
      number: "Tema 02",
      title: "O poder da oração de uma mulher (Ana)",
      text: "1 Samuel 1:10-18",
      highlight: "Quando as lágrimas viram clamor: como transformar dores da alma em milagres que impactam gerações inteiras.",
      category: "50 Temas para Mulheres"
    },
    {
      number: "Tema 03",
      title: "Quando Deus fecha uma porta para abrir um propósito (José do Egito)",
      text: "Gênesis 45:5-8",
      highlight: "Entendendo o silêncio de Deus e a transição da cova para o palácio na vida de quem tem promessa.",
      category: "50 Pregações Poderosas"
    },
    {
      number: "Tema 04",
      title: "Mulheres com propósito que marcam a história (Ester e Débora)",
      text: "Ester 4:14; Juízes 4:9",
      highlight: "Como posicionar-se com coragem, sabedoria e oração diante das batalhas que cercam a sua família e a igreja.",
      category: "50 Temas para Mulheres"
    },
    {
      number: "Tema 05",
      title: "A fé que move o sobrenatural em tempos de seca (Elias no Carmelo)",
      text: "1 Reis 18:41-45",
      highlight: "O som de uma abundante chuva: como perseverar no clamor até que o fogo de Deus desça e o renovo chegue.",
      category: "50 Pregações Poderosas"
    },
    {
      number: "Tema 06",
      title: "Da dor ao milagre: o toque que restaura a dignidade (A Mulher do Fluxo de Sangue)",
      text: "Marcos 5:25-34",
      highlight: "A superação do isolamento social e emocional através de um ato corajoso de fé nos pés de Jesus.",
      category: "50 Temas para Mulheres"
    },
    {
      number: "Tema 07",
      title: "Restaurando os altares da família (Josué 24:15)",
      text: "Josué 24:14-15",
      highlight: "Estratégias espirituais para blindar o seu lar contra as influências destrutivas e levantar um altar de oração diária.",
      category: "50 Pregações Poderosas"
    },
    {
      number: "Tema 08",
      title: "A mulher virtuosa em tempos modernos (Provérbios 31)",
      text: "Provérbios 31:10-31",
      highlight: "Equilíbrio entre vida pessoal, ministério, trabalho e casamento à luz da sabedoria que vem do alto.",
      category: "50 Temas para Mulheres"
    }
  ];

  return (
    <section id="especificidade" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção de Especificidade Solicitada */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>ESTRUTURA COMPLETA & PROFUNDA</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black serif text-[#0a192f] leading-tight mb-4">
            O que você vai encontrar neste material?
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Tudo foi meticulosamente organizado para economizar seu tempo de estudo sem abrir mão da fidelidade bíblica e da unção do Espírito Santo.
          </p>
        </div>

        {/* Lista com Bullet Points Atraentes (Ícones de Check) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {bulletPoints.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex gap-4 items-start"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco Solicitado: "Exemplos de Temas que você vai receber" */}
        <div className="bg-gradient-to-br from-[#0a192f] via-[#0f2744] to-[#071324] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-blue-900/50 relative overflow-hidden">
          
          {/* Efeito luminoso de fundo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs block mb-2">
                AMOSTRA REAL DO CONTEÚDO
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black serif text-white mb-3">
                Exemplos de Temas que você vai receber
              </h3>
              <p className="text-slate-300 text-sm font-normal">
                Veja alguns dos títulos prontos com introdução, desenvolvimento em tópicos e conclusão inclusos no material:
              </p>
            </div>

            {/* Grid dos Exemplos de Temas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {themeExamples.map((theme, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-400/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                        {theme.number}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {theme.category}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-1.5">
                      {theme.title}
                    </h4>

                    <div className="text-xs font-semibold text-amber-300 mb-2">
                      📖 Texto-chave: {theme.text}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {theme.highlight}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle2 size={13} /> Introdução, 3 Tópicos & Conclusão
                    </span>
                    <span className="font-mono text-slate-500">Editável .docx</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action intermediário */}
            <div className="mt-10 text-center">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track-checkout="true"
                data-product-name="Combo 100 Temas (Especificidade)"
                data-product-value="19.99"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all uppercase tracking-wider"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                QUERO ACESSAR TODOS OS 100 TEMAS AGORA
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Acesso imediato no Word e PDF logo após a confirmação.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
