# Clube Delas Promo — Landing Page

Landing page mobile-first focada em conversão para os grupos do Clube Delas Promo no WhatsApp e Telegram.

## Executar

```bash
npm ci
npm run dev
```

## Validar

```bash
npm run lint
npm run build
npm run preview
```

Os seis destinos de WhatsApp, o Telegram e a prova social ficam centralizados em `src/config.ts`. O conteúdo inicial é HTML estático; o JavaScript é usado somente para distribuir os links, preservar atribuição e analytics. `PageView` e `ViewContent` são enviados imediatamente pelo endpoint leve oficial do Meta Pixel; a biblioteca completa fica fora da renderização inicial e é antecipada em qualquer interação.

## Desempenho de referência

- JavaScript inicial: `1,04 KB gzip`
- CSS: `5,54 KB gzip`
- Lighthouse mobile local: `99–100` em desempenho e `100` em acessibilidade, práticas recomendadas e SEO
- LCP: `1,5 s`
- TBT: `0 ms`

A especificação completa está em `docs/superpowers/specs/2026-07-31-clube-delas-landing-v2-design.md`.
