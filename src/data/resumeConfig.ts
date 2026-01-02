export interface ResumeLink {
  label: string;
  url: string;
}

export interface ExperienceEntry {
  title: string;
  organization: string;
  location?: string;
  dateRange: string;
  description?: string;
  bullets: string[];
}

export interface ResumeConfig {
  header: {
    name: string;
    headline: string;
    location: string;
    links: ResumeLink[];
  };
  summary: string;
  sections: {
    title: string;
    entries: ExperienceEntry[];
  }[];
  skills: {
    category: string;
    items: string;
  }[];
  education: {
    items: string[];
    showLeanSixSigma: boolean;
  };
  meta: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
}

export const resumeConfig: ResumeConfig = {
  header: {
    name: "Aiden Hovren",
    headline: "Entrepreneur · Operator · Systems Builder",
    location: "Montana, USA",
    links: [
      { label: "aidenhovren.com", url: "https://aidenhovren.com" },
      { label: "LinkedIn", url: "https://linkedin.com/in/aidenhovren" },
      { label: "GitHub", url: "https://github.com/aidenhovren" },
    ],
  },
  summary:
    "Entrepreneur and systems-oriented operator with experience building early-stage ventures and executing in high-accountability environments. Blend of operational leadership, curriculum development, and hands-on digital systems implementation—focused on turning ambiguity into working processes, products, and teams that perform under pressure.",
  sections: [
    {
      title: "Venture & Operating Experience",
      entries: [
        {
          title: "Founder",
          organization: "Ironvael",
          dateRange: "2025–Present",
          description: "Venture studio / operating vehicle for building and iterating products and systems.",
          bullets: [
            "Build and iterate early-stage initiatives across software, operations, and digital infrastructure.",
            "Translate ideas into scoped plans, testable builds, and repeatable execution systems.",
            "Operate with capital efficiency and rapid feedback loops to validate direction fast.",
          ],
        },
        {
          title: "Digital Transformation Lead (Volunteer / Project)",
          organization: "Volunteer Fire Department",
          dateRange: "2025–Present",
          description: "Department digitization and operational modernization initiative.",
          bullets: [
            "Led digitization of internal processes to improve reliability, access, and operational readiness.",
            "Designed practical workflows and documentation to reduce friction and standardize execution.",
            "Implemented tools and systems aligned to real-world constraints (speed, clarity, usability).",
          ],
        },
      ],
    },
    {
      title: "Service & Leadership",
      entries: [
        {
          title: "Volunteer Firefighter",
          organization: "Volunteer Fire Department",
          dateRange: "2025–Present",
          bullets: [
            "Responded to emergency calls including fires and vehicle accidents; assisted in containment, operations, and hazard mitigation under high-stress conditions.",
            "Maintained readiness through regular training in fire suppression and equipment operation; supported community safety initiatives and prevention programs.",
          ],
        },
        {
          title: "Helicopter Rescue Swimmer",
          organization: "United States Navy",
          dateRange: "2020–2024",
          bullets: [
            "Coordinated flight operations and instructor-led training across 12 rotary-wing squadrons, supporting 300+ aircrew and pilots alongside Weapons \& Tactics instructors to optimize mission scheduling, resource allocation, and operational readiness.",
            "Served as a Squadron Search and Rescue (SAR) Instructor for 30 aircrewmen, leading rescue training evolutions, maintaining qualifications and currencies, and ensuring compliance with Navy aviation and safety standards.",
          ],
        },
        {
          title: "MH-60S Subject Matter Expert (SME)",
          organization: "Curriculum Development & Instruction",
          dateRange: "2024–2024",
          bullets: [
            "Developed and implemented 20 technical training modules adopted by the US Navy, standardizing aviation safety and technical readiness.",
            "Served as technical knowledge resource for aircrew operations and safety standards.",
          ],
        },
        {
          title: "MQ-8C Mission Payload Operator",
          organization: "U.S. Navy",
          dateRange: "2023-2024",
          bullets: [
            "Operated and monitored mission payload systems, ensuring system reliability, data accuracy, and adherence to security protocols.",
            "Reviewed and annotated payload imagery to identify and classify targets and POIs; documented metadata and timestamps, then handed concise briefs to pilots to support mission decisions.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Operations",
      items: "Process design, SOPs, systems thinking, execution under pressure, training standardization",
    },
    {
      category: "Digital Systems",
      items: "Web development, tooling selection, workflow digitization, documentation, basic automation",
    },
    {
      category: "Leadership",
      items: "Team coordination, instruction, stakeholder alignment, high-accountability environments",
    },
  ],
  education: {
    items: ["Additional training and details available upon request"],
    showLeanSixSigma: true,
  },
  meta: {
    title: "Aiden Hovren — Resume",
    description: "Entrepreneur, operator, and systems builder. Resume and CV for Aiden Hovren.",
    canonicalUrl: "https://cv.aidenhovren.com",
  },
};
