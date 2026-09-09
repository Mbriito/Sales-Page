import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-stone-50 rounded-3xl shadow-2xl border border-rose-100 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3b0d19] via-[#4d1323] to-[#2d0a14] p-6 text-white flex items-center justify-between border-b border-rose-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold serif text-rose-50">
                {activeTab === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h2>
              <p className="text-xs text-rose-200/80">
                Transparência e proteção total para os seus dados (LGPD)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-rose-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-rose-100 bg-rose-50/50 p-1.5 px-6 gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'privacy'
                ? 'bg-rose-700 text-white shadow-md'
                : 'text-stone-600 hover:text-rose-900 hover:bg-rose-100/50'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Política de Privacidade
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'terms'
                ? 'bg-rose-700 text-white shadow-md'
                : 'text-stone-600 hover:text-rose-900 hover:bg-rose-100/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Termos e Condições
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-stone-700 text-sm leading-relaxed">
          {activeTab === 'privacy' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-rose-100/60 border border-rose-200 text-rose-950 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed font-medium">
                  Sua privacidade é nossa prioridade fundamental. Este documento explica detalhadamente como coletamos, usamos, armazenamos e protegemos suas informações de acordo com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  <Eye className="w-4 h-4 text-rose-600" /> 1. Informações que Coletamos
                </h3>
                <p>Coletamos apenas as informações estritamente necessárias para processar e entregar seu pedido do e-Book <strong>50 Pregações Poderosas</strong> e <strong>50 Temas de Culto para Mulheres</strong>:</p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li><strong>Dados de Identificação:</strong> Nome completo, e-mail e número de telefone/WhatsApp fornecidos no momento do pedido ou do suporte.</li>
                  <li><strong>Dados de Pagamento:</strong> Processados em ambiente 100% criptografado e seguro através das plataformas oficiais parceiras (Kiwify / Hotmart). Não armazenamos números completos de cartão de crédito.</li>
                  <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador e páginas visitadas para garantir o bom funcionamento do site e prevenção contra fraudes.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  <Lock className="w-4 h-4 text-rose-600" /> 2. Como Utilizamos Suas Informações
                </h3>
                <p>Os dados coletados são utilizados exclusivamente para as seguintes finalidades:</p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li>Enviar o link de acesso imediato aos e-Books comprados para o seu e-mail.</li>
                  <li>Prestar suporte ao cliente e atendimento ministerial via e-mail e WhatsApp.</li>
                  <li>Notificar sobre atualizações do material, bônus exclusivos ou ofertas promocionais do ministério.</li>
                  <li>Cumprir obrigações legais e fiscais vigentes.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-rose-600" /> 3. Proteção e Segurança dos Dados
                </h3>
                <p>
                  Adotamos medidas técnicas e organizacionais avançadas para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração. Todas as transações financeiras são criptografadas com certificado SSL de 256 bits.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  🤝 4. Compartilhamento com Terceiros
                </h3>
                <p>
                  <strong>Jamais vendemos, alugamos ou comercializamos seus dados com terceiros.</strong> Seus dados são compartilhados apenas com parceiros estritamente necessários para a operação do produto:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li><strong>Plataformas de Pagamento (Kiwify / Hotmart):</strong> Para processamento seguro da cobrança e emissão da compra.</li>
                  <li><strong>Serviços de E-mail Marketing:</strong> Para entrega automatizada do conteúdo digital.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  ⚖️ 5. Seus Direitos (LGPD)
                </h3>
                <p>Você tem total direito de, a qualquer momento:</p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li>Confirmar a existência de tratamento de dados e acessar seus dados pessoais.</li>
                  <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
                  <li>Solicitar a exclusão definitiva do seu e-mail e dados da nossa lista de contatos.</li>
                  <li>Revogar o consentimento para recebimento de comunicações a qualquer momento.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] flex items-center gap-2 border-b border-rose-100 pb-2">
                  📬 6. Contato do Encarregado de Proteção de Dados
                </h3>
                <p>Para dúvidas sobre esta política ou solicitação de exclusão de dados, entre em contato:</p>
                <p className="bg-rose-50 p-3 rounded-xl border border-rose-200 text-xs font-mono text-rose-950">
                  E-mail: atendimento@pregacoes.online <br />
                  WhatsApp Suporte: (11) 94706-9414
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] border-b border-rose-100 pb-2">
                  1. Aceitação dos Termos
                </h3>
                <p>
                  Ao adquirir ou acessar o e-Book <strong>50 Pregações Poderosas</strong> ou o e-Book <strong>50 Temas de Culto para Mulheres</strong>, você concorda expressamente com estes Termos de Uso. Caso não concorde com algum dos termos, recomendamos não efetuar a compra.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] border-b border-rose-100 pb-2">
                  2. Licença de Uso e Direitos Autorais
                </h3>
                <p>
                  O conteúdo disponibilizado é de propriedade intelectual exclusiva do autor. Ao adquirir o material, é concedida uma licença pessoal, não exclusiva e intransferível para:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li>Acessar, ler, editar e utilizar os esboços e sermões para ministração em sua igreja local, reuniões, estudos ou pequenos grupos.</li>
                  <li>Baixar e imprimir os arquivos em formato PDF e Word para uso pessoal ou ministerial.</li>
                </ul>
                <p className="text-rose-800 font-semibold text-xs mt-2">
                  🚫 É estritamente proibida a revenda, redistribuição gratuita em grupos públicos de WhatsApp/Telegram, cópia em massa ou disponibilização pública na internet dos arquivos originais.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] border-b border-rose-100 pb-2">
                  3. Política de Garantia incondicional de 7 Dias
                </h3>
                <p>
                  Oferecemos uma garantia incondicional de 7 (sete) dias corridos a contar da data de confirmação do pagamento. Se por qualquer motivo o material não atender às suas expectativas, você poderá solicitar o reembolso integral de 100% do valor pago diretamente pela plataforma de pagamento sem complicações.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] border-b border-rose-100 pb-2">
                  4. Entrega e Acesso ao Produto Digital
                </h3>
                <p>
                  A entrega é realizada de forma 100% digital imediatamente após a aprovação do pagamento pelo meio escolhido (PIX, Cartão de Crédito ou Boleto). O link de download e instruções são enviados para o e-mail cadastrado na compra.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#3b0d19] border-b border-rose-100 pb-2">
                  5. Foro e Legislação Aplicável
                </h3>
                <p>
                  Estes Termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 bg-rose-50/80 border-t border-rose-100 flex justify-between items-center text-xs text-stone-500">
          <span>Última atualização: Julho de 2026</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl transition-all shadow-sm"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
