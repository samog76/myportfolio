import { useEffect, useState } from "react";

const projects = [
  { id: "01", name: "Movway", description: "A TMDB-powered movie, TV, and anime streaming experience with discovery, search, continue-watching, subtitles, and multiple playback providers.", href: "https://movway.netlify.app/", type: "movway", tags: ["React", "TMDB", "Streaming"] },
  { id: "02", name: "Riba-X", description: "A full-stack social-commerce platform that combines feeds, profiles, messaging, and creator posts with a marketplace, cart, Stripe checkout, and seller tools.", href: "https://r-xprototype.vercel.app", type: "rx", tags: ["Next.js", "NestJS", "PostgreSQL"] },
  { id: "03", name: "Sentinel", description: "An AI clinical companion for medical professionals that measures cognitive baselines and shift fatigue through reaction, memory, and typing tests with Gemini-powered feedback.", href: "https://sentinel-lyart.vercel.app", type: "sentinel", tags: ["Next.js", "Gemini AI", "HealthTech"] }
];

const skills = [
  ["HTML / CSS", "Interface"], ["JavaScript / TypeScript", "Logic"], ["React", "Product"],
  ["Java", "Backend"], ["MySQL", "Data"], ["UI / UX", "Experience"]
];

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Gbeminiyi Ogunleye, home"><span className="logo-mark">G</span><span>Gbeminiyi<span className="logo-dot">.</span></span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span></span><span></span><span className="sr-only">Toggle navigation</span></button>
      <nav id="site-nav" className={`site-nav${open ? " open" : ""}`} aria-label="Main navigation">
        {["about", "work", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item === "work" ? "Selected work" : item[0].toUpperCase() + item.slice(1)}</a>)}
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
        <p className="eyebrow reveal"><span></span> Available for meaningful projects</p>
        <h1 className="hero-title reveal">I build digital<span className="title-indent">experiences that</span><em>feel alive.</em></h1>
        <p className="hero-intro reveal">Full-stack developer with an eye for the small details—turning complex ideas into fast, intuitive products.</p>
        <div className="hero-actions reveal"><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="#about">More about me <span>→</span></a></div>
      </div>
      <div className="portrait-stage reveal" data-tilt>
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="portrait-halo"></div>
        <div className="portrait-card"><div className="portrait-grid"></div><img src="/imgae/hiiiiiiii.png" alt="Portrait of Gbeminiyi Ogunleye" /><div className="portrait-label"><span>Based in</span><strong>Lagos, NG</strong></div><div className="code-chip">&lt;build /&gt;</div></div>
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

function ProjectVisual({ type, id }) {
  if (type === "movway") return <div className="project-visual visual-movway"><span className="project-count">{id}</span><div className="mock-browser"><div className="browser-top"><i></i><i></i><i></i></div><div className="browser-content"><span>MOVWAY</span><strong>Move better.<br />Live easier.</strong><div className="mock-route"><i></i><b></b><i></i></div></div></div><span className="project-arrow">↗</span></div>;
  if (type === "rx") return <div className="project-visual visual-rx"><span className="project-count">{id}</span><div className="rx-mark">Rx<span>+</span></div><div className="rx-lines"><i></i><i></i><i></i><i></i></div><span className="project-arrow">↗</span></div>;
  return <div className="project-visual visual-sentinel"><span className="project-count">{id}</span><div className="radar"><i></i><i></i><i></i><b></b></div><span className="sentinel-word">SENTINEL</span><span className="project-arrow">↗</span></div>;
}

function Work() {
  return (
    <section id="work" className="work section-shell">
      <div className="work-heading"><div className="section-number reveal">02 / Selected work</div><h2 className="section-title reveal">Things I’ve<br /><em>brought to life.</em></h2><p className="reveal">A selection of products, prototypes, and explorations built to solve real problems.</p></div>
      <div className="projects">{projects.map((project, i) => <article className={`project reveal${i === 0 ? " project-featured" : ""}`} data-tilt key={project.name}><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live`}><ProjectVisual type={project.type} id={project.id} /><div className="project-meta"><div><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></a></article>)}</div>
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

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("gbeminiyi-theme", next);
    setTheme(next);
  };

  useEffect(() => {
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

  return <><div className="noise" aria-hidden="true"></div><div className="cursor-glow" aria-hidden="true"></div><Header theme={theme} toggleTheme={toggleTheme} /><main id="top"><Hero /><Marquee /><About /><Work /><Contact /></main></>;
}
