// Everything on the CV lives here. Pages and cards read from this file,
// so updating the site usually means editing only this file.

export type Entry = {
  title: string;
  org: string;
  place?: string;
  date: string;
  bullets?: string[];
};

export type Talk = {
  title: string;
  authors?: string;
  venue: string;
  place: string;
  date: string;
  note: string;
};

export const education: Entry[] = [
  {
    title: "High School Student",
    org: "Brookline High School",
    place: "Brookline, MA",
    date: "Class of 2028",
    bullets: [
      "AP coursework: Calculus BC, United States History, Physics 2, Physics C: Mechanics, Computer Science A (Java), Computer Science Principles",
      "Self-studied AP Macroeconomics, Microeconomics, English Language, and Physics C: Electricity and Magnetism",
    ],
  },
  {
    title: "Leadership Training Institute",
    org: "MIT",
    place: "Cambridge, MA",
    date: "2026",
    bullets: [
      "Student in the Leadership Training Program, building leadership and public speaking skills",
      "Built Databout You, a curriculum on bias in AI to be integrated into workshops and school courses",
    ],
  },
  {
    title: "Mathematics",
    org: "Russian School of Mathematics",
    place: "Newton, MA",
    date: "2019 – 2026",
    bullets: [
      "Completed linear algebra and calculus, maintaining all A grades",
    ],
  },
  {
    title: "Artemis Project",
    org: "Boston University",
    place: "Boston, MA",
    date: "Summer 2024",
    bullets: [
      "All-girls program covering computer science, data science, and robotics fundamentals",
      "UI/UX, app development, HTML/CSS, Python, searching and sorting algorithms, circuit theory and Arduino C, robotics, and AI ethics",
    ],
  },
];

export const talks: Talk[] = [
  {
    title: "ALIGN: Auditing Language-Model Intergroup Guard Neutrality",
    venue: "NeurIPS · Human-AI Coevolution (HAIC) workshop",
    place: "Atlanta, GA",
    date: "December 13, 2026",
    note: "Spotlight talk (1 of 4 selected)",
  },
  {
    title:
      "Alignment Is Relational: Auditing Safety Guards Across Human Constituencies",
    venue:
      "NeurIPS · Dynamic Alignment in Human-AI Coupled Systems (BiAlign) workshop",
    place: "Sydney, Australia",
    date: "December 11, 2026",
    note: "Accepted poster",
  },
  {
    title:
      "From Broad Ambition to Narrow Commitment: Bridging the Governance Gap in Military AI via Pipeline Auditing",
    venue:
      "Global Conference on AI, Security, and Ethics · UN Institute for Disarmament Research",
    place: "Geneva, Switzerland",
    date: "June 18–19, 2026",
    note: "Accepted poster",
  },
  {
    title: "GUARD: Guiding Unbiased Alignment through Reward Debiasing",
    authors:
      "Advay Samnerkar, Doelle Bhattacharya, Kailash Ranganathan, Ashwinee Panda, Kevin Zhu",
    venue: "NeurIPS · ARLET, ReliableML, and LLMEval workshops",
    place: "San Diego, CA",
    date: "December 6–7, 2025",
    note: "Poster",
  },
  {
    title: "GUARD: Guiding Unbiased Alignment through Reward Debiasing",
    authors:
      "Advay Samnerkar, Doelle Bhattacharya, Kailash Ranganathan, Ashwinee Panda, Kevin Zhu",
    venue: "Algoverse Banquet",
    place: "San Diego, CA",
    date: "December 6, 2025",
    note: "Oral presentation",
  },
  {
    title: "GUARD: Guiding Unbiased Alignment through Reward Debiasing",
    authors:
      "Advay Samnerkar, Doelle Bhattacharya, Kailash Ranganathan, Ashwinee Panda, Kevin Zhu",
    venue: "Empirical Methods in Natural Language Processing (EMNLP)",
    place: "Suzhou, China",
    date: "November 9, 2025",
    note: "Accepted lightning talk",
  },
];

// Countries highlighted on the globe ("Where I've presented").
// Names must match src/lib/world.json.
export const presentedCountries = ["USA", "Australia", "Switzerland", "China"];

export const research: Entry[] = [
  {
    title: "Research Intern",
    org: "The Governance Lab, Northeastern University",
    place: "Boston, MA",
    date: "Summer 2026",
    bullets: [
      "Literature review on AI's impact on workers and the future of work, synthesizing academic papers, policy reports, and industry research for the Burnes Center and InnovateUS",
      "Kept publications and news up to date through internal content management systems",
      "Built an internal database of every case study used by InnovateUS workshop speakers, including public sector examples",
    ],
  },
  {
    title: "Student Researcher",
    org: "Algoverse",
    date: "2025",
    bullets: [
      "Researched fairness, alignment, and reliability in RLHF (reinforcement learning from human feedback)",
      "Designed and implemented a post-training method that cut the parity gap by up to 16.9% on HH-RLHF and reached near-neutrality on other social bias datasets",
      "Second author on GUARD: Guiding Unbiased Alignment through Reward Debiasing",
    ],
  },
  {
    title: "Research Foundations Finalist",
    org: "Non-Trivial",
    date: "2026",
    bullets: [
      "Selected for an international online research incubator with mentorship",
      "Interdisciplinary curriculum across mathematics, machine learning, biology, economics, and philosophy",
      "Wrote a full research proposal on reward hacking in RLHF",
    ],
  },
];

export const leadership: Entry[] = [
  {
    title: "Managing Director (prev. Head of Finance)",
    org: "Brookline Robotics Initiative",
    place: "Brookline, MA",
    date: "2025 – Present",
    bullets: [
      "Leading finance, fundraising, accounting, budgeting, operations, and HR for a 501(c)(3) with 4 FIRST Tech Challenge teams and 4,000+ students impacted since founding",
      "Raised $32,000+ this season (50%+ over last year) through sponsorships, qualifiers, summer camps, and alumni outreach",
      "Managing 7 student leaders; organizing advisory board meetings and board relations",
      "Earned a #FIRSTLikeAGirl ambassadorship and 4+ summer camp partnerships with local businesses",
      "Head of Game Strategy for all-girls FTC team #17218, Brookline Bots, making data-backed competition calls and programming robot subsystems",
    ],
  },
  {
    title: "Founder & Co-President",
    org: "Brookline High School Fintech Club",
    place: "Brookline, MA",
    date: "2025 – Present",
    bullets: [
      "Leading teams in the Wharton Global High School Investment Competition, the MA Stock Market Game, the Modeling the Future Challenge, and the National High School Fed Challenge",
      "Perfect score (300/300) in the National Personal Finance Challenge, qualifying for MA State Finals (top 8 of 100+ teams)",
      "Partnered with the Northeastern University Fintech Initiative on a school-wide Python for Finance event",
      "Ran workshops on data science, AI/LLMs, resumes, and networking; built the club's branding and Instagram",
    ],
  },
  {
    title: "Co-Captain",
    org: "Brookline High School Math Team",
    place: "Brookline, MA",
    date: "2024 – Present",
    bullets: [
      "Qualified for state-level competition twice; led teams at HMMT for two years",
      "Ran the club Instagram (10k+ views), bringing in club funding and over 65% of new recruits",
      "Managing member outreach and competition logistics",
    ],
  },
];

export const work: Entry[] = [
  {
    title: "Invest in Girls Fellow",
    org: "Brown Advisory",
    place: "Boston, MA",
    date: "Summer 2026",
    bullets: [
      "Shadowed investment teams to learn firm operations, strategy, and client advisory work",
      "Presented a hands-on public equity research project; completed case studies across financial services roles",
    ],
  },
  {
    title: "BOLD Ambassador",
    org: "Harvard Undergraduate Women in Business",
    date: "2025 – Present",
    bullets: [
      "Selected two years running to promote the BOLD conference for 600+ high school girls interested in business",
      "Fundraised $900+ for need-based scholarships and recruited 45+ attendees",
    ],
  },
  {
    title: "This Brookline Life Fellow",
    org: "Whipple Writing Program",
    place: "Brookline, MA",
    date: "2026",
    bullets: [
      "Trained in interviewing, research, writing, and editing for audio",
      "Produced a podcast episode on transit policy and the MBTA Green Line's impact on Brookline youth",
    ],
  },
  {
    title: "Teacher",
    org: "Penguin Coding School",
    place: "Brookline, MA",
    date: "2025 – Present",
    bullets: [
      "Leading several group sessions a week teaching students ages 5–13 Python, robotics, and programming",
    ],
  },
  {
    title: "World of Money Teaching Assistant",
    org: "Brookline High School",
    place: "Brookline, MA",
    date: "2025",
    bullets: [
      "Created extra credit material on tariffs and trade policy, technical analysis, and more",
    ],
  },
  {
    title: "Intern",
    org: "Square Tech",
    place: "Boston, MA",
    date: "Summer 2025",
    bullets: [
      "Built and serviced gaming PCs; redesigned a state-level math tournament website in Figma",
    ],
  },
];

export const volunteering: Entry[] = [
  {
    title: "Presenter, Program Assistant & Coach",
    org: "Women's Money Matters",
    place: "Boston, MA",
    date: "2025 – Present",
    bullets: [
      "Presented on financial literacy, credit, and banking at the 2025 and 2026 Finer Symposiums",
      "Assisted the Financial Futures workshop with the Somerville Housing Authority",
      "Coaching in the Life Launch program for low-income young women in Greater Boston",
    ],
  },
  {
    title: "Townwide Coordinator",
    org: "Brookline Math League",
    date: "2025 – Present",
    bullets: [
      "Managing 40+ volunteers a year: reviewing applications, running orientation and check-ins",
      "Coached middle school math league; co-creating a townwide competition sent to nearly every Brookline public middle school",
    ],
  },
];

export const awards: { title: string; org: string; year: string }[] = [
  {
    title: "Silver Medal",
    org: "USA Economics and Business Olympiad",
    year: "2026",
  },
  {
    title: "State Qualifier (top 8 of 100+ teams)",
    org: "National Personal Finance Challenge",
    year: "2026",
  },
  {
    title: "8th Place, State Meet",
    org: "Massachusetts Association of Math Leagues",
    year: "2026",
  },
  {
    title: "2nd Place, INSPIRE",
    org: "FIRST Tech Challenge, Havoc at the Hawks' Nest",
    year: "2026",
  },
  {
    title: "2nd Place, INSPIRE",
    org: "FIRST Tech Challenge, Ryken Robobowl",
    year: "2025",
  },
  {
    title: "Honorable Mention",
    org: "International Math Competition Final Round",
    year: "2025",
  },
  {
    title: "1st Place, Women's History Month Contest",
    org: "Brookline League of Women Voters",
    year: "2025",
  },
  {
    title: "1st Place, Start-Up Competition",
    org: "Fidelity Boundless Summit",
    year: "2024",
  },
  {
    title: "Best Public Speaker",
    org: "Greater Boston Model UN",
    year: "2024",
  },
];

export const skills = [
  {
    group: "Technical",
    items: ["Python", "Java", "LaTeX", "HTML / CSS", "Markdown", "Figma"],
  },
  {
    group: "Domain",
    items: [
      "Micro / macroeconomics",
      "Financial statements",
      "AI / ML fundamentals",
      "AI policy",
    ],
  },
  { group: "Languages", items: ["English (native)", "Spanish (proficient)"] },
  {
    group: "Interests",
    items: [
      "Economics",
      "AI safety & governance",
      "Finance",
      "STEM education",
      "Gender equity",
    ],
  },
];

export type Project = {
  title: string;
  kind: string;
  context: string;
  date: string;
  description: string;
  href: string;
  cta: string;
};

export const projects: Project[] = [
  {
    title: "CAVA Equity Research",
    kind: "Slide deck",
    context: "Invest in Girls Fellowship · Brown Advisory",
    date: "Summer 2026",
    description:
      "An equity research pitch on CAVA, the Mediterranean fast-casual chain: its business model, strengths, and risks, presented to Brown Advisory staff.",
    href: "https://docs.google.com/presentation/d/1uxDG2PzNV_IK4Ct-rH3MK3sj7WvyQkfZsAGBBAlotO8/edit?usp=sharing",
    cta: "View slides",
  },
  {
    title: "This Brookline Life: the Green Line",
    kind: "Podcast",
    context: "This Brookline Life · Whipple Writing Program",
    date: "2026",
    description:
      "A 12-minute episode in the style of This American Life on public transit policy and what the MBTA Green Line means for Brookline youth, built from interviews with community members.",
    href: "https://www.whipplewritingprogram.com/this-brookline-life/doelle-bhattacharya",
    cta: "Listen",
  },
  {
    title:
      "The Illusion of Reform: Mohammed bin Salman and the Paradox of Saudi Liberalization",
    kind: "Research paper",
    context: "Honors Modern History",
    date: "May 2026",
    description:
      "Why Saudi Arabia let women drive in 2018 while jailing the activists who fought for that right: a history paper on how Mohammed bin Salman's reforms modernize the kingdom's image while tightening control.",
    href: "https://docs.google.com/document/d/1TE8ZRGpVKtWDLqmA-eAQQp_LNFH1QoJ_fuaByHBCBGQ/edit?usp=sharing",
    cta: "Read paper",
  },
];
