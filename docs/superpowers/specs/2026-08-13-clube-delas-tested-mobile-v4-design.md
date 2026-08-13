# Clube Delas Promo — Landing V4 inspirada na versão de maior conversão

Data: 13 de agosto de 2026  
Status: design aprovado; implementação pendente  
Branch de trabalho: `codex/mobile-conversion-v4`

## 1. Objetivo

Criar uma landing page mobile-first, curta e extremamente rápida cujo único objetivo comercial seja aumentar a entrada de pessoas nos grupos do Clube Delas Promo.

O WhatsApp é a conversão principal. O Telegram permanece disponível como alternativa secundária. A página não vende produtos, não coleta dados em formulário e não realiza sorteios.

A direção visual deve recuperar os fatores positivos da landing anterior, que apresentou melhor conversão percebida:

- aparência de convite direto para uma comunidade;
- fonte sem serifa, robusta e fácil de ler;
- logo central como âncora visual;
- headline curta e específica;
- CTA dominante imediatamente após a promessa;
- conteúdo compacto e sem espaços vazios artificiais;
- primeira tela construída para celulares reais, não para uma composição editorial de desktop.

Não copiar da versão antiga os gatilhos sem comprovação, como contador reiniciável, quantidade fictícia de vagas, avaliações inventadas ou números desatualizados.

## 2. Resultado esperado

Em poucos segundos, a visitante deve entender:

1. o Clube Delas entrega achadinhos femininos;
2. as ofertas podem chegar a 80% OFF;
3. o conteúdo chega pelo WhatsApp;
4. entrar é gratuito;
5. mais de 80 mil pessoas já fazem parte da comunidade;
6. o botão principal abre um dos grupos em um único clique;
7. Telegram é uma alternativa, não uma ação concorrente.

A landing só poderá ser chamada de melhor após comparação por dados. A principal métrica é `Lead de WhatsApp / PageView`.

## 3. Público e contexto

- público majoritariamente feminino;
- interesse em moda, beleza, maquiagem, autocuidado, casa, cupons e promoções;
- tráfego predominantemente mobile vindo de anúncios e redes sociais;
- redes móveis e aparelhos intermediários devem ser tratados como cenário normal;
- a visitante pode não conhecer a marca e precisa decidir rapidamente se entra no grupo.

## 4. Fonte de verdade e restrições

Informações factuais obrigatórias:

- comunidade com `80 mil+ pessoas`;
- entrada gratuita;
- sem compra obrigatória;
- a pessoa pode sair quando quiser;
- existem sorteios todos os meses;
- existe mais de uma ganhadora por mês;
- existem lives e ações especiais;
- orientações e regras das ações são divulgadas nos grupos;
- WhatsApp é o canal principal;
- Telegram é uma alternativa oficial.

Não inventar:

- vagas restantes;
- cronômetro ou prazo de expiração da landing;
- número de pessoas online;
- avaliações, estrelas ou depoimentos;
- valores economizados;
- volume diário de achadinhos;
- promessa de ganhar sorteio;
- preço ou estoque garantido.

Os gatilhos permitidos são benefício específico, prova social real, gratuidade, redução de risco, conveniência, pertencimento e urgência natural das promoções.

## 5. Abordagem aprovada

A solução é uma reconstrução híbrida:

- recuperar a hierarquia e a densidade visual da landing anterior;
- preservar a identidade atual, os dados verdadeiros e a arquitetura estática rápida;
- manter toda a instrumentação já validada;
- evitar uma restauração literal da implementação antiga em React/Preact;
- abandonar a direção editorial de headline serifada gigante e hero de altura forçada.

O visual deve parecer uma versão mais confiável, atual e rápida da landing antiga.

## 6. Hierarquia da primeira tela

### 6.1 Cabeçalho

Cabeçalho branco, compacto e sem menu.

Conteúdo:

- logo do Clube Delas Promo à esquerda;
- nome `Clube Delas Promo` ao lado;
- prova social compacta à direita: `80 mil+` e `na comunidade`.

No mobile, altura visual aproximada de 64 a 72 px. O cabeçalho não deve ser `fixed`, pois não pode consumir espaço permanente nem competir com o CTA.

Não usar faixa superior de urgência na V4.

### 6.2 Hero

O hero usa fundo rosa muito claro com gradiente discreto. A altura é determinada pelo conteúdo. É proibido usar `height: 100vh`, `min-height: 100vh`, `100svh` ou equivalente no mobile.

Ordem obrigatória:

1. logo central, aproximadamente 76 a 88 px;
2. prova social real em formato de selo;
3. headline;
4. texto de apoio;
5. CTA primário de WhatsApp;
6. microcopy de gratuidade e segurança;
7. alternativa do Telegram.

Não usar eyebrow, faixa decorativa ou título intermediário antes da logo. Cada elemento acima da dobra precisa justificar seu espaço.

### 6.3 Copy obrigatória

Selo:

> 80 mil+ pessoas já fazem parte

Headline:

> Achadinhos Femininos de até 80% OFF no seu WhatsApp

Texto de apoio:

> Moda, beleza, autocuidado e casa: as melhores promoções selecionadas e enviadas para você todos os dias. 100% gratuito.

CTA principal:

> QUERO ENTRAR GRÁTIS NO WHATSAPP

Microcopy:

> Grátis • Sem compra obrigatória • Saia quando quiser

Telegram:

> Prefere Telegram? Entrar por aqui

### 6.4 Tratamento visual

- usar fonte sem serifa local ou pilha de sistema;
- headline em peso 750–850, nunca serifada;
- `80% OFF` recebe rosa mais vivo;
- no mobile de 390 px, a headline deve ocupar no máximo três linhas sempre que o idioma e a renderização permitirem;
- em 320 px, aceitar no máximo quatro linhas;
- não aplicar `white-space: nowrap` à headline nem às linhas internas;
- CTA rosa forte, largura total, altura mínima de 60 px e raio arredondado;
- WhatsApp deve ter peso visual claramente superior ao Telegram;
- Telegram deve ser link textual ou botão secundário discreto, com alvo de toque de pelo menos 44 px;
- usar sombra leve somente para separar CTA e logo do fundo;
- nenhuma animação contínua é necessária.

## 7. Conteúdo após a primeira tela

A página deve continuar curta, entre duas e três alturas de tela em um celular comum.

### 7.1 Benefícios compactos

Exibir quatro itens em grid de duas colunas:

- Achadinhos com até 80% OFF;
- cupons e alertas rápidos;
- ofertas de lojas conhecidas;
- seleção feita pelo Clube Delas.

Os cartões devem ser pequenos. Não usar título grande parcialmente visível no limite da primeira tela. A transição entre hero e benefícios deve ser limpa e intencional.

### 7.2 Sorteios e lives

Título:

> Todo mês tem sorteio. E mais de uma ganhadora.

Texto:

> Basta entrar no grupo para acompanhar os sorteios, as lives e as orientações de cada ação. A landing apenas apresenta a comunidade; as ações acontecem e são divulgadas nos grupos oficiais.

Esse bloco não pode sugerir prêmio garantido nem mecanismo de sorteio no site.

### 7.3 Fechamento

Título:

> Entre grátis e receba o próximo achadinho no WhatsApp.

Repetir somente o CTA de WhatsApp. O único link do Telegram permanece no hero para não criar novas escolhas no fechamento.

### 7.4 Rodapé

Rodapé mínimo com marca, ano e indicação de que a página direciona para canais externos. Não adicionar navegação institucional extensa.

## 8. CTA persistente no mobile

Depois que o CTA principal do hero sair completamente da área visível, mostrar uma barra inferior compacta com apenas o WhatsApp.

Regras:

- controlada por `IntersectionObserver`;
- escondida enquanto o CTA do hero está visível;
- respeitar `safe-area-inset-bottom`;
- não cobrir conteúdo nem o CTA final;
- possuir altura de toque mínima de 48 px;
- não incluir Telegram;
- não aparecer em desktop amplo;
- funcionar sem provocar CLS.

## 9. Responsividade

Mobile é a referência de projeto. Desktop é uma adaptação.

Viewports mínimas de validação:

- `320 × 568`;
- `360 × 800`;
- `375 × 667`;
- `390 × 844`;
- `393 × 795`;
- `430 × 932`;
- `768 × 1024`;
- `1440 × 900`.

Critérios:

- em `320 × 568`, headline e CTA principal completos sem rolagem;
- em `375 × 667` ou maior, Telegram também deve estar integralmente visível sempre que a renderização padrão permitir;
- em `393 × 795`, não pode existir grande faixa vazia criada para completar a viewport;
- nenhum texto pode ficar atrás das barras do Safari;
- nenhum elemento pode causar overflow horizontal;
- nenhum texto pode ser cortado ou depender de largura fixa;
- a página deve continuar legível com zoom de texto e fontes de sistema;
- desktop pode usar um card central ou composição em duas colunas, mas não deve alterar a ordem semântica.

## 10. Links e destinos

### 10.1 WhatsApp

Preservar exatamente os seis destinos:

- `https://tr.ee/clubedelaspromo-landing1`;
- `https://tr.ee/clubedelaspromo-landing2`;
- `https://tr.ee/clubedelaspromo-landing3`;
- `https://tr.ee/clubedelaspromo-landing4`;
- `https://tr.ee/clubedelaspromo-landing5`;
- `https://tr.ee/clubedelaspromo-landing6`.

Em cada clique, escolher um dos seis destinos de forma aleatória. Esse balanceamento de links não tem relação com os sorteios mensais da comunidade.

Preservar todos os parâmetros recebidos cujo nome comece por `utm_` e também `fbclid`.

Todo link deve ter um `href` inicial válido para funcionar mesmo se o JavaScript próprio falhar.

### 10.2 Telegram

Preservar exatamente:

`https://t.me/+JslsL6UzXv43OGYx`

## 11. Meta Pixel e analytics

Preservar o mesmo Pixel:

`915964627618020`

Eventos de carregamento:

- `PageView`;
- `ViewContent`.

Eventos de clique:

- `Lead` em todo clique de WhatsApp ou Telegram;
- `content_name` no formato `clube_delas_{platform}_{placement}`;
- `dataLayer` paralelo com `event: generate_lead`, `platform` e `placement`.

Placements:

- `hero`;
- `final`;
- `mobile_sticky`;
- `telegram_hero`.

O rastreamento não pode bloquear o clique. A navegação deve ocorrer mesmo se Meta, Google Tag Manager ou `dataLayer` falharem.

Não adicionar nesta versão:

- API de Conversões;
- correspondência avançada manual;
- dados pessoais fictícios;
- nova lógica de desduplicação;
- novo Pixel.

## 12. Arquitetura técnica

Preservar:

- Vite;
- TypeScript;
- HTML estático como conteúdo principal;
- CSS próprio;
- JavaScript mínimo apenas para distribuição dos links, UTMs, analytics e CTA persistente;
- ausência de React, Preact, hidratação e biblioteca de componentes;
- ausência de chamadas de API necessárias para renderização;
- ausência de imagens externas.

A escolha de não usar React é deliberada para reduzir JavaScript e acelerar a primeira renderização. Ela não limita o design visual.

Unidades técnicas:

- `index.html`: conteúdo semântico, metadados e CTAs;
- `src/styles.css`: sistema visual mobile-first e breakpoints;
- `src/config.ts`: seis links, Telegram, tamanho da comunidade e lógica de atribuição;
- `src/main.ts`: identidade do Pixel, eventos, balanceamento e sticky CTA;
- `tests/landing-contract.test.mjs`: contratos de conteúdo e comportamento.

## 13. Falhas e fallback

- se Meta Pixel falhar, o clique continua;
- se `dataLayer` não existir, criá-lo ou ignorar sem erro;
- se `IntersectionObserver` não existir, apenas não mostrar o sticky;
- se o JavaScript próprio falhar, CTAs permanecem links válidos;
- não mostrar mensagens técnicas à visitante;
- não usar carregamento, spinner ou transição antes de abrir o grupo.

## 14. Performance

Orçamentos de produção:

- HTML até 10 KB gzip;
- CSS até 7 KB gzip;
- JavaScript próprio até 2 KB gzip;
- logo crítica até 15 KB;
- zero JavaScript de framework;
- zero recurso externo bloqueando renderização;
- CLS menor que `0,02`;
- TBT menor que `50 ms`;
- LCP objetivo menor que `1,8 s` no Lighthouse mobile simulado;
- objetivo Lighthouse público: desempenho pelo menos 95 e demais categorias 100.

Requisitos:

- declarar `width` e `height` em imagens;
- priorizar somente a logo crítica;
- usar cache longo para assets versionados;
- não carregar ícones, fontes ou CSS de terceiros;
- não atrasar `PageView` e `ViewContent` por vários segundos;
- biblioteca completa do Pixel não pode bloquear a renderização inicial.

## 15. SEO e agentes

Preservar ou atualizar:

- título e description relacionados a achadinhos femininos no WhatsApp;
- canonical da URL de produção;
- Open Graph e Twitter Card;
- JSON-LD da organização;
- `robots.txt` válido;
- `sitemap.xml` válido;
- `llms.txt` válido;
- favicon e logo.

Não usar keyword stuffing no conteúdo visível.

## 16. Acessibilidade

- HTML semântico;
- contraste WCAG AA;
- foco visível;
- navegação por teclado;
- CTA externo implementado como link;
- ordem de leitura igual à ordem visual;
- alvos de toque de pelo menos 44 px, preferencialmente 48 px;
- nenhuma informação comunicada apenas por cor;
- decoração com `aria-hidden="true"`;
- respeito a `prefers-reduced-motion`;
- suporte a texto ampliado sem corte.

## 17. Testes e validação visual

### 17.1 Automação

- testes de contrato para headline, prova social e CTAs;
- exatamente seis destinos de WhatsApp;
- destino fixo do Telegram;
- mesmo Pixel;
- eventos e placements corretos;
- fallback de links válido;
- ausência das expressões de escassez proibidas;
- lint sem erros;
- build de produção concluído.

### 17.2 Navegador real ou emulação equivalente

Para cada viewport da seção 9:

- gerar screenshot de página inteira e da primeira tela;
- verificar `scrollWidth <= innerWidth`;
- verificar CTA primário inteiro;
- verificar headline sem corte;
- confirmar ausência de espaço vazio artificial;
- confirmar que o sticky aparece somente após a saída do CTA;
- inspecionar erros de console;
- abrir WhatsApp e Telegram em teste controlado;
- verificar `PageView`, `ViewContent` e `Lead`.

A captura enviada da landing antiga é referência de densidade e hierarquia, não uma imagem a ser reproduzida pixel a pixel.

## 18. Critérios finais de aceite

A V4 estará pronta quando:

- a primeira tela se parecer com um convite direto ao grupo, não com uma peça editorial;
- headline sem serifa estiver legível e compacta;
- CTA de WhatsApp dominar a primeira tela;
- Telegram estiver disponível sem competir visualmente;
- `80 mil+` estiver visível acima da dobra;
- não houver contador, vagas ou prova inventada;
- sorteios mensais, múltiplas ganhadoras e lives forem explicados corretamente;
- não houver `100vh` ou espaço vazio forçado no hero mobile;
- todos os viewports passarem sem corte e overflow;
- os seis grupos, Telegram, Pixel e eventos forem preservados;
- os orçamentos de desempenho forem respeitados;
- screenshots forem inspecionadas visualmente antes do merge;
- produção só for atualizada após essa validação.

## 19. Prompt autossuficiente para outra LLM/agente

> Crie uma landing page nova para o Clube Delas Promo seguindo integralmente esta especificação. O objetivo é maximizar entradas nos grupos de WhatsApp; Telegram é obrigatório, porém secundário. Use como direção visual uma landing mobile compacta de convite para grupo: cabeçalho branco curto, logo central, prova real de 80 mil+ pessoas, headline sem serifa “Achadinhos Femininos de até 80% OFF no seu WhatsApp”, CTA rosa dominante e redução imediata de risco. Não use contador, vagas restantes, avaliações, depoimentos ou números não comprovados. Preserve exatamente os seis links de WhatsApp, o Telegram, o Pixel 915964627618020, os eventos PageView/ViewContent/Lead e a preservação de utm_* e fbclid. Implemente com HTML estático, CSS próprio e o mínimo de TypeScript, sem React ou recursos externos bloqueantes. O hero mobile deve ter altura definida pelo conteúdo, nunca 100vh, e deve ser validado visualmente em todos os viewports descritos antes da publicação.
