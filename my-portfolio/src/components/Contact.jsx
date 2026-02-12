import "../styles/project.css";


const Contact = () => {
  return (
    <section className="section projects">
      <h2>Contact Me</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Email</h3>

          <a
            href="mailto:kadloyentreprise2801@gmail.com"
            className="project-btn"
          >
            Send Email →
          </a>
        </div>

        <div className="project-card">
          <h3>GitHub</h3>

          <a
            href="https://github.com/Olah1996"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>WHATSAPP</h3>

          <a href="https://wa.me/message/RQRDMS7X7OJRG1"
          className="project-btn"
          >
            Hire Me
          </a>
        </div>
      </div>

     
    </section>
  );
};

export default Contact;



