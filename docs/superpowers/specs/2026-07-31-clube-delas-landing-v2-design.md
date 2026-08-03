# Especificação autossuficiente — Landing Page Clube Delas Promo V2

Data original: 2026-07-31  
Última atualização: 2026-08-01  
Status: implementada e validada  
Projeto de referência: `clube-delas-landing-page-v2`

## 1. Como usar este documento

Esta é a fonte de verdade funcional, editorial, visual e técnica da landing page. Ela foi escrita para permitir que outra LLM, agente ou equipe crie uma implementação comparável sem consultar o código atual ou a landing anterior.

O resultado não precisa ser uma cópia pixel a pixel. Pode explorar uma composição própria, desde que preserve:

- o posicionamento da marca e todas as informações factuais;
- a hierarquia de conversão entre WhatsApp e Telegram;
- as copies obrigatórias ou seu sentido exato quando a seção permitir variação;
- o balanceamento entre os seis grupos de WhatsApp;
- a comunicação correta dos sorteios e das lives;
- a experiência mobile-first e os limites de performance;
- acessibilidade, rastreamento, SEO e critérios de aceite.

Se houver conflito entre liberdade criativa e um requisito marcado como obrigatório, o requisito obrigatório prevalece.

## 2. Resumo do produto

Construir uma landing page independente, feminina, bonita, criativa, confiável e muito rápida para maximizar a entrada de pessoas na comunidade Clube Delas Promo.

A página apresenta uma curadoria gratuita de achadinhos, promoções e cupons e converte a pessoa para um grupo externo. WhatsApp é o destino principal; Telegram é uma alternativa de igual legitimidade, mas visualmente secundária.

A landing não é uma loja, não possui checkout e não captura nome, telefone ou e-mail. Também não executa sorteios. Os sorteios mensais, as lives, as orientações de participação e a divulgação de ganhadoras acontecem dentro dos grupos do Clube Delas.

## 3. Requisitos inegociáveis

1. Exibir prova social de `80 mil+ pessoas` na comunidade.
2. Informar que há sorteios todos os meses e mais de uma ganhadora.
3. Informar que a comunidade realiza lives e ações especiais.
4. Explicar que, para participar e acompanhar as orientações, basta entrar em um dos grupos.
5. Nunca sugerir que o site realiza, apura ou entrega o sorteio.
6. Oferecer WhatsApp e Telegram no hero, no CTA final e na barra fixa mobile.
7. Usar os seis links existentes de WhatsApp, escolhendo um novo link aleatoriamente a cada clique.
8. Usar um único link fixo para o Telegram.
9. Preservar `utm_*` e `fbclid` nos redirecionamentos para WhatsApp.
10. Abrir os destinos externos em nova aba.
11. Registrar leads distinguindo plataforma e posição do CTA.
12. Ser totalmente responsiva a partir de 320 px e priorizar a conversão em celular.
13. Não apresentar rolagem horizontal.
14. Manter todos os alvos interativos com no mínimo 44 × 44 px.
15. Respeitar os orçamentos de performance descritos nesta spec.
16. Não inventar depoimentos, números, vagas, descontos, ganhadoras ou urgência artificial.

## 4. Público e contexto

### 4.1 Público principal

Mulheres interessadas em:

- moda;
- beleza e maquiagem;
- skincare e autocuidado;
- acessórios;
- casa;
- cupons, promoções e economia de tempo e dinheiro.

### 4.2 Origem do tráfego

- anúncios pagos;
- redes sociais;
- compartilhamentos;
- tráfego frio ou morno.

A pessoa pode ainda não conhecer a marca. Portanto, a primeira tela deve explicar rapidamente o benefício, transmitir confiança e oferecer a ação sem exigir leitura longa.

### 4.3 Dispositivo prioritário

Celular. A versão desktop deve ser sofisticada e completa, mas nenhuma decisão desktop pode prejudicar a experiência entre 320 e 430 px.

## 5. Objetivos e conversões

### 5.1 Conversão primária

Clique para entrar gratuitamente em um dos grupos de WhatsApp do Clube Delas Promo.

### 5.2 Conversão alternativa

Clique para entrar gratuitamente no Telegram oficial.

### 5.3 Objetivos secundários

- criar confiança antes do clique;
- mostrar valor recorrente, e não uma oferta isolada;
- reduzir dúvidas sobre custo, funcionamento e liberdade para sair;
- divulgar sorteios mensais, múltiplas ganhadoras e lives sem confundir o papel da landing;
- preservar atribuição de campanhas;
- distribuir as entradas entre os seis grupos de WhatsApp;
- dar uma alternativa real para quem prefere Telegram.

### 5.4 Fora do objetivo

- formulário de lead;
- cadastro ou autenticação;
- catálogo ou busca de produtos;
- checkout;
- painel administrativo;
- realização, apuração ou gerenciamento de sorteio;
- seleção de ganhadoras;
- regulamento ou entrega de prêmio dentro da landing.

## 6. Posicionamento, voz e persuasão

### 6.1 Promessa principal obrigatória

> Chega de pagar preço cheio no que você ama.

No tratamento visual, `preço cheio` deve receber ênfase editorial em rosa e itálico.

### 6.2 Explicação principal obrigatória

> Promoções de moda, beleza e autocuidado, escolhidas a dedo e entregues no seu WhatsApp ou Telegram.

### 6.3 Prova social obrigatória

> 80 mil+ pessoas na comunidade

Não substituir por `23 mil+`, `milhares`, contadores animados ou outro número.

### 6.4 Tom

- direto, feminino e acolhedor;
- seguro sem parecer corporativo;
- entusiasmado sem exageros;
- frases curtas e de leitura rápida;
- linguagem brasileira cotidiana;
- foco em conveniência, descoberta e pertencimento.

### 6.5 Gatilhos permitidos

- especificidade: categorias e benefícios concretos;
- conveniência: a equipe procura e envia os achados;
- prova social: comunidade com `80 mil+ pessoas`;
- recorrência: curadoria diária, sorteios mensais e lives;
- recompensa: mais de uma ganhadora por mês;
- redução de risco: gratuito, sem compra obrigatória e saída livre;
- imediatismo verdadeiro: preços, cupons e estoques podem mudar rapidamente;
- identificação: universo visual e verbal próximo do público feminino.

### 6.6 Gatilhos proibidos

- contador regressivo falso ou que reinicia;
- quantidade falsa de vagas;
- notificações de atividade inventadas;
- depoimentos ou avaliações fictícias;
- economia, preço ou percentual não comprovado como promessa real;
- promessa de ganho;
- afirmar que a entrada torna alguém automaticamente ganhadora;
- confundir o balanceamento de links do site com os sorteios mensais.

## 7. Verdade operacional sobre os sorteios

A comunicação aprovada é:

> Todo mês tem sorteio. E mais de uma ganhadora.

Regras editoriais:

- usar `sorteio`, e não a expressão vaga `promoção mensal`;
- deixar claro que os sorteios são divulgados e acompanhados nos grupos;
- informar que orientações de cada ação são divulgadas por lá;
- a landing apenas convida e redireciona;
- a aleatoriedade dos links de WhatsApp serve somente para distribuir tráfego entre os seis grupos;
- não implementar roleta, cupom premiado, número da sorte, escolha de ganhadora ou qualquer mecânica semelhante na página.

## 8. Arquitetura da página

A ordem recomendada e implementada é:

1. barra promocional compacta;
2. cabeçalho;
3. hero com copy, prova, gancho mensal e dois CTAs;
4. mockup ilustrativo de conversa/ofertas;
5. faixa de categorias;
6. bloco do problema;
7. três benefícios da curadoria;
8. bloco de sorteios mensais, várias ganhadoras e lives;
9. funcionamento em três passos;
10. bloco de identificação com o público;
11. FAQ;
12. CTA final;
13. rodapé;
14. barra de conversão fixa apenas no mobile.

Outra implementação pode variar detalhes de composição, mas deve manter essa progressão narrativa: promessa → confiança → valor → incentivo real → funcionamento → objeções → conversão.

## 9. Inventário completo de conteúdo

Salvo indicação contrária, os textos abaixo devem ser usados literalmente. Ajustes mínimos de pontuação ou quebra de linha são aceitáveis, mas não devem alterar o sentido.

### 9.1 Barra promocional

Desktop:

> Todo mês tem sorteio — e mais de uma ganhadora

Mobile:

> Sorteios mensais + várias ganhadoras

### 9.2 Cabeçalho

- marca textual: `Clube Delas Promo`;
- prova desktop: `80 mil+ pessoas na comunidade`;
- CTA desktop: `Entrar grátis`;
- no mobile, esconder a prova e o CTA do cabeçalho para reduzir ruído; a prova reaparece no hero.

### 9.3 Hero

Eyebrow:

> Seu atalho para comprar melhor

Título:

> Chega de pagar preço cheio no que você ama.

Subtítulo:

> Promoções de moda, beleza e autocuidado, escolhidas a dedo e entregues no seu WhatsApp ou Telegram.

Prova mobile:

> 80 mil+ pessoas na comunidade

Gancho mensal:

> Todo mês tem sorteio por aqui.

> Entre para participar, acompanhar as lives e ter a chance de ser uma das ganhadoras.

CTAs:

- `Entrar pelo WhatsApp`;
- `Entrar pelo Telegram`.

Microprovas:

- `100% grátis`;
- `Sem compra obrigatória`;
- `Saia quando quiser`.

No mobile compacto, `Sem compra obrigatória` pode ser ocultado se necessário, desde que as outras duas microprovas permaneçam e a informação continue disponível no restante da página.

### 9.4 Mockup ilustrativo do hero

O mockup simula uma conversa e é apenas demonstração visual. Não deve parecer uma oferta em vigor nem um preço garantido.

Textos:

- `Clube Delas Promo`;
- `comunidade`;
- `HOJE`;
- `ACHADINHO DO DIA ✨`;
- `Kit skincare com super desconto`;
- preço anterior ilustrativo: `R$ 129,90`;
- preço novo ilustrativo: `R$ 69,90`;
- `Preço sujeito a alteração pela loja`;
- `🎟️ Cupom extra liberado`;
- `BELEZA15`;
- sticker: `cupom encontrado!`;
- cartão flutuante: `Seu bolso agradece`;
- complemento: `menos busca, mais economia`.

Preferência: construir o mockup com HTML e CSS, sem screenshot ou imagem pesada.

### 9.5 Faixa de categorias

Exibir em caixa alta, separados por pequenos símbolos:

`MODA` · `BELEZA` · `SKINCARE` · `ACESSÓRIOS` · `CASA` · `CUPONS`

No mobile, a faixa pode ocultar os últimos itens em vez de criar rolagem horizontal.

### 9.6 Problema

Kicker:

> A boa notícia?

Título:

> Você não precisa mais caçar a promoção.

Dar ênfase editorial a `caçar`.

Parágrafo:

> Entre rolar feeds, comparar preços e testar cupons vencidos, o barato pode custar horas. O Clube Delas encurta esse caminho.

### 9.7 Benefícios

Card 1:

- eyebrow: `Curadoria de verdade`;
- título: `A gente garimpa. Você só escolhe.`;
- texto: `Nossa equipe procura cupons, quedas de preço e achadinhos para poupar seu tempo.`

Card 2:

- eyebrow: `Chegou, viu, aproveitou`;
- título: `Oferta boa não fica escondida.`;
- texto: `Os alertas chegam no WhatsApp para você ver enquanto o preço ainda vale a pena.`

Card 3:

- eyebrow: `Compra mais tranquila`;
- título: `Links de lojas conhecidas.`;
- texto: `Achados de grandes marketplaces e lojas que já fazem parte da sua rotina.`

### 9.8 Bloco de sorteios e lives

Kicker:

> Além dos descontos

Título obrigatório:

> Todo mês tem sorteio. E mais de uma ganhadora.

Parágrafo:

> Entrou em um dos grupos do Clube Delas? Então você já pode participar dos sorteios mensais divulgados por lá. É grátis, simples e sempre tem mais de uma mulher comemorando.

Chips:

- `Sorteios todo mês`;
- `Várias ganhadoras`;
- `Lives e ações especiais`;
- `Basta entrar no grupo`.

CTA de WhatsApp:

> Quero entrar e participar

Elementos decorativos opcionais, se a nova direção visual comportar:

- `todo / mês`;
- `várias / ganham`;
- `Mais chances de ganhar`;
- `mais de uma ganhadora por mês`.

### 9.9 Funcionamento

Kicker:

> Simples assim

Título:

> Do clique ao achadinho em 3 passos.

Passo 1:

- título: `Entre no grupo`;
- texto: `Escolha WhatsApp ou Telegram e entre com um clique.`

Passo 2:

- título: `A gente seleciona`;
- texto: `Cupons e preços bons passam pela nossa curadoria.`

Passo 3:

- título: `Você aproveita`;
- texto: `Gostou? Abra o link e compre direto na loja.`

### 9.10 Identificação com o público

Selo visual:

> promo boa é promo útil

Kicker:

> Tem a sua cara se...

Título:

> Você ama um achado, mas valoriza o seu tempo.

Lista:

- `quer descobrir promoções sem ficar procurando;`
- `gosta de moda, beleza, autocuidado e casa;`
- `prefere receber só o que pode valer a pena;`
- `quer economizar sem complicar sua rotina.`

Nota obrigatória:

> Preços, estoques e cupons são definidos pelas lojas e podem mudar rapidamente.

### 9.11 FAQ

Cabeçalho:

- kicker: `Sem letras miúdas`;
- título: `Ficou alguma dúvida?`.

Pergunta 1:

> Preciso pagar para entrar?

> Não. Entrar e permanecer no Clube Delas Promo é totalmente gratuito.

Pergunta 2:

> O Clube Delas é uma loja?

> Não. Somos uma comunidade de curadoria de promoções. A compra, quando você quiser, é concluída diretamente na loja anunciada.

Pergunta 3:

> Que tipo de oferta vou receber?

> Moda, beleza, maquiagem, skincare, acessórios, casa e outros achadinhos que fazem sentido para o universo feminino.

Pergunta 4:

> Como participo dos sorteios mensais?

> Basta entrar em um dos grupos do Clube Delas. Os sorteios e as orientações de cada ação são divulgados por lá — e todo mês temos mais de uma ganhadora.

Pergunta 5:

> O Clube Delas também faz lives?

> Sim. As lives, novidades e ações especiais são anunciadas dentro dos grupos para que você acompanhe tudo pelo WhatsApp ou Telegram.

Pergunta 6:

> Também posso acompanhar pelo Telegram?

> Sim. Você pode entrar gratuitamente no nosso Telegram e acompanhar os achadinhos, novidades e ações divulgadas por lá.

Pergunta 7:

> Posso sair quando quiser?

> Sim. Você tem liberdade para silenciar ou sair do grupo a qualquer momento.

Comportamento: acordeão acessível, com a primeira pergunta aberta inicialmente. Permitir apenas um item aberto por vez ou nenhum.

### 9.12 CTA final

Kicker:

> Seu próximo achado começa aqui

Título:

> Comprar melhor pode ser tão fácil quanto abrir o WhatsApp ou Telegram.

Parágrafo:

> Escolha onde prefere receber nossa seleção de promoções todos os dias.

CTAs:

- `Entrar no WhatsApp`;
- `Entrar no Telegram`.

Microcopy:

> Gratuito. Sem compromisso. Saia quando quiser.

### 9.13 Rodapé

- marca: `Clube Delas Promo`;
- aviso: `Não somos uma loja. As condições das ofertas são de responsabilidade dos anunciantes.`;
- copyright: `© 2026 Clube Delas Promo`.

### 9.14 Barra fixa mobile

Dois CTAs lado a lado:

- `WhatsApp`;
- `Telegram`.

O WhatsApp ocupa a maior parte da largura. O Telegram deve continuar legível e com pelo menos 44 px de altura.

## 10. Links e lógica de redirecionamento

### 10.1 Grupos de WhatsApp

Usar exatamente estes seis destinos:

1. `https://tr.ee/clubedelaspromo-landing1`
2. `https://tr.ee/clubedelaspromo-landing2`
3. `https://tr.ee/clubedelaspromo-landing3`
4. `https://tr.ee/clubedelaspromo-landing4`
5. `https://tr.ee/clubedelaspromo-landing5`
6. `https://tr.ee/clubedelaspromo-landing6`

Regras obrigatórias:

- armazenar os links em uma única configuração central;
- sortear uniformemente um dos seis destinos a cada clique em qualquer CTA de WhatsApp;
- não fixar um único grupo para toda a sessão;
- definir um destino inicial válido no `href`, para acessibilidade e abertura por menu de contexto;
- no clique comum, atualizar o `href` de modo síncrono antes da navegação;
- copiar para o destino somente parâmetros recebidos cujo nome comece com `utm_` e o parâmetro `fbclid`;
- não copiar indiscriminadamente todos os parâmetros da URL;
- abrir em nova aba com proteção apropriada, como `rel="noreferrer"`.

Pseudocódigo:

```text
WHATSAPP_GROUPS = [link1, link2, link3, link4, link5, link6]

function getWhatsAppDestination():
  selected = WHATSAPP_GROUPS[randomInteger(0, 5)]
  destination = URL(selected)

  for each query parameter of current page:
    if key starts with "utm_" or key equals "fbclid":
      destination.searchParams[key] = value

  return destination

on each WhatsApp CTA click:
  clickedAnchor.href = getWhatsAppDestination()
  trackLead(placement, "whatsapp")
```

Importante: esse sorteio de URL é balanceamento de tráfego e não possui relação com os sorteios mensais da comunidade.

### 10.2 Telegram

Destino fixo:

`https://t.me/+JslsL6UzXv43OGYx`

Regras:

- armazenar em configuração central;
- não aplicar o balanceamento dos seis links;
- abrir em nova aba;
- registrar plataforma `telegram` no analytics;
- na implementação atual, não anexar UTMs ao Telegram.

## 11. Estratégia de CTAs

### 11.1 Hierarquia

- WhatsApp: ação primária, rosa, maior peso visual;
- Telegram: ação alternativa, azul oficial, claramente visível;
- os CTAs devem parecer ações externas de entrada na comunidade, não submissão de formulário.

### 11.2 Posições rastreáveis

- `header`: WhatsApp;
- `hero`: WhatsApp e Telegram;
- `community`: WhatsApp;
- `final`: WhatsApp e Telegram;
- `mobile_sticky`: WhatsApp e Telegram.

### 11.3 Regras mobile

- os dois CTAs do hero devem caber integralmente na primeira viewport de referência de 320 × 844 px;
- a barra fixa aparece apenas até 620 px;
- a barra fixa não pode encobrir o rodapé ou conteúdo final;
- respeitar `env(safe-area-inset-bottom)`;
- evitar CTAs duplicados que se sobreponham visualmente.

## 12. Direção visual

### 12.1 Conceito

Editorial contemporâneo com energia de comunidade feminina. Misturar títulos serifados expressivos, corpo moderno, cards orgânicos, cores quentes e pequenas imperfeições visuais controladas, como rotações discretas e elementos flutuantes.

O resultado deve ser sofisticado, alegre e confiável — não infantil, genérico ou parecido com template corporativo.

### 12.2 Paleta de referência

| Token | Cor | Uso principal |
|---|---:|---|
| rosa | `#e92378` | CTA primário, ícones e destaques |
| rosa escuro | `#b9165b` | ênfases e estados fortes |
| rosa suave | `#ffd7e6` | fundos e badges |
| vinho | `#43152d` | texto forte e grandes superfícies |
| creme | `#fff8f2` | fundo geral |
| pêssego | `#ffb5a7` | detalhes decorativos |
| amarelo | `#ffd866` | contraste, foco e pequenos destaques |
| tinta | `#26151e` | texto principal |
| texto suave | `#705e67` | texto secundário |
| branco | `#ffffff` | superfícies e contraste |
| Telegram | `#229ed9` | CTA do Telegram |
| Telegram hover | `#168bc4` | estado hover |

### 12.3 Tipografia

- corpo e interface: Inter variável local, com fallback `system-ui, sans-serif`;
- títulos: Georgia, com fallback `Times New Roman, serif`;
- títulos com tracking levemente negativo;
- usar `clamp()` para títulos fluidos;
- evitar dependência de Google Fonts ou fontes externas bloqueantes.

### 12.4 Componentes visuais

- botões em formato pill com peso alto e leve elevação;
- cards com bordas grandes, fundos suaves e sombras discretas;
- hero com gradiente rosa e textura leve embutida em CSS;
- mockup de telefone construído em HTML/CSS;
- bloco de sorteios em vinho, com contraste alto e arte circular;
- CTA final em gradiente vinho/rosa;
- ícones de uma biblioteca leve e tree-shakeable, como Lucide;
- ícones devem apoiar a leitura, não substituir textos importantes.

### 12.5 Movimento

- animações lentas e discretas no mockup;
- hover com deslocamento mínimo;
- nenhum efeito pode atrasar a interação;
- respeitar `prefers-reduced-motion: reduce`, removendo transições e animações relevantes.

## 13. Layout e responsividade

### 13.1 Base desktop

- largura útil máxima: aproximadamente 1180 px;
- hero em duas colunas, proporção aproximada `1.04fr / 0.96fr`;
- hero com altura mínima próxima de 670 px e canto inferior arredondado;
- seções com espaçamento vertical generoso;
- cards de benefícios em três colunas;
- bloco de sorteios e bloco de identificação em duas colunas;
- etapas em três cards ligados visualmente;
- rodapé em três colunas.

### 13.2 Breakpoint intermediário: até 900 px

- hero em uma coluna e conteúdo centralizado;
- mockup abaixo da copy;
- benefícios em uma coluna;
- bloco de sorteios em uma coluna;
- etapas em uma coluna;
- identificação em uma coluna;
- rodapé em uma coluna;
- não mostrar barra fixa em 768 px;
- desabilitar postergação visual das seções abaixo da dobra.

### 13.3 Mobile: até 620 px

- barra promocional com copy curta;
- cabeçalho simplificado, somente marca;
- hero com padding aproximado de 18 px nas laterais;
- CTAs do hero empilhados e com largura total;
- prova social visível dentro do hero;
- mockup fluido, sem extrapolar a viewport;
- cards em coluna única;
- chips do bloco de sorteios em grid/coluna;
- CTAs finais empilhados;
- barra fixa inferior com WhatsApp e Telegram;
- espaço adicional no rodapé para a barra fixa;
- conteúdo abaixo da dobra renderizado normalmente, sem placeholders causados por `content-visibility`.

### 13.4 Mobile compacto: até 359 px

- reduzir paddings e tamanhos secundários;
- aceitar quebra de texto em botões;
- manter ambos os CTAs da barra fixa legíveis;
- reposicionar o telefone e stickers para evitar overflow;
- nunca reduzir alvos abaixo de 44 px.

### 13.5 Matriz obrigatória de validação

- 320 × 844;
- 360 × 800 ou equivalente;
- 390 × 844;
- 430 × 932;
- 768 × 1024;
- 1024 × 768;
- 1440 × 900.

Em todas:

- `scrollWidth` não pode ser maior que a largura da viewport;
- textos não podem ser cortados;
- CTAs não podem se sobrepor;
- mockup e elementos decorativos não podem criar rolagem horizontal;
- o FAQ deve continuar operável;
- o rodapé deve permanecer acessível.

## 14. Acessibilidade

- usar HTML semântico: `header`, `main`, `section`, `article`, `footer`;
- links para navegação externa e botões para controle do FAQ;
- foco visível com contraste alto;
- alvos mínimos de 44 × 44 px;
- logos relevantes com texto alternativo; imagens meramente decorativas com `alt=""`;
- ícones decorativos com `aria-hidden="true"`;
- mockup com uma descrição geral acessível, sem expor todo ruído decorativo;
- FAQ com `aria-expanded` e `aria-controls`;
- navegação completa por teclado;
- contraste legível em rosa, vinho e Telegram azul;
- suporte a movimento reduzido;
- não depender somente de cor para comunicar estado ou ação.

## 15. Analytics

### 15.1 Meta Pixel

ID:

`915964627618020`

No carregamento:

- `PageView`;
- `ViewContent`.

Os dois eventos devem ser enviados assim que o JavaScript próprio executar, usando o endpoint leve oficial `facebook.com/tr` e o mesmo ID do Pixel. Eles não devem depender do download do `fbevents.js`. A biblioteca completa fica reservada para `Lead`/interação e pode ser carregada posteriormente, sem atrasar o registro de `PageView` e `ViewContent`.

Em cada CTA:

- evento `Lead`;
- parâmetro `content_name` no formato `clube_delas_{platform}_{placement}`.

Exemplos:

- `clube_delas_whatsapp_hero`;
- `clube_delas_telegram_final`;
- `clube_delas_whatsapp_mobile_sticky`.

### 15.2 dataLayer

Em cada CTA, registrar:

```json
{
  "event": "generate_lead",
  "placement": "hero",
  "platform": "whatsapp"
}
```

Valores de plataforma permitidos:

- `whatsapp`;
- `telegram`.

Valores de posição permitidos:

- `header`;
- `hero`;
- `community`;
- `final`;
- `mobile_sticky`.

O rastreamento não deve impedir ou atrasar o redirecionamento.

## 16. SEO e compartilhamento

### 16.1 Metadados de referência

Idioma:

`pt-BR`

Title:

> Clube Delas Promo | Achadinhos no WhatsApp e Telegram

Description:

> Receba achadinhos de moda, beleza e autocuidado no WhatsApp ou Telegram. Promoções e cupons selecionados todos os dias. Entre grátis no Clube Delas Promo.

Keywords de referência:

`achadinhos femininos, promoções whatsapp, cupons de desconto, ofertas moda feminina, promoções beleza, Clube Delas Promo`

Open Graph:

- tipo: `website`;
- locale: `pt_BR`;
- site name: `Clube Delas Promo`;
- título: `Clube Delas Promo | Achadinhos que chegam até você`;
- descrição: `Moda, beleza e autocuidado com preços que valem o clique. Entre grátis pelo WhatsApp ou Telegram.`;
- imagem: logo PNG da marca.

Twitter/X:

- card: `summary_large_image`;
- título recomendado: `Clube Delas Promo | Achadinhos no WhatsApp e Telegram`;
- descrição: `Promoções e cupons selecionados no WhatsApp ou Telegram para você economizar sem perder tempo.`;
- imagem: logo PNG da marca.

### 16.2 Outros requisitos

- `robots`: `index, follow, max-image-preview:large`;
- theme color: `#b9165b`;
- favicon e Apple Touch Icon;
- JSON-LD de `Organization` com nome, descrição e logo;
- conteúdo principal compreensível sem carregar imagens;
- evitar texto essencial renderizado dentro de imagens.

## 17. Tecnologia e estrutura sugerida

### 17.1 Stack da implementação de referência

- HTML semântico entregue estaticamente;
- TypeScript mínimo para links, atribuição e analytics;
- Vite;
- CSS nativo;
- hospedagem estática/SPA compatível com Vercel.

React e bibliotecas de ícones foram removidos do caminho de renderização após a auditoria PageSpeed de 2026-08-01. Outra LLM pode usar stack equivalente, mas o HTML principal deve chegar pronto no primeiro documento e o bundle inicial deve respeitar o orçamento desta spec.

### 17.2 Estrutura mínima de referência

```text
clube-delas-landing-page-v2/
├── docs/superpowers/specs/
│   └── 2026-07-31-clube-delas-landing-v2-design.md
├── public/
│   ├── fonts/inter-latin.woff2
│   ├── llms.txt
│   ├── logo-clube-delas-96.webp
│   ├── logo-clube-delas-192.webp
│   ├── logo-clube-delas.webp
│   ├── logo-clube-delas.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config.ts
│   ├── main.ts
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig*.json
├── vercel.json
└── vite.config.ts
```

### 17.3 Configuração central

Manter em um único módulo:

- array com os seis grupos de WhatsApp;
- link do Telegram;
- constante de comunidade `80 mil+`;
- função que seleciona o grupo e preserva os parâmetros permitidos.

Evitar repetir números e URLs em componentes.

### 17.4 Hospedagem SPA

Se Vercel for usada, redirecionar todas as rotas para `/index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 18. Assets

Assets da implementação atual:

| Arquivo | Formato | Tamanho aproximado | Uso |
|---|---|---:|---|
| `public/logo-clube-delas-96.webp` | WebP | 1,1 KB | logos pequenas e primeira dobra |
| `public/logo-clube-delas-192.webp` | WebP | 3,0 KB | arte maior abaixo da dobra |
| `public/logo-clube-delas.webp` | WebP | 7,2 KB | original WebP de referência |
| `public/logo-clube-delas.png` | PNG | 37,4 KB | favicon e compartilhamento |
| `public/fonts/inter-latin.woff2` | WOFF2 | 48,3 KB | fonte local da interface |

Regras:

- usar WebP no conteúdo visível;
- declarar dimensões da logo para evitar layout shift;
- carregar a logo crítica com prioridade alta;
- usar a PNG apenas onde compatibilidade/metadado justificar;
- evitar fotos externas;
- não adicionar vídeo, carrossel ou biblioteca de animação pesada;
- se novos assets forem criados, comprimi-los antes da entrega.

## 19. Performance

### 19.1 Princípios

- aplicação estática, sem chamada de API para renderizar o conteúdo inicial;
- HTML principal pronto no documento, sem depender de React/hidratação;
- fonte local com `font-display: swap`;
- preload somente da logo realmente crítica;
- HTML/CSS para ilustrações sempre que razoável;
- FAQ com `details/summary` nativo, sem JavaScript;
- JavaScript apenas para seleção dos links, atribuição e analytics;
- CSS e JavaScript minificados na produção;
- `PageView` e `ViewContent` enviados imediatamente pelo endpoint leve do mesmo Meta Pixel, sem aguardar a biblioteca completa;
- biblioteca `fbevents.js` assíncrona, carregada na primeira interação ou após o caminho crítico, para processar `Lead` sem competir com a renderização;
- scripts de terceiros assíncronos e fora do caminho crítico;
- cache imutável de um ano para bundles, fontes e logos versionadas;
- nada deve bloquear o CTA principal;
- abaixo da dobra, usar otimizações que não criem flashes ou espaços vazios no mobile.

### 19.2 Orçamento obrigatório

- JavaScript inicial próprio: no máximo 10 KB gzip;
- CSS inicial: no máximo 8 KB gzip;
- logo crítica: no máximo 15 KB;
- nenhuma imagem externa bloqueando o primeiro conteúdo;
- objetivo de campo: LCP < 2,5 s;
- objetivo de campo: CLS < 0,1;
- objetivo de campo: INP < 200 ms.

### 19.3 Baseline da implementação de referência

O primeiro relatório público do PageSpeed, antes da otimização, marcou `76` em desempenho, `95` em acessibilidade, `100` em práticas recomendadas e `92` em SEO. As métricas mobile eram FCP `2,2 s`, LCP `4,2 s`, TBT `260 ms`, CLS `0` e Speed Index `4,3 s`.

Após a otimização de 2026-08-01, a build local passou a ter:

- HTML: aproximadamente `4,75 KB gzip`;
- JavaScript próprio: aproximadamente `1,04 KB gzip`;
- CSS: aproximadamente `5,54 KB gzip`;
- redução de aproximadamente `98,5%` no JavaScript inicial;
- Lighthouse mobile local: `99–100` em desempenho;
- Lighthouse mobile local: `100` em acessibilidade, práticas recomendadas e SEO;
- FCP: `1,2 s`;
- LCP: `1,5 s`;
- TBT: `0 ms`;
- CLS: `0,001`.

Essas medições são baseline local, não uma promessa de produção e não substituem PageSpeed Insights no domínio publicado.

### 19.4 Verificação recomendada

- executar build de produção;
- registrar tamanhos gzip dos bundles;
- testar Lighthouse/PageSpeed após publicação;
- confirmar ausência de layout shift por logos e fontes;
- verificar console e rede com throttling;
- medir em celular real quando possível.

## 20. Estados e interações

### 20.1 FAQ

- primeira resposta aberta inicialmente;
- clique ou Enter/Espaço alterna o item;
- ícone gira para indicar abertura;
- animação curta e removida em movimento reduzido.

### 20.2 CTAs

- hover sutil no desktop;
- foco claramente visível;
- feedback não pode atrasar a abertura do grupo;
- link de WhatsApp recalculado em cada clique;
- Telegram permanece fixo.

### 20.3 Falhas toleráveis

- se Pixel ou `dataLayer` não estiverem disponíveis, o clique deve continuar funcionando;
- se animações forem desativadas, todo conteúdo deve permanecer visível;
- com JavaScript carregado lentamente, o `href` inicial de WhatsApp deve continuar válido.

## 21. Privacidade e honestidade

- não coletar dados pessoais diretamente na landing;
- não expor identificadores ou dados de membros;
- não usar prova social com rostos reais sem autorização; avatares abstratos/iniciais são aceitáveis;
- não prometer preço, estoque ou cupom permanente;
- preservar o aviso de responsabilidade das lojas;
- qualquer regra detalhada dos sorteios deve ser comunicada nos canais oficiais da ação, não inventada pela implementação.

## 22. Testes e critérios de aceite

### 22.1 Funcional

- todos os CTAs abrem uma nova aba;
- cada CTA de WhatsApp pode apontar para qualquer um dos seis links;
- sucessivos cliques recalculam o destino;
- `utm_source`, `utm_medium`, `utm_campaign`, demais `utm_*` e `fbclid` são preservados no WhatsApp;
- parâmetros não permitidos não são copiados;
- todos os CTAs de Telegram usam o link oficial fixo;
- eventos identificam posição e plataforma corretamente;
- FAQ abre, fecha e responde ao teclado;
- links internos de início funcionam.

### 22.2 Conteúdo

- `80 mil+` aparece no desktop e no mobile;
- a copy usa `sorteio` e não `promoção mensal` para a ação mensal;
- existe menção explícita a mais de uma ganhadora;
- existe menção a lives;
- fica claro que as ações são divulgadas nos grupos;
- não existe mecanismo de sorteio na landing;
- WhatsApp e Telegram aparecem nas posições obrigatórias;
- nenhuma copy proibida ou claim inventada foi adicionada.

### 22.3 Visual e responsivo

- sem overflow horizontal em toda a matriz de telas;
- ambos os CTAs do hero integralmente visíveis em 320 × 844;
- barra fixa apenas até 620 px;
- barra fixa respeita safe area;
- todos os alvos visíveis têm pelo menos 44 × 44 px;
- títulos e botões não cortam texto;
- cards mudam para uma coluna quando necessário;
- mockup não invade a copy nem a borda da viewport;
- conteúdo final não fica atrás da barra fixa;
- foco visível e contraste adequados.

### 22.4 Qualidade técnica

- lint sem erros;
- typecheck sem erros;
- build de produção sem erros;
- console do navegador sem erros;
- nenhuma dependência pesada sem justificativa;
- orçamento gzip respeitado;
- nenhum asset ausente ou resposta 404;
- navegação testada em pelo menos Chromium e um navegador WebKit quando disponível.

## 23. Entregáveis esperados de outra LLM/agente

1. Uma nova pasta de projeto independente.
2. Código-fonte completo e executável.
3. Assets necessários e otimizados.
4. Arquivo de configuração central para links e prova social.
5. Scripts de desenvolvimento, lint e build.
6. Configuração de deploy estático/SPA.
7. README curto com instalação, execução, build e estrutura.
8. Relatório final contendo:
   - stack escolhida;
   - decisões criativas relevantes;
   - testes executados;
   - tamanhos gzip;
   - telas validadas;
   - limitações conhecidas.

## 24. Prompt portátil para outra LLM/agente

O bloco abaixo pode ser copiado junto com esta spec:

```text
Crie uma landing page nova e independente para o Clube Delas Promo seguindo integralmente a especificação fornecida. O objetivo principal é maximizar entradas nos grupos de WhatsApp; Telegram é uma alternativa obrigatória. Trabalhe com liberdade criativa na composição visual, mas preserve toda informação factual, copies obrigatórias, lógica de seis links de WhatsApp, link fixo do Telegram, analytics, acessibilidade, mobile-first e orçamentos de performance.

Não consulte nem copie a implementação existente: use esta especificação como fonte de verdade para produzir uma solução comparável e autoral. Não invente depoimentos, números, urgência, vagas, preços garantidos ou mecânicas de sorteio. Os sorteios mensais e lives acontecem dentro dos grupos; a landing somente comunica e redireciona.

Priorize 320–430 px. Garanta que os dois CTAs do hero estejam inteiros na primeira viewport de 320 × 844, não exista overflow horizontal e todos os alvos tenham no mínimo 44 × 44 px. Ao concluir, rode lint, typecheck/build, verifique os links e eventos, meça os bundles gzip e entregue um resumo objetivo das validações.
```

## 25. Fora de escopo desta versão

- CMS ou painel para editar copy e links;
- banco de dados;
- formulário de leads;
- autenticação;
- catálogo e checkout;
- mecanismo ou administração de sorteios;
- regulamento completo dentro do site;
- integração de e-mail ou CRM;
- testes A/B em produção;
- publicação no domínio definitivo;
- métricas reais de PageSpeed antes do deploy.

## 26. Definição de pronto

A landing está pronta quando uma pessoa em celular entende, sem ambiguidade, que o Clube Delas oferece curadoria gratuita de promoções no WhatsApp ou Telegram, percebe que a comunidade tem `80 mil+ pessoas`, descobre que há sorteios mensais com mais de uma ganhadora e lives nos grupos, consegue entrar com um único clique e não enfrenta lentidão, overflow, texto cortado ou CTA inacessível.

Tecnicamente, a entrega só está pronta quando os seis links de WhatsApp são balanceados por clique, o Telegram usa o destino oficial, a atribuição é preservada, os eventos distinguem plataforma e posição, a experiência passa pela matriz responsiva e os orçamentos de performance são respeitados.
