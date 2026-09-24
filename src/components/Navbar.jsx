import { Moon, Sun } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JCE</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="theme-button">
        <Moon size={18} />
      </button>
    </nav>
  );
}

export default Navbar;