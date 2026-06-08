import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner page-shell">
        <Link href="/" className="brand">
          CARL ANDERSON SANIEL
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-secondary nav-button">
          Resume
        </a>
      </div>
    </header>
  );
}
