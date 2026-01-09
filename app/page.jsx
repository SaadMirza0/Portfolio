"use client"
import DotGrid from "@/component/animations/DotGrid";
import Navbar from "@/component/Navbar";
import SplitText from "@/component/animations/SplitText";
import Button from "@/component/smallcom/Buttons";
// import Robot from "@/component/Robot3d";
import { useState,useEffect } from "react";

export default function Home() {
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {

  const timer = setTimeout(() => {
      setIsLoading(false); // After 2000ms (2 seconds), set loading to false
    }, 1000);
 return () => clearTimeout(timer);

 
},[])
  if (isLoading ) {
    // Show a blank screen or a loader component during the delay
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        {/* loader element will be here*/}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
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
      <nav className=" absolute z-40">
        <Navbar />
      </nav>

      <div className=" relative z-10 h-full w-full flex  items-center">
        <div className=" absolute left-1 mt-50 flex flex-col gap-6  pl-10 text-white">
          <h1 className="text-8xl font-heading text-[#FFFFFF] font-medium letter-spacing-[0.02em]">
            <SplitText
              delay={80}
              duration={1.5}
              className=""
              text={"Saad Mirza"}
              splitType="chars"
            />
          </h1>

          <h2 className="text-3xl font-body text-[#FFFFFF] font-medium">
            <SplitText
              delay={20}
              duration={1.5}
              splitType="lines"
              className="words"
              text={" Full-Stack Developer · UX-Focused Designer"}
            />
          </h2>

          <div className=" text-[1.1rem] font-light flex flex-col text-[#FFFFFF] font-body">
            <SplitText
              delay={80}
              duration={1.3}
              className=" w-212.5 whitespace-pre-line"
              splitType="lines"
              showCallback={false}
              text={`I build clean, scalable web experiences with a strong focus on UX, \nperformance, and modern design systems.`}
            />
        
            
          </div>
          <div className="slide-in-left pr-800 pt-2 font-light">
            <Button />
          </div>
        </div>
      </div>
 
      {/* <div className=" absolute  right-10 bottom-80  flex justify-end    text-white">
        <Robot />
      </div>  */}
    </div>
  );
}
