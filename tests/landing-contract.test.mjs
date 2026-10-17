import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const html = await readFile(new URL('index.html', root), 'utf8')
const config = await readFile(new URL('src/config.ts', root), 'utf8')
const main = await readFile(new URL('src/main.ts', root), 'utf8')
const css = await readFile(new URL('src/styles.css', root), 'utf8')

test('presents a compact group invitation with real benefits', () => {
  assert.match(html, /class="hero-medallion"/)
  assert.match(html, /Entre no Clube Delas e receba achadinhos no WhatsApp\./)
  assert.match(html, /Ofertas selecionadas em um só lugar/)
  assert.match(html, /Cupons e alertas rápidos/)
  assert.match(html, /Até 80% OFF no que você ama/)
  assert.match(html, /QUERO ENTRAR NO GRUPO GRÁTIS/)
  assert.match(html, /É grátis,[\s\S]*sair quando quiser/)
  assert.equal((html.match(/<img\b[^>]*logo-clube-delas-96\.webp/g) ?? []).length, 1)
})

test('keeps WhatsApp dominant and Telegram secondary', () => {
  assert.match(html, /Prefere Telegram\? Entrar por aqui/)
  assert.match(html, /data-platform="whatsapp" data-placement="hero"/)
  assert.match(html, /data-platform="telegram" data-placement="telegram_hero"/)
  assert.equal((html.match(/data-platform="whatsapp"/g) ?? []).length, 3)
  assert.equal((html.match(/data-platform="telegram"/g) ?? []).length, 1)
})

test('uses only verified proof and community benefits', () => {
  assert.match(html, /Todo mês tem sorteio,[\s\S]*mais de uma ganhadora/)
  assert.match(html, /lives/)
  assert.doesNotMatch(html, /restam|últimas? vagas?|expira em|countdown|avaliações|23\.157/i)
})

test('preserves all destinations and analytics identity', () => {
  assert.equal((config.match(/https:\/\/conectatribo\.com\.br\/t\/bM4x1M/g) ?? []).length, 1)
  assert.match(config, /https:\/\/t\.me\/\+JslsL6UzXv43OGYx/)
  assert.match(main, /1656975519378017/)
  assert.match(main, /PageView/)
  assert.match(main, /ViewContent/)
  assert.match(main, /'Lead'/)
  assert.match(main, /pixel\.loaded = true/)
})

test('declares sticky CTA hooks and mobile-safe image dimensions', () => {
  assert.match(html, /data-sticky-cta/)
  assert.match(html, /data-hero-cta/)
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /\bwidth="\d+"/)
    assert.match(image[0], /\bheight="\d+"/)
  }
})

test('uses a content-driven sans-serif mobile hero', () => {
  assert.doesNotMatch(css, /100(?:s|d|l)?vh/)
  assert.doesNotMatch(css, /white-space:\s*nowrap/)
  assert.match(css, /h1,\s*h2\s*\{[^}]*font-family:\s*inherit/s)
  assert.match(css, /\.hero-medallion\s*\{/)
  assert.match(css, /\.reason-list\s*\{/)
  assert.match(css, /\.cta\s*\{[^}]*min-height:\s*60px/s)
  assert.match(css, /@media\s*\(max-width:\s*359px\)/)
})

test('defines mobile-first CTA, sticky, responsive, and reduced-motion rules', () => {
  assert.match(css, /\.cta-primary\s*\{/)
  assert.match(css, /\.mobile-sticky\.is-visible/)
  assert.match(css, /@media\s*\(min-width:\s*768px\)/)
  assert.match(css, /@media\s*\(max-width:\s*359px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /safe-area-inset-bottom/)
  assert.match(css, /overflow-x:\s*hidden/)
})

test('implements observer-driven sticky behavior and tracks every placement', () => {
  assert.match(main, /function setupStickyCta\(\)/)
  assert.match(main, /IntersectionObserver/)
  assert.match(main, /threshold:\s*\[0,\s*0\.25\]/)
  assert.match(main, /data-hero-cta/)
  assert.match(main, /data-sticky-cta/)
  for (const placement of ['hero', 'final', 'mobile_sticky', 'telegram_hero']) {
    assert.match(html, new RegExp(`data-placement="${placement}"`))
  }
})
