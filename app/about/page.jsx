"use client"
import DotGrid from "@/component/animations/DotGrid";
import Navbar from "@/component/Navbar";
import SplitText from "@/component/animations/SplitText";
import Footer from "@/component/Footer" 

export default function AboutPage() {
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

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden">
      <nav className="fixed top-0 left-0 z-50 w-full">
        <Navbar />
      </nav>

      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen pt-20 md:pt-24 lg:pt-0">
        {/* Left side - About Info */}
      
    <div className="w-full lg:w-1/2 text-white flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 py-12 lg:py-0 selection:bg-white/10 relative">
      
      {/* Background Glow matching Contact Page */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />

      {/* Main Heading: Cinematic Scale */}
      <div className="overflow-hidden mb-8 lg:mb-16 animate-[fadeInUp_0.8s_ease-out_both]">
        <h1 className="text-7xl xs:text-8xl sm:text-9xl lg:text-[9rem] xl:text-[11rem] font-black tracking-tighter opacity-90 leading-[0.8] text-white">
          INFO<span className="text-zinc-800">.</span>
        </h1>
      </div>

      {/* Content Container with refined Border Reveal */}
      <div className="relative border-l-[1.5px] border-white/5 pl-6 sm:pl-8 lg:mt-6 lg:pl-12 group">
        {/* Hover-active border indicator */}
        <div className="absolute left-[-1.5px] top-0 h-0 group-hover:h-full w-[1.5px] bg-gradient-to-b from-white to-transparent transition-all duration-1000 ease-in-out" />

        {/* Primary Intro: High Visibility */}
        <p className="animate-[fadeInUp_1s_ease-out_200ms_both] font-light text-xl sm:text-2xl md:text-3xl lg:text-[1.8rem] xl:text-[2.2rem] leading-[1.1] max-w-[25ch] sm:max-w-xl text-zinc-300">
          I'm <span className="font-bold text-white relative inline-block group/name transition-colors cursor-default">
            Saad Mirza
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 scale-x-0 group-hover/name:scale-x-100 transition-transform duration-500 origin-left"></span>
          </span>, 
          an 18-year-old developer <br className="hidden md:block" /> 
          crafting digital experiences where <br className="hidden md:block" /> 
          <span className="italic font-serif text-white opacity-100">logic meets aesthetic.</span>
        </p>

        {/* Secondary Bio: Professional Tone */}
        <p className="animate-[fadeInUp_1s_ease-out_400ms_both] mt-8 sm:mt-10 font-light text-base sm:text-lg md:text-xl lg:text-[1.15rem] xl:text-[1.3rem] leading-relaxed max-w-lg text-zinc-500 hover:text-zinc-300 transition-colors duration-700">
          I solve real-world problems through <span className="text-zinc-300">minimalist engineering</span>. I believe in the power of refined aesthetics—building high-performance interfaces defined by technical precision and creative soul.
        </p>

        {/* Interactive Skills: Modern Tag System */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-6 gap-y-4 uppercase tracking-[0.3em] text-[9px] sm:text-[11px] font-bold text-zinc-600 animate-[fadeInUp_1s_ease-out_600ms_both]">
          
          <div className="group/tag flex items-center gap-3 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/tag:bg-cyan-500 transition-colors duration-500"></span>
            <span className="group-hover/tag:text-white transition-colors duration-300">Web Development</span>
          </div>

          <div className="h-px w-6 bg-white/5 hidden sm:block"></div>

          <div className="group/tag flex items-center gap-3 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/tag:bg-purple-500 transition-colors duration-500"></span>
            <span className="group-hover/tag:text-white transition-colors duration-300">UI/UX Design</span>
          </div>

          <div className="h-px w-6 bg-white/5 hidden sm:block"></div>

          <div className="group/tag flex items-center gap-3 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/tag:bg-cyan-500 transition-colors duration-500"></span>
            <span className="group-hover/tag:text-white transition-colors duration-300">Frontend Architecture</span>
          </div>
          
        </div>
      </div>
    </div>


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
        
        {/* Skill Anchor: Minimalist Text */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Creative Hover Underline: Matches the portfolio aesthetic */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/* Subtle pulsing dot for "Active Node" feel */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Cinematic Tooltip Box: Glass-morphism refined */}
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

        {/* Mobile Insight Prompt Logic: Matches original hover/active behavior */}
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
        
        {/* Skill Anchor: Minimalist Text */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Creative Hover Underline: Matches the portfolio aesthetic */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/* Subtle pulsing dot for "Active Node" feel */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Cinematic Tooltip Box: Glass-morphism refined */}
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

        {/* Mobile Insight Prompt Logic: Matches original hover/active behavior */}
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
        
        {/* Skill Anchor: Minimalist Text */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Creative Hover Underline: Matches the portfolio aesthetic */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/* Subtle pulsing dot for "Active Node" feel */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Cinematic Tooltip Box: Glass-morphism refined */}
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

        {/* Mobile Insight Prompt Logic: Matches original hover/active behavior */}
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
        
        {/* Skill Anchor: Minimalist Text */}
        <div className="relative py-2 px-1 transition-all duration-500">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-zinc-500 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {skill.name}
          </span>
          
          {/* Creative Hover Underline: Matches the portfolio aesthetic */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-100" />
          
          {/* Subtle pulsing dot for "Active Node" feel */}
          <div className="absolute -right-2 top-2 h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Cinematic Tooltip Box: Glass-morphism refined */}
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

        {/* Mobile Insight Prompt Logic: Matches original hover/active behavior */}
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
     <Footer/>
      </div>
    </div>
  );
}