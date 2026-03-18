import { useState, FormEvent } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import CardNav, { type CardNavItem } from './components/CardNav/CardNav';
import { LogoLoop } from './components/LogoLoop/LogoLoop';
import Threads from './components/Threads/Threads';
import PortfolioCircularGallery from './components/PortfolioCircularGallery';
import { logoLoopItems } from './data/logoLoopItems';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwQdZ-TsPHF4DSF3vKOaC44qOGV2vVocR7M5pqEtQA-_a5H21h2SaLUx4wN6tAo2eBLTA/exec';

const navItems: CardNavItem[] = [
  {
    label: 'About',
    bgColor: 'rgba(232, 240, 254, 0.95)',
    textColor: '#0e4c92',
    links: [
      { label: 'About Me', href: '#about', ariaLabel: 'Go to About' },
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
        baseColor="rgba(255, 255, 255, 0.55)"
        menuColor="#1a2744"
        buttonBgColor="rgba(255, 255, 255, 0.35)"
        buttonTextColor="var(--primary)"
        ctaHref="/Jose_Arriaza_resume.pdf"
        ctaLabel="Resume"
      />

      <div className="app-main">
        <section id="top" className="hero">
          <div className="hero-headshot-wrap">
            <img className="hero-headshot" src="/website-headshot.png" alt="Jose Arriaza" width={200} height={200} />
          </div>
          <h1>Hello, I&apos;m Jose Arriaza</h1>
          <p className="hero-tagline">
            Computer Science <br /> UT Austin Class of 2025 <br /> Software Engineering
          </p>
          <div className="hero-cta">
            <a className="btn-liquid" href="#portfolio">
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
                <img src="/about.png" alt="Jose Ricardo Arriaza" width={600} height={600} />
              </div>
              <div>
                <h2 className="section-title">About Me</h2>
                <p>
                I&apos;m a backend software engineer focused on building distributed systems, real-time applications, and AI-powered platforms.
                <br/>
                I graduated from The University of Texas at Austin (B.S. Computer Science and minors in Business and Applied Economics). <br/>
                Currently a developer for DraawApp Technologies.
                <br/>
                I&apos;ve designed systems each built with a strong emphasis on performance, reliability, and real-world constraints.
                <br/>
                I’m most interested in solving problems where system design, scalability, and correctness matter. 
                <br/>
                Reach out below — I&apos;ll get back to you as soon as I can.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <div className="glass-panel">
              <h2 className="section-title">My Work</h2>
              <PortfolioCircularGallery />
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
                  'API Development',
                  'Network Architecture',
                  'JavaScript / TypeScript',
                  'Docker/Kubernetes',
                  'Redis',
                ].map((s) => (
                  <span key={s} className="btn-liquid">
                    {s}
                  </span>
                ))}
              </div>
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
                    <FaLinkedin style={{height: '40px', width: '40px'}}/>
                  </a>
                  <a href="https://github.com/rarriaza2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub style={{height: '40px', width: '40px'}}/>
                  </a>
                </div>
              </div>
              <form className="contact-form" onSubmit={onSubmit}>
                <input type="text" name="Name" placeholder="Your name" required autoComplete="name" />
                <input type="email" name="Email" placeholder="Your email" required autoComplete="email" />
                <textarea name="Message" rows={6} placeholder="Your message" required />
                <button type="submit" className="btn-liquid">
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
            &copy; {new Date().getFullYear()} Jose Ricardo Arriaza
          </p>
        </footer>
      </div>
    </>
  );
}
