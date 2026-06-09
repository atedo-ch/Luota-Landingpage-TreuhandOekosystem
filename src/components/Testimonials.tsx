import { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  impactLabel: string;
  impactValue: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'hintermann',
      quote: "Dank Luota haben wir unsere Durchlaufzeiten bei der jährlichen MWST-Abrechnung um über 70% reduziert. Unsere Mandanten schätzen das extrem unkomplizierte Einreichen und Freigeben von Belegen komplett ohne Medienbrüche.",
      author: "Beat Hintermann",
      role: "Inhaber Hintermann Treuhand AG",
      location: "Zürich",
      impactLabel: "Zeitersparnis MWST",
      impactValue: "-70%",
      avatar: "BH"
    },
    {
      id: 'stucki',
      quote: "Die zweiseitigen Live-Schnittstellen zu Abacus und bexio laufen absolut geräuschlos im Hintergrund. Unsere Treuhänder haben jetzt endlich Zugriff auf Live-Finanzdaten statt erst Wochen später beim Monatsabschluss.",
      author: "Therese Stucki",
      role: "CEO Stucki & Partner Consulting",
      location: "Bern",
      impactLabel: "Daten-Aktualität",
      impactValue: "Realtime",
      avatar: "TS"
    },
    {
      id: 'keller',
      quote: "Der integrierte AI-Assistent ist ein echter Gamechanger bei der schnellen Plausibilisierung von Kontenblättern. Dass die KI vollständig DSG-konform und in der Schweiz gehostet wird, gab für uns den entscheidenden Ausschlag.",
      author: "Marc Keller",
      role: "Partner Keller & Co. Treuhand",
      location: "St. Gallen",
      impactLabel: "Review-Dauer",
      impactValue: "9 Min.",
      avatar: "MK"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 relative">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0887eb01_1px,transparent_1px),linear-gradient(to_bottom,#0887eb01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0887EB] uppercase bg-[#E0F0FC]/60 border border-[#0887EB]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Kundenstimmen & Referenzen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2E2E2E]">
            Was Schweizer Treuhänder über Luota sagen.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
            Überzeugen Sie sich selbst, wie digitale Pioniere des Schweizer Treuhandwesens ihre Effizienz vervielfachen und Mandanten begeistern.
          </p>
        </div>

        {/* Carousel Layout */}
        <div className="max-w-4xl mx-auto relative" id="testimonials-carousel-container">
          {/* Main Card with soft border matching our premium visuals */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden transition-all duration-500">
            {/* Soft decorative accent badge based on current testimonial */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0887EB]/5 to-transparent rounded-tr-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
              
              {/* Quote details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[#0887EB] mb-6 inline-block">
                    <Quote className="w-10 h-10 transform -scale-x-100 opacity-20" />
                  </div>
                  
                  <blockquote className="text-base md:text-lg text-[#2E2E2E] leading-relaxed font-semibold mb-6">
                    "{active.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0887EB] to-[#3A9FEF] text-white flex items-center justify-center font-display font-extrabold text-sm shadow-sm select-none">
                    {active.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm md:text-base text-[#2E2E2E]">
                      {active.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {active.role}, <span className="text-[#0887EB]">{active.location}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Side impact visual dashboard */}
              <div className="w-full md:w-56 bg-slate-50/80 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shrink-0 relative">
                <div>
                  <div className="flex items-center gap-1 text-slate-300 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold block mb-1">
                    Messbarer Effekt
                  </span>
                  <div className="text-4xl md:text-5xl font-display font-black text-[#2E2E2E] tracking-tight">
                    {active.impactValue}
                  </div>
                  <p className="text-xs text-[#2E2E2E] font-medium mt-1 leading-normal">
                    {active.impactLabel}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/60 hidden md:block">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 rounded-full px-2.5 py-1">
                    <Check className="w-3 h-3 h-3" /> Verifiziert
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Slider Controllers */}
          <div className="flex items-center justify-between mt-6 px-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-[#0887EB]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Gehe zu Folie ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                id="testimonial-prev-btn"
                className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-[#2E2E2E] hover:border-slate-300 transition-colors shadow-sm cursor-pointer"
                aria-label="Vorherige Aussage"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                id="testimonial-next-btn"
                className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-[#2E2E2E] hover:border-slate-300 transition-colors shadow-sm cursor-pointer"
                aria-label="Nächste Aussage"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
