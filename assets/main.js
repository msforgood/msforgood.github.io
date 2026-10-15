(() => {
  const P = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>',
    badge: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>',
  };
  const AWARD_ICONS = ["🏆", "🥇", "🎖️", "🏅", "✨"];
  const ext = (url) => (url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"');

  // Basics
  document.title = `${P.nameEn} — ${P.role}`;
  $("navName").textContent = P.nameEn;
  $("role").textContent = `${P.name} · ${P.role}`;
  $("tagline").textContent = P.tagline;
  $("intro").textContent = P.intro;
  $("avatar").innerHTML = P.avatar
    ? `<img src="${esc(P.avatar)}" alt="${esc(P.name)}">`
    : esc(P.nameEn.split(" ").map((w) => w[0]).join(""));

  // Links
  $("heroLinks").innerHTML = P.links
    .map((l, i) => `<a class="pill${i === 0 ? " primary" : ""}" href="${esc(l.url)}"${ext(l.url)}>${ICONS[l.icon] || ""}${esc(l.label)}</a>`)
    .join("");
  const mail = P.links.find((l) => l.url.startsWith("mailto:"));
  if (mail) $("mailBtn").href = mail.url; else $("mailBtn").remove();
  $("contactLinks").innerHTML = P.links
    .filter((l) => !l.url.startsWith("mailto:"))
    .map((l) => `<a href="${esc(l.url)}"${ext(l.url)}>${esc(l.label)} ›</a>`)
    .join("");

  // Stats
  const stats = P.stats || [
    { num: P.projects.length, label: "Projects" },
    { num: P.awards.length, label: "Awards" },
    { num: P.certifications.length, label: "Certifications" },
  ];
  $("stats").innerHTML = stats
    .map((s) => `<div><div class="stat-num" data-count="${s.num}">0</div><div class="stat-label">${esc(s.label)}</div></div>`)
    .join("");

  // Projects
  $("projectList").innerHTML = P.projects
    .map((p) => {
      const tag = p.link ? "a" : "div";
      const href = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
      return `<${tag} class="project reveal" data-color="${esc(p.color || "blue")}"${href}>
        <div class="project-meta">${esc(p.period)} · ${esc(p.role)}</div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${p.link ? '<span class="go">↗</span>' : ""}
      </${tag}>`;
    })
    .join("");
  document.querySelectorAll(".carousel-ctrl .circle-btn").forEach((b) =>
    b.addEventListener("click", () => {
      const c = $("projectList");
      const card = c.querySelector(".project");
      c.scrollBy({ left: (card ? card.offsetWidth + 20 : 400) * Number(b.dataset.dir), behavior: "smooth" });
    })
  );

  // Awards
  $("awardList").innerHTML = P.awards
    .map((a, i) => `<div class="award reveal">
        <div class="award-icon">${AWARD_ICONS[i % AWARD_ICONS.length]}</div>
        <div class="award-date">${esc(a.date)}</div>
        <div class="award-title">${esc(a.title)}</div>
        <div class="award-org">${esc(a.org)}</div>
        ${a.desc ? `<div class="award-desc">${esc(a.desc)}</div>` : ""}
      </div>`)
    .join("");

  // Education
  $("eduList").innerHTML = P.education
    .map((e) => `<div class="edu reveal">
        <div class="edu-period">${esc(e.period)}</div>
        <div class="edu-school">${esc(e.school)}</div>
        <div class="edu-degree">${esc(e.degree)}</div>
        ${e.detail ? `<div class="edu-detail">${esc(e.detail)}</div>` : ""}
      </div>`)
    .join("");

  // Certifications & skills
  $("certList").innerHTML = P.certifications
    .map((c) => `<div class="cert reveal">
        <div class="cert-badge">${ICONS.badge}</div>
        <div><div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)} · ${esc(c.date)}</div></div>
      </div>`)
    .join("");
  $("skillList").innerHTML = P.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("");

  $("footer").textContent = `© ${new Date().getFullYear()} ${P.nameEn}. ${P.location}`;

  // Reveal on scroll (+ count-up for stats)
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - start) / 1200);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(en.target);
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });

  // Nav border on scroll
  const nav = $("nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  // Theme toggle
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
  $("themeBtn").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });
})();
