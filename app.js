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

const toolMirrorSvg = `
<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
  <path d="M8 2.5C5.5 2.5 3.5 4.2 3.5 6.25V9.75C3.5 11.8 5.5 13.5 8 13.5C10.5 13.5 12.5 11.8 12.5 9.75V6.25C12.5 4.2 10.5 2.5 8 2.5Z" stroke="currentColor" stroke-width="1.3" />
</svg>`;

const PRODUCTS = {
  luxury: [
    {
      title: "YSL Loveshine Lip Oil Stick",
      shadeLabel: "203 — Blushed Mallow",
      swatch: "#c98b93",
      swatchBg: "linear-gradient(135deg, #f3c8cf, #c98b93)",
    },
    {
      title: "Dior Addict Lip Maximizer",
      shadeLabel: "012 — Rosewood",
      swatch: "#c58b86",
      swatchBg: "linear-gradient(135deg, #f0d2cf, #c58b86)",
    },
    {
      title: "Charlotte Tilbury Pillow Talk",
      shadeLabel: "Medium — Pink Nude",
      swatch: "#c2877e",
      swatchBg: "linear-gradient(135deg, #f2d2c9, #c2877e)",
    },
  ],
  budget: [
    {
      title: "Maybelline Lifter Gloss",
      shadeLabel: "008 — Stone",
      swatch: "#c99592",
      swatchBg: "linear-gradient(135deg, #f1d5d2, #c99592)",
    },
    {
      title: "NYX Butter Gloss",
      shadeLabel: "Praline — Pinky Nude",
      swatch: "#c0807a",
      swatchBg: "linear-gradient(135deg, #efd5d1, #c0807a)",
    },
    {
      title: "e.l.f. Glow Reviver Lip Oil",
      shadeLabel: "Rose Quartz",
      swatch: "#d28a96",
      swatchBg: "linear-gradient(135deg, #fadbe3, #d28a96)",
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

function appendUserBubble(text) {
  const wrap = document.createElement("div");
  wrap.className = "msg msg--user msg-anim";
  wrap.innerHTML = `<div class="bubble bubble--user"></div>`;
  const bubble = wrap.querySelector(".bubble");
  bubble.textContent = text;
  el.chatView.appendChild(wrap);
  scrollMainToBottom();
}

function appendAssistantBlock(html, withAnim = true) {
  const wrap = document.createElement("div");
  wrap.className = `msg msg--assistant${withAnim ? " msg-anim" : ""}`;
  wrap.innerHTML = `<div class="bubble bubble--assistant">${html}</div>`;
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

function buildCarousel(label) {
  const tier = tierKeyFromLabel(label);
  const list = PRODUCTS[tier];
  const cards = list
    .map(
      (p) => `
    <article class="product-card" aria-label="${escapeAttr(p.title)}">
      <div class="product-card__visual">
        <div class="product-card__swatch" style="background:${p.swatchBg};"></div>
        <div class="product-card__tubes" aria-hidden="true">
          <div class="tube tube--silver"></div>
          <div class="tube tube--gold"></div>
        </div>
      </div>
      <h3 class="product-card__title">${escapeHtml(p.title)}</h3>
      <div class="shade-pill">
        <span class="shade-pill__dot" style="background:${p.swatch};"></span>
        <span>${escapeHtml(p.shadeLabel)}</span>
      </div>
      <button type="button" class="cta">
        ${mirrorSvg}
        Virtual Try-On
      </button>
      <span class="learn-more" role="button" tabindex="0">Learn More</span>
    </article>`
    )
    .join("");

  return `
    <div class="tool-row">
      <span class="tool-row__icon">${toolMirrorSvg}</span>
      <span>Makeup Try-On</span>
    </div>
    <div class="carousel-wrap">
      <div class="carousel" role="list">${cards}</div>
    </div>
  `;
}

function resultsCopy(label) {
  const isLux = label === "Luxury";
  if (isLux) {
    return `
      I have loaded a few <strong>luxury lip oils</strong> and <strong>lip glosses</strong> that skew toward the <strong>pinky nude shades</strong> you described. <span aria-hidden="true">💄</span>
      <div style="height:10px"></div>
      On any card, tap <strong>Virtual Try-On</strong> to compare finishes and undertones live.
    `;
  }
  return `
    Here are some <strong>budget-friendly glosses</strong> and <strong>lip oils</strong> with <strong>pinky nude</strong> energy—great if you want to try a few shades without committing. <span aria-hidden="true">💄</span>
    <div style="height:10px"></div>
    Use <strong>Virtual Try-On</strong> on a card to see how each reads on you.
  `;
}

function buildResultsBlock(label) {
  return `${buildCarousel(label)}${resultsCopy(label)}`;
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
  return `Are you looking for something more <strong>budget-friendly</strong>, or are you open to <strong>luxury</strong> products?`;
}

function genericAssistantReply() {
  return `Tell me what you are trying to shop for (product type, finish, undertone), and I will pull a tight shortlist.`;
}

async function sendUserMessage(text, promptMeta) {
  const trimmed = text.trim();
  if (!trimmed) return;
  if (flow === "busy") return;
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

renderPrompts();
initComposer();
