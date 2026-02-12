
import projects from "../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="section">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a href={project.github} target="_blank">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
