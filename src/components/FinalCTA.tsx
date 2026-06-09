import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  Award,
  Video
} from 'lucide-react';

export default function FinalCTA() {
  const [bookingState, setBookingState] = useState<'date' | 'time' | 'form' | 'success'>('date');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [fiduciaryName, setFiduciaryName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // 2026 Calendar Days
  const availableDays = [25, 26, 27, 28, 29]; // Mon-Fri in May 2026
  const timeSlots = [
    { time: '09:00', label: 'Beliebt für Erstgespräche' },
    { time: '11:00', label: 'Ecosystem Potenzialanalyse' },
    { time: '14:00', label: 'M-Files & AI Live Demo' },
    { time: '16:00', label: 'Treuhandstrategie-Check' }
  ];

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    setBookingState('time');
  };

  const handleTimeSelect = (timeSlot: string) => {
    setSelectedTime(timeSlot);
    setBookingState('form');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail && fiduciaryName) {
      setBookingState('success');
    }
  };

  const resetBooking = () => {
    setBookingState('date');
    setSelectedDate(null);
    setSelectedTime(null);
    setFiduciaryName('');
    setClientName('');
    setClientEmail('');
  };

  return (
    <section id="final-cta-section" className="py-24 md:py-32 bg-[#1C1F22] text-white relative overflow-hidden">
      {/* Dynamic graphic backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0887eb10,transparent_50%)] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-10 w-96 h-96 rounded-full bg-[#0887EB]/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left column - Value Propositions & Direct Touchpoints */}
        <div className="lg:col-span-6 flex flex-col justify-center" id="final-cta-messaging-side">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0887EB] uppercase bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4 self-start">
            Digitale Transformation Starten
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Zeit, Treuhandprozesse neu zu denken.
          </h2>
          
          <p className="mt-5 text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Lassen Sie uns gemeinsam analysieren, wo in Ihrem Treuhandunternehmen repetitive Medienbrüche, Papierberge und unproduktiver Zeitdiebstahl herrschen. Wir entwerfen Ihr digitales Treuhand-Ökosystem – verständlich, praxisbezogen und direkt umsetzbar.
          </p>

          <div className="mt-8 space-y-4" id="final-cta-benefits-list">
            {[
              '30 Minuten kostenfreie Treuhand-Diagnose',
              'Konkreter Fahrplan für DMS & Portalintegration',
              'Berechnung Ihres individuellen ROI-Hebel-Potenzials'
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0887EB]/20 text-[#0887EB] flex items-center justify-center shrink-0 border border-[#0887EB]/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-200">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 border-t border-white/10 pt-8" id="direct-contact-touchpoints">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0887EB]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Direktkontakt Schweiz</span>
                <a href="tel:+41445000000" className="text-sm font-bold text-white hover:text-[#0887EB] transition-colors">+41 44 500 00 00</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#0887EB]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Schreiben Sie uns</span>
                <a href="mailto:info@luota.ch" className="text-sm font-bold text-white hover:text-[#0887EB] transition-colors">info@luota.ch</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Magnificent real-time Interactive calendar booking widget */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 text-[#2E2E2E] shadow-2xl relative border border-gray-100" id="interactive-booking-applet">
          
          {/* Header inside widget */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
              <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-gray-400">Live Terminreservierung</span>
            </div>
            <span className="text-[11px] bg-[#E0F0FC]/60 text-[#0887EB] px-3 py-1 rounded-full font-bold">Kostenlos</span>
          </div>

          {/* Stepper progress indicator */}
          <div className="flex justify-between items-center mb-6 text-[10px] font-mono font-bold text-gray-400" id="booking-stepper-progress">
            <span className={bookingState !== 'success' ? 'text-[#0887EB]' : 'text-gray-400'}>Datum</span>
            <span className="text-gray-300">→</span>
            <span className={bookingState === 'time' || bookingState === 'form' ? 'text-[#0887EB]' : 'text-gray-400'}>Uhrzeit</span>
            <span className="text-gray-300">→</span>
            <span className={bookingState === 'form' ? 'text-[#0887EB]' : 'text-gray-400'}>Ihre Daten</span>
            <span className="text-gray-300">→</span>
            <span className={bookingState === 'success' ? 'text-emerald-600 font-extrabold' : 'text-gray-400'}>Fertig</span>
          </div>

          {/* STATE 1: Select Date */}
          {bookingState === 'date' && (
            <div id="booking-step-date">
              <h3 className="font-display font-bold text-base text-[#2E2E2E] mb-4 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0887EB]" />
                <span>Wählen Sie ein Datum (Mai 2026)</span>
              </h3>
              
              <div className="grid grid-cols-7 gap-2 text-center mb-6 text-xs" id="custom-calendar-mesh">
                {/* Days of week */}
                {['M', 'D', 'M', 'D', 'F', 'S', 'S'].map((d, index) => (
                  <div key={index} className="text-[10px] font-mono font-extrabold text-gray-400 uppercase py-1">{d}</div>
                ))}
                
                {/* Empty buffer days for aligning grid */}
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="p-2 opacity-10"></div>
                ))}

                {/* Actual days starting with May 1st 2026 (Friday) */}
                {Array.from({ length: 31 }).map((_, index) => {
                  const day = index + 1;
                  const isAvailable = availableDays.includes(day);
                  return (
                    <button
                      key={day}
                      disabled={!isAvailable}
                      onClick={() => handleDateSelect(day)}
                      className={`p-2.5 rounded-full font-mono text-xs font-semibold flex items-center justify-center focus:outline-none transition-all ${
                        isAvailable 
                          ? 'bg-[#E0F0FC]/60 text-[#0887EB] hover:bg-[#0887EB] hover:text-white cursor-pointer shadow-sm font-bold scale-102 hover:scale-105' 
                          : 'text-gray-300 pointer-events-none'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-gray-400 font-mono text-center">
                * Nur aktive, grün markierte Tage (Montag bis Freitag) sind für die Potenzialanalyse verfügbar.
              </p>
            </div>
          )}

          {/* STATE 2: Select Time */}
          {bookingState === 'time' && (
            <div id="booking-step-time">
              <h3 className="font-display font-bold text-base text-[#2E2E2E] mb-1 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0887EB]" />
                <span>Uhrzeit wählen für Mai {selectedDate}, 2026</span>
              </h3>
              <p className="text-xs text-gray-400 mb-4">Wählen Sie einen freien Slot aus unserem Beratungskalender:</p>

              <div className="flex flex-col gap-2.5 mb-6" id="booking-times-mesh">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeSelect(slot.time)}
                    className="p-3.5 rounded-2xl border border-slate-100 hover:border-[#0887EB] hover:bg-[#E0F0FC]/15 text-left transition-colors cursor-pointer focus:outline-none flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sm text-[#0887EB]">{slot.time} Uhr</span>
                      <span className="text-xs text-slate-600 font-medium">{slot.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-[#0887EB] transition-all" />
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setBookingState('date')} 
                className="text-xs font-mono font-bold text-gray-400 hover:text-[#0887EB] transition-colors focus:outline-none"
              >
                ← Zurück zur Datumsauswahl
              </button>
            </div>
          )}

          {/* STATE 3: Fiduciary metadata Form */}
          {bookingState === 'form' && (
            <form onSubmit={handleFormSubmit} id="booking-step-form">
              <h3 className="font-display font-bold text-base text-[#2E2E2E] mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#0887EB]" />
                <span>Analysedaten hinterlegen</span>
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Ihr Termin: <strong className="text-[#0887EB] font-bold">Mai {selectedDate}, 2026 um {selectedTime} Uhr</strong> (via Team-Video-Call)
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-400 block mb-1">Name des Treuhandunternehmens *</label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={fiduciaryName}
                      onChange={(e) => setFiduciaryName(e.target.value)}
                      placeholder="z.B. Müller & Partner Treuhand AG"
                      className="bg-[#f6f6f6] border border-[#eee] rounded-full pl-10 pr-4 py-3 text-xs text-[#2E2E2E] w-full focus:outline-none focus:ring-2 focus:ring-[#0887EB]/20 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-400 block mb-1">Ihr vollständiger Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Marc Müller"
                      className="bg-[#f6f6f6] border border-[#eee] rounded-full pl-10 pr-4 py-3 text-xs text-[#2E2E2E] w-full focus:outline-none focus:ring-2 focus:ring-[#0887EB]/20 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-400 block mb-1">Geschäftliche E-Mail *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="m.mueller@mueller-treuhand.ch"
                      className="bg-[#f6f6f6] border border-[#eee] rounded-full pl-10 pr-4 py-3 text-xs text-[#2E2E2E] w-full focus:outline-none focus:ring-2 focus:ring-[#0887EB]/20 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center" id="booking-submit-row">
                <button
                  type="button"
                  onClick={() => setBookingState('time')}
                  className="px-5 py-3 rounded-full border border-[#eee] text-xs text-gray-500 font-mono font-bold hover:bg-[#f6f6f6] focus:outline-none transition-colors shrink-0"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  className="bg-[#0887EB] hover:bg-[#3A9FEF] text-white text-xs font-semibold py-3.5 rounded-full transition-all cursor-pointer shadow-md flex-1 text-center justify-center flex items-center gap-2 group focus:outline-none shadow-[#0887EB]/10 hover:shadow-lg"
                >
                  <span>Gesprächstermin fest buchen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}

          {/* STATE 4: Success confirmation */}
          {bookingState === 'success' && (
            <div className="text-center py-6" id="booking-step-success">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce border border-emerald-100 shadow-sm">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              
              <h3 className="font-display font-black text-xl text-[#2E2E2E] mb-1 flex items-center justify-center gap-1.5">
                <span>Termin reserviert!</span>
                <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              </h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-6">
                Vielen Dank, Herr/Frau <strong className="text-[#2E2E2E] font-bold">{clientName}</strong>. Wir freuen uns auf das Gespräch mit dem Treuhandpartner <strong className="text-[#2E2E2E] font-bold">{fiduciaryName}</strong>!
              </p>

              <div className="bg-[#f6f6f6] border border-[#eee] p-4 rounded-2xl text-left max-w-md mx-auto mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-[#0887EB] block mb-3">Buchungsdaten:</span>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Datum:</span>
                    <strong className="text-[#2E2E2E] font-semibold">Mai {selectedDate}, 2026</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Zeit:</span>
                    <strong className="text-[#2E2E2E] font-semibold">{selectedTime} Uhr (CH-Lokalzeit)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Format:</span>
                    <strong className="text-[#2E2E2E] font-semibold flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-[#3A9FEF]" /> Teams-Meeting Link folgt per Mail
                    </strong>
                  </div>
                </div>
              </div>

              <div className="text-left max-w-md mx-auto space-y-3 p-1">
                <h4 className="text-[11px] font-bold font-mono text-slate-400 uppercase tracking-wider">Wie bereiten wir das Gespräch vor?</h4>
                <div className="flex gap-2 items-start text-xs text-gray-600">
                  <div className="w-4 h-4 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-3 h-3 stroke-[2.5]" /></div>
                  <span>Wir analysieren Ihren Webauftritt bezüglich Mandantenservice & Portalen vorab.</span>
                </div>
                <div className="flex gap-2 items-start text-xs text-gray-600">
                  <div className="w-4 h-4 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-3 h-3 stroke-[2.5]" /></div>
                  <span>Wir prüfen die API-Kapazität Ihrer bestehenden CRM/Fibu Module.</span>
                </div>
              </div>

              <button
                onClick={resetBooking}
                className="mt-8 text-xs font-mono font-bold text-gray-400 hover:text-[#0887EB] transition-colors focus:outline-none"
              >
                Weiteren Termin eintragen
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
