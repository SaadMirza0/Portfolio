"use client"

import Navbar from "@/component/Navbar";

import Footer from "@/component/Footer" 
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function AboutPage() {
  const containerRef = useRef(null);
 const projects = [
   {
  title: "Bakery Website (Template)",
  category: "UX Design",
  year : 2025,
  image: "/api/placeholder/800/600",
  link: "", 
},
{
  title: "Full Stack E-Commerce Store",
  category: "Full-Stack Website",
   year : 2025,
  image: "/api/placeholder/800/600",
  link: "https://github.com/SaadMirza0/E-Store",
},
{
  title: "Full Stack Store",
  category: "Full-Stack Website",
   year : 2026,
  image: "/api/placeholder/800/600",
  link: "https://github.com/SaadMirza0/E-Store",
},
{
  title: "Esturro Store",
  category: "Full Stack Buissness website",
  year : 2026,
  image: "/api/placeholder/800/600",
  link: "https://esturro.store",
}

  ];

  const skills = [
    {
      name: "HTML",
      description: "HTML is the standard markup language for creating web pages. It provides the basic structure of a site.",
    },
    {
      name: "CSS",
      description: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
    },
    {
      name: "JavaScript",
      description: "JavaScript is an essential programming language used to create interactive web pages by enabling dynamic content, multimedia, and user engagement.",
    },
    {
      name: "React",
      description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    },
    {
      name: "Next.js",
      description: "Next.js is a React framework that enables server-side rendering and static site generation, enhancing performance and SEO for web applications.",
    },
    {
      name: "TailWind CSS",
      description: "TailWind CSS is a utility-first CSS framework that enables rapid UI development by providing pre-built classes for styling elements directly in HTML.",
    },
    {
      name: "Node.js",
      description: "Node.js is a JavaScript runtime environment that allows developers to run server-side code, enabling full-stack development with a single programming language.",
    },
    {
      name: "Mongo DB",
      description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling unstructured or semi-structured data in modern web applications.",
    },
    {
      name: "SQL",
      description: "SQL is a standard language for managing and manipulating relational databases, used for querying, updating, and organizing data efficiently.",
    },
    {
      name: "Figma",
      description: "Figma is a cloud-based design tool used for interface design and prototyping, enabling real-time collaboration among designers and developers.",
    },
  ];
  
  

  
const containerVars = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVars = {
  initial: { opacity: 0, y: 25 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const lineVars = {
  initial: { height: 0 },
  animate: { 
    height: "100%", 
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 } 
  }
};
  return (
    <div className="relative min-h-screen w-full  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-50 w-full">
        <Navbar />
      </nav>

      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen pt-20 md:pt-24 lg:pt-0">
      
      
        {/* Left side - About Info */}
   <motion.div 
  variants={containerVars}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="w-full lg:w-1/2 text-white flex flex-col justify-center px-60 sm:px-100 md:px-120 lg:px-16  py-12 lg:py-0 selection:bg-cyan-500/30 relative"
>
 
  <motion.div 
    animate={{ 
      opacity: [0.05, 0.12, 0.05],
      scale: [1, 1.1, 1] 
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" 
  />

  {/* Main Heading: Matches Saad Mirza Name Weight */}
  <div className="overflow-hidden mb-8 lg:mb-16">
    <motion.h1 
      variants={{
        initial: { y: "100%" },
        animate: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
      }}
      className="text-7xl xs:text-8xl sm:text-9xl lg:text-[9rem] xl:text-[11rem] font-black tracking-tighter leading-[0.8] text-white group cursor-default"
    >
      INFO<span className="text-zinc-800 transition-colors duration-700 group-hover:text-cyan-500">.</span>
    </motion.h1>
  </div>

  <div className="relative pl-6 sm:pl-8 lg:mt-6 lg:pl-12 group">
    
    {/* Architectural Vertical Line: Logic meets Aesthetic styling */}
    <motion.div 
      variants={lineVars}
      className="absolute left-[-1.5px] top-0 w-[1.5px] bg-zinc-800 origin-top"
    >
      <div className="absolute inset-0 h-0 group-hover:h-full w-full bg-gradient-to-b from-cyan-500 to-transparent transition-all duration-1000 ease-in-out" />
    </motion.div>

    {/* Primary Intro: High-performance logic theme */}
  <motion.p 
  variants={itemVars}
  className="font-light text-xl sm:text-2xl md:text-3xl lg:text-[1.8rem] xl:text-[2.2rem] leading-[1.1] max-w-[25ch] sm:max-w-xl text-zinc-400"
>
  I’m <span className="font-bold text-white relative inline-block group/name transition-colors cursor-default">
    Saad Mirza
    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-cyan-500 scale-x-0 group-hover/name:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_15px_rgba(6,182,212,0.4)]"></span>
  </span>, 
  an 18-year-old Full-Stack Engineer <br className="hidden md:block" /> 
  who finds purpose in <br className="hidden md:block" /> 
  <span className="italic font-serif text-zinc-200 opacity-100">continuous learning and problem solving.</span>
</motion.p>

    {/* Bio: Optimized for Professional Impact */}
   <motion.p 
  variants={itemVars}
  className="mt-8 sm:mt-10 font-light text-base sm:text-lg md:text-xl lg:text-[1.15rem] xl:text-[1.3rem] leading-relaxed max-w-lg text-zinc-500 hover:text-zinc-300 transition-colors duration-700"
>
  I turn my passion for software building into <span className="text-white font-normal">efficient digital solutions</span>. By leveraging <span className="text-white font-normal">AI </span> to maximize my workflow, I help local businesses and global clients through freelancing—delivering high-performance code with a creative soul.
</motion.p>

    {/* Interactive Skills Tags: Staggered "System" pop-in */}
    <motion.div 
      variants={itemVars}
      className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-6 gap-y-4 uppercase tracking-[0.4em] text-[9px] sm:text-[11px] font-bold text-zinc-600"
    >
      {[
        { label: "Web Development", clr: "group-hover/tag:bg-cyan-500 group-hover/tag:shadow-[0_0_10px_#06b6d4]" },
        { label: "UI/UX Design", clr: "group-hover/tag:bg-white group-hover/tag:shadow-[0_0_10px_#fff]" },
        { label: "Frontend Architecture", clr: "group-hover/tag:bg-cyan-500 group-hover/tag:shadow-[0_0_10px_#06b6d4]" }
      ].map((tag, i) => (
        <div key={i} className="flex items-center gap-6">
          <div className="group/tag flex items-center gap-3 cursor-default">
            <span className={`w-1.5 h-1.5 rounded-full bg-zinc-800 transition-all duration-500 ${tag.clr}`}></span>
            <span className="group-hover/tag:text-white transition-colors duration-300">{tag.label}</span>
          </div>
          {i !== 2 && <div className="h-[1px] w-6 bg-zinc-900 hidden sm:block"></div>}
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>



    <div className="w-full lg:w-1/2 text-white flex items-center justify-center px-4 sm:px-6 md:px-8  lg:px-0 py-8 lg:py-0">
  <div className="w-full max-w-2xl xl:max-w-3xl">
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-2 font-medium font-heading">


      {/* Here is the div which is up side of the techs for the pic or any other componenet */}
        {/* <div className="h-60 w-60 border mb-30 rounded-2xl">Hello i am here an image</div> */}


 <div className="flex flex-col items-center mb-16 animate-[fadeInUp_1s_ease-out_both]">
    <div className="text-zinc-600 text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] mb-4">
      Technologies <span className="text-white/10 mx-2">|</span> <span className="text-zinc-400">Core Stack</span>
    </div>
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
  </div>
 {/* Row 1 */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 w-full px-4">
    {skills.slice(0, 3).map((skill, index) => (
      <div key={index} className="group relative inline-block cursor-default">
        
        {/* Skill Anchor */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/*  Hover Underlinec */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/*Active Node */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/*  Tooltip*/}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-48 sm:w-56 md:w-64 opacity-0 translate-y-3 pointer-events-none z-50 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]">
          
          <div className="relative overflow-hidden bg-black/90 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]">
            
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black">Insights</span>
                </div>
                <span className="text-[9px] text-zinc-700 font-mono">0{index + 1}</span>
              </div>
              
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-light italic">
                "{skill.description}"
              </p>
              
              {/* Progress/Skill */}
              <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                <div className="h-full bg-white/40 w-0 group-hover:w-full transition-all duration-1000 delay-200" />
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-[-1px]" />
        </div>

        {/* Mobile Insight */}
        <div className="lg:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 xs:w-48 sm:w-56 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300 origin-bottom z-50 pointer-events-none">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 text-white p-3 rounded-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Insight</span>
            </div>
            <p className="text-[10px] leading-relaxed text-zinc-300">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
      {/* Row 2 */}
 <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 w-full px-4">
    {skills.slice(3, 6).map((skill, index) => (
      <div key={index} className="group relative inline-block cursor-default">
        
        {/* Skill Anchor*/}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/*  Hover Underline */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/*Active Node */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/*  Tooltip Box */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-48 sm:w-56 md:w-64 opacity-0 translate-y-3 pointer-events-none z-50 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]">
          
          <div className="relative overflow-hidden bg-black/90 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]">
            
         
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black">Insights</span>
                </div>
                <span className="text-[9px] text-zinc-700 font-mono">0{index + 1}</span>
              </div>
              
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-light italic">
                "{skill.description}"
              </p>
              
              {/* Progress/Skill  */}
              <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                <div className="h-full bg-white/40 w-0 group-hover:w-full transition-all duration-1000 delay-200" />
              </div>
            </div>
          </div>

          {/* Tooltip*/}
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-[-1px]" />
        </div>

        {/* Mobile Insight */}
        <div className="lg:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 xs:w-48 sm:w-56 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300 origin-bottom z-50 pointer-events-none">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 text-white p-3 rounded-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Insight</span>
            </div>
            <p className="text-[10px] leading-relaxed text-zinc-300">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

      {/* Row 3 */}
 <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 w-full px-4">
    {skills.slice(6, 9).map((skill, index) => (
      <div key={index} className="group relative inline-block cursor-default">
        
        {/* Skill Anchor */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Hover Underline */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/*Active Node */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-48 sm:w-56 md:w-64 opacity-0 translate-y-3 pointer-events-none z-50 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]">
          
          <div className="relative overflow-hidden bg-black/90 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Top accent line  */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black">Insights</span>
                </div>
                <span className="text-[9px] text-zinc-700 font-mono">0{index + 1}</span>
              </div>
              
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-light italic">
                "{skill.description}"
              </p>
              
              {/* Progress/Skill  */}
              <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                <div className="h-full bg-white/40 w-0 group-hover:w-full transition-all duration-1000 delay-200" />
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-[-1px]" />
        </div>

        {/* Mobile Insight  */}
        <div className="lg:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 xs:w-48 sm:w-56 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300 origin-bottom z-50 pointer-events-none">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 text-white p-3 rounded-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Insight</span>
            </div>
            <p className="text-[10px] leading-relaxed text-zinc-300">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

      {/* Row 4 */}
   <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 w-full px-4">
    {skills.slice(9, 12).map((skill, index) => (
      <div key={index} className="group relative inline-block cursor-default">
        
        {/* Skill Anchor */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Hover Underline */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/*Active */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-48 sm:w-56 md:w-64 opacity-0 translate-y-3 pointer-events-none z-50 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)]">
          
          <div className="relative overflow-hidden bg-black/90 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 rounded-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Top accent line (Animated) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black">Insights</span>
                </div>
                <span className="text-[9px] text-zinc-700 font-mono">0{index + 1}</span>
              </div>
              
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-light italic">
                "{skill.description}"
              </p>
              
              {/* Progress/Skill Level Visual (Subtle) */}
              <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                <div className="h-full bg-white/40 w-0 group-hover:w-full transition-all duration-1000 delay-200" />
              </div>
            </div>
          </div>

          {/* Tooltip Connector/Arrow (Refined) */}
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-[-1px]" />
        </div>

        <div className="lg:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 xs:w-48 sm:w-56 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-active:scale-100 group-active:opacity-100 transition-all duration-300 origin-bottom z-50 pointer-events-none">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 text-white p-3 rounded-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Insight</span>
            </div>
            <p className="text-[10px] leading-relaxed text-zinc-300">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
    </div>
  </div>
</div>
      </div>
      
      <div className="relative z-10 w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      
      
      
<section  id="projects" ref={containerRef} className="relative z-10 w-full bg-transparent py-32 lg:py-48 overflow-hidden">
  
  <motion.div 
    style={{ x: '-10%' }}
    suppressHydrationWarning
    className="absolute top-20 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none"
  >
    <span className="ml-40 text-[15vw] font-black uppercase tracking-tighter text-white">Saad</span>
  </motion.div>

  <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 group/main">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="cursor-default"
      >
        {/* Selected Works Label */}
        <motion.div whileHover="hover" className="flex items-center gap-3 mb-10 cursor-pointer group/label">
          <div className="relative flex items-center justify-center w-4 h-4">
            <motion.div 
              className="absolute inset-0 border border-cyan-500/20" 
              variants={{ hover: { rotate: 90, scale: 1.2, borderColor: "#06b6d4" } }} 
            />
            <div className="w-[2px] h-[2px] bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
          </div>

          <div className="relative overflow-hidden h-4">
            <div className="flex text-[10px] font-black uppercase tracking-[0.4em]">
              {"Selected Works".split("").map((char, i) => (
                <motion.span
                  key={`top-char-${i}`}
                  variants={{ hover: { y: -20, opacity: 0 } }}
                  transition={{ delay: i * 0.02 }}
                  className="text-zinc-500"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="absolute inset-0 flex text-[10px] font-black uppercase tracking-[0.4em]">
              {"Selected Works".split("").map((char, i) => (
                <motion.span
                  key={`bot-char-${i}`}
                  initial={{ y: 20, opacity: 0 }}
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  transition={{ delay: i * 0.02 }}
                  className="text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
          
          <span suppressHydrationWarning className="text-[9px] font-mono text-zinc-800 group-hover/label:text-cyan-500 transition-colors">
            // 0{projects?.length || 0}
          </span>
        </motion.div>

        {/* heading */}
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
          <span className="text-white inline-block hover:translate-x-2 transition-transform duration-500">
            Real World
          </span> 
          <br />
          <span className="relative inline-block text-zinc-900 group-hover/main:text-zinc-800 transition-colors duration-700">
            Excellence
            <span className="text-cyan-500">.</span>
            <motion.span 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 text-white pointer-events-none select-none"
            >
              Excellence.
            </motion.span>
          </span>
        </h2>
      </motion.div>

      {/* Paragraph with Pulse Border */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative max-w-[280px] text-zinc-500 text-sm font-light leading-relaxed pl-6 group-hover/main:text-zinc-300 transition-colors duration-500"
      >
        <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-900 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent shadow-[0_0_10px_#06b6d4]"
          />
        </div>
        A collection of projects engineered with 
        <span className="italic text-zinc-200 ml-1 group-hover/main:text-cyan-500 transition-colors duration-700">
          Passion
        </span>.
      </motion.p>
    </div>

    {/* projects */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {projects && projects.map((project, index) => (
        <motion.div
          key={`project-${index}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group cursor-default"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 ring-1 ring-white/5 group-hover:ring-cyan-500/30 transition-all duration-500">
            <motion.div 
              className="absolute inset-0 z-10 bg-neutral-950"
              initial={{ height: "100%" }}
              whileInView={{ height: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-500">{project.category}</span>
              <span className="text-[9px] font-mono text-zinc-600">{project.year}</span>
            </div>
            <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform duration-300">
              <h4 className="text-xl font-black tracking-tighter text-white">
                {project.title}<span className="text-zinc-800 group-hover:text-cyan-500 transition-colors">.</span>
              </h4>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>





      
     <Footer/>
      </div>
    </div>
  );
}