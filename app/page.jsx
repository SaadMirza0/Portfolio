"use client"
import Navbar from "@/component/Navbar";
import DownloadButton from "@/component/smallcom/DownloadButton";
import Footer from "@/component/Footer" 

export default function Home() {
  return (
 
<div className="absolute top-0 z-[-2]  h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  {/* Navbar */}
  <nav className="absolute z-40 w-full">
    <Navbar />
  </nav>

<div className="relative z-10 h-full w-full flex items-center overflow-hidden">
  
  {/* Cinematic Ambient Glow */}
  <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse" />

  <div className="flex flex-col gap-6 md:gap-8 px-6 md:px-16 lg:px-24 text-white w-full relative z-20">
    
    {/* Main Title: Heavy Weights & Creative Punctuation */}
    <div className="overflow-hidden">
      <h1 className="text-6xl md:text-8xl lg:text-[9rem] animate-[fadeInUp_1.2s_ease-out_both] font-black text-white tracking-tighter leading-[0.8] group cursor-default">
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">S</span>aad 
        <span className="text-zinc-800 transition-colors duration-700 group-hover:text-zinc-600">.</span>
        <br />
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">M</span>irza
      </h1>
    </div>

    {/* Refined Subtitle: Minimalist & Clean */}
    <div className="flex items-center gap-3 animate-[fadeInUp_1.2s_ease-out_200ms_both]">
      <h2 className="text-sm md:text-lg lg:text-xl font-medium tracking-[0.3em] uppercase text-zinc-500">
        Full-Stack <span className="text-white">Architect</span> 
        <span className="mx-3 text-zinc-800">/</span> 
        UX <span className="text-white">Specialist</span>
      </h2>
    </div>

    {/* Bio: Optimized for Professional Impact */}
    <div className="max-w-xl animate-[fadeInUp_1.2s_ease-out_400ms_both]">
      <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-zinc-500">
        Engineering high-performance digital systems where 
        <span className="text-white font-normal"> technical logic</span> meets 
        <span className="italic text-zinc-300"> aesthetic soul</span>. 
        Focusing on scalable architecture and seamless user experiences.
      </p>
    </div>

    {/* Action Area: Dual Interactive Buttons */}
    <div className="flex flex-wrap items-center gap-6 mt-4 animate-[fadeInUp_1.2s_ease-out_600ms_both]">
      <div className="relative group">
        <DownloadButton />
      </div>

      {/* Aesthetic "Explore More" Button */}
      <button className="group flex items-center gap-3 px-1 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-500">
        <span className="relative">
          Explore My Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-500 group-hover:w-full" />
        </span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
    </div>

  </div>
</div>



  {/* right div */}
  <div className="absolute font-body text-sm md:text-xl lg:text-2xl right-6 md:right-10 bottom-10 md:bottom-16 flex justify-end text-white opacity-50 md:opacity-100">
    Minimalist is not Emptiness
  </div>
<Footer/>
</div>
  );
}
