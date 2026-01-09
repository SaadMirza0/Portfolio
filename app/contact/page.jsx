
import DotGrid from "@/component/animations/DotGrid"
import Navbar from "@/component/Navbar"
export default function Contact() {

return (
     <div className="relative w-screen h-screen  bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#020617"
          activeColor="#262661"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
         <nav className="absolute z-40"  >
              <Navbar />
              </nav>


<div className=" absolute z-10 mt-3 w-full"> 

<section className="text-zinc-400 body-font relative min-h-screen flex items-center justify-center">
  <div className="container px-5 py-24 mx-auto">
    {/* Header with your Shiny Text style logic */}
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
        Get In Touch
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-zinc-500">
        Have a project in mind? Let's build something extraordinary together.
      </p>
    </div>

    {/* Form Container: Set to lg:w-1/2 for Half Width */}
    <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white/2 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      

      
      <div className="flex flex-wrap -m-2 relative z-10">
        {/* Name Input */}
        <div className="p-2 w-1/2">
          <div className="relative group">
            <label htmlFor="name" className="leading-7 text-sm text-zinc-500 group-focus-within:text-cyan-400 transition-colors">Name</label>
            <input type="text" id="name" name="name" 
              className="w-full bg-white/5 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:bg-white/8 focus:ring-2 focus:ring-cyan-500/20 text-base outline-none text-white py-2 px-4 leading-8 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* Email Input */}
        <div className="p-2 w-1/2">
          <div className="relative group">
            <label htmlFor="email" className="leading-7 text-sm text-zinc-500 group-focus-within:text-cyan-400 transition-colors">Email</label>
            <input type="email" id="email" name="email" 
              className="w-full bg-white/5 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:bg-white/8 focus:ring-2 focus:ring-cyan-500/20 text-base outline-none text-white py-2 px-4 leading-8 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="p-2 w-full">
          <div className="relative group">
            <label htmlFor="message" className="leading-7 text-sm text-zinc-500 group-focus-within:text-cyan-400 transition-colors">Message</label>
            <textarea id="message" name="message" 
              className="w-full bg-white/5 rounded-xl border border-white/10 focus:border-cyan-500/50 focus:bg-white/8 focus:ring-2 focus:ring-cyan-500/20 h-32 text-base outline-none text-white py-2 px-4 resize-none leading-6 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        {/* Themed Submit Button */}
        <div className="p-2 w-full mt-4">
          <button className="flex mx-auto group relative items-center justify-center px-10 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 active:scale-95 overflow-hidden">
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
        </div>


      </div>
    </div>
  </div>
</section>


</div>


      </div>
)

}