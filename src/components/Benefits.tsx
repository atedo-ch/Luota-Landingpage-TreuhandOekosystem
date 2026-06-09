import { 
  CheckCircle, 
  Smile, 
  TrendingUp, 
  MessagesSquare, 
  FolderSync, 
  Briefcase, 
  Zap,
  Gauge
} from 'lucide-react';

export default function Benefits() {
  const benefitMetrics = [
    {
      id: 'rueckfragen_less',
      metric: '-65%',
      metricLabel: 'Rückfragen',
      title: 'Weniger Rückfragen',
      description: 'Zermürbende Telefonate und Nachfragen gehören der Vergangenheit an. Mandanten sehen Belegstatus und offene Pendenzen in Eigenregie im Portal.',
      icon: MessagesSquare,
      color: 'text-amber-500 bg-amber-50'
    },
    {
      id: 'schnellere_bearbeitung',
      metric: '3.5x',
      metricLabel: 'Schnellere Abläufe',
      title: 'Schnellere Bearbeitung',
      description: 'Dank vollautomatischer Belegextraktion und digitalem Workflow-Routing verringert sich die Bearbeitungszeit von Belegen und Jahresabschlüssen drastisch.',
      icon: Zap,
      color: 'text-[#0887EB] bg-[#E0F0FC]'
    },
    {
      id: 'zentrale_kom',
      metric: 'Bündelung',
      metricLabel: '1 Kanal statt 10',
      title: 'Zentrale Kommunikation',
      description: 'Sämtlicher Belegverkehr sowie Rückfragen werden revisionssicher direkt am Dokument protokolliert. Keine versprengten Chatgruppen oder Mails.',
      icon: CheckCircle,
      color: 'text-indigo-500 bg-indigo-50'
    },
    {
      id: 'struktur_ablage',
      metric: 'GeBüV',
      metricLabel: '100% Compliance',
      title: 'Strukturierte Ablage',
      description: 'M-Files legt Dokumente metadaten-basiert ab. Das System versteht den Kontext. Das ewige Ordnersuchen und Dateiumbenennen entfällt.',
      icon: FolderSync,
      color: 'text-emerald-500 bg-emerald-50'
    },
    {
      id: 'bessere_uebersicht',
      metric: 'Realtime',
      metricLabel: 'Business Monitor',
      title: 'Bessere Übersicht',
      description: 'Tagesaktuelle Vermögens-, Umsatz- und Liquiditätsanalysen für das Treuhandteam und den Mandanten. Treuhandberatung auf Augenhöhe.',
      icon: Gauge,
      color: 'text-sky-500 bg-sky-50'
    },
    {
      id: 'weniger_abhaengigkeit',
      metric: '0-Knoten',
      metricLabel: 'Kein Prozess-Stau',
      title: 'Minimierter Prozess-Stau',
      description: 'Prozesse sind kognitiv und strukturell im System verankert. Inhaber sind nicht mehr die Engpässe bei jedem einzelnen Abrechnungsschritt.',
      icon: Briefcase,
      color: 'text-rose-500 bg-rose-50'
    },
    {
      id: 'skalierbar',
      metric: 'Grenzenlos',
      metricLabel: '+50% Mandate',
      title: 'Skalierbare Prozesse',
      description: 'Gewinnen Sie neue Mandate, ohne kopflos Personal einstellen zu müssen. Die digitale Pipeline wächst problemlos mit Ihrem Kundenstamm mit.',
      icon: TrendingUp,
      color: 'text-purple-500 bg-purple-50'
    },
    {
      id: 'mandant_exp',
      metric: '94 / 100',
      metricLabel: 'Net Promoter Score',
      title: 'Bessere Mandantenexperience',
      description: 'Bieten Sie Ihren Mandanten eine moderne App und ein makelloses Portal. Das sichert Bestandskunden und zieht erstklassige Neukunden an.',
      icon: Smile,
      color: 'text-teal-500 bg-teal-50'
    }
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#f6f6f6]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0887EB] uppercase bg-[#E0F0FC]/60 border border-[#0887EB]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Der Treuhand-Fortschritt
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2E2E2E]">
            Was sich im Alltag konkret verändert.
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#555] leading-relaxed">
            Luota-Partner verkaufen keine Ordnerstunden, sondern messbaren unternehmerischen Fortschritt. Entlasten Sie Ihr Team operativ und festigen Sie Ihre Mandantenbindung.
          </p>
        </div>

        {/* Modular Grid of Benefits (Minimalist modern design, KPI-centric) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="benefits-grid">
          {benefitMetrics.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 border border-[#eee] shadow-sm hover:shadow-lg hover:border-[#0887EB]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Metrics */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl ${card.color} shrink-0`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="font-display font-black text-2xl text-[#2E2E2E] block tracking-tight">{card.metric}</span>
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wider font-semibold">{card.metricLabel}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-[#2E2E2E] mb-2.5">
                  {card.title}
                </h3>
                
                <p className="text-xs text-[#555] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom anchor check indicating 2026 status */}
              <div className="border-t border-[#f6f6f6] pt-4 mt-6 flex items-center gap-1.5 text-[10px] uppercase font-mono text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Optimiert</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
