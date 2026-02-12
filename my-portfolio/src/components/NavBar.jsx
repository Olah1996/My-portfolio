import navimg from "../assets/kadloy2.png"
import { useState } from "react";
import "../styles/navbar.css";


const Navbar = ({ setActiveSection, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // close menu on click
  };

  return (
    <nav className="navbar">
      <img src={navimg} alt="Logo" className="logo" />

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <button onClick={() => handleNavClick("home")}>Home</button>
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>

        <button className="theme-btn" onClick={toggleTheme}>🌙</button>
      </div>
    </nav>
  );
};

export default Navbar;
