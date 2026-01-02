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
      { label: "GitHub", url: "https://github.com/ahovren" },
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
            "Operate in high-stress environments requiring disciplined execution, teamwork, and fast decision-making.",
            "Support operational readiness through training, standardization, and reliable follow-through.",
          ],
        },
        {
          title: "Helicopter Rescue Swimmer",
          organization: "United States Navy",
          dateRange: "2020–2024",
          bullets: [
            "Executed mission-critical responsibilities in dynamic, high-risk environments where precision matters.",
            "Operated as part of tightly coordinated teams under time pressure and uncertainty.",
          ],
        },
        {
          title: "MH-60S Subject Matter Expert (SME)",
          organization: "Curriculum Development & Instruction",
          dateRange: "2024–2024",
          bullets: [
            "Developed and delivered training curriculum to support standardization and high-performance execution.",
            "Improved instructional clarity and consistency by translating complex procedures into teachable systems.",
          ],
        },
        {
          title: "MQ-8C Mission Payload Operator",
          organization: "U.S. Navy",
          dateRange: "2023-2024",
          bullets: [
            "Operated mission payload systems with high attention to detail, coordination, and operational discipline.",
            "Supported mission outcomes through technical proficiency, communication, and procedural compliance.",
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
