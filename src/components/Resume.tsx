import { resumeConfig } from "@/data/resumeConfig";

interface ResumeProps {
  showButton?: boolean;
  minimal?: boolean;
}

const Resume = ({ showButton = true, minimal = false }: ResumeProps) => {
  const { header, summary, sections, skills, education } = resumeConfig;

  const handlePrint = () => window.print();

  return (
    <article
      className={[
        // Layout / page
        "mx-auto w-full max-w-[900px] px-5 sm:px-8",
        "py-10 sm:py-12",
        // Card feel on screen, clean sheet on print
        "rounded-2xl border border-black/10 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.10)]",
        "print:rounded-none print:border-0 print:bg-transparent print:shadow-none",
        // Type rendering
        "text-black antialiased",
      ].join(" ")}
    >
      {/* Print button */}
      {showButton && (
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={handlePrint}
            className={[
              "inline-flex items-center gap-2 rounded-full",
              "border border-black/10 bg-white px-4 py-2",
              "text-sm font-semibold text-black",
              "shadow-sm transition",
              "hover:-translate-y-[1px] hover:border-black/20 hover:shadow",
              "active:translate-y-0",
              "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20",
            ].join(" ")}
          >
            Download PDF
            <span className="text-black/40">⌘P</span>
          </button>
        </div>
      )}

      {/* Header */}
      <header className="mb-6 border-b border-black/10 pb-5 print:mb-4 print:pb-4">
        {/* Tiny “premium” accent bar (screen only) */}
        <div className="mb-4 h-1.5 w-14 rounded-full bg-blue-600/90 print:hidden" />

        <h1 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[44px]">
          {header.name}
        </h1>

        <p className="mt-3 max-w-[70ch] text-[15px] leading-7 text-black/65">
          {header.headline}
        </p>

        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-black/60">
          <span className="font-medium text-black/70">{header.location}</span>

          {!minimal && header.links?.length > 0 && (
            <>
              <span className="text-black/30">·</span>
              {header.links.map((link, index) => (
                <span key={link.label} className="flex items-center gap-x-2">
                  <a
                    href={link.url}
                    className={[
                      "rounded-full px-2 py-0.5",
                      "font-semibold text-black/85",
                      "transition",
                      "hover:bg-blue-600/10 hover:text-black",
                      "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20",
                      // Print: make links look like links
                      "print:px-0 print:py-0 print:rounded-none print:bg-transparent print:underline",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                  {index < header.links.length - 1 && (
                    <span className="text-black/30">·</span>
                  )}
                </span>
              ))}
            </>
          )}
        </p>
      </header>

      {/* Summary */}
      <section className="mb-8 print:mb-6">
        <p className="text-[15px] leading-7 text-black/80">{summary}</p>
      </section>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.title} className="mb-8 last:mb-0 print:mb-6">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-black/55">
              {section.title.toUpperCase()}
            </h2>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="space-y-3">
            {section.entries.map((entry) => (
              <div
                key={`${entry.title}-${entry.organization}`}
                className={[
                  // Screen: subtle “row card” hover, Print: plain
                  "rounded-xl border border-transparent p-3",
                  "transition",
                  "hover:border-blue-600/15 hover:bg-blue-600/5",
                  "print:p-0 print:hover:bg-transparent",
                ].join(" ")}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-[15px] font-extrabold text-black">
                      {entry.title}
                    </span>
                    <span className="text-black/35">—</span>
                    <span className="text-[15px] font-bold text-black/80">
                      {entry.organization}
                    </span>
                  </div>

                  <span className="text-[13px] font-semibold text-black/55 sm:whitespace-nowrap">
                    {entry.dateRange}
                  </span>
                </div>

                {entry.description && (
                  <p className="mt-2 text-[14px] leading-6 text-black/65">
                    {entry.description}
                  </p>
                )}

                <ul
                  className={[
                    "mt-2 list-disc pl-5",
                    "space-y-1 text-[14px] leading-6 text-black/80",
                    // Make bullets feel less “wall of text” on wide screens
                    "sm:columns-1 lg:columns-2 lg:gap-x-8",
                    "print:columns-1",
                  ].join(" ")}
                >
                  {entry.bullets.map((bullet, index) => (
                    <li key={index} className="break-inside-avoid">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Skills */}
      <section className="mb-8 print:mb-6">
        <div className="mb-3 flex items-center gap-3">
          <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-black/55">
            SKILLS
          </h2>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="space-y-2">
          {skills.map((skill) => (
            <p key={skill.category} className="text-[14px] leading-6 text-black/65">
              <span className="font-extrabold text-black/85">{skill.category}:</span>{" "}
              <span className="text-black/65">{skill.items}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-0">
        <div className="mb-3 flex items-center gap-3">
          <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-black/55">
            EDUCATION &amp; CREDENTIALS
          </h2>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="space-y-1">
          {education.showLeanSixSigma && (
            <p className="text-[14px] leading-6 text-black/80">
              Lean Six Sigma Green Belt
            </p>
          )}
          {education.items.map((item, index) => (
            <p key={index} className="text-[14px] leading-6 text-black/80">
              {item}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;
