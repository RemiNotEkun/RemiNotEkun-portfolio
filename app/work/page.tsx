import Navbar from "../components/Navbar";
import { projects } from "../../lib/data";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="work-page">
        <div className="work-header">
          <h1 className="page-title">Recent <em>Work</em></h1>
        </div>

        <div className="work-list">
          {projects.map((project, i) => (
            <div key={project.id} className="work-item">

              <div className="work-item-meta">
                <span className="work-item-num">0{i + 1}</span>
                <span className="work-item-category">{project.tags?.[0]}</span>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-item-image-wrap"
              >
                <div className="work-item-placeholder">
                  <span>{project.name}</span>
                </div>
              </a>

              <div className="work-item-footer">
                <div className="work-item-text">
                  <h2 className="work-item-title">{project.name}</h2>
                  <p className="work-item-desc">{project.description}</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-view-link"
                >
                  View Projects
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>
      </main>
    </>
  );
}