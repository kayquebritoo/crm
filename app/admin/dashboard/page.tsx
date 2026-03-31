"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const data = [
  { name: "Jan", receita: 4000, leads: 2400 },
  { name: "Fev", receita: 3000, leads: 1398 },
  { name: "Mar", receita: 2000, leads: 9800 },
  { name: "Abr", receita: 2780, leads: 3908 },
  { name: "Mai", receita: 1890, leads: 4800 },
  { name: "Jun", receita: 2390, leads: 3800 },
  { name: "Jul", receita: 3490, leads: 4300 },
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Skeleton className="h-32 rounded-3xl" />
          <Skeleton className="h-32 rounded-3xl" />
          <Skeleton className="h-32 rounded-3xl" />
          <Skeleton className="h-32 rounded-3xl" />
        </div>
        <Skeleton className="h-[400px] rounded-3xl" />
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-10">
      {/* Welcome & Stats Summary */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="font-headline text-primary font-bold tracking-tight text-3xl md:text-5xl">
            Painel Executivo
          </h2>
          <p className="text-on-surface-variant font-body text-lg opacity-80 mt-1">Bem-vindo, Admin. Sua operação está 12% acima da meta hoje.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/kanban" className="px-6 py-3 bg-primary text-on-primary rounded-2xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
            Abrir Kanban <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <DollarSign size={24} className="text-primary" />
            </div>
            <span className="text-xs text-primary-container font-bold">+R$ 12k</span>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-zinc-500">Receita Mensal</span>
          <div className="text-3xl font-headline font-bold text-white mt-1">R$ 142.300</div>
        </GlassCard>

        <GlassCard delay={0.1} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary/10 rounded-2xl">
              <Users size={24} className="text-secondary" />
            </div>
            <span className="text-xs text-secondary-container font-bold">+8 novos</span>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-zinc-500">Leads Ativos</span>
          <div className="text-3xl font-headline font-bold text-white mt-1">42</div>
        </GlassCard>

        <GlassCard delay={0.2} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-cyan-400/10 rounded-2xl">
              <Briefcase size={24} className="text-cyan-400" />
            </div>
            <span className="text-xs text-cyan-300 font-bold">95% on-time</span>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-zinc-500">Projetos em Curso</span>
          <div className="text-3xl font-headline font-bold text-white mt-1">18</div>
        </GlassCard>

        <GlassCard delay={0.3} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <TrendingUp size={24} className="text-primary" />
            </div>
            <span className="text-xs text-primary-container font-bold">High ROAS</span>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-zinc-500">Conversão Leads</span>
          <div className="text-3xl font-headline font-bold text-white mt-1">24.5%</div>
        </GlassCard>
      </section>

      {/* Main Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <GlassCard delay={0.4} className="lg:col-span-2 min-h-[450px] p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
             <div>
               <h3 className="text-xl font-headline font-bold text-white">Fluxo de Caixa & Conversão</h3>
               <p className="text-zinc-500 text-sm">Visualização semestral de performance </p>
             </div>
             <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs text-zinc-400 font-label">Receita</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-xs text-zinc-400 font-label">Leads</span>
                </div>
             </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#71717a', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(18, 18, 18, 0.9)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }} 
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="receita" 
                  stroke="var(--primary)" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorRec)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="leads" 
                  stroke="var(--secondary)" 
                  strokeWidth={3} 
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Small Column with activity */}
        <section className="space-y-6">
           <GlassCard delay={0.5} className="p-8">
             <h3 className="text-xl font-headline font-bold text-white mb-6">Status Projetos</h3>
             <div className="space-y-6">
               {[
                 { label: "Em Desenvolvimento", val: 65, color: "bg-primary" },
                 { label: "Em Revisão", val: 20, color: "bg-secondary" },
                 { label: "Pausados", val: 15, color: "bg-zinc-700" },
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                   <div className="flex justify-between text-xs font-label uppercase text-zinc-400">
                     <span>{item.label}</span>
                     <span>{item.val}%</span>
                   </div>
                   <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                     <div className={`${item.color} h-full`} style={{ width: `${item.val}%` }}></div>
                   </div>
                 </div>
               ))}
             </div>
             
             <div className="mt-10 p-4 bg-primary/5 rounded-2xl border border-primary/10">
               <div className="flex items-center gap-3 mb-2">
                 <Briefcase size={16} className="text-primary" />
                 <span className="text-xs font-bold text-white">Alerta de Entrega</span>
               </div>
               <p className="text-[10px] text-zinc-400 leading-relaxed">
                 O projeto <strong>Kayque Brito OS</strong> está a 48h do deadline. Considere alocar mais recursos.
               </p>
             </div>
           </GlassCard>
        </section>
      </section>

      {/* Recents list */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard delay={0.6} className="p-6">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-headline font-bold text-white">Leads para Follow-up</h3>
             <Link href="/admin/leads" className="text-xs text-primary font-bold uppercase hover:underline">Ver CRM</Link>
           </div>
           <div className="space-y-4">
             {[
               { name: "Tesla inc", v: "R$ 45.000,00", badge: "Alta Prioridade" },
               { name: "SpaceX", v: "R$ 120.000,00", badge: "Negociação" },
               { name: "Meta Labs", v: "R$ 15.000,00", badge: "Novo" },
             ].map((lead, i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/30 transition-all cursor-pointer">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                     {lead.name[0]}
                   </div>
                   <div>
                     <div className="text-sm font-bold text-white">{lead.name}</div>
                     <div className="text-[10px] text-zinc-500 font-label">{lead.v}</div>
                   </div>
                 </div>
                 <div className="text-[9px] font-bold px-2 py-1 bg-white/5 text-zinc-400 rounded uppercase">
                   {lead.badge}
                 </div>
               </div>
             ))}
           </div>
        </GlassCard>

        <Link href="/admin/kanban">
          <GlassCard delay={0.7} className="p-0 overflow-hidden h-full group">
            <div className="h-full w-full relative">
               <img 
                 className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFy4_pP22I_Wv2S_yQ-h7r3uYq9I40N7X68X4vFzZ_Y0Uu3bJ3nC4M9Y_X_R4Y_V0W8U" 
                 alt="Kanban Preview" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-10 flex flex-col justify-end">
                 <h3 className="text-3xl font-headline font-bold text-white mb-2">Kanban Alpha</h3>
                 <p className="text-zinc-400 text-sm max-w-xs mb-6">Gerencie o workflow dos seus projetos e leads em tempo real com drag & drop.</p>
                 <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                   Acessar Workspace <ArrowUpRight size={18} />
                 </div>
               </div>
            </div>
          </GlassCard>
        </Link>
      </section>
    </main>
  );
}
