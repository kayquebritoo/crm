"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { ArrowUpRight, Folder, RefreshCcw, User, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esqueleto artificial para demonstrar velocidade de carregamento PWA/Offline-First
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-10">
        <section className="space-y-4">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-6 w-48" />
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Skeleton className="md:col-span-2 h-[220px] rounded-3xl" />
          <Skeleton className="h-[220px] rounded-3xl" />
          <Skeleton className="h-[220px] rounded-3xl" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2 space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-64 rounded-3xl" />
              <Skeleton className="h-64 rounded-3xl" />
            </div>
          </section>
          <section className="space-y-6">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-[400px] rounded-3xl" />
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-10">
      <section className="space-y-2">
        <h2 className="font-headline text-primary font-bold tracking-tight text-4xl md:text-5xl">
          Olá, Kayque.
        </h2>
        <p className="text-on-surface-variant font-body text-lg opacity-80">Aqui está o pulso das suas operações hoje.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="md:col-span-2 min-h-[220px] cursor-default" delay={0.1}>
          <div className="flex justify-between items-start">
            <span className="label-sm font-label uppercase tracking-[0.05em] text-primary/70">Receita Total Anual</span>
            <RefreshCcw className="text-primary" />
          </div>
          <div>
            <div className="font-headline text-4xl font-bold tracking-tighter text-white">R$ 482.950,00</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-primary-container text-sm font-medium">↑ 12.5%</span>
              <span className="text-zinc-500 text-sm">em relação ao mês anterior</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard delay={0.2} className="cursor-default">
          <span className="label-sm font-label uppercase tracking-[0.05em] text-on-surface-variant">Projetos Ativos</span>
          <div>
            <div className="font-headline text-5xl font-bold tracking-tighter text-cyan-400">14</div>
            <p className="text-zinc-500 text-xs mt-1">4 em fase de entrega</p>
          </div>
        </GlassCard>

        <GlassCard delay={0.3} className="cursor-default">
          <span className="label-sm font-label uppercase tracking-[0.05em] text-on-surface-variant">Finalizados</span>
          <div>
            <div className="font-headline text-5xl font-bold tracking-tighter text-secondary">07</div>
            <p className="text-zinc-500 text-xs mt-1">Meta mensal: 10</p>
          </div>
        </GlassCard>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-headline text-2xl font-bold tracking-tight text-white">Projetos em Destaque</h3>
            <Link href="/projects" className="text-primary text-sm font-label hover:underline decoration-primary/30 uppercase">Ver Todos</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/projects/nexus">
              <GlassCard delay={0.4} className="p-0 overflow-hidden cursor-pointer h-full border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="h-40 bg-surface-container-lowest relative overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Tech Dashboard" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaeKhdgvSxOudcVLvnK-wztpbSc35AV1mtaag-5EQNEXyH6CUDm40NTthifNZjlS9-IlAtCPG9bwqPcoAZGWhtm0eCq09FAE0rHv5AMFvBkKJAP20TVEVyN2uCuQohy6BkVz5LRYANY6e2f44dNQ_xPmKss89xv4Sf8zxe-n9g6LG8ZOjCDm4FEa2odf8GNKdyB9Wciwl5Pz-t283us8Ep888b16BT_ScuYgOMCVbl6_aR3LKCs8ILq9E9x7T_vM4GCZ67gtlp5g" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/10 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-label font-bold border border-primary/20 uppercase">Design</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-headline text-xl font-bold text-white">Sistema Nexus Alpha</h4>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 text-xs">Progresso: 75%</span>
                  </div>
                </div>
              </GlassCard>
            </Link>

            <Link href="/projects/obsidian">
              <GlassCard delay={0.5} className="p-0 overflow-hidden cursor-pointer h-full border border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="h-40 bg-surface-container-lowest relative overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Space Interface" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDryjbzYooeDukS10QBSWTKUJMMU-kz4Ib9UQ7jFMsjFSoaaYF5NkZbJMpMEinvsJ84xZMWo5beHTnnVB9qUV04IHPHZcpgZWCmmWAKSAKGC04RoZFJwB9Bvb-U1WwuzJ9KqPG49mDyaz10AVUdObDBdfYz_jvHYuIfK1W6LafVKv0j-QiYBff75LPvPAjMMLvR_FwbMpxqwLLdpBJpuUxK9Ex0XkYh1tFBPdjdnBOoZQyPCuqVGcaAm5mr4sxiio1VSequ0Srk-w" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary/10 backdrop-blur-md text-secondary px-3 py-1 rounded-full text-[10px] font-label font-bold border border-secondary/20 uppercase">Core Dev</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-headline text-xl font-bold text-white">Interface Kayque Brito OS</h4>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between items-center bg-transparent">
                    <span className="text-zinc-500 text-xs">Progresso: 32%</span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-headline text-2xl font-bold tracking-tight text-white">Leads Recentes</h3>
            <span className="bg-surface-container-high text-zinc-400 px-2 py-0.5 rounded text-[10px] font-label uppercase">Hoje</span>
          </div>
          <GlassCard delay={0.6} className="p-2 gap-2">
            {[ 
              { name: "Beatriz Silva", tag: "SaaS Enterprise", icon: User },
              { name: "Marcos Viana", tag: "E-commerce UI", icon: Folder },
              { name: "Clara Duarte", tag: "Brand Identity", icon: ArrowUpRight },
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center border border-white/5">
                    <lead.icon className="text-secondary" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{lead.name}</div>
                    <div className="text-[10px] text-zinc-500 font-label uppercase">{lead.tag}</div>
                  </div>
                </div>
                <button className="p-2 rounded-xl bg-surface-container-high text-cyan-400 hover:brightness-125 active:scale-90 transition-all">
                  <MessageCircle size={14} />
                </button>
              </div>
            ))}
            <button className="w-full mt-2 p-4 text-[10px] font-label font-bold text-zinc-500 hover:text-primary transition-colors tracking-widest uppercase active:scale-95">
              Carregar mais leads
            </button>
          </GlassCard>
        </section>
      </div>
      
      <section className="pt-20 border-t border-white/5 space-y-6">
        <h3 className="font-headline text-xl font-bold text-white uppercase tracking-widest text-center">Atalhos de Teste para Portais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/lead/portal">
            <GlassCard className="p-6 border border-primary/20 hover:border-primary transition-all text-center group">
              <div className="font-bold text-primary group-hover:scale-110 transition-transform">Portal do LEAD (Prospecto)</div>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase">Acompanhamento de Negociação</p>
            </GlassCard>
          </Link>
          <Link href="/client/portal">
            <GlassCard className="p-6 border border-secondary/20 hover:border-secondary transition-all text-center group">
              <div className="font-bold text-secondary group-hover:scale-110 transition-transform">Portal do CLIENTE (Ativo)</div>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase">Dashboard de Projetos Nexus Alpha</p>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* Contextual FAB */}
      <Link href="/new" className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all z-40">
        <ArrowUpRight className="text-on-primary font-bold" />
      </Link>
    </main>
  );
}
