"use client";
import React from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import Button from "./smallcom/Buttons"
import DownloadButton from "./smallcom/DownloadButton";
import ShinyText from "./animations/Textshine";

export default function Navbar() {
  return (
  <nav className="z-20 flex gap-10 mt-2 pt-2 px-6 md:px-10 items-center justify-between">
  {/* Logo - Stays left */}
 <span className="text-[1.5rem] md:text-[2rem] font-heading shrink-0 ">
  Saad Mirza
</span>

  {/* Links - Hidden on small screens, flex on desktop */}
<ul className="hidden md:flex md:ml-55 font-body text-[1rem] gap-4 lg:gap-15 items-center
            
               bg-black/10 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl">
  
  {['Home', 'About', 'Contact'].map((item) => (
    <li key={item} className="group relative">
      <Link 
        className="relative px-6 py-2.5 flex items-center justify-center rounded-full transition-all duration-500 
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

  
     <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-linear-to-r from-transparent via-indigo-500 to-transparent 
                         transition-all duration-500 ease-[cubic-bezier(0.17,0.67,0.83,0.67)] 
                         group-hover:w-2/3 group-hover:opacity-100 opacity-0 
                         shadow-[0_0_12px_rgba(99,102,241,0.8)]" 
        />
      </Link>
    </li>
  ))}
</ul>



 
  <div className=" flex flex-col md:flex-row md:items-center  ">
    
<Button/>
  </div>
</nav>
  );
}



