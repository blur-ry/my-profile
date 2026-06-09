import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Vortex-7 Engine',
    description: 'A high-performance concurrent processing engine written in Rust, achieving 40% faster execution for large-scale data pipelines.',
    label: 'Featured',
    link: '#',
  },
  {
    title: 'Blood Donation Management System (BDMS)',
    description: 'A full-stack platform to manage donors, blood inventories, and donation events with scheduling and reporting features.',
    label: 'Healthcare',
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
  {
    title: 'Donor Connect',
    description: 'A donor-facing portal for scheduling donations, viewing eligibility, and tracking impact.',
    label: 'Platform',
    link: '#',
  },
  {
    title: 'Community Health Dashboard',
    description: 'Visual analytics for local health metrics, blood stock levels, and donation trends.',
    label: 'Analytics',
    link: '#',
  },
];

export function ProjectsSection() {
  const [featured, ...others] = projects;

  return (
    <section className="section" id="projects">
      <div className="section-headline page-shell">
        <p className="section-subtitle">WHERE CODE MEETS METAL</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="project-grid page-shell">
        {featured && (
          <div className="project-feature-card">
            <span className="panel-label">{featured.label || 'Featured'}</span>
            <h3 className="project-title">{featured.title}</h3>
            <p className="section-copy">{featured.description}</p>
            <div className="project-actions">
              <a className="button" href={featured.link || '#'}>Source</a>
              <a className="button button-secondary" href={featured.link || '#'}>Live Demo</a>
            </div>
          </div>
        )}

        {others.map((p) => (
          <div key={p.title} className="project-small-card">
            <span className="panel-label">{p.label}</span>
            <h4>{p.title}</h4>
            <p className="section-copy">{p.description}</p>
            <a href={p.link || '#'} className="nav-link">View GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
