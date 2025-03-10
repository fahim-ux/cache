"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  return (
    <>
    <div className="bg-[url('/opoy7.jpg')] bg-cover bg-center h-screen w-screen">
      {/* <Navbar /> */}
    </div>
    </>
  );
}
