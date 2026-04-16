const PROMPTS = [
  {
    id: "pink-nude",
    text: "Recommend a pinky nude lipstick for everyday wear—not too bold.",
    productIntent: true,
  },
  {
    id: "gloss-mlbb",
    text: "What lip gloss shades would give a MLBB look on medium skin?",
    productIntent: true,
  },
  {
    id: "foundation-dry",
    text: "I need a hydrating foundation that looks natural in photos.",
    productIntent: true,
  },
  {
    id: "mascara-sensitive",
    text: "Suggest a gentle mascara for sensitive eyes that still builds volume.",
    productIntent: true,
  },
];

const PRODUCT_KEYWORDS =
  /\b(lipstick|lip\s*oil|lip\s*gloss|gloss|foundation|concealer|mascara|eyeshadow|blush|bronzer|makeup|beauty|shade|nude|mlbb|product|recommend|try\s*on|virtual)\b/i;

const mirrorSvg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M8 2.5C5.5 2.5 3.5 4.2 3.5 6.25V9.75C3.5 11.8 5.5 13.5 8 13.5C10.5 13.5 12.5 11.8 12.5 9.75V6.25C12.5 4.2 10.5 2.5 8 2.5Z" stroke="currentColor" stroke-width="1.3" />
  <path d="M6.25 7.25H9.75" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
</svg>`;

const mirrorAttributionSvg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M8 2.5C5.5 2.5 3.5 4.2 3.5 6.25V9.75C3.5 11.8 5.5 13.5 8 13.5C10.5 13.5 12.5 11.8 12.5 9.75V6.25C12.5 4.2 10.5 2.5 8 2.5Z" stroke="currentColor" stroke-width="1.35" />
  <path d="M6.25 7.25H9.75" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
</svg>`;

const PRODUCTS = {
  luxury: [
    {
      brand: "YSL Loveshine",
      title: "YSL Loveshine Lip Oil Stick",
      shadeLabel: "203 — Blushed Mallow",
      swatch: "#c98b93",
      swatchBg: "linear-gradient(135deg, #f3c8cf, #c98b93)",
      badgePrimary: "Lip oil",
      badgeSecondary: "Editor's pick",
      tags: [
        { dot: "#9f5e66", label: "Cool rose" },
        { dot: "#e96ce8", label: "Sheer" },
        { dot: "#e96ce8", label: "Gloss" },
      ],
      priceWas: "$48",
      priceNow: "$42",
      rating: 4.6,
      ratingCount: "2.4k",
      description:
        "A lip oil fused with caring oils for a dewy shine and a soft wash of color. The balm-like stick glides on smoothly and helps lips feel moisturized with a lightweight, non-sticky finish.",
      ingredients:
        "Diisostearyl Malate, Trimethylolpropane Triisostearate, Polybutene, Bis-Diglyceryl Polyacyladipate-2, Hydrogenated Polyisobutene, VP/Eicosene Copolymer, Synthetic Wax, Ceresin, Ethylhexyl Palmitate, Silica Dimethyl Silylate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Tocopherol, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
    {
      brand: "Dior",
      title: "Dior Addict Lip Maximizer",
      shadeLabel: "012 — Rosewood",
      swatch: "#c58b86",
      swatchBg: "linear-gradient(135deg, #f0d2cf, #c58b86)",
      badgePrimary: "Plumping gloss",
      badgeSecondary: "New",
      tags: [
        { dot: "#c58b86", label: "Rosewood" },
        { dot: "#e96ce8", label: "Plump" },
        { dot: "#e96ce8", label: "High shine" },
      ],
      priceWas: "$42",
      priceNow: "$38",
      rating: 4.4,
      ratingCount: "1.8k",
      description:
        "A plumping gloss with a minty fresh feel and mirror shine. Hyaluronic spheres help lips look smoother and fuller while keeping the finish comfortable for everyday wear.",
      ingredients:
        "Polybutene, Trimethylolpropane Triisostearate, Diisostearyl Malate, Ethylhexyl Palmitate, Menthoxypropanediol, Palmitoyl Tripeptide-1, Sodium Hyaluronate, Tocopherol, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Parfum (Fragrance), Phenoxyethanol.\n[+/- May contain: CI 77891, CI 45410, CI 15850, CI 77491].",
    },
    {
      brand: "Charlotte Tilbury",
      title: "Charlotte Tilbury Pillow Talk",
      shadeLabel: "Medium — Pink Nude",
      swatch: "#c2877e",
      swatchBg: "linear-gradient(135deg, #f2d2c9, #c2877e)",
      badgePrimary: "Iconic nude",
      badgeSecondary: "Bestseller",
      tags: [
        { dot: "#c2877e", label: "Pink nude" },
        { dot: "#e96ce8", label: "Satin" },
        { dot: "#e96ce8", label: "Buildable" },
      ],
      priceWas: "$38",
      priceNow: "$34",
      rating: 4.8,
      ratingCount: "5.1k",
      description:
        "The iconic Pillow Talk pink-nude in a satin finish that flatters a wide range of skin tones. Buildable pigment makes it easy to go from a soft wash to a bolder lip in seconds.",
      ingredients:
        "Octyldodecanol, Polybutene, Pentaerythrityl Tetraisostearate, Synthetic Wax, Bis-Diglyceryl Polyacyladipate-2, Cera Microcristallina, Ethylhexyl Palmitate, Diisostearyl Malate, Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Parfum (Fragrance), Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 77491, CI 77499].",
    },
  ],
  budget: [
    {
      brand: "Maybelline",
      title: "Maybelline Lifter Gloss",
      shadeLabel: "008 — Stone",
      swatch: "#c99592",
      swatchBg: "linear-gradient(135deg, #f1d5d2, #c99592)",
      badgePrimary: "Drugstore",
      badgeSecondary: "Top rated",
      tags: [
        { dot: "#c99592", label: "Stone" },
        { dot: "#e96ce8", label: "Hydrating" },
        { dot: "#e96ce8", label: "Non-sticky" },
      ],
      priceWas: "$12",
      priceNow: "$9",
      rating: 4.2,
      ratingCount: "12k",
      description:
        "Hyaluronic acid-infused gloss with high shine and a cushioned feel. Stone is a flattering neutral pink that pairs well with everyday makeup.",
      ingredients:
        "Polybutene, Hydrogenated Polyisobutene, Ethylhexyl Palmitate, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Silica, Pentaerythrityl Tetraisostearate, Tocopheryl Acetate, Sodium Hyaluronate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 77491, CI 15850, CI 45410].",
    },
    {
      brand: "NYX Professional Makeup",
      title: "NYX Butter Gloss",
      shadeLabel: "Praline — Pinky Nude",
      swatch: "#c0807a",
      swatchBg: "linear-gradient(135deg, #efd5d1, #c0807a)",
      badgePrimary: "Under $10",
      badgeSecondary: "Cult favorite",
      tags: [
        { dot: "#c0807a", label: "Praline" },
        { dot: "#e96ce8", label: "MLBB" },
        { dot: "#e96ce8", label: "Comfort" },
      ],
      priceWas: "$7",
      priceNow: "$6",
      rating: 4.1,
      ratingCount: "8.3k",
      description:
        "A buttery, non-sticky gloss with sheer to medium coverage. Praline is a cult-favorite pinky nude that works across undertones for an easy MLBB look.",
      ingredients:
        "Mineral Oil, Polybutene, Diisostearyl Malate, Beeswax, Silica Dimethyl Silylate, Microcrystalline Wax, Pentaerythrityl Tetraisostearate, Tocopheryl Acetate, Phenoxyethanol, Parfum (Fragrance).\n[+/- May contain: CI 77891, CI 77491, CI 15850, CI 45410].",
    },
    {
      brand: "e.l.f.",
      title: "e.l.f. Glow Reviver Lip Oil",
      shadeLabel: "Rose Quartz",
      swatch: "#d28a96",
      swatchBg: "linear-gradient(135deg, #fadbe3, #d28a96)",
      badgePrimary: "Clean beauty",
      badgeSecondary: "Vegan",
      tags: [
        { dot: "#d28a96", label: "Rose" },
        { dot: "#e96ce8", label: "Oil" },
        { dot: "#e96ce8", label: "Glass skin" },
      ],
      priceWas: "$10",
      priceNow: "$8",
      rating: 4.3,
      ratingCount: "3.6k",
      description:
        "A vegan lip oil that adds a glassy wash of color with nourishing oils. Rose Quartz gives a soft rose tint that reads fresh on bare lips or over liner.",
      ingredients:
        "Hydrogenated Polyisobutene, Ethylhexyl Palmitate, Polybutene, Ricinus Communis Seed Oil, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Phenoxyethanol.\n[+/- May contain: CI 77891, CI 15850, CI 45410].",
    },
  ],
};

/** @typedef {'entry'|'chat'} View */
/** @typedef {'idle'|'busy'} Flow */

const el = {
  promptList: /** @type {HTMLElement} */ (document.getElementById("promptList")),
  entryView: /** @type {HTMLElement} */ (document.getElementById("entryView")),
  chatView: /** @type {HTMLElement} */ (document.getElementById("chatView")),
  mainScroll: /** @type {HTMLElement} */ (document.getElementById("mainScroll")),
  input: /** @type {HTMLTextAreaElement} */ (document.getElementById("composerInput")),
  composerField: /** @type {HTMLElement} */ (document.getElementById("composerField")),
  sendBtn: /** @type {HTMLButtonElement} */ (document.getElementById("composerSend")),
  productDetail: /** @type {HTMLElement} */ (document.getElementById("productDetail")),
  productDetailClose: /** @type {HTMLButtonElement} */ (document.getElementById("productDetailClose")),
  productDetailScroll: /** @type {HTMLElement} */ (document.getElementById("productDetailScroll")),
  productDetailSlides: /** @type {HTMLElement} */ (document.getElementById("productDetailSlides")),
  productDetailDots: /** @type {HTMLElement} */ (document.getElementById("productDetailDots")),
  productDetailBrand: /** @type {HTMLElement} */ (document.getElementById("productDetailBrand")),
  productDetailTitle: /** @type {HTMLElement} */ (document.getElementById("productDetailTitle")),
  productDetailBadges: /** @type {HTMLElement} */ (document.getElementById("productDetailBadges")),
  productDetailTags: /** @type {HTMLElement} */ (document.getElementById("productDetailTags")),
  productDetailShadeDot: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeDot")),
  productDetailShadeLabel: /** @type {HTMLElement} */ (document.getElementById("productDetailShadeLabel")),
  productDetailMeta: /** @type {HTMLElement} */ (document.getElementById("productDetailMeta")),
  productDetailDescription: /** @type {HTMLElement} */ (document.getElementById("productDetailDescription")),
  productDetailIngredientsBody: /** @type {HTMLElement} */ (document.getElementById("productDetailIngredientsBody")),
  vtoFlow: /** @type {HTMLElement} */ (document.getElementById("vtoFlow")),
  vtoTermsPanel: /** @type {HTMLElement} */ (document.getElementById("vtoTermsPanel")),
  vtoStep2Panel: /** @type {HTMLElement} */ (document.getElementById("vtoStep2Panel")),
  vtoTermsCheckbox: /** @type {HTMLInputElement} */ (document.getElementById("vtoTermsCheckbox")),
  vtoConsentBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoConsentBtn")),
  vtoDeclineBtn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoDeclineBtn")),
  vtoTermsClose: /** @type {HTMLButtonElement} */ (document.getElementById("vtoTermsClose")),
  vtoStep2Close: /** @type {HTMLButtonElement} */ (document.getElementById("vtoStep2Close")),
  vtoStep2Done: /** @type {HTMLButtonElement} */ (document.getElementById("vtoStep2Done")),
  vtoToast: /** @type {HTMLElement} */ (document.getElementById("vtoToast")),
  vtoToastDismiss: /** @type {HTMLButtonElement} */ (document.getElementById("vtoToastDismiss")),
  vtoBannerLearn: /** @type {HTMLButtonElement} */ (document.getElementById("vtoBannerLearn")),
};

/** @type {View} */
let view = "entry";
/** @type {Flow} */
let flow = "idle";

function scrollMainToBottom() {
  requestAnimationFrame(() => {
    el.mainScroll.scrollTop = el.mainScroll.scrollHeight;
  });
}

function isProductMessage(text, promptMeta) {
  if (promptMeta?.productIntent) return true;
  return PRODUCT_KEYWORDS.test(text);
}

function renderPrompts() {
  el.promptList.innerHTML = "";
  for (const p of PROMPTS) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "prompt-chip";
    b.textContent = p.text;
    b.addEventListener("click", () => sendUserMessage(p.text, p));
    el.promptList.appendChild(b);
  }
}

const prologueArrowSvg = `
<span class="user-thread__arrow" aria-hidden="true">
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <path
      d="M14 2C9 2 6 4.5 6 9.5M6 9.5L3 6.5M6 9.5L9 6.5"
      stroke="currentColor"
      stroke-width="1.35"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</span>`;

function appendUserBubble(text) {
  const wrap = document.createElement("div");
  wrap.className = "msg msg--user msg-anim";
  wrap.innerHTML = `
    <div class="user-thread">
      <div class="user-thread__prologue">
        ${prologueArrowSvg}
        <span class="user-thread__avatar" aria-hidden="true"></span>
        <span class="user-thread__name">You</span>
      </div>
      <div class="user-thread__bubble"></div>
    </div>`;
  const bubble = wrap.querySelector(".user-thread__bubble");
  if (bubble) bubble.textContent = text;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

function appendAssistantBlock(html, withAnim = true) {
  const wrap = document.createElement("div");
  wrap.className = `msg msg--assistant${withAnim ? " msg-anim" : ""}`;
  wrap.innerHTML = `<div class="assistant-surface">${html}</div>`;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

function appendTyping() {
  const wrap = document.createElement("div");
  wrap.className = "msg msg--assistant";
  wrap.dataset.role = "typing";
  wrap.innerHTML = `<div class="typing" aria-label="ChatGPT is typing"><span></span><span></span><span></span></div>`;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

function removeTyping() {
  el.chatView.querySelectorAll('[data-role="typing"]').forEach((n) => n.remove());
}

function showQuickReplies(onPick) {
  const row = document.createElement("div");
  row.className = "quick-row";
  row.dataset.role = "quick";
  const mk = (label) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "quick";
    b.textContent = label;
    b.addEventListener("click", () => {
      if (flow !== "idle") return;
      for (const c of row.querySelectorAll("button")) {
        c.disabled = true;
      }
      onPick(label);
    });
    row.appendChild(b);
  };
  mk("Budget-friendly");
  mk("Luxury");
  el.chatView.appendChild(row);
  scrollMainToBottom();
}

function removeQuickReplies() {
  el.chatView.querySelectorAll('[data-role="quick"]').forEach((n) => n.remove());
}

function tierKeyFromLabel(label) {
  return label === "Luxury" ? "luxury" : "budget";
}

function starSvg(filled) {
  const cls = filled ? "star" : "star star--muted";
  const fill = filled ? "currentColor" : "none";
  const stroke = filled ? "none" : "currentColor";
  return `<svg class="${cls}" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="${fill}"
      stroke="${stroke}"
      stroke-width="${filled ? 0 : 1.2}"
      stroke-linejoin="round"
    />
  </svg>`;
}

function ratingRowHTML(p) {
  const r = p.rating;
  const filled = Math.min(5, Math.max(0, Math.round(r)));
  const stars = [];
  for (let i = 0; i < 5; i += 1) stars.push(starSvg(i < filled));
  const starsHtml = stars.join("");
  return `
    <div class="rating-row">
      <span class="rating-row__stars">${starsHtml}</span>
      <span>${r.toFixed(1)}</span>
      <span aria-hidden="true">/</span>
      <span>5</span>
      <span class="rating-row__count">(${escapeHtml(p.ratingCount)})</span>
    </div>`;
}

function tagsHTML(tags) {
  return tags
    .map(
      (t) => `
    <span class="tag-chip">
      <span class="tag-chip__dot" style="background:${escapeAttr(t.dot)};"></span>
      ${escapeHtml(t.label)}
    </span>`,
    )
    .join("");
}

function productCardHTML(p, tier, index) {
  return `
    <article class="product-card" aria-label="${escapeAttr(p.title)}" data-tier="${tier}" data-product-index="${index}">
      <div class="product-card__header" aria-hidden="true"></div>
      <div class="product-card__content">
        <div class="product-card__media">
          <div class="product-card__swatch" style="background:${p.swatchBg};"></div>
          <div class="product-card__tubes" aria-hidden="true">
            <div class="tube tube--silver"></div>
            <div class="tube tube--gold"></div>
          </div>
        </div>
        <h3 class="product-card__title">${escapeHtml(p.title)}</h3>
        <div class="product-card__tag-row">
          <span class="tag-chip product-card__shade-tag">
            <span class="tag-chip__dot" style="background:${escapeAttr(p.swatch)};"></span>
            ${escapeHtml(p.shadeLabel)}
          </span>
        </div>
      </div>
      <div class="product-card__footer">
        <button type="button" class="btn-primary-lg product-card__btn-primary vto-open">
          <span class="product-card__btn-icon" aria-hidden="true">${mirrorSvg}</span>
          <span>Virtual Try-On</span>
          <span class="product-card__btn-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </button>
        <button type="button" class="btn-secondary-lg product-card__learn product-card__btn-secondary" aria-label="Learn more about ${escapeAttr(p.title)}">
          <span class="product-card__btn-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2.5C5.5 2.5 3.5 4.2 3.5 6.25V9.75C3.5 11.8 5.5 13.5 8 13.5C10.5 13.5 12.5 11.8 12.5 9.75V6.25C12.5 4.2 10.5 2.5 8 2.5Z" stroke="currentColor" stroke-width="1.3" />
            </svg>
          </span>
          <span>Learn more</span>
          <span class="product-card__btn-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M9.5 2.5H13.5V6.5M13.5 2.5L6.5 9.5M3.5 6.5V13.5H12.5V6.5"
                stroke="currentColor"
                stroke-width="1.35"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </article>`;
}

function carouselDotsHTML(count, activeIndex) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    parts.push(`<span${i === activeIndex ? ' class="is-active"' : ""}></span>`);
  }
  return `<div class="carousel-dots" role="tablist" aria-label="Slides">${parts.join("")}</div>`;
}

function convActionsHTML() {
  const icon = (d, label) =>
    `<button type="button" aria-label="${label}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">${d}</svg></button>`;
  return `
    <div class="conv-actions">
      ${icon(
        '<rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        "Copy",
      )}
      ${icon(
        '<path d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z" stroke="currentColor" stroke-width="1.5"/><path d="M19 10v1a7 7 0 01-14 0v-1M12 19v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        "Read aloud",
      )}
      ${icon(
        '<path d="M7 10v4h3l4 4V6l-4 4H7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        "Good response",
      )}
      ${icon(
        '<path d="M17 14v4h-3l-4 4V10l4 4h3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
        "Bad response",
      )}
      ${icon(
        '<path d="M4 4v6h6M20 20v-6h-6M20 4L4 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
        "Regenerate",
      )}
      ${icon(
        '<path d="M4 12v8a2 2 0 002 2h8a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
        "Share",
      )}
    </div>`;
}

function buildCarousel(label) {
  const tier = tierKeyFromLabel(label);
  const list = PRODUCTS[tier];
  const cards = list.map((p, i) => productCardHTML(p, tier, i)).join("");

  return `
    <div class="vto-attribution">
      <span class="vto-attribution__icon">${mirrorAttributionSvg}</span>
      <span class="vto-attribution__label">Makeup Try-On</span>
    </div>
    <h2 class="alt-products-title">Alternative products</h2>
    <div class="slide-row" role="list">${cards}</div>
    ${carouselDotsHTML(5, 0)}
    <div class="model-response">${resultsCopy(label)}</div>
    ${convActionsHTML()}
  `;
}

function resultsCopy(label) {
  const isLux = label === "Luxury";
  if (isLux) {
    return `
      <p style="margin:0 0 10px">I have loaded a few <strong>luxury lip oils</strong> and <strong>lip glosses</strong> that skew toward the <strong>pinky nude shades</strong> you described. <span aria-hidden="true">💄</span></p>
      <p style="margin:0">On any card, tap <strong>Virtual Try-On</strong> to compare finishes and undertones live.</p>
    `;
  }
  return `
    <p style="margin:0 0 10px">Here are some <strong>budget-friendly glosses</strong> and <strong>lip oils</strong> with <strong>pinky nude</strong> energy—great if you want to try a few shades without committing. <span aria-hidden="true">💄</span></p>
    <p style="margin:0">Use <strong>Virtual Try-On</strong> on a card to see how each reads on you.</p>
  `;
}

function buildResultsBlock(label) {
  return buildCarousel(label);
}

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replaceAll("\n", " ");
}

function enterChatView() {
  if (view === "chat") return;
  view = "chat";
  el.entryView.hidden = true;
  el.chatView.hidden = false;
}

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function assistantThink() {
  appendTyping();
  await wait(520 + Math.random() * 420);
  removeTyping();
}

function budgetQuestionHtml() {
  return `<div class="assistant-text">Are you looking for something more <strong>budget-friendly</strong>, or are you open to <strong>luxury</strong> products?</div>`;
}

function genericAssistantReply() {
  return `<div class="assistant-text">Tell me what you are trying to shop for (product type, finish, undertone), and I will pull a tight shortlist.</div>`;
}

async function sendUserMessage(text, promptMeta) {
  const trimmed = text.trim();
  if (!trimmed) return;
  if (flow === "busy") return;
  closeVtoFlow();
  closeProductDetail();
  flow = "busy";

  removeQuickReplies();

  const product = isProductMessage(trimmed, promptMeta);

  enterChatView();
  appendUserBubble(trimmed);
  el.input.value = "";
  updateComposerTextState();
  autosizeComposer();

  if (!product) {
    await assistantThink();
    appendAssistantBlock(genericAssistantReply());
    flow = "idle";
    return;
  }

  await assistantThink();
  appendAssistantBlock(budgetQuestionHtml());
  flow = "idle";

  showQuickReplies(async (label) => {
    if (flow !== "idle") return;
    flow = "busy";
    removeQuickReplies();
    appendUserBubble(label);

    await assistantThink();
    appendAssistantBlock(buildResultsBlock(label));
    flow = "idle";
  });
}

function autosizeComposer() {
  el.input.style.height = "0px";
  el.input.style.height = `${Math.min(el.input.scrollHeight, 120)}px`;
}

function updateComposerTextState() {
  const has = el.input.value.trim().length > 0;
  el.composerField.classList.toggle("has-text", has);
}

function initComposer() {
  el.input.addEventListener("input", () => {
    autosizeComposer();
    updateComposerTextState();
  });

  el.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendUserMessage(el.input.value, undefined);
    }
  });

  el.sendBtn.addEventListener("click", () => {
    void sendUserMessage(el.input.value, undefined);
  });
}

const PRODUCT_DETAIL_SLIDES = 3;

function productDetailSlideHTML(p) {
  return `
    <div class="product-detail__slide">
      <div class="product-detail__slide-swatch" style="background:${p.swatchBg};"></div>
      <div class="product-detail__slide-tubes" aria-hidden="true">
        <div class="tube tube--silver"></div>
        <div class="tube tube--gold"></div>
      </div>
    </div>`;
}

function productDetailBadgesHTML(p) {
  return `
    <span class="badge badge--filled">${escapeHtml(p.badgePrimary)}</span>
    <span class="badge badge--outline">${escapeHtml(p.badgeSecondary)}</span>`;
}

function syncProductDetailDots() {
  const track = el.productDetailSlides;
  const dotsRoot = el.productDetailDots;
  if (!track || dotsRoot.childElementCount === 0) return;
  const w = track.clientWidth || 1;
  const idx = Math.min(PRODUCT_DETAIL_SLIDES - 1, Math.max(0, Math.round(track.scrollLeft / w)));
  let i = 0;
  for (const dot of dotsRoot.querySelectorAll("span")) {
    dot.classList.toggle("is-active", i === idx);
    i += 1;
  }
}

function closeProductDetail() {
  if (el.productDetail.hidden) return;
  el.productDetail.hidden = true;
  el.productDetail.setAttribute("aria-hidden", "true");
}

/** @param {'luxury'|'budget'} tier @param {number} index */
function openProductDetail(tier, index) {
  const list = PRODUCTS[tier];
  if (!list || !list[index]) return;
  const p = list[index];

  el.productDetailBrand.textContent = p.brand;
  el.productDetailTitle.textContent = p.title;
  el.productDetailBadges.innerHTML = productDetailBadgesHTML(p);
  el.productDetailTags.innerHTML = tagsHTML(p.tags);
  el.productDetailShadeDot.style.background = p.swatch;
  el.productDetailShadeLabel.textContent = p.shadeLabel;
  el.productDetailMeta.innerHTML = `
    <div class="price-row">
      <span class="price-row__was">${escapeHtml(p.priceWas)}</span>
      <span>${escapeHtml(p.priceNow)}</span>
    </div>
    ${ratingRowHTML(p)}`;
  el.productDetailDescription.textContent = p.description;
  el.productDetailIngredientsBody.textContent = p.ingredients;

  const slidesHtml = Array.from({ length: PRODUCT_DETAIL_SLIDES }, () => productDetailSlideHTML(p)).join("");
  el.productDetailSlides.innerHTML = slidesHtml;
  const dotParts = [];
  for (let i = 0; i < PRODUCT_DETAIL_SLIDES; i += 1) {
    dotParts.push(`<span${i === 0 ? ' class="is-active"' : ""}></span>`);
  }
  el.productDetailDots.innerHTML = dotParts.join("");

  el.productDetail.hidden = false;
  el.productDetail.setAttribute("aria-hidden", "false");
  el.productDetailScroll.scrollTop = 0;
  el.productDetailSlides.scrollLeft = 0;
  requestAnimationFrame(() => {
    syncProductDetailDots();
    el.productDetailClose.focus();
  });
}

function initProductDetail() {
  el.chatView.addEventListener("click", (e) => {
    const btn = e.target.closest(".product-card__learn");
    if (!btn) return;
    const card = btn.closest(".product-card");
    if (!card) return;
    const tier = card.getAttribute("data-tier");
    const idx = Number(card.getAttribute("data-product-index"));
    if (tier !== "luxury" && tier !== "budget") return;
    if (!Number.isFinite(idx)) return;
    openProductDetail(tier, idx);
  });

  el.productDetailClose.addEventListener("click", () => closeProductDetail());

  el.productDetailSlides.addEventListener("scroll", () => syncProductDetailDots(), { passive: true });

  window.addEventListener("resize", () => {
    if (!el.productDetail.hidden) syncProductDetailDots();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el.productDetail.hidden) {
      e.preventDefault();
      closeProductDetail();
    }
  });
}

function syncVtoConsentButton() {
  const ok = el.vtoTermsCheckbox.checked;
  el.vtoConsentBtn.disabled = !ok;
}

function resetVtoFlowPanels() {
  el.vtoTermsPanel.hidden = false;
  el.vtoStep2Panel.hidden = true;
  el.vtoTermsCheckbox.checked = false;
  syncVtoConsentButton();
}

function closeVtoFlow() {
  if (el.vtoFlow.hidden) return;
  el.vtoFlow.hidden = true;
  el.vtoFlow.setAttribute("aria-hidden", "true");
  resetVtoFlowPanels();
  el.vtoToast.classList.remove("vto-toast--dismissed");
}

function openVtoTermsFlow() {
  closeProductDetail();
  resetVtoFlowPanels();
  el.vtoToast.classList.remove("vto-toast--dismissed");
  el.vtoFlow.hidden = false;
  el.vtoFlow.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    el.vtoTermsClose.focus();
  });
}

function goVtoStepAfterConsent() {
  el.vtoTermsPanel.hidden = true;
  el.vtoStep2Panel.hidden = false;
  requestAnimationFrame(() => el.vtoStep2Done.focus());
}

function initVtoFlow() {
  el.chatView.addEventListener("click", (e) => {
    const btn = e.target.closest(".vto-open");
    if (!btn) return;
    openVtoTermsFlow();
  });

  el.productDetail.addEventListener("click", (e) => {
    if (e.target.closest(".vto-open")) openVtoTermsFlow();
  });

  el.vtoTermsCheckbox.addEventListener("change", () => syncVtoConsentButton());

  el.vtoConsentBtn.addEventListener("click", () => {
    if (!el.vtoTermsCheckbox.checked) return;
    goVtoStepAfterConsent();
  });

  el.vtoDeclineBtn.addEventListener("click", () => closeVtoFlow());
  el.vtoTermsClose.addEventListener("click", () => closeVtoFlow());
  el.vtoStep2Close.addEventListener("click", () => closeVtoFlow());
  el.vtoStep2Done.addEventListener("click", () => closeVtoFlow());

  el.vtoToastDismiss.addEventListener("click", () => {
    el.vtoToast.classList.add("vto-toast--dismissed");
  });

  el.vtoBannerLearn.addEventListener("click", (e) => {
    e.preventDefault();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el.vtoFlow.hidden) {
      e.preventDefault();
      closeVtoFlow();
    }
  });
}

renderPrompts();
initComposer();
initProductDetail();
initVtoFlow();
