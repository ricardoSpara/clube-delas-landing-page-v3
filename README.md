# Clube Delas Promo — Landing Page

Landing V6 mobile-first, simples e direta. O WhatsApp é a ação principal e o Telegram permanece como alternativa secundária. O hero usa um selo de benefício de até 80% OFF, mantendo a única logo real no cabeçalho.

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

## Orçamento de desempenho

- HTML até `10 KB gzip`
- JavaScript próprio até `2 KB gzip`
- CSS até `3,5 KB gzip`
- zero JavaScript de framework e zero fonte externa
- CLS alvo menor que `0,02`, TBT menor que `50 ms` e LCP menor que `1,8 s` no Lighthouse mobile simulado

Na validação local da V6, o build gerou HTML de `2,20 KB gzip`, CSS de `2,40 KB gzip` e JavaScript próprio de `1,30 KB gzip`. O Lighthouse mobile local marcou `100` em desempenho, acessibilidade, práticas recomendadas e SEO; FCP `0,9 s`, LCP `0,9 s`, TBT `0 ms` e CLS `0`.

A composição deve ser inspecionada em `320 × 568`, `360 × 800`, `375 × 667`, `390 × 844`, `393 × 795`, `430 × 932`, `768 × 1024` e `1440 × 900`, sem overflow horizontal ou texto cortado.

A especificação completa e os critérios de aceite estão em `docs/superpowers/specs/2026-08-13-clube-delas-simple-direct-v6-design.md`.
