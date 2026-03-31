"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Folder, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { id: 'nexus', name: 'Sistema Nexus Alpha', status: '75%', color: 'text-primary' },
    { id: 'kayque-brito', name: 'Interface Kayque Brito OS', status: '32%', color: 'text-secondary' },
    { id: 'helios', name: 'Dashboard Helios', status: '90%', color: 'text-cyan-400' },
  ];

  return (
    <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-8">
      <section className="flex justify-between items-end">
        <div>
          <h2 className="font-headline text-white font-bold text-4xl tracking-tight">Projetos</h2>
          <p className="text-zinc-500 font-body">Gerencie seus fluxos e ativos digitais</p>
        </div>
        <Link href="/new" className="bg-primary text-on-primary p-3 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
          <Plus size={24} />
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <GlassCard className="group hover:border-primary/40 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl bg-white/5 ${project.color}`}>
                  <Folder size={24} />
                </div>
                <button className="text-zinc-500 hover:text-white">
                  <MoreVertical size={20} />
                </button>
              </div>
              <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full bg-current ${project.color}`} style={{ width: project.status }}></div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-label uppercase tracking-widest text-zinc-500">
                  <span>Progresso: {project.status}</span>
                  <span className={project.color}>Ativo</span>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </section>
    </main>
  );
}
