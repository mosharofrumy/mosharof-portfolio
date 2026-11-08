import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/#home" className="brand">
          <span className="brand-icon">
            <span> M </span>
          </span>
          <span>
            MOSHAROF<span className="brand-dot">.</span>
          </span>
        </Link>
        <p>Building thoughtful digital experiences, one line at a time.</p>
        <div className="socials">
          <a
            href="https://github.com/mosharofrumy"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/hmmosharof/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a href="mailto:mosharofrumy@gmail.com" aria-label="Email">
            <Mail />
          </a>
          <a href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} Mosharof Hossain. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
