"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { User, MessageCircle, Phone, Mail, MoreHorizontal, Filter, Search } from "lucide-react";

export default function LeadsPage() {
  const leads = [
    { name: "Beatriz Silva", tag: "SaaS Enterprise", status: "Novo", color: "text-primary" },
    { name: "Marcos Viana", tag: "E-commerce UI", status: "Em Contato", color: "text-secondary" },
    { name: "Clara Duarte", tag: "Brand Identity", status: "Qualificado", color: "text-cyan-400" },
    { name: "Rodrigo Melo", tag: "Mobile Design", status: "Novo", color: "text-primary" },
  ];

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-headline text-white font-bold text-4xl tracking-tight uppercase">Leads</h2>
          <p className="text-zinc-500 font-body">Prospecção e Gestão de Contatos Recentes</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input type="text" placeholder="Buscar..." className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/30 transition-all font-body text-sm" />
          </div>
          <button className="bg-white/5 border border-white/5 p-3 rounded-2xl text-zinc-400 hover:text-white transition-all">
            <Filter size={20} />
          </button>
        </div>
      </section>

      <GlassCard className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-[10px] font-label uppercase tracking-widest text-zinc-500">
                <th className="px-8 py-6">Lead / Ativo</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((lead, i) => (
                <tr key={i} className="group hover:bg-white/5 transition-all cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-secondary">
                        <User size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{lead.name}</div>
                        <div className="text-[10px] text-zinc-500 font-label uppercase tracking-wider">{lead.tag}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border border-current/20 bg-current/5 uppercase tracking-widest ${lead.color}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-primary hover:bg-primary/10 transition-all">
                        <MessageCircle size={16} />
                      </button>
                      <button className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white transition-all">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="w-full p-4 text-[10px] font-label font-bold text-zinc-600 hover:text-primary transition-colors tracking-widest uppercase active:scale-95 border-t border-white/5">
          CARREGAR BASE COMPLETA
        </button>
      </GlassCard>
    </main>
  );
}
