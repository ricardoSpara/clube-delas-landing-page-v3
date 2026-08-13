# Clube Delas Direct Conversion V3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current long-form landing with a short mobile-first page that puts a dominant WhatsApp CTA above the fold while preserving the six groups, Telegram fallback, Meta Pixel, brand identity, accessibility, and public mobile performance.

**Architecture:** Keep the existing Vite/TypeScript static architecture. `index.html` owns all conversion content and progressive-enhancement links, `src/styles.css` owns the mobile-first visual system, `src/config.ts` remains the single source of group destinations, and `src/main.ts` owns link selection, the sticky CTA state, and analytics. Node's built-in test runner enforces the conversion contract without adding runtime dependencies.

**Tech Stack:** Vite 7, TypeScript 5.9, semantic HTML, native CSS, Node `node:test`, Meta Pixel.

## Global Constraints

- Work only in branch `feat/direct-conversion-landing` inside the isolated worktree.
- WhatsApp is the only visually primary action; Telegram is a secondary text link.
- The complete hero CTA must be visible without scrolling at `320 × 568`.
- Preserve exactly six WhatsApp destinations and `https://t.me/+JslsL6UzXv43OGYx`.
- Preserve Meta Pixel `915964627618020`, `PageView`, `ViewContent`, `Lead`, `content_name`, and `dataLayer` behavior.
- Do not add CAPI, advanced matching, forms, authentication, React, component libraries, animation libraries, external images, fake scarcity, countdowns, testimonials, or unverified statistics.
- Production budgets: HTML ≤ 10 KB gzip, CSS ≤ 7 KB gzip, own JavaScript ≤ 2 KB gzip, critical image ≤ 15 KB.
- Performance goals: CLS < 0.02, TBT < 50 ms, LCP < 1.8 s in simulated mobile Lighthouse, public mobile performance ≥ 95, and 100 for accessibility, best practices, and SEO.
- All shell commands are prefixed with `rtk`.

---

## File Responsibility Map

- `index.html`: metadata, semantic conversion flow, exact copy, progressive-enhancement destinations, and no-script Pixel fallback.
- `src/styles.css`: full visual system, responsive layout, CTA hierarchy, sticky bar, reduced-motion rules, and no-overflow safeguards.
- `src/config.ts`: unchanged source of the six WhatsApp destinations, Telegram URL, social-proof number, and UTM/`fbclid` propagation.
- `src/main.ts`: unchanged Pixel identity and event semantics, WhatsApp assignment, Telegram tracking, and new `IntersectionObserver` sticky behavior.
- `tests/landing-contract.test.mjs`: static contract for copy, action hierarchy, truthful messaging, destinations, analytics identity, and sticky CTA hooks.
- `package.json`: exposes the built-in contract test as `npm test`.
- `README.md`: describes V3 structure and records verified production budgets/results.

---

### Task 1: Lock the conversion contract and replace the content structure

**Files:**
- Create: `tests/landing-contract.test.mjs`
- Modify: `package.json`
- Modify: `index.html`

**Interfaces:**
- Consumes: existing `data-platform`, `data-placement`, and `data-testid` conventions from `src/main.ts`.
- Produces: semantic elements with placements `hero`, `final`, `mobile_sticky`, and `telegram_hero`; CSS hooks consumed by Task 2; sticky hooks consumed by Task 3.

- [ ] **Step 1: Add a failing conversion contract test**

Create `tests/landing-contract.test.mjs`:

```js
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const html = await readFile(new URL('index.html', root), 'utf8')
const config = await readFile(new URL('src/config.ts', root), 'utf8')
const main = await readFile(new URL('src/main.ts', root), 'utf8')

test('puts the direct WhatsApp promise and primary CTA in the hero', () => {
  assert.match(html, /Até 80% OFF no que você ama/)
  assert.match(html, /direto no seu WhatsApp/)
  assert.match(html, /80 mil\+ pessoas já fazem parte/)
  assert.match(html, /ENTRAR GRÁTIS NO GRUPO AGORA/)
  assert.match(html, /data-platform="whatsapp" data-placement="hero"/)
})

test('keeps Telegram secondary and conversion actions bounded', () => {
  assert.match(html, /Prefere Telegram\? Entrar por aqui/)
  assert.match(html, /data-platform="telegram" data-placement="telegram_hero"/)
  assert.equal((html.match(/data-platform="whatsapp"/g) ?? []).length, 3)
  assert.equal((html.match(/data-platform="telegram"/g) ?? []).length, 1)
})

test('uses only truthful urgency and verified community benefits', () => {
  assert.match(html, /Promo boa muda rápido/)
  assert.match(html, /Todo mês tem sorteio/)
  assert.match(html, /mais de uma ganhadora/)
  assert.match(html, /lives/)
  assert.doesNotMatch(html, /restam|últimas? vagas?|expira em|countdown|avaliações/i)
})

test('preserves all destinations and analytics identity', () => {
  assert.equal((config.match(/clubedelaspromo-landing[1-6]/g) ?? []).length, 6)
  assert.match(config, /https:\/\/t\.me\/\+JslsL6UzXv43OGYx/)
  assert.match(main, /915964627618020/)
  assert.match(main, /PageView/)
  assert.match(main, /ViewContent/)
  assert.match(main, /'Lead'/)
})

test('declares sticky CTA hooks and mobile-safe image dimensions', () => {
  assert.match(html, /data-sticky-cta/)
  assert.match(html, /data-hero-cta/)
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /\bwidth="\d+"/)
    assert.match(image[0], /\bheight="\d+"/)
  }
})
```

Add the script to `package.json`:

```json
"test": "node --test tests/*.test.mjs"
```

- [ ] **Step 2: Run the test and verify the old page fails the new contract**

Run:

```bash
rtk npm test
```

Expected: FAIL on the direct headline, CTA text, bounded action count, and sticky hooks.

- [ ] **Step 3: Replace `index.html` with the approved short conversion flow**

Keep the existing metadata, JSON-LD, stylesheet, module script, and no-script Pixel image. Replace the body product markup with this structure and exact visible copy:

```html
<div class="landing-shell">
  <div class="urgency-strip">
    <span aria-hidden="true">⚡</span>
    <span>Promo boa muda rápido — receba antes que acabe</span>
  </div>

  <header class="brand-bar">
    <a class="brand" href="#inicio" aria-label="Clube Delas Promo — início">
      <img src="/logo-clube-delas-96.webp" alt="" width="42" height="42" fetchpriority="high" decoding="async" />
      <span>Clube Delas <strong>Promo</strong></span>
    </a>
    <span class="header-proof"><strong>80 mil+</strong> na comunidade</span>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow">GRUPO GRATUITO DE ACHADINHOS</p>
        <h1>Até <em>80% OFF</em> no que você ama — direto no seu WhatsApp.</h1>
        <p class="hero-description">Moda, beleza, autocuidado e casa. A gente garimpa as melhores promoções e avisa você todos os dias.</p>
        <p class="social-proof"><span aria-hidden="true">●</span> <strong>80 mil+ pessoas</strong> já fazem parte</p>
        <a class="cta cta-primary" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="hero" data-testid="cta-hero" data-hero-cta>
          <span aria-hidden="true">◉</span>
          <span>ENTRAR GRÁTIS NO GRUPO AGORA</span>
          <span aria-hidden="true">→</span>
        </a>
        <p class="cta-note">Abre o WhatsApp em 1 clique</p>
        <ul class="trust-list" aria-label="Condições para entrar">
          <li>100% grátis</li><li>Sem compra obrigatória</li><li>Saia quando quiser</li>
        </ul>
        <a class="telegram-link" href="https://t.me/+JslsL6UzXv43OGYx" target="_blank" rel="noreferrer" data-platform="telegram" data-placement="telegram_hero" data-testid="cta-telegram-hero">Prefere Telegram? Entrar por aqui</a>
      </div>
      <div class="hero-accent" aria-hidden="true"><span>OFERTA</span><strong>boa de verdade</strong><small>sem perder horas procurando</small></div>
    </section>

    <section class="benefits" aria-labelledby="benefits-title">
      <div class="section-heading"><p>POR QUE ENTRAR?</p><h2 id="benefits-title">Você economiza tempo e dinheiro.</h2></div>
      <div class="benefit-grid">
        <article><b>80%</b><span>Achadinhos com até 80% OFF</span></article>
        <article><b>⚡</b><span>Cupons e alertas rápidos</span></article>
        <article><b>✓</b><span>Ofertas de lojas conhecidas</span></article>
        <article><b>♥</b><span>Seleção feita pelo Clube Delas</span></article>
      </div>
    </section>

    <section class="community-bonus" aria-labelledby="bonus-title">
      <div class="bonus-mark" aria-hidden="true">✦</div>
      <div><p>MAIS QUE PROMOÇÕES</p><h2 id="bonus-title">Entrou no grupo? Tem mais esperando por você.</h2><span>Todo mês tem sorteio, mais de uma ganhadora e lives com novidades. As orientações de cada ação são divulgadas dentro dos grupos.</span></div>
    </section>

    <section class="final-cta" aria-labelledby="final-title">
      <img src="/logo-clube-delas-96.webp" alt="" width="72" height="72" loading="lazy" decoding="async" />
      <p>SEU PRÓXIMO ACHADINHO PODE CHEGAR HOJE</p>
      <h2 id="final-title">Não deixe a próxima oferta passar.</h2>
      <a class="cta cta-primary cta-light" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="final" data-testid="cta-final">ENTRAR GRÁTIS NO GRUPO AGORA <span aria-hidden="true">→</span></a>
    </section>
  </main>

  <footer><span>© 2026 Clube Delas Promo</span><p>Não somos uma loja. Preços, cupons e estoques são definidos pelos anunciantes e podem mudar.</p></footer>

  <div class="mobile-sticky" data-sticky-cta aria-hidden="true">
    <a class="cta cta-primary" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="mobile_sticky" data-testid="cta-mobile">ENTRAR GRÁTIS NO WHATSAPP <span aria-hidden="true">→</span></a>
  </div>
</div>
```

- [ ] **Step 4: Run the contract test and build**

Run:

```bash
rtk npm test
rtk npm run build
```

Expected: contract tests PASS; Vite build succeeds. Visual styling may still be incomplete until Task 2.

- [ ] **Step 5: Commit the content contract**

```bash
rtk git add package.json index.html tests/landing-contract.test.mjs
rtk git commit -m "Build direct conversion content flow"
```

---

### Task 2: Build the mobile-first brand system and CTA hierarchy

**Files:**
- Modify: `src/styles.css`
- Modify: `tests/landing-contract.test.mjs`

**Interfaces:**
- Consumes: all class names defined in Task 1.
- Produces: base mobile layout, desktop enhancement, `.mobile-sticky.is-visible`, `.cta-primary`, and reduced-motion behavior consumed by Task 3 and final browser verification.

- [ ] **Step 1: Extend the contract with responsive and sticky CSS checks**

Read `src/styles.css` in the test and add:

```js
const css = await readFile(new URL('src/styles.css', root), 'utf8')

test('defines mobile-first CTA, sticky, responsive, and reduced-motion rules', () => {
  assert.match(css, /\.cta-primary\s*\{/)
  assert.match(css, /\.mobile-sticky\.is-visible/)
  assert.match(css, /@media\s*\(min-width:\s*768px\)/)
  assert.match(css, /@media\s*\(max-height:\s*650px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /safe-area-inset-bottom/)
  assert.match(css, /overflow-x:\s*hidden/)
})
```

- [ ] **Step 2: Run the new CSS contract and verify it fails**

```bash
rtk npm test
```

Expected: FAIL because the old stylesheet does not expose the V3 sticky and compact-height rules.

- [ ] **Step 3: Replace `src/styles.css` with the V3 system**

Implement these exact foundations, then style every Task 1 class without adding new content sections:

```css
:root {
  --wine: #4a102c;
  --pink: #c9145b;
  --pink-hot: #ed216f;
  --pink-soft: #ffd4e3;
  --cream: #fff8f3;
  --paper: #ffffff;
  --ink: #2c1420;
  --muted: #705663;
  --yellow: #ffd75e;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body { margin: 0; overflow-x: hidden; background: var(--cream); color: var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
a { color: inherit; }
img { max-width: 100%; }
.landing-shell { min-width: 0; }
.urgency-strip { min-height: 34px; padding: 7px 12px; display: flex; align-items: center; justify-content: center; gap: 6px; background: var(--wine); color: white; font-size: 11px; font-weight: 800; text-align: center; }
.brand-bar { min-height: 62px; padding: 10px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; background: rgba(255,255,255,.92); }
.brand { display: inline-flex; align-items: center; gap: 9px; color: var(--ink); text-decoration: none; font-size: 13px; font-weight: 800; }
.brand img { border-radius: 50%; }
.brand strong { color: var(--pink); }
.header-proof { color: var(--muted); font-size: 10px; text-align: right; }
.header-proof strong { display: block; color: var(--wine); font-size: 12px; }
.hero { position: relative; padding: 28px 18px 38px; overflow: hidden; background: radial-gradient(circle at 8% 35%, rgba(255,255,255,.8) 0 9%, transparent 9.5%), linear-gradient(155deg, #ffe8f0, #ffc7dc); text-align: center; }
.hero-copy { position: relative; z-index: 2; max-width: 620px; margin: 0 auto; }
.eyebrow, .section-heading p, .community-bonus p, .final-cta > p { margin: 0 0 10px; color: var(--pink); font-size: 10px; font-weight: 900; letter-spacing: .11em; }
h1, h2 { margin: 0; font-family: Georgia, "Times New Roman", serif; letter-spacing: -.045em; }
h1 { font-size: clamp(37px, 11.7vw, 58px); line-height: .96; }
h1 em { color: var(--pink); font-style: italic; }
.hero-description { max-width: 520px; margin: 15px auto 12px; color: var(--muted); font-size: 14px; line-height: 1.45; }
.social-proof { width: max-content; max-width: 100%; margin: 0 auto 12px; padding: 7px 11px; border-radius: 999px; background: rgba(255,255,255,.7); color: var(--muted); font-size: 10px; }
.social-proof > span { color: var(--pink); }
.social-proof strong { color: var(--wine); }
.cta { min-height: 54px; padding: 0 15px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 999px; text-align: center; text-decoration: none; font-size: 13px; font-weight: 950; line-height: 1.15; }
.cta-primary { width: 100%; background: linear-gradient(135deg, var(--pink-hot), #b71050); color: white; box-shadow: 0 14px 30px rgba(185,16,78,.28); }
.cta-note { margin: 7px 0 0; color: var(--muted); font-size: 10px; font-weight: 700; }
.trust-list { margin: 11px 0 8px; padding: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 5px 12px; list-style: none; color: var(--muted); font-size: 10px; }
.trust-list li::before { content: "✓"; margin-right: 4px; color: var(--pink); font-weight: 900; }
.telegram-link { display: inline-block; min-height: 44px; padding: 13px 8px 8px; color: #087ca7; font-size: 11px; font-weight: 800; text-underline-offset: 3px; }
.hero-accent { display: none; }
.benefits { padding: 48px 18px; background: white; }
.section-heading { max-width: 560px; margin: 0 auto 24px; text-align: center; }
.section-heading h2 { font-size: 34px; line-height: 1.02; }
.benefit-grid { max-width: 620px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
.benefit-grid article { min-height: 105px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid #f0dce4; border-radius: 18px; background: var(--cream); }
.benefit-grid b { color: var(--pink); font-family: Georgia, serif; font-size: 25px; }
.benefit-grid span { color: var(--wine); font-size: 12px; font-weight: 800; line-height: 1.3; }
.community-bonus { margin: 0 14px; padding: 26px 22px; display: grid; grid-template-columns: auto 1fr; gap: 14px; border-radius: 24px; background: var(--wine); color: white; }
.bonus-mark { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 13px; background: var(--yellow); color: var(--wine); }
.community-bonus p { color: #ffb5cf; }
.community-bonus h2 { margin-bottom: 10px; font-size: 27px; line-height: 1.02; }
.community-bonus div > span { color: #f1d7e2; font-size: 12px; line-height: 1.55; }
.final-cta { margin: 46px 14px 18px; padding: 38px 20px; border-radius: 26px; background: linear-gradient(145deg, var(--pink), #8c123f); color: white; text-align: center; }
.final-cta img { border: 4px solid rgba(255,255,255,.75); border-radius: 50%; }
.final-cta > p { margin-top: 15px; color: #ffd0e0; }
.final-cta h2 { margin: 0 auto 20px; max-width: 520px; font-size: 34px; line-height: 1.02; }
.cta-light { background: white; color: var(--wine); box-shadow: 0 14px 30px rgba(53,4,25,.24); }
footer { padding: 22px 18px 92px; color: var(--muted); font-size: 9px; line-height: 1.5; text-align: center; }
footer p { max-width: 560px; margin: 5px auto 0; }
.mobile-sticky { position: fixed; z-index: 20; left: 0; right: 0; bottom: 0; padding: 9px 12px calc(9px + env(safe-area-inset-bottom)); transform: translateY(120%); visibility: hidden; border-top: 1px solid rgba(74,16,44,.1); background: rgba(255,248,243,.94); transition: transform .2s ease, visibility .2s ease; }
.mobile-sticky.is-visible { transform: translateY(0); visibility: visible; }
.mobile-sticky .cta { min-height: 52px; }
.cta:focus-visible, .telegram-link:focus-visible, .brand:focus-visible { outline: 3px solid var(--yellow); outline-offset: 3px; }

@media (max-height: 650px) and (max-width: 767px) {
  .urgency-strip { min-height: 30px; padding-block: 5px; }
  .brand-bar { min-height: 54px; padding-block: 6px; }
  .brand img { width: 36px; height: 36px; }
  .hero { padding-top: 18px; }
  .hero-description { margin-block: 10px 8px; font-size: 13px; }
  .social-proof { margin-bottom: 9px; }
}

@media (min-width: 768px) {
  .brand-bar { max-width: 1120px; margin: 0 auto; padding-inline: 28px; }
  .hero { min-height: 610px; padding: 70px max(28px, calc((100vw - 1120px) / 2)); display: grid; grid-template-columns: 1.15fr .85fr; align-items: center; gap: 70px; text-align: left; }
  .hero-copy { max-width: 650px; margin: 0; }
  h1 { font-size: clamp(58px, 6vw, 78px); }
  .hero-description { margin-inline: 0; font-size: 18px; }
  .social-proof { margin-inline: 0; }
  .cta-primary { width: max-content; min-width: 390px; }
  .trust-list { justify-content: flex-start; }
  .telegram-link { padding-left: 0; }
  .hero-accent { width: 330px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 50%; background: var(--wine); color: white; box-shadow: 32px 32px 0 var(--yellow); transform: rotate(-5deg); }
  .hero-accent span { color: #ff9bc1; font-size: 12px; font-weight: 900; letter-spacing: .15em; }
  .hero-accent strong { max-width: 240px; margin: 10px 0; font-family: Georgia, serif; font-size: 38px; text-align: center; line-height: .95; }
  .hero-accent small { max-width: 190px; color: #f0cfdd; text-align: center; }
  .benefits { padding-block: 82px; }
  .section-heading h2 { font-size: 48px; }
  .benefit-grid { max-width: 1000px; grid-template-columns: repeat(4, 1fr); }
  .community-bonus, .final-cta { max-width: 1000px; margin-inline: auto; }
  .community-bonus { padding: 48px; align-items: center; }
  .community-bonus h2 { font-size: 43px; }
  .final-cta { padding: 62px; }
  .final-cta h2 { font-size: 50px; }
  footer { padding-bottom: 28px; }
  .mobile-sticky { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
}
```

Tighten values only when browser verification shows a real fit issue. Keep the declared colors, CTA contrast, mobile-first ordering, and budget.

- [ ] **Step 4: Run tests, lint, and build**

```bash
rtk npm test
rtk npm run lint
rtk npm run build
```

Expected: all tests pass; lint and build succeed.

- [ ] **Step 5: Commit the visual system**

```bash
rtk git add src/styles.css tests/landing-contract.test.mjs
rtk git commit -m "Create mobile-first conversion design"
```

---

### Task 3: Add the sticky CTA without changing Pixel behavior

**Files:**
- Modify: `src/main.ts`
- Modify: `tests/landing-contract.test.mjs`

**Interfaces:**
- Consumes: `[data-hero-cta]`, `[data-sticky-cta]`, `.is-visible`, and existing `getWhatsappGroupUrl(): string`.
- Produces: `setupStickyCta(): void`; preserves `trackLead(placement, platform)` and all current Meta calls.

- [ ] **Step 1: Add a failing source contract for sticky behavior and all placements**

Append:

```js
test('implements observer-driven sticky behavior and tracks every placement', () => {
  assert.match(main, /function setupStickyCta\(\)/)
  assert.match(main, /IntersectionObserver/)
  assert.match(main, /data-hero-cta/)
  assert.match(main, /data-sticky-cta/)
  for (const placement of ['hero', 'final', 'mobile_sticky', 'telegram_hero']) {
    assert.match(html, new RegExp(`data-placement="${placement}"`))
  }
})
```

- [ ] **Step 2: Run the contract and verify it fails**

```bash
rtk npm test
```

Expected: FAIL because `setupStickyCta()` is not defined.

- [ ] **Step 3: Implement minimal observer behavior in `src/main.ts`**

Add after `trackLead`:

```ts
function setupStickyCta() {
  const heroCta = document.querySelector<HTMLElement>('[data-hero-cta]')
  const stickyCta = document.querySelector<HTMLElement>('[data-sticky-cta]')
  if (!heroCta || !stickyCta || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      const shouldShow = !entry.isIntersecting && entry.boundingClientRect.bottom < 0
      stickyCta.classList.toggle('is-visible', shouldShow)
      stickyCta.setAttribute('aria-hidden', String(!shouldShow))
    },
    { threshold: 0.25 },
  )

  observer.observe(heroCta)
}
```

Call it immediately after the entry events:

```ts
installPixelQueue()
sendLightweightPixelEvent('PageView')
sendLightweightPixelEvent('ViewContent')
setupStickyCta()
```

Do not modify the Pixel ID, entry-event endpoint, 8-second deferred library fallback, first-interaction loading, `Lead`, `content_name`, or `dataLayer` payload.

- [ ] **Step 4: Run the full automated baseline**

```bash
rtk npm test
rtk npm run lint
rtk npm run build
```

Expected: tests, lint, and build all pass.

- [ ] **Step 5: Commit the progressive behavior**

```bash
rtk git add src/main.ts tests/landing-contract.test.mjs
rtk git commit -m "Add conversion CTA behavior"
```

---

### Task 4: Verify responsiveness, event delivery, performance budgets, and documentation

**Files:**
- Modify: `README.md`
- Modify: `docs/superpowers/specs/2026-08-13-clube-delas-direct-conversion-v3-design.md`
- Create outside repository: `/tmp/clube-delas-v3-*.png`, `/tmp/clube-delas-v3-lighthouse.json`

**Interfaces:**
- Consumes: final production output from Tasks 1–3.
- Produces: verified metrics, screenshots, implementation status, clean branch, and a remote preview branch.

- [ ] **Step 1: Run all local quality gates**

```bash
rtk npm test
rtk npm run lint
rtk npm run build
rtk git diff --check
```

Expected: zero test failures, zero lint errors, successful build, and no whitespace errors.

- [ ] **Step 2: Enforce gzip budgets with a Node assertion**

Run:

```bash
rtk node -e 'const fs=require("fs"),z=require("zlib"),p=require("path"); const files=fs.readdirSync("dist/assets").map(x=>p.join("dist/assets",x)); const html="dist/index.html"; const rows=[html,...files].map(f=>({file:f,gzip:z.gzipSync(fs.readFileSync(f)).length})); console.log(rows); for(const r of rows){const limit=r.file.endsWith(".html")?10240:r.file.endsWith(".css")?7168:r.file.endsWith(".js")?2048:Infinity;if(r.gzip>limit)throw new Error(`${r.file} exceeds ${limit}: ${r.gzip}`)} const logo=fs.statSync("public/logo-clube-delas-96.webp").size; if(logo>15360)throw new Error(`critical logo exceeds 15360: ${logo}`); console.log({criticalLogoBytes:logo})'
```

Expected: command exits 0; HTML ≤ 10240 bytes, CSS ≤ 7168 bytes, JS ≤ 2048 bytes gzip.

- [ ] **Step 3: Start the production preview and capture required viewports**

Start:

```bash
rtk npm run preview -- --host 127.0.0.1
```

Using Chrome through Playwright, capture:

```bash
rtk npx --yes playwright screenshot --channel=chrome --viewport-size="320,568" --wait-for-timeout=700 http://127.0.0.1:4173 /tmp/clube-delas-v3-320.png
rtk npx --yes playwright screenshot --channel=chrome --viewport-size="360,800" --wait-for-timeout=700 http://127.0.0.1:4173 /tmp/clube-delas-v3-360.png
rtk npx --yes playwright screenshot --channel=chrome --viewport-size="390,844" --wait-for-timeout=700 http://127.0.0.1:4173 /tmp/clube-delas-v3-390.png
rtk npx --yes playwright screenshot --channel=chrome --viewport-size="768,1024" --wait-for-timeout=700 http://127.0.0.1:4173 /tmp/clube-delas-v3-768.png
rtk npx --yes playwright screenshot --channel=chrome --viewport-size="1440,900" --wait-for-timeout=700 http://127.0.0.1:4173 /tmp/clube-delas-v3-1440.png
```

Inspect all five images. Required result: hero CTA visible at 320 × 568, no clipped text, no horizontal overflow, brand hierarchy intact, WhatsApp dominant, Telegram secondary.

- [ ] **Step 4: Verify sticky behavior and page integrity in headless Chrome**

Use a small Playwright evaluation to assert:

```js
const initial = await page.evaluate(() => ({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  heroVisible: document.querySelector('[data-hero-cta]').getBoundingClientRect().bottom <= innerHeight,
  stickyVisible: document.querySelector('[data-sticky-cta]').classList.contains('is-visible'),
}))
await page.evaluate(() => scrollTo(0, document.querySelector('.benefits').offsetTop))
await page.waitForTimeout(250)
const afterScroll = await page.evaluate(() => document.querySelector('[data-sticky-cta]').classList.contains('is-visible'))
```

Expected at `320 × 568`: `overflow=false`, `heroVisible=true`, initial `stickyVisible=false`, and `afterScroll=true`.

- [ ] **Step 5: Run Lighthouse mobile against production preview**

```bash
rtk npx --yes lighthouse http://127.0.0.1:4173 --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.mobile=true --throttling-method=simulate --output=json --output-path=/tmp/clube-delas-v3-lighthouse.json --chrome-flags=--headless=new --quiet
rtk node -e 'const r=require("/tmp/clube-delas-v3-lighthouse.json"),c=r.categories,a=r.audits; const out={scores:{performance:c.performance.score*100,accessibility:c.accessibility.score*100,bestPractices:c["best-practices"].score*100,seo:c.seo.score*100},metrics:{fcp:a["first-contentful-paint"].numericValue,lcp:a["largest-contentful-paint"].numericValue,tbt:a["total-blocking-time"].numericValue,cls:a["cumulative-layout-shift"].numericValue}}; console.log(out); if(out.scores.performance<95||out.scores.accessibility<100||out.scores.bestPractices<100||out.scores.seo<100||out.metrics.lcp>=1800||out.metrics.tbt>=50||out.metrics.cls>=.02)process.exit(1)'
```

Expected: all asserted thresholds pass.

- [ ] **Step 6: Verify Meta entry events and CTA configuration**

From Lighthouse `network-requests`, verify `facebook.com/tr` contains both `ev=PageView` and `ev=ViewContent`, status 200. In browser inspection, verify every WhatsApp link resolves to one of the six configured destinations and every CTA still contains its `data-placement`.

- [ ] **Step 7: Update project documentation with measured results**

Update `README.md` to describe the direct-conversion V3, WhatsApp-first hierarchy, Telegram fallback, same Pixel, six-group distribution, test command, and exact gzip/Lighthouse values produced by Steps 2 and 5.

Update the design spec status from `design aprovado; aguardando revisão final da especificação` to `implementado e verificado na branch feat/direct-conversion-landing`.

- [ ] **Step 8: Re-run final gates and commit verification**

```bash
rtk npm test
rtk npm run lint
rtk npm run build
rtk git diff --check
rtk git add README.md docs/superpowers/specs/2026-08-13-clube-delas-direct-conversion-v3-design.md
rtk git commit -m "Document direct conversion landing results"
```

Expected: clean automated result and documentation commit.

- [ ] **Step 9: Push the isolated preview branch**

```bash
rtk git push -u origin feat/direct-conversion-landing
```

Expected: remote branch exists without modifying `main`; Vercel can create a preview deployment for review.
