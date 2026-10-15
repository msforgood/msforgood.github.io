// ─────────────────────────────────────────────────────────────
//  이 파일만 수정하면 사이트 전체 내용이 바뀝니다.
//  (HTML/CSS는 건드릴 필요 없음)
// ─────────────────────────────────────────────────────────────
window.PROFILE = {
  name: "김민수",                     // TODO: 실명
  nameEn: "Minsu Kim",                // TODO
  role: "Software Engineer",
  tagline: "생각을 코드로,\n코드를 경험으로.",
  intro:
    "사용자에게 닿는 제품을 만드는 개발자입니다. 웹과 백엔드, 그리고 AI를 활용한 서비스를 설계하고 구현합니다.",
  location: "Seoul, Korea",
  avatar: "", // 예: "assets/me.jpg" (비워두면 이니셜 표시)

  links: [
    { label: "GitHub", url: "https://github.com/msforgood", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-id", icon: "linkedin" }, // TODO
    { label: "Email", url: "mailto:imkmsh@khu.ac.kr", icon: "mail" },
    { label: "Blog", url: "https://velog.io/@your-id", icon: "pen" },                 // TODO (없으면 삭제)
  ],

  // 상단 하이라이트 숫자 (자동 계산하려면 비워두세요)
  stats: null,

  education: [
    {
      school: "경희대학교",
      degree: "컴퓨터공학과 학사",
      period: "2020 — 현재",
      detail: "GPA 4.0 / 4.3 · 관련 과목: 자료구조, 알고리즘, 운영체제",
    },
    {
      school: "OO고등학교",
      degree: "졸업",
      period: "2017 — 2020",
      detail: "",
    },
  ],

  awards: [
    { title: "OO 해커톤 대상", org: "OO재단", date: "2025.11", desc: "AI 기반 점심 추천 서비스로 1위 수상" },
    { title: "SW 경진대회 우수상", org: "경희대학교", date: "2025.06", desc: "자료구조 학습 보조 도구 개발" },
    { title: "캡스톤 디자인 최우수상", org: "경희대학교 공과대학", date: "2024.12", desc: "" },
  ],

  projects: [
    {
      name: "Hanvit Lunch",
      summary: "오늘 뭐 먹지? 고민을 끝내는 점심 추천 서비스",
      period: "2025",
      role: "Full-stack",
      tags: ["Next.js", "TypeScript", "Supabase"],
      link: "https://github.com/nouri-company/hanvit-lunch",
      color: "orange",
    },
    {
      name: "Data Structure Assist",
      summary: "자료구조를 시각적으로 이해하도록 돕는 학습 도구",
      period: "2025",
      role: "Lead Developer",
      tags: ["Python", "Visualization"],
      link: "https://github.com/msforgood/data-structure-assist",
      color: "blue",
    },
    {
      name: "Place",
      summary: "공간 정보를 기반으로 한 웹 플랫폼",
      period: "2024 — 2025",
      role: "Frontend",
      tags: ["Next.js", "React", "Map API"],
      link: "https://github.com/nouri-company/place-nextjs-web",
      color: "green",
    },
    {
      name: "Project Four",
      summary: "프로젝트 설명을 한 줄로 적어주세요",
      period: "2024",
      role: "Backend",
      tags: ["Spring", "MySQL"],
      link: "",
      color: "purple",
    },
  ],

  certifications: [
    { name: "정보처리기사", issuer: "한국산업인력공단", date: "2025.09" },
    { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2025.04" },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024.12" },
    { name: "TOEIC 900", issuer: "ETS", date: "2024.08" },
  ],

  skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Java", "Spring", "PostgreSQL", "AWS", "Docker", "Git"],
};
