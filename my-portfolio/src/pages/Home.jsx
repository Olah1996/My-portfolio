



 import { useState, useRef, useEffect } from "react";

 import Navbar from "../components/NavBar";
 import Hero from "../components/Hero";
 import About from "../components/About";
 import FeaturedProject from "../components/FeaturedProject";
 import Contact from "../components/Contact";
 import Footer from "../components/Footer";
 import SkillsPreview from "../components/SkillsPreview";
 import ContactForm from "../components/contactForm";

 

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const contactRef = useRef(null);
  const ProjectRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () =>{
    ProjectRef.current?.scrollIntoView({behavior:"smooth"});

  }

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggleTheme={() => setDarkMode(!darkMode)}
      />

      {/* HOME PAGE */}
      {activeSection === "home" && (
        <>
          <Hero
            openProjects={scrollToProject}
            openContact={scrollToContact}
          />

          {/* <FeaturedProject />  */}
          <div ref={ProjectRef}>
            <FeaturedProject/>
          </div>

          <div>
            <SkillsPreview/>
          </div>

          <div ref={contactRef}>
            <Contact />
            <ContactForm/>
          </div>

          

          
        </>
      )}

      {/* OTHER SECTIONS */}
      {activeSection === "about" && <About />}
      {activeSection === "projects" && <FeaturedProject />}
      {activeSection === "contact" && <Contact />}

      <Footer />
    </>
  );
};

export default Home;



