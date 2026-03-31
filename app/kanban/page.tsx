"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Plus, Clock, Link as LinkIcon, Verified, MessageCircle, User, Briefcase } from "lucide-react";

type ViewType = "projects" | "leads";

export default function KanbanPage() {
  const [view, setView] = useState<ViewType>("projects");
  const scrollRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const ele = scrollRef.current;
    if (!ele) return;
    
    let isDown = true;
    let startX = e.pageX - ele.offsetLeft;
    let scrollLeft = ele.scrollLeft;
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ele.offsetLeft;
      const walk = (x - startX) * 2; 
      ele.scrollLeft = scrollLeft - walk;
    };
    
    const onMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const projectColumns = [
    { id: "backlog", name: "Backlog", count: 4, color: "bg-slate-500" },
    { id: "active", name: "Ativo", count: 2, color: "bg-primary" },
    { id: "review", name: "Revisão", count: 1, color: "bg-secondary" },
    { id: "done", name: "Finalizado", count: 7, color: "bg-green-500" },
  ];

  const leadColumns = [
    { id: "new", name: "Novos", count: 3, color: "bg-cyan-500" },
    { id: "contacted", name: "Contatados", count: 5, color: "bg-primary" },
    { id: "negotiating", name: "Negociando", count: 2, color: "bg-secondary" },
    { id: "closed", name: "Fechados", count: 12, color: "bg-white" },
  ];

  const currentColumns = view === "projects" ? projectColumns : leadColumns;

  return (
    <main className="pt-24 pb-32 px-6 w-full max-w-[1400px] mx-auto overflow-hidden">
      {/* Dashboard Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] text-primary tracking-[0.3em] font-label font-bold uppercase block mb-1">CRM Dashboard</span>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-on-background">Workspace Kanban</h2>
          
          <div className="mt-4 flex bg-surface-container-high/40 p-1 rounded-2xl border border-white/5 w-fit">
            <button 
              onClick={() => setView("projects")}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${view === "projects" ? "bg-primary text-black shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              Projetos
            </button>
            <button 
              onClick={() => setView("leads")}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${view === "leads" ? "bg-secondary text-white shadow-lg" : "text-zinc-500 hover:text-white"}`}
            >
              Leads (CRM)
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-2.5 bg-surface-container-highest/50 glass-panel border border-white/5 rounded-xl hover:scale-105 active:scale-95 transition-all">
            <Settings2 size={20} className="text-on-surface-variant" />
          </button>
          <button className="p-3 bg-gradient-to-tr from-primary to-primary-container text-on-primary rounded-xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-bold text-sm">
            <Plus size={20} />
            {view === "projects" ? "Novo Projeto" : "Novo Lead"}
          </button>
        </div>
      </div>

      {/* Kanban Board with Inertia */}
      <div 
        ref={scrollRef}
        onMouseDown={onDragStart}
        className="inertia-scroll custom-scrollbar flex gap-6 pb-10"
      >
        {currentColumns.map((col) => (
          <div key={col.id} className="min-w-[320px] max-w-[320px] flex flex-col gap-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${col.color}`}></span>
                <h3 className="font-headline font-bold text-sm tracking-wider uppercase text-on-surface-variant">{col.name}</h3>
                <span className="text-[10px] font-label bg-white/5 px-2 py-0.5 rounded-full text-zinc-500">{col.count}</span>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {col.id === "new" && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }} 
                  className="glass-panel border-l-2 border-cyan-500 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-pointer hover:border-cyan-500/50"
                >
                  <div className="flex justify-between">
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded uppercase tracking-widest">Enterprise</span>
                    <div className="w-6 h-6 rounded-lg bg-surface-container-highest flex items-center justify-center">
                       <User size={14} className="text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-base leading-tight mb-1">Beatriz Silva</h4>
                    <p className="text-on-surface-variant text-xs line-clamp-2 leading-relaxed">Interesse em redesign completo de plataforma SaaS.</p>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2"><Clock size={12} className="text-zinc-500" /><span className="text-[10px] text-zinc-500">2h atrás</span></div>
                    <button className="p-1 px-2 text-[9px] font-bold bg-primary/20 text-primary rounded">CONTATAR</button>
                  </div>
                </motion.div>
              )}

              {col.id === "active" && view === "projects" && (
                <motion.div 
                   initial={{ opacity: 0, y: 20 }} 
                   animate={{ opacity: 1, y: 0 }}
                   whileHover={{ scale: 1.02 }} 
                   className="glass-panel border-l-2 border-primary rounded-2xl p-5 flex flex-col gap-4 border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="flex justify-between">
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded uppercase tracking-widest">Interface Design</span>
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFy4_pP22I_Wv2S_yQ-h7r3uYq9I40N7X68X4vFzZ_Y0Uu3bJ3nC4M9Y_X_R4Y_V0W8U" alt="Logo" />
                    </div>
                  </div>
                  <h4 className="font-headline font-bold text-base leading-tight">Nexus Alpha Dashboard</h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] font-label font-bold uppercase text-on-surface-variant">
                      <span>Desenvolvimento</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="progress-fill h-full bg-primary" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Dummy cards to fill columns */}
              <div className="h-24 glass-panel rounded-2xl border-dashed border-white/5 flex items-center justify-center text-zinc-700 text-[10px] font-label uppercase">
                 Card Vazio
              </div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </main>
  );
}
