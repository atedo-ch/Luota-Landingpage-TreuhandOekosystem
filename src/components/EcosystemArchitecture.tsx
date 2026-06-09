import { useState } from 'react';
import { 
  GitFork, 
  HardDrive, 
  Sparkles, 
  Database, 
  LayoutTemplate,
  Check, 
  Workflow 
} from 'lucide-react';

interface ModuleDetail {
  id: string;
  title: string;
  label: string;
  tagline: string;
  icon: any;
  kurzBeschrieb: string;
  image: string;
  steps: string[];
  nutzen: string;
  kpi: string;
}

export default function EcosystemArchitecture() {
  const [activeStep, setActiveStep] = useState<string>('dms');

  const stepsList: ModuleDetail[] = [
    {
      id: 'dms',
      title: 'Dokumentenmanagement mit M‑Files',
      label: 'Dokumente',
      tagline: 'Das digitale Herzstück deiner Treuhand Software',
      icon: HardDrive,
      kurzBeschrieb: 'Das integrierte Dokumentenmanagement-System bildet das digitale Herzstück deiner Treuhand Software. Alle Dokumente, E‑Mails und Belege werden automatisch revisionssicher archiviert und in Sekunden gefunden.',
      image: 'https://luota.ch/wp-content/uploads/2025/08/Screenshot-2025-08-13-163444.png',
      steps: [
        'Kein physisches Archiv mehr',
        'Sekunden statt Minuten suchen',
        'AHV- und MWST-Revisionen vorbereitet per Klick',
        'Alle E‑Mails automatisch korrekt abgelegt'
      ],
      nutzen: 'Automatisierte dsg-revisionssichere Schweizer DMS Suche',
      kpi: 'GeBüV-Archivierung'
    },
    {
      id: 'prozesse',
      title: 'Prozessmanagement mit M‑Files',
      label: 'Prozesse',
      tagline: 'Strukturierte und fehlerfreie Abläufe',
      icon: GitFork,
      kurzBeschrieb: 'Automatisierte Prozesse und Workflows sorgen dafür, dass wiederkehrende Aufgaben wie Jahresabschlüsse, Lohnverarbeitung oder Revisionen standardisiert und fristgerecht erledigt werden.',
      image: 'https://luota.ch/wp-content/uploads/2025/08/Screenshot-2025-08-13-164355.png',
      steps: [
        'Weniger manuelle Checklisten',
        'Keine vergessenen Fristen',
        'Bessere Auslastungsplanung durch Pendenzen- und Fristenüberblick',
        'Weniger Fehler'
      ],
      nutzen: 'Nahtlose Statuskontrolle & Stellvertretung',
      kpi: '100% fristgerecht'
    },
    {
      id: 'portal',
      title: 'Kundenportal für Treuhänder (Mandantenportal)',
      label: 'Kundenportal',
      tagline: 'Papierlose, nachvollziehbare Zusammenarbeit',
      icon: LayoutTemplate,
      kurzBeschrieb: 'Das digitale Mandantenportal ermöglicht eine sichere und strukturierte Zusammenarbeit zwischen Treuhänder:innen und Kunden, komplett papierlos, nachvollziehbar und ortsunabhängig.',
      image: 'https://luota.ch/wp-content/uploads/2025/08/Client-DE-Dashboard-with-card-for-comments.png',
      steps: [
        'Mandanten laden Belege direkt hoch',
        'Automatische To-do-Listen (Jahresabschluss, Lohn, Steuern)',
        'Kreditorenfreigaben digital',
        'Mobile App für unterwegs'
      ],
      nutzen: 'Effektiver Belegtransfer ohne Medienbrüche',
      kpi: 'Echtes Co-Working'
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      label: 'AI Assistant',
      tagline: 'Smarte Treuhand-Intelligenz mit M-Files',
      icon: Sparkles,
      kurzBeschrieb: 'Der im DMS integrierte AI Assistant nutzt moderne KI, um datenschutzkonform Informationen aus Dokumenten automatisch zu analysieren, zusammenzufassen und auszuwerten.',
      image: 'https://luota.ch/wp-content/uploads/2025/11/Screenshot-2025-11-03-111113.png',
      steps: [
        'Weniger manuelles Suchen',
        'Zeitersparnis mit Analysen von Kontenblättern, Auswertungen oder Perioden',
        'Mehr Zeit für Beratung'
      ],
      nutzen: 'Datensichere Schweizer KI ohne Public Training',
      kpi: 'Deep Document OCR'
    },
    {
      id: 'erp',
      title: 'ERP Integrationen',
      label: 'ERP Integration',
      tagline: 'Der nahtlose Datenfluss zu bestehenden ERPs',
      icon: Database,
      kurzBeschrieb: 'Bestehende Buchhaltungs- und ERP-Systeme lassen sich nahtlos integrieren, darunter Abacus, bexio, Topal, Proffix, Mirus, Infoniqa und Microsoft Dynamics 365 Business Central. Dadurch bleiben bestehende Prozesse erhalten, während das Treuhand Ökosystem alle Daten zentral verbindet.',
      image: 'https://luota.ch/wp-content/uploads/2026/02/ERP-integrationen.png',
      steps: [
        'Abacus, bexio & Topal nativ angebunden',
        'Automatischer Stammdatenabgleich',
        'Fehlerfreie Buchungsübertragungen',
        'Keine doppelten Datenarbeiten'
      ],
      nutzen: 'Freie Systemwahl ohne Migrationsrisiken',
      kpi: 'Schnittstellen LIVE'
    }
  ];

  const activeStepData = stepsList.find(s => s.id === activeStep) || stepsList[0];

  return (
    <section id="ecosystem-architecture" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0887EB] uppercase bg-[#E0F0FC]/60 border border-[#0887EB]/10 px-3.5 py-1.5 rounded-full inline-block mb-4 animate-fade-in">
            Treuhand Ökosystem Luota
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2E2E2E] leading-tight">
            Das ganzheitliche Software-Ökosystem für Treuhänder.
          </h2>
          <p className="mt-6 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Von revisionssicherem Dokumentenmanagement über automatisierte Workflows bis zum digitalen Kundenportal und AI Assistant digitalisierst du dein Treuhandbüro ganzheitlich, effizient und zukunftssicher. Statt einzelner Tools bietet Luota ein integriertes Software-Ökosystem für Treuhänder. Alle Lösungen sind miteinander verbunden und tauschen Daten automatisch aus – ohne manuelle Exporte oder doppelte Erfassung.
          </p>
        </div>

        {/* Large Horizontal Pipeline Flow Visualizer */}
        <div className="relative mb-16 hidden lg:flex items-center justify-between px-6 pb-4 overflow-x-auto select-none" id="horizontal-architecture-timeline">
          {/* Connecting absolute background progress line */}
          <div className="absolute top-[36px] left-[10%] right-[10%] h-[3px] bg-[#eee] -z-10 rounded-full">
            <div 
              className="h-full bg-[#0887EB] transition-all duration-500"
              style={{
                width: `${(stepsList.findIndex(s => s.id === activeStep) / (stepsList.length - 1)) * 100}%`
              }}
            ></div>
          </div>

          {stepsList.map((step, idx) => {
            const Icon = step.icon;
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
                style={{ width: '18%' }}
              >
                {/* Node Pill */}
                <div 
                  className={`w-18 h-18 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-[#0887EB] text-white shadow-xl shadow-[#0887EB]/20 scale-110 ring-4 ring-[#E0F0FC]' 
                      : 'bg-white text-gray-500 border border-[#eee] group-hover:border-[#0887EB]/40 group-hover:scale-105 shadow-sm'
                  }`}
                >
                  <Icon className={`w-6 h-6 transition-transform ${isActive ? 'rotate-[6deg]' : 'group-hover:rotate-[6deg]'}`} />
                  
                  {/* Progress Indicator Small Pill */}
                  <span className={`absolute -top-2 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-mono font-bold border transition-colors ${
                    isActive 
                      ? 'bg-[#2E2E2E] text-white border-[#0887EB]' 
                      : 'bg-[#f6f6f6] text-gray-400 border-[#eee]'
                  }`}>
                    {idx + 1}
                  </span>
                </div>

                <span className={`text-xs font-bold mt-4 tracking-tight transition-colors ${
                  isActive ? 'text-[#0887EB] font-extrabold' : 'text-gray-500 group-hover:text-[#2E2E2E]'
                }`}>
                  {step.label}
                </span>
                <span className="text-[9px] text-gray-400 font-medium font-mono uppercase mt-1 leading-none tracking-tight">
                  {step.kpi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Grid Pipeline Layout */}
        <div className="lg:hidden flex flex-col gap-2.5 mb-10" id="mobile-architecture-grid">
          <p className="text-[10px] font-mono text-gray-400 text-center mb-1">Tippen Sie zur Detailansicht auf ein Modul:</p>
          <div className="grid grid-cols-5 gap-1">
            {stepsList.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`py-3 px-1 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 focus:outline-none ${
                  activeStep === step.id
                    ? 'bg-[#0887EB] text-white border-[#0887EB] font-bold shadow-md'
                    : 'bg-white text-gray-500 border-[#eee] hover:bg-[#f6f6f6] shadow-sm'
                }`}
              >
                <step.icon className="w-4 h-4 shrink-0" />
                <span className="text-[9px] leading-tight font-display font-semibold truncate w-full">{step.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Module Showcase Card */}
        <div 
          className="max-w-6xl mx-auto bg-[#f8fafc] rounded-3xl p-6 md:p-10 border border-slate-100 flex flex-col lg:flex-row gap-10 items-stretch justify-between transition-all duration-300 relative overflow-hidden shadow-xs" 
          id="active-architecture-card-box"
        >
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0887eb03_1px,transparent_1px),linear-gradient(to_bottom,#0887eb03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>

          {/* Left panel of card: Info & Vorteile */}
          <div className="lg:w-1/2 flex flex-col relative z-10 justify-between self-stretch">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#E0F0FC] text-[#0887EB] rounded-2xl shadow-sm">
                  <activeStepData.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold text-[#0887EB] tracking-widest uppercase">Modulvorstellung</span>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#2E2E2E] mt-0.5">{activeStepData.title}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">
                {activeStepData.kurzBeschrieb}
              </p>

              <div>
                <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Ihre Vorteile</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeStepData.steps.map((vorteil, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 font-medium leading-normal">{vorteil}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-slate-400 block">Kompakter Nutzen</span>
                <span className="text-xs md:text-sm font-semibold text-slate-700">{activeStepData.nutzen}</span>
              </div>
              <div className="bg-[#0887EB]/8 text-[#0887EB] rounded-xl px-3.5 py-1.5 font-mono text-xs font-bold border border-[#0887EB]/10 shrink-0">
                {activeStepData.kpi}
              </div>
            </div>
          </div>

          {/* Right panel: Live App Screenshot Mockup */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center relative z-10 self-center">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden group/image relative">
              {/* Browser Window Bar */}
              <div className="bg-slate-50 border-b border-slate-100/80 px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="bg-white px-6 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-slate-100 max-w-xs truncate">
                  {activeStepData.id === 'erp' ? 'api.luota.ch/connect' : `luota.ch/app/${activeStepData.id}`}
                </div>
                <div className="w-10"></div>
              </div>
              
              {/* App Image with seamless load states and zoom hover */}
              <div className="relative aspect-video bg-slate-50 overflow-hidden flex items-center justify-center p-3 animate-fade-in">
                <img 
                  key={activeStepData.image}
                  src={activeStepData.image} 
                  alt={activeStepData.title}
                  className="w-full h-full object-contain rounded-lg shadow-sm border border-slate-100 hover:scale-[1.015] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
