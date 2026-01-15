"use client";

import {React,useState} from "react";
import Link from "next/link";
import DownloadButton from "./smallcom/DownloadButton";
import ShinyText from "./animations/Textshine";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isopen, setisopen] = useState(false)
  const navlinks = ['Home', 'About', 'Contact']
  return (
 
<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 transition-all">
  

  <span className="text-xl md:text-2xl lg:text-[2rem] font-heading shrink-0 text-white">
    Saad Mirza
  </span>

 
  <ul className="hidden md:flex mx-auto font-body text-[0.9rem] md:text-[1rem] lg:text-[1rem] 2xl:text-2xl 2xl:py-4 gap-2  lg:gap-8 items-center
                 bg-black/20 backdrop-blur-xl border border-white/10 p-1.5 rounded-full transition-all shadow-2xl">


{navlinks.map((item) => {
 
  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
  
  const isActive = pathname === href;

  return (
    <li key={item} className="group relative">
      <Link 
        className={`relative px-4 lg:px-6 2xl:px-15 py-2 flex items-center justify-center rounded-full transition-all duration-500 
                   ${isActive  ? 'bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'hover:bg-white/5'} 
                   active:scale-95`} 
        href={href}
      >
        <ShinyText 
          speed={3} 
          delay={1} 
          color={isActive ? "#FFFFFF" : "#A1A1AA"} 
          shineColor="#FFFFFF" 
          spread={120} 
          className="font-medium tracking-tight group-hover:text-white transition-colors duration-300" 
          text={item} 
        />

        <div className={`absolute inset-0 rounded-full transition-opacity duration-500 pointer-events-none 
                        bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]
                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
        />

 
        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                         transition-all duration-500 ease-[cubic-bezier(0.17,0.67,0.83,0.67)] 
                         shadow-[0_0_12px_rgba(99,102,241,0.8)]
                         ${isActive ? 'w-2/3 opacity-100' : 'w-0 opacity-0 group-hover:w-2/3 group-hover:opacity-100'}`} 
        />
      </Link>
    </li>
  );
})}


  </ul>
  {/* for mobile navbar view */}
<button 
  onClick={() => setisopen(!isopen)}
  className="md:hidden flex flex-col gap-1.5 z-50 p-2" 
  aria-label="Toggle Menu"
>
{/* hamburgir */}
  <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? 'rotate-45 translate-y-2' : ''}`} />
  <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? 'opacity-0' : ''}`} />
  <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? '-rotate-45 -translate-y-2' : ''}`} />
</button>

{/* in mobile screen after click on hamburger it show this  */}
<div className={`fixed inset-0 bg-neutral-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${isopen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
  

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)] pointer-events-none" />

  <ul className="relative z-50 flex flex-col gap-10 text-center">
    {navlinks.map((item, index) => {
 
   
  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
  
      console.log(href)
      return (
        <li 
          key={index} 
          onClick={() => setisopen(false)}
          className={`transition-all duration-500 delay-[${index * 100}ms] ${isopen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <Link 
            href={href}
            className="text-4xl font-heading text-white font-semibold tracking-tighter hover:text-zinc-400 active:scale-90 transition-all duration-300 block px-10 py-2"
          >
            {item}
          </Link>
        </li>
      );
    })}
  </ul>
  
  {/* Simple Footer inside mobile menu */}
  <div className={`absolute bottom-10 transition-opacity duration-700 ${isopen ? 'opacity-30' : 'opacity-0'}`}>
    <p className="text-[10px] uppercase tracking-[0.3em] text-white">Saad Mirza · 2026</p>
  </div>
</div>

   
  <div className="flex items-center gap-4">
    <DownloadButton />
    
   
  </div>
</nav>

  );
}



