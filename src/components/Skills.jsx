import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skills-card">
            <h3>{group.category}</h3>
            <div className="skills-tags">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
