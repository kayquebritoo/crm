"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft, Calendar, User, Clock, CheckCircle2, ChevronRight, Activity, Zap, Layers } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const { id } = useParams();

  // Simulated project data (would fetch from local storage or DB in a real app)
  const projectInfo: Record<string, any> = {
    'nexus': { name: 'Sistema Nexus Alpha', type: 'Design', progress: 75, color: 'primary' },
    'kayque-brito': { name: 'Interface Kayque Brito OS', type: 'Core Dev', progress: 32, color: 'secondary' },
    'helios': { name: 'Dashboard Helios', type: 'App', progress: 90, color: 'cyan-400' },
  };

  const project = projectInfo[id as string] || { name: 'Projeto Indefinido', type: 'Geral', progress: 0, color: 'zinc-500' };

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-10">
      <header className="flex items-center gap-4">
        <Link href="/projects" className="p-3 rounded-2xl bg-surface-container-high text-zinc-400 hover:text-white transition-all scale-90 active:scale-75">
          <ArrowLeft size={20} />
        </Link>
        <div className="space-y-1">
          <h2 className="font-headline text-white font-bold text-3xl tracking-tight">{project.name}</h2>
          <div className="flex items-center gap-3 text-[10px] font-label uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> Aberto em Set 2024</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
            <span className={`text-${project.color}`}>{project.type}</span>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline font-bold text-xl text-white">Status do Desenvolvimento</h3>
              <div className="flex items-center gap-2 text-primary">
                <Activity size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Ativo Agora</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>Progresso Geral</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-${project.color} shadow-[0_0_15px_rgba(0,195,255,0.3)] transition-all duration-1000`} style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {[
                  { label: 'Milestones', value: '4/6', icon: CheckCircle2 },
                  { label: 'Velocidade', value: '9.2', icon: Zap },
                  { label: 'Camadas', value: '142', icon: Layers },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-label uppercase tracking-widest text-zinc-500">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                    </div>
                    <stat.icon size={20} className="text-zinc-600" />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <section className="space-y-4">
            <h3 className="font-headline font-bold text-xl text-white ml-2">Timeline Recente</h3>
            <div className="space-y-3">
              {[
                { time: '2h atrás', msg: 'Ajuste fino no blur das camadas superiores', user: 'KB' },
                { time: 'Ontem', msg: 'Otimização de rotas e prevenção de 404', user: 'AI' },
                { time: '3 dias atrás', msg: 'Setup inicial do ambiente Next.js', user: 'KB' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-default">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                    {item.user}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/90">{item.msg}</p>
                    <p className="text-[10px] text-zinc-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <GlassCard className="p-6 space-y-6">
            <h4 className="font-headline font-bold text-sm text-white uppercase tracking-widest">Sócio Arquiteto</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogpv72LrwEbQ4-1Og8VCfNo3g6i8zyYRFQc2l_HxL7BPQNEm71vkks0WUQPrM84hSOg8unfg2XK-ZWECtBe_fmDcmCLmcJl6U75qrE2T_T_U6zSk9uTvn997pVuhwS44vPY4gDQhWYmRj0iHO_wc6D8oZURqSgQrQwrMHJXJGDy0NgzyE5q7nTeD42k-uQTYIbSmXis1VosATUYpONbqMwpPGFHFrHSnTbmM9L3as9iyNIPu1GvHBo5S7tzPdzImGWfgSOk9nvg" alt="Kayque Brito" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Kayque Brito</p>
                <p className="text-[10px] text-primary uppercase tracking-widest">Lead Designer</p>
              </div>
            </div>
            <button className="w-full py-4 rounded-2xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <User size={14} /> VER PERFIL COMPLETO
            </button>
          </GlassCard>

          <button className="w-full p-6 rounded-3xl bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-all font-headline font-bold text-lg uppercase tracking-tighter flex items-center justify-between group">
            <span>Quadro Kanban</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </aside>
      </section>
    </main>
  );
}
