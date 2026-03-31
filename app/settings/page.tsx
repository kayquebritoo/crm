"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Settings, Shield, Bell, Moon, Database, ChevronRight, Github, Heart } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState([
    { id: '2fa', icon: Shield, label: "Autenticação em Duas Etapas", status: true, color: "text-secondary" },
    { id: 'mode', icon: Moon, label: "Modo de Visualização", status: true, color: "text-primary" },
    { id: 'notifs', icon: Bell, label: "Alertas Móveis", status: true, color: "text-cyan-400" },
    { id: 'sync', icon: Database, label: "Sincronização Cloud-Edge", status: true, color: "text-green-400" },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(s => s.id === id ? { ...s, status: !s.status } : s));
  };

  return (
    <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto space-y-10">
      <header className="space-y-2">
        <h2 className="font-headline text-white font-bold text-4xl tracking-tight">Ajustes</h2>
        <p className="text-zinc-500 font-body">Refine a sua experiência no Kayque Brito OS</p>
      </header>

      <section className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-[10px] font-label uppercase tracking-widest text-zinc-500 ml-4 font-bold">Preferências do Sistema</h3>
          <GlassCard className="p-2 gap-1">
            {settings.map((item, j) => (
              <button 
                key={j} 
                onClick={() => toggleSetting(item.id)}
                className="w-full flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all text-left group"
              >
                <div className="flex items-center gap-4">
                  <item.icon className={item.color} size={20} />
                  <span className="font-headline font-bold text-white uppercase text-sm tracking-widest">{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-label uppercase tracking-widest transition-colors ${item.status ? 'text-primary' : 'text-zinc-500'}`}>
                    {item.status ? 'Ativado' : 'Desativado'}
                  </span>
                  <div className={`w-10 h-5 rounded-full relative transition-all ${item.status ? 'bg-primary/20' : 'bg-white/5'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${item.status ? 'right-1 bg-primary' : 'left-1 bg-zinc-600'}`}></div>
                  </div>
                </div>
              </button>
            ))}
          </GlassCard>
        </div>
      </section>

      <footer className="pt-10 flex flex-col items-center justify-center space-y-6">
        <div className="flex gap-6">
          <Github className="text-zinc-600 hover:text-white transition-all cursor-pointer" size={24} />
          <Heart className="text-zinc-600 hover:text-primary transition-all cursor-pointer" size={24} />
        </div>
        <div className="text-[10px] font-label uppercase tracking-widest text-zinc-700">
          Versão 2.4.8 | Build Alpha-75
        </div>
      </footer>
    </main>
  );
}
