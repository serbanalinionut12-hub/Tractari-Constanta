/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  PhoneCall, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Fuel, 
  Battery, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  Navigation
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PHONE_NUMBER = "+40 735 665 066";

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Tractări Auto",
    description: "Transport în siguranță pentru orice tip de autoturism, SUV sau autoutilitară.",
    price: "Tarif negociabil la telefon"
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Asistență Baterie",
    description: "Pornire cu robot sau înlocuire baterie direct la locația dumneavoastră.",
    price: "Tarif negociabil la telefon"
  },
  {
    icon: <Fuel className="w-8 h-8" />,
    title: "Pana de Carburant",
    description: "Livrare rapidă de combustibil dacă ați rămas în pană pe drum.",
    price: "Tarif negociabil la telefon"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Vulcanizare Mobilă",
    description: "Schimb de roată de rezervă sau reparații minore la fața locului.",
    price: "Tarif negociabil la telefon"
  }
];

const stats = [
  { label: "Timp de Răspuns", value: "15-30 MIN" },
  { label: "Clienți Mulțumiți", value: "1000+" },
  { label: "Ani de Experiență", value: "2+" },
  { label: "Tractări Lunare", value: "50+" }
];

const testimonials = [
  {
    name: "Andrei Popescu",
    role: "Șofer",
    content: "Au ajuns în 20 de minute pe autostradă. Foarte profesioniști și prețul a fost corect.",
    rating: 5
  },
  {
    name: "Elena Ionescu",
    role: "Turist",
    content: "Mi s-a oprit mașina în drum spre Mamaia. M-au ajutat imediat și m-au dus la un service de încredere.",
    rating: 5
  },
  {
    name: "Marius Radu",
    role: "Client fidel",
    content: "Singurii care au răspuns la 3 dimineața iarna. Recomand cu drag!",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? "bg-black/90 backdrop-blur-md border-brand-line py-4" : "bg-transparent border-transparent py-8"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="font-black text-xs tracking-[0.3em] uppercase text-brand-accent">TRACTĂRI CT.PRO</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">DISPONIBIL 24/7</span>
            </div>
            <a href="#servicii" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-brand-accent transition-colors">Servicii</a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="border border-brand-accent text-brand-accent px-6 py-2 rounded-none text-[11px] font-black tracking-[0.2em] hover:bg-brand-accent hover:text-black transition-all"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <button className="md:hidden p-2 text-brand-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6 md:hidden flex flex-col justify-center items-center text-center"
          >
            <div className="flex flex-col gap-8">
              <a href="#servicii" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Servicii</a>
              <a href="#despre" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Despre</a>
              <a href="#tarife" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>Tarife</a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="text-brand-accent text-3xl font-black mt-4"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg border-b border-brand-line">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="headline-wrapper mb-12">
              <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] uppercase tracking-[-0.06em] text-brand-accent">
                TRACTĂRI
              </h1>
              <div className="text-7xl md:text-[140px] font-black leading-[0.85] uppercase tracking-[-0.06em] text-transparent opacity-20" style={{ WebkitTextStroke: "1px white" }}>
                CONSTANȚA
              </div>
            </div>

            <div className="max-w-xl">
              <div className="text-[12px] font-bold tracking-[0.4em] uppercase text-brand-accent mb-4">SUNAȚI ACUM PENTRU ASISTENȚĂ</div>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="text-5xl md:text-8xl font-light tracking-[-0.04em] block mb-12 hover:text-brand-accent transition-colors"
              >
                {PHONE_NUMBER}
              </a>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#servicii"
                  className="bg-brand-accent text-brand-bg px-10 py-4 font-black uppercase tracking-widest text-sm hover:invert transition-all flex items-center gap-2"
                >
                  Vezi Servicii <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-1/2 -rotate-90 origin-right translate-y-1/2 translate-x-12 hidden lg:block">
          <span className="text-[10px] font-bold tracking-[0.6em] uppercase opacity-30 whitespace-nowrap">
            JUDEȚUL CONSTANȚA & ÎMPREJURIMI
          </span>
        </div>
      </section>

      {/* Services Section - Redesigned as a Grid */}
      <section id="servicii" className="bg-brand-bg border-b border-brand-line">
        <div className="grid md:grid-cols-4 border-l border-brand-line container mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-12 border-r border-brand-line min-h-[300px] flex flex-col justify-between group hover:bg-brand-accent/5 transition-colors"
            >
              <div>
                <span className="text-xs font-black text-brand-accent tracking-widest block mb-8">0{index + 1}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">{service.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-8 flex justify-between items-center">
                <span className="text-xs font-black tracking-widest uppercase opacity-40">{service.price}</span>
                <div className="w-8 h-8 rounded-full border border-brand-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={14} className="text-brand-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats/About Section */}
      <section id="despre" className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-12 leading-[0.9]">
                PROFESIONISM<br />
                <span className="text-brand-accent">FĂRĂ COMPROMIS.</span>
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {stats.map((stat, i) => (
                  <div key={i} className="border-t border-brand-line pt-6">
                    <div className="text-4xl font-black text-brand-accent mb-2">{stat.value}</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-line overflow-hidden grayscale contrast-125">
                <img 
                  src="https://cdn.discordapp.com/attachments/952908160665006120/1494350997601124372/WhatsApp_Image_2026-04-16_at_17.52.04.jpeg?ex=69e24a51&is=69e0f8d1&hm=c4ee2daba8474515786144b5b8e63824c8e66d04bfbbf0c411945a05068030f1&" 
                  alt="Recovery vehicle" 
                  className="w-full h-full object-cover mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-0 right-0 p-8">
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-[10px] font-black text-center tracking-tighter">
                    EST. 2025<br />CONSTANȚA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarife Section */}
      <section id="tarife" className="py-32 bg-brand-bg border-y border-brand-line">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6">TARIFE <span className="text-brand-accent">CORECTE.</span></h2>
            <div className="w-24 h-2 bg-brand-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-l border-t border-brand-line">
            {[
              { name: "Local CT", price: "Tarif negociabil la telefon", limit: "Autoturisme", speed: "20 min" },
              { name: "Extern CT", price: "Tarif negociabil la telefon", limit: "Orice distantă", speed: "Imediat" },
              { name: "SUV/VAN", price: "Tarif negociabil la telefon", limit: "Până la 3.5t", speed: "Special" }
            ].map((plan, i) => (
              <div key={i} className="p-12 border-r border-b border-brand-line group hover:bg-brand-accent transition-all duration-500">
                <h3 className="text-xs font-black tracking-[0.3em] uppercase opacity-40 group-hover:text-brand-bg mb-8">{plan.name}</h3>
                <div className="text-5xl font-black mb-12 group-hover:text-brand-bg transition-colors leading-none">{plan.price}</div>
                <div className="space-y-4 mb-12 group-hover:text-brand-bg transition-colors">
                  <div className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-line group-hover:border-brand-bg/20 pb-2">Destinat: {plan.limit}</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest border-b border-brand-line group-hover:border-brand-bg/20 pb-2">Timp: {plan.speed}</div>
                </div>
                <a href={`tel:${PHONE_NUMBER}`} className="inline-block text-[11px] font-black uppercase tracking-[0.2em] py-3 px-8 border border-brand-line group-hover:border-brand-bg group-hover:bg-brand-bg group-hover:text-brand-accent transition-all">
                  SUNĂ ACUM
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg py-24 border-t border-brand-line">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xs">
              <span className="font-black text-xs tracking-[0.3em] uppercase text-brand-accent block mb-8 underline decoration-4 underline-offset-8">TRACTĂRI CT.PRO</span>
              <p className="text-xs font-medium text-gray-500 leading-loose uppercase tracking-wider">
                Servicii profesionale de asistență rutieră disponibile non-stop în județul Constanța și pe autostrada A2. Promptitudine și siguranță garantată.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-24">
              <div className="space-y-6">
                <div className="text-[10px] font-black tracking-widest uppercase opacity-30">Navigare</div>
                <nav className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
                  <a href="#servicii" className="hover:text-brand-accent transition-colors">Servicii</a>
                  <a href="#despre" className="hover:text-brand-accent transition-colors">Despre</a>
                  <a href="#tarife" className="hover:text-brand-accent transition-colors">Tarife</a>
                </nav>
              </div>
              <div className="space-y-6">
                <div className="text-[10px] font-black tracking-widest uppercase opacity-30">Legal</div>
                <nav className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest">
                  <span className="opacity-40">POLITICA COOKIE</span>
                  <span className="opacity-40">ANPC</span>
                  <span className="opacity-40">SOL</span>
                </nav>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className="text-[10px] font-black tracking-widest uppercase opacity-30">Intervenții 24/7</div>
              <a href={`tel:${PHONE_NUMBER}`} className="text-4xl font-black tracking-tighter hover:text-brand-accent transition-all">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-brand-line flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20">
              &copy; {new Date().getFullYear()} TRACTĂRI.PRO CONSTANȚA. TOATE DREPTURILE REZERVATE.
            </p>
            <div className="w-12 h-1 bg-brand-accent" />
          </div>
        </div>
      </footer>
    </div>
  );
}
