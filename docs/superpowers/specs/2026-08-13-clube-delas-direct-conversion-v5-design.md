# Clube Delas Promo — Landing V5 de conversão direta

Data: 13 de agosto de 2026  
Status: implementada e validada localmente; aguarda publicação e medição de tráfego real

## Objetivo

Levar o maior número possível de visitantes a entrar em um grupo do Clube Delas Promo. A conversão principal é WhatsApp; Telegram é uma rota alternativa, presente mas visualmente secundária.

A página não vende produtos, não captura dados em formulário e não faz sorteios no site. Ela apresenta a comunidade e direciona a visitante para os grupos oficiais.

## Princípios de conversão

Aplicar persuasão que corresponda à experiência real, sem pressão falsa:

- **benefício concreto:** ofertas e cupons de moda, beleza, autocuidado e casa, com até 80% OFF;
- **urgência natural:** preços e promoções mudam; estar no grupo permite receber os alertas sem alegar prazo ou estoque que não existe;
- **prova social verdadeira:** `80 mil+` pessoas na comunidade;
- **redução de fricção:** entrada grátis, sem formulário, sem compra obrigatória e saída a qualquer momento;
- **antecipação e utilidade:** mostrar as categorias e o tipo de conteúdo que chega no grupo;
- **caminho único:** WhatsApp é o único botão dominante acima da dobra; Telegram é apenas um link textual.

É proibido usar vagas restantes, cronômetro, expiração, visitantes online, avaliações, depoimentos, economia monetária garantida ou qualquer estatística não comprovada.

## Informações que podem ser afirmadas

- Comunidade com `80 mil+` pessoas.
- Entrada gratuita, sem compra obrigatória e com saída quando quiser.
- Promoções de moda, beleza, autocuidado e casa, incluindo achadinhos com até 80% OFF.
- Cupons e alertas rápidos.
- Sorteios mensais com mais de uma ganhadora e lives; as orientações de cada ação são divulgadas dentro dos grupos.
- WhatsApp como canal principal e Telegram como alternativa oficial.

## Hierarquia mobile-first

Não usar hero com altura fixa (`100vh`, `100svh`, `100dvh` ou similares). A altura é sempre determinada pelo conteúdo.

1. **Cabeçalho branco compacto:** uma única logo, nome `Clube Delas Promo` e `80 mil+ na comunidade`. A logo não se repete no hero nem no fechamento.
2. **Kicker:** `ALERTAS DE OFERTA NO WHATSAPP`.
3. **Headline:** `Até 80% OFF no que você ama. Antes que o preço mude.` O trecho `80% OFF` recebe destaque rosa.
4. **Descrição direta:** categorias e entrega no WhatsApp.
5. **Pílulas de categoria:** Moda, Beleza, Casa e Autocuidado.
6. **Prova social:** `80 mil+ pessoas já recebem achadinhos`.
7. **CTA dominante:** `QUERO RECEBER AS OFERTAS NO WHATSAPP`.
8. **Redução de risco:** `Entrar é grátis. Um toque e você entra no grupo, sem formulário.` seguido de `Sem compra obrigatória` e `Saia quando quiser`.
9. **Telegram secundário:** `Prefere Telegram? Entrar por aqui`.
10. **Painel de antecipação:** após as ações, mostrar que o grupo recebe ofertas com até 80% OFF, cupons/alertas e sorteios/lives. Nunca insinuar prêmio garantido.

O CTA deve ficar completo e operável nas primeiras telas mobile, sem depender de animação, fonte externa ou imagem de destaque para transmitir o valor.

## Direção visual

- Identidade própria baseada em vinho, rosa forte e rosa claro; não copiar a composição da landing anterior.
- Hero alinhado à esquerda no mobile, com formas geométricas discretas em CSS e sem logo no centro.
- Tipografia em pilha de sistema, sans-serif, com headline robusta e legível.
- CTA rosa em formato de cartão arredondado, largura total no mobile, mínimo de 60 px de altura e contraste alto.
- O painel escuro de conteúdo é uma segunda camada de informação; no mobile vem depois do CTA, nunca antes dele.
- O Telegram usa apenas link textual azul e alvo de toque de no mínimo 44 px.
- Não importar fontes, ícones, bibliotecas de componentes ou imagens decorativas externas.
- Respeitar `prefers-reduced-motion`, foco visível, contraste AA e ordem semântica igual à visual.

## Conteúdo abaixo do hero

1. Uma grade curta com: até 80% OFF, cupons e alertas, ofertas de lojas conhecidas e seleção do Clube Delas.
2. Bloco factual: `Todo mês tem sorteio. E mais de uma ganhadora.` Com texto explicando que sorteios, lives e orientações são acompanhados dentro do grupo.
3. CTA final de WhatsApp: `QUERO ENTRAR NO GRUPO AGORA`.
4. Rodapé curto com aviso de que preços, cupons e estoque são definidos pelos anunciantes e podem mudar.

## Links e distribuição

Preservar exatamente os seis destinos de WhatsApp:

- `https://tr.ee/clubedelaspromo-landing1`
- `https://tr.ee/clubedelaspromo-landing2`
- `https://tr.ee/clubedelaspromo-landing3`
- `https://tr.ee/clubedelaspromo-landing4`
- `https://tr.ee/clubedelaspromo-landing5`
- `https://tr.ee/clubedelaspromo-landing6`

Em cada clique de WhatsApp, escolher aleatoriamente um destino e preservar `utm_*` e `fbclid`. Essa distribuição existe apenas para balancear os grupos; não tem relação com os sorteios mensais.

Telegram obrigatório: `https://t.me/+JslsL6UzXv43OGYx`.

Todos os CTAs devem ter `href` inicial válido para continuar funcionando caso o JavaScript próprio falhe.

## Pixel e analytics

Preservar o Meta Pixel `915964627618020`.

- Disparar `PageView` e `ViewContent` no carregamento pelo endpoint leve, sem bloquear a renderização.
- Disparar `Lead` em qualquer clique de WhatsApp ou Telegram com `content_name` no formato `clube_delas_{platform}_{placement}`.
- Enviar `generate_lead` ao `dataLayer` com `platform` e `placement`.
- Placements: `hero`, `final`, `mobile_sticky` e `telegram_hero`.
- O clique nunca pode esperar o Pixel, o `dataLayer` ou um script de terceiros.
- Não adicionar CAPI, correspondência avançada manual, dados pessoais ou desduplicação nova nesta landing.

## Arquitetura e desempenho

Usar Vite, HTML estático, CSS próprio e TypeScript mínimo:

- `index.html`: conteúdo, metadados e CTAs;
- `src/styles.css`: design mobile-first;
- `src/config.ts`: destinos, tamanho da comunidade e propagação de atribuição;
- `src/main.ts`: links aleatórios, Pixel, analytics e sticky CTA;
- `tests/landing-contract.test.mjs`: contratos dos links, analytics, conteúdo factual e regras de layout.

Não usar React, Preact, hidratação, framework de UI, API necessária para renderizar ou recurso de terceiros que bloqueie a primeira pintura.

Orçamentos:

- HTML até 10 KB gzip;
- CSS até 3,5 KB gzip;
- JavaScript próprio até 2 KB gzip;
- zero JavaScript de framework;
- CLS alvo menor que `0,02`;
- TBT alvo menor que `50 ms`;
- LCP alvo menor que `1,8 s` no Lighthouse mobile simulado.

Referência validada localmente nesta implementação: HTML `2,53 KB gzip`, CSS `2,86 KB gzip`, JavaScript próprio `1,30 KB gzip`; Lighthouse mobile com desempenho, acessibilidade, práticas recomendadas e SEO em `100`, FCP `1,0 s`, LCP `1,3 s`, TBT `0 ms` e CLS `0`.

## Responsividade e aceite

Validar visualmente em `320×568`, `360×800`, `375×667`, `390×844`, `393×795`, `430×932`, `768×1024` e `1440×900`.

- Não haver overflow horizontal, texto cortado, elemento atrás das barras do Safari ou faixa vazia artificial.
- O CTA de WhatsApp deve manter predominância em todos os tamanhos.
- A barra fixa mobile só aparece depois que o CTA do hero sai da tela, respeita `safe-area-inset-bottom` e não existe no desktop amplo.
- Preservar SEO: título e description, canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt` e favicon.
- Rodar `npm test`, `npm run lint` e `npm run build`; inspecionar screenshot mobile e desktop antes de publicar.

## Prompt autossuficiente para outro agente

> Crie uma landing page estática, mobile-first e ultrarrápida para o Clube Delas Promo. O objetivo é maximizar entradas em grupos de WhatsApp; Telegram é obrigatório, mas secundário. Use uma identidade vinho/rosa própria, sem logo no centro do hero: deixe a única logo no cabeçalho. Acima da dobra, mostre kicker de alertas, headline “Até 80% OFF no que você ama. Antes que o preço mude.”, categorias, prova social verdadeira de 80 mil+ pessoas, CTA “QUERO RECEBER AS OFERTAS NO WHATSAPP”, microcopy “Entrar é grátis… sem formulário” e link do Telegram. Use urgência natural das promoções, não escassez artificial. Não use contador, vagas, avaliações, depoimentos, pessoas online ou dados inventados. Preserve exatamente seis destinos `https://tr.ee/clubedelaspromo-landing1` a `landing6`, o Telegram `https://t.me/+JslsL6UzXv43OGYx`, o Pixel `915964627618020`, PageView/ViewContent/Lead e a propagação de `utm_*` e `fbclid`. Não use React, fontes externas, imagens decorativas externas ou recursos bloqueantes. Use HTML, CSS próprio e JavaScript mínimo; valide em celulares e garanta que o CTA principal apareça cedo, sem corte e sem overflow.
