import { useState, FormEvent } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CardNav, { type CardNavItem } from './components/CardNav/CardNav';
import { LogoLoop } from './components/LogoLoop/LogoLoop';
import Threads from './components/Threads/Threads';
import Folder from './components/Folder/Folder';
import { projectFolderItems } from './components/ProjectFolderPapers';
import { logoLoopItems } from './data/logoLoopItems';
import { portfolioProjects } from './data/portfolioProjects';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwQdZ-TsPHF4DSF3vKOaC44qOGV2vVocR7M5pqEtQA-_a5H21h2SaLUx4wN6tAo2eBLTA/exec';

const navItems: CardNavItem[] = [
  {
    label: 'About',
    bgColor: 'rgba(232, 240, 254, 0.95)',
    textColor: '#0e4c92',
    links: [
      { label: 'My story', href: '#about', ariaLabel: 'Go to About' },
      { label: 'Skills', href: '#skills', ariaLabel: 'Go to Skills' }
    ]
  },
  {
    label: 'Work',
    bgColor: 'rgba(240, 245, 250, 0.95)',
    textColor: '#1a2744',
    links: [
      { label: 'Portfolio', href: '#portfolio', ariaLabel: 'Go to Portfolio' },
      { label: 'GitHub', href: 'https://github.com/rarriaza2001', ariaLabel: 'GitHub profile' }
    ]
  },
  {
    label: 'Connect',
    bgColor: 'rgba(220, 232, 245, 0.95)',
    textColor: '#0e4c92',
    links: [
      { label: 'Contact', href: '#contact', ariaLabel: 'Go to Contact' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-ricardo-arriaza-1a3516262/', ariaLabel: 'LinkedIn' }
    ]
  }
];

export default function App() {
  const [formMsg, setFormMsg] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        setFormMsg('Message sent successfully.');
        setTimeout(() => setFormMsg(''), 5000);
        form.reset();
      })
      .catch(() => setFormMsg('Something went wrong. Please email directly.'));
  };

  return (
    <>
      <div className="app-bg" aria-hidden="true">
        <div className="threads-wrap">
          <Threads
            color={[0.12, 0.28, 0.48]}
            amplitude={0.85}
            distance={0.2}
            enableMouseInteraction
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <CardNav
        logo="/sivar.png"
        logoAlt="Jose Arriaza"
        items={navItems}
        baseColor="rgba(255,255,255,0.55)"
        menuColor="#1a2744"
        buttonBgColor="rgba(14, 76, 146, 0.9)"
        buttonTextColor="#fff"
        ctaHref="/Jose_Arriaza_resume.pdf"
        ctaLabel="Resume"
      />

      <div className="app-main">
        <section id="top" className="hero">
          <div className="hero-headshot-wrap">
            <img className="hero-headshot" src="/file.jpg" alt="Jose Arriaza" width={200} height={200} />
          </div>
          <h1>Hello, I&apos;m Jose Arriaza</h1>
          <p className="hero-tagline">
            B.S. Computer Science @ UT Austin · Machine Learning · Full-Stack Development
          </p>
          <div className="hero-cta">
            <a className="btn-liquid btn-liquid--solid" href="#portfolio">
              View my work
            </a>
            <a className="btn-liquid" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="glass-panel about-grid">
              <div className="about-photo">
                <img src="/sivar.png" alt="Jose Ricardo Arriaza" width={400} height={400} />
              </div>
              <div>
                <h2 className="section-title">About Me</h2>
                <p>
                  Hello, my name is Jose Ricardo Arriaza. I was born and raised in El Salvador, and I am completing my
                  B.S. in Computer Science at UT Austin with minors in Business and Applied Economics.
                </p>
                <p>
                  My interests include Machine Learning, Full-Stack Development, and Software Engineering. Outside of
                  work I enjoy movies and sports like football and basketball.
                </p>
                <p>Reach out below — I&apos;ll get back to you as soon as I can.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="glass-panel">
              <h2 className="section-title">Skills &amp; Focus</h2>

              <div className="skills-grid">
                {[
                  'Machine Learning',
                  'Full-Stack Development',
                  'Software Engineering',
                  'Backend Development',
                  'Frontend Development',
                  'SQL',
                  'API Development',
                  'Network Architecture',
                  'Python',
                  'JavaScript / TypeScript',
                  'Redis',
                  'Docker/Kubernetes',
                ].map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <h2 className="section-title">My Work</h2>
            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Click a folder to open.</p>
            <div className="portfolio-folders">
              {portfolioProjects.map((project) => (
                <div key={project.title} className="folder-project">
                  <Folder color={project.folderColor} size={1} items={projectFolderItems(project)} />
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="glass-panel contact-grid">
              <div>
                <h2 className="section-title">Contact Me</h2>
                <p style={{ marginTop: '1rem' }}>
                  <a href="mailto:jose.ricardo.arriazac@gmail.com" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    jose.ricardo.arriazac@gmail.com
                  </a>
                </p>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/in/jose-ricardo-arriaza-1a3516262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/rarriaza2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <form className="contact-form" onSubmit={onSubmit}>
                <input type="text" name="Name" placeholder="Your name" required autoComplete="name" />
                <input type="email" name="Email" placeholder="Your email" required autoComplete="email" />
                <textarea name="Message" rows={6} placeholder="Your message" required />
                <button type="submit" className="btn-liquid btn-liquid--solid">
                  Send message
                </button>
                <p className="msg-status" role="status">
                  {formMsg}
                </p>
              </form>
            </div>
          </div>
        </section>

        <div className="logo-loop-section">
          <div className="container">
            <h2>Tools &amp; technologies</h2>
            <LogoLoop
              logos={logoLoopItems}
              speed={80}
              logoHeight={36}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="rgba(250, 249, 246, 0.97)"
              ariaLabel="Technology logos"
            />
          </div>
        </div>

        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Jose Ricardo Arriaza ·{' '}
            <a href="https://pages.github.com/">GitHub Pages</a>
          </p>
        </footer>
      </div>
    </>
  );
}
