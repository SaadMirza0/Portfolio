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
 
<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 transition-all bg-black/20 backdrop-blur-xl border-b border-white/10">
  
  {/* Logo/Name - Left side */}
  <span className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-heading shrink-0 text-white">
   SM
  </span>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex mx-auto font-body text-[0.9rem] md:text-[1rem] lg:text-[1rem] 2xl:text-2xl 2xl:py-4 gap-2 lg:gap-8 items-center
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

  {/* Right side - Download Button & Hamburger */}
  <div className="flex items-center gap-3 sm:gap-4">
    {/* Download Button - Hidden on mobile, visible on md+ */}
    <div className="hidden md:block">
      <DownloadButton />
    </div>
    
    {/* Mobile Hamburger Menu */}
    <button 
      onClick={() => setisopen(!isopen)}
      className="md:hidden flex flex-col gap-1.5 z-50 p-2" 
      aria-label="Toggle Menu"
    >
      <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? 'opacity-0' : ''}`} />
      <span className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isopen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out
                  ${isopen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
    
    {/* Mobile Menu Content */}
    <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
      {/* Mobile Navigation Links */}
      <ul className="flex flex-col items-center space-y-6 w-full max-w-sm">
        {navlinks.map((item) => {
          const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <li key={item} className="w-full group relative">
              <Link 
                onClick={() => setisopen(false)}
                className={`relative w-full px-6 py-4 flex items-center justify-center rounded-2xl border-b border-white transition-all duration-300 
                           ${isActive ? 'bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'hover:bg-white/5'} 
                           active:scale-95`} 
                href={href}
              >
                <ShinyText 
                  speed={3} 
                  delay={1} 
                  color={isActive ? "#FFFFFF" : "#A1A1AA"} 
                  shineColor="#FFFFFF" 
                  spread={80} 
                  className="font-medium text-xl tracking-tight group-hover:text-white transition-colors duration-300" 
                  text={item} 
                />

                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none 
                                bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]
                                ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                />

                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent 
                                 transition-all duration-300 ease-in-out
                                 shadow-[0_0_12px_rgba(99,102,241,0.8)]
                                 ${isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'}`} 
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Download Button */}
      <div className="mt-8">
        <DownloadButton />
      </div>

      {/* Close Menu Area */}
      <button 
        onClick={() => setisopen(false)}
        className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors"
        aria-label="Close Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor"  viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</nav>

  );
}


