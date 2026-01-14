"use client"
import DotGrid from "@/component/animations/DotGrid";
import Navbar from "@/component/Navbar";
import SplitText from "@/component/animations/SplitText";
import Footer from "@/component/Footer";

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
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-0">
          {/* Header Section */}
          <div className="overflow-hidden mb-6 sm:mb-8 lg:mb-10">
            <SplitText
              splitType="words"
              delay={200}
              className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[6rem] font-heading font-bold tracking-tighter opacity-90 leading-none"
              text="INFO"
            />
          </div>

          <div className="relative border-l border-white/10 pl-4 sm:pl-6 md:pl-8 lg:mt-20 lg:pl-10 xl:pl-8">
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards font-light text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.8rem] leading-relaxed md:leading-[1.4] max-w-xl opacity-80">
              I'm <span className="font-medium text-white opacity-100">Saad Mirza</span>, 
              a 20-year-old developer crafting digital experiences where 
              <span className="italic"> logic meets aesthetic</span>.
            </p>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-forwards mt-4 sm:mt-6 md:mt-8 font-light text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.3rem] leading-relaxed md:leading-[1.4] max-w-xl opacity-80">
              Currently based in Pakistan, I partner with forward-thinking brands to 
              build high-performance interfaces defined by technical precision.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-2 uppercase tracking-widest text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium text-white/50 animate-[fadeIn_1s_ease-out_600ms_both]">
              <span className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Web Development</span>
              <span className="w-1 h-1 rounded-full bg-white/20 self-center"></span>
              <span className="hover:text-purple-400 transition-colors duration-300 cursor-default">UI/UX Design</span>
              <span className="w-1 h-1 rounded-full bg-white/20 self-center"></span> 
              <span className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Frontend Architecture</span>
            </div>
          </div>
        </div>

        {/* Right side - Skills Section */}
    <div className="w-full lg:w-1/2 text-white flex items-center justify-center px-4 sm:px-6 md:px-8  lg:px-0 py-8 lg:py-0">
  <div className="w-full max-w-2xl xl:max-w-3xl">
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-2 font-medium font-heading">
        <div className="h-60 w-60 border mb-30 rounded-2xl">Hello i am here an image</div>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center mb-4 sm:mb-6">
        Techs
      </div>
      
      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-2 w-full">
        {skills.slice(0, 3).map((skill, index) => (
          <div key={index} className="group relative inline-block">
            <div
              className="relative px-3 2xl:px-5 2xl:py-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
              group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
              group-hover:-translate-y-1 transition-all duration-300"
            >
              <span className="md:text-1xl 2xl:text-3xl   bg-gradient-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>

            {/* Desktop Tooltip */}
            <div
              className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 
              w-48 sm:w-56 md:w-64 
              opacity-0 
              translate-y-2.5 
              rotate-x-15
              scale-[0.98]
              pointer-events-none z-50 origin-bottom
              perspective-[1000px]
              group-hover:opacity-100 
              group-hover:translate-y-0 
              group-hover:rotate-x-0 
              group-hover:scale-100
              transition-all duration-400 ease-[cubic-bezier(0.05,0.7,0.1,1)]"
            >
              <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Insights
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-medium">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>

    
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-2 w-full">
        {skills.slice(3, 6).map((skill, index) => (
          <div key={index} className="group relative inline-block">
            <div
              className="relative px-3 2xl:px-5 2xl:py-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
              group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
              group-hover:-translate-y-1 transition-all duration-300"
            >
              <span className="md:text-1xl 2xl:text-3xl   bg-gradient-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>

            {/* Desktop Tooltip */}
            <div
              className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 
              w-48 sm:w-56 md:w-64 
              opacity-0 
              translate-y-2.5 
              rotate-x-15
              scale-[0.98]
              pointer-events-none z-50 origin-bottom
              perspective-[1000px]
              group-hover:opacity-100 
              group-hover:translate-y-0 
              group-hover:rotate-x-0 
              group-hover:scale-100
              transition-all duration-400 ease-[cubic-bezier(0.05,0.7,0.1,1)]"
            >
              <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Insights
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-medium">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-2  w-full">
        {skills.slice(6, 9).map((skill, index) => (
          <div key={index} className="group relative inline-block">
            <div
              className="relative px-3 2xl:px-5 2xl:py-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
              group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
              group-hover:-translate-y-1 transition-all duration-300"
            >
              <span className="md:text-1xl 2xl:text-3xl   bg-gradient-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>

            {/* Desktop Tooltip */}
            <div
              className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 
              w-48 sm:w-56 md:w-64 
              opacity-0 
              translate-y-2.5 
              rotate-x-15
              scale-[0.98]
              pointer-events-none z-50 origin-bottom
              perspective-[1000px]
              group-hover:opacity-100 
              group-hover:translate-y-0 
              group-hover:rotate-x-0 
              group-hover:scale-100
              transition-all duration-400 ease-[cubic-bezier(0.05,0.7,0.1,1)]"
            >
              <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Insights
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 font-medium">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>


          </div>
        ))}
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full">
        {skills.slice(9).map((skill, index) => (
          <div key={skill.id || index} className="group relative inline-block">
            <div
              className="px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 border border-white/20 bg-white/5 rounded-sm cursor-help transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <span className="text-xs xs:text-sm sm:text-base whitespace-nowrap">
                {skill.name}
              </span>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 xs:w-48 sm:w-56 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-bottom z-50 pointer-events-none">
              <div className="bg-zinc-900/95 backdrop-blur-sm border border-white/10 text-white text-xs p-3 rounded-lg shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                    Insights
                  </span>
                </div>
                <p className="text-[10.5px] leading-relaxed text-zinc-300">
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
        <Footer />
      </div>
    </div>
  );
}