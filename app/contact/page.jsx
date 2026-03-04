"use client"
import { useState } from "react"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer" 
import { SaveMessage } from "@/actions"

export default function Contact() {
  const [msg, setmsg] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setmsg("Igniting connection...")
    const res = await SaveMessage(data);
    if (res.success) {
      setmsg("Message received. I'll be in touch shortly.");
      e.target.reset(); 
    } else {
      setmsg("Something went wrong. Please try again.");
    }
  }

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

      <main className="relative z-10 pt-32 pb-20">
        <div className="container px-6 mx-auto">
          
          {/* Header: SEO-Friendly & Bold */}
          <header className="max-w-4xl mb-24 animate-[fadeInUp_0.8s_ease-out_both]">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
              LETS <span className="text-zinc-700">COLLABORATE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
              Have a revolutionary idea or a complex project? I specialize in turning 
              <span className="text-white"> ambitious visions into digital reality</span>. 
              Drop a line and let’s start the conversation.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Form: Ultra-Clean & Interactive */}
            <div className="lg:col-span-7 animate-[fadeInUp_1s_ease-out_200ms_both]">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" name="name" required placeholder=" " className={inputClasses} />
                    <label className={labelClasses}>What's your name?</label>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </div>
                  <div className="relative group">
                    <input type="email" name="email" required placeholder=" " className={inputClasses} />
                    <label className={labelClasses}>Your Email Address</label>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>

                {/* <div className="relative group animate-[fadeInUp_1s_ease-out_400ms_both]">
                  <input type="text" name="subject" placeholder=" " className={inputClasses} />
                  <label className={labelClasses}>Project Subject</label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </div> */}

                <div className="relative group animate-[fadeInUp_1s_ease-out_500ms_both]">
                  <textarea name="message" required placeholder=" " className={`${inputClasses} h-32 resize-none`} />
                  <label className={labelClasses}>Tell me about your goals</label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="pt-8 animate-[fadeInUp_1s_ease-out_600ms_both]">
                  <button type="submit" className="group relative inline-flex items-center gap-4 text-2xl font-bold tracking-tight">
                    <span className="relative">
                      SEND MESSAGE
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </span>
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                  {msg && <p className="mt-8 text-zinc-500 font-mono text-sm uppercase tracking-tighter animate-pulse">{msg}</p>}
                </div>
              </form>
            </div>

            {/* Sidebar: Minimalist & Professional */}
            <div className="lg:col-span-5 space-y-20 lg:pl-16">
              <div className="animate-[fadeInUp_1s_ease-out_400ms_both]">
                <h3 className="text-zinc-600 text-xs font-bold uppercase tracking-[0.4em] mb-8">Contacts</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@agi-agency.com" className="block text-3xl font-light hover:text-zinc-400 transition-colors underline-offset-8 hover:underline decoration-1">saadmirzapak@gmail.com</a>
                  <a href="tel:+922134567890" className="block text-3xl font-light hover:text-zinc-400 transition-colors">+92 3010544620</a>
                </div>
              </div>

              <div className="animate-[fadeInUp_1s_ease-out_600ms_both]">
                <h3 className="text-zinc-600 text-xs font-bold uppercase tracking-[0.4em] mb-8">Availability</h3>
                <div className="flex items-center gap-3 text-white">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-lg font-medium">Currently accepting new projects</p>
                </div>
              </div>

              <div className="animate-[fadeInUp_1s_ease-out_800ms_both]">
                <h3 className="text-zinc-600 text-xs font-bold uppercase tracking-[0.4em] mb-8">Socials</h3>
                <div className="flex gap-8 text-lg font-medium">
                  <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-zinc-400 transition-colors">GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
