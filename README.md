# Clube Delas Promo — Landing Page

Landing V4 mobile-first inspirada na hierarquia compacta da versão de maior conversão. O WhatsApp é a ação principal e o Telegram permanece como alternativa secundária.

## Executar

```bash
npm ci
npm run dev
```

## Validar

```bash
npm test
npm run lint
npm run build
npm run preview
```

Os seis destinos de WhatsApp e o Telegram ficam centralizados em `src/config.ts`. O conteúdo inicial é HTML estático; o JavaScript é usado somente para distribuir os links, preservar atribuição, controlar o CTA persistente e enviar analytics. `PageView` e `ViewContent` são enviados imediatamente pelo endpoint leve oficial do Meta Pixel; a biblioteca completa fica fora da renderização inicial e é antecipada em qualquer interação.

O WhatsApp é o CTA principal nos placements `hero`, `final` e `mobile_sticky`. O Telegram é uma alternativa secundária em `telegram_hero`. Todos enviam `Lead` para o mesmo Pixel `915964627618020` e `generate_lead` para o `dataLayer`.

## Desempenho de referência

- HTML: `2,23 KB gzip`
- JavaScript próprio: `1,30 KB gzip`
- CSS: `2,21 KB gzip`
- Logo crítica: `1,14 KB`
- Lighthouse mobile local: `100` em desempenho, acessibilidade, práticas recomendadas e SEO
- FCP: `1,0 s`
- LCP: `1,3 s`
- TBT: `0 ms`
- CLS: `0`
- Speed Index: `1,0 s`

A composição foi inspecionada em `320 × 568`, `360 × 800`, `375 × 667`, `390 × 844`, `393 × 795`, `430 × 932`, `768 × 1024` e `1440 × 900`, sem overflow horizontal ou texto cortado. O CTA principal cabe integralmente em `320 × 568`, e o Telegram aparece completo a partir de `375 × 667`.

A especificação completa e os critérios de aceite estão em `docs/superpowers/specs/2026-08-13-clube-delas-tested-mobile-v4-design.md`.
