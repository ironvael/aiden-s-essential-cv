import { resumeConfig } from "@/data/resumeConfig";

interface ResumeProps {
  showButton?: boolean;
  minimal?: boolean;
}

const Resume = ({ showButton = true, minimal = false }: ResumeProps) => {
  const { header, summary, sections, skills, education } = resumeConfig;

  const handlePrint = () => window.print();

  return (
    <article className="w-full">
      <div
        className={[
          // Stop global centering from #root
          "text-left",
          // Page wrapper
          "mx-auto w-full max-w-[920px] px-5 sm:px-8 py-10 sm:py-12",
          // Screen card / Print sheet
          "rounded-2xl border border-border bg-background shadow-[0_24px_60px_rgba(0,0,0,0.10)]",
          "print:rounded-none print:border-0 print:bg-white print:shadow-none",
          // Typography rendering
          "text-foreground antialiased",
        ].join(" ")}
      >
      {/* Print button */}
      {showButton && (
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={handlePrint}
            className={[
              "inline-flex items-center gap-2 rounded-full",
              "border border-border bg-background px-4 py-2",
              "text-sm font-semibold text-foreground",
              "shadow-sm transition-all",
              "hover:-translate-y-[1px] hover:bg-accent hover:text-accent-foreground hover:shadow",
              "active:translate-y-0",
              "focus:outline-none focus-visible:ring-4 focus-visible:ring-ring/30",
            ].join(" ")}
          >
            Download PDF <span className="text-muted-foreground">⌘P</span>
          </button>
        </div>
      )}

        {/* Header */}
        <header className="mb-6 border-b border-border pb-5 print:mb-4 print:pb-4">
          <div className="mb-4 h-1.5 w-14 rounded-full bg-primary/90 print:hidden" />

          <h1 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[46px]">
            {header.name}
          </h1>

          <p className="mt-3 max-w-[75ch] text-[15px] leading-7 text-muted-foreground">
            {header.headline}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">{header.location}</span>

            {!minimal && header.links?.length > 0 && (
              <>
                <span className="text-muted-foreground/60">·</span>

                {header.links.map((link, index) => (
                  <span key={link.label} className="flex items-center gap-x-2">
                    <a
                      href={link.url}
                      className={[
                        "rounded-full px-2 py-0.5",
                        "font-semibold text-foreground/85 transition",
                        "hover:bg-accent hover:text-accent-foreground",
                        "focus:outline-none focus-visible:ring-4 focus-visible:ring-ring/30",
                        // Print styling
                        "print:px-0 print:py-0 print:rounded-none print:bg-transparent print:text-black print:underline",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>

                    {index < header.links.length - 1 && (
                      <span className="text-muted-foreground/60">·</span>
                    )}
                  </span>
                ))}
              </>
            )}
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8 print:mb-6">
          <p className="text-[15px] leading-7 text-foreground/85">{summary}</p>
        </section>

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.title} className="mb-8 last:mb-0 print:mb-6">
            <div className="mb-3 flex items-center gap-3">
              <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-muted-foreground">
                {section.title.toUpperCase()}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-3">
              {section.entries.map((entry) => (
                <div
                  key={`${entry.title}-${entry.organization}`}
                  className={[
                    "rounded-xl border border-transparent p-3 transition-all",
                    "hover:border-primary/20 hover:bg-primary/5",
                    "print:p-0 print:hover:bg-transparent",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[15px] font-extrabold text-foreground">
                        {entry.title}
                      </span>
                      <span className="text-muted-foreground/70">—</span>
                      <span className="text-[15px] font-bold text-foreground/80">
                        {entry.organization}
                      </span>
                    </div>

                    <span className="text-[13px] font-semibold text-muted-foreground sm:whitespace-nowrap">
                      {entry.dateRange}
                    </span>
                  </div>

                  {entry.description && (
                    <p className="mt-2 text-[14px] leading-6 text-muted-foreground">
                      {entry.description}
                    </p>
                  )}

                  <ul
                    className={[
                      "mt-2 list-disc pl-5",
                      "space-y-1 text-[14px] leading-6 text-foreground/85",
                      "lg:columns-2 lg:gap-x-8",
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
            <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-muted-foreground">
              SKILLS
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-2">
            {skills.map((skill) => (
              <p key={skill.category} className="text-[14px] leading-6 text-muted-foreground">
                <span className="font-extrabold text-foreground/85">{skill.category}:</span>{" "}
                <span className="text-muted-foreground">{skill.items}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-[12px] font-extrabold tracking-[0.18em] text-muted-foreground">
              EDUCATION &amp; CREDENTIALS
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-1">
            {education.showLeanSixSigma && (
              <p className="text-[14px] leading-6 text-foreground/85">
                Lean Six Sigma Green Belt
              </p>
            )}

            {education.items.map((item, index) => (
              <p key={index} className="text-[14px] leading-6 text-foreground/85">
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Print-only tiny footer */}
        <div className="mt-6 hidden text-[11px] text-black/50 print:block">
          Generated via {header.links?.[0]?.label ?? "site"} · {new Date().getFullYear()}
        </div>
      </div>
    </article>
  );
};

export default Resume;
