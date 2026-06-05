/* ─── STATE ─────────────────────────────────────────── */
let currentPlatform = "all";
let currentType     = "all";
let currentFilter   = "all";
let currentSearch   = "";

/* ─── HELPERS ───────────────────────────────────────── */
const safetyConfig = {
  safe:     { label: "✓ Safe",       cls: "badge-safe"     },
  untested: { label: "? Untested",   cls: "badge-untested" },
  danger:   { label: "✕ Dangerous",  cls: "badge-danger"   },
};
const typeConfig = {
  original: { label: "✔ Original", cls: "type-badge-original" },
  modded:   { label: "⚙ Modded",   cls: "type-badge-modded"   },
  cracked:  { label: "◆ Cracked",  cls: "type-badge-cracked"  },
};
const platformIcon = { Android:"🤖", Windows:"🪟", Linux:"🐧" };

function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function fmtDate(iso){ if(!iso) return "—"; const [y,m,d]=iso.split("-"); return `${d} ${["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m]} ${y}`; }

/* ─── CARD RENDERER ─────────────────────────────────── */
function renderCard(app) {
  const sc = safetyConfig[app.safety] || safetyConfig.untested;
  const tc = typeConfig[app.type]     || typeConfig.original;
  const noLink = !app.downloadUrl || app.downloadUrl === "#";
  const mailSub  = encodeURIComponent(`[SafeCatalog] Report: ${app.name}`);
  const mailBody = encodeURIComponent(`App: ${app.name}\nPlatform: ${app.platform}\nType: ${app.type}\n\nIssue description:\n`);

  return `
  <article class="glass-card app-card rounded-xl p-5 flex flex-col gap-3">
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-2 min-w-0">
        <span class="text-xl shrink-0">${platformIcon[app.platform]||"📦"}</span>
        <div class="min-w-0">
          <h2 class="font-semibold text-sm truncate">${esc(app.name)}</h2>
          <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span class="mono text-xs text-slate-500">${esc(app.platform)}</span>
            <span class="text-slate-700">·</span>
            <span class="type-badge ${tc.cls}">${tc.label}</span>
          </div>
        </div>
      </div>
      <span class="badge ${sc.cls} shrink-0 mt-0.5">${sc.label}</span>
    </div>

    <p class="text-sm leading-relaxed flex-1 text-slate-400" style="color:var(--desc,#94a3b8)">${esc(app.description)}</p>

    ${app.notes ? `<p class="text-xs mono px-3 py-2 rounded-md bg-yellow-950/30 border border-yellow-900/40 text-yellow-400/80">${esc(app.notes)}</p>` : ""}

    <div class="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/50">
      ${app.openSource
        ? `<a href="${esc(app.sourceUrl)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 mono text-xs text-blue-400 hover:text-blue-300 transition-colors">
             <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
             Open Source
           </a>`
        : `<span class="inline-flex items-center gap-1.5 mono text-xs text-slate-600">
             <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
             Closed Source
           </span>`}
      <span class="flex-1"></span>
      <span class="mono text-xs text-slate-600">🕐 ${fmtDate(app.lastChecked)}</span>
    </div>

    <div class="flex items-center gap-3 pt-1">
      <a href="${noLink?"javascript:void(0)":esc(app.downloadUrl)}"
         ${!noLink?`target="_blank" rel="noopener"`:""}
         class="btn-primary flex-1 text-center text-xs py-2 px-3 rounded-md mono flex items-center justify-center gap-2 ${noLink?"opacity-40 pointer-events-none":""}">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        ${noLink?"Unavailable":"Download / Link"}
      </a>
      <a href="mailto:${esc(app.reportEmail)}?subject=${mailSub}&body=${mailBody}"
         class="btn-ghost flex items-center gap-1 shrink-0" title="Report an issue">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21l1.9-5.7A9 9 0 1 1 21 12v0a9 9 0 0 1-11.1 8.9L3 21z"/>
        </svg>
        Report
      </a>
    </div>
  </article>`;
}

/* ─── FILTER ────────────────────────────────────────── */
function getFiltered() {
  return appsData.filter(app => {
    const q = currentSearch.toLowerCase().trim();
    return (currentPlatform==="all" || app.platform===currentPlatform)
        && (currentType==="all"     || app.type===currentType)
        && (currentFilter==="all"        ? true
          : currentFilter==="safe"       ? app.safety==="safe"
          : currentFilter==="untested"   ? app.safety==="untested"
          : currentFilter==="danger"     ? app.safety==="danger"
          : currentFilter==="opensource" ? app.openSource===true : true)
        && (!q || app.name.toLowerCase().includes(q)
               || app.description.toLowerCase().includes(q)
               || app.platform.toLowerCase().includes(q)
               || app.type.toLowerCase().includes(q));
  });
}

/* ─── RENDER ────────────────────────────────────────── */
function renderAll() {
  const filtered = getFiltered();
  const grid = document.getElementById("cardsGrid");
  const noRes = document.getElementById("noResults");

  if (filtered.length === 0) {
    grid.innerHTML = ""; grid.style.display = "none";
    noRes.classList.add("show");
    document.getElementById("visibleCount").textContent = "0";
    return;
  }

  noRes.classList.remove("show");
  grid.style.display = "";
  document.getElementById("visibleCount").textContent = filtered.length;

  // Group by type for section dividers (only when type filter = all)
  if (currentType === "all") {
    const order = ["original","modded","cracked"];
    const typeLabels = { original:"✔ Original", modded:"⚙ Modded", cracked:"◆ Cracked" };
    let html = "";
    order.forEach(t => {
      const group = filtered.filter(a => a.type === t);
      if (!group.length) return;
      html += `<div class="section-divider"><span>${typeLabels[t]}</span><hr/></div>`;
      html += group.map(renderCard).join("");
    });
    grid.innerHTML = html;
  } else {
    grid.innerHTML = filtered.map(renderCard).join("");
  }

  // Reapply desc color for light mode
  const light = document.documentElement.classList.contains("light");
  grid.querySelectorAll("p.text-sm").forEach(el => {
    el.style.setProperty("--desc", light ? "#475569" : "#94a3b8");
  });
}

/* ─── STATS ─────────────────────────────────────────── */
function renderStats() {
  const t = appsData.length;
  const s = appsData.filter(a=>a.safety==="safe").length;
  const o = appsData.filter(a=>a.openSource).length;
  const m = appsData.filter(a=>a.type==="modded").length;
  const c = appsData.filter(a=>a.type==="cracked").length;
  document.getElementById("statsRow").innerHTML = `
    <div class="count-pill">${t} entries</div>
    <div class="count-pill" style="color:#86efac;border-color:rgba(34,197,94,.3);background:rgba(5,46,22,.5)">🟢 ${s} safe</div>
    <div class="count-pill" style="color:#c084fc;border-color:rgba(168,85,247,.3);background:rgba(59,7,100,.4)">◆ ${c} cracked</div>
    <div class="count-pill" style="color:#fbbf24;border-color:rgba(245,158,11,.3);background:rgba(45,29,0,.5)">⚙ ${m} modded</div>
    <div class="count-pill" style="color:#93c5fd;border-color:rgba(59,130,246,.3);background:rgba(30,58,138,.3)">⬡ ${o} open source</div>
  `;
}

/* ─── RESET ─────────────────────────────────────────── */
function resetFilters() {
  currentPlatform = "all"; currentType = "all";
  currentFilter = "all";   currentSearch = "";
  document.getElementById("searchBar").value = "";
  const mob = document.getElementById("searchBarMobile");
  if (mob) mob.value = "";
  document.querySelectorAll(".tab-btn").forEach(b  => b.classList.toggle("active", b.dataset.platform==="all"));
  document.querySelectorAll(".type-btn").forEach(b  => b.classList.toggle("active", b.dataset.type==="all"));
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter==="all"));
  renderAll();
}

/* ─── THEME ─────────────────────────────────────────── */
function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.classList.toggle("light", !dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
  renderAll();
}

/* ─── INIT ──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  applyTheme(saved ? saved==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);

  renderStats();
  renderAll();

  document.getElementById("themeToggle").addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")));

  document.querySelectorAll(".tab-btn").forEach(b => b.addEventListener("click", () => {
    currentPlatform = b.dataset.platform;
    document.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
    b.classList.add("active"); renderAll();
  }));

  document.querySelectorAll(".type-btn").forEach(b => b.addEventListener("click", () => {
    currentType = b.dataset.type;
    document.querySelectorAll(".type-btn").forEach(x => x.classList.remove("active"));
    b.classList.add("active"); renderAll();
  }));

  document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
    currentFilter = c.dataset.filter;
    document.querySelectorAll(".chip").forEach(x => x.classList.remove("active"));
    c.classList.add("active"); renderAll();
  }));

  let t;
  function doSearch(v) { clearTimeout(t); t=setTimeout(()=>{ currentSearch=v; renderAll(); },180); }
  document.getElementById("searchBar").addEventListener("input", e => {
    const mob=document.getElementById("searchBarMobile"); if(mob) mob.value=e.target.value;
    doSearch(e.target.value);
  });
  const mob=document.getElementById("searchBarMobile");
  if(mob) mob.addEventListener("input", e => {
    document.getElementById("searchBar").value=e.target.value; doSearch(e.target.value);
  });
});