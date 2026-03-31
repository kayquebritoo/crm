"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft, Save, Plus, Loader2, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", type: "Design", color: "primary" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCreate = () => {
    if (!formData.name) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/projects");
      }, 1500);
    }, 2000);
  };

  return (
    <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-3 rounded-2xl bg-surface-container-high text-zinc-400 hover:text-white transition-all scale-90 active:scale-75">
          <ArrowLeft size={20} />
        </Link>
        <h2 className="font-headline text-white font-bold text-3xl tracking-tight">Novo Projeto</h2>
      </div>

      <GlassCard className="p-8 space-y-8 backdrop-blur-3xl shadow-2xl shadow-primary/5">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-label uppercase tracking-widest text-zinc-500 ml-1">Nome do Ativo</label>
            <input 
              type="text" 
              placeholder="Digite o nome do sistema ou ativo..." 
              className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all font-body text-lg disabled:opacity-50"
              value={formData.name}
              disabled={isSubmitting || isSuccess}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-label uppercase tracking-widest text-zinc-500 ml-1">Especialidade</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Design', 'Core Dev', 'Marketing', 'App'].map((type) => (
                <button 
                  key={type}
                  disabled={isSubmitting || isSuccess}
                  onClick={() => setFormData({...formData, type})}
                  className={`p-3 rounded-2xl text-xs font-label uppercase tracking-widest border transition-all ${formData.type === type ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20 text-primary' : 'bg-transparent border-white/5 text-zinc-500'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/5"></div>

          <button 
            onClick={handleCreate}
            disabled={!formData.name || isSubmitting || isSuccess}
            className={`w-full p-5 rounded-3xl flex items-center justify-center gap-3 font-headline font-bold text-lg text-on-primary shadow-2xl transition-all ${
              isSuccess 
              ? 'bg-green-500 shadow-green-500/20' 
              : 'bg-gradient-to-br from-primary to-primary-container shadow-primary/30 hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-50'
            }`}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : (isSuccess ? <Check /> : <Plus size={24} />)}
            {isSubmitting ? 'ENVIANDO...' : (isSuccess ? 'ATIVO CRIADO!' : 'CONSTRUIR ATIVO')}
          </button>
        </div>
      </GlassCard>
    </main>
  );
}
