# Clube Delas Promo — Landing V6 simples e direta

Data: 13 de agosto de 2026  
Status: implementada e validada localmente

## Objetivo

Usar uma jornada vertical curta, inspirada na clareza da referência enviada: explicar o valor do grupo, reduzir a dúvida e oferecer um CTA de WhatsApp imediatamente visível. O visual deve pertencer ao Clube Delas, não reproduzir a referência.

## Direção visual

- Paleta original do Clube Delas: rosa `#e92378`, rosa escuro `#b9165b`, vinho `#43152d`, rosa claro `#ffd7e6` e fundo creme.
- A única logo real fica no cabeçalho. Para não repetir a marca no centro, o hero usa um selo de benefício com `OFERTAS DE ATÉ 80% OFF`.
- Layout de uma única coluna, centralizado, sem painel lateral, carrossel, ilustração de celular, animação contínua ou distrações.
- CTA rosa arredondado e de largura total no mobile. WhatsApp é a única ação visualmente dominante; Telegram é link textual secundário.
- O desktop preserva a mesma hierarquia em vez de criar uma composição desconectada do mobile.

## Copy e sequência do hero

1. Selo: `OFERTAS DE ATÉ 80% OFF`.
2. Kicker: `GRUPO GRÁTIS NO WHATSAPP`.
3. Headline: `Entre no Clube Delas e receba achadinhos no WhatsApp.`
4. Descrição curta com moda, beleza, autocuidado e casa.
5. Três benefícios factuais:
   - Ofertas selecionadas em um só lugar;
   - Cupons e alertas rápidos;
   - Até 80% OFF no que você ama.
6. Prova social verdadeira: `80 mil+ pessoas já fazem parte`.
7. CTA: `QUERO ENTRAR NO GRUPO GRÁTIS`.
8. Redução de risco: entrada gratuita, saída quando quiser e aviso honesto de que promoções podem mudar.
9. Telegram como alternativa.

## Verdade e ética de conversão

Pode afirmar: comunidade com `80 mil+` pessoas, até 80% OFF, cupons, alertas, sorteios mensais com mais de uma ganhadora e lives.

Não pode usar: contador, prazo da landing, vagas restantes, avaliações, depoimentos inventados, visitantes online, prêmio garantido ou qualquer estatística sem fonte. A urgência é inerente às promoções e aos preços que podem mudar; não é uma contagem fabricada.

## Conteúdo posterior

Depois do hero, uma seção curta informa que existem sorteios mensais, mais de uma ganhadora e lives, sem sugerir que exista sorteio na landing. O encerramento repete somente o CTA de WhatsApp.

## Integrações e desempenho preservados

- Seis destinos de WhatsApp `https://tr.ee/clubedelaspromo-landing1` até `landing6`, escolhidos aleatoriamente e com preservação de `utm_*` e `fbclid`.
- Telegram: `https://t.me/+JslsL6UzXv43OGYx`.
- Meta Pixel `915964627618020`: `PageView`, `ViewContent` e `Lead`, com CTA persistente mobile e fallback de links sem JavaScript.
- HTML estático, CSS próprio e TypeScript mínimo. Sem React, fonte externa, biblioteca visual ou recurso de rede necessário para a primeira renderização.

## Critérios de aceite

- CTA do hero completo nos viewports `320×568`, `360×800`, `375×667`, `390×844`, `393×795`, `430×932`, `768×1024` e `1440×900`.
- Sem overflow horizontal, texto cortado, erro de navegador ou logo central repetida.
- `npm test`, `npm run lint` e `npm run build` aprovados.
- Lighthouse mobile local: 100 em desempenho, acessibilidade, práticas recomendadas e SEO; FCP `0,9 s`, LCP `0,9 s`, TBT `0 ms` e CLS `0`.
