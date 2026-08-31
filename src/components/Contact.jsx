import { profile } from "../data/resumeData";

export default function Contact() {
  return (
    <section id="contact" className="section section-alt reveal">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Open to Work-From-Home or hybrid roles. Feel free to reach out directly — happy to share more detail on my
        experience or answer any questions.
      </p>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="label">Email</span>
          <span>{profile.email}</span>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
          <span className="label">Phone</span>
          <span>{profile.phone}</span>
        </a>
        <div className="contact-card">
          <span className="label">Location</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
