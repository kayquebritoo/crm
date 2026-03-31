"use client";

import { Home, FolderOpen, PlusCircle, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home, label: "Início" },
    { href: "/kanban", icon: FolderOpen, label: "Kanban" },
    { href: "/new", icon: PlusCircle, label: "Novo", special: true },
    { href: "/lead/portal", icon: User, label: "Lead" },
    { href: "/admin/dashboard", icon: Settings, label: "Admin" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-[#131220]/80 backdrop-blur-2xl flex justify-around items-center px-4 pb-safe z-50 border-t border-white/5 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link 
            key={item.href}
            href={item.href} 
            className={`flex flex-col items-center justify-center transition-all duration-300 ease-out active:scale-90 ${
              isActive 
              ? "text-cyan-400 scale-110 brightness-125" 
              : "text-zinc-500 opacity-70 hover:opacity-100 hover:text-cyan-200"
            }`}
          >
            <Icon size={item.special ? 36 : 24} className={item.special ? "text-primary-container" : ""} />
            <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.05em] mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
