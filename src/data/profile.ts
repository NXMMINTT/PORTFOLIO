// แก้ไขข้อมูลทั้งหมดของเว็บได้ที่ไฟล์นี้ไฟล์เดียว

export const profile = {
  name: "THIDARAT TARASI",
  nickname: "MINDMINT",
  role: "Robotic Software Engineer",
  tagline: "นักศึกษาวิศวกรรมคอมพิวเตอร์และหุ่นยนต์ ผู้หลงใหลใน Full-Stack และ Robotics",
  intro:
    "สนใจงานด้าน Full-Stack Development และซอฟต์แวร์สำหรับหุ่นยนต์ ชอบออกแบบระบบตั้งแต่หน้าเว็บไปจนถึงหลังบ้าน และนำโค้ดไปควบคุมเครื่องจักรในโลกจริง พร้อมพัฒนาทักษะต่อในสายงาน Software Engineering",
  location: "Pathum Thani, Thailand",
  email: "thidarat.workk@gmail.com",
  /** รูปโปรไฟล์บนป้ายห้อยคอ (ไฟล์อยู่ใน public/) */
  photo: "/me.png" as string | null,
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/NXMMINTT" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thidarat-tarasi/" },
  ],
  stats: [
    { value: "4", label: "ประสบการณ์ทำงาน" },
    { value: "6+", label: "โปรเจกต์" },
    { value: "20+", label: "เทคโนโลยี" },
  ],
};

export const about: string[] = [];

// โลโก้จาก Devicon (devicon.dev) และ Simple Icons (simpleicons.org)
const dev = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const simple = (name: string) => `https://cdn.simpleicons.org/${name}`;
const fluent = (path: string) => `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/${encodeURI(path)}`;

export type Skill = { name: string; icon: string };

export const skills: { group: string; th: string; items: Skill[] }[] = [
  {
    group: "Frontend",
    th: "หน้าเว็บที่ผู้ใช้เห็น",
    items: [
      { name: "HTML", icon: dev("html5") },
      { name: "CSS", icon: dev("css3") },
      { name: "JavaScript", icon: dev("javascript") },
      { name: "TypeScript", icon: dev("typescript") },
      { name: "React", icon: dev("react") },
      { name: "Next.js", icon: dev("nextjs") },
      { name: "Tailwind CSS", icon: dev("tailwindcss") },
      { name: "Three.js", icon: dev("threejs") },
    ],
  },
  {
    group: "Backend",
    th: "ระบบหลังบ้านและ API",
    items: [
      { name: "Python", icon: dev("python") },
      { name: "FastAPI", icon: dev("fastapi") },
      { name: "Flask", icon: dev("flask") },
      { name: "Node.js", icon: dev("nodejs") },
      { name: "Express", icon: dev("express") },
      { name: "NestJS", icon: dev("nestjs") },
      { name: "Java", icon: dev("java") },
    ],
  },
  {
    group: "Database",
    th: "ฐานข้อมูล",
    items: [
      { name: "PostgreSQL", icon: dev("postgresql") },
      { name: "MongoDB", icon: dev("mongodb") },
      { name: "MySQL", icon: dev("mysql") },
      { name: "Drizzle ORM", icon: simple("drizzle") },
    ],
  },
  {
    group: "AI & Data",
    th: "โมเดล AI และการหาคำตอบที่ดีที่สุด",
    items: [
      { name: "scikit-learn", icon: dev("scikitlearn") },
      { name: "Jupyter", icon: dev("jupyter") },
      { name: "OR-Tools", icon: simple("google") },
    ],
  },
  {
    group: "Robotics",
    th: "ควบคุมหุ่นยนต์",
    items: [
      { name: "KUKA", icon: fluent("Mechanical arm/3D/mechanical_arm_3d.png") },
      { name: "C", icon: dev("c") },
      { name: "C++", icon: dev("cplusplus") },
    ],
  },
  {
    group: "Tools & DevOps",
    th: "เครื่องมือ, Deploy และ CI",
    items: [
      { name: "Git", icon: dev("git") },
      { name: "GitHub", icon: dev("github") },
      { name: "GitHub Actions", icon: dev("githubactions") },
      { name: "Docker", icon: dev("docker") },
      { name: "Linux", icon: dev("linux") },
      { name: "Figma", icon: dev("figma") },
      { name: "Postman", icon: dev("postman") },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  /** ภาพหน้าจอโปรเจกต์ ถ้าไม่มีจะแสดงอีโมจิแทน */
  image?: string;
  emoji: string;
};

// ผลงานจาก GitHub: https://github.com/NXMMINTT
export const projects: Project[] = [
  {
    title: "MEDORA-AI",
    description:
      "AI ตรวจอาการเบื้องต้น พิมพ์อาการเป็นภาษาไทยหรืออังกฤษ แล้วจัดอันดับ 3 โรคที่น่าจะเป็น พร้อมอธิบายเหตุผล ถามคำถามเพิ่มเพื่อแยกโรค และเตือนอาการฉุกเฉิน",
    tags: ["FastAPI", "scikit-learn", "React", "TypeScript", "Docker"],
    repo: "https://github.com/NXMMINTT/Medora-AI",
    emoji: "🩺",
  },
  {
    title: "CASELINK",
    description:
      "เว็บต้นแบบจัดการสำนวนคดีสำหรับทนายความ เชื่อมโยงบุคคล เหตุการณ์ เอกสาร และข้อกฎหมายผ่าน Mind Map พร้อม Timeline, Checklist และมุมมองลูกความ",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/NXMMINTT/CASELINK",
    emoji: "⚖️",
  },
  {
    title: "ROUTE",
    description:
      "เว็บจัดเส้นทางรถส่งของหลายคัน (CVRP) ด้วย Google OR-Tools ให้ระยะทางรวมสั้นที่สุด ดูผลบนแผนที่ 2D ฉาก 3D และหน้า Benchmark — AI Hackathon BU × SCG-CPAC 2026",
    tags: ["FastAPI", "OR-Tools", "React", "Three.js"],
    repo: "https://github.com/NXMMINTT/ROUTE",
    emoji: "🚚",
  },
  {
    title: "DORMITORY",
    description:
      "ระบบหอพักรายเดือนครบวงจร มีหน้าเว็บแนะนำหอ หลังบ้านจัดการห้อง ผู้เช่า สัญญา มิเตอร์ ออกบิล ตรวจสลิป และหน้าผู้เช่าจ่ายบิลผ่าน QR พร้อมเพย์",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Drizzle", "Docker"],
    repo: "https://github.com/NXMMINTT/Dormitory",
    emoji: "🏠",
  },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  detail: string;
  tags?: string[];
  /** ยังทำอยู่ — แสดงป้าย "ตอนนี้" */
  current?: boolean;
  emoji: string;
};

export const experience: Experience[] = [
  {
    period: "ต.ค. 2026 — ปัจจุบัน",
    title: "Google Student Ambassador",
    org: "Google Student Ambassador Program · กรุงเทพฯ",
    detail: "ได้รับคัดเลือกเป็น Google Student Ambassador (GSA) รุ่นที่ 2",
    current: true,
    emoji: "🌟",
  },
  {
    period: "มิ.ย. 2026 — ปัจจุบัน",
    title: "Robotic Software Engineer (ฝึกงาน)",
    org: "DNA Robotics · ปทุมธานี",
    detail: "พัฒนาซอฟต์แวร์ควบคุมหุ่นยนต์ KUKA และพัฒนาเว็บแบบ Full-Stack",
    tags: ["KUKA", "Full-Stack"],
    current: true,
    emoji: "🤖",
  },
  {
    period: "มิ.ย. 2025 — ส.ค. 2025",
    title: "Full-Stack Developer (ฝึกงาน)",
    org: "APT X Co. Ltd. · กรุงเทพฯ",
    detail: "พัฒนาโมดูลระบบ ERP และออกแบบ RESTful API เชื่อม Frontend กับ Backend ทำงานกับทีมแบบ Agile/Scrum",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Figma"],
    emoji: "💻",
  },
  {
    period: "ฟรีแลนซ์",
    title: "Frontend Developer & UX/UI Designer",
    org: "SIB HOK TOR KAO PRODUCTION",
    detail: "ออกแบบโปรโตไทป์ด้วย Figma และพัฒนาเว็บที่รองรับทุกอุปกรณ์",
    tags: ["Figma", "React", "Next.js", "Tailwind CSS"],
    emoji: "🎨",
  },
];

// งานอาสาและกิจกรรม (จาก LinkedIn)
export type Activity = {
  kind: "competition" | "volunteer";
  period: string;
  role: string;
  event: string;
  org: string;
  detail: string;
  emoji: string;
  /** รางวัลที่ได้ เช่น "🥇 เหรียญทอง" */
  award?: string;
  /** รูปกิจกรรม (ไฟล์อยู่ใน public/) */
  image?: string;
};

export const activities: Activity[] = [
  // ---- การแข่งขัน ----
  {
    kind: "competition",
    period: "15–16 ต.ค. 2026",
    role: "U-Hackathon 2026",
    event: "Flow Summit by U-topia",
    org: "โรงแรมอวานี สุขุมวิท กรุงเทพฯ",
    detail: "แฮกกาธอน 24 ชั่วโมง สาย AI และ Web3 ชิงเงินรางวัลรวม 1,000,000 บาท",
    award: "🎯 เข้ารอบ 40 ทีมสุดท้าย",
    image: "/activities/u-hackathon-2026.jpg",
    emoji: "💻",
  },
  {
    kind: "competition",
    period: "2026",
    role: "AI Hackathon Route Optimization 2026",
    event: "BU × SCG-CPAC",
    org: "ผลงาน: ROUTE",
    detail:
      "พัฒนาเว็บจัดเส้นทางรถส่งของหลายคัน (CVRP) ด้วย Google OR-Tools ให้ระยะทางรวมสั้นที่สุด ตามเกณฑ์ gap ต่ำกว่า 5% จากค่า optimal",
    award: "⏳ รอประกาศผล",
    emoji: "🚚",
  },
  // ---- การแข่งขันหุ่นยนต์ (สมัยมัธยม) ----
  {
    kind: "competition",
    period: "2022",
    role: "SUMO ROBOT EV3",
    event: "Thailand Manual Robot Challenge 2022",
    org: "รายการคัดเลือกตัวแทนประเทศไทยสู่การแข่งขันระดับนานาชาติ",
    detail: "แข่งขันหุ่นยนต์ซูโม่ด้วย LEGO EV3 ในรายการคัดเลือกตัวแทนประเทศไทยไปแข่งระดับนานาชาติ",
    award: "🥈 เหรียญเงิน",
    image: "/activities/sumo-tmr-2022.jpg",
    emoji: "🤖",
  },
  {
    kind: "competition",
    period: "ปีการศึกษา 2565",
    role: "การแข่งขันหุ่นยนต์ระดับกลาง",
    event: "งานศิลปหัตถกรรมนักเรียน ครั้งที่ 70",
    org: "ระดับเขตพื้นที่การศึกษา ระดับจังหวัด",
    detail: "แข่งขันหุ่นยนต์ EV3 วิ่งตามภารกิจบนสนามแข่ง ในงานศิลปหัตถกรรมนักเรียน",
    award: "🥇 เหรียญทอง",
    image: "/activities/ev3-silpa-2565.jpg",
    emoji: "🤖",
  },
  {
    kind: "competition",
    period: "สมัยมัธยม",
    role: "หุ่นยนต์วิ่งตามเส้นจ้าวความเร็ว",
    event: "Line Tracking Robot Contest",
    org: "คณะวิศวกรรมศาสตร์ มหาวิทยาลัยภาคตะวันออกเฉียงเหนือ",
    detail: "สร้างหุ่นยนต์อัตโนมัติที่วิ่งตามเส้นด้วยความเร็วสูง โดยใช้ทักษะด้านหุ่นยนต์และระบบควบคุม",
    image: "/activities/line-tracking.jpg",
    emoji: "🤖",
  },
  {
    kind: "competition",
    period: "สมัยมัธยม",
    role: "ผู้รับผิดชอบหลักนิทรรศการ",
    event: "นิทรรศการนวัตกรรมหุ่นยนต์",
    org: "หุ่นยนต์และระบบสมองกลฝังตัว",
    detail: "ได้รับคัดเลือกให้ออกแบบและจัดแสดงนิทรรศการนวัตกรรมหุ่นยนต์ เพื่อเผยแพร่ความรู้ด้านเทคโนโลยีให้คณะครูและนักเรียน",
    image: "/activities/robot-exhibition.jpg",
    emoji: "🤖",
  },
  // ---- งานอาสา ----
  {
    kind: "volunteer",
    period: "ส.ค. 2025",
    role: "Exhibition Staff",
    event: "Open House BU 2025",
    org: "คณะวิศวกรรมศาสตร์ · มหาวิทยาลัยกรุงเทพ",
    detail:
      "ดูแลบูธและแนะนำ “Chinatown Wonder” เกมกระดานเสมือนจริง (AR) บน Android ผลงานของรุ่นพี่คณะวิศวกรรมศาสตร์ ที่พาเที่ยวเยาวราชผ่านเกม พัฒนาด้วย Unity และ Photon Engine",
    image: "/activities/chinatown-wonder-2025.jpg",
    emoji: "🏮",
  },
  {
    kind: "volunteer",
    period: "พ.ย. 2023",
    role: "Student Project Exhibitor",
    event: "BU Open House 2023",
    org: "BU Robot Studio · มหาวิทยาลัยกรุงเทพ",
    detail:
      "จัดแสดงตู้ขายสายไหมอัตโนมัติที่พัฒนาร่วมกับทีม BU Robot Studio และอธิบายการทำงานของฮาร์ดแวร์และซอฟต์แวร์ให้ผู้เข้าชม",
    image: "/activities/bu-open-house-2023.jpg",
    emoji: "🍬",
  },
  {
    kind: "volunteer",
    period: "พ.ย. 2023",
    role: "Workshop Facilitator",
    event: "4th ACSP Educational Fair",
    org: "BU Swift Coding Club · Assumption College Samutprakarn",
    detail: "สอนพื้นฐานการเขียนโค้ดด้วย Swift Playgrounds ให้นักเรียนทุกวัยผ่านกิจกรรมลงมือทำที่บูธ",
    image: "/activities/acsp-swift-workshop-2023.jpg",
    emoji: "🧩",
  },
  {
    kind: "volunteer",
    period: "ก.ย. 2023",
    role: "Event Staff",
    event: "BURS Masterclass",
    org: "มหาวิทยาลัยกรุงเทพ",
    detail: "ทีมงานช่วยจัดงาน BURS Masterclass เวิร์กช็อปเขียนแอปบน Mac",
    image: "/activities/burs-masterclass-2023.jpg",
    emoji: "🎟",
  },
];

export const education = {
  period: "มิ.ย. 2023 — ปัจจุบัน",
  degree: "วิศวกรรมคอมพิวเตอร์และหุ่นยนต์",
  school: "มหาวิทยาลัยกรุงเทพ",
  detail: "School of Information Engineering",
};
