import { useState, useEffect } from 'react';
import { 
  Bot, 
  FileText, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Paperclip, 
  Layers, 
  User, 
  HelpCircle,
  FileCheck,
  ShieldCheck,
  FolderOpen
} from 'lucide-react';
import { ChatDocument, ChatMessage } from '../types';

export default function AIAssistantSection() {
  const sampleDocuments: ChatDocument[] = [
    {
      id: 'arbeitsvertrag',
      name: 'Arbeitsvertrag_Huber_Senior.pdf',
      type: 'PDF-Dokument',
      size: '142 KB',
      date: '12.04.2026',
      content: 'Anstellungsvereinbarung zwischen der Schweizer Treuhand Holding AG und Hans Huber als Senior Consultant, gestartet per 01. Juni 2026. Vereinbarter Bruttolohn: CHF 9\'800.- x 13 Monate. Wöchentliche Arbeitszeit: 42 Stunden. Kündigungsfrist: 3 Monate nach Ablauf der Probezeit.',
      analysis: {
        title: 'Vertragsanalyse & OR-Kompatibilität',
        summary: 'Standardisierter Schweizer Arbeitsvertrag für unbefristete Festanstellung. Lohnstruktur und Arbeitszeit liegen im branchenüblichen Durchschnitt.',
        clauses: [
          { label: 'Bruttogehalt', text: 'CHF 9\'800.- (Inkl. 13. Monatslohn pro rata)', risk: 'neutral' },
          { label: 'Kündigungsfrist', text: '3 Monate (OR-konform nach Art. 335c Abs. 2)', risk: 'low' },
          { label: 'Überstundenregelung', text: 'Pauschalierte Überstundenabgeltung vereinbart. Kritisch auf Einhaltung ArG prüfen.', risk: 'high' }
        ]
      }
    },
    {
      id: 'mwst_beleg',
      name: 'MWST_Spezialabrechnung_Q1.pdf',
      type: 'Steuerdokument',
      size: '88 KB',
      date: '02.05.2026',
      content: 'MWST-Abrechnung für die Bergbahn Gastro AG. Berechnet nach der Saldosteuersatzmethode für das Q1 2026. Saldosteursatz 5.1 % gemäss ESTV-Klassenfreigabe. Gesamtumsatz steuerbar: CHF 420\'000.-. Auszuzahlende Steuerforderung: CHF 21\'420.-.',
      analysis: {
        title: 'MWST-Plausibilitätsprüfung',
        summary: 'Automatisch ermittelte Saldosteuersatz-Dokumentation für das schweizerische Gastgewerbe.',
        clauses: [
          { label: 'Satzmethode', text: 'Saldosteuersatz Methode angewendet', risk: 'neutral' },
          { label: 'ESTV Satz', text: '5.1 % (Richtig für Beherbergung & Gastronomie, Klasse 2)', risk: 'low' },
          { label: 'Umsatzabgleich', text: 'Gesamtumsatz CHF 420k deckt sich mit ERP-System (Abacus Match)', risk: 'low' }
        ]
      }
    },
    {
      id: 'statuten',
      name: 'Entwurf_Statuten_Gründung.pdf',
      type: 'Rechtsdokument',
      size: '310 KB',
      date: '18.05.2026',
      content: 'Statutenentwurf der neuen Alpine Tech GmbH mit Sitz in Zug. Stammkapital: CHF 20\'000.- voll liberiert durch Bareinlage. Geschäftsführer: Dr. Beat Keller. Gewinnverteilung gemäss Gesellschafterbeschluss.',
      analysis: {
        title: 'Statuten-Check GmbH-Gründung',
        summary: 'Gründungsdokument für eine neue Schweizer GmbH mit Einlagebestätigung.',
        clauses: [
          { label: 'Sitzwahl', text: 'Zug (Steuergünstiges Domizil)', risk: 'neutral' },
          { label: 'Liberierung', text: 'CHF 20\'000.- Bareinlage voll liberiert', risk: 'low' },
          { label: 'Nachschusspflichten', text: 'Keine Nachschusspflichten vereinbart. Vorbehalt der Statutenabänderung prüfen.', risk: 'high' }
        ]
      }
    }
  ];

  const presetQuestions: Record<string, { q: string; a: string; law: string; refText: string }[]> = {
    arbeitsvertrag: [
      {
        q: 'Wie hoch ist die Kündigungsfrist im Vertrag?',
        a: 'Die vertraglich festgesetzte Kündigungsfrist beträgt 3 Monate nach Ablauf der Probezeit.',
        law: 'OR Art. 335c Abs. 2',
        refText: 'Besagt, dass im zweiten bis neunten Dienstjahr die Kündigungsfrist zwei Monate beträgt, im vorliegenden Vertrag wurde jedoch eine abweichende, zulässige Erhöhung auf 3 Monate vereinbart.'
      },
      {
        q: 'Gibt es arbeitsrechtliche Risiken im Entwurf?',
        a: 'Ja, die Überstundenregelung ist als pauschal abgegolten deklariert. Dies kollidiert bei Mitarbeitern ohne leitende Funktion mit dem Schweizer Arbeitsgesetz.',
        law: 'ArG Art. 9 & Art. 13',
        refText: 'Überstunden müssen kompensiert oder mit mindestens 25% Zuschlag ausgezahlt werden, sofern nicht schriftlich anders geregelt. Die Pauschalierung ist bei Consulting-Rollen oft rechtlich anfechtbar.'
      }
    ],
    mwst_beleg: [
      {
        q: 'Stimmt der Saldosteuersatz für dieses Mandat?',
        a: 'Ja, der angewendete Saldosteuersatz von 5.1% ist für das Beherbergungs- und Gastronomiegewerbe im Jahr 2026 korrekt hinterlegt.',
        law: 'MWSTG Art. 37 & ESTV Verordnung',
        refText: 'Die Eidgenössische Steuerverwaltung (ESTV) stuft Hotels mit Gastronomiebetrieb unter Branchenklasse 2 ein, was dem angewandten Saldosteuersatz entspricht.'
      }
    ],
    statuten: [
      {
        q: 'Ist die GmbH-Liberierung rechtlich fehlerfrei?',
        a: 'Ja, die Stammanteile sind mit CHF 20\'000.- voll liberiert. Eine Teilliberierung ist bei der GmbH im Gegensatz zur AG ohnehin nicht zulässig.',
        law: 'OR Art. 773 & Art. 777c',
        refText: 'Das Stammkapital muss bei der Gründung zu 100% einbezahlt sein. Die Einlagebestätigung muss von einer Schweizer Bank vorliegen.'
      }
    ]
  };

  const [activeDocId, setActiveDocId] = useState<string>('arbeitsvertrag');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'Guten Tag! Ich habe das Dokument "Arbeitsvertrag_Huber_Senior.pdf" analysiert. Wählen Sie eine Frage aus oder stellen Sie Ihre eigene, um die Schweizer Treuhand-KI zu testen.',
      timestamp: '14:15'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const activeDoc = sampleDocuments.find(d => d.id === activeDocId) || sampleDocuments[0];

  // Reset messages when document changes
  useEffect(() => {
    setMessages([
      {
        id: 'init',
        sender: 'assistant',
        text: `Ich habe das Dokument "${activeDoc.name}" erfolgreich analysiert. Was möchten Sie dazu wissen?`,
        timestamp: new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [activeDocId]);

  const handleSendMessage = (text: string, lawRef?: any) => {
    if (!text.trim()) return;

    // Add user message
    const newMessage: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      let responseText = 'Ich habe Ihre Frage erhalten. Als Schweizer Treuhand-KI bin ich auf Treuhandrecht spezialisiert. Für dieses spezifische Test-Dokument empfehle ich, eine der vordefinierten Fragen auszuwählen, um präzise Rechtsbelege einzusehen.';
      let docSource = undefined;

      // Check if we have registered answer
      if (lawRef) {
        responseText = lawRef.a;
        docSource = {
          title: lawRef.law,
          page: 'Seite 1 (Volltextanalyse)',
          matchedText: lawRef.refText
        };
      } else {
        // Fallback intelligent search matching
        const answersForDoc = presetQuestions[activeDocId] || [];
        const matched = answersForDoc.find(item => 
          text.toLowerCase().includes(item.q.toLowerCase().slice(0, 10)) ||
          text.toLowerCase().split(' ').some(w => w.length > 4 && item.q.toLowerCase().includes(w))
        );
        if (matched) {
          responseText = matched.a;
          docSource = {
            title: matched.law,
            page: 'Seite 1 (KI-Extrakt)',
            matchedText: matched.refText
          };
        }
      }

      const aiResponse: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }),
        documentSource: docSource
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="ai-assistant" className="py-24 md:py-32 bg-brand-dark relative text-white overflow-hidden">
      {/* Dynamic futuristic grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0887eb05_1px,transparent_1px),linear-gradient(to_bottom,#0887eb05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Soft gradient ambient backdrops */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-primary/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary inline mr-1 animate-pulse" />
            Luota AI Co-Pilot
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            KI für Treuhänder. Sicher. Nachvollziehbar. Produktiv.
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Keine unkontrollierte Nutzung öffentlicher ChatGPT-Modelle. Luota kombiniert modernste KI mit einer strikten Berechtigungs-Governance und Schweizer Datenspeicherung. Jede Behauptung wird direkt am Mandantenbeleg belegt.
          </p>
        </div>

        {/* Modular AI Sandbox Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="sandbox-workspace">
          
          {/* Left Block - Sidebar & Document Content Viewer (Sparsely Styled in dark slate) */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="sandbox-documents-manager">
            
            {/* Step 1 Selector */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                <span>1. Beleg auswählen (Mustermandate)</span>
              </h3>
              <div className="flex flex-col gap-2.5">
                {sampleDocuments.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setActiveDocId(doc.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer focus:outline-none ${
                      doc.id === activeDocId
                        ? 'bg-[#0887EB] border-[#0887EB] text-white shadow-lg'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg ${doc.id === activeDocId ? 'bg-white/20' : 'bg-white/5 text-brand-light'}`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-display truncate max-w-[200px]">{doc.name}</div>
                        <div className="text-[10px] opacity-75 font-mono">{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      doc.id === activeDocId ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                      Aktiv
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 parsed review */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Automatische Voranalyse
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" /> CH-Secured
                  </span>
                </div>
                
                <h5 className="font-display font-bold text-base text-white mb-2">
                  {activeDoc.analysis.title}
                </h5>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">
                  {activeDoc.analysis.summary}
                </p>

                <div className="space-y-3">
                  {activeDoc.analysis.clauses.map((clause, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        clause.risk === 'high' ? 'bg-rose-500 animate-ping' : clause.risk === 'low' ? 'bg-emerald-400' : 'bg-blue-400'
                      }`} />
                      <div className="flex-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">{clause.label}</span>
                        <p className="text-xs text-white font-medium mt-0.5">{clause.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secure statement */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <FileCheck className="w-3.5 h-3.5 text-brand-accent" />
                  M-Files Sync Ready
                </span>
                <span>Zuletzt erfasst: {activeDoc.date}</span>
              </div>
            </div>

          </div>

          {/* Right Block - Conversational Chat Workspace */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 flex flex-col justify-between" id="sandbox-chat-interface">
            <div>
              {/* Header inside chat */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">Luota Treuhand-Assistent</h3>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Modell: Luota Fiduciary Model (v4)
                    </span>
                  </div>
                </div>
                
                <div className="text-right text-[10px] text-gray-400 font-mono self-center">
                  <span>Audited by Luota Compliance Swiss</span>
                </div>
              </div>

              {/* Messages viewport */}
              <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2 mb-6" id="chat-messages-container">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'assistant' && (
                      <div className="w-8 h-8 rounded-lg bg-[#0887EB] text-white flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0887EB] text-white ml-auto'
                        : 'bg-white/10 border border-white/5 text-gray-200'
                    }`}>
                      <p>{msg.text}</p>
                      
                      {/* Legal Source Attachment for trust auditing */}
                      {msg.documentSource && (
                        <div className="mt-3 pt-3 border-t border-white/10 bg-black/20 rounded-lg p-2.5 text-[11px]">
                          <span className="font-bold text-[#62B2F2] flex items-center gap-1 mb-1 font-mono">
                            <BookOpen className="w-3 h-3 text-[#3A9FEF]" />
                            RECHTSQUELLE: {msg.documentSource.title}
                          </span>
                          <span className="text-slate-400 block italic">«{msg.documentSource.matchedText}»</span>
                          <span className="text-[9px] text-slate-500 font-mono mt-1.5 block tracking-wider uppercase">{msg.documentSource.page}</span>
                        </div>
                      )}
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/5 font-mono text-[10px] font-bold">
                        ME
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0887EB] text-white flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white/10 border border-white/5 rounded-2xl p-4 text-xs text-gray-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#62B2F2] rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-[#62B2F2] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#62B2F2] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      <span className="font-mono text-[10px] ml-2 font-semibold">Generiere belegte Antwort...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Preset Questions Selector */}
            <div className="border-t border-white/10 pt-4" id="sandbox-preset-questions-bar">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-3 tracking-wider">
                Fragen zum aktiven Beleg (Tippen zum Testen):
              </span>
              <div className="flex flex-wrap gap-2 mb-4">
                {(presetQuestions[activeDocId] || []).map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(preset.q, preset)}
                    className="bg-white/5 hover:bg-[#0887EB]/20 text-white hover:text-white border border-white/10 text-left px-3.5 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors max-w-full flex items-center gap-2 "
                  >
                    <span>{preset.q}</span>
                    <Sparkles className="w-3 h-3 text-[#3A9FEF] shrink-0" />
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2 rounded-2xl"
              >
                <button type="button" className="p-2 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white focus:outline-none">
                  <Paperclip className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Eigene Frage zum Beleg eintippen..."
                  className="bg-transparent flex-1 text-xs text-white border-0 focus:outline-none focus:ring-0 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-[#0887EB] hover:bg-[#3A9FEF] text-white p-2.5 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center justify-center shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Messaging Feature Accents */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="ai-benefit-highlights">
          {[
            {
              title: 'Präziser Berechtigungs-Schutz',
              desc: 'Die KI greift nur auf Belege zu, für die der jeweilige Mitarbeiter eine Freigabe besitzt.'
            },
            {
              title: 'Kein Training auf Mandantendaten',
              desc: 'Ihre hochgeladenen Dokumente werden niemals zum Training globaler Modelle missbraucht.'
            },
            {
              title: 'Schweizer Gesetzesabgleich',
              desc: 'Alle Antworten referenzieren Schweizer Normen wie OR, MwSTG, DSG oder GeBüV direkt.'
            },
            {
              title: 'Nahtloses Workflow-Routing',
              desc: 'Erkannte Termine oder Fristen werden direkt als Pendenzen an das Prozessmodul angemeldet.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-display font-medium text-sm text-white mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
