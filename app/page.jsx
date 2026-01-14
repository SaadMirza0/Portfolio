import DotGrid from "@/component/animations/DotGrid";
import Navbar from "@/component/Navbar";
import SplitText from "@/component/animations/SplitText";
import Button from "@/component/smallcom/Buttons";
import Footer from "@/component/Footer" 
export default function Home() {
  return (
 
<div className="absolute top-0 z-[-2]  h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
  {/* Navbar */}
  <nav className="absolute z-40 w-full">
    <Navbar />
  </nav>

  <div className="relative z-10  h-full w-full flex items-center">
  
    <div className="flex flex-col gap-4 md:gap-6 px-6 md:px-16 lg:px-14 text-white w-full">
      
  
      <h1 className="text-5xl md:text-6xl lg:text-7xl  animate-[fade-in-bottom_2s_cubic-bezier(0.39,0.575,0.565,1)_both] font-heading text-[#FFFFFF] font-medium tracking-[0.02em]">
        <span>S</span>aad <span>M</span>irza
      </h1>

     
      <h2 className="text-xl md:text-2xl lg:text-2xl  animate-[fade-in-bottom_2s_cubic-bezier(0.39,0.575,0.565,1)_1s_both] font-body text-[#FFFFFF] font-medium">
        Full-Stack Developer · UX-Focused Designer
      </h2>

  
      <div className="text-base md:text-lg lg:text-[1rem]  animate-[fade-in-bottom_2s_cubic-bezier(0.39,0.575,0.565,1)_1.1s_both] font-light flex flex-col text-[#FFFFFF] font-body max-w-2xl ">
        <p>
          I build clean, scalable web experiences with a strong focus on UX,{" "}
          <br className="hidden md:block" />
          performance, and modern design systems.
        </p>
      </div>

      {/* Button */}
      <div className="slide-in-left flex mt-2">
        <Button />
      </div>
    </div>
  </div>

  {/* right div */}
  <div className="absolute font-body text-sm md:text-xl lg:text-2xl right-6 md:right-10 bottom-10 md:bottom-16 flex justify-end text-white opacity-50 md:opacity-100">
    Minimalist is not Emptiness
  </div>
<Footer/>
</div>
  );
}
