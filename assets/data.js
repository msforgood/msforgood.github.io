// ─────────────────────────────────────────────────────────────
//  이 파일만 수정하면 사이트 전체 내용이 바뀝니다.
//  번역이 필요한 문장은 { en: "...", ko: "..." } 형태로 쓰세요.
//  그냥 문자열로 쓰면 두 언어에서 똑같이 표시됩니다.
//  date: "YYYY.MM" (또는 "YYYY") 가 있는 항목은 Archive 타임라인에 자동으로 들어갑니다.
// ─────────────────────────────────────────────────────────────
window.PROFILE = {
  name: { en: "Minseo Kim", ko: "김민서" },
  initials: "MK",
  role: { en: "AI Security Researcher · Founder", ko: "AI 보안 연구자 · 창업가" },
  tagline: { en: "AI for Good.", ko: "AI for Good." },
  intro: {
    en: "Founder & CEO of Nouri and M.S. student in Cybersecurity at Kyung Hee University, working on AI security, satellite security, and AI that does real good.",
    ko: "Nouri의 대표이자 경희대학교 사이버보안 석사과정생입니다. AI 보안과 위성 보안, 그리고 실제로 도움이 되는 AI를 연구하고 만듭니다.",
  },
  location: { en: "Seoul, Korea", ko: "대한민국 서울" },
  avatar: "", // 예: "assets/me.jpg" (비워두면 이니셜 표시)

  links: [
    { label: "GitHub", url: "https://github.com/msforgood", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/minseo-kim-7432b6277/", icon: "linkedin" },
    { label: { en: "Email", ko: "이메일" }, url: "mailto:mskim.link@gmail.com", icon: "mail" },
  ],

  // 상단 하이라이트 숫자 (null이면 자동 계산)
  stats: null,

  experience: [
    {
      org: "Nouri",
      title: "CEO & Founder",
      period: { en: "2023.11 — Present", ko: "2023.11 — 현재" },
      date: "2023.11",
      location: { en: "Seoul", ko: "서울" },
      detail: "",
    },
    {
      org: { en: "SW Maestro", ko: "SW 마에스트로" },
      title: "Team Leader & AI Engineer",
      period: "2023.04 — 2023.12",
      date: "2023.04",
      location: { en: "Gangnam, Seoul", ko: "서울 강남" },
      detail: {
        en: "Organized by the Ministry of Science and ICT & IITP · Operated by the Federation of Korean Information Industries",
        ko: "주관: 과학기술정보통신부, 정보통신기획평가원 · 운영: 한국정보산업연합회",
      },
    },
    {
      org: "BRAINTWORK",
      title: "Machine Learning Consultant",
      period: "2023.04 — 2023.07",
      date: "2023.04",
      location: { en: "Yongin", ko: "용인" },
      detail: "",
    },
    {
      org: "MLVC Lab",
      title: "Undergraduate Researcher",
      period: "2022.09 — 2024.08",
      date: "2022.09",
      location: { en: "Yongin", ko: "용인" },
      detail: "",
    },
  ],

  education: [
    {
      school: { en: "Kyung Hee University", ko: "경희대학교" },
      degree: { en: "M.S. in Cybersecurity, Department of Computer Science", ko: "컴퓨터공학과 사이버보안 석사" },
      period: { en: "2025.09 — Present", ko: "2025.09 — 현재" },
      date: "2025.09",
      detail: "",
    },
    {
      school: { en: "Kyung Hee University", ko: "경희대학교" },
      degree: { en: "B.S. in Computer Science & Engineering", ko: "컴퓨터공학과 공학사" },
      period: "2020.03 — 2025.08",
      date: "2025.08",
      detail: "",
    },
  ],

  awards: [
    {
      title: { en: "Seoul WomanTech Hackathon", ko: "서울 우먼테크 해커톤" },
      org: "",
      date: "2024",
      desc: "",
    },
    {
      title: "Excellent Project",
      org: "", // TODO: 수여 기관/연도 (예: SW Maestro)
      date: "",
      desc: "",
    },
    {
      title: { en: "Medical Big Data AI Imaging Diagnosis Hackathon", ko: "의료 빅데이터 활용 인공지능(AI) 영상진단 개발 해커톤" },
      org: "",
      date: "2022",
      desc: "",
    },
    {
      title: "Medical Synthetic Data AI Challenge",
      org: "",
      date: "2022",
      desc: "",
    },
    {
      title: { en: "KHUggle Image Restoration AI Competition", ko: "KHUggle 이미지 복원 AI 경진대회" },
      org: { en: "Kyung Hee University", ko: "경희대학교" },
      date: "2022",
      desc: "",
    },
  ],

  projects: [
    {
      name: "TO:Ace",
      summary: {
        en: "AI that takes lab admin requests by email, dashboard or Telegram, handles them on per-user Linux workspaces, and replies with the result",
        ko: "연구실 행정 요청을 메일·대시보드·텔레그램으로 받아 사용자별 Linux 작업 환경에서 AI가 처리하고 회신하는 서비스",
      },
      period: "2026",
      date: "2026.09",
      role: "",
      tags: ["NestJS", "SvelteKit", "KVM", "AI Agent"],
      link: "",
      color: "purple",
    },
    {
      name: { en: "Sikdan Bisuh", ko: "식단비서" },
      summary: {
        en: "A meal-planning assistant that handles weekly menus, ingredient math and staff notices for cafeteria dietitians",
        ko: "매주 반복되는 식단표 작성, 식재료 계산, 직원 공지를 한 번에 끝내는 영양사 식단 비서",
      },
      period: "2026",
      date: "2026.08",
      role: "Nouri",
      tags: ["Next.js", "TypeScript"],
      link: "",
      color: "orange",
    },
    {
      name: { en: "Place Lab Website", ko: "플레이스 연구소 웹사이트" },
      summary: {
        en: "Website and data platform for Place Lab",
        ko: "플레이스 연구소의 웹사이트 및 데이터 플랫폼",
      },
      period: "2024 — ",
      date: "2024.09",
      role: "Nouri",
      tags: ["Next.js", "React"],
      link: "",
      color: "green",
    },
  ],

  // 논문·특허 (날짜를 넣으면 Archive에도 표시됩니다)
  research: [
    {
      type: "paper",
      title: "Enhancing Implicit Neural Representations With Transfer Learning",
      venue: "",
      date: "",
    },
    {
      type: "paper",
      title: { en: "A Metric-Based Framework for Effective Transfer Learning of INRs", ko: "INR의 효과적인 전이 학습을 위한 메트릭 기반 프레임워크" },
      venue: "",
      date: "",
    },
    {
      type: "paper",
      title: { en: "Improving INR Training Performance and Speed via Transfer Learning", ko: "전이 학습을 통한 INR 학습 성능 및 속도 향상" },
      venue: "",
      date: "",
    },
    {
      type: "paper",
      title: { en: "An LLM-Based Web Service Security Monitoring System Using Prompting and Fine-Tuning", ko: "LLM 기반 프롬프트 및 미세 조정 기법을 활용한 웹 서비스 보안 관제 시스템" },
      venue: "",
      date: "",
    },
    {
      type: "patent",
      title: { en: "Device and Method for Reading Storybooks to Children in a Caregiver's Voice Using Speech Synthesis", ko: "음성 합성 기술을 이용해 양육자의 목소리로 아이에게 동화 책을 읽어주는 장치 및 방법" },
      venue: "",
      date: "",
    },
  ],

  certifications: [
    { name: "Technology Leadership Program", issuer: "", date: "" },
    { name: { en: "KHU Valley Program, 5th Cohort", ko: "KHU Valley Program 5기" }, issuer: { en: "Kyung Hee University", ko: "경희대학교" }, date: "" },
    { name: { en: "LG Aimers, 2nd Cohort", ko: "LG Aimers 2기" }, issuer: "LG AI Research", date: "" },
  ],

  // ── Archive 추가 항목 ──
  // 위 항목들 외의 활동(조교, 발표, 대외활동 등)을 넣으세요.
  // image: "assets/archive/xxx.jpg" 를 넣으면 해당 월 상단에 큰 커버 이미지로 표시됩니다.
  archive: [
    {
      date: "2025.09",
      type: "activity",
      title: { en: "Teaching Assistant — Data Structures", ko: "자료구조 수업 조교" },
      org: { en: "Kyung Hee University", ko: "경희대학교" },
      desc: { en: "Maintaining lab materials for the course", ko: "실습 자료 저장소 관리" },
      link: "https://github.com/msforgood/data-structure-assist",
    },
  ],

  skills: ["AI Security", "Satellite Security", "Cybersecurity", "Machine Learning", "LLM", "Implicit Neural Representations", "Transfer Learning"],
};

// 고정 문구 번역 (섹션 제목, 버튼 등)
window.I18N = {
  en: {
    "nav.projects": "Projects", "nav.experience": "Experience", "nav.awards": "Awards", "nav.education": "Education",
    "nav.research": "Research", "nav.certs": "Certifications", "nav.archive": "Archive", "nav.contact": "Contact",
    "projects.title": "Projects.", "projects.sub": " Things I've built.",
    "experience.title": "Experience.", "experience.sub": " Where I've worked.",
    "awards.title": "Awards.", "awards.sub": " Moments of recognition.",
    "education.title": "Education.", "education.sub": " Where I learned.",
    "research.title": "Research.", "research.sub": " Publications & patents.",
    "research.paper": "PAPER", "research.patent": "PATENT",
    "certs.title": "Certifications.", "certs.sub": " Programs & credentials.",
    "skills.title": "Skills",
    "archive.title": "Archive.", "archive.sub": " Everything, in order.",
    "archive.all": "ALL", "archive.project": "PROJECT", "archive.career": "CAREER", "archive.award": "AWARD",
    "archive.education": "EDU", "archive.research": "RESEARCH", "archive.cert": "CERT", "archive.activity": "ACTIVITY",
    "archive.more": "VIEW MORE", "archive.less": "SHOW LESS", "archive.empty": "Nothing here yet.",
    "contact.title": "Let's build together.",
    "contact.sub": "Always open to new opportunities and collaborations.",
    "contact.mail": "Send an email",
    "stats.projects": "Projects", "stats.awards": "Awards", "stats.research": "Publications & Patents",
  },
  ko: {
    "nav.projects": "프로젝트", "nav.experience": "경력", "nav.awards": "수상", "nav.education": "학력",
    "nav.research": "연구", "nav.certs": "자격·수료", "nav.archive": "아카이브", "nav.contact": "연락처",
    "projects.title": "Projects.", "projects.sub": " 직접 만든 것들.",
    "experience.title": "Experience.", "experience.sub": " 일해온 곳들.",
    "awards.title": "Awards.", "awards.sub": " 인정받은 순간들.",
    "education.title": "Education.", "education.sub": " 배움의 궤적.",
    "research.title": "Research.", "research.sub": " 논문과 특허.",
    "research.paper": "논문", "research.patent": "특허",
    "certs.title": "Certifications.", "certs.sub": " 수료 프로그램과 자격.",
    "skills.title": "기술 스택",
    "archive.title": "Archive.", "archive.sub": " 시간 순으로 모아본 기록.",
    "archive.all": "ALL", "archive.project": "PROJECT", "archive.career": "CAREER", "archive.award": "AWARD",
    "archive.education": "EDU", "archive.research": "RESEARCH", "archive.cert": "CERT", "archive.activity": "ACTIVITY",
    "archive.more": "더 보기", "archive.less": "접기", "archive.empty": "아직 기록이 없어요.",
    "contact.title": "함께 만들어요.",
    "contact.sub": "새로운 기회나 협업 제안은 언제든 환영입니다.",
    "contact.mail": "이메일 보내기",
    "stats.projects": "프로젝트", "stats.awards": "수상", "stats.research": "논문·특허",
  },
};
