


// import "../styles/navbar.css";

// const Navbar = ({ setActiveSection ,toggleTheme}) => {
//   return (
//     <nav className="navbar">
//       <img src="/kadloy2.jpeg" alt="Logo" className="logo" />

//       <div className="nav-links">
//         <button onClick={() => setActiveSection("home")}>Home</button>
//         <button onClick={() => setActiveSection("about")}>About</button>
//         <button onClick={() => setActiveSection("projects")}>Projects</button>
//         <button onClick={() => setActiveSection("contact")}>Contact</button>


//         <button className="theme-btn" onClick={toggleTheme}>

//           🌙
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
      <img src="/kadloy2.jpeg" alt="Logo" className="logo" />

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
