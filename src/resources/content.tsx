import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muskan",
  lastName: "Mishra",
  name: "Muskan Mishra",
  role: "Product and Data",
  avatar: "/images/avatar-v2.jpg",
  email: "muskan.mishra@fs-students.de",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German (A2, improving)", "Hindi"], // calculated guess, can be updated later
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
  headline: <>Bridging the gap between engineering and product strategy</>,
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
    href: "/work/root-cause-console",
  },
  subline: (
    <>
      I am a Master's student at Frankfurt School with 2.5 years of engineering experience. <br /> I leverage my technical background to build data-driven products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Frankfurt, Germany`,
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
        Muskan is a Frankfurt-based Product and Data professional with a strong engineering background.
        She bridges the gap between technical complexity and strategic product vision.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [

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
        description: <>Master in Management (MiM) - Digital Business, Technology & Operations</>,
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
          <>Strategy, KPIs, Roadmapping, and Root Cause Analysis.</>
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
        title: "Engineering",
        description: (
          <>Experienced in React, Python, SQL, R, and building scalable APIs.</>
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
          <>Proficient with n8n, Lovable, Figma, MATLAB, and MS Office.</>
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name} `,
  description: `Design and dev projects by ${person.name} `,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Travel Gallery – ${person.name} `,
  description: `Exploring the world, one city at a time.`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
