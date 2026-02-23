  
"use client"
import { useState } from "react"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer" 
import {SaveMessage} from "@/actions"
export default function Contact() {
const [msg, setmsg] = useState(" ")

async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await SaveMessage(data); // Call your action directly
    
    if (res.success) {
      setmsg("Message sent successfully!");
      e.target.reset(); 
    } else {
      setmsg("Error sending data.");
    }
  }

return (
    <div className="absolute top-0 z-[-2]  h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  <div className="relative w-screen h-screen">

         <nav className="absolute z-40"  >
              <Navbar />
              </nav>


<div className=" absolute z-10 mt-3 w-full"> 





<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
  

  <div className="container px-5 mx-auto relative z-10 animate-[fadeInUp_1s_ease-out_both]">

    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
        Get In Touch
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-zinc-500 font-light">
        Currently seeking new opportunities and creative partnerships.
      </p>
    </div>


    <div className="lg:w-[600px] md:w-2/3 mx-auto relative group/card">
      
 
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-3xl blur opacity-0 group-hover/card:opacity-100 transition duration-500"></div>

      <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -m-2">

          <div className="p-2 w-full md:w-1/2 animate-[fadeInUp_1s_ease-out_200ms_both]">
            <div className="relative group/input">
              <input 
                type="text" 
                name="username" 
       
                placeholder=" "
                className="peer w-full bg-white/5 rounded-xl border border-white/10 focus:border-white/50 focus:bg-white/10 focus:ring-4 focus:ring-white/5 text-base outline-none text-white py-3 px-4 transition-all duration-300 placeholder-transparent" 
              />
              <label htmlFor="name" className="absolute left-4 top-3 text-zinc-500 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/80 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                Your Name
              </label>
            </div>
          </div>

  
          <div className="p-2 w-full md:w-1/2 animate-[fadeInUp_1s_ease-out_400ms_both]">
            <div className="relative group/input">
              <input 
                type="email" 
                name="email" 
       
                placeholder=" "
                className="peer w-full bg-white/5 rounded-xl border border-white/10 focus:border-white/50 focus:bg-white/10 focus:ring-4 focus:ring-white/5 text-base outline-none text-white py-3 px-4 transition-all duration-300 placeholder-transparent" 
              />
              <label htmlFor="email" className="absolute left-4 top-3 text-zinc-500 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/80 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:not(:placeholder-shown)]:text-xs">
                Email Address
              </label>
            </div>
          </div>

          <div className="p-2 w-full animate-[fadeInUp_1s_ease-out_600ms_both]">
            <div className="relative group/input">
              <textarea 
                name="message" 

                placeholder=" "
                className="peer w-full bg-white/5 rounded-xl border border-white/10 focus:border-white/50 focus:bg-white/10 focus:ring-4 focus:ring-white/5 h-32 text-base outline-none text-white py-3 px-4 resize-none transition-all duration-300 placeholder-transparent"
              />
              <label htmlFor="message" className="absolute left-4 top-3 text-zinc-500 text-base transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white/80 peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                Tell me about your project
              </label>
            </div>
          </div>


          <div className="p-2 w-full mt-6 animate-[fadeInUp_1s_ease-out_800ms_both]">
            <button 
              type="submit"
              className="w-full relative group/btn overflow-hidden rounded-xl py-3 bg-white text-black font-semibold transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-white/20"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
          </div>
{msg && <p className="mt-4 font-bold text-center">{msg}</p>}
        </div>
        </form>
      </div>
    </div>
  </div>
</section>




<Footer/>
</div>
</div>
</div>


 
)

}