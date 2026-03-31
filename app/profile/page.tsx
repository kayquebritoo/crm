"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { User, LogOut, ChevronRight, Mail, Phone, MapPin, Edit3, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState({
    name: "Kayque Brito",
    role: "Sócio Fundador & Arquiteto Software",
    email: "contato@kayquebrito.com.br",
    phone: "+55 11 98877-6655",
    location: "São Paulo, Brasil"
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
    }, 1500);
  };

  return (
    <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto space-y-10">
      <section className="flex flex-col items-center text-center space-y-4 relative">
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="absolute top-0 right-0 p-3 rounded-2xl bg-white/5 border border-white/10 text-primary hover:bg-primary/10 transition-all active:scale-95 z-10"
        >
          {isSaving ? <Loader2 className="animate-spin" size={20} /> : (isEditing ? <Check size={20} /> : <Edit3 size={20} />)}
        </button>

        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 p-2 shadow-2xl shadow-primary/10">
          <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-high border border-white/10 flex items-center justify-center">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogpv72LrwEbQ4-1Og8VCfNo3g6i8zyYRFQc2l_HxL7BPQNEm71vkks0WUQPrM84hSOg8unfg2XK-ZWECtBe_fmDcmCLmcJl6U75qrE2T_T_U6zSk9uTvn997pVuhwS44vPY4gDQhWYmRj0iHO_wc6D8oZURqSgQrQwrMHJXJGDy0NgzyE5q7nTeD42k-uQTYIbSmXis1VosATUYpONbqMwpPGFHFrHSnTbmM9L3as9iyNIPu1GvHBo5S7tzPdzImGWfgSOk9nvg" alt="Kayque Brito" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="space-y-2 w-full max-w-sm">
          {isEditing ? (
            <input 
              className="bg-black/20 border border-primary/30 rounded-xl px-4 py-2 text-white text-center font-headline text-2xl font-bold w-full outline-none"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
            />
          ) : (
            <h2 className="font-headline text-4xl font-bold text-white tracking-widest uppercase">{profile.name}</h2>
          )}
          
          {isEditing ? (
            <input 
              className="bg-black/10 border border-white/10 rounded-lg px-3 py-1 text-primary text-center font-label text-[10px] uppercase tracking-[0.2em] w-full outline-none"
              value={profile.role}
              onChange={(e) => setProfile({...profile, role: e.target.value})}
            />
          ) : (
            <p className="text-primary font-label text-xs uppercase tracking-[0.2em] mt-1">{profile.role}</p>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-8 space-y-6">
          <h3 className="text-[10px] font-label uppercase tracking-widest text-zinc-500">Informações de Contato</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group p-3 rounded-2xl transition-all">
              <Mail className="text-secondary shrink-0" size={20} />
              {isEditing ? (
                <input className="bg-transparent border-b border-white/10 text-white/80 font-body w-full outline-none" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} />
              ) : (
                <span className="text-white/80 font-body">{profile.email}</span>
              )}
            </div>
            <div className="flex items-center gap-4 group p-3 rounded-2xl transition-all">
              <Phone className="text-secondary shrink-0" size={20} />
              {isEditing ? (
                <input className="bg-transparent border-b border-white/10 text-white/80 font-body w-full outline-none" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} />
              ) : (
                <span className="text-white/80 font-body">{profile.phone}</span>
              )}
            </div>
            <div className="flex items-center gap-4 group p-3 rounded-2xl transition-all">
              <MapPin className="text-secondary shrink-0" size={20} />
              {isEditing ? (
                <input className="bg-transparent border-b border-white/10 text-white/80 font-body w-full outline-none" value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})} />
              ) : (
                <span className="text-white/80 font-body">{profile.location}</span>
              )}
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <button className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center justify-between hover:bg-white/10 hover:border-primary/30 transition-all group">
            <span className="font-headline font-bold text-white uppercase text-sm">Minhas Metas</span>
            <ChevronRight className="text-zinc-600 group-hover:text-primary" size={20} />
          </button>
          <button className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl flex items-center justify-between hover:bg-white/10 hover:border-secondary/30 transition-all group">
            <span className="font-headline font-bold text-white uppercase text-sm">Histórico de Performance</span>
            <ChevronRight className="text-zinc-600 group-hover:text-secondary" size={20} />
          </button>
          <button className="w-full bg-white/5 border border-error/10 p-5 rounded-3xl flex items-center justify-between hover:bg-error/10 hover:border-error/30 transition-all group">
            <span className="font-headline font-bold text-error uppercase text-sm">Desconectar</span>
            <LogOut className="text-error" size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
