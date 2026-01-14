import React from 'react';

export default function DownloadButton() {
  const handleclick= () => {
window.open('/cv 2.pdf','_blank')
  }
  return (
    <button onClick={handleclick} className="cursor-pointer flex justify-between backdrop-blur-xl bg-black/10 px-4 py-3 border border-white/10 rounded-sm text-white text-1xl font-body tracking-wider shadow-xl  hover:scale-105 duration-500 hover:ring-1 w-50 transition-all  ">
      Download Resume
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 animate-bounce">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </button>
  );
}


