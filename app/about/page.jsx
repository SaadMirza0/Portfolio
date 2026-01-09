import DotGrid from "@/component/animations/DotGrid";
import Navbar from "@/component/Navbar";
import SplitText from "@/component/animations/SplitText";
export default function AboutPage() {
  const skills = [
    {
      name: "HTML",
      description:
        "HTML is the standard markup language for creating web pages. It provides the basic structure of a site.",
    },
    {
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript is an essential programming language used to create interactive web pages by enabling dynamic content, multimedia, and user engagement.",
    },
    {
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    },
    {
      name: "Next.js",
      description:
        "Next.js is a React framework that enables server-side rendering and static site generation, enhancing performance and SEO for web applications.",
    },
    {
      name: "TailWind CSS",
      description:
        "TailWind CSS is a utility-first CSS framework that enables rapid UI development by providing pre-built classes for styling elements directly in HTML.",
    },
    {
      name: "Node.js",
      description:
        "Node.js is a JavaScript runtime environment that allows developers to run server-side code, enabling full-stack development with a single programming language.",
    },
    {
      name: "Mongo DB",
      description:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling unstructured or semi-structured data in modern web applications.",
    },
    {
      name: "SQL",
      description:
        "SQL is a standard language for managing and manipulating relational databases, used for querying, updating, and organizing data efficiently.",
    },
    {
      name: "Figma",
      description:
        "Figma is a cloud-based design tool used for interface design and prototyping, enabling real-time collaboration among designers and developers.",
    },
  ];

  return (
    <div className="relative w-screen h-screen bg-[#020617] overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#020617"
          activeColor="#1c0d59"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <nav className="absolute z-20">
        <Navbar />
      </nav>


      {/* Left side div start from here */}
      <div className="absolute mt-10 w-full flex flex-col md:flex-row z-10">
        <div className="w-full  md:w-1/2 text-[#FFFFFF]">
          <SplitText
            splitType="words"
            delay={200}
            className="text-9xl font-heading font-semibold ml-7 mt-15 "
            text="INFO"
          />

          <p className=" text-2xl font-light mt-25 ml-1 md:text-[1.6rem] md:mt-45 md:ml-7 leading-7 md:w-120 ">
            I’m Saad Mirza, a 20-year-old student & developer building modern
            digital experiences that merge technical logic with creative design.
            <br />
            <br />
            Currently based in Pakistan, I’m passionate about turning complex
            ideas into reality and partnering with brands who value performance
            and aesthetic precision.
            <br />
            <br />
            Specialising in Web Development, UX/UI design, and scalable frontend
            solutions.{" "}
          </p>
        </div>

        {/* Right side div start from here */}
        <div className=" relative md:w-1/2 mt-10 text-white  ">
          {/* Technologies */}
          <div className=" absolute bottom-0 ml-35 flex flex-col gap-y-3.25 items-start font-medium font-heading text-[1rem]">
            {/* row 1 */}
            <div className="flex gap-x-3 w-full">
             
              {skills.slice(0, 3).map((skill, index) => (
                <div key={index} className="group relative inline-block">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-[cyan-500/20] via-purple-500/20 to-cyan-500/20 opacity-0 
                    group-hover:opacity-100 rounded-md transition-opacity duration-500"
                  />
                  <div
                    className="relative px-6 py-1.5 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
                  group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                  group-hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="bg-linear-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>

                  {/* Description box on hover */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 
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
                    <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/8 p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />

                      <div className="relative z-10 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            Insights
                          </span>
                        </div>

                        <p className="text-[11.5px] leading-relaxed text-zinc-300 font-medium">
                          {skill.description}
                        </p>
                      </div>

           
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* 2 row */}
            <div className="flex gap-x-3 w-full">
             
              {skills.slice(3, 6).map((skill, index) => (
                <div key={index} className="group relative inline-block">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 
                    group-hover:opacity-100 rounded-md transition-opacity duration-500"
                  />

                  <div
                    className="relative px-6 py-1.5 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
                  group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                  group-hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="bg-linear-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>

                  {/* Description box on hover */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 
            
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
                    <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/8 p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />

                      <div className="relative z-10 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            Insights
                          </span>
                        </div>

                        <p className="text-[11.5px] leading-relaxed text-zinc-300 font-medium">
                          {skill.description}
                        </p>
                      </div>

                   
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 row */}
            <div className="flex gap-x-3 w-full">
              {/* .slice(0, 3) extracts skills at index 0, 1, and 2 */}
              {skills.slice(6, 9).map((skill, index) => (
                <div key={index} className="group relative inline-block">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 
                    group-hover:opacity-100 rounded-md transition-opacity duration-500"
                  />

                  <div
                    className="relative px-6 py-1.5 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-md 
                  group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                  group-hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="bg-linear-to-r from-white to-white/60 group-hover:from-cyan-400 group-hover:to-white bg-clip-text text-transparent transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 
                /* 1. 2026 3D INITIAL STATE */
                opacity-0 
                translate-y-2.5 
                rotate-x-15 
                scale-[0.98]
                pointer-events-none z-50 origin-bottom
                perspective-[1000px]
                
                /* 2. MODERN HOVER STATE */
                group-hover:opacity-100 
                group-hover:translate-y-0 
                group-hover:rotate-x-0 
                group-hover:scale-100
                
                /* 3. HIGH-END Easing (Fast start, soft finish) */
                transition-all duration-400 ease-[cubic-bezier(0.05,0.7,0.1,1)]"
                  >
                    <div className="relative overflow-hidden bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/8 p-4 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse" />

                      <div className="relative z-10 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            Insights
                          </span>
                        </div>

                        <p className="text-[11.5px] leading-relaxed text-zinc-300 font-medium">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


{/* Ux/Ui designer */}

            {/* <div class="px-4 py-1.5 border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 rounded-full col-span-4 row-start-4 text-center w-full">
              Ux/Ui Designer
              
            </div> */}

            {/* 4 row */}
            <div className="flex gap-x-3 w-full">
              {skills.slice(9).map((skill, index) => (
                <div
                  key={skill.id || index}
                  className="group relative inline-block"
                >
                  <div
                    className="px-6 py-1.5 border border-white/20 bg-white/5 rounded-sm cursor-help transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]
                 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    {" "}
                    {skill.name}{" "}
                  </div>

                   {/* Description box on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-bottom z-50 pointer-events-none">
                    <div className="bg-zinc-900 border border-white/10 text-white text-xs p-2 rounded shadow-xl">
                      {skill.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="px-6 py-1.5 border border-white/20 bg-white/5 rounded-sm cursor-help transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[4px_4px_0px_0px_rgba(6,182,212,0.4)]
                 active:translate-x-1 active:translate-y-1 active:shadow-none"> {skill.name} </div> */
}
