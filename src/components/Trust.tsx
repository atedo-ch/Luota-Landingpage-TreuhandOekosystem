import { ShieldCheck, Scale, Award, Layers3, Check } from 'lucide-react';
import { TrustPillar } from '../types';

export default function Trust() {
  const pillars: TrustPillar[] = [
    {
      title: 'Treuhandfokus',
      description: 'Wir sind keine generischen IT-Dienstleister, die am Vormittag Drucker reparieren und am Nachmittag Ihre Software programmieren. Wir machen ausschliesslich Treuhand und verstehen gesetzliche Vorgaben im Detail.',
      icon: 'Scale',
      details: [
        'Branchenspezifisches Prozess-Know-how',
        'Ausgebildete Treuhandexperten im Team',
        'Schnittstellen, die exakt auf Fachbedürfnisse zielen'
      ]
    },
    {
      title: 'Maximale Praxisnähe',
      description: 'Unsere Systeme entstehen nicht im fernen Elfenbeinturm, sondern in enger Zusammenarbeit mit Schweizer Treuhandunternehmen im echten Berufsalltag. Wir digitalisieren nur das, was wirklich Zeit spart.',
      icon: 'Award',
      details: [
        'Workflows basierend auf Hunderten Treuhand-Audits',
        'Schnelles Onboarding für Treuhandteams',
        'Ständige Optimierung mit Anwenderfeedback'
      ]
    },
    {
      title: 'Schweizer Sicherheitslogik',
      description: 'Alle Datenflüsse sind vollends geschützt. Verträge, Mandantenakten und KI-Modelle lagern revisionssicher und verschlüsselt in Schweizer ISO-zertifizierten Rechenzentren (CH-Cloud) gemäss GeBüV-Vorgaben.',
      icon: 'ShieldCheck',
      details: [
        '100% Hosting in der Schweiz (Kanton Zürich/Zentralschweiz)',
        'Sicherung gemäss GeBüV und neuem DSG',
        'Kein Zugriff durch US-Behörden oder unbefugte Dritte'
      ]
    },
    {
      title: 'Ökosystem statt Einzellösung',
      description: 'Isolierte Insellösungen behindern die Zukunft. Luota verbindet das DMS, Ihr Kundenportal, automatisierte Treuhandprozesse und Branchen-Software zu einer einzigen, geschlossenen, hocheffizienten Plattform.',
      icon: 'Layers3',
      details: [
        'Zentraler Datenspeicher ohne Doppelarbeiten',
        'Flexibles Ersetzen einzelner Komponenten möglich',
        'Zusammenarbeit auf einer einzigen Nutzeroberfläche'
      ]
    }
  ];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-[#0887EB]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#0887EB]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0887EB]" />;
      case 'Layers3': return <Layers3 className="w-6 h-6 text-[#0887EB]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#0887EB]" />;
    }
  };

  return (
    <section id="trust-differentiation" className="py-24 md:py-32 bg-white relative">
      {/* Visual abstract details pointing back to Swiss trust values */}
      <div className="absolute top-[30%] right-0 w-72 h-72 rounded-full bg-[#E0F0FC]/20 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0887EB] uppercase bg-[#E0F0FC]/60 border border-[#0887EB]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Das Luota Versprechen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2E2E2E]">
            Warum Schweizer Treuhandunternehmen auf Luota setzen.
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#555] leading-relaxed">
            Als spezialisierter Transformationspartner für Treuhänder kombinieren wir tiefgehende Fachkenntnis mit State-of-the-Art Softwaretechnologie zu einem stimmigen Gesamtauftritt.
          </p>
        </div>

        {/* 4 Pillars Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12" id="trust-pillars-grid">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="bg-[#f6f6f6]/60 rounded-3xl p-6 md:p-10 border border-[#eee] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-white border border-[#eee]/80 rounded-2xl shadow-sm shrink-0">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="font-display font-black text-xl text-[#2E2E2E]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-[#555] leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              {/* Swiss Sub-Checklists */}
              <div className="bg-white/80 rounded-2xl border border-gray-100/50 p-5 space-y-3.5">
                {pillar.details.map((detail) => (
                  <div key={detail} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#E0F0FC] text-[#0887EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-[#2E2E2E] font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brand Proof Bar */}
        <div className="mt-16 md:mt-24 border-t border-[#eee] pt-12 text-center" id="swiss-compliance-fiduciary-badge">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#f6f6f6]/80 border border-[#eee] rounded-2xl px-6 py-4">
            <span className="text-xs font-bold text-gray-400 font-mono tracking-wider uppercase">Schweizer Konformität:</span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-[#2E2E2E] font-semibold font-sans">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> GeBüV-Konformität</span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> DSG / DSGVO Konformität</span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Swiss Cloud Hosting</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
