/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, ShieldCheck, Mail, Phone, Info } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import EcosystemArchitecture from './components/EcosystemArchitecture';
import AIAssistantSection from './components/AIAssistantSection';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [modalData, setModalData] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });

  const handleShowModal = (title: string, content: string) => {
    setModalData({
      isOpen: true,
      title,
      content
    });
  };

  const handleCloseModal = () => {
    setModalData({
      isOpen: false,
      title: '',
      content: ''
    });
  };

  const handleScrollToBooking = () => {
    const element = document.querySelector('#final-cta-section');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2E2E2E] selection:bg-[#E0F0FC] selection:text-[#0887EB] overflow-x-hidden antialiased">
      {/* 1. Sticky Navigation */}
      <Navigation onBookCallClick={handleScrollToBooking} />

      {/* 2. Hero Section including interactive circular ecosystem graphics */}
      <Hero onBookCallClick={handleScrollToBooking} />

      {/* 3. Pain Points analysis block */}
      <PainPoints />

      {/* 4. Ecosystem interactive architectural flow */}
      <EcosystemArchitecture />

      {/* 5. AI Assistant Workspace mock simulator */}
      <AIAssistantSection />

      {/* 6. Testimonials slider detailing customer feedback */}
      <Testimonials />

      {/* 7. Outcome benefits section */}
      <Benefits />

      {/* 8. Trust pillars & compliance checklist */}
      <Trust />

      {/* 9. Final CTA block with calendars mock scheduler */}
      <FinalCTA />

      {/* 10. Polished brand footer */}
      <Footer onShowModal={handleShowModal} />

      {/* 11. Custom backdrop-blurred responsive premium Dialog Modal for Swiss Legal Notices */}
      {modalData.isOpen && (
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fade-in"
          id="compliance-modal-overlay"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-xl w-full text-[#2E2E2E] border border-[#eee] shadow-2xl relative overflow-hidden"
            id="compliance-modal-panel"
          >
            {/* Ambient detail inside legal popup */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0887EB]"></div>

            <div className="flex items-center justify-between mb-6 pt-2">
              <div className="flex items-center gap-2.5 text-[#0887EB]">
                <ShieldCheck className="w-5 h-5 text-[#0887EB]" />
                <h3 className="font-display font-black text-lg md:text-xl tracking-tight select-none">
                  {modalData.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer focus:outline-none"
                aria-label="Schliessen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs md:text-sm text-gray-600 leading-relaxed whitespace-pre-line space-y-4 max-h-[60vh] overflow-y-auto pr-2" id="compliance-modal-content">
              {modalData.content}
            </div>

            <div className="mt-8 pt-4 border-t border-[#eee] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#3A9FEF]" />
                Zuletzt aktualisiert: Mai 2026
              </span>
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto bg-[#0887EB] hover:bg-[#3A9FEF] text-white font-sans text-xs font-bold px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer focus:outline-none"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
