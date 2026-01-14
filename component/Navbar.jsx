"use client";
import React from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import Button from "./smallcom/Buttons"
import DownloadButton from "./smallcom/DownloadButton";
import ShinyText from "./animations/Textshine";

export default function Navbar() {
  return (
 
<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
  
  {/* Logo - Scales smoothly and stays left */}
  <span className="text-xl md:text-2xl lg:text-[2rem] font-heading shrink-0 text-white">
    Saad Mirza
  </span>

 

  {/* Desktop Links - Centered using auto margins instead of fixed ml-85 */}
  <ul className="hidden md:flex mx-auto font-body text-[0.9rem] md:text-[1rem] lg:text-[1rem] 2xl:text-3xl 2xl:py-4 gap-2  lg:gap-8 items-center
                 bg-black/20 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl">
    {['Home', 'About', 'Contact'].map((item) => (
      <li key={item} className="group relative">
        <Link 
          className="relative px-4 lg:px-6 2xl:px-20 py-2 flex items-center justify-center rounded-full transition-all duration-500 
                     hover:bg-white/5 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] active:scale-95" 
          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        >
          <ShinyText 
            speed={3} 
            delay={1} 
            color="#A1A1AA" 
            shineColor="#FFFFFF" 
            spread={120} 
            className="font-medium tracking-tight group-hover:text-white transition-colors duration-300" 
            text={item} 
          />

          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                          bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                           transition-all duration-500 ease-[cubic-bezier(0.17,0.67,0.83,0.67)] 
                           group-hover:w-2/3 group-hover:opacity-100 opacity-0 
                           shadow-[0_0_12px_rgba(99,102,241,0.8)]" 
          />
        </Link>
      </li>
    ))}
  </ul>

  {/* Right Actions - Stays right */}
  <div className="flex items-center gap-4">
    <DownloadButton />
    
    {/* Mobile Menu Icon (Optional but recommended for mobile UX) */}
   
  </div>
</nav>

  );
}



