import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Globe2,
  Layers,
  Mail,
  Phone,
  Terminal,
  MonitorSmartphone,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
const skills = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MongoDB Atlas",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Terminal,
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Vercel",
      "AI-Enhanced Development",
    ],
  },
];
export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" /> OPEN TO WEB DEVELOPMENT OPPORTUNITIES
            </div>
            <p className="hero-kicker">MOSHAROF HOSSAIN · WEB DEVELOPER · MERN STACK</p>
            <h1>
              I turn ideas into
              <br />
              <span>useful web products.</span>
            </h1>
            <p className="hero-desc">
              From a clear first click to a dependable database, I build
              thoughtful web experiences that solve real problems and feel
              effortless to use.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/resume/resume.pdf"
                download="Mosharof-Hossain-Resume.pdf"
              >
                Get my resume <ArrowDown size={17} />
              </a>
              <a className="btn btn-outline" href="#projects">
                See what I build <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/mosharofrumy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/hmmosharof/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="mailto:mosharofrumy@gmail.com">
                Email <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-workspace">
              <Image
                src="/images/coding-hero.svg"
                alt="A code editor and live website preview"
                fill
                priority
                sizes="(max-width: 700px) 90vw, 500px"
              />
            </div>
            <div className="hero-code-badge" aria-hidden="true">
              <span>&lt;/&gt;</span> DESIGN <i /> CODE <i /> DEPLOY
            </div>
          </div>
        </div>
        <div className="hero-proof">
          <div className="container hero-proof-inner">
            <span>THOUGHTFUL INTERFACES</span>
            <i />
            <span>FULL-STACK FOUNDATIONS</span>
            <i />
            <span>BUILT TO BE USEFUL</span>
          </div>
        </div>
      </section>
      <section id="about" className="section-pad about-section">
        <div className="container about-layout">
          <div className="about-visual">
            <div className="about-photo">
              <Image
                src="/images/20_casual_denim_thoughtful.png"
                alt="Mosharof Hossain thinking through a problem"
                fill
                sizes="(max-width: 700px) 86vw, 430px"
              />
            </div>
            <div className="about-photo-detail">
              <Image
                src="/images/06_informal_cream_outfit_front.png"
                alt="Mosharof Hossain in a cream traditional outfit"
                fill
                sizes="(max-width: 700px) 38vw, 175px"
              />
            </div>
            <span className="about-photo-index">THE PERSON BEHIND THE CODE · 01</span>
            <div className="about-stamp">
              <span>LEARN</span>
              <b>MAKE</b>
              <span>IMPROVE</span>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="eyebrow">A PRACTICAL MINDSET. A DEVELOPER&apos;S CRAFT.</p>
              <h2 className="about-title">
                Good code matters.
                <br />
                <span>So does the person using it.</span>
              </h2>
              <p className="lead-text">
                I build with the person on the other side of the screen in mind.
              </p>
              <p>
                My work brings together responsive interfaces, maintainable
                React and Next.js code, and back-end fundamentals with Node.js,
                Express, and MongoDB. I care about how a product feels to use
                and how clearly it works behind the scenes.
              </p>
            </div>
            <div className="about-detail">
              <p>
                Before web development, I worked across documentation,
                reporting, banking operations, and software management. That
                experience taught me to respect the details, understand the
                workflow, and finish the work—not just make it look done.
              </p>
              <p>
                Now I bring that same care to every build: ask better
                questions, break down the problem, and keep improving the
                result.
              </p>
              <div className="about-principles">
                <span>01 <b>Start with the user</b></span>
                <span>02 <b>Build with intention</b></span>
                <span>03 <b>Refine every detail</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">THE TOOLS BEHIND THE EXPERIENCE</p>
            <h2>From the first click <span>to the data layer.</span></h2>
            <p className="section-sub">
              A practical full-stack toolkit, chosen to make products fast,
              clear, and dependable.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-title">
                  <span>
                    <group.icon size={20} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="section-pad section-light">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">THE FOUNDATION</p>
            <h2>Business knowledge. <span>Technology in practice.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="eyebrow">DIPLOMA</p>
                <h3>Diploma in Business Information Technology</h3>
                <p>Daffodil International Academy</p>
              </div>
              <span className="timeline-date">Completed</span>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE THAT SHAPES HOW I BUILD</p>
            <h2>Business operations taught me <span>to see the details.</span></h2>
            <p className="section-sub">
              Years of hands-on operational work gave me a practical view of
              how people, processes, and software fit together.
            </p>
          </div>
          <article className="experience-card">
            <div className="experience-mark">
              <Layers size={25} />
            </div>
            <div className="experience-main">
              <p className="eyebrow">FEBRUARY 2018 — PRESENT</p>
              <h3>Touch Trade Int.</h3>
              <p className="experience-role">
                Documentation · Reporting · Banking · Software Management
              </p>
              <ul>
                <li>
                  Manage documentation and reporting with accuracy and
                  consistency.
                </li>
                <li>
                  Coordinate banking documentation and day-to-day
                  administrative workflows.
                </li>
                <li>
                  Support software management and help business operations
                  run smoothly.
                </li>
              </ul>
            </div>
            <span className="experience-badge">Professional Experience</span>
          </article>
        </div>
      </section>
      <section id="projects" className="section-pad projects-section">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">SELECTED BUILDS · REAL PROBLEMS, PRACTICAL THINKING</p>
              <h2>Useful products. <span>Built with purpose.</span></h2>
            </div>
            <p className="section-sub">
              Three projects that put thoughtful interfaces and full-stack
              problem-solving into practice.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section-pad contact-section">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">HAVE A CHALLENGE WORTH SOLVING?</p>
            <h2>
              Let&apos;s make
              <br />
              <span>something useful.</span>
            </h2>
            <p className="contact-desc">
              I&apos;m ready to bring curiosity, care, and a builder&apos;s
              mindset to a junior web development role or a thoughtful
              collaboration.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:mosharofrumy@gmail.com">
              <span>
                <Mail />
              </span>
              <div>
                <small>EMAIL ME</small>
                <b>mosharofrumy@gmail.com</b>
              </div>
              <ArrowUpRight />
            </a>
            <a href="tel:01930184182">
              <span>
                <Phone />
              </span>
              <div>
                <small>CALL ME</small>
                <b>01930184182</b>
              </div>
              <ArrowUpRight />
            </a>
            <a
              href="https://wa.me/8801930184182"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Globe2 />
              </span>
              <div>
                <small>WHATSAPP</small>
                <b>Message me directly</b>
              </div>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
