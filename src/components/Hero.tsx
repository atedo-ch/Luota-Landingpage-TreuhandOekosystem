import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Check, Sparkles, Database, Shield, Radio, Layers, Bot, Layout, FileCode, Landmark, Terminal, Briefcase } from 'lucide-react';

interface HeroProps {
  onBookCallClick: () => void;
}

export default function Hero({ onBookCallClick }: HeroProps) {
  const headlineVersions = [
    {
      id: 'default',
      eyebrow: 'Digitalisierung für Schweizer Treuhänder',
      title: 'Digitales Luota Treuhand Ökosystem.',
      badge: 'All-in-One'
    },
    {
      id: 'control',
      eyebrow: 'Mehr Produktivität',
      title: 'Weniger Chaos. Mehr Kontrolle. Mehr Zeit für Beratung.',
      badge: 'Fokus Effizienz'
    },
    {
      id: 'all-in-one',
      eyebrow: 'Zentrale Plattform',
      title: 'Alle Treuhandprozesse an einem Ort.',
      badge: 'Fokus Integration'
    },
    {
      id: 'practical',
      eyebrow: 'Praxiserprobt & Sicher',
      title: 'Digitalisierung, die im Treuhandalltag funktioniert.',
      badge: 'Fokus Praxis'
    }
  ];

  const [activeHeadlineIdx, setActiveHeadlineIdx] = useState(0);
  const [selectedNode, setSelectedNode] = useState<string>('portal');
  const [isAnimating, setIsAnimating] = useState(false);

  // Rotate headlines automatically every 20 seconds with a smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      // Wait 600ms for the exit animation to complete before changing data and fading back in
      setTimeout(() => {
        setActiveHeadlineIdx((prev) => (prev + 1) % headlineVersions.length);
        setIsAnimating(false);
      }, 600);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNode(nodeId);
  };

  // Ecosystem Graph Data
  const nodes = {
    // Inner Ring
    portal: {
      id: "portal",
      name: "Treuhand Portal",
      type: "inner",
      angle: 45,
      radius: 95,
      logo: "https://www.treuhand-portal.ch/wp-content/uploads/2022/11/Logo_1.svg",
      icon: Layout,
      description: "Zentrale Mandantenplattform für die komplett papierlose, nachvollziehbare und sichere Zusammenarbeit.",
      alltag: "Mandanten laden Belege hoch, geben Kreditoren frei und sehen Auswertungen live ein.",
      benefit: "Echtes Co-Working ohne lästige Medienbrüche.",
      color: "#0887EB" // Luota Blue
    },
    mfiles: {
      id: "mfiles",
      name: "M-Files DMS",
      type: "inner",
      angle: 135,
      radius: 95,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIY5t5VXwbvmAuA869qcWZaBGGKzppv8J2w&s",
      icon: Database,
      description: "Metadaten-basiertes Dokumentenmanagement. Das digitale Herzstück deines Treuhandbüros.",
      alltag: "Automatische revisionssichere GeBüV-Archivierung von E-Mails, Verträgen und MwSt-Belegen.",
      benefit: "Auffinden aller Daten in Sekunden statt minutenlangem Suchen.",
      color: "#FF5B00" // M-Files Orange
    },
    aiassistant: {
      id: "aiassistant",
      name: "AI Assistant",
      type: "inner",
      angle: 225,
      radius: 95,
      logo: "ai",
      icon: Bot,
      description: "Smarte, DSG-konforme Schweizer Treuhand-Intelligenz direkt in Ihren Dokumenten.",
      alltag: "KI-gestützte Datenextraktionen und tiefe Analysen von Kontenblättern oder Perioden.",
      benefit: "Maximale Effizienz bei Recherchen ohne Public Training.",
      color: "#8B5CF6" // AI Violet
    },
    dynamics: {
      id: "dynamics",
      name: "Microsoft Dynamics 365",
      type: "inner",
      angle: 315,
      radius: 95,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Microsoft_Dynamics_365_Logo_%282021%E2%80%93present%29.svg/1280px-Microsoft_Dynamics_365_Logo_%282021%E2%80%93present%29.svg.png",
      icon: Landmark,
      description: "Nahtloser Datenfluss und hochgradig skalierbare ERP-Prozeduren für anspruchsvolle Mandate.",
      alltag: "Direkte Stamm- und Buchungsdatenverbindungen im Hintergrund für maximale Integration.",
      benefit: "Zukunftssicheres, flexibles Enterprise-Fundament.",
      color: "#EC008C" // Dynamics Red-Pink
    },
    // Outer Ring
    topal: {
      id: "topal",
      name: "Topal",
      type: "outer",
      angle: 0,
      radius: 175,
      logo: "https://www.topal.ch/assets/topal/images/signet.png",
      icon: Layers,
      description: "Schnittstelle für Treuhand-Finanzbuchhaltung und Zahlungsverkehr.",
      alltag: "Automatisierte Buchungsüberträge und direkter Stamm- und Abgleichprozess.",
      benefit: "Konsequent fehlerfreier und flüssiger Datenaustausch.",
      color: "#10B981" // Topal Teal
    },
    proffix: {
      id: "proffix",
      name: "Proffix",
      type: "outer",
      angle: 72,
      radius: 175,
      logo: "https://www.proffix.ch/sites/proffix/proffix-logo.svg",
      icon: FileCode,
      description: "Mandantensynchronisation für moderne Schweizer KMU-Anwender.",
      alltag: "Lohnläufe, Kreditorendaten und Abrechnungen gleichen sich vollautomatisch ab.",
      benefit: "Reduziert doppelte Dateneingaben im Treuhandbüro auf null.",
      color: "#F59E0B" // Proffix Gold
    },
    mirus: {
      id: "mirus",
      name: "Mirus",
      type: "outer",
      angle: 144,
      radius: 175,
      logo: "https://mirus.ch/wp-content/uploads/2025/07/mirus-logo-rgb-turquise.png",
      icon: Terminal,
      description: "Schnittstelle für Hotels, Gastronomie-Betriebe und Dienstpläne.",
      alltag: "Automatisches Einlesen komplexer Gastro-Löhne und Personalabrechnungen.",
      benefit: "Höchste L-GAV Branchenkompetenz ohne manuelles Abtippen.",
      color: "#06B6D4" // Mirus Cyan/Turquoise
    },
    abacus: {
      id: "abacus",
      name: "Abacus",
      type: "outer",
      angle: 216,
      radius: 175,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Abacus_Logo.png",
      icon: Briefcase,
      description: "Zweiseitige Live-Schnittstellen für fortschrittliche Grossmandate.",
      alltag: "Belegsätze und Journalbuchungen werden in Echtzeit synchronisiert.",
      benefit: "Keine Medienbrüche mehr bei komplexen Revisionsarbeiten.",
      color: "#EF4444" // Abacus Ruby
    },
    bexio: {
      id: "bexio",
      name: "Bexio",
      type: "outer",
      angle: 288,
      radius: 175,
      logo: "https://cdn.www.bexio.com/assets/content_craft/logos/bexio/bexio-green.png",
      icon: Radio,
      description: "Schnellanschluss für Kleinbetriebe und junge Schweizer KMUs.",
      alltag: "Automatische Einlesung vorkontierter Kleinbelege und Bankbuchungen.",
      benefit: "Höchstmögliche Client-Konnektivität im Einstiegsbereich.",
      color: "#22C55E" // Bexio Green
    }
  };

  const selectedNodeData = nodes[selectedNode as keyof typeof nodes] || nodes.portal;

  const handleDiscoverScroll = () => {
    const element = document.querySelector('#ecosystem-architecture');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 md:pb-36 overflow-hidden bg-gradient-to-b from-white to-[#f6f6f6]">
      {/* Decorative Blur Ambient Circles */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-[#E0F0FC]/40 blur-3xl -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-[45%] left-10 w-[300px] h-[300px] rounded-full bg-[#62B2F2]/10 blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Headline & Main Marketing Angle */}
        <div className="lg:col-span-6 flex flex-col pt-4" id="hero-marketing-side">
          
          <div className={`flex items-center gap-2 mb-4 transition-all duration-700 ease-in-out ${
            isAnimating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
          }`}>
            <span className="inline-flex items-center px-3 py-1 bg-[#E0F0FC] text-[#0887EB] rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#3A9FEF] mr-1" />
              {headlineVersions[activeHeadlineIdx].eyebrow}
            </span>
          </div>

          <div className="min-h-[140px] sm:min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex flex-col justify-start">
            <h1
              className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#2E2E2E] transition-all duration-700 ease-in-out ${
                isAnimating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
              }`}
            >
              {activeHeadlineIdx === 0 ? (
                <>Digitales Luota<br/><span className="text-[#0887EB]">Treuhand Ökosystem.</span></>
              ) : headlineVersions[activeHeadlineIdx].title}
            </h1>
          </div>

          <p className="mt-6 text-base text-[#555] leading-relaxed max-w-xl">
            Die Komplettlösung für Dokumentenmanagement, Prozessautomatisierung, Kundenportal und KI, speziell entwickelt für Treuhandunternehmen.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onBookCallClick}
              className="bg-[#0887EB] text-white hover:bg-[#3A9FEF] text-sm font-bold px-8 py-4 rounded-full shadow-xl shadow-[#0887EB]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer animate-fade-in"
            >
              <span>Beratungsgespräch buchen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleDiscoverScroll}
              className="bg-white hover:bg-gray-50 text-[#2E2E2E] text-sm font-bold px-8 py-4 rounded-full border border-[#ddd] shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ökosystem entdecken</span>
              <ArrowDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Micro Trust Symbols list */}
          <div className="mt-12 border-t border-gray-100 pt-8" id="hero-trust-signals">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Ihre Schweizer Sicherheitsgarantie</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-3.5 gap-x-6">
              {[
                'Schweizer Entwicklung',
                'Revisionssichere Prozesse',
                'Integration bestehender Tools',
                'KI mit Berechtigungslogik',
                'Für Schweizer Treuhänder'
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Premium Connected Platform Architecture Visualizer */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-10 animate-fade-in" id="hero-ecosystem-graphics-side">
          <style>{`
            @keyframes slowFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-12px) rotate(0.8deg); }
            }
            @keyframes orbitSlow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes orbitReverse {
              0% { transform: rotate(360deg); }
              100% { transform: rotate(0deg); }
            }
            @keyframes dash {
              to {
                stroke-dashoffset: -20;
              }
            }
            .animate-slow-float {
              animation: slowFloat 8s ease-in-out infinite;
            }
            .animate-orbit-slow {
              transform-origin: center;
              animation: orbitSlow 60s linear infinite;
            }
            .animate-orbit-reverse {
              transform-origin: center;
              animation: orbitReverse 80s linear infinite;
            }
          `}</style>

          {/* Main Visual interactive ring container */}
          <div className="relative w-[345px] h-[345px] md:w-[460px] md:h-[460px] flex items-center justify-center select-none shrink-0 border border-[#E0F0FC]/60 rounded-full p-2 bg-white/70 backdrop-blur-md shadow-2xl relative overflow-hidden group animate-slow-float">
            
            {/* Grid Pattern Background overlay for deep tech feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0887eb03_1px,transparent_1px),linear-gradient(to_bottom,#0887eb03_1px,transparent_1px)] bg-[size:24px_24px] rounded-full opacity-60"></div>

            {/* Glowing radial background gradient shifting color dynamically based on selection */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none blur-xl transition-all duration-700 opacity-40"
              style={{
                background: `radial-gradient(circle, ${selectedNodeData.color}20 0%, transparent 70%)`
              }}
            ></div>

            {/* Orbit paths (Dashed SVG circles with subtle interactive rotation) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {/* Decorative filled circles using the 4 requested accent colors */}
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="#E0F0FC" 
                className="opacity-25 transition-all duration-300"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="35" 
                fill="#62B2F2" 
                className="opacity-15 transition-all duration-300"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="25" 
                fill="#3A9FEF" 
                className="opacity-10 transition-all duration-300"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="15" 
                fill="#0887EB" 
                className="opacity-5 transition-all duration-300"
              />

              {/* Inner Orbit Line */}
              <circle 
                cx="50" 
                cy="50" 
                r="22.2" 
                fill="none" 
                stroke={selectedNodeData.type === 'inner' ? selectedNodeData.color : '#0887EB'} 
                strokeWidth="0.25" 
                strokeDasharray="1.5 1.5" 
                className="opacity-40 transition-colors duration-500 animate-orbit-slow"
              />
              {/* Outer Orbit Line */}
              <circle 
                cx="50" 
                cy="50" 
                r="39.5" 
                fill="none" 
                stroke={selectedNodeData.type === 'outer' ? selectedNodeData.color : '#62B2F2'} 
                strokeWidth="0.2" 
                strokeDasharray="2 3" 
                className="opacity-30 transition-colors duration-500 animate-orbit-reverse"
              />

              {/* Dynamic Connected Flow Line - SVG Path with glowing animation and active data packets */}
              {selectedNodeData && (
                <>
                  {/* Outer glow aura line */}
                  <line
                    x1="50"
                    y1="50"
                    x2={50 + (selectedNodeData.radius / 450) * 100 * Math.cos((selectedNodeData.angle * Math.PI) / 180)}
                    y2={50 + (selectedNodeData.radius / 450) * 100 * Math.sin((selectedNodeData.angle * Math.PI) / 180)}
                    stroke={selectedNodeData.color}
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    className="opacity-40 blur-[1.5px] transition-all duration-500 ease-out"
                  />
                  {/* Core connection line with running animation */}
                  <line
                    x1="50"
                    y1="50"
                    x2={50 + (selectedNodeData.radius / 450) * 100 * Math.cos((selectedNodeData.angle * Math.PI) / 180)}
                    y2={50 + (selectedNodeData.radius / 450) * 100 * Math.sin((selectedNodeData.angle * Math.PI) / 180)}
                    stroke={selectedNodeData.color}
                    strokeWidth="0.45"
                    strokeLinecap="round"
                    strokeDasharray="2 3"
                    className="transition-all duration-500 ease-out"
                    style={{
                      animation: 'dash 15s linear infinite'
                    }}
                  />
                  {/* Tiny animated data-packet dot floating towards Center */}
                  <circle r="0.9" fill={selectedNodeData.color} className="animate-pulse">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${50 + (selectedNodeData.radius / 450) * 100 * Math.cos((selectedNodeData.angle * Math.PI) / 180)} ${50 + (selectedNodeData.radius / 450) * 100 * Math.sin((selectedNodeData.angle * Math.PI) / 180)} L 50 50`}
                    />
                  </circle>
                </>
              )}
            </svg>

            {/* Central Core: High-end responsive LUOTA BG Glassmorphic Hub responding to active node's color with heartbeat pulse */}
            <div 
              className="absolute w-24 h-24 md:w-[110px] md:h-[110px] rounded-full bg-[#1A1D20] p-1 flex flex-col items-center justify-center shadow-2xl border transition-all duration-500 animate-heartbeat z-20"
              style={{
                borderColor: `${selectedNodeData.color}50`,
                boxShadow: `0 0 25px ${selectedNodeData.color}25, inset 0 0 10px ${selectedNodeData.color}15`
              }}
            >
              {/* Spinning decorative background layout */}
              <div 
                className="absolute inset-0 rounded-full animate-spin opacity-40 transition-all duration-500" 
                style={{ 
                  animationDuration: '10s',
                  background: `linear-gradient(to right, ${selectedNodeData.color}30, transparent, ${selectedNodeData.color}20)`
                }}
              ></div>
              <div className="absolute inset-1 rounded-full bg-[#1A1D20] flex flex-col items-center justify-center p-3 text-center">
                <img 
                  src="https://luota.ch/wp-content/uploads/2020/06/LUOTA_Logo_RGB_weiss.svg" 
                  alt="Luota AG" 
                  className="h-5 w-auto object-contain mb-1.5" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-[7.5px] text-gray-400 font-mono tracking-widest uppercase font-semibold">Treuhand</span>
                <span className="text-[7px] text-[#0887EB] font-bold font-mono tracking-wider -mt-0.5">Ecosystem</span>
              </div>
              <div className="absolute -bottom-1 flex justify-center">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            {/* Mapped Nodes (Interactive Glass Buttons with 75% scaled-up dimensions) */}
            {Object.values(nodes).map((node) => {
              const radiusPercent = (node.radius / 450) * 100;
              const angleRad = (node.angle * Math.PI) / 180;
              const xPercent = 50 + radiusPercent * Math.cos(angleRad);
              const yPercent = 50 + radiusPercent * Math.sin(angleRad);
              const isSelected = selectedNode === node.id;
              const isInner = node.type === 'inner';

              return (
                <button
                  key={node.id}
                  onMouseEnter={() => handleNodeSelect(node.id)}
                  onClick={() => handleNodeSelect(node.id)}
                  className={`absolute focus:outline-none transition-all duration-300 z-30 flex flex-col items-center group cursor-pointer ${
                    isSelected 
                      ? 'scale-115 opacity-100' 
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    left: `calc(${xPercent}% - ${isInner ? '38px' : '31px'})`,
                    top: `calc(${yPercent}% - ${isInner ? '38px' : '31px'})`,
                  }}
                >
                  <div
                    className={`rounded-2xl flex items-center justify-center transition-all duration-300 relative shadow-md bg-white border ${
                      isInner
                        ? isSelected
                          ? 'shadow-lg'
                          : 'border-slate-200/80 hover:border-slate-300'
                        : isSelected
                          ? 'shadow-sm'
                          : 'border-slate-100 hover:border-slate-300'
                    }`}
                    style={{
                      width: isInner ? '76px' : '62px',
                      height: isInner ? '76px' : '62px',
                      ...(isSelected
                        ? {
                            borderColor: node.color,
                            boxShadow: `0 0 20px ${node.color}50, inset 0 0 6px ${node.color}15`,
                          }
                        : undefined)
                    }}
                  >
                    {/* Node Brand Logo Render or custom AI Sparkle fallback with custom gradient backgrounds */}
                    {node.logo === 'ai' ? (
                      <div 
                        className="w-full h-full rounded-xl flex items-center justify-center text-white"
                        style={{ background: `linear-gradient(135deg, ${node.color}, #c084fc)` }}
                      >
                        <Sparkles className="w-8 h-8 animate-pulse" />
                      </div>
                    ) : (
                      <div className="w-full h-full p-2 flex items-center justify-center bg-white rounded-xl">
                        <img 
                          src={node.logo} 
                          alt={node.name} 
                          className="w-full h-full object-contain filter hover:brightness-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {/* Active Ripple Aura Effect with node custom brand color */}
                    {isSelected && (
                      <span 
                        className="absolute inset-0 rounded-2xl animate-ping -z-10"
                        style={{ backgroundColor: `${node.color}15` }}
                      ></span>
                    )}
                  </div>

                  {/* Compact floating UI label */}
                  <span
                    className={`absolute text-[8px] md:text-[9.5px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 pointer-events-none ${
                      isSelected
                        ? 'text-white shadow-md font-semibold opacity-100 scale-100'
                        : 'bg-white/95 text-gray-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 border border-slate-100'
                    }`}
                    style={{
                      transform: `translateY(${isInner ? '42px' : '35px'})`,
                      backgroundColor: isSelected ? node.color : undefined,
                    }}
                  >
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
