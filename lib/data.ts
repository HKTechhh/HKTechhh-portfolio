export const profile = {
  name: "Hadson Mumo",
  handle: "HKTechhh",
  email: "hadsonbrookes@gmail.com",
  location: "Nairobi, Kenya",
  roles: [
    "Full-Stack Developer",
    "Automation Engineer",
    "Founder, HKTechhh Solutions",
    "Freelance Writer",
  ],
  valueProp:
    "I build and ship real products — from database design to a polished UI — and automate the boring parts so you can focus on growth.",
  whatsapp: "254741032236",
  whatsappDisplay: "+254 741 032 236",
};

export const socials = [
  { id: "whatsapp", label: "WhatsApp", handle: "+254 741 032 236", href: "https://wa.me/254741032236?text=Hi%20Hadson%2C%20I%27d%20like%20to%20work%20with%20you.", color: "#25D366" },
  { id: "github", label: "GitHub", handle: "HKTechhh", href: "https://github.com/HKTechhh", color: "#8B949E" },
  { id: "instagram", label: "Instagram", handle: "kanavu.codes", href: "https://instagram.com/kanavu.codes", color: "#E1306C" },
  { id: "x", label: "X", handle: "@MumoHadson", href: "https://x.com/MumoHadson", color: "#8B98A5" },
] as const;

export const services = [
  "Web development",
  "Python & JavaScript",
  "Automation",
  "Simulation",
  "Data entry",
  "AI & LLM integration",
  "SPSS",
  "Matlab",
  "Excel",
  "Research reports",
  "Editing",
  "AI subscriptions",
  "Proxies & virtual numbers",
];

export const stats = [
  { value: "4+", label: "Years shipping code" },
  { value: "5", label: "Featured builds" },
  { value: "3", label: "Full-stack frameworks" },
  { value: "1", label: "Venture founded" },
];

export type SkillGroup = {
  title: string;
  blurb: string;
  icon: "layout" | "server" | "bot" | "shield" | "cog" | "chart" | "pen";
  a: string;
  b: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", blurb: "Fast, accessible interfaces people enjoy using.", icon: "layout", a: "#FFB400", b: "#FF8A3D", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"] },
  { title: "Backend & Data", blurb: "Solid APIs, clean schemas, payments that work.", icon: "server", a: "#FF5A5F", b: "#FF8A3D", skills: ["Python / Django", "PHP / Laravel", "PostgreSQL", "REST APIs", "M-Pesa integration", "Database design"] },
  { title: "Automation & AI", blurb: "Code that works while I sleep.", icon: "bot", a: "#14B8A6", b: "#22D3EE", skills: ["Playwright automation", "LLM API integration", "Prompt engineering", "Remotion (programmatic video)", "Computer vision"] },
  { title: "Security", blurb: "Think like an attacker, build like a defender.", icon: "shield", a: "#FF5A5F", b: "#C026D3", skills: ["Penetration testing", "Web app security", "Vulnerability assessment"] },
  { title: "Systems & SaaS", blurb: "Infrastructure and tools that keep things running.", icon: "cog", a: "#14B8A6", b: "#FFB400", skills: ["System administration", "Linux & Windows", "SaaS tools", "Proxy infrastructure", "Virtual numbers"] },
  { title: "Research & Analysis", blurb: "Numbers, models and reports that make sense.", icon: "chart", a: "#FFB400", b: "#FF5A5F", skills: ["SPSS", "Matlab", "Excel", "Simulation", "Research reports"] },
  { title: "Writing & Content", blurb: "Clear technical and academic communication.", icon: "pen", a: "#FF8A3D", b: "#FF5A5F", skills: ["Technical writing", "Academic writing (APA/MLA)", "PowerPoint design", "Editing"] },
];

export const marquee = [
  "React", "Next.js", "TypeScript", "Django", "Laravel", "PostgreSQL", "Playwright", "Remotion",
  "Python", "Tailwind CSS", "LLM APIs", "M-Pesa", "Linux", "Matlab", "SPSS", "Excel",
];

export type Project = {
  n: string;
  title: string;
  tag: string;
  status: string;
  problem: string;
  outcome: string;
  stack: string[];
  a: string;
  b: string;
};

export const projects: Project[] = [
  {
    n: "01",
    title: "Write Chap Chap",
    tag: "Freelance writing marketplace",
    status: "In development",
    problem: "Kenyan writers and clients lack a marketplace built around local payment habits — most platforms assume cards, not M-Pesa.",
    outcome: "A full-stack marketplace with M-Pesa checkout built in from day one, designed for the Kenyan market.",
    stack: ["Django", "React", "TypeScript", "PostgreSQL", "M-Pesa"],
    a: "#FFB400",
    b: "#FF5A5F",
  },
  {
    n: "02",
    title: "Driver Emotion Recognition",
    tag: "Computer vision research",
    status: "Completed",
    problem: "Driver emotion and stress affect road safety, but few systems detect it live from an ordinary webcam.",
    outcome: "Compared CNN vs VGG16 models, wrote a 15-page research paper, and shipped a real-time local webcam web app.",
    stack: ["Python", "CNN", "VGG16", "OpenCV", "Web app"],
    a: "#14B8A6",
    b: "#22D3EE",
  },
  {
    n: "03",
    title: "HKTechhh Solutions",
    tag: "My digital services venture",
    status: "Running",
    problem: "Small businesses and individuals need reliable web, AI and infrastructure services without enterprise overhead.",
    outcome: "A founder-led venture offering web/app dev, AI subscriptions, proxies and virtual numbers — with its own gold/coral brand and a maintained mono-repo.",
    stack: ["Next.js", "TypeScript", "Mono-repo", "Branding", "Infrastructure"],
    a: "#FF8A3D",
    b: "#FFB400",
  },
  {
    n: "04",
    title: "Remotion Ad Pipeline",
    tag: "Code-driven video ads",
    status: "Shipped",
    problem: "Producing video ads by hand is slow and hard to repeat or tweak across campaigns.",
    outcome: "Programmatic ad generation with Remotion's Series/Sequence components — campaigns like “FuturisticAd” rendered straight from React code.",
    stack: ["Remotion", "React", "TypeScript"],
    a: "#C026D3",
    b: "#FF5A5F",
  },
  {
    n: "05",
    title: "Edusson Bot",
    tag: "Auto-bidding automation",
    status: "Shipped",
    problem: "Winning freelance orders means being first — and manually refreshing a platform all day doesn't scale.",
    outcome: "A Playwright bot that bids automatically, running reliably across both Linux and Windows environments.",
    stack: ["Playwright", "Python", "Linux", "Windows"],
    a: "#14B8A6",
    b: "#FFB400",
  },
];

export const experience = [
  {
    role: "Founder",
    org: "HKTechhh Solutions",
    period: "Present",
    points: [
      "Run a digital services venture: web/app development, AI subscriptions, proxies and virtual numbers.",
      "Own the brand, the mono-repo and delivery end to end.",
    ],
    a: "#FFB400",
  },
  {
    role: "Full-Stack Software Developer (Freelance)",
    org: "Remote",
    period: "2022 – Present",
    points: [
      "Built full-stack apps with React/Next.js and Django or Laravel, balancing performance and maintainability.",
      "Integrated LLM APIs (Anthropic, OpenRouter, Groq) into production, and automated end-to-end QA with Playwright.",
    ],
    a: "#FF5A5F",
  },
  {
    role: "Academic Freelance Writer & Content Professional",
    org: "Edusson & Essaypro",
    period: "2023 – Present",
    points: [
      "Wrote hundreds of original pieces across computer science, finance, statistics and technology.",
      "Designed professional PowerPoint decks that communicate technical content clearly.",
    ],
    a: "#14B8A6",
  },
  {
    role: "AI Training & LLM Evaluation (Freelance)",
    org: "Remote",
    period: "2024 – 2026",
    points: [
      "Evaluated LLM responses for accuracy, safety and technical correctness against detailed rubrics.",
      "Ranked and compared outputs with evidence-backed justifications, and reviewed code quality in Python and JavaScript.",
    ],
    a: "#FF8A3D",
  },
];

export const education = [
  { title: "BSc Computer Science", org: "Maseno University", period: "2021 – 2025" },
  { title: "Full-Stack Development & LLM Integration", org: "Self-directed", period: "Ongoing" },
];
