import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">{profile.location}</p>
        <h1>
          Hi, I'm <span className="accent">{profile.name}</span>
        </h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
          <a href="/Rakesh_Johnson_Resume.pdf" className="btn btn-secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
