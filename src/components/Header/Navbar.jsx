import { Search, HamburgerMenu, XMark } from "../Icons/";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <p className="navbar-brand">EAT <span className="navbar-brand-highlight">FRUITS</span></p>
      
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">Healthfacts</a></li>
        <li><a href="#" className="navbar-link">About</a></li>
        <li><a href="#" className="navbar-link">Contact</a></li>
        <li><a href="#" className="navbar-link">Info</a></li>
      </ul>
      
      {isMenuOpen && (
        <ul className="navbar-mobile-menu">
          <li><a href="#" className="font-semibold">Home</a></li>
          <li><a href="#" className="font-semibold">Healthfacts</a></li>
          <li><a href="#" className="font-semibold">About</a></li>
          <li><a href="#" className="font-semibold">Contact</a></li>
          <li><a href="#" className="font-semibold">Info</a></li>
        </ul>
      )}
      
      <div className="navbar-icons-container">
        <Search />
        <div 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="navbar-toggle"
          >
          {isMenuOpen ? <XMark /> : <HamburgerMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;