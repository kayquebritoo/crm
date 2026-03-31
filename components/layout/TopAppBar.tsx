import { Bell, Search } from "lucide-react";
import Link from "next/link";

export function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,210,255,0.08)] flex justify-between items-center px-6 py-6">
      <div className="flex items-center gap-3">
        <Link className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 active:scale-95 transition-transform" href="/profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Kayque Brito" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogpv72LrwEbQ4-1Og8VCfNo3g6i8zyYRFQc2l_HxL7BPQNEm71vkks0WUQPrM84hSOg8unfg2XK-ZWECtBe_fmDcmCLmcJl6U75qrE2T_T_U6zSk9uTvn997pVuhwS44vPY4gDQhWYmRj0iHO_wc6D8oZURqSgQrQwrMHJXJGDy0NgzyE5q7nTeD42k-uQTYIbSmXis1VosATUYpONbqMwpPGFHFrHSnTbmM9L3as9iyNIPu1GvHBo5S7tzPdzImGWfgSOk9nvg" />
        </Link>
        <span className="text-on-surface-variant font-label text-[10px] tracking-widest hidden md:block">PAINEL ADMIN</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <img src="/logo.webp" alt="Logo" className="w-16 h-16 object-contain" />
      </div>
      <div className="flex items-center gap-4">
        <button className="active:scale-95 transition-transform duration-200 text-zinc-400 hover:text-cyan-300">
          <Bell size={20} />
        </button>
        <button className="active:scale-95 transition-transform duration-200 text-zinc-400 hover:text-cyan-300">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
