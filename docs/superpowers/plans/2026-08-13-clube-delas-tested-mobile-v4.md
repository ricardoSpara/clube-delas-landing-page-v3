# Clube Delas Tested Mobile V4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Clube Delas landing around the compact, mobile-first hierarchy of the previously higher-converting page while retaining truthful copy, the existing six WhatsApp destinations, Telegram fallback, Meta Pixel, and static performance.

**Architecture:** Keep the current static Vite/TypeScript application. `index.html` owns all conversion content, `src/styles.css` owns the responsive visual system, `src/config.ts` remains the source of external destinations and attribution, and `src/main.ts` remains the small progressive-enhancement layer for tracking and the sticky CTA.

**Tech Stack:** Semantic HTML, mobile-first CSS, TypeScript, Vite 7, Node test runner, Lighthouse/Chromium for browser validation.

## Global Constraints

- WhatsApp is the only visually primary action; Telegram is one secondary link in the hero.
- Use exactly `80 mil+` as the community proof.
- Use the headline `Achadinhos Femininos de até 80% OFF no seu WhatsApp`.
- Do not use countdowns, remaining seats, online viewers, ratings, testimonials, or unsupported statistics.
- Preserve exactly six `https://tr.ee/clubedelaspromo-landingN` destinations and `https://t.me/+JslsL6UzXv43OGYx`.
- Preserve Meta Pixel `915964627618020` with `PageView`, `ViewContent`, and `Lead`.
- Preserve `utm_*` and `fbclid` on WhatsApp destinations.
- Use no React, hydration, component library, external font, or render-blocking third-party asset.
- Never force the mobile hero to `100vh`, `100svh`, `100dvh`, or `100lvh`.
- Validate `320×568`, `360×800`, `375×667`, `390×844`, `393×795`, `430×932`, `768×1024`, and `1440×900`.

## File Map

- Modify `tests/landing-contract.test.mjs`: executable content, layout, destination, and analytics contracts.
- Modify `index.html`: compact header, conversion hero, benefits, community bonus, final CTA, and footer.
- Modify `src/styles.css`: sans-serif V4 design, content-driven hero, compact mobile sizing, desktop adaptation, and sticky CTA.
- Keep `src/config.ts`: existing six destinations, Telegram URL, `80 mil+`, and UTM/`fbclid` propagation.
- Keep `src/main.ts`: existing Pixel identity, lightweight entry events, `Lead`, and observer-driven sticky behavior.
- Modify `README.md`: identify V4, link the V4 spec, and record verified production bundle/performance results.

---

### Task 1: Lock and implement the compact conversion hierarchy

**Files:**
- Modify: `tests/landing-contract.test.mjs`
- Modify: `index.html`

**Interfaces:**
- Consumes: existing `data-platform`, `data-placement`, `data-hero-cta`, and `data-sticky-cta` hooks from `src/main.ts`.
- Produces: semantic elements with placements `hero`, `telegram_hero`, `final`, and `mobile_sticky`.

- [ ] **Step 1: Replace the hero/content contract with a failing V4 contract**

Replace the first three tests with:

```js
test('uses the approved compact V4 promise and hierarchy', () => {
  assert.match(html, /Achadinhos Femininos de até[\s\S]*80% OFF[\s\S]*no seu WhatsApp/)
  assert.match(html, /80 mil\+ pessoas já fazem parte/)
  assert.match(html, /QUERO ENTRAR GRÁTIS NO WHATSAPP/)
  assert.match(html, /Grátis[\s\S]*Sem compra obrigatória[\s\S]*Saia quando quiser/)
  assert.match(html, /class="hero-logo"/)
  assert.doesNotMatch(html, /urgency-strip|eyebrow|hero-accent/)
})

test('keeps WhatsApp dominant and Telegram secondary', () => {
  assert.match(html, /Prefere Telegram\? Entrar por aqui/)
  assert.match(html, /data-platform="whatsapp" data-placement="hero"/)
  assert.match(html, /data-platform="telegram" data-placement="telegram_hero"/)
  assert.equal((html.match(/data-platform="whatsapp"/g) ?? []).length, 3)
  assert.equal((html.match(/data-platform="telegram"/g) ?? []).length, 1)
})

test('uses only verified proof and community benefits', () => {
  assert.match(html, /Todo mês tem sorteio\. E mais de uma ganhadora\./)
  assert.match(html, /lives/)
  assert.doesNotMatch(html, /restam|últimas? vagas?|expira em|countdown|avaliações|23\.157/i)
})
```

In the existing Safari-layout test, remove only the assertion that counts four `.headline-line` elements. Keep its CSS assertions temporarily; the current CSS still satisfies them and Task 2 will replace that test before changing the styles.

- [ ] **Step 2: Run the contract test and confirm the intended failure**

Run:

```bash
npm test
```

Expected: FAIL because the current HTML still contains the urgency strip, editorial headline, and no `.hero-logo`.

- [ ] **Step 3: Replace the visible page structure with the approved V4 markup**

Keep the existing `<head>`, JSON-LD, noscript Pixel fallback, and script tag. Replace the visible `.landing-shell` content with this structure:

```html
<div class="landing-shell">
  <header class="brand-bar">
    <a class="brand" href="#inicio" aria-label="Clube Delas Promo — início">
      <img src="/logo-clube-delas-96.webp" alt="" width="44" height="44" fetchpriority="high" decoding="async" />
      <span>Clube Delas <strong>Promo</strong></span>
    </a>
    <span class="header-proof"><strong>80 mil+</strong> na comunidade</span>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <img class="hero-logo" src="/logo-clube-delas-96.webp" alt="Clube Delas Promo" width="84" height="84" fetchpriority="high" decoding="async" />
        <p class="social-proof"><span aria-hidden="true">●</span> <strong>80 mil+ pessoas</strong> já fazem parte</p>
        <h1>Achadinhos Femininos de até <em>80% OFF</em> no seu WhatsApp</h1>
        <p class="hero-description">Moda, beleza, autocuidado e casa: as melhores promoções selecionadas e enviadas para você todos os dias. <strong>100% gratuito.</strong></p>
        <a class="cta cta-primary" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="hero" data-testid="cta-hero" data-hero-cta>
          <span aria-hidden="true">◉</span>
          <span>QUERO ENTRAR GRÁTIS NO WHATSAPP</span>
          <span aria-hidden="true">→</span>
        </a>
        <ul class="trust-list" aria-label="Condições para entrar">
          <li>Grátis</li>
          <li>Sem compra obrigatória</li>
          <li>Saia quando quiser</li>
        </ul>
        <a class="telegram-link" href="https://t.me/+JslsL6UzXv43OGYx" target="_blank" rel="noreferrer" data-platform="telegram" data-placement="telegram_hero" data-testid="cta-telegram-hero">Prefere Telegram? Entrar por aqui</a>
      </div>
    </section>

    <section class="benefits" aria-labelledby="benefits-title">
      <div class="section-heading">
        <p>POR QUE ENTRAR?</p>
        <h2 id="benefits-title">Promo boa, sem perder tempo procurando.</h2>
      </div>
      <div class="benefit-grid">
        <article><b>80%</b><span>Achadinhos com até 80% OFF</span></article>
        <article><b>⚡</b><span>Cupons e alertas rápidos</span></article>
        <article><b>✓</b><span>Ofertas de lojas conhecidas</span></article>
        <article><b>♥</b><span>Seleção feita pelo Clube Delas</span></article>
      </div>
    </section>

    <section class="community-bonus" aria-labelledby="bonus-title">
      <div class="bonus-mark" aria-hidden="true">✦</div>
      <div>
        <p>MAIS QUE PROMOÇÕES</p>
        <h2 id="bonus-title">Todo mês tem sorteio. E mais de uma ganhadora.</h2>
        <span>Basta entrar no grupo para acompanhar os sorteios, as lives e as orientações de cada ação.</span>
      </div>
    </section>

    <section class="final-cta" aria-labelledby="final-title">
      <img src="/logo-clube-delas-96.webp" alt="" width="68" height="68" loading="lazy" decoding="async" />
      <h2 id="final-title">Entre grátis e receba o próximo achadinho no WhatsApp.</h2>
      <a class="cta cta-primary cta-light" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="final" data-testid="cta-final">
        <span>QUERO ENTRAR GRÁTIS NO WHATSAPP</span>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  </main>

  <footer>
    <span>© 2026 Clube Delas Promo</span>
    <p>Não somos uma loja. Preços, cupons e estoques são definidos pelos anunciantes e podem mudar.</p>
  </footer>

  <div class="mobile-sticky" data-sticky-cta aria-hidden="true">
    <a class="cta cta-primary" href="https://tr.ee/clubedelaspromo-landing1" target="_blank" rel="noreferrer" data-platform="whatsapp" data-placement="mobile_sticky" data-testid="cta-mobile">
      <span>ENTRAR GRÁTIS NO WHATSAPP</span>
      <span aria-hidden="true">→</span>
    </a>
  </div>
</div>
```

- [ ] **Step 4: Run tests and commit the content hierarchy**

Run:

```bash
npm test
git add index.html tests/landing-contract.test.mjs
git commit -m "Build compact mobile conversion hierarchy"
```

Expected: all tests pass. The temporary Safari-layout CSS assertions remain green against the unchanged stylesheet and are replaced before Task 2 edits that stylesheet.

---

### Task 2: Replace the stretched editorial CSS with a content-driven mobile system

**Files:**
- Modify: `tests/landing-contract.test.mjs`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: class names produced by Task 1.
- Produces: a hero with intrinsic height, sans-serif headings, responsive wrapping, and safe sticky behavior.

- [ ] **Step 1: Replace the obsolete Safari-height test with V4 layout contracts**

Use:

```js
test('uses a content-driven sans-serif mobile hero', () => {
  assert.doesNotMatch(css, /100(?:s|d|l)?vh/)
  assert.doesNotMatch(css, /white-space:\s*nowrap/)
  assert.match(css, /h1,\s*h2\s*\{[^}]*font-family:\s*inherit/s)
  assert.match(css, /\.hero-logo\s*\{/)
  assert.match(css, /\.cta\s*\{[^}]*min-height:\s*60px/s)
  assert.match(css, /@media\s*\(max-width:\s*359px\)/)
})
```

- [ ] **Step 2: Run the contract and verify it fails against the stretched CSS**

Run:

```bash
npm test
```

Expected: FAIL on viewport units, nowrap, Georgia headings, missing `.hero-logo`, and CTA height.

- [ ] **Step 3: Implement the compact mobile-first visual system**

Replace the relevant base and breakpoint rules so they include these exact behaviors:

```css
:root {
  --wine: #4a102c;
  --pink: #d31362;
  --pink-hot: #ed2775;
  --pink-soft: #ffd9e7;
  --cream: #fff9f6;
  --paper: #ffffff;
  --ink: #24151d;
  --muted: #705c66;
  --yellow: #ffd75e;
}

h1,
h2 { margin: 0; font-family: inherit; letter-spacing: -.035em; }

.brand-bar { min-height: 68px; padding: 10px 16px; }
.hero { padding: 18px 18px 28px; background: linear-gradient(180deg, #ffe0eb 0%, #fff4f8 100%); text-align: center; }
.hero-copy { width: 100%; max-width: 560px; margin: 0 auto; }
.hero-logo { width: 84px; height: 84px; margin: 0 auto 12px; border-radius: 24px; box-shadow: 0 12px 28px rgba(211, 19, 98, .18); }
.social-proof { margin: 0 auto 12px; }
h1 { max-width: 540px; margin: 0 auto; font-size: clamp(30px, 8.3vw, 40px); font-weight: 820; line-height: 1.08; }
h1 em { color: var(--pink-hot); font-style: normal; }
.hero-description { max-width: 500px; margin: 13px auto 16px; font-size: 14px; line-height: 1.45; }
.cta { min-height: 60px; }
.trust-list { margin: 10px 0 0; }
.telegram-link { min-height: 44px; padding: 13px 8px 4px; }

.benefits { padding: 34px 18px 38px; }
.section-heading { margin-bottom: 18px; }
.section-heading h2 { font-size: 28px; line-height: 1.08; }
.benefit-grid article { min-height: 96px; }
.benefit-grid b { font-family: inherit; }
.community-bonus h2,
.final-cta h2 { font-family: inherit; }

@media (max-width: 359px) {
  .brand-bar { min-height: 60px; padding-block: 8px; }
  .brand img { width: 38px; height: 38px; }
  .brand { font-size: 12px; }
  .hero { padding: 12px 14px 20px; }
  .hero-logo { width: 64px; height: 64px; margin-bottom: 8px; }
  .social-proof { margin-bottom: 8px; padding-block: 5px; }
  h1 { font-size: 28px; line-height: 1.04; }
  .hero-description { margin-block: 8px 10px; font-size: 12px; line-height: 1.35; }
  .cta { min-height: 56px; font-size: 12px; }
  .trust-list { margin-top: 7px; font-size: 9px; }
  .telegram-link { min-height: 40px; padding-top: 10px; }
}

@media (min-width: 768px) {
  .hero { padding: 54px 28px 60px; }
  .hero-logo { width: 104px; height: 104px; }
  h1 { font-size: clamp(44px, 5vw, 62px); }
  .hero-description { font-size: 17px; }
  .cta-primary { width: min(100%, 520px); }
  .benefit-grid { max-width: 1000px; grid-template-columns: repeat(4, 1fr); }
  .mobile-sticky { display: none; }
}
```

Remove `.urgency-strip`, `.eyebrow`, `.headline-line`, `.hero-accent`, every Georgia declaration, every forced viewport-height rule, the `768–899` nowrap rule, and the compact-height hero overrides.

- [ ] **Step 4: Run the full contract, lint, and build**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit the visual system**

Run:

```bash
git add src/styles.css tests/landing-contract.test.mjs
git commit -m "Rebuild V4 mobile conversion styling"
```

---

### Task 3: Verify browser behavior, screenshots, and performance

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: production build from Tasks 1–2.
- Produces: visual evidence, measured bundle sizes, Lighthouse results, and updated project handoff.

- [ ] **Step 1: Start the production preview**

Run:

```bash
npm run build
npm run preview -- --host 127.0.0.1
```

Expected: Vite preview responds on its printed local URL.

- [ ] **Step 2: Capture and inspect every required viewport**

For each viewport `320×568`, `360×800`, `375×667`, `390×844`, `393×795`, `430×932`, `768×1024`, and `1440×900`:

```js
({
  overflow: document.documentElement.scrollWidth > innerWidth,
  heroCtaBottom: document.querySelector('[data-hero-cta]').getBoundingClientRect().bottom,
  telegramBottom: document.querySelector('[data-placement="telegram_hero"]').getBoundingClientRect().bottom,
  viewportHeight: innerHeight,
  heroHeight: document.querySelector('.hero').getBoundingClientRect().height,
})
```

Expected: `overflow=false`; primary CTA complete at `320×568`; Telegram complete at `375×667` and larger; no large artificial blank area; no clipped text. Inspect both first-viewport and full-page screenshots.

- [ ] **Step 3: Verify sticky and analytics behavior**

Scroll past the hero CTA and verify `.mobile-sticky.is-visible`, then click a controlled WhatsApp CTA and inspect:

```js
window.dataLayer.at(-1)
```

Expected:

```js
{ event: 'generate_lead', placement: 'hero', platform: 'whatsapp' }
```

Also verify `facebook.com/tr` requests for `PageView` and `ViewContent`, and confirm the resolved WhatsApp URL belongs to the six configured destinations.

- [ ] **Step 4: Measure bundle and Lighthouse budgets**

Run:

```bash
find dist -type f -maxdepth 2 -print
gzip -c dist/index.html | wc -c
gzip -c dist/assets/*.css | wc -c
gzip -c dist/assets/*.js | wc -c
npx lighthouse http://127.0.0.1:4173 --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --output=json --output-path=/tmp/clube-delas-v4-lighthouse.json --chrome-flags='--headless --no-sandbox'
```

Expected: HTML ≤ 10 KB gzip, CSS ≤ 7 KB gzip, JS ≤ 2 KB gzip, performance ≥ 95, other Lighthouse categories = 100, TBT < 50 ms, CLS < 0.02, and LCP < 1.8 s.

- [ ] **Step 5: Update README with the validated V4 state**

Change the opening description to `Landing V4 mobile-first inspirada na hierarquia compacta da versão de maior conversão.` Link `docs/superpowers/specs/2026-08-13-clube-delas-tested-mobile-v4-design.md` and record the exact gzip and Lighthouse values produced by Step 4.

- [ ] **Step 6: Run final checks and commit verification documentation**

Run:

```bash
npm test
npm run lint
npm run build
git diff --check
git add README.md
git commit -m "Document verified V4 conversion landing"
```

Expected: every command exits 0 and the worktree is clean.

---

### Task 4: Review and publish only after evidence is clean

**Files:**
- Review: all changes since `origin/main`

**Interfaces:**
- Consumes: commits and evidence from Tasks 1–3.
- Produces: an intentional merge to `main` and the automatic Vercel production deployment.

- [ ] **Step 1: Review the complete branch diff**

Run:

```bash
git diff --stat origin/main...HEAD
git diff --check origin/main...HEAD
git log --oneline origin/main..HEAD
```

Expected: only the approved V4 spec, plan, HTML, CSS, tests, and README changed; `src/config.ts` and `src/main.ts` remain functionally unchanged.

- [ ] **Step 2: Merge and push only after visual approval**

Run from the local main branch after approval:

```bash
git switch synced-main
git merge --ff-only codex/mobile-conversion-v4
git push origin synced-main:main
```

Expected: push succeeds and Vercel starts a production deployment from `main`.

- [ ] **Step 3: Verify production at the real URL**

Open `https://clubedelaspromo-landing-page.vercel.app/` at `393×795`, confirm the deployed commit, repeat the overflow/CTA checks, and confirm `PageView`, `ViewContent`, and one controlled `Lead` request.
