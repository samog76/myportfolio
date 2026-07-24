import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    slug: "movway",
    name: "Movway",
    description: "A TMDB-powered movie, TV, and anime streaming experience with discovery, search, continue-watching, subtitles, and multiple playback providers.",
    overview: "Movway brings discovery and playback into one focused entertainment interface. It helps viewers move from browsing to watching quickly while preserving useful state such as continue-watching progress.",
    role: "Product design and frontend development",
    live: "https://movway.netlify.app/",
    repo: "https://github.com/samog76/movway",
    image: "/imgae/projects/movway.webp",
    width: 1280,
    height: 720,
    tags: ["React", "TypeScript", "TMDB", "Streaming"],
    highlights: [
      "TMDB-powered discovery for movies, television and anime",
      "Search and browsing across multiple entertainment categories",
      "Continue-watching state that makes returning effortless",
      "Subtitle support with multiple playback provider options"
    ]
  },
  {
    id: "02",
    slug: "riba-x",
    name: "Riba-X",
    description: "A full-stack social-commerce platform that combines feeds, profiles, messaging, and creator posts with a marketplace, cart, Stripe checkout, and seller tools.",
    overview: "Riba-X explores what happens when a social network and a marketplace share the same product experience. People can build profiles, publish content, connect through messaging, and move naturally from discovery to purchase.",
    role: "Full-stack product development",
    live: "https://r-xprototype.vercel.app",
    repo: "https://github.com/samog76/RXprototype",
    image: "/imgae/projects/riba-x.webp",
    width: 1400,
    height: 1050,
    tags: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
    highlights: [
      "Social feeds, profiles, creator posts and direct messaging",
      "Marketplace listings, cart experiences and seller tools",
      "Stripe-powered checkout flow",
      "Full-stack architecture backed by PostgreSQL"
    ]
  },
  {
    id: "03",
    slug: "sentinel",
    name: "Sentinel",
    description: "An AI clinical companion for medical professionals that measures cognitive baselines and shift fatigue through reaction, memory, and typing tests with Gemini-powered feedback.",
    overview: "Sentinel is a focused clinical companion designed around the cognitive demands of medical work. Short assessments create a baseline and help professionals notice changes in reaction, memory and typing performance across demanding shifts.",
    role: "Product design and full-stack development",
    live: "https://sentinel-lyart.vercel.app",
    repo: "https://github.com/samog76/sentinel",
    image: "/imgae/projects/sentinel.webp",
    width: 1400,
    height: 1050,
    tags: ["Next.js", "Gemini AI", "TypeScript", "HealthTech"],
    highlights: [
      "Reaction, memory and typing tests establish cognitive baselines",
      "Shift-fatigue tracking surfaces performance changes",
      "Gemini-powered feedback translates results into useful guidance",
      "A clear dashboard shaped around medical professional workflows"
    ]
  }
];

const skills = [
  ["HTML", "Markup"],
  ["CSS", "Styling"],
  ["JavaScript", "Logic"],
  ["TypeScript", "Logic"],
  ["React", "Frontend"],
  ["Angular", "Frontend"],
  ["Bootstrap", "UI framework"],
  ["Node.js", "Backend"],
  ["Java", "Backend"],
  ["Python", "Backend"],
  ["PHP", "Backend"],
  ["Ruby", "Backend"],
  ["C", "Systems"],
  ["C++", "Systems"],
  ["C#", "Applications"],
  ["MySQL", "Database"],
  ["PostgreSQL", "Database"],
  ["MongoDB", "Database"],
  ["Flutter", "Mobile"],
  ["React Native", "Mobile"],
  ["Docker", "DevOps"],
  ["Nginx", "Infrastructure"],
  ["Hadoop", "Big data"],
  ["Figma", "Product design"],
  ["Framer", "Prototyping"],
  ["Photoshop", "Visual design"],
  ["UI / UX", "Experience"]
];

function Header({ theme, toggleTheme, subpage = false }) {
  const [open, setOpen] = useState(false);
  const sectionHref = (section) => `${subpage ? "/" : ""}#${section}`;
  return (
    <header className="site-header">
      <a className="logo" href={subpage ? "/" : "#top"} aria-label="Gbeminiyi Ogunleye, home"><span className="logo-mark">G</span><span>Gbeminiyi<span className="logo-dot">.</span></span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span></span><span></span><span className="sr-only">Toggle navigation</span></button>
      <nav id="site-nav" className={`site-nav${open ? " open" : ""}`} aria-label="Main navigation">
        {["about", "work", "contact"].map((item) => <a key={item} href={sectionHref(item)} onClick={() => setOpen(false)}>{item === "work" ? "Selected work" : item[0].toUpperCase() + item.slice(1)}</a>)}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <a className="header-cta" href="mailto:theonlysam08@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span></span> Available for meaningful projects</p>
        <h1 className="hero-title">I build digital<span className="title-indent">experiences that</span><em>feel alive.</em></h1>
        <p className="hero-intro reveal">Full-stack developer with an eye for the small details—turning complex ideas into fast, intuitive products.</p>
        <div className="hero-actions reveal"><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="#about">More about me <span>→</span></a></div>
      </div>
      <div className="portrait-stage reveal" data-tilt>
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="portrait-halo"></div>
        <div className="portrait-card"><div className="portrait-grid"></div><img src="/imgae/hero-portrait.webp" alt="Gbeminiyi Ogunleye, full-stack developer in Lagos" width="1200" height="1323" loading="eager" fetchPriority="high" decoding="async" /><div className="portrait-label"><span>Based in</span><strong>Lagos, NG</strong></div><div className="code-chip">&lt;build /&gt;</div></div>
        <div className="floating-orb orb-a"></div><div className="floating-orb orb-b"></div>
      </div>
      <div className="hero-foot reveal"><span className="scroll-cue"><i></i> Scroll to discover</span><span className="hero-index">Portfolio / 2026</span></div>
    </section>
  );
}

function Marquee() {
  const items = ["Frontend Development", "Backend Systems", "Product Design", "Creative Coding"];
  return <section className="marquee" aria-label="Areas of expertise"><div className="marquee-track">{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<i>✦</i></span>)}</div></section>;
}

function About() {
  return (
    <section id="about" className="about section-shell">
      <div className="section-number reveal">01 / About</div>
      <div className="about-content">
        <h2 className="section-title reveal">Curious by nature.<br /><em>Precise by craft.</em></h2>
        <div className="about-copy reveal"><p className="lead">I’m Gbeminiyi, a full-stack developer who enjoys making technology feel simple, useful, and human.</p><p>I work across the full product stack—from expressive, accessible interfaces to dependable backends and databases. I care about clean systems, considered motion, performance, and the kind of polish people can feel even when they can’t name it.</p><p>I’m always learning, experimenting, and looking for ambitious problems worth solving.</p><a className="text-link" href="https://github.com/samog76" target="_blank" rel="noreferrer">See how I build on GitHub <span>↗</span></a></div>
      </div>
      <div className="capabilities reveal"><div className="capability-intro"><span className="mono-label">Core stack</span><p>Tools I use to move from idea to shipped product.</p></div><div className="skill-list">{skills.map(([name, type], i) => <div className="skill" key={name}><span>{String(i + 1).padStart(2, "0")}</span><strong>{name}</strong><i>{type}</i></div>)}</div></div>
    </section>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className="project-visual project-screenshot">
      <img className="project-shot" src={project.image} alt={`${project.name} web application interface`} width={project.width} height={project.height} loading="lazy" decoding="async" />
      <span className="project-count">{project.id}</span>
      <span className="project-visual-name">{project.name}</span>
      <span className="project-arrow">↗</span>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="work section-shell">
      <div className="work-heading"><div className="section-number reveal">02 / Selected work</div><h2 className="section-title reveal">Things I’ve<br /><em>brought to life.</em></h2><p className="reveal">A selection of products, prototypes, and explorations built to solve real problems.</p></div>
      <div className="projects">{projects.map((project, i) => <article className={`project reveal${i === 0 ? " project-featured" : ""}`} data-tilt key={project.name}><a href={`/projects/${project.slug}`} aria-label={`Read the ${project.name} case study`}><ProjectVisual project={project} /><div className="project-meta"><div><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></a></article>)}</div>
      <a className="all-work-link reveal" href="https://github.com/samog76?tab=repositories" target="_blank" rel="noreferrer"><span>View all projects</span><i>↗</i></a>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-shell">
      <div className="contact-orb" aria-hidden="true"></div><div className="section-number reveal">03 / Contact</div>
      <div className="contact-copy"><p className="eyebrow reveal"><span></span> Open to opportunities</p><h2 className="reveal">Have an idea?<br /><em>Let’s make it real.</em></h2><p className="reveal">Whether it’s a product, a collaboration, or just a good conversation—I’d love to hear from you.</p><a className="contact-email reveal" href="mailto:theonlysam08@gmail.com"><span>theonlysam08@gmail.com</span><i>↗</i></a></div>
      <footer><div className="footer-brand">Gbeminiyi<span>.</span></div><div className="footer-links"><a href="https://github.com/samog76" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linktr.ee/gbeminiyi76" target="_blank" rel="noreferrer">Linktree ↗</a></div><p>© {new Date().getFullYear()} Gbeminiyi Ogunleye</p><a href="#top" className="back-top">Back to top ↑</a></footer>
    </section>
  );
}

function ProjectPage({ project, theme, toggleTheme }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <>
      <div className="noise" aria-hidden="true"></div>
      <div className="cursor-glow" aria-hidden="true"></div>
      <Header theme={theme} toggleTheme={toggleTheme} subpage />
      <main id="top" className="case-page">
        <section className="case-hero section-shell">
          <a className="case-back" href="/#work">← Selected work</a>
          <p className="eyebrow"><span></span> Project case study · {project.id}</p>
          <h1>{project.name}</h1>
          <p className="case-summary">{project.description}</p>
          <div className="case-actions">
            <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Visit live project <span>↗</span></a>
            <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View source on GitHub <span>↗</span></a>
          </div>
          <div className="case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </section>
        <section className="case-media section-shell">
          <img src={project.image} alt={`${project.name} application interface`} width={project.width} height={project.height} fetchPriority="high" decoding="async" />
        </section>
        <section className="case-content section-shell">
          <div className="case-facts">
            <div><span>Role</span><strong>{project.role}</strong></div>
            <div><span>Category</span><strong>{project.tags[project.tags.length - 1]}</strong></div>
            <div><span>Project</span><strong>{project.id} / 03</strong></div>
          </div>
          <div className="case-overview">
            <span className="mono-label">Overview</span>
            <h2>Building a focused product around a real workflow.</h2>
            <p>{project.overview}</p>
          </div>
          <div className="case-highlights">
            <span className="mono-label">Key capabilities</span>
            <div>{project.highlights.map((highlight, index) => <article key={highlight}><span>{String(index + 1).padStart(2, "0")}</span><p>{highlight}</p></article>)}</div>
          </div>
        </section>
        <section className="case-next section-shell">
          <p>Next case study</p>
          <a href={`/projects/${nextProject.slug}`}><span>{nextProject.name}</span><i>↗</i></a>
        </section>
        <footer className="case-footer section-shell">
          <div className="footer-brand">Gbeminiyi<span>.</span></div>
          <p>© {new Date().getFullYear()} Gbeminiyi Ogunleye</p>
          <a href="mailto:theonlysam08@gmail.com">Start a conversation ↗</a>
        </footer>
      </main>
    </>
  );
}

export default function App({ url }) {
  const [theme, setTheme] = useState("light");
  const pathname = (url || (typeof window !== "undefined" ? window.location.pathname : "/")).replace(/\/+$/, "") || "/";
  const selectedProject = projects.find((project) => pathname === `/projects/${project.slug}`);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("gbeminiyi-theme", next);
    setTheme(next);
  };

  useEffect(() => {
    const preferredTheme = document.documentElement.dataset.theme || "light";
    setTheme(preferredTheme);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(element);
    });
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return () => observer.disconnect();
    const glow = document.querySelector(".cursor-glow");
    const moveGlow = (event) => glow.animate({ transform: `translate(${event.clientX}px, ${event.clientY}px)` }, { duration: 900, fill: "forwards", easing: "cubic-bezier(.2,.7,.2,1)" });
    const cleanups = [];
    window.addEventListener("pointermove", moveGlow);
    document.querySelectorAll("[data-tilt]").forEach((element) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        const target = element.querySelector(".portrait-card, .project-visual");
        target.style.transform = `perspective(900px) rotateX(${-(event.clientY - rect.top) / rect.height * 5 + 2.5}deg) rotateY(${((event.clientX - rect.left) / rect.width - .5) * 7}deg)`;
      };
      const leave = () => { element.querySelector(".portrait-card, .project-visual").style.transform = ""; };
      element.addEventListener("pointermove", move); element.addEventListener("pointerleave", leave);
      cleanups.push(() => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); });
    });
    return () => { observer.disconnect(); window.removeEventListener("pointermove", moveGlow); cleanups.forEach((clean) => clean()); };
  }, []);

  if (selectedProject) return <ProjectPage project={selectedProject} theme={theme} toggleTheme={toggleTheme} />;

  return <><div className="noise" aria-hidden="true"></div><div className="cursor-glow" aria-hidden="true"></div><Header theme={theme} toggleTheme={toggleTheme} /><main id="top"><Hero /><Marquee /><About /><Work /><Contact /></main></>;
}
