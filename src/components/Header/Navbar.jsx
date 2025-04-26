import { Search, HamburgerMenu, XMark } from "../Icons/";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="flex justify-between mt-4 px-16 text-[14px]">
      <p className="font-semibold text-lg">EAT <span className="text-[#d9a800] font-bold">FRUITS</span></p>
      
      {/* Menú para pantallas grandes (>= 850px) */}
      <ul className="hidden md:flex gap-8 items-center">
        <li><a href="#" className="hover:text-mustard font-semibold">Home</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Healthfacts</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">About</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Contact</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Info</a></li>
      </ul>
      
      {/* Menú móvil (aparece cuando isMenuOpen es true) */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-white py-4 px-16 flex flex-col gap-4 md:hidden">
          <li><a href="#" className="hover:text-mustard font-semibold">Home</a></li>
          <li><a href="#" className="hover:text-mustard font-semibold">Healthfacts</a></li>
          <li><a href="#" className="hover:text-mustard font-semibold">About</a></li>
          <li><a href="#" className="hover:text-mustard font-semibold">Contact</a></li>
          <li><a href="#" className="hover:text-mustard font-semibold">Info</a></li>
        </ul>
      )}
      
      <div className="flex gap-8 items-center">
        <Search />
        <div 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          {isMenuOpen ? <XMark /> : <HamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;