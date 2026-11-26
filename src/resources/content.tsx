import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muskan",
  lastName: "Mishra",
  name: "Muskan Mishra",
  role: "Technical Product Manager",
  avatar: "/images/avatar-v2.jpg",
  email: "mmuskanmishra@gmail.com",
  location: "Europe/Berlin", // IANA time zone identifier (Frankfurt shares Europe/Berlin)
  languages: ["English", "Hindi", "German (A2)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about product strategy and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muskan-mishra-0806/",
    essential: true,
  },
  {
    name: "Substack",
    icon: "substack",
    link: "https://substack.com/@brewedbytes",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/muskanmishra", // Replace with your GitHub profile
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I'm Muskan. Engineer turned technical PM, and I build things on the side.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Latest Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/payments-ops-copilot",
  },
  subline: (
    <>
      Currently on the Payments Platform team at Raisin SE in Frankfurt, while finishing my Master's.
      <br /> Before that, 2.5 years as an engineer at MathWorks.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name}, ${person.role} in Frankfurt, Germany`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Muskan. I spent 2.5 years as an engineer at MathWorks, then moved to Frankfurt for a
        Master's in Management at Frankfurt School. Now I'm a PM on the Payments Platform team at
        Raisin SE: I work on moving payments onto a new engine, read a lot of ISO 20022 messages,
        and scope QA so releases don't break.
        <br />
        <br />
        On the side I build small AI tools and write about what I learn. Right now that's Payments
        Ops Copilot, an assistant for investigating payment incidents, built around tests that check
        whether its answers can be trusted.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Raisin SE",
        timeframe: "Apr 2026 – Present",
        role: "Product Manager (Working Student), Payments Platform",
        achievements: [
          <>
            Verified outgoing payment initiation during the migration from a legacy payment gateway to a new cloud payments engine, covering SEPA Credit Transfer, SEPA Direct Debit (CORE and B2B), TARGET2 bank-to-bank transfers, and Polish złoty payments over Elixir.
          </>,
          <>
            Analysed ISO 20022 messages (pacs.008, pacs.009, pacs.003) at field level, including how message envelopes differ between TARGET2 and SEPA.
          </>,
          <>
            Diagnosed production issues including an event schema validation failure, a schema break on a new pipeline, and duplicate webhook notifications during a rollback.
          </>,
          <>
            Scoped QA with BDD acceptance criteria and 34 test cases covering SEPA reject reason codes, aligned with engineering's automated end-to-end test suite.
          </>,
          <>
            Built team tooling: a Cursor agent skill for drafting Jira tickets (merged via GitLab), a Python script that generates sprint retrospective pages from the Jira REST API, and shell-based concurrency tests against AWS Lambda.
          </>,
          <>
            Ran the team's monthly reviews with RAG status reporting, and migrated its Confluence documentation into the new tribe space.
          </>,
        ],
        images: [],
      },

      {
        company: "MathWorks",
        timeframe: "Jan 2023 – July 2025",
        role: "Senior Associate Engineer",
        achievements: [
          <>
            Analyzed 25,000+ usage records to define strategic KPIs, directly influencing the MATLAB R2026a product roadmap.
          </>,
          <>
            Led a technical team of 20+ engineers, while reducing manual reporting time by 60% through custom automation scripts.
          </>,
        ],
        images: [],
      },
      {
        company: "Defence Research and Development Organization (DRDO)",
        timeframe: "June 2022 – July 2022",
        role: "Project Intern",
        achievements: [
          <>
            Developed a networked system for real-time serial-to-Ethernet data transmission using FPGA Spartan 3AN.
          </>,
          <>
            Optimized data transfer efficiency by implementing complex communication protocols (UART, SPI) and socket programming for UDP.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Frankfurt School of Finance & Management",
        description: <>Master in Management (MiM) – Digital Business, Technology & Operations. Expected graduation 2027.</>,
      },
      {
        name: "PES University",
        description: <>Bachelor of Technology (Engineering)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Product Management",
        description: (
          <>Roadmapping, KPIs, BDD acceptance criteria, QA scoping, root cause analysis, Jira and Confluence.</>
        ),
        tags: [
          // Use "person" or "grid" as generic icons for PM if specific ones aren't available
          {
            name: "Strategy",
            icon: "grid",
          },
        ],
        images: [],
      },
      {
        title: "Payments",
        description: (
          <>ISO 20022 (pacs.008, pacs.009, pacs.003), SEPA Credit Transfer and Direct Debit, TARGET2, and payments engine migration.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Engineering",
        description: (
          <>Python, SQL, R, React, REST APIs, AWS Lambda, shell scripting, and LLM tool-calling.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "R",
            icon: "r",
          },
          {
            name: "API",
            icon: "api",
          },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: (
          <>Cursor, GitLab, n8n, Lovable, Figma, MATLAB, and MS Office.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "MicrosoftOffice",
            icon: "microsoftoffice",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on building, payments, and technical PM work",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name} `,
  description: `Product and engineering work in payments, AI, and data by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, newsletter, home, about, blog, work };
