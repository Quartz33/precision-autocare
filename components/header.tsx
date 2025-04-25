"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./Navlink";
import img from '../images/Logo.png'
import Image from "next/image";

function MobileNavigation({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
  return (
    <div className={`fixed inset-0 z-50 pr-6 bg-ash bg-opacity-90 flex flex-col items-center gap-4 justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
      <button onClick={toggleMenu} className="absolute right-6 text-white">
        <X size={32} />
      </button>
      <NavLink href="/" className="text-3xl" >Home</NavLink>
      <NavLink href="#services" className="text-3xl" >Services</NavLink>
      <NavLink href="#testimonials" className="text-3xl" >Reviews</NavLink>
      <button
        className="bg-hero-btn hover:bg-blue-700 hover:scale-105 transition-all duration-200 drop-shadow-2xl text-white font-sans py-2 px-2 rounded-4xl border border-black"

      >
        Book an Appointment
      </button>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-header">
      <nav className="relative flex items-center lg:justify-center justify-end the-header px-6 md:px-12 ">
        {/* Logo on the Left */}
        <div className="flex absolute left-3 md:left-12 pt-20">
          <Image src={img} width={185} height={185} alt="CC Logo" />
        </div>

        {/* Desktop Nav in Center (Hidden on Mobile) */}
        <div className="hidden md:flex gap-x-6 lg:gap-x-8 text-2xl md:text-lg lg:text-3xl xl:text-4xlxl">
          <NavLink href="/" className="xl:text-3xl md:text-2xl" >Home</NavLink>
          <NavLink href="#about" className="xl:text-3xl md:text-2xl" >About Me</NavLink>
          <NavLink href="#services" className="xl:text-3xl md:text-2xl" >Services</NavLink>
          <NavLink href="#incentives" className="xl:text-3xl md:text-2xl" >Why Choose me?</NavLink>
          <NavLink href="#testimonials" className="xl:text-3xl md:text-2xl" >Testimonials</NavLink>
        </div>

        {/* Mobile Menu Button on the Right */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <Menu size={48} />
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <MobileNavigation isOpen={menuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}
