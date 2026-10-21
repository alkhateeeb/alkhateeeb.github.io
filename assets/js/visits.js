/**
 * Alkhateeb Apiary — Visitor Counter
 * Counts unique visitors and page views using the free Abacus counter API
 * (https://abacus.jasoncameron.dev). No personal data is sent.
 *
 * Owner stats: open any page with ?v1 (e.g. index.html?v1) to see the counts.
 * Opening ?v1 also marks this browser as the owner's, so it is not counted.
 */

const VISITS_API = "https://abacus.jasoncameron.dev";
const VISITS_NS = "alkhateeb-apiary";
const VISITED_KEY = "alkhateeb_visited";
const OWNER_KEY = "alkhateeb_owner";

const VISIT_PAGES = ["index", "products", "about", "cart"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

/** "/en/products.html" → "en-products", "/" → "index" */
function currentPageKey() {
  const parts = location.pathname.split("/").filter(Boolean);
  const file = (parts[parts.length - 1] || "index").replace(/\.html$/, "") || "index";
  const page = VISIT_PAGES.includes(file) ? file : "index";
  return (parts.includes("en") ? "en-" : "") + page;
}

function counterUrl(action, key) {
  return `${VISITS_API}/${action}/${VISITS_NS}/${key}`;
}

async function readCounter(key) {
  try {
    const res = await fetch(counterUrl("get", key));
    const data = await res.json();
    return typeof data.value === "number" ? data.value : 0;
  } catch {
    return null;
  }
}

function hitCounter(key) {
  fetch(counterUrl("hit", key)).catch(() => {});
}

// ─── Tracking ─────────────────────────────────────────────────────────────────

function trackVisit() {
  if (storageGet(OWNER_KEY)) return;

  if (!storageGet(VISITED_KEY)) {
    storageSet(VISITED_KEY, "1");
    hitCounter("visitors");
  }
  hitCounter("views");
  hitCounter("page-" + currentPageKey());
}

// ─── Owner stats panel (?v1) ──────────────────────────────────────────────────

async function showVisitStats() {
  storageSet(OWNER_KEY, "1");

  const panel = document.createElement("div");
  panel.dir = "ltr";
  panel.className =
    "fixed bottom-4 left-4 z-[100] bg-white text-stone-900 rounded-xl shadow-2xl " +
    "border border-amber-300 p-4 w-72 max-w-[calc(100vw-2rem)] text-sm";
  panel.innerHTML = `<div class="font-bold text-amber-900 mb-2">Visitor stats</div>
    <div class="text-stone-500">Loading…</div>`;
  document.body.appendChild(panel);

  const pageKeys = [
    ...VISIT_PAGES,
    ...VISIT_PAGES.map((p) => "en-" + p),
  ];
  const keys = ["visitors", "views", ...pageKeys.map((p) => "page-" + p)];
  const values = await Promise.all(keys.map(readCounter));
  const counts = Object.fromEntries(keys.map((k, i) => [k, values[i]]));
  const fmt = (n) => (n === null ? "—" : n.toLocaleString());

  const row = (label, value, strong) =>
    `<div class="flex justify-between py-0.5${strong ? " font-semibold" : ""}">
       <span>${label}</span><span>${value}</span></div>`;

  panel.innerHTML = `
    <div class="flex justify-between items-center mb-2">
      <span class="font-bold text-amber-900">Visitor stats</span>
      <button type="button" aria-label="Close" class="text-stone-400 hover:text-stone-700 text-lg leading-none">&times;</button>
    </div>
    ${row("Unique visitors", fmt(counts.visitors), true)}
    ${row("Total page views", fmt(counts.views), true)}
    <div class="border-t border-stone-200 my-2"></div>
    <div class="text-xs text-stone-500 mb-1">Views per page (AR / EN)</div>
    ${VISIT_PAGES.map((p) =>
      row(p, `${fmt(counts["page-" + p])} / ${fmt(counts["page-en-" + p])}`)
    ).join("")}`;

  panel.querySelector("button").addEventListener("click", () => panel.remove());
}

// ─── Init ─────────────────────────────────────────────────────────────────────

if (new URLSearchParams(location.search).has("v1")) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showVisitStats);
  } else {
    showVisitStats();
  }
} else {
  trackVisit();
}
