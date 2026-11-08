import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
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
      <section id="home" className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" /> OPEN TO JUNIOR / ENTRY-LEVEL
              OPPORTUNITIES
            </div>
            <p className="hero-kicker">HELLO, I&apos;M MOSHAROF HOSSAIN</p>
            <h1>
              Building the web,
              <br />
              <span>one idea at a time.</span>
            </h1>
            <p className="hero-desc">
              MERN Stack Web Developer focused on creating responsive,
              accessible, and practical digital experiences with modern
              JavaScript technologies.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/resume.pfd" download>
                Download Resume <ArrowDown size={17} />
              </a>
              <a className="btn btn-outline" href="#projects">
                Explore Projects <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/mosharofrumy"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hmmosharof/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href="mailto:mosharofrumy@gmail.com">
                <Mail size={17} /> Email
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="image-glow" />
            <div className="hero-image">
              <Image
                src="/images/profile-full.png"
                alt="Professional portrait of Mosharof Hossain"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 440px"
              />
            </div>
            <div className="float-card float-code">
              <Code2 size={18} />
              <span>
                Clean code
                <br />
                <b>Thoughtful UI</b>
              </span>
            </div>
            <div className="float-card float-location">
              <MapPin size={16} />
              <span>
                Based in
                <br />
                <b>Bangladesh</b>
              </span>
            </div>
            <div className="hero-image-label">
              WEB DEVELOPER <span>•</span> PROBLEM SOLVER
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </section>
      <section id="about" className="section-pad section-light">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind. <span>Builder&apos;s mindset.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="lead-text">
                I enjoy turning ideas into useful, well-crafted web experiences.
              </p>
              <p>
                I began my programming journey with HTML, CSS, and JavaScript,
                then moved into TypeScript, React, and Next.js. I am expanding
                my full-stack engineering skills through Node.js, Express.js,
                and MongoDB while building practical projects and learning from
                real development challenges.
              </p>
            </div>
            <div className="about-detail">
              <p>
                My professional background in documentation, reporting, banking
                operations, and software management has helped me develop
                discipline, attention to detail, and an understanding of
                business workflows.
              </p>
              <p>
                I enjoy learning how products work from end to end, solving
                problems, refining user interfaces, and using AI as a thoughtful
                development tool—not as a replacement for understanding the
                code.
              </p>
              <div className="about-facts">
                <div>
                  <span>01</span>
                  <b>Learn by building</b>
                </div>
                <div>
                  <span>02</span>
                  <b>Focus on clean UI</b>
                </div>
                <div>
                  <span>03</span>
                  <b>Keep improving</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">02 / TECHNICAL TOOLKIT</p>
            <h2>
              Skills I work <span>with.</span>
            </h2>
            <p className="section-sub">
              A growing toolkit for building modern web applications, from
              interface to database.
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
            <p className="eyebrow">03 / EDUCATION</p>
            <h2>
              Learning is a <span>continuous process.</span>
            </h2>
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
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="eyebrow">HIGHER SECONDARY</p>
                <h3>Higher Secondary Certificate (HSC)</h3>
                <p>Serjabad Rana Safiullah College</p>
              </div>
              <span className="timeline-date">Completed</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="eyebrow">SECONDARY</p>
                <h3>Secondary School Certificate (SSC)</h3>
                <p>Pura DC High School</p>
              </div>
              <span className="timeline-date">Completed</span>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="section-pad">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              Professional experience <span>beyond code.</span>
            </h2>
          </div>
          <article className="experience-card">
            <div className="experience-mark">
              <Layers size={25} />
            </div>
            <div className="experience-main">
              <p className="eyebrow">FEB 2018 — PRESENT</p>
              <h3>Touch Trade Int.</h3>
              <p className="experience-role">
                Documentation · Reporting · Banking · Software Management
              </p>
              <ul>
                <li>
                  Manage business documentation and operational reporting.
                </li>
                <li>
                  Handle banking-related documentation and administrative
                  processes.
                </li>
                <li>
                  Support software management and day-to-day business
                  operations.
                </li>
                <li>
                  Apply attention to detail, organization, and problem-solving
                  across workflows.
                </li>
              </ul>
            </div>
            <span className="experience-badge">Professional Experience</span>
          </article>
        </div>
      </section>
      <section id="projects" className="section-pad section-light">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">05 / SELECTED WORK</p>
              <h2>
                Projects that turn <span>ideas real.</span>
              </h2>
            </div>
            <p className="section-sub">
              A selection of practical projects where I explore full-stack
              development, UI design, and problem solving.
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
            <p className="eyebrow">06 / GET IN TOUCH</p>
            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s build it.</span>
            </h2>
            <p className="contact-desc">
              I&apos;m open to junior web development opportunities,
              collaborations, and conversations about building useful products.
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
