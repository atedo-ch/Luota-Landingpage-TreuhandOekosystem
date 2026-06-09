import { useState } from 'react';
import { 
  FileWarning, 
  Shuffle, 
  CalendarClock, 
  HelpCircle, 
  Fingerprint, 
  TrendingDown, 
  Activity, 
  Lock, 
  Check, 
  AlertTriangle,
  Flame,
  Clock,
  MessagesSquare
} from 'lucide-react';
import { PainCard } from '../types';

export default function PainPoints() {
  const [selectedStatMode, setSelectedStatMode] = useState<'standard' | 'luota'>('standard');

  const painCards: PainCard[] = [
    {
      id: 'dms_chaos',
      icon: 'FileWarning',
      title: 'Dokumentenchaos',
      problem: 'Mandanten senden Belege ungeordnet über WhatsApp, Mail, Papier oder Dropbox.',
      consequence: 'Sachbearbeiter verbringen Stunden mit dem Sortieren, Umbenennen und Ablegen in starre Ordnerstrukturen.',
      benefit: 'Automatische Strukturierung durch intelligentes DMS. Kein Beleg geht je verloren.',
      stat: '25 min',
      statLabel: 'Such- & Sortierzeit pro Dokument'
    },
    {
      id: 'medienbrueche',
      icon: 'Shuffle',
      title: 'Medienbrüche',
      problem: 'Dokumente müssen manuell aus E-Mails heruntergeladen und händisch in Buchungssysteme eingetippt werden.',
      consequence: 'Hohe Fehlerquote bei manueller Erfassung und Zeitverzögerung bei Monatsabschlüssen.',
      benefit: 'Automatische API-Streams direkt in Abacus, Topal oder bexio ohne manuellen Download.',
      stat: '4.5x',
      statLabel: 'Höhere Fehlerrate bei Tipparbeit'
    },
    {
      id: 'fristen_pendenzen',
      icon: 'CalendarClock',
      title: 'Fristen & Pendenzen',
      problem: 'Fristenverwaltung erfolgt unzusammenhängend in Excel-Listen, Kalendern oder auf Pendenzenzetteln.',
      consequence: 'Verpasste Steuerfristen oder verspätete MWST-Abrechnungen führen zu Verzugsgebühren und Stress.',
      benefit: 'Automatische Fristenextraktion und systemgestützte Erinnerungen für Mandanten.',
      stat: '100 %',
      statLabel: 'Fristenkontrolle ohne manuelle Pflege'
    },
    {
      id: 'rueckfragen',
      icon: 'HelpCircle',
      title: 'Rückfragen-Flut',
      problem: 'Ständige Nachfragen der Mandanten zum Stand der Steuererklärung oder des Jahresabschlusses.',
      consequence: 'Permanente Störungen reissen Treuhand-Sachbearbeiter aus fokussierten fachlichen Buchungsarbeiten.',
      benefit: 'Echtzeit-Statustracker im Portal. Mandanten sehen selbst, welche Belege noch fehlen.',
      stat: '-60 %',
      statLabel: 'Weniger unnötige E-Mails'
    },
    {
      id: 'manuelle_prozesse',
      icon: 'Activity',
      title: 'Manuelle Prozesse',
      problem: 'Einfache Workflows wie MWST-Freigaben durchlaufen langwierige PDF-Signatur- oder Druckschleifen.',
      consequence: 'Freigaben dauern Tage; Pendenzen stauen sich im Treuhandbüroalltag an.',
      benefit: '1-Klick-Freigabe direkt im Smartphone-Portal des Mandanten.',
      stat: '2 Min',
      statLabel: 'Durchlaufzeit für MWST-Freigabe'
    },
    {
      id: 'transparenz',
      icon: 'TrendingDown',
      title: 'Mangelnde Transparenz',
      problem: 'Weder Mandant noch Treuhandpartner haben eine tagesaktuelle Übersicht über den finanziellen Zustand.',
      consequence: 'Entscheidungen werden auf Basis veralteter Zahlen gefällt. Beratungspotenzial bleibt ungenutzt.',
      benefit: 'Tagesaktuelle Business-Analysen auf gemeinsamen Dashboards.',
      stat: 'Realtime',
      statLabel: 'Buchführungs-Aktualität'
    },
    {
      id: 'wissensverlust',
      icon: 'Fingerprint',
      title: 'Schleichender Wissensverlust',
      problem: 'Erfahrungswerte zu spezifischen Steuermandaten liegen oft im Kopf einzelner Mitarbeiter.',
      consequence: 'Verlässt ein Senior-Sachbearbeiter das Treuhandbüro, müssen Mandantenbeziehungen zeitaufwendig rekonstruiert werden.',
      benefit: 'Gepooltes Treuhandfachwissen im DMS und KI-Assistant sicher erfasst.',
      stat: '0-Risiko',
      statLabel: 'Bei Mitarbeiterwechseln'
    },
    {
      id: 'ki_shadowIT',
      icon: 'Lock',
      title: 'KI ohne Governance',
      problem: 'Mitarbeiter nutzen unkontrolliert ChatGPT, kopieren sensitive Mandantendaten in öffentliche Netze.',
      consequence: 'Massive DSGVO-/Datenschutz-Verstösse bedrohen das Vertrauen und verletzen die Schweigepflicht.',
      benefit: 'Eigener DSGVO/Schweizer-konformer KI-Copilot mit klarer Berechtigungs-Governance.',
      stat: '100 %',
      statLabel: 'Datenschutzkonform (CH-Cloud)'
    }
  ];

  // Helper function to return icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileWarning': return <FileWarning className="w-6 h-6 text-amber-500" />;
      case 'Shuffle': return <Shuffle className="w-6 h-6 text-indigo-500" />;
      case 'CalendarClock': return <CalendarClock className="w-6 h-6 text-rose-500" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-sky-500" />;
      case 'Fingerprint': return <Fingerprint className="w-6 h-6 text-teal-500" />;
      case 'TrendingDown': return <TrendingDown className="w-6 h-6 text-orange-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-brand-secondary" />;
      case 'Lock': return <Lock className="w-6 h-6 text-blue-500" />;
      default: return <FileWarning className="w-6 h-6" />;
    }
  };

  return (
    <section id="pain-points" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase bg-brand-light px-3 py-1.5 rounded-full inline-block mb-4">
            Die Treuhand-Herausforderung
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark">
            Treuhandprozesse scheitern selten an fehlender Software.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Sondern an verstreuten Informationen, manuellen Abläufen und fehlender Integration. Die Folge sind unproduktive Stunden und unzufriedene Mandanten.
          </p>
        </div>

        {/* Dynamic / Interactive Compare Workspace Widgets */}
        <div className="mb-20 max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-premium" id="kpi-fiduciary-simulator">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-6">
            <div>
              <h3 className="font-display font-black text-lg text-brand-dark flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-primary" />
                <span>Effizienzrechner</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">Vergleichen Sie den Workflow eines klassischen Treuhandbüros mit Luota.</p>
            </div>
            
            <div className="flex bg-[#f6f6f6] p-1.5 rounded-full border border-[#eee]">
              <button
                onClick={() => setSelectedStatMode('standard')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedStatMode === 'standard'
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/10'
                    : 'text-gray-500 hover:text-[#2E2E2E]'
                }`}
              >
                Klassisch
              </button>
              <button
                onClick={() => setSelectedStatMode('luota')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedStatMode === 'luota'
                    ? 'bg-[#0887EB] text-white shadow-md shadow-[#0887EB]/20'
                    : 'text-gray-500 hover:text-[#2E2E2E]'
                }`}
              >
                Luota Ökosystem
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center" id="fiduciary-live-kpis">
            
            {/* Stat 1 */}
            <div className="bg-[#f6f6f6]/60 rounded-2xl p-5 border border-[#eee] hover:shadow-sm transition-all text-[#2E2E2E]">
              <div className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-1 font-bold">Repetitive Aufgaben</div>
              <div className="text-3xl md:text-4xl font-extrabold font-display transition-colors duration-300">
                {selectedStatMode === 'standard' ? (
                  <span className="text-amber-600 flex items-center justify-center gap-1.5 font-bold">
                    <Flame className="w-5 h-5 animate-bounce" />
                    Bis zu 70 %
                  </span>
                ) : (
                  <span className="text-[#0887EB] flex items-center justify-center gap-1.5 font-bold">
                    <Check className="w-5 h-5 stroke-[3]" />
                    Unter 15 %
                  </span>
                )}
              </div>
              <p className="text-xs text-[#555] mt-2.5">
                {selectedStatMode === 'standard' 
                  ? 'Eintippen, Scannen, Dateien konvertieren, Nachfassen per Telefon.'
                  : 'Vollautomatische Belegextraktion und digitaler 1-Klick-Freigabeflow.'
                }
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#f6f6f6]/60 rounded-2xl p-5 border border-[#eee] hover:shadow-sm transition-all text-[#2E2E2E]">
              <div className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-1 font-bold">Kommunikationskanäle</div>
              <div className="text-3xl md:text-4xl font-extrabold font-display transition-colors duration-300">
                {selectedStatMode === 'standard' ? (
                  <span className="text-amber-600 flex items-center justify-center gap-1.5 font-bold">
                    <AlertTriangle className="w-5 h-5" />
                    Über 10
                  </span>
                ) : (
                  <span className="text-[#0887EB] flex items-center justify-center gap-1.5 font-bold">
                    <Check className="w-5 h-5 stroke-[3]" />
                    Zentralisiert (1)
                  </span>
                )}
              </div>
              <p className="text-xs text-[#555] mt-2.5">
                {selectedStatMode === 'standard'
                  ? 'WhatsApp, Briefe, Mail, Beleg-Schachteln, SMS, Teams, OneDrive.'
                  : 'Gebündelt im Treuhand Portal. Strukturierte Kommunikation & Status.'
                }
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#f6f6f6]/60 rounded-2xl p-5 border border-[#eee] hover:shadow-sm transition-all text-[#2E2E2E]">
              <div className="text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-1 font-bold">Dokumentensuche</div>
              <div className="text-3xl md:text-4xl font-extrabold font-display transition-colors duration-300">
                {selectedStatMode === 'standard' ? (
                  <span className="text-amber-600 font-bold">8.2 Std.</span>
                ) : (
                  <span className="text-[#0887EB] font-bold">&lt; 3 Min.</span>
                )}
              </div>
              <p className="text-xs text-[#555] mt-2.5 flex items-center justify-center">
                <span>
                  {selectedStatMode === 'standard'
                    ? 'Wöchentlicher Suchverlust pro Sachbearbeiter.'
                    : 'Dank modernstem M-Files DMS mit KI-Suchabfrage.'
                  }
                </span>
              </p>
            </div>

          </div>
        </div>

        {/* 8 Modern Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="pain-cards-grid">
          {painCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-2xl p-6 border border-[#eee] shadow-sm hover:shadow-lg hover:border-[#0887EB]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-[#2E2E2E]"
              id={`pain-card-${card.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#f6f6f6] rounded-xl text-[#0887EB]">
                    {getIcon(card.icon)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-sm font-extrabold text-[#2E2E2E]">{card.stat}</span>
                    <span className="text-[8px] uppercase text-gray-400 tracking-wider font-semibold">{card.statLabel}</span>
                  </div>
                </div>

                <h4 className="font-display font-bold text-base text-[#2E2E2E] mb-2.5">
                  {card.title}
                </h4>

                <p className="text-xs text-[#555] mb-3 leading-normal">
                  <span className="font-semibold text-rose-600 block mb-0.5">Problem:</span>
                  {card.problem}
                </p>

                <p className="text-xs text-gray-400 mb-4 ml-1 pl-1.5 border-l-2 border-[#eee]">
                  <span className="font-medium text-amber-600 block text-[10px] uppercase tracking-wider mb-0.5 font-bold">Operative Folge:</span>
                  {card.consequence}
                </p>
              </div>

              <div className="bg-[#E0F0FC]/60 p-3.5 rounded-xl border border-[#0887EB]/10 mt-auto">
                <span className="text-[10px] font-bold text-[#0887EB] uppercase tracking-wider block mb-0.5">Luota bietet:</span>
                <p className="text-[11px] text-[#2E2E2E] leading-snug">{card.benefit}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
