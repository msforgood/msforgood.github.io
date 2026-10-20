// ─────────────────────────────────────────────────────────────
//  이 파일만 수정하면 사이트 전체 내용이 바뀝니다.
//  번역이 필요한 문장은 { en: "...", ko: "..." } 형태로 쓰세요.
//  그냥 문자열로 쓰면 두 언어에서 똑같이 표시됩니다.
//  date: "YYYY.MM" (또는 "YYYY") 가 있는 항목은 Archive 타임라인에 자동으로 들어갑니다.
//  구분 기호(·, —)는 쓰지 마세요. 여러 항목은 [a, b] 배열로 쓰면 구분선이 그려지고,
//  기간은 { from, to } 로 쓰면 두 날짜 사이에 선이 그려집니다.
// ─────────────────────────────────────────────────────────────
const PRESENT = { en: "Present", ko: "현재" };

window.PROFILE = {
  name: { en: "Minseo Kim", ko: "김민서" },
  initials: "MK",
  role: [{ en: "Founder", ko: "창업가" }, { en: "Full-stack Developer", ko: "풀스택 개발자" }, { en: "AI Security Researcher", ko: "AI 보안 연구자" }],
  // 배열이면 줄마다 나뉘고 두 번째 줄부터 흐리게 표시됩니다
  tagline: [{ en: "AI that helps real people.", ko: "실제 사람을 돕는 AI." }, { en: "SMBs, parents, and labs.", ko: "자영업자, 부모, 연구실." }],
  intro: {
    en: "Founder & CEO of Nouri and M.S. student in Cybersecurity at Kyung Hee University. I plan services people actually pay for, build them end to end on web and mobile, and research AI security.",
    ko: "Nouri의 대표이자 경희대학교 사이버보안 석사과정생입니다. 실제로 팔리는 서비스를 기획해 웹과 앱으로 직접 만들고, AI 보안을 연구합니다.",
  },
  location: { en: "Seoul, Korea", ko: "대한민국 서울" },
  avatar: "", // 예: "assets/me.jpg" (비워두면 이니셜 표시)

  links: [
    { label: "GitHub", url: "https://github.com/msforgood", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/minseo-kim-7432b6277/", icon: "linkedin" },
    { label: { en: "Blog", ko: "블로그" }, url: "blog/", icon: "pen" },
    { label: { en: "Email", ko: "이메일" }, url: "mailto:mskim.link@gmail.com", icon: "mail" },
  ],

  // 상단 하이라이트 숫자 (null이면 자동 계산)
  stats: null,

  experience: [
    {
      org: "White Quokka",
      title: "COO",
      period: { from: "2026.09", to: PRESENT },
      date: "2026.09",
      location: { en: "Seoul", ko: "서울" },
      detail: "Labdak",
    },
    {
      org: "Nouri",
      title: "CEO & Founder",
      period: { from: "2023.11", to: PRESENT },
      date: "2023.11",
      location: { en: "Seoul", ko: "서울" },
      detail: [
        { en: "Running the company end to end, from product planning to full-stack development and operations", ko: "서비스 기획부터 풀스택 개발, 운영까지 직접 맡고 있습니다" },
        { en: "Incorporated 2024.05", ko: "2024.05 법인 설립" },
        { en: "Place Lab, Nouri Tale", ko: "플레이스 연구소, Nouri Tale" },
      ],
    },
  ],

  education: [
    {
      school: { en: "PWNLAB, Kyung Hee University", ko: "경희대학교 PWNLAB" },
      degree: { en: "M.S. in Cybersecurity, Department of Computer Science", ko: "컴퓨터공학과 사이버보안 석사" },
      period: { from: "2025.09", to: PRESENT },
      link: "https://pwnlab.kr",
      date: "2025.09",
      detail: "",
    },
    {
      school: { en: "Kyung Hee University", ko: "경희대학교" },
      degree: { en: "B.S. in Computer Science & Engineering", ko: "컴퓨터공학과 공학사" },
      period: { from: "2020.03", to: "2025.08" },
      date: "2025.08",
      detail: "",
    },
    {
      school: { en: "MLVC Lab, Kyung Hee University", ko: "경희대학교 MLVC Lab" },
      degree: { en: "Undergraduate Researcher", ko: "학부 연구생" },
      period: { from: "2022.09", to: "2024.08" },
      date: "2022.09",
      detail: { en: "Transfer learning for Implicit Neural Representations (INR)", ko: "Implicit Neural Representation(INR) 전이 학습 연구" },
    },
  ],

  awards: [
    {
      title: { en: "AI-Powered Vulnerability Discovery System Contest Grand Prize", ko: "AI를 활용한 취약점 발굴 시스템 공모전 대상" },
      org: [{ en: "Korea Institute of Information Security & Cryptology", ko: "한국정보보호학회" }, { en: "KIISC President's Award", ko: "한국정보보호학회장상" }],
      date: "2025.11",
      desc: "",
    },
    {
      title: { en: "Seoul WomanTech Hackathon Grand Prize", ko: "서울 우먼테크 해커톤 대상" },
      org: [{ en: "Seoul Foundation of Women & Family", ko: "서울시여성가족재단" }, { en: "Mayor of Seoul Award", ko: "서울특별시장상" }],
      date: "2024.09",
      desc: [{ en: "Nouri Class", ko: "누리클래스" }, { en: "106 applicants, 1st of 8 finalist teams", ko: "106명 지원, 본선 8팀 중 1위" }],
      link: "https://www.seoultopnews.kr/news/articleView.html?idxno=94863",
    },
    {
      title: { en: "Excellent Paper Award", ko: "우수 논문상" },
      org: { en: "Korea Computer Congress (KCC) 2025", ko: "한국컴퓨터종합학술대회 (KCC 2025)" },
      date: "2025.06",
      desc: { en: "LLM-based web service security monitoring system", ko: "LLM 기반 웹 서비스 보안 관제 시스템" },
    },
    {
      title: "Excellent Project",
      org: "",
      date: "",
      desc: "Nouri Tale (Lovel)",
    },
    {
      title: { en: "Medical Big Data AI Imaging Diagnosis Hackathon", ko: "의료 빅데이터 활용 AI 영상진단 개발 해커톤" },
      org: [{ en: "Ministry of Trade, Industry and Energy", ko: "산업통상자원부" }, { en: "Mayor of Daegu Award", ko: "대구광역시장상" }],
      date: "2022.10",
      desc: { en: "Pneumothorax & breast cancer detection on chest X-ray and mammography", ko: "흉부 X-ray 기흉, 유방촬영 유방암 진단 AI" },
      image: "awards/medical-ai-hackathon/01.jpeg",
      link: "awards/medical-ai-hackathon/",
    },
    {
      title: { en: "Medical Synthetic Data AI Challenge Excellence Award", ko: "Medical Synthetic Data AI Challenge 우수상" },
      org: [{ en: "Promedius", ko: "프로메디우스(주)" }, { en: "NIA", ko: "한국지능정보사회진흥원" }],
      date: "2022.11",
      desc: { en: "Disease classification on synthetic chest X-ray & CT", ko: "합성 흉부 X-ray와 CT로 질병 유무 판독" },
      image: "awards/medical-synthetic-data/01.png",
      link: "awards/medical-synthetic-data/",
    },
    {
      title: { en: "KHUggle Image Restoration AI Competition 4th Place", ko: "KHUggle 이미지 복원 AI 경진대회 4위" },
      org: { en: "Kyung Hee University", ko: "경희대학교" },
      date: "2022.12",
      desc: { en: "4× super-resolution with a 7-model ensemble", ko: "7개 SR 모델 앙상블로 4배 초해상화 복원" },
      image: "awards/khuggle/02.png",
      link: "awards/khuggle/",
    },
  ],

  // 직접 기획하고 운영한 서비스 (가로 스크롤 카드)
  // 상을 받은 대회 프로젝트는 awards에만 넣습니다
  // link: 카드 전체가 링크 / links: 카드 안에 여러 개의 작은 링크 / status: 카드에 붙는 배지
  services: [
    {
      name: { en: "Place Lab", ko: "플레이스 연구소" },
      summary: {
        en: "Online marketing assistant for small business owners, with ~20K members and $240K ARR",
        ko: "자영업자의 온라인 마케팅을 돕는 서비스로, 회원 약 2만 명에 ARR $240K",
      },
      period: { from: "2024.09", to: PRESENT },
      date: "2024.09",
      role: ["Nouri", { en: "Planning & Full-stack", ko: "기획, 풀스택" }],
      tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS", "AWS S3", "PortOne", "PM2", "Amplitude", "Meta Pixel"],
      link: "https://placelab.biz",
      color: "green",
    },
    {
      name: "Nouri Tale",
      summary: {
        en: "An app that reads storybooks to children in their parent's own voice, with 30K+ downloads",
        ko: "부모님 목소리로 아이에게 동화책을 읽어 주는 앱으로, 다운로드 3만+",
      },
      period: { from: "2023.05", to: "2024.08" },
      date: "2023.05",
      role: ["Nouri", { en: "CEO, planning & AI", ko: "대표, 기획, AI 엔지니어링" }],
      tags: ["Flutter", "NestJS", "Prisma", "React", "TTS"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/app/id6454792622" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.sayit.yoggo" },
      ],
      color: "orange",
    },
    {
      name: "Labdak",
      summary: {
        en: "AI that takes lab admin requests by email, dashboard or Telegram, handles them on per-user Linux workspaces, and replies with the result",
        ko: "연구실 행정 요청을 메일, 대시보드, 텔레그램으로 받아 사용자별 Linux 작업 환경에서 AI가 처리하고 회신하는 서비스",
      },
      period: { from: "2026.09", to: PRESENT },
      date: "2026.09",
      role: "White Quokka",
      status: "Coming soon",
      tags: ["NestJS", "SvelteKit", "KVM", "SQLite", "AI Agent"],
      link: "",
      color: "purple",
    },
  ],

  // 행사, 해외 협업, 프로그램처럼 사진과 이야기가 있는 프로젝트
  // link: 상세 페이지 (projects/<slug>/index.html)
  projects: [
    {
      name: { en: "DEF CON 34 Satellite Hacking", ko: "DEF CON 34 위성 해킹 시나리오" },
      summary: {
        en: "Spent a month at GMO Ierae in Tokyo building hands-on satellite attack scenarios, then ran them for visitors at the DEF CON 34 Aerospace Village in Las Vegas. A second year at the village after DEF CON 33 and CODE BLUE Tokyo in 2025.",
        ko: "도쿄 GMO Ierae에서 한 달간 체험형 위성 공격 시나리오를 함께 만들고, 라스베이거스 DEF CON 34 Aerospace Village에서 직접 운영했습니다. 2025년 DEF CON 33과 CODE BLUE Tokyo에 이은 두 번째 해입니다.",
      },
      period: { from: "2026.07", to: "2026.08" },
      date: "2026.07",
      role: ["GMO Ierae", { en: "Scenario design & development", ko: "시나리오 설계, 개발" }],
      place: { en: "Tokyo, Las Vegas", ko: "도쿄, 라스베이거스" },
      tags: ["Satellite Security", "Space Security", "Attack Scenario", "DEF CON"],
      image: "projects/defcon34-satellite/02.jpg",
      link: "projects/defcon34-satellite/",
    },
    {
      name: { en: "SW Maestro 14th Cohort", ko: "SW 마에스트로 14기" },
      summary: {
        en: "Led a team as AI engineer in Korea's national software talent program and started Lovel, the storybook app that became Nouri Tale. Back as an SW Maestro Expert since 2024.",
        ko: "과학기술정보통신부 SW 인재 양성 프로그램에서 팀장이자 AI 엔지니어로 Nouri Tale의 전신인 동화 앱 Lovel을 시작했습니다. 2024년부터는 SW 마에스트로 엑스퍼트로 활동하고 있습니다.",
      },
      period: { from: "2023.04", to: "2023.12" },
      date: "2023.04",
      role: [{ en: "Team Leader", ko: "팀장" }, "AI Engineer"],
      place: { en: "Gangnam, Seoul", ko: "서울 강남" },
      tags: ["AI", "TTS", "Flutter", "Startup"],
      mark: "SW MAESTRO",
      color: "orange",
    },
    {
      name: "Technology Leadership Program",
      summary: {
        en: "Technology leadership program at Carnegie Mellon University's Silicon Valley campus.",
        ko: "카네기멜론대학교 실리콘밸리 캠퍼스에서 진행한 기술 리더십 프로그램입니다.",
      },
      role: "Carnegie Mellon University",
      place: "Silicon Valley",
      tags: ["CMU", "Silicon Valley", "Leadership"],
      mark: "CMU",
      color: "pink",
    },
  ],

  // 논문과 특허 (날짜를 넣으면 Archive에도 표시됩니다)
  research: [
    {
      type: "paper",
      title: "Enhancing Implicit Neural Representations With Transfer Learning",
      venue: "IEEE Access",
      date: "2025.09",
    },
    {
      type: "paper",
      title: { en: "A Metric-Based Framework for Effective Transfer Learning of INRs", ko: "INR의 효과적인 전이 학습을 위한 메트릭 기반 프레임워크" },
      venue: "KCC 2023 (Poster)",
      date: "2023.06",
    },
    {
      type: "paper",
      title: { en: "Improving INR Training Performance and Speed via Transfer Learning", ko: "전이 학습을 통한 INR 학습 성능 및 속도 향상" },
      venue: "KCC 2023 (Oral)",
      date: "2023.06",
    },
    {
      type: "paper",
      title: { en: "An LLM-Based Web Service Security Monitoring System Using Prompting and Fine-Tuning", ko: "LLM 기반 프롬프트 및 미세 조정 기법을 활용한 웹 서비스 보안 관제 시스템" },
      venue: ["KCC 2025 (Poster)", { en: "Excellent Paper Award", ko: "우수 논문상" }],
      date: "2025.06",
    },
    {
      type: "patent",
      title: { en: "Device and Method for Reading Storybooks to Children in a Caregiver's Voice Using Speech Synthesis", ko: "음성 합성 기술을 이용해 양육자의 목소리로 아이에게 동화 책을 읽어주는 장치 및 방법" },
      venue: [{ en: "KR 10-2023-0147731", ko: "출원 10-2023-0147731" }, { en: "Filed", ko: "" }, "Nouri Tale"],
      date: "2023.10",
    },
  ],

  certifications: [
    { name: { en: "KHU Valley Program, 5th Cohort", ko: "KHU Valley Program 5기" }, issuer: { en: "Kyung Hee University", ko: "경희대학교" }, date: "" },
    { name: { en: "LG Aimers, 2nd Cohort", ko: "LG Aimers 2기" }, issuer: "LG AI Research", date: "2023" },
  ],

  // ── Archive 추가 항목 ──
  // 위 항목들 외의 활동(조교, 발표, 대외활동 등)을 넣으세요.
  // image: "assets/archive/xxx.jpg" 를 넣으면 해당 월 상단에 큰 커버 이미지로 표시됩니다.
  archive: [
    {
      date: "2025.06",
      type: "activity",
      title: { en: "Interview with Nouri Company, AI marketing assistant for small businesses", ko: "소상공인 AI 마케팅 어시스턴트 ‘누리컴퍼니’ 인터뷰" },
      org: { en: "Hankyung JOB&JOY", ko: "한경 JOB&JOY" },
      desc: { en: "2025 Hansung Univ. Campus Town Startup CEO", ko: "2025 한성대학교 캠퍼스타운 스타트업 CEO" },
      link: "https://magazine.hankyung.com/job-joy/article/202506171811d",
    },
    {
      date: "2024.12",
      type: "activity",
      title: { en: "Interview with Nouri Company, IT marketing for small businesses", ko: "소상공인 매출 증대 IT 마케팅 솔루션 ‘누리컴퍼니’ 인터뷰" },
      org: { en: "Hankyung JOB&JOY", ko: "한경 JOB&JOY" },
      desc: { en: "2024 Hansung Univ. Campus Town Startup CEO", ko: "2024 한성대학교 캠퍼스타운 스타트업 CEO" },
      link: "https://magazine.hankyung.com/job-joy/article/202412196145d",
    },
    {
      date: "2024.12",
      type: "activity",
      title: { en: "Interview with the Seoul WomanTech Hackathon Grand Prize Team", ko: "서울 우먼테크 해커톤 대상 팀 인터뷰" },
      org: { en: "Seoul Foundation of Women & Family", ko: "서울시여성가족재단" },
      desc: "",
    },
    {
      date: "2024.03",
      type: "activity",
      title: { en: "SW Maestro Expert", ko: "SW 마에스트로 엑스퍼트" },
      org: { en: "SW Maestro", ko: "SW 마에스트로" },
      desc: { from: "2024.03", to: "2026.12" },
    },
    {
      date: "2023.04",
      type: "activity",
      title: "Machine Learning Consultant",
      org: "BRAINTWORK",
      desc: [{ en: "Machine learning consulting", ko: "머신러닝 컨설팅" }, { from: "2023.04", to: "2023.07" }],
    },
  ],

  skills: [
    { en: "Startups", ko: "서비스 창업" },
    { en: "Web & App", ko: "웹/앱" },
    { en: "Full-stack Development", ko: "풀스택 개발" },
    { en: "Product Planning", ko: "서비스 기획" },
    "AI Security", "Satellite Security", "Cybersecurity", "Machine Learning", "LLM",
    "Implicit Neural Representations", "Transfer Learning",
  ],
};

// 고정 문구 번역 (섹션 제목, 버튼 등)
window.I18N = {
  en: {
    "nav.services": "Services", "nav.projects": "Projects", "nav.experience": "Experience", "nav.awards": "Awards", "nav.education": "Education",
    "nav.research": "Research", "nav.certs": "Certifications", "nav.archive": "Archive", "nav.contact": "Contact", "nav.blog": "Blog",
    "services.title": "Services.", "services.sub": " Things I've built.",
    "projects.title": "Projects.", "projects.sub": " Beyond the day job.",
    "experience.title": "Experience.", "experience.sub": " Where I've worked.",
    "awards.title": "Awards.", "awards.sub": " Moments of recognition.",
    "education.title": "Education.", "education.sub": " Where I learned.",
    "research.title": "Research.", "research.sub": " Publications & patents.",
    "research.paper": "PAPER", "research.patent": "PATENT",
    "certs.title": "Certifications.", "certs.sub": " Programs & credentials.",
    "skills.title": "Skills",
    "archive.title": "Archive.", "archive.sub": " Everything, in order.",
    "archive.all": "ALL", "archive.service": "SERVICE", "archive.project": "PROJECT", "archive.career": "CAREER", "archive.award": "AWARD",
    "archive.education": "EDU", "archive.research": "RESEARCH", "archive.cert": "CERT", "archive.activity": "ACTIVITY",
    "archive.more": "VIEW MORE", "archive.less": "SHOW LESS", "archive.empty": "Nothing here yet.",
    "contact.title": "Let's build together.",
    "contact.sub": "Always open to new opportunities and collaborations.",
    "contact.mail": "Send an email",
    "stats.services": "Services", "stats.awards": "Awards", "stats.research": "Publications & Patents",
  },
  ko: {
    "nav.services": "서비스", "nav.projects": "프로젝트", "nav.experience": "경력", "nav.awards": "수상", "nav.education": "학력",
    "nav.research": "연구", "nav.certs": "수료", "nav.archive": "아카이브", "nav.contact": "연락처", "nav.blog": "블로그",
    "services.title": "Services.", "services.sub": " 직접 만든 것들.",
    "projects.title": "Projects.", "projects.sub": " 현장에서 함께 만든 것들.",
    "experience.title": "Experience.", "experience.sub": " 일해온 곳들.",
    "awards.title": "Awards.", "awards.sub": " 인정받은 순간들.",
    "education.title": "Education.", "education.sub": " 배움의 궤적.",
    "research.title": "Research.", "research.sub": " 논문과 특허.",
    "research.paper": "논문", "research.patent": "특허",
    "certs.title": "Certifications.", "certs.sub": " 수료 프로그램과 자격.",
    "skills.title": "기술 스택",
    "archive.title": "Archive.", "archive.sub": " 시간 순으로 모아본 기록.",
    "archive.all": "ALL", "archive.service": "SERVICE", "archive.project": "PROJECT", "archive.career": "CAREER", "archive.award": "AWARD",
    "archive.education": "EDU", "archive.research": "RESEARCH", "archive.cert": "CERT", "archive.activity": "ACTIVITY",
    "archive.more": "더 보기", "archive.less": "접기", "archive.empty": "아직 기록이 없어요.",
    "contact.title": "함께 만들어요.",
    "contact.sub": "새로운 기회나 협업 제안은 언제든 환영입니다.",
    "contact.mail": "이메일 보내기",
    "stats.services": "서비스", "stats.awards": "수상", "stats.research": "논문과 특허",
  },
};
