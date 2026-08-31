import { education, certifications } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section reveal">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="education-grid">
        <div>
          <h3 className="subsection-title">Education</h3>
          <ul className="education-list">
            {education.map((ed) => (
              <li key={ed.degree}>
                <div className="education-degree">{ed.degree}</div>
                <div className="education-school">{ed.school}</div>
                <div className="education-meta">
                  {ed.period && <span>{ed.period}</span>}
                  {ed.detail && <span>{ed.detail}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subsection-title">Workshops, Internships & Certifications</h3>
          <ul className="education-list">
            {certifications.map((c) => (
              <li key={c.title}>
                <div className="education-degree">{c.title}</div>
                {(c.org || c.date) && (
                  <div className="education-meta">
                    {c.org && <span>{c.org}</span>}
                    {c.date && <span>{c.date}</span>}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
