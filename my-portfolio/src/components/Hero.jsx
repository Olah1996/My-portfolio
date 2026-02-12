

import "../styles/hero.css";

const Hero = ({ openProjects, openContact }) => {
  return (
    <section className="hero">
      <h1>Hi, I'm Adegibile Oladimeji Kazeem</h1>
      <p>Full-Stack Web Developer</p>

      <div className="hero-buttons">
        <button onClick={openProjects}>View My Projects</button>
        <button className="secondary" onClick={openContact}>
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;


