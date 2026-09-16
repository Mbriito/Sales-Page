import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Sparkles, 
  Search, 
  BookOpen, 
  Heart, 
  Flame, 
  Home, 
  Crown, 
  ShieldCheck, 
  Copy, 
  Check, 
  Download, 
  Zap, 
  ArrowRight, 
  Maximize2, 
  Volume2, 
  Star,
  Users,
  Compass,
  Bookmark
} from 'lucide-react';

interface WebAppSectionProps {
  checkoutUrl?: string;
}

interface WebAppTheme {
  id: number;
  title: string;
  passage: string;
  category: 'cura' | 'oracao' | 'familia' | 'biblicas' | 'fe';
  categoryLabel: string;
  tag: string;
  duration: string;
  summary: string;
  outline: string[];
  prayerFocus: string;
  suggestedSongs: string[];
}

export const WebAppSection: React.FC<WebAppSectionProps> = ({
  checkoutUrl = "https://pay.kiwify.com.br/6ghqN34"
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeThemeId, setActiveThemeId] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const categories = [
    { id: 'todos', label: 'Todos os 50 Temas', count: 50, icon: Sparkles },
    { id: 'cura', label: 'Cura da Alma & Emoções', count: 10, icon: Heart },
    { id: 'oracao', label: 'Círculo de Oração & Clamor', count: 10, icon: Flame },
    { id: 'familia', label: 'Família, Casamento & Filhos', count: 10, icon: Home },
    { id: 'biblicas', label: 'Mulheres Notáveis da Bíblia', count: 10, icon: Crown },
    { id: 'fe', label: 'Fé, Renovo & Autoridade', count: 10, icon: ShieldCheck }
  ];

  const sampleThemes: WebAppTheme[] = [
    {
      id: 1,
      title: "Ana: Quando as Lágrimas Viram Clamor e Milagre",
      passage: "1 Samuel 1:10-18",
      category: "oracao",
      categoryLabel: "Círculo de Oração & Clamor",
      tag: "Ideal para Cultos de Oração",
      duration: "35 min",
      summary: "Como transformar a dor da esterilidade e o desprezo em uma oração fervorosa que move os céus e gera propósitos eternos.",
      outline: [
        "1. A dor silenciosa que ninguém compreende, mas Deus enxerga (v. 10)",
        "2. Quando a aflição nos leva ao altar e não à murmuração (v. 12-15)",
        "3. O voto de consagração: entregando a bênção de volta a Deus (v. 11)",
        "4. A certeza da resposta: saindo do templo com o rosto transformado (v. 18)"
      ],
      prayerFocus: "Clamor por mulheres estéreis física ou espiritualmente e mães em intercessão pelos filhos.",
      suggestedSongs: ["Aos Pés da Cruz", "Raridade", "Deus Cuida de Mim"]
    },
    {
      id: 2,
      title: "A Mulher do Fluxo de Sangue: Rompendo a Multidão da Vergonha",
      passage: "Marcos 5:25-34",
      category: "cura",
      categoryLabel: "Cura da Alma & Emoções",
      tag: "Cura & Restauração",
      duration: "40 min",
      summary: "12 anos de sofrimento, perdas e rejeição que terminaram em um único toque de fé na orla das vestes de Jesus.",
      outline: [
        "1. O cansaço de quem já tentou de tudo nos recursos humanos (v. 26)",
        "2. A determinação da fé que não se intimida com o preconceito e a multidão (v. 27)",
        "3. O toque que extrai virtude e cura a raiz da alma (v. 29-30)",
        "4. O chamado público de Jesus: 'Filha, a tua fé te salvou; vai em paz' (v. 34)"
      ],
      prayerFocus: "Ministração por cura emocional, quebra de complexos de rejeição e traumas do passado.",
      suggestedSongs: ["Se Eu Apenas Te Tocar", "Vem me Curar", "Ousado Amor"]
    },
    {
      id: 3,
      title: "Ester: Posicionamento e Coragem em Tempos de Crise",
      passage: "Ester 4:13-16",
      category: "biblicas",
      categoryLabel: "Mulheres Notáveis da Bíblia",
      tag: "Mulheres da Bíblia",
      duration: "30 min",
      summary: "De órfã humilde a rainha protetora de uma nação inteira: a sabedoria da mulher que jejuou antes de tomar uma decisão.",
      outline: [
        "1. Quem sabe se não foi para um momento como este que você foi chamada? (v. 14)",
        "2. A arma do jejum e da intercessão unida antes da ação (v. 16)",
        "3. A graça e a prudência que conquistam o favor divino diante do rei",
        "4. O livramento que Deus opera quando uma mulher decide se posicionar"
      ],
      prayerFocus: "Líderes cristãs, professoras e obreiras que precisam de discernimento e ousadia espiritual.",
      suggestedSongs: ["Mulher Virtuosa", "Deus dos Deuses", "Vem me Buscar"]
    },
    {
      id: 4,
      title: "Edificando a Casa sobre a Rocha: A Sabedoria no Lar",
      passage: "Provérbios 14:1 / Mateus 7:24-25",
      category: "familia",
      categoryLabel: "Família, Casamento & Filhos",
      tag: "Família & Casamento",
      duration: "35 min",
      summary: "A sabedoria prática para guardar a boca, proteger o cônjuge, blindar os filhos contra as más influências e atrair a paz celestial para a casa.",
      outline: [
        "1. A mulher sábia edifica; a tola destrói com suas próprias mãos (Pv 14:1)",
        "2. As tempestades virão sobre todas as casas, mas só a edificada na rocha permanece",
        "3. O poder da palavra mansa no ambiente familiar e no casamento",
        "4. Consagrando a atmosfera do lar: altar de oração na sala e nos quartos"
      ],
      prayerFocus: "Restauração de casamentos em crise, salvação de maridos e libertação dos filhos.",
      suggestedSongs: ["Família de Deus", "Minha Morada", "A Bênção"]
    },
    {
      id: 5,
      title: "A Sunamita: Proclamando 'Vai Tudo Bem' Diante da Dor",
      passage: "2 Reis 4:18-26",
      category: "fe",
      categoryLabel: "Fé, Renovo & Autoridade",
      tag: "Fé & Renovação",
      duration: "35 min",
      summary: "Quando as circunstâncias gritam morte, a fé de uma mãe escolhe correr até o homem de Deus e profetizar a vitória.",
      outline: [
        "1. A hospitalidade que constrói um quarto para a presença de Deus (v. 9-10)",
        "2. A prova inesperada: quando aquilo que Deus deu parece morrer nos braços (v. 20)",
        "3. A vigilância da boca: 'Tudo vai bem' quando o coração está firmado no Todo-Poderoso (v. 26)",
        "4. A ressurreição do sonho: o milagre concedido pelo Senhor"
      ],
      prayerFocus: "Mulheres que receberam notícias ruins na semana e precisam de um renovo de esperança.",
      suggestedSongs: ["Vai Tudo Bem", "Não Pare", "A Promessa"]
    },
    {
      id: 6,
      title: "Marta e Maria: Escolhendo a Melhor Parte aos Pés de Jesus",
      passage: "Lucas 10:38-42",
      category: "cura",
      categoryLabel: "Cura da Alma & Emoções",
      tag: "Ansiedade & Esgotamento",
      duration: "30 min",
      summary: "Como vencer a sobrecarga mental, o ativismo ministerial desmedido e reencontrar a intimidade da comunhão diária com Cristo.",
      outline: [
        "1. A ansiedade e inquietação com muitas coisas no corre-corre diário (v. 41)",
        "2. A diferença entre servir a Jesus e estar aos pés de Jesus (v. 39)",
        "3. A 'boa parte' que jamais nos será tirada: intimidade e escuta atenta",
        "4. Reorganizando prioridades para ministrar sem se desgastar emocionalmente"
      ],
      prayerFocus: "Líderes sobrecarregadas, mães com estafa mental e dirigentes cansadas da rotina.",
      suggestedSongs: ["Aos Pés da Cruz", "Em Teus Braços", "Descansarei"]
    }
  ];

  const filteredThemes = sampleThemes.filter(theme => {
    const matchesCategory = selectedCategory === 'todos' || theme.category === selectedCategory;
    const matchesSearch = theme.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          theme.passage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          theme.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeTheme = sampleThemes.find(t => t.id === activeThemeId) || sampleThemes[0];

  const handleCopyOutline = () => {
    const textToCopy = `MENSAGEM: ${activeTheme.title}\nTEXTO: ${activeTheme.passage}\n\nTÓPICOS:\n${activeTheme.outline.join('\n')}\n\nFOCO DE ORAÇÃO: ${activeTheme.prayerFocus}\nLOUVORES: ${activeTheme.suggestedSongs.join(', ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="webapp" className="py-20 lg:py-28 bg-gradient-to-b from-[#071324] via-[#0b1d38] to-[#0a192f] text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Luzes e Efeitos de Fundo */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Destaque da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Área Exclusiva para Alunas • Mulher Plena & Restaurada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black serif text-white leading-tight mb-5">
            Entrega no <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-300 to-amber-400">Web App Interativo</span> com os 50 Temas
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Além dos arquivos em Word e PDF para download, você recebe acesso imediato à plataforma digital exclusiva. 
            Sem ocupar memória no seu celular: abra direto no navegador, encontre a ministração certa em segundos e pregue com total confiança!
          </p>
        </div>

        {/* Simulador Interativo do Web App no Celular / Tablet */}
        <div className="bg-slate-900/90 rounded-3xl border-2 border-amber-400/60 p-4 sm:p-8 shadow-2xl backdrop-blur-xl mb-14">
          
          {/* Topo do Navegador / Barra de Plataforma */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Crown size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300">Web App das Alunas</span>
                  <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full">ATIVO</span>
                </div>
                <h3 className="text-base sm:text-lg font-black serif text-white">
                  Mulher Plena & Restaurada • 50 Temas & Ministrações
                </h3>
              </div>
            </div>

            {/* Tags de Facilidade */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                <Smartphone size={14} className="text-amber-400" /> Celular
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                <Tablet size={14} className="text-amber-400" /> Tablet
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                <BookOpen size={14} className="text-amber-400" /> Computador
              </span>
            </div>
          </div>

          {/* Campo de Busca e Filtros de Categoria */}
          <div className="mt-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquise por tema, personagem bíblico ou palavra-chave (ex: Ana, cura, família, oração)..."
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            {/* Abas de Categorias */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md scale-105' 
                        : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Interativo: Lista de Temas à Esquerda + Visualizador da Mensagem à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Coluna da Esquerda: Lista de Temas Clicáveis (40% no Desktop) */}
            <div className="lg:col-span-5 space-y-3 max-h-[480px] overflow-y-auto pr-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-1 mb-1 flex items-center justify-between">
                <span>Clique em um tema para abrir o esboço:</span>
                <span className="text-amber-300">{filteredThemes.length} mensagens prontas</span>
              </div>

              {filteredThemes.map((theme) => {
                const isSelected = activeThemeId === theme.id;
                return (
                  <div
                    key={theme.id}
                    onClick={() => setActiveThemeId(theme.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected 
                        ? 'bg-gradient-to-r from-slate-950 to-[#0e213d] border-amber-400 shadow-md ring-1 ring-amber-400/40' 
                        : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-950'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {theme.tag}
                      </span>
                      <span className="text-[11px] text-amber-300/80 font-mono font-bold">
                        {theme.passage}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                      {theme.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {theme.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Coluna da Direita: Visualizador da Mensagem Aberta (Modo Leitura Púlpito) */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-7 flex flex-col justify-between shadow-inner relative">
              
              <div>
                {/* Barra de Ações do Visualizador */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-emerald-300 uppercase tracking-wide">
                      Modo Púlpito & Estudo
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Botão de tamanho da fonte */}
                    <button 
                      onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition"
                    >
                      Fonte: {fontSize === 'normal' ? 'Padrão' : 'Grande (Púlpito)'}
                    </button>

                    {/* Botão Copiar */}
                    <button
                      onClick={handleCopyOutline}
                      className="inline-flex items-center gap-1.5 text-xs bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 font-bold px-3 py-1.5 rounded-lg transition"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copied ? 'Copiado!' : 'Copiar Esboço'}</span>
                    </button>
                  </div>
                </div>

                {/* Título & Versículo Principal */}
                <div className="mb-5">
                  <div className="inline-block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                    {activeTheme.categoryLabel} • {activeTheme.duration}
                  </div>
                  <h3 className={`font-black serif text-white leading-tight ${fontSize === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {activeTheme.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-2 bg-slate-900 px-3 py-1 rounded-md border border-slate-800 text-xs font-mono text-amber-300">
                    <BookOpen size={13} />
                    <span>Texto Base: {activeTheme.passage}</span>
                  </div>
                </div>

                {/* Sinopse / Contexto */}
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 mb-5">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{activeTheme.summary}"
                  </p>
                </div>

                {/* Esboço Estruturado com 4 Tópicos */}
                <div className="mb-6">
                  <h5 className="text-xs uppercase tracking-wider text-amber-300 font-extrabold mb-3 flex items-center gap-1.5">
                    <Bookmark size={14} /> Estrutura do Esboço de Pregação:
                  </h5>
                  <div className="space-y-2.5">
                    {activeTheme.outline.map((point, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 flex items-start gap-2.5 ${
                          fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Foco de Oração & Louvores Sugeridos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800/80 text-xs">
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                    <div className="text-amber-400 font-bold mb-1 flex items-center gap-1">
                      <Flame size={13} /> Clamor no Altar:
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {activeTheme.prayerFocus}
                    </p>
                  </div>

                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                    <div className="text-amber-400 font-bold mb-1 flex items-center gap-1">
                      <Volume2 size={13} /> Louvores Sugeridos:
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {activeTheme.suggestedSongs.map((song, idx) => (
                        <span key={idx} className="bg-slate-800 text-slate-200 text-[10px] px-2 py-0.5 rounded-full">
                          {song}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Rodapé Interno do Card */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>✓ Incluso no combo sem mensalidades</span>
                <span className="text-amber-300 font-semibold">Liberado imediatamente após a compra</span>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Grandes Vantagens do Web App */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-3">
              <Smartphone size={20} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Não Ocupa Memória</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Funciona direto pelo navegador ou você pode adicionar como atalho na tela inicial do seu celular. Leve e rápido.
            </p>
          </div>

          <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-300 mb-3">
              <Search size={20} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Busca em 3 Segundos</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Foi chamada para ministrar de última hora? Digite o tema ou versículo e encontre o sermão pronto imediatamente.
            </p>
          </div>

          <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-3">
              <Maximize2 size={20} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Modo Leitura Púlpito</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fonte grande e contraste perfeito para ministrar no altar sem cansar a visão ou se perder nos tópicos.
            </p>
          </div>

          <div className="bg-slate-900/70 p-5 rounded-2xl border border-slate-800 hover:border-amber-400/40 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
              <Download size={20} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Downloads Também Inclusos</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Quer imprimir ou editar no Word? Os arquivos .docx e .pdf completos continuam disponíveis para baixar quando quiser.
            </p>
          </div>

        </div>

        {/* CTA Rápido direcionando para o Checkout */}
        <div className="text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track-checkout="true"
            data-product-name="Acesso Web App 50 Temas Mulher Plena"
            data-product-value="19.99"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-[0_15px_30px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>QUERO ACESSO AO WEB APP + 100 ESBOÇOS COMPLETOS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-slate-400 mt-2">
            Apenas R$ 19,99 em taxa única • Sem mensalidades • Acesso vitalício para alunas
          </p>
        </div>

      </div>
    </section>
  );
};
