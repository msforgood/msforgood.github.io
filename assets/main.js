(() => {
  const P = window.PROFILE;
  const I18N = window.I18N;
  const LANGS = ["en", "ko"];
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
  const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "");

  // ── Language ──
  let lang = "en";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(q)) lang = q;
    else if (LANGS.includes(saved)) lang = saved;
  } catch {}

  // { en, ko } 객체면 현재 언어, 문자열이면 그대로
  const t = (v) => (v && typeof v === "object" ? v[lang] ?? v.en ?? "" : v ?? "");
  const ui = (key) => I18N[lang]?.[key] ?? I18N.en[key] ?? "";

  // 구분 기호 대신 UI로: 기간 { from, to }은 선으로 잇고, 여러 항목은 구분선으로 나눔 (반환값은 HTML)
  const isRange = (v) => v && typeof v === "object" && "from" in v;
  const parts = (...xs) => xs.flat().flatMap((x) => (isRange(x) ? [x] : [t(x)].flat())).filter((x) => isRange(x) || x);
  const range = (r) => `<span class="range"><span>${esc(t(r.from))}</span><span class="range-line" aria-hidden="true"></span><span>${esc(t(r.to))}</span></span>`;
  const meta = (...xs) => {
    const ps = parts(...xs).map((x) => (isRange(x) ? range(x) : esc(x)));
    return ps.length > 1 ? `<span class="meta"><span class="mi">${ps.map((x) => `<span>${x}</span>`).join("")}</span></span>` : ps.join("");
  };
  const plain = (...xs) => parts(...xs).map((x) => (isRange(x) ? `${t(x.from)} to ${t(x.to)}` : x)).join(", ");

  let revealed = false; // 첫 렌더 이후엔 애니메이션 없이 즉시 표시

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    document.querySelectorAll(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    const name = t(P.name);
    document.title = `${name} | ${plain(P.role)}`;
    $("navName").textContent = name;
    $("role").innerHTML = lang === "en" ? meta(P.role) : meta(name, P.role);
    $("tagline").innerHTML = parts(P.tagline).map((line, i) => `<span${i ? ' class="muted"' : ""}>${esc(line)}</span>`).join("");
    $("intro").textContent = t(P.intro);
    $("avatar").innerHTML = P.avatar ? `<img src="${esc(P.avatar)}" alt="${esc(name)}">` : esc(P.initials);

    // Links
    $("heroLinks").innerHTML = P.links
      .map((l, i) => `<a class="pill${i === 0 ? " primary" : ""}" href="${esc(l.url)}"${ext(l.url)}>${ICONS[l.icon] || ""}${esc(t(l.label))}</a>`)
      .join("");
    const mail = P.links.find((l) => l.url.startsWith("mailto:"));
    $("mailBtn").hidden = !mail;
    if (mail) $("mailBtn").href = mail.url;
    $("contactLinks").innerHTML = P.links
      .filter((l) => !l.url.startsWith("mailto:"))
      .map((l) => `<a href="${esc(l.url)}"${ext(l.url)}>${esc(t(l.label))} ›</a>`)
      .join("");

    // Stats
    const stats = P.stats || [
      { num: P.services.length, label: ui("stats.services") },
      { num: P.awards.length, label: ui("stats.awards") },
      { num: (P.research || []).length, label: ui("stats.research") },
    ];
    $("stats").innerHTML = stats
      .map((s) => `<div><div class="stat-num" data-count="${s.num}">${revealed ? s.num : 0}</div><div class="stat-label">${esc(t(s.label))}</div></div>`)
      .join("");

    // Services
    $("serviceList").innerHTML = P.services
      .map((p) => {
        const tag = p.link ? "a" : "div";
        const href = p.link ? ` href="${esc(p.link)}"${ext(p.link)}` : "";
        return `<${tag} class="project reveal" data-color="${esc(p.color || "blue")}"${href}>
          ${p.image ? `<div class="project-thumb"><img src="${esc(p.image)}" alt="" loading="lazy"></div>` : ""}
          <div class="project-meta">${meta(p.period, p.role)}</div>
          <h3>${esc(t(p.name))}${p.status ? `<span class="status">${esc(t(p.status))}</span>` : ""}</h3>
          <p>${esc(t(p.summary))}</p>
          <div class="tags">${(p.tags || []).map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div>
          ${!p.link && p.links ? `<div class="project-links">${p.links.map((l) => `<a href="${esc(l.url)}"${ext(l.url)}>${esc(t(l.label))} ↗</a>`).join("")}</div>` : ""}
          ${p.link ? '<span class="go">↗</span>' : ""}
        </${tag}>`;
      })
      .join("");

    // Projects
    $("projectList").innerHTML = (P.projects || [])
      .map((p) => {
        const tag = p.link ? "a" : "div";
        const href = p.link ? ` href="${esc(p.link)}"${ext(p.link)}` : "";
        return `<${tag} class="pj reveal"${href}>
          ${p.image
            ? `<div class="pj-img"><img src="${esc(p.image)}" alt="" loading="lazy"></div>`
            : `<div class="pj-img ph" data-color="${esc(p.color || "blue")}"><span>${esc(t(p.mark || p.name))}</span></div>`}
          <div class="pj-body">
            <div class="pj-meta">${meta(p.period, p.place)}</div>
            <h3>${esc(t(p.name))}</h3>
            <div class="pj-role">${meta(p.role)}</div>
            <p>${esc(t(p.summary))}</p>
            <div class="tags">${(p.tags || []).map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div>
          </div>
        </${tag}>`;
      })
      .join("");

    // Awards
    $("awardList").innerHTML = P.awards
      .map((a, i) => {
        const tag = a.link ? "a" : "div";
        const href = a.link ? ` href="${esc(a.link)}"${ext(a.link)}` : "";
        return `<${tag} class="award reveal"${href}>
          ${a.image
            ? `<div class="award-thumb"><img src="${esc(a.image)}" alt="" loading="lazy"></div>`
            : `<div class="award-icon">${AWARD_ICONS[i % AWARD_ICONS.length]}</div>`}
          <div class="award-date">${esc(t(a.date))}</div>
          <div class="award-title">${esc(t(a.title))}</div>
          <div class="award-org">${meta(a.org)}</div>
          ${parts(a.desc).length ? `<div class="award-desc">${meta(a.desc)}</div>` : ""}
        </${tag}>`;
      })
      .join("");

    // Experience
    $("expList").innerHTML = (P.experience || [])
      .map((e) => `<div class="edu reveal">
          <div class="edu-period">${meta(e.period)}</div>
          <div class="edu-school">${esc(t(e.org))}</div>
          <div class="edu-degree">${esc(t(e.title))}</div>
          ${parts(e.location, e.detail).length ? `<div class="edu-detail">${meta(e.location, e.detail)}</div>` : ""}
        </div>`)
      .join("");

    // Research
    $("researchList").innerHTML = (P.research || [])
      .map((r) => `<div class="r-row reveal">
          <span class="r-type${r.type === "patent" ? " patent" : ""}">${esc(ui("research." + r.type))}</span>
          <div class="r-body">
            <div class="r-title">${esc(t(r.title))}</div>
            ${parts(r.venue, r.date).length ? `<div class="r-meta">${meta(r.venue, r.date)}</div>` : ""}
          </div>
        </div>`)
      .join("");

    // Education
    $("eduList").innerHTML = P.education
      .map((e) => `<div class="edu reveal">
          <div class="edu-period">${meta(e.period)}</div>
          <div class="edu-school">${e.link ? `<a href="${esc(e.link)}"${ext(e.link)}>${esc(t(e.school))} ↗</a>` : esc(t(e.school))}</div>
          <div class="edu-degree">${esc(t(e.degree))}</div>
          ${parts(e.detail).length ? `<div class="edu-detail">${meta(e.detail)}</div>` : ""}
        </div>`)
      .join("");

    // Certifications & skills
    $("certList").innerHTML = P.certifications
      .map((c) => `<div class="cert reveal">
          <div class="cert-badge">${ICONS.badge}</div>
          <div><div class="cert-name">${esc(t(c.name))}</div><div class="cert-issuer">${meta(c.issuer, c.date)}</div></div>
        </div>`)
      .join("");
    $("skillList").innerHTML = P.skills.map((s) => `<span class="tag">${esc(t(s))}</span>`).join("");

    $("footer").textContent = `© ${new Date().getFullYear()} ${name}. ${t(P.location)}`;

    renderArchive();
    observeReveals();
  }

  // ── Archive: 프로젝트, 수상, 자격증, 활동을 월별 타임라인으로 ──
  const TYPES = ["service", "project", "career", "award", "research", "education", "cert", "activity"];
  const TYPE_EMOJI = { service: "🚀", project: "🛰️", career: "💼", award: "🏆", research: "📄", education: "🎓", cert: "📜", activity: "✦" };
  const CHEVRON = '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="m9 6 6 6-6 6"/></svg>';
  const ROWS_VISIBLE = 3;
  let archiveFilter = "all";
  const expanded = new Set();

  const archiveEntries = () =>
    [
      ...P.services.map((p) => ({ type: "service", date: p.date, title: p.name, org: p.role, desc: p.summary, image: p.image, link: p.link || p.links?.[0]?.url, color: p.color, tags: p.tags })),
      ...(P.projects || []).map((p) => ({ type: "project", date: p.date, title: p.name, org: p.role, desc: p.summary, image: p.image, link: p.link, tags: p.tags })),
      ...(P.experience || []).map((e) => ({ type: "career", date: e.date, title: e.title, org: e.org, desc: e.period })),
      ...P.awards.map((a) => ({ type: "award", ...a })),
      ...(P.research || []).map((r) => ({ type: "research", date: r.date, title: r.title, org: ui("research." + r.type), desc: r.venue, link: r.link })),
      ...P.education.map((e) => ({ type: "education", date: e.date, title: e.degree, org: e.school, desc: e.period })),
      ...P.certifications.map((c) => ({ type: "cert", date: c.date, title: c.name, org: c.issuer, image: c.image, link: c.link })),
      ...(P.archive || []),
    ]
      .filter((e) => e.date)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  function archiveCover(items, ym) {
    const withImg = items.find((e) => e.image);
    if (withImg) {
      return `<div class="a-cover reveal"><img src="${esc(withImg.image)}" alt="${esc(plain(withImg.title))}" loading="lazy"><div class="cap">${esc(t(withImg.title))}</div></div>`;
    }
    const proj = items.find((e) => e.type === "service");
    if (proj) {
      return `<div class="a-cover gen reveal" data-color="${esc(proj.color || "blue")}">
        <div class="k">${meta(ui("archive.service"), proj.org)}</div>
        <div class="big">${esc(t(proj.title))}</div>
        <div class="small">${meta(proj.desc)}</div>
      </div>`;
    }
    const award = items.find((e) => e.type === "award");
    if (award) {
      return `<div class="a-cover gen reveal" data-color="gold">
        <div class="emoji">🏆</div>
        <div class="k">${meta(ui("archive.award"), award.org)}</div>
        <div class="big">${esc(t(award.title))}</div>
        ${parts(award.desc).length ? `<div class="small">${meta(award.desc)}</div>` : ""}
      </div>`;
    }
    const career = items.find((e) => e.type === "career");
    if (career) {
      return `<div class="a-cover gen reveal" data-color="blue">
        <div class="emoji">💼</div>
        <div class="k">${meta(ui("archive.career"), career.desc)}</div>
        <div class="big">${esc(t(career.org))}</div>
        <div class="small">${esc(t(career.title))}</div>
      </div>`;
    }
    const [y, m] = ym.split(".");
    return `<div class="a-cover gen month reveal" data-color="purple">
      <div class="k">${m ? esc(y) : ""}</div>
      <div class="big">${esc(m || y)}</div>
      <div class="small">${meta(items.map((e) => e.title))}</div>
    </div>`;
  }

  function archiveRow(e) {
    const tag = e.link ? "a" : "div";
    const href = e.link ? ` href="${esc(e.link)}"${ext(e.link)}` : "";
    const thumb = e.image ? `<img src="${esc(e.image)}" alt="" loading="lazy">` : TYPE_EMOJI[e.type] || "•";
    const info = (e.type === "service" || e.type === "project") && e.tags ? meta(e.tags) : meta(e.desc);
    return `<${tag} class="a-row"${href}>
      <div class="a-thumb">${thumb}<span class="badge">${esc(ui("archive." + e.type))}</span></div>
      <div class="a-body">
        <div class="a-org">${meta(e.org)}</div>
        <div class="a-title">${esc(t(e.title))}</div>
        <div class="a-desc"><b>${esc(e.date)}</b>${info}</div>
      </div>
    </${tag}>`;
  }

  function renderArchive() {
    const all = archiveEntries();
    const count = (type) => (type === "all" ? all.length : all.filter((e) => e.type === type).length);
    $("archiveTabs").innerHTML = ["all", ...TYPES]
      .filter((type) => type === "all" || count(type))
      .map((type) => `<button type="button" role="tab" class="a-tab" data-type="${type}" aria-selected="${type === archiveFilter}">${esc(ui("archive." + type))}<sup>${count(type)}</sup></button>`)
      .join("");

    const list = archiveFilter === "all" ? all : all.filter((e) => e.type === archiveFilter);
    const groups = new Map();
    list.forEach((e) => {
      const ym = String(e.date).slice(0, 7);
      if (!groups.has(ym)) groups.set(ym, []);
      groups.get(ym).push(e);
    });

    $("archiveFeed").innerHTML = groups.size
      ? [...groups]
          .map(([ym, items]) => {
            const open = expanded.has(ym);
            const shown = open ? items : items.slice(0, ROWS_VISIBLE);
            const hidden = items.length - ROWS_VISIBLE;
            return `<div class="a-group">
              ${archiveCover(items, ym)}
              <div class="a-date">${esc(ym)}</div>
              <div class="a-list">
                ${shown.map(archiveRow).join("")}
                ${hidden > 0 ? `<button type="button" class="a-more" data-ym="${esc(ym)}" aria-expanded="${open}">${esc(ui(open ? "archive.less" : "archive.more"))}${open ? "" : ` (${hidden}+)`}${CHEVRON}</button>` : ""}
              </div>
            </div>`;
          })
          .join("")
      : `<div class="a-empty">${esc(ui("archive.empty"))}</div>`;
  }

  $("archiveTabs").addEventListener("click", (ev) => {
    const b = ev.target.closest(".a-tab");
    if (!b || b.dataset.type === archiveFilter) return;
    archiveFilter = b.dataset.type;
    renderArchive();
    observeReveals();
  });
  $("archiveFeed").addEventListener("click", (ev) => {
    const b = ev.target.closest(".a-more");
    if (!b) return;
    const ym = b.dataset.ym;
    expanded.has(ym) ? expanded.delete(ym) : expanded.add(ym);
    renderArchive();
    observeReveals();
  });

  // ── Reveal on scroll (+ count-up for stats) ──
  const countUp = (el) => {
    const target = Number(el.dataset.count);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return (el.textContent = target);
    const start = performance.now();
    const tick = (now) => {
      const k = Math.min(1, (now - start) / 1200);
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
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el, i) => {
      if (revealed) {
        // 언어 전환으로 새로 그려진 요소는 바로 표시 (깜빡임 방지)
        el.style.transition = "none";
        el.classList.add("in");
        requestAnimationFrame(() => (el.style.transition = ""));
        return;
      }
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
  }

  render();
  revealed = true;

  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch {}
      const url = new URL(location.href);
      if (lang === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
      render();
    })
  );

  // Carousel
  document.querySelectorAll(".carousel-ctrl .circle-btn").forEach((b) =>
    b.addEventListener("click", () => {
      const c = $("serviceList");
      const card = c.querySelector(".project");
      c.scrollBy({ left: (card ? card.offsetWidth + 20 : 400) * Number(b.dataset.dir), behavior: "smooth" });
    })
  );

  // Nav border on scroll
  const nav = $("nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  // Theme toggle (default: dark)
  const root = document.documentElement;
  try { const th = localStorage.getItem("theme"); if (th) root.dataset.theme = th; } catch {}
  $("themeBtn").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });
})();
