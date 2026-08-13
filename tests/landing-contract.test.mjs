import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const html = await readFile(new URL('index.html', root), 'utf8')
const config = await readFile(new URL('src/config.ts', root), 'utf8')
const main = await readFile(new URL('src/main.ts', root), 'utf8')
const css = await readFile(new URL('src/styles.css', root), 'utf8')

test('puts the direct WhatsApp promise and primary CTA in the hero', () => {
  assert.match(html, /Até\s+<em>80% OFF<\/em>\s+no que você ama/)
  assert.match(html, /direto no seu WhatsApp/)
  assert.match(html, /<strong>80 mil\+ pessoas<\/strong> já fazem parte/)
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

test('defines mobile-first CTA, sticky, responsive, and reduced-motion rules', () => {
  assert.match(css, /\.cta-primary\s*\{/)
  assert.match(css, /\.mobile-sticky\.is-visible/)
  assert.match(css, /@media\s*\(min-width:\s*768px\)/)
  assert.match(css, /@media\s*\(max-height:\s*650px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /safe-area-inset-bottom/)
  assert.match(css, /overflow-x:\s*hidden/)
})
