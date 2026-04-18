/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Sun, Battery, Zap, Leaf, ArrowRight, MessageSquare, ShieldCheck, BarChart3, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Add type for n8nChat on window
declare global {
  interface Window {
    n8nChat: any;
  }
}

const SolarParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none sophisticated-bg">
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] sun-orb rounded-full" />
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-solar-gold/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3,
          }}
          animate={{
            y: [null, "-30px", "30px", "0px"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7 + Math.random() * 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Nav = () => (
  <header className="absolute top-10 left-10 z-50 flex items-center gap-3">
    <div className="logo font-serif italic text-2xl font-bold tracking-tight">Helios Systems</div>
  </header>
);

const FeatureCard = ({ label, value }: { label: string, value: string }) => (
  <div className="stat-card p-6">
    <div className="text-[11px] uppercase tracking-widest text-white/50 mb-2 font-medium">{label}</div>
    <div className="text-2xl font-semibold text-solar-gold">{value}</div>
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden bg-solar-dark">
      <SolarParticles />
      <Nav />

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] h-full p-10 gap-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl font-normal mb-8 leading-[1.1]">
              Energy of the <span className="italic">next</span> century.
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-md font-light">
              Intelligent solar monitoring and panel optimization for the modern residential estate. Automate your savings through AI-driven load balancing.
            </p>
            
            <div className="grid grid-cols-2 gap-5 max-w-md">
              <FeatureCard label="Current Output" value="6.4 kWp" />
              <FeatureCard label="Grid Offset" value="94.2%" />
              <FeatureCard label="Storage Level" value="88%" />
              <FeatureCard label="Est. ROI" value="3.8 Yrs" />
            </div>

            <div className="mt-12 flex gap-4">
              <button className="bg-solar-gold text-solar-dark px-8 py-3 rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all">
                System Overview
              </button>
              <button className="border border-white/10 px-8 py-3 rounded-full font-bold text-sm text-white/70 hover:bg-white/5 transition-all">
                Analytics
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="hidden lg:flex flex-col justify-end gap-5">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="info-bubble p-6"
           >
              <div className="font-bold text-solar-gold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                SYSTEM INSIGHT
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                Your panels are currently operating at peak efficiency. The next maintenance cycle is scheduled in 142 days.
              </p>
           </motion.div>

           <div className="stat-card p-6 overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/solar/400/300" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold text-white/50 mb-1">LIVE FEED</div>
                <div className="text-xs font-medium italic">Station 04 - West Wing</div>
              </div>
           </div>
        </div>
      </main>

      {/* Helper for user instruction */}
      <div className="fixed bottom-10 right-28 pointer-events-none group z-40 lg:block hidden">
        <div className="bg-solar-gold/20 text-solar-gold px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest border border-solar-gold/20">
          SOLAR ASSISTANT ONLINE
        </div>
      </div>

      {/* Floating Action Button with Pulse Animation */}
      <div className="fixed bottom-8 right-8 z-[60]">
        {/* Pulse Effect Layers */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-solar-gold rounded-full blur-md"
        />
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.15, 0, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 bg-solar-gold rounded-full blur-lg"
        />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const chat = window.n8nChat;
            if (chat) {
              if (typeof chat.toggle === 'function') {
                chat.toggle();
              } else if (typeof chat.open === 'function') {
                chat.open();
              }
            }
          }}
          className="relative w-14 h-14 bg-solar-gold rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(242,153,74,0.4)] cursor-pointer group hover:bg-white transition-colors"
          aria-label="Open Chat"
        >
          <MessageCircle className="text-solar-dark w-7 h-7 group-hover:text-solar-gold transition-colors" />
        </motion.button>
      </div>
    </div>
  );
}

