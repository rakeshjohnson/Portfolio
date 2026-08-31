import { profile, languages } from "../data/resumeData";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <p className="about-summary">{profile.summary}</p>
        <div className="about-meta">
          <div>
            <span className="label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <span className="label">Phone</span>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
          </div>
          <div>
            <span className="label">Location</span>
            <span>{profile.location}</span>
          </div>
          <div>
            <span className="label">Languages</span>
            <span>{languages.join(", ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
