import Link from 'next/link';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bar">
        <div className="footer-inner">
          <Link href="/" className="brand footer-brand">
            Carl Anderson D. Saniel
          </Link>

          <div className="footer-links">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          <p className="footer-note">© {new Date().getFullYear()} Carl Anderson Saniel. Built for high performance.</p>
        </div>
      </div>
    </footer>
  );
}
