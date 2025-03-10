"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Navbar() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="bg-[#ffffff] text-black h-[4.7rem] flex items-center justify-between px-4 md:px-6 lg:px-8 fixed w-full z-10">
        <div className="font-sans text-[1.5em] sm:text-[1.8em] md:text-[2em] font-bold">
          <span className="text-[#00afb9]">Cac</span><span className="text-[#ef233c]">he</span>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#1d3557] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-2 lg:gap-4">
          <button className="text-[#1d3557] text-[0.9em] lg:text-[1.2em] font-mono px-3 lg:px-4 rounded h-[2.5rem] lg:h-[3rem] w-[6rem] lg:w-[8rem] cursor-pointer">
            API
          </button>
          <button className="bg-[#1d3557] hover:bg-[#457b9d] text-white font-mono text-[0.9em] lg:text-[1.2em] px-3 lg:px-4 rounded-[2.2rem] h-[2.5rem] lg:h-[3rem] w-[6rem] lg:w-[8rem] cursor-pointer"
            onClick={() => router.push("/upload")}
          >
            Upload
          </button>
          <button className="hover:bg-[#ef233c] hover:text-white text-[#ef233c] font-mono text-[0.9em] lg:text-[1.2em] px-3 lg:px-4 rounded-[2.2rem] h-[2.5rem] lg:h-[3rem] w-[6rem] lg:w-[8rem] cursor-pointer">
            Login
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white w-full shadow-md md:hidden">
          <div className="flex flex-col py-2 px-4">
            <button className="text-[#1d3557] font-mono py-2 text-left">
              API
            </button>
            <button className="text-[#1d3557] font-mono py-2 text-left"
              onClick={() => router.push("/upload")}
            >
              Upload
            </button>
            <button className="text-[#ef233c] font-mono py-2 text-left">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}
