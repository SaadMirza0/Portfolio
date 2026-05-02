"use client"
import Navbar from "@/component/Navbar";
import DownloadButton from "@/component/smallcom/DownloadButton";
import Footer from "@/component/Footer" 
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link'
export default function Home() {
 const services = [
    {
      id: "01",
      title: "Web Developer",
      desc: "Building fast, reliable websites using clean code that is easy to manage.",
      tag: "Engineering",
      accent: "#7877c6", // purple
    },
    {
      id: "02",
      title: "UI/UX Designer",
      desc: "Designing easy-to-use apps and websites that people love to interact with.",
      tag: "Experience",
      accent: "#3b82f6", // blue
    },
    {
      id: "03",
      title: "Graphic Designer",
      desc: "Telling your story through creative designs and eye catching brand identities.",
      tag: "Visuals",
      accent: "#06b6d4", // cyan
    },
    
  ];
  
  
    const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  
  return (
 
<div className="absolute top-0 z-[-2]  h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  {/* Navbar */}
  <nav className="absolute z-40 w-full">
    <Navbar />
  </nav>

  {/* left div*/}
  <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="relative z-0 h-full w-full flex items-center overflow-hidden"
    >
     
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500 blur-[120px] pointer-events-none" 
      />

      <div className="flex flex-col gap-6 md:gap-8 px-6 md:px-16 lg:px-24 text-white w-full relative z-20">
        
        {/* main title */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVars}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.8] group cursor-default"
          >
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">S</span>aad 
            <span className="text-zinc-800 transition-colors duration-700 group-hover:text-zinc-600">.</span>
            <br />
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">M</span>irza
          </motion.h1>
        </div>

        {/* fullstack developer / designer */}
        <motion.div variants={itemVars} className="flex items-center gap-3">
          <h2 className="text-sm md:text-lg lg:text-xl font-medium tracking-[0.3em] uppercase text-zinc-500">
            Full-Stack <span className="text-white">Architect</span> 
            <span className="mx-3 text-zinc-800">/</span> 
            UX <span className="text-white">Specialist</span>
          </h2>
        </motion.div>

        {/* 2 lines */}
        <motion.div variants={itemVars} className="max-w-xl">
       <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-zinc-500">
  Adapting to a fast-growing world through 
  <span className="text-white font-normal"> modern code</span> and 
  <span className="italic text-zinc-300"> helpful innovation</span>. 
  Building high-quality digital experiences for any challenge, driven by a passion for constant learning.
</p>
        </motion.div>

        {/* resume download button and works */}
        <motion.div variants={itemVars} className="flex flex-wrap items-center gap-6 mt-4">
          <div className="relative group">
            <DownloadButton />
          </div>

          <Link
          href="/about#projects"
           className="group flex items-center gap-3 px-1 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-500">
            <span className="relative">
              Explore My Work
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-500 group-hover:w-full" />
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </motion.div>

      </div>
    </motion.div>



  {/* right div */}
{/* Right Div - The Integrated Architect System */}
<div className="relative lg:absolute right-0 top-0 h-[600px] lg:h-full w-full lg:w-1/2 flex items-center justify-center overflow-hidden z-10">
  
  <div className="relative w-full max-w-2xl flex items-center justify-center">
    
    {/* 1. THE DECORATIVE BACK-FRAME (Adds Depth) */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute w-72 h-96 md:w-80 md:h-[480px] border border-white/5 -rotate-6 translate-x-10 translate-y-10 pointer-events-none"
    />

    {/* 2. MAIN IDENTITY MODULE */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 group"
    >
      {/* Corner Brackets that animate on hover */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/50 group-hover:w-16 group-hover:h-16 transition-all duration-500" />
      <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-zinc-800 group-hover:border-white/20 transition-all duration-500" />

      {/* The Image Wrapper */}
      <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-neutral-900 overflow-hidden ring-1 ring-white/10 group-hover:ring-cyan-500/30 transition-all duration-700">
        
        {/* Technical Grid Pattern Overlay */}
        <div className="absolute inset-0 z-30 opacity-20 pointer-events-none bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        {/* Blue Scan Highlight */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent z-20"
        />

        <img 
          src="/pic1.jpeg" 
          alt="Saad Mirza" 
          className="w-full h-full object-cover grayscale brightness-[0.8] contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
        />
        
        {/* System Bar */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-neutral-950/90 backdrop-blur-md z-40 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-cyan-500 tracking-[0.4em] uppercase">Status // Online</span>
            <span className="text-[10px] font-black text-white tracking-widest uppercase">Saad Mirza</span>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800" />
          
        </div>
      </div>
    </motion.div>

    {/* 3. DATA CALL-OUTS (Integrated Skills) */}
    <div className="absolute inset-0 z-30 pointer-events-none">
      {[
        { name: "Next.js", top: "15%", left: "5%", side: "left" },
        { name: "React", top: "25%", right: "0%", side: "right" },
        { name: "PostgreSQL", bottom: "35%", left: "-5%", side: "left" },
        { name: "TypeScript", bottom: "15%", right: "5%", side: "right" },
      ].map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: skill.side === 'left' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + (i * 0.1) }}
          style={{ ...skill }}
          className="absolute flex items-center gap-3 group/skill pointer-events-auto"
        >
          {skill.side === 'right' && <div className="w-12 h-[1px] bg-cyan-500/20 group-hover/skill:bg-cyan-500 transition-colors" />}
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover/skill:text-cyan-500 transition-colors">
              {skill.name}
            </span>
          </div>
          {skill.side === 'left' && <div className="w-12 h-[1px] bg-cyan-500/20 group-hover/skill:bg-cyan-500 transition-colors" />}
        </motion.div>
      ))}
    </div>

    {/* 4. BACKGROUND ATMOSPHERE */}
    <div className="absolute w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
  </div>
</div>




  







    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden">
  {/* Section Header */}
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="mb-24 flex flex-col items-center text-center"
  >
    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
      What I can <br />
      <span className="text-zinc-800">Do.</span>
    </h2>
  </motion.div>

  {/* services Cards - Changed from grid to flex-center for dynamic centering */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } }
    }}
    className="flex flex-wrap justify-center gap-px bg-white/10 border border-white/10 overflow-hidden"
  >
    {services.map((service, i) => (
   
      <motion.div
        key={service.id}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } }
        }}
        whileHover="hover"
        initial="initial"
        /* 
           w-full: Mobile (1 per row)
           md:w-[calc(50%-1px)]: Tablet (2 per row, centered if 1)
           lg:w-[calc(33.333%-1px)]: Desktop (3 per row, 4th item centers)
        */
        className="group relative w-full md:w-[calc(50%-1px)] lg:w-[calc(33.333%-1px)] p-10 md:p-14 bg-neutral-950 border border-white/[0.03] cursor-pointer overflow-hidden transition-all duration-500"
      >
       <Link
    href="/contact"
    >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-1000 pointer-events-none select-none overflow-hidden">
          <div className="flex flex-col gap-6 rotate-12 scale-125">
            {[...Array(8)].map((_, row) => (
              <motion.div 
                key={row}
                animate={{ x: row % 2 === 0 ? [-50, 50] : [50, -50] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-12 whitespace-nowrap text-[9px] font-mono tracking-[0.2em] text-zinc-400"
              >
                {["NEXTJS", "REACT", "FIGMA", "NODEJS", "TAILWIND", "TYPESCRIPT", "FRAMER", "ARCH"].map((tool) => (
                  <span key={tool} className="group-hover:text-white transition-colors duration-700">
                    {tool} <span style={{ color: service.accent }} className="opacity-30">///</span>
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-10 -right-6 text-[15rem] font-black leading-none pointer-events-none select-none uppercase">
          <span className="text-white/[0.01] transition-colors duration-700 group-hover:text-white/[0.04]">
            {service.id}
          </span>
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 w-full h-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent group-hover:via-white/[0.05]"
          />
        </div>

        <motion.div 
          variants={{ hover: { opacity: 0.25, scale: 1.8 } }}
          initial={{ opacity: 0 }}
          style={{ backgroundColor: service.accent }}
          className="absolute -top-32 -left-32 w-96 h-96 blur-[130px] rounded-full pointer-events-none z-0"
        />

        <div className="absolute top-0 left-0 w-[1px] h-full bg-white/[0.05]">
          <motion.div 
            variants={{ hover: { height: "100%", transition: { duration: 0.5 } } }}
            initial={{ height: "15%" }}
            style={{ backgroundColor: service.accent }}
            className="w-full transition-all duration-700"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-16">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-white transition-colors duration-500 uppercase tracking-widest">
                Module.0{service.id}
              </span>
              <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: `${service.accent}40` }} />
            </div>
            <span 
              style={{ color: service.accent, borderColor: `${service.accent}30` }}
              className="text-[8px] font-black uppercase tracking-[0.4em] px-3 py-1 border backdrop-blur-md bg-white/[0.02] group-hover:bg-white/[0.05] transition-all"
            >
              {service.tag}
            </span>
          </div>

          <motion.h3 
            variants={{ hover: { x: 12 } }}
            className="text-4xl font-black text-white uppercase tracking-tighter mb-6 transition-transform duration-500"
          >
            {service.title}<span style={{ color: service.accent }} className="group-hover:animate-pulse">_</span>
          </motion.h3>

          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed mb-20 group-hover:text-zinc-200 transition-colors duration-500 max-w-[90%]">
            {service.desc}
          </p>

          <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="relative h-5 overflow-hidden">
              <motion.span 
                variants={{ hover: { y: -30, opacity: 0 } }}
                className="block text-[11px] font-black uppercase tracking-[0.4em] text-zinc-700 transition-all duration-500"
              >
                Contact Now
              </motion.span>
              <motion.span 
                variants={{ hover: { y: -0.2, opacity: 1 } }}
                initial={{ y: 20, opacity: 0 }}
                style={{ color: service.accent }}
                className="absolute top-0 block text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500"
              >
                StartProject
              </motion.span>
            </div>

            <motion.div 
              variants={{ hover: { rotate: -45, scale: 1.1, backgroundColor: "#fff", color: "#000" } }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 transition-all duration-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </div>
        </div>
         </Link>
      </motion.div>
     
    ))}
  </motion.div>
</section>




  
<Footer/>
</div>
  );
}
