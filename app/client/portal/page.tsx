"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Folder, Clock, Calendar, CheckSquare, Download, Play, MessageCircle } from "lucide-react";

export default function ClientPortal() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-white tracking-tight">Hub do Cliente</h1>
          <p className="text-zinc-500 font-body text-lg">Olá, Google Labs. Acompanhe o desenvolvimento do projeto Nexus Alpha.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-white font-bold hover:bg-white/10 transition-all">
             Suporte <MessageCircle size={18} className="text-primary" />
           </button>
        </div>
      </header>

      {/* Progress Card */}
      <section>
        <GlassCard className="p-10 border-l-4 border-primary">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                   <Folder size={24} />
                 </div>
                 <h2 className="text-2xl font-headline font-bold text-white uppercase tracking-tighter">Nexus Alpha Dashboard</h2>
              </div>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Estamos na fase final de integração da API e polimento visual. A próxima entrega está prevista para a próxima terça-feira.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-label font-bold uppercase text-zinc-400">
                  <span>Desenvolvimento Geral</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                 <Calendar className="text-primary mb-2" size={20} />
                 <span className="text-[10px] text-zinc-500 font-label uppercase">Deadline</span>
                 <span className="text-lg font-bold text-white">15 Mai</span>
               </div>
               <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                 <CheckSquare className="text-primary mb-2" size={20} />
                 <span className="text-[10px] text-zinc-500 font-label uppercase">Sprints</span>
                 <span className="text-lg font-bold text-white">08/12</span>
               </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <GlassCard className="p-8 space-y-8">
           <h3 className="text-xl font-headline font-bold text-white border-b border-white/5 pb-4">Últimas Atualizações</h3>
           <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              {[
                { title: "Review de Design v2", desc: "Aprovado pelo cliente", date: "Hoje, 10:45", icon: Play },
                { title: "Arquitetura Backend", desc: "Escalabilidade vertical implementada", date: "Ontem", icon: CheckSquare },
                { title: "Setup Inicial Enviado", desc: "Documentação de requisitos", date: "02 Abr", icon: Clock },
              ].map((update, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10">
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm">{update.title}</h4>
                    <p className="text-xs text-zinc-500">{update.desc}</p>
                    <span className="text-[10px] text-zinc-600 font-label uppercase">{update.date}</span>
                  </div>
                </div>
              ))}
           </div>
        </GlassCard>

        <GlassCard className="p-8 space-y-8">
           <h3 className="text-xl font-headline font-bold text-white border-b border-white/5 pb-4">Entregáveis & Assets</h3>
           <div className="space-y-4">
              {[
                { name: "Protótipo Figma High-Fi", size: "Clickable Link" },
                { name: "Manual de Marca", size: "4.5 MB" },
                { name: "Relatório Mensal de Março", size: "1.2 MB" },
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-transparent hover:border-primary/20 cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="p-3 bg-surface-container-highest rounded-xl text-zinc-400">
                        <Download size={20} />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-white">{file.name}</div>
                       <div className="text-xs text-zinc-500">{file.size}</div>
                     </div>
                   </div>
                   <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Baixar</button>
                </div>
              ))}
           </div>
        </GlassCard>
      </section>
    </main>
  );
}
