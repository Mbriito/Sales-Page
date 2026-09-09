import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContentSection } from './components/ContentSection';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: '02', minutes: '00', seconds: '00' });
  const [flashSeconds, setFlashSeconds] = useState(300); // 5 minutos = 300s
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyTab, setPrivacyTab] = useState<'privacy' | 'terms'>('privacy');

  const checkoutUrl = "https://pay.kiwify.com.br/6ghqN34";

  // Cronômetro Geral de 2 Horas
  useEffect(() => {
    const countdownDate = new Date().getTime() + (2 * 60 * 60 * 1000);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cronômetro Relâmpago de 5 Minutos (Regressivo)
  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSeconds((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashMinutes = String(Math.floor(flashSeconds / 60)).padStart(2, '0');
  const flashRemainingSeconds = String(flashSeconds % 60).padStart(2, '0');
  const flashTimeLeft = { minutes: flashMinutes, seconds: flashRemainingSeconds };

  const handleOpenPrivacy = () => {
    setPrivacyTab('privacy');
    setIsPrivacyModalOpen(true);
  };

  const handleOpenTerms = () => {
    setPrivacyTab('terms');
    setIsPrivacyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-200 selection:text-slate-950">
      
      {/* Header & Navegação */}
      <Navbar 
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
        checkoutUrl={checkoutUrl}
      />

      {/* 1. PRIMEIRA DOBRA (Topo da Página - Foco em Atenção e Desejo) */}
      <Hero 
        flashTimeLeft={flashTimeLeft} 
        checkoutUrl={checkoutUrl}
      />

      {/* 2. SEÇÃO DE ESPECIFICIDADE (O que a pessoa vai receber) */}
      <ContentSection 
        checkoutUrl={checkoutUrl}
      />

      {/* 3. SEÇÃO DE PROVA SOCIAL (Unificada: Avaliações Escritas, Vídeos e Prints do WhatsApp) */}
      <Testimonials />

      {/* OFERTA IRRESISTÍVEL & CRONÔMETRO DE DESCONTO */}
      <OfferSection 
        timeLeft={timeLeft} 
        flashTimeLeft={flashTimeLeft} 
      />

      {/* GARANTIA DE 7 DIAS RISCO ZERO */}
      <GuaranteeSection />

      {/* 4. SEÇÃO DE QUEBRA DE OBJEÇÕES (FAQ em Sanfona / Accordion) */}
      <FAQ />

      {/* RODAPÉ PROFISSIONAL COM POLÍTICAS */}
      <Footer 
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />

      {/* 5. BOTÃO FLUTUANTE DE SUPORTE (WhatsApp com Mensagem Pré-programada) */}
      <WhatsAppButton phoneNumber="5511947069414" />

      {/* Modal de Política de Privacidade e Termos de Uso (LGPD) */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        defaultTab={privacyTab}
      />

    </div>
  );
};

export default App;
