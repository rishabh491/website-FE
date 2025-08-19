import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import img from "../../assets/Website-Logo.png"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        {/* <h1
          className={`text-xl sm:text-2xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? "text-white" : "text-gray-300"
          }`}
        >
          Ram Vijay
        </h1> */}
        <img src={img} className="h-14 w-60" />

        {/* Desktop Nav */}
       <nav
  className={`hidden md:flex gap-6 lg:gap-10 font-medium tracking-wide transition-colors duration-500 ${
    scrolled ? "text-gray-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" : "text-gray-800"
  }`}
>
  <a href="#services" className="hover:text-indigo-400">Services</a>
  <a href="#portfolio" className="hover:text-indigo-400">Portfolio</a>
  <a href="#about" className="hover:text-indigo-400">About</a>
  <a href="#contact" className="hover:text-indigo-400">Contact</a>
</nav>


        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "text-white" : "text-gray-300"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu color="black" size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-black/90 text-white border-t flex flex-col space-y-4 p-6 shadow-lg backdrop-blur-lg">
          <a href="#services" className="hover:text-indigo-400" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" className="hover:text-indigo-400" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#about" className="hover:text-indigo-400" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="hover:text-indigo-400" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
