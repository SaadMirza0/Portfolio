"use client"
import { useState } from "react"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer" 
import { SaveMessage } from "@/actions"
import { Form } from "lucide-react"
import { motion} from 'framer-motion';
export default function Contact() {
  const [msg, setmsg] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
   
    const data = Object.fromEntries(formData);
    console.log(data)
    setmsg("Igniting connection...")
    const res = await SaveMessage(data);
    if (res.success) {


      setmsg("Message received. I'll be in touch shortly.");
      e.target.reset(); 


    } else {
      setmsg("Something went wrong. Please try again.");
    }
  }
const containerVars = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVars = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};
  // Refined Interactive Styles
  const inputClasses = "peer w-full bg-transparent border-b-2 border-white/10 focus:border-white text-xl outline-none text-white py-4 transition-all duration-500 placeholder-transparent hover:border-white/30";
  const labelClasses = "absolute left-0 top-4 text-zinc-500 text-sm uppercase tracking-widest font-bold transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-white selection:text-black">
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <Navbar />

    <main className="relative z-10 pt-32 pb-20 selection:bg-cyan-500/30">
  <motion.div 
    variants={containerVars}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="container px-6 mx-auto"
  >
    
    {/* Header: Theme Synced */}
    <header className="max-w-4xl mb-24">
      <motion.h1 variants={itemVars} className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-white">
        LETS <span className="text-zinc-800 transition-colors duration-700 hover:text-zinc-600">COLLABORATE.</span>
      </motion.h1>
      <motion.p variants={itemVars} className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-light leading-relaxed">
        Have a revolutionary idea or a complex project? I specialize in turning 
        <span className="text-white font-normal"> ambitious visions into digital reality</span>. 
        Drop a line and let’s start the conversation.
      </motion.p>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      
      {/* Form: System-Logic Theme */}
      <motion.div variants={itemVars} className="lg:col-span-7">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group/input">
              <input type="text" name="username" required placeholder=" " className={`${inputClasses} border-zinc-800 focus:border-cyan-500 transition-colors`} />
              <label className={`${labelClasses} text-zinc-600 peer-focus:text-cyan-500`}>What s your name?</label>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover/input:w-full shadow-[0_0_10px_#06b6d4]" />
            </div>
            <div className="relative group/input">
              <input type="email" name="email" required placeholder=" " className={`${inputClasses} border-zinc-800 focus:border-cyan-500 transition-colors`} />
              <label className={`${labelClasses} text-zinc-600 peer-focus:text-cyan-500`}>Your Email Address</label>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover/input:w-full shadow-[0_0_10px_#06b6d4]" />
            </div>
          </div>

          <div className="relative group/input">
            <textarea name="message" required placeholder=" " className={`${inputClasses} border-zinc-800 focus:border-cyan-500 transition-colors h-32 resize-none`} />
            <label className={`${labelClasses} text-zinc-600 peer-focus:text-cyan-500`}>Tell me about your goals</label>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover/input:w-full shadow-[0_0_10px_#06b6d4]" />
          </div>

          <div className="pt-8">
            <button type="submit" className="group relative inline-flex items-center gap-4 text-2xl font-bold tracking-tighter text-white">
              <span className="relative">
                SEND MESSAGE
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
            {msg && <p className="mt-8 text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">{msg}</p>}
          </div>
        </form>
      </motion.div>

      {/* Sidebar: Architect Index Theme */}
      <div className="lg:col-span-5 space-y-20 lg:pl-16">
        <motion.div variants={itemVars}>
          <h3 className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-500/30" /> Contacts
          </h3>
          <div className="space-y-4">
            <a href="mailto:saadmirzapak@gmail.com" className="block text-3xl font-light text-zinc-300 hover:text-white transition-colors underline-offset-8 hover:underline decoration-cyan-500/50 decoration-1">saadmirzapak@gmail.com</a>
            <a href="tel:+923010544620" className="block text-3xl font-light text-zinc-300 hover:text-white transition-colors tracking-tighter">+92 301 0544620</a>
          </div>
        </motion.div>

        <motion.div variants={itemVars}>
          <h3 className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-500/30" /> Availability
          </h3>
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p className="text-lg font-medium tracking-tight">Currently accepting new projects</p>
          </div>
        </motion.div>

        <motion.div variants={itemVars}>
          <h3 className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-500/30" /> Socials
          </h3>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] duration-300">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] duration-300">Twitter</a>
            <a href="#" className="hover:text-white transition-colors hover:translate-y-[-2px] duration-300">GitHub</a>
          </div>
        </motion.div>
      </div>

    </div>
  </motion.div>
</main>

      <Footer />
    </div>
  )
}
