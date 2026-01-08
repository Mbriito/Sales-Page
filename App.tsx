
import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsGrid } from './components/BenefitsGrid';
import { Testimonials } from './components/Testimonials';
import { FilterSection } from './components/FilterSection';
import { PricingSection } from './components/PricingSection';
import { FinalCall } from './components/FinalCall';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsGrid />
        <Testimonials />
        <FilterSection />
        <PricingSection />
        <FinalCall />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
