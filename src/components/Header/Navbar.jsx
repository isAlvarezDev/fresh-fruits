import "../../index.css";
import { Search, HamburgerMenu } from "../Icons/";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-4 px-16">
      <p className="font-semibold">EAT <span className="text-[#d9a800] font-bold">FRUITS</span></p>
      <ul className="flex gap-8">
        <li><a href="#" className="hover:text-mustard font-semibold">Home</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Healthfacts</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">About</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Contact</a></li>
        <li><a href="#" className="hover:text-mustard font-semibold">Info</a></li>
      </ul>
      <div className="flex gap-8 items-center">
        <Search />
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar