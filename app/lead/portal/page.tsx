"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { User, MessageCircle, FileText, CheckCircle, Clock } from "lucide-react";

export default function LeadPortal() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <User size={48} className="text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-headline font-bold text-white">Olá, Beatriz Silva</h1>
          <p className="text-zinc-400">Status da sua proposta comercial</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 text-center border-b-2 border-primary">
          <div className="text-xs font-label text-zinc-500 uppercase tracking-widest mb-1">Status Atual</div>
          <div className="text-xl font-bold text-white uppercase">Negociação</div>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-xs font-label text-zinc-500 uppercase tracking-widest mb-1">Duração</div>
          <div className="text-xl font-bold text-white uppercase">4 Dias</div>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-xs font-label text-zinc-500 uppercase tracking-widest mb-1">Analista</div>
          <div className="text-xl font-bold text-white uppercase">Kayque B.</div>
        </GlassCard>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-headline font-bold text-white">Próximos Passos</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-6 p-6 glass-panel rounded-3xl border border-white/5 opacity-100">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black">
              <CheckCircle size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white">Entrevista de Alinhamento</h4>
              <p className="text-sm text-zinc-500">Realizada com sucesso dia 24/03.</p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 glass-panel rounded-3xl border border-primary/30 bg-primary/5 animate-pulse-subtle">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Clock size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white">Aprovação da Proposta</h4>
              <p className="text-sm text-zinc-500">Aguardando seu aceite no link enviado por e-mail.</p>
              <button className="mt-4 px-6 py-2 bg-primary text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">Ver Proposta PDF</button>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 glass-panel rounded-3xl border border-white/5 opacity-50">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-600">
              <FileText size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white">Onboarding do Projeto</h4>
              <p className="text-sm text-zinc-500">Liberação do acesso ao workspace oficial.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-10 flex justify-center gap-6">
        <button className="p-4 bg-surface-container-highest rounded-2xl text-zinc-400 hover:text-primary transition-all">
          <MessageCircle size={24} />
        </button>
        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all uppercase text-xs tracking-widest">
          Falar com Kayque
        </button>
      </footer>
    </main>
  );
}
