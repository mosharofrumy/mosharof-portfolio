"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link href="/#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">
            <Code2 size={19} />
          </span>
          <span>
            MOSHAROF<span className="brand-dot">.</span>
          </span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <a className="nav-cta" href="mailto:mosharofrumy@gmail.com">
          Let&apos;s talk <span>↗</span>
        </a>
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="mailto:mosharofrumy@gmail.com">Let&apos;s talk ↗</a>
        </div>
      )}
    </header>
  );
}
