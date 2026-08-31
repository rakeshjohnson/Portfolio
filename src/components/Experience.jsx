import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt reveal">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">
                {job.company} · {job.location} · {job.duration}
              </p>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
