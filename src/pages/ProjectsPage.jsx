import { Link } from "react-router-dom";
import { projectItems } from "../content";

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="page-title-block">
        <p className="eyebrow">Builds</p>
        <h1 className="page-title">Projects</h1>
      </div>
      <div className="project-grid">
        {projectItems.map((project) => (
          <article key={project.title} className="project-card">
            <img className="logo" src={project.image} alt={`${project.title} icon`} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="project-meta">{project.date}</p>
            <p className="project-tech">{project.tech}</p>
            <div className="project-actions">
              <a
                className="button-link subtle"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
              {project.appPath ? (
                <Link className="button-link" to={project.appPath}>
                  Open App
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
