import { resumeConfig } from "@/data/resumeConfig";

interface ResumeProps {
  showButton?: boolean;
  minimal?: boolean;
}

const Resume = ({ showButton = true, minimal = false }: ResumeProps) => {
  const { header, summary, sections, skills, education } = resumeConfig;

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="resume-container">
      {showButton && (
        <div className="print-button-container no-print">
          <button onClick={handlePrint} className="print-button">
            Download PDF
          </button>
        </div>
      )}

      <header className="resume-header">
        <h1 className="resume-name">{header.name}</h1>
        <p className="resume-headline">{header.headline}</p>
        <p className="resume-meta">
          <span>{header.location}</span>
          {!minimal && (
            <>
              <span className="meta-separator">·</span>
              {header.links.map((link, index) => (
                <span key={link.label}>
                  <a href={link.url} className="resume-link">
                    {link.label}
                  </a>
                  {index < header.links.length - 1 && (
                    <span className="meta-separator">·</span>
                  )}
                </span>
              ))}
            </>
          )}
        </p>
      </header>

      <section className="resume-section">
        <p className="resume-summary">{summary}</p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="resume-section">
          <h2 className="section-title">{section.title}</h2>
          {section.entries.map((entry) => (
            <div key={`${entry.title}-${entry.organization}`} className="entry">
              <div className="entry-header">
                <div className="entry-title-line">
                  <span className="entry-title">{entry.title}</span>
                  <span className="entry-separator">—</span>
                  <span className="entry-org">{entry.organization}</span>
                </div>
                <span className="entry-date">{entry.dateRange}</span>
              </div>
              {entry.description && (
                <p className="entry-description">{entry.description}</p>
              )}
              <ul className="entry-bullets">
                {entry.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

      <section className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <p key={skill.category} className="skill-line">
              <strong>{skill.category}:</strong> {skill.items}
            </p>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section-title">Education & Credentials</h2>
        {education.showLeanSixSigma && (
          <p className="education-item">Lean Six Sigma Green Belt</p>
        )}
        {education.items.map((item, index) => (
          <p key={index} className="education-item">
            {item}
          </p>
        ))}
      </section>
    </article>
  );
};

export default Resume;
