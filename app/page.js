"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
const companyNames = [
  'Company',
  'Company 2',
  'Company 3',
]

  return (
    <div className=' min-h-screen bg-[#282C33] pt-6 '>
      <nav className='flex text-white justify-around' >
        <div className='text-[30px]'> SAAD </div>
        <ul className='flex text-[18px] gap-5'>
          <li><a href="/"><span className='text-[#C778DD]'>#</span>Home</a></li>
          <li><a href="/"><span className='text-[#C778DD]'>#</span>About</a></li>
          <li><a href="/"><span className='text-[#C778DD]'>#</span>contact</a></li>
          <li><a href="/"><span className='text-[#C778DD]'>#</span>Works</a></li>
          <li><a href="/">EN</a></li>
        </ul>
      </nav>


      <main>
        <section className='  relative font-fira  '>
          <div className='pt-[60px]'>
            <h2 className='font-semibold text-white text-[2rem] ml-[224px] mt-[100px]'>Hi, I am</h2>
            <h2 className='font-semibold tracking-[0.06em] leading-[50px] text-white text-[2.7rem] ml-[224px] text-2xl'>
              <span className="block ">Saad Mirza a<span className='text-[#C778DD]'> web designer</span></span>
              <span className="block">and a Professional</span>
              <span className="block text-[#C778DD] ">front-end developer</span>
            </h2>
            <p className='  tracking-[0.07em] text-[#ABB2BF] w-[463px] mt-[10px] text-[1rem] font-fira text-base ml-[224px] leading-[25px]'>He crafts responsive websites where technologies<br />meet creativity.</p>
            <button className="relative cursor-pointer overflow-hidden border text-white border-[1px] ml-[224px] mt-[35px] tracking-[0.03em] border-[#C778DD] py-[6px] px-[27px] group">
              <span className="absolute inset-0 bg-[#C778DD] transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Contact me !!</span>
            </button>


          </div>
          <div>
            <Image
              src="/man.png"
              alt="Descriptive alt text for SEO"
              width={400}  // Required (optimizes performance)
              height={200} // Required (optimizes performance)
              className="your-styles absolute top-[170px] right-[20px]"
              priority={true} // Only for above-the-fold images (optional)
            />

            <div className='w-[360px] text-[#ABB2BF] h-[30px] border border-[#ABB2BF] flex items-center justify-start absolute top-[515px] right-[55px] '><span className="inline-block w-4 h-4 bg-[#C778DD] ml-[10px] mr-3"> </span> Currently working with {companyNames[0]} </div>
          </div>
        </section>

<section className=' relative'>
  <div className='border  mx-auto mt-[300px] border-white w-[900px] h-[100px] flex content-center item-center  '> 
    <h1 className='text-center flex mx-auto font-bold text-[2.2rem] text-white self-center'>With great power comes great electricity bill</h1>
    </div> 
   </section>





      </main>
    </div>
  );
}