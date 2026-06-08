import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Vortex-7 Engine',
    description: 'A high-performance concurrent processing engine written in Rust, achieving 40% faster execution for large-scale data pipelines.',
    label: 'Featured',
    link: '#',
  },
  {
    title: 'Mesh Protocol',
    description: 'A decentralized peer-to-peer communication layer for IoT devices.',
    label: 'System',
    link: '#',
  },
  {
    title: 'Coreshell AI',
    description: 'Integrated terminal UI assistant for DevOps automation workflows.',
    label: 'Utility',
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-headline page-shell">
        <p className="section-subtitle">WHERE CODE MEETS METAL</p>
        <h2 className="section-title">Project Foundry</h2>
      </div>

      <div className="project-grid page-shell">
        <div className="project-feature-card">
          <span className="panel-label">Featured</span>
          <h3 className="project-title">Vortex-7 Engine</h3>
          <p className="section-copy">
            A high-performance concurrent processing engine written in Rust, achieving 40% faster execution for large-scale data pipelines compared to legacy systems.
          </p>
          <div className="project-actions">
            <a className="button" href="#">Source</a>
            <a className="button button-secondary" href="#">Live Demo</a>
          </div>
        </div>

        <div className="project-small-card">
          <span className="panel-label">System</span>
          <h4>Mesh Protocol</h4>
          <p className="section-copy">A decentralized peer-to-peer communication layer for IoT devices.</p>
          <a href="#" className="nav-link">View GitHub →</a>
        </div>

        <div className="project-small-card">
          <span className="panel-label">Utility</span>
          <h4>Coreshell AI</h4>
          <p className="section-copy">Integrated terminal UI assistant for DevOps automation workflows.</p>
          <a href="#" className="nav-link">View GitHub →</a>
        </div>
      </div>
    </section>
  );
}
