import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Smart Shopper',
    subtitle: 'E-Commerce Website',
    description: 'A full-featured e-commerce website with product listing, cart management, and user authentication.',
    features: [
      'Product listing with dynamic cart updates',
      'Cart management & product removal',
      'Login/Registration validation',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/K-Sindhu17',
    live: 'https://k-sindhu17.github.io/Smart-Shopper-Hub/',
  },
  {
    title: 'Pathfinding Visualizer',
    subtitle: 'Algorithm Visualization',
    description: 'Interactive tool that visualizes shortest path algorithms on a grid, with obstacle placement.',
    features: [
      'Shortest path algorithm visualization',
      'Obstacle placement on grid',
      'Real-time path calculation',
    ],
    tech: ['JavaScript'],
    github: 'https://github.com/K-Sindhu17',
    live: 'https://k-sindhu17.github.io/PathFinding-Visualiser/',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Things I've built</p>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-header">
                <div className="project-folder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>
              <ul className="project-features">
                {project.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
