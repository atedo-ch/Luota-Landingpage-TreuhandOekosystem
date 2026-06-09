import { Shield, Mail, Phone, Landmark, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onShowModal: (title: string, content: string) => void;
}

export default function Footer({ onShowModal }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const showImpressum = () => {
    onShowModal(
      'Impressum - Luota AG',
      `Luota AG
Treuhand Digitalisierung & Prozessmanagement
Stettbachstrasse 7, CH-8600 Dübendorf
Schweiz

Vertreten durch:
Verwaltungsrat und Geschäftsleitung der Luota AG

Handelsregistereintrag:
Eingetragener Firmenname: Luota AG
Handelsregisteramt: Kanton Zürich
UID: CHE-420.354.120 MWST

Kontakt:
Telefon: +41 (0)44 800 77 00
E-Mail: hello@luota.ch
Webseite: https://luota.ch`
    );
  };

  const showDatenschutz = () => {
    onShowModal(
      'Datenschutzerklärung (CH-DSG & DSGVO)',
      `1. Datenschutz auf einen Blick
Die Luota AG nimmt den Schutz Ihrer Treuhand- und Mandantendaten äusserst ernst. Alle Systeme lagern in der Schweiz und entsprechen vollumfänglich dem Schweizer Datenschutzgesetz (DSG) sowie der europäischen Datenschutz-Grundverordnung (DSGVO).

2. Datenspeicherung & Cloud-Infrastruktur
Sämtliche hochgeladenen Belege, Dokumentenmetadaten (M-Files), Mandantendaten und Chatprotokolle werden in hochsichereren, ISO 27001 zertifizierten Schweizer Rechenzentren (Interxion/Equinix Zürich) gehostet. Es erfolgt kein Datentransfer in Drittländer ohne explizite Genehmigung.

3. Künstliche Intelligenz (AI Assistant)
Der Luota AI Co-Pilot verarbeitet Daten temporär über dedizierte, abgeriegelte Serveranlagen. Ihre Daten werden niemals für das Training globaler oder öffentlicher LLMs (wie OpenAI ChatGPT) herangezogen. Alle Treuhanddaten bleiben isoliert innerhalb Ihres zugewiesenen Berechtigungsraums.

4. Ihre Rechte
Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.`
    );
  };

  return (
    <footer className="bg-[#131517] text-white border-t border-slate-800/80 relative z-10" id="main-footer">
      {/* Upper Grid Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12" id="footer-upper-grid">
        
        {/* Brand identity column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center justify-center shrink-0 h-10">
              <img
                src="https://luota.ch/wp-content/uploads/2020/06/LUOTA_Logo_RGB_weiss.svg"
                alt="Luota AG Logo"
                className="h-5 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <p className="text-xs text-slate-400 max-w-sm mt-2 leading-relaxed">
            Ihr Schweizer Kompetenzpartner für Dokumenten-Management, digitale Kundenportale, künstliche Intelligenz und Treuhand-Workflowing.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a 
              href="https://www.linkedin.com/company/luota-ag" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="relative bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl flex items-center justify-center shrink-0 h-9">
              <img
                src="https://luota.ch/wp-content/uploads/2025/08/sms-logo-digital-services.png"
                alt="SMS Digital Services Logo"
                className="h-5 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Swiss Locations column */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-5">Schweizer Treuhand</h4>
          <p className="text-xs text-slate-300 mb-4 leading-normal max-w-xs">
            Optimiert für inhabergeführte Treuhandhäuser mit 5 bis 50 Mitarbeitenden, die operative Reibung beenden wollen.
          </p>
          <div className="space-y-2 text-xs text-slate-400 font-mono">
            <div className="flex gap-2 items-start">
              <Landmark className="w-3.5 h-3.5 text-[#0887EB] shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-slate-200">Luota AG</span>
                <span className="block">Stettbachstrasse 7</span>
                <span className="block">8600 Dübendorf</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct support column */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-5">Direktberatung</h4>
          <p className="text-xs text-slate-300 mb-4 leading-normal">
            Haben Sie Detailfragen zur M-Files GeBüV-Archivierung oder zur KI-Berechtigungs-Governance?
          </p>
          <div className="space-y-3.5 text-xs text-slate-300">
            <a href="tel:+41448007700" className="flex items-center gap-2.5 hover:text-[#0887EB] transition-colors">
              <Phone className="w-4 h-4 text-[#0887EB] shrink-0 animate-pulse" />
              <span>+41 (0)44 800 77 00</span>
            </a>
            <a href="mailto:hello@luota.ch" className="flex items-center gap-2.5 hover:text-[#0887EB] transition-colors">
              <Mail className="w-4 h-4 text-[#0887EB] shrink-0" />
              <span>hello@luota.ch</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lower Copyright Area / Legal guidelines */}
      <div className="border-t border-slate-800 py-6 md:py-8 bg-black/30" id="footer-lower-bar">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <button 
              onClick={showImpressum}
              className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
            >
              Impressum
            </button>
            <span className="text-gray-700 hidden md:inline">|</span>
            <button 
              onClick={showDatenschutz}
              className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
            >
              Datenschutzerklärung (DSG)
            </button>
            <span className="text-gray-700 hidden md:inline">|</span>
            <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider uppercase">Jahr 2026</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>© 2026 Luota AG. Alle Rechte vorbehalten.</span>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
