// lib/data.ts

export const personal = {
  name: "Alfarhad Maulana",
  firstName: "Alfarhad",
  lastName: "Maulana",
  location: "Jakarta, Indonesia",
  email: "alfarhad2003@gmail.com",
  phone: "082384965056",
  tagline: "Building the pipeline behind the insight.",
  bio: "Data Engineer crafting robust backends and turning raw data into decisions.",
  bioLong:
    "Recent Information Technology graduate from Telkom University with a strong foundation in backend systems, database design, and data pipeline development. Experienced in Golang, Python, and SQL for building scalable RESTful APIs and managing structured data workflows.",
  bioLong2:
    "IEEE-published researcher with hands-on experience in end-to-end data processing — from raw ingestion to predictive modeling. Actively expanding expertise in modern data engineering tools including Apache Airflow, dbt, and cloud-based data platforms.",
  linkedin: "https://linkedin.com/in/al-farhad",
  github: "https://github.com/Al011003",
  roles: [
    {
      icon: "🦫",
      title: "Backend Engineer",
      sub: "Go · REST · Microservices",
      bg: "#e8f0ff",
    },
    {
      icon: "🐍",
      title: "Data Engineer",
      sub: "Pipelines · ETL · SQL",
      bg: "#fef3e2",
    },
    {
      icon: "📊",
      title: "Data Analyst",
      sub: "Python · Insight · Viz",
      bg: "#fde8e8",
    },
  ],
  tags: ["Go", "Python", "SQL", "IEEE Published"],
  stats: [
    { num: "3.97", label: "GPA / 4.00" },
    { num: "6+", label: "Projects Built" },
    { num: "5+", label: "Technologies" },
    { num: "1", label: "IEEE Publication" },
  ],
};

// Perubahan dari data lo — ganti react → azure di orbit, tambah iconUrl azure

// orbit ring2: ganti ini:
// { icon: "react", label: "React", ring: 2, angle: 103 },
// jadi:
// { icon: "azure", label: "Azure", ring: 2, angle: 103 },

// iconUrl: hapus react, tambah azure:
// azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",

// ================================
// FULL DATA UPDATED (copy-paste ke lib/data.ts lo):
// ================================

export const skills = {
  proficiencies: [
    { label: "Data Engineering & ETL", pct: 90 },
    { label: "Python / Analytics", pct: 88 },
    { label: "SQL / Databases", pct: 87 },
    { label: "Backend (Golang)", pct: 85 },
    { label: "Data Visualization", pct: 75 },
  ],
  categories: [
    { name: "Programming", items: ["Python", "Golang", "SQL", "JavaScript"] },
    {
      name: "Data Engineering",
      items: [
        "ETL",
        "Data Pipeline",
        "Feature Engineering",
        "EDA",
        "XGBoost",
        "Pandas",
        "Azure",
        "AWS",
      ],
    },
    {
      name: "Backend & Database",
      items: [
        "RESTful API",
        "MySQL",
        "DuckDB",
        "Schema Design",
        "Query Optimization",
      ],
    },
    {
      name: "Tools & Infrastructure",
      items: [
        "Git",
        "Postman",
        "VS Code",
        "Google Colab",
        "Power BI",
        "Excel",
        "Apache Airflow",
        "dbt",
        "BigQuery",
        "Docker",
      ],
    },
  ],
  orbit: [
    // ring 1 (inner) – 4 items
    { icon: "duckdb", label: "DuckDB", ring: 1, angle: 0 },
    { icon: "go", label: "Go", ring: 1, angle: 90 },
    { icon: "postgresql", label: "PostgreSQL", ring: 1, angle: 180 },
    { icon: "mysql", label: "MySQL", ring: 1, angle: 270 },
    // ring 2 (outer) – 7 items
    { icon: "kafka", label: "Kafka", ring: 2, angle: 0 },
    { icon: "docker", label: "Docker", ring: 2, angle: 51 },
    { icon: "azure", label: "Azure", ring: 2, angle: 103 }, // ← ganti dari react
    { icon: "git", label: "Git", ring: 2, angle: 154 },
    { icon: "airflow", label: "Airflow", ring: 2, angle: 206 },
    { icon: "powerbi", label: "Power BI", ring: 2, angle: 257 },
    { icon: "pandas", label: "Pandas", ring: 2, angle: 309 },
  ],
  marquee: [
    "Python",
    "Golang",
    "SQL",
    "Apache Kafka",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "FastAPI",
    "XGBoost",
    "Pandas",
    "Power BI",
    "dbt",
    "Airflow",
    "BigQuery",
    "Git",
    "Azure",
  ],
};

export const iconUrl: Record<string, string> = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  kafka:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  azure:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", // ← baru
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  powerbi: "/images/bi.png",
  pandas:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  airflow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  duckdb: "/images/db.png",
};

export const projects = [
  {
    id: "financial-prediction",
    title: "Financial Profitability Prediction",
    shortDesc:
      "IEEE-published ML system predicting securities firm profitability using XGBoost",
    desc: "A full end-to-end machine learning pipeline developed as a thesis project and published in an IEEE International Proceeding. The system ingests raw financial market data, applies rigorous preprocessing and feature engineering, then trains an XGBoost model tuned via hyperparameter optimization. Results are surfaced through an interactive React dashboard built for non-technical stakeholders.",
    period: "Oct 2025 – Dec 2025",
    image: "/images/ml.png",
    emoji: "📈",
    bg: "linear-gradient(135deg, #dde8f5, #e4f0e8)",
    role: "ML Engineer",
    repo: [
      { label: "Backend", url: "https://github.com/Al011003/skripsi_backend" },
      {
        label: "Frontend",
        url: "https://github.com/Al011003/skripsi_frontend",
      },
    ],
    highlights: [
      "End-to-end ML pipeline: ingestion → preprocessing → feature engineering → deployment",
      "XGBoost model with hyperparameter tuning & cross-validation",
      "Published in IEEE International Proceeding",
      "Interactive React dashboard for stakeholder reporting",
    ],
    badges: ["Python", "XGBoost", "React", "IEEE", "Pandas", "FastAPI"],
  },
  {
    id: "inventory-loan",
    title: "Inventory Loan System",
    shortDesc:
      "Backend system automating equipment loan tracking and operational workflows",
    desc: "Designed and built a backend system in Golang to fully automate equipment loan and tracking processes across an organization. Replaced manual spreadsheet workflows with a structured REST API and relational database schema, significantly reducing operational overhead and human error.",
    period: "Dec 2025 – Mar 2026",
    image: "/images/ab.png",
    emoji: "📦",
    bg: "linear-gradient(135deg, #f0e4f5, #f5e8dd)",
    role: "Backend Developer",
    repo: [{ label: "Repository", url: "https://github.com/Al011003/arshaka" }],
    highlights: [
      "Full backend architecture designed and implemented in Golang",
      "Replaced manual spreadsheet workflows with automated REST API",
      "Relational schema design with production-grade deployment",
      "Improved data reliability and reporting efficiency",
    ],
    badges: ["Golang", "MySQL", "REST API"],
  },
  {
    id: "tel-u-coin",
    title: "Tel-U Coin Blockchain Wallet",
    shortDesc:
      "Full-stack blockchain wallet with Ethereum smart contracts and mobile frontend",
    desc: "Built the backend infrastructure in Golang to manage transaction data flows and wallet state for a university-scale blockchain application. Deployed Ethereum-based smart contracts and integrated the backend with a React Native mobile frontend, delivering a complete end-to-end Web3 experience.",
    period: "Sep 2025 – Nov 2025",
    image: "/images/tc.png",
    emoji: "🪙",
    bg: "linear-gradient(135deg, #e4f0e8, #f5f0e4)",
    role: "Full Stack Developer",
    repo: [
      { label: "Repository", url: "https://github.com/Al011003/Telu-Coin" },
    ],
    highlights: [
      "Golang backend for wallet state management and transaction flows",
      "Smart contracts deployed on Ethereum",
      "React Native mobile frontend with real-time wallet sync",
      "End-to-end Web3 architecture",
    ],
    badges: ["Golang", "Ethereum", "React Native", "Blockchain", "Solidity"],
  },
  {
    id: "stridex",
    title: "Stridex – Shoe Shopping App",
    shortDesc:
      "Cross-platform Flutter e-commerce app for footwear with real-time Firebase backend",
    desc: "A cross-platform shoe shopping application built with Flutter and backed by Firebase — inspired by the experience of apps like Adidas and Nike. Stridex enables users to browse curated footwear collections, manage a cart, and complete purchases through a seamless mobile interface. Built with clean architecture principles, the app targets both Android and iOS from a single Dart codebase, with a Node.js + Express backend handling business logic and Firebase for real-time data sync.",
    period: "2025",
    image: "/images/std.png",
    emoji: "👟",
    bg: "linear-gradient(135deg, #e4eef5, #e8f0e4)",
    role: "Fullstack Developer",
    repo: [{ label: "Repository", url: "https://github.com/Al011003/stridex" }],
    highlights: [
      "Cross-platform Flutter app targeting Android & iOS",
      "Firebase Firestore for real-time product & order data sync",
      "Full e-commerce flow: browse, cart, checkout, and order tracking",
      "Node.js + Express REST API as backend service layer",
      "Clean architecture with modular Dart codebase",
    ],
    badges: ["Flutter", "Dart", "Firebase", "Node.js", "Express", "Android"],
  },
  {
    id: "clickncart",
    title: "ClickNCart – In-Store Virtual Cart",
    shortDesc:
      "Laravel-based in-store shopping assistant for bulky items — no physical cart needed",
    desc: "ClickNCart is a web-based in-store shopping assistant designed for retail environments like supermarkets and furniture stores. Instead of physically hauling heavy or bulky items — like TVs, refrigerators, or wardrobes — into a cart, shoppers can browse, add items virtually, and complete their purchase digitally. Store staff then handles fulfillment. Built on Laravel with MySQL, the app covers the full assisted-shopping flow with an admin panel for store inventory and order management.",
    period: "2025",
    image: "/images/cnc.png",
    emoji: "🛒",
    bg: "linear-gradient(135deg, #fde8e8, #f5eedd)",
    role: "Full Stack Developer",
    repo: [
      { label: "Repository", url: "https://github.com/Al011003/clickncart" },
    ],
    highlights: [
      "In-store virtual cart — shop bulky items without physically carrying them",
      "Designed for retail stores: supermarkets, electronics, furniture outlets",
      "Full assisted-shopping flow: browse → virtual cart → checkout → staff fulfillment",
      "Admin dashboard for store inventory and order management",
      "Laravel Eloquent ORM with MySQL database",
      "Tailwind CSS frontend with dynamic JS interactions",
    ],
    badges: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "krukolab",
    title: "Krukolab – Lab Management System",
    shortDesc:
      "Laravel-based laboratory management platform with SCSS-driven UI",
    desc: "A web-based laboratory management system built with Laravel and a heavily customized SCSS frontend. Krukolab streamlines lab resource allocation, scheduling, and reporting for academic or institutional environments. The system includes user role management and a clean, responsive interface built from scratch with SCSS.",
    period: "2025",
    image: "/images/kr.png",
    emoji: "🔬",
    bg: "linear-gradient(135deg, #e8e4f0, #dde8f5)",
    role: "Full Stack Developer",
    repo: [
      { label: "Repository", url: "https://github.com/Al011003/krukolab" },
    ],
    highlights: [
      "Laboratory resource scheduling and allocation system",
      "Role-based access control for staff and administrators",
      "Custom SCSS design system built from scratch",
      "Laravel backend with Blade templating and MySQL",
    ],
    badges: ["Laravel", "PHP", "SCSS", "MySQL", "Blade"],
  },
  {
    id: "pizza-sales",
    title: "Pizza Sales Dashboard",
    shortDesc:
      "Interactive Excel dashboard analyzing pizza sales trends and revenue insights",
    desc: "An end-to-end data analysis project on a pizza restaurant's sales dataset. Covers data cleaning, transformation, and exploratory analysis using Python and SQL, with findings visualized in an interactive Excel dashboard. The report surfaces key business metrics including total revenue, order volume, top-selling pizzas, category breakdown, and monthly revenue trends — designed for non-technical stakeholders.",
    period: "May 2024 – Jun 2024",
    image: "/images/pizza.png",
    emoji: "🍕",
    bg: "linear-gradient(135deg, #fde8c8, #f5e4e4)",
    role: "Data Analyst",
    repo: [
      {
        label: "View Spreadsheet",
        url: "https://docs.google.com/spreadsheets/d/1jhszqjMcpi4x9PztFse1Q1hwy17ex-tE/edit?usp=sharing&ouid=107173122936173874242&rtpof=true&sd=true",
      },
    ],
    highlights: [
      "Interactive Excel dashboard with slicers for date, size, category, and pizza name",
      "KPI cards: Total Revenue (Rp 817K+), Total Orders (21.350), Avg Order Value",
      "Top 10 best-selling pizzas ranked by quantity",
      "Category breakdown (Chicken, Classic, Supreme, Veggie) via pie chart",
      "Monthly revenue trend analysis across the year",
    ],
    badges: ["Excel", "EDA", "Dashboard"],
  },
  {
    id: "semwas",
    title: "SEMWAS – Installment Monitor",
    shortDesc:
      "Branch-wide installment tracking and automated reporting system",
    desc: "Contributed to the backend and database layer of a branch-wide installment monitoring and reporting system. Focused on database optimization and data reliability improvements to ensure accurate, timely reporting across multiple branches. The system reduced manual reporting overhead significantly.",
    period: "Sep 2025 – Dec 2025",
    image: "/images/pnm.png",
    emoji: "💳",
    bg: "linear-gradient(135deg, #e8e4f0, #dde8f5)",
    role: "Junior Backend Developer",
    repo: [{ label: "Repository", url: "https://github.com/Al011003" }],
    highlights: [
      "Branch-wide installment tracking across multiple locations",
      "Database query optimization for reporting performance",
      "Data reliability improvements reducing manual intervention",
      "Automated report generation for branch managers",
    ],
    badges: ["Backend", "Database", "Reporting", "SQL"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Information Technology",
  university: "Telkom University",
  campus: "Campus Jakarta",
  period: "2022 – 2026",
  gpa: "3.97",
  maxGpa: "4.00",
  distinction: "Graduated with Distinction (Summa Cumlaude)",
  publication: {
    title:
      "A Two-Stage Predictive Model for Securities Firms Profitability in Indonesia Based on Market Volatility Using Extreme Gradient Boosting (XGBoost)",
    venue: "IEEE International Proceeding (2025)",
    role: "First Author",
  },
  achievements: [
    { icon: "🏆", label: "Summa Cumlaude", sub: "Top of class distinction" },
    { icon: "📜", label: "IEEE Published", sub: "First author, 2025" },
    {
      icon: "🎓",
      label: "GPA 3.97 / 4.00",
      sub: "Consistent academic excellence",
    },
    {
      icon: "🥇",
      label: "Innovillage",
      sub: "Top 163 – Social Project Program",
    },
    {
      icon: "🎨",
      label: "Poster Design",
      sub: "2nd Place – University League",
    },
    { icon: "🌐", label: "English B2", sub: "EPrT Score: 517" },
  ],
};

export const experience = [
  {
    company: "PT. Permodalan Nasional Madani (Persero)",
    image: "/images/pnm-logo.jpg",
    role: "Back-end Developer",
    period: "Jul 2025 – Dec 2025",
    location: "Jakarta, Indonesia",
    type: "Internship",
    color: "#e8f0ff",
    points: [
      "Built and optimized production backend services using Golang to support internal applications at scale.",
      "Designed and maintained RESTful APIs enabling reliable structured data communication across distributed systems.",
      "Managed data workflows and improved system reliability through structured backend architecture.",
      "Collaborated with senior engineers in Agile sprints to deliver features on time.",
    ],
    badges: ["Golang", "REST API", "Agile", "Backend"],
  },
];

export const achievements = [
  { icon: "🏆", title: "Top 163", desc: "Innovillage Social Project Program" },
  {
    icon: "🥈",
    title: "2nd Place",
    desc: "University League Poster Design Competition",
  },
  {
    icon: "📄",
    title: "IEEE Published",
    desc: "First Author – International Proceeding 2025",
  },
  {
    icon: "🎓",
    title: "Summa Cumlaude",
    desc: "Graduated with Distinction, GPA 3.97/4.00",
  },
];
