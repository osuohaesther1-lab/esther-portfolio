export const site = {
  name: "Esther Osuoha",
  fullName: "Esther Akachukwu Osuoha",
  role: "Full Stack Engineer · UI/UX & Product Designer",
  shortRole: "Full Stack Engineer & Product Designer",
  location: "Lagos, Nigeria",
  timezone: "WAT",
  email: "osuohaesther5@gmail.com",
  phone: "+234 813 920 9723",
  github: "https://github.com/osuohaesther1-lab",
  linkedin: "https://www.linkedin.com/in/esther-osuoha-739a41439",
  cv: "/Esther-Osuoha-CV.pdf",
  tagline: "From first sketch to shipped product.",
  blurb:
    "I'm Esther, a full stack engineer and product designer in Lagos. I take ideas from interface design through backend, database and launch, and I care about the parts most people skip.",
};

export const navLinks = [
  { id: "work", label: "Work", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "toolkit", label: "Toolkit", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const marquee = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "Supabase",
  "TensorFlow Lite",
  "Figma",
  "Rust",
];

export type ProjectVisualKind = "loamy" | "stockflow" | "waste";

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  status: "Live" | "In development";
  year: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  visual: ProjectVisualKind;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Loamy",
    subtitle: "AI mobile platform for African farmers",
    status: "Live",
    year: "2026",
    summary:
      "A mobile-first platform that helps smallholder farmers diagnose crop disease, get planting and fertiliser guidance, and sell directly to customers.",
    points: [
      "Built a modular FastAPI backend covering diagnosis, an LLM advisory chatbot, marketplace, payments, reviews, disputes, notifications and weather, with a pytest suite across the core services.",
      "Designed an offline-first React Native app with on-device TensorFlow Lite diagnosis and a cloud fallback, plus a Next.js marketplace and admin dashboard.",
    ],
    stack: ["React Native", "Next.js", "FastAPI", "TensorFlow Lite", "PostgreSQL", "Flutterwave"],
    links: [],
    visual: "loamy",
  },
  {
    index: "02",
    title: "StockFlow",
    subtitle: "Multi-tenant inventory management",
    status: "Live",
    year: "2025",
    summary:
      "A live inventory platform where every signup gets a private workspace. Multiple businesses share one deployment while their data stays completely isolated.",
    points: [
      "Implemented authentication and account security: email confirmation, sign-in notifications, owner-issued invitations, email-change verification and password management.",
      "Added owner and read-only viewer roles, an audit trail, stock movement history, low-stock alerts, dashboard reporting and CSV exports.",
    ],
    stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Render"],
    links: [
      { label: "Live demo", href: "https://stockflow-inventory-system-os1w.onrender.com" },
      { label: "Code", href: "https://github.com/osuohaesther1-lab/stockflow-inventory-system" },
    ],
    visual: "stockflow",
  },
  {
    index: "03",
    title: "Gain As You Waste",
    subtitle: "Waste-to-wealth platform",
    status: "Live",
    year: "2026",
    summary:
      "A platform connecting households, waste collectors and recycling companies so recyclable materials get collected and paid for instead of discarded.",
    points: [
      "Structured a TypeScript monorepo with a React Native app, a Next.js portal and admin dashboard, and a shared domain package with Zod validation and a category pricing engine.",
      "Configured Supabase with PostgreSQL, row-level security, phone OTP authentication, realtime and Edge Functions, alongside Flutterwave collections and payouts.",
    ],
    stack: ["TypeScript", "React Native", "Next.js", "Supabase", "Flutterwave", "Zod"],
    links: [],
    visual: "waste",
  },
];

export type MoreProject = {
  index: string;
  title: string;
  kicker: string;
  summary: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
};

export const moreProjects: MoreProject[] = [
  {
    index: "04",
    title: "Report Automator",
    kicker: "Python CLI · Data tooling",
    summary:
      "Cleans messy CSV and Excel data (whitespace, duplicates, mixed dates, blank cells), then generates a formatted multi-sheet report with statistics, breakdowns and a chart.",
    stack: ["Python", "pandas", "openpyxl"],
    href: "https://github.com/osuohaesther1-lab/report-automator",
    linkLabel: "View code",
  },
  {
    index: "05",
    title: "File Organizer",
    kicker: "Python CLI · Automation",
    summary:
      "Sorts a messy folder into 14 extension-based categories, with a dry-run preview, one-command undo, collision-safe renaming and a JSON audit log, using only the standard library.",
    stack: ["Python", "CLI"],
    href: "https://github.com/osuohaesther1-lab/file-organizer",
    linkLabel: "View code",
  },
  {
    index: "06",
    title: "Knox Pharmaceuticals",
    kicker: "Brand identity · UI/UX · Web",
    summary:
      "Owned the identity and website end to end: logo, palette, typography and guidelines, then information architecture, flows, wireframes, high-fidelity screens and a responsive build.",
    stack: ["Figma", "UI/UX", "Brand", "Web"],
  },
];

export const teamWork = [
  {
    name: "Bloggi",
    text: "Writing and publishing features, custom layouts, fonts and colours, and publishing to a writer's own domain.",
  },
  {
    name: "ronin-cli",
    text: "Extended the Ronin multi-model AI terminal beyond chat into developer and agent workflows, integrated with accounts and credits.",
  },
  {
    name: "Pendaro",
    text: "Contributed to a school management system for student and staff records, academic information and admin workflows.",
  },
];

export const capabilities = [
  {
    title: "Backend",
    text: "REST APIs, authentication, email verification, invitation flows, role-based access control, background tasks and modular architecture.",
  },
  {
    title: "Frontend",
    text: "Responsive, mobile-first interfaces built from designs using reusable components and accessible layouts.",
  },
  {
    title: "Data",
    text: "Relational schema design, multi-tenant data isolation, and data processing and reporting workflows.",
  },
  {
    title: "Design",
    text: "User interfaces, product flows, brand identity and logo design in Figma.",
  },
];

export const timeline = [
  {
    period: "Ongoing",
    role: "Independent Product Work",
    org: "Full Stack Engineer & Designer",
    text: "Designed, built and deployed live full-stack products, from database schema and API to interface and launch.",
    tags: ["Loamy", "Gain As You Waste", "StockFlow"],
  },
  {
    period: "Team",
    role: "Collaborative Product Work",
    org: "Software Developer",
    text: "Shipped features inside small engineering teams across publishing, developer tooling and school management.",
    tags: ["Bloggi", "ronin-cli", "Pendaro"],
  },
  {
    period: "Client",
    role: "Brand & Product Design",
    org: "Knox Pharmaceuticals",
    text: "Owned brand identity and the website end to end: logo, palette, typography, IA, wireframes, high-fidelity screens and the build.",
    tags: ["Figma", "UI/UX", "Web"],
  },
];

export const toolkit = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Rust", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native (Expo)", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["Flask", "FastAPI", "REST APIs", "SQLAlchemy", "Jinja2", "Supabase Auth", "RLS & Edge Functions", "Resend"],
  },
  {
    group: "Data & AI",
    items: ["PostgreSQL", "SQLite", "pandas", "openpyxl", "TensorFlow Lite", "LLM orchestration"],
  },
  {
    group: "Design",
    items: ["Figma", "UI/UX design", "Brand identity", "Design systems"],
  },
  {
    group: "Delivery",
    items: ["Git", "GitHub", "Render", "Linux", "Environment configuration"],
  },
];

export const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];
