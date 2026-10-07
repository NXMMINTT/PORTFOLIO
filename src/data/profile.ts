// แก้ไขข้อมูลทั้งหมดของเว็บได้ที่ไฟล์นี้ไฟล์เดียว

export const profile = {
  name: "THIDARAT TARASI",
  nickname: "MINDMINT",
  role: "Robotic Software Engineer",
  tagline: "นักศึกษาวิศวกรรมคอมพิวเตอร์และหุ่นยนต์ ผู้หลงใหลใน Full-Stack และ Robotics",
  intro:
    "นักศึกษาวิศวกรรมคอมพิวเตอร์และหุ่นยนต์ มหาวิทยาลัยกรุงเทพ ที่สนใจการพัฒนาซอฟต์แวร์แบบ Full-Stack และซอฟต์แวร์สำหรับหุ่นยนต์ ชอบเปลี่ยนไอเดียให้เป็นระบบที่ใช้งานได้จริง",
  location: "Pathum Thani, Thailand",
  email: "thidarat.workk@gmail.com",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/NXMMINTT" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thidarat-tarasi" },
  ],
  stats: [
    { value: "4", label: "ประสบการณ์ทำงาน" },
    { value: "6+", label: "โปรเจกต์" },
    { value: "20+", label: "เทคโนโลยี" },
  ],
};

export const about = [
  "ปัจจุบันฝึกงานเป็น Robotic Software Engineer ที่ DNA Robotics และเป็น Google Student Ambassador รุ่นที่ 2",
  "มุ่งพัฒนาทักษะการเขียนโปรแกรม นำความรู้ไปใช้กับโจทย์จริง และสั่งสมประสบการณ์การพัฒนาซอฟต์แวร์ในระดับมืออาชีพ",
];

export const skills = [
  {
    group: "Frontend",
    items: ["HTML / CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    group: "Robotics",
    items: ["KUKA", "C / C++", "Java", "Embedded Systems"],
  },
  {
    group: "Tools",
    items: ["Git / GitHub", "Docker", "Postman", "Figma", "Linux", "Stripe", "Clerk"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "Full-Stack Hotel Booking",
    description:
      "เว็บจองโรงแรมแบบ Full-Stack ชำระเงินออนไลน์ด้วย Stripe ยืนยันตัวตนด้วย Clerk และจัดการข้อมูลโรงแรม ประวัติการจอง และรูปภาพบน MongoDB และ Cloud Storage",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    repo: "https://github.com/",
    emoji: "🏨",
  },
  {
    title: "Full-Stack Delivery Platform",
    description:
      "แพลตฟอร์มสั่งซื้อของชำออนไลน์ แยกแดชบอร์ดผู้ใช้และผู้ขาย/แอดมิน จัดการสต็อกแบบเรียลไทม์ ตะกร้าสินค้า ค้นหาสินค้า และติดตามประวัติการสั่งซื้อ",
    tags: ["Full-Stack", "Dashboard", "Real-time"],
    repo: "https://github.com/",
    emoji: "🛒",
  },
  {
    title: "Medora",
    description:
      "เว็บแนะนำยาและทำนายโรคจากอาการ วิเคราะห์อาการแล้วให้ผลลัพธ์ครบถ้วน ทั้งยาที่แนะนำ ข้อควรระวัง การออกกำลังกาย และคำแนะนำด้านอาหาร",
    tags: ["Python", "Flask", "Machine Learning"],
    repo: "https://github.com/",
    emoji: "🩺",
  },
  {
    title: "Non-Preemptive LCFS Calculator",
    description:
      "เครื่องมือคำนวณการจัดตารางซีพียูแบบ Non-Preemptive LCFS รองรับการนำเข้าข้อมูลจากไฟล์ .csv และ .xlsx และวิเคราะห์ TAT, WT และ CPU Utilization",
    tags: ["Operating Systems", "Algorithm"],
    repo: "https://github.com/",
    emoji: "🧮",
  },
  {
    title: "KUKA Block Editor",
    description:
      "เครื่องมือเขียนโปรแกรมควบคุมแขนกลแบบลากวางบล็อก ช่วยให้มือใหม่เริ่มต้นได้ง่าย",
    tags: ["Visual Programming", "Robotics"],
    repo: "https://github.com/",
    emoji: "🤖",
  },
  {
    title: "Dormitory Manager",
    description:
      "ระบบบริหารหอพัก จัดการผู้เช่า ออกบิลค่าน้ำค่าไฟ และติดตามการชำระเงินรายเดือน",
    tags: ["Full-Stack", "Database"],
    repo: "https://github.com/",
    emoji: "🏠",
  },
];

export const experience = [
  {
    period: "ต.ค. 2026 — ปัจจุบัน",
    title: "Google Student Ambassador",
    org: "Google Student Ambassador Program · กรุงเทพฯ",
    detail: "ได้รับคัดเลือกเป็น Google Student Ambassador (GSA) รุ่นที่ 2",
  },
  {
    period: "มิ.ย. 2026 — ปัจจุบัน",
    title: "Robotic Software Engineer (ฝึกงาน)",
    org: "DNA Robotics · ปทุมธานี",
    detail: "พัฒนาซอฟต์แวร์ควบคุมหุ่นยนต์ KUKA และพัฒนาเว็บแบบ Full-Stack",
  },
  {
    period: "มิ.ย. 2025 — ส.ค. 2025",
    title: "Full-Stack Developer (ฝึกงาน)",
    org: "APT X Co. Ltd. · กรุงเทพฯ",
    detail:
      "พัฒนาโมดูลระบบ ERP ด้วย FastAPI (Python) และ PostgreSQL ออกแบบ RESTful API เชื่อม Frontend กับ Backend ออกแบบ UI/UX ด้วย Figma ทำงานร่วมกับทีมแบบ Agile/Scrum และดูแลโค้ดและการ Deploy ด้วย Git/GitHub และ Docker",
  },
  {
    period: "ฟรีแลนซ์",
    title: "Frontend Developer & UX/UI Designer",
    org: "SIB HOK TOR KAO PRODUCTION",
    detail:
      "ออกแบบโปรโตไทป์ความละเอียดสูงด้วย Figma สำหรับธุรกิจโปรดักชัน และพัฒนาเว็บที่รวดเร็วและรองรับทุกอุปกรณ์ด้วย React.js, Next.js และ Tailwind CSS",
  },
  {
    period: "มิ.ย. 2023 — ปัจจุบัน",
    title: "วิศวกรรมคอมพิวเตอร์และหุ่นยนต์",
    org: "มหาวิทยาลัยกรุงเทพ",
    detail: "School of Information Engineering สาขาวิศวกรรมคอมพิวเตอร์และหุ่นยนต์",
  },
];
