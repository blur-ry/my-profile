'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove('nav-menu-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add('nav-menu-open');
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.classList.remove('nav-menu-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const mobileMenu = mounted
    ? createPortal(
        <>
          <button
            type="button"
            className={`nav-sidebar-overlay${open ? ' is-open' : ''}`}
            aria-label="Close navigation menu"
            aria-hidden={!open}
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          />

          <aside
            id="mobile-nav"
            className={`nav-sidebar${open ? ' is-open' : ''}`}
            aria-hidden={!open}
            inert={open ? undefined : true}
          >
            <p className="nav-sidebar-brand">CARL ANDERSON SANIEL</p>

            <nav className="nav-sidebar-links" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-sidebar-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary nav-sidebar-resume"
              onClick={closeMenu}
            >
              Resume
            </a>
          </aside>
        </>,
        document.body,
      )
    : null;

  return (
    <header className={`navbar${open ? ' navbar--menu-open' : ''}`}>
      <div className="navbar-inner page-shell">
        <div className="navbar-top">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="brand-full">CARL ANDERSON SANIEL</span>
            <span className="brand-short">CARL</span>
          </Link>

          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>

        <nav className="nav-links nav-links--desktop" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="button button-secondary nav-button nav-button--desktop"
        >
          Resume
        </a>
      </div>

      {mobileMenu}
    </header>
  );
}
