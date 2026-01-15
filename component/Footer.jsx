"use client"
export default function Footer() {
  
    return (
        
  
<footer className=" relative w-full py-4 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-neutral-950/50 backdrop-blur-md">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    

    <div className="flex flex-col gap-1 items-center md:items-start animate-[fadeInUp_1s_ease-out_both]">
      <span className="text-lg 2xl:text-[1.2rem] font-heading font-medicm text-white tracking-tight">
        Saad Mirza
      </span>
      <p className="text-[10px] 2xl:text-[0.9rem] uppercase tracking-[0.2em] text-white/30 font-medium">
        © 2026 · Full-Stack Webdeveloper
      </p>
    </div>

    
    <ul className="flex gap-8 text-[11px] 2xl:text-[1.2rem] uppercase tracking-widest font-medium text-white/50 animate-[fadeInUp_1s_ease-out_200ms_both]">
      {['Home', 'about', 'contact'].map((item) => (
        <li key={item}>
          <a href={item == 'Home' ? '/': `/${item.toLowerCase()}`} 
             className="hover:text-white transition-colors duration-300">
            {item}
          </a>
        </li>
      ))}
    </ul>


    <div className="flex gap-6 items-center animate-[fadeInUp_1s_ease-out_400ms_both]">
      <a href="https://linkedin.com" target="_blank" className="group relative">
        <span className="text-xs 2xl:text-[1.2rem] text-white/50 group-hover:text-indigo-400 transition-colors duration-300">LinkedIn</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
      </a>
      
      <a href="https://github.com" target="_blank" className="group relative">
        <span className="text-xs 2xl:text-[1.2rem] text-white/50 group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
      </a>

      
      <div className="flex items-center gap-2 pl-4 border-l border-white/10">
        <div className="h-1.5 w-1.5 2xl:h-3.5 2xl:w-3.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] 2xl:text-[1.2rem] text-white/40 uppercase tracking-tighter">Available for hire</span>
      </div>
    </div>

  </div>
</footer>

    )
}