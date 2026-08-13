# Clube Delas Promo — Landing V3 de Conversão Direta

Data: 13 de agosto de 2026  
Status: design aprovado; aguardando revisão final da especificação  
Branch: `feat/direct-conversion-landing`

## 1. Objetivo

Substituir a landing atual por uma experiência mobile-first, curta e direta, cujo objetivo principal seja levar visitantes ao grupo do Clube Delas Promo no WhatsApp.

A nova versão deve:

- comunicar o benefício e apresentar o CTA principal sem exigir rolagem;
- reduzir escolhas e distrações;
- usar persuasão forte, verdadeira e verificável;
- preservar a identidade visual do Clube Delas Promo;
- manter WhatsApp como ação dominante e Telegram como alternativa secundária;
- carregar muito rápido mesmo em celulares e redes móveis limitadas;
- preservar o mesmo Meta Pixel, eventos e seis destinos de WhatsApp.

## 2. Contexto e hipótese

A landing atual tem boa apresentação visual, mas é longa e distribui atenção entre muitas seções e argumentos. A landing anterior era mais simples e aproximava promessa, urgência e CTA.

Hipótese principal:

> Uma página curta, com uma promessa específica, um único CTA dominante acima da dobra, prova social real e redução imediata de risco deve gerar mais cliques qualificados para o grupo do que a versão editorial longa.

O resultado não deve ser declarado vencedor sem comparação por dados. O principal indicador será a razão entre cliques `Lead` no WhatsApp e visualizações da landing.

## 3. Público e contexto de acesso

- mulheres interessadas em moda, beleza, autocuidado, casa, cupons e promoções;
- tráfego majoritariamente mobile, inclusive vindo de anúncios e redes sociais;
- visitantes com pouca familiaridade prévia com a marca;
- decisão de baixa fricção: entrar gratuitamente em um grupo e poder sair quando quiser.

## 4. Princípios de conversão

### 4.1 Um objetivo dominante

O WhatsApp deve ser a única ação com aparência de CTA primário. Não deve existir menu, navegação institucional, carrossel ou outro botão concorrente.

O Telegram deve permanecer disponível, porém apresentado como link secundário visualmente discreto.

### 4.2 Benefício antes da explicação

A visitante deve entender em poucos segundos:

1. o que recebe: achadinhos, cupons e promoções;
2. onde recebe: WhatsApp;
3. qual o benefício: ofertas com até 80% OFF;
4. quanto custa: nada;
5. qual ação tomar: entrar no grupo agora.

### 4.3 Urgência verdadeira

Usar somente a urgência natural das promoções:

- preços podem mudar;
- cupons podem expirar;
- ofertas podem acabar.

Não usar:

- contador reiniciável;
- número inventado de vagas;
- alerta falso de grupo lotando;
- quantidade fictícia de pessoas visualizando;
- prazo sem fundamento real.

### 4.4 Prova e confiança

Podem ser usados:

- `80 mil+ pessoas na comunidade`;
- sorteios mensais;
- mais de uma ganhadora;
- lives e ações especiais;
- entrada gratuita;
- ausência de compra obrigatória;
- possibilidade de sair quando quiser.

Não usar avaliações, depoimentos, valores economizados ou volumes diários sem uma fonte real confirmada.

## 5. Direção de copy

### 5.1 Faixa superior

> ⚡ Promo boa muda rápido — receba antes que acabe

A mensagem cria urgência com base no comportamento real das ofertas, sem alegar escassez artificial.

### 5.2 Cabeçalho

- logo do Clube Delas Promo;
- nome da marca;
- prova compacta: `80 mil+ na comunidade`;
- sem menu e sem CTA adicional no cabeçalho mobile.

### 5.3 Hero

Eyebrow:

> GRUPO GRATUITO DE ACHADINHOS

Headline:

> Até 80% OFF no que você ama — direto no seu WhatsApp.

Texto de apoio:

> Moda, beleza, autocuidado e casa. A gente garimpa as melhores promoções e avisa você todos os dias.

Prova social:

> 80 mil+ pessoas já fazem parte

CTA primário:

> ENTRAR GRÁTIS NO GRUPO AGORA

Microcopy do CTA:

> Abre o WhatsApp em 1 clique

Redução de risco:

> 100% grátis · Sem compra obrigatória · Saia quando quiser

Alternativa secundária:

> Prefere Telegram? Entrar por aqui

### 5.4 Benefícios essenciais

Exibir quatro benefícios curtos, escaneáveis e sem parágrafos longos:

- Até 80% OFF;
- cupons e alertas rápidos;
- ofertas de lojas conhecidas;
- seleção feita pelo Clube Delas.

### 5.5 Bônus da comunidade

Título:

> Entrou no grupo? Tem mais esperando por você.

Texto:

> Todo mês tem sorteio, mais de uma ganhadora e lives com novidades. As orientações de cada ação são divulgadas dentro dos grupos.

O bloco deve reforçar o CTA sem transformar sorteio em promessa garantida de prêmio.

### 5.6 Fechamento

Título:

> Não deixe a próxima oferta passar.

CTA repetido:

> ENTRAR GRÁTIS NO GRUPO AGORA

Telegram continua apenas como alternativa textual.

## 6. Estrutura da página

A página deve ter aproximadamente duas a três alturas de tela em um celular comum:

1. faixa de urgência;
2. cabeçalho compacto;
3. hero com promessa, prova, CTA e redução de risco;
4. grade compacta de benefícios;
5. bloco de sorteios, ganhadoras e lives;
6. fechamento com CTA;
7. rodapé legal mínimo.

Não haverá FAQ, navegação, depoimentos, carrossel, contador ou conteúdo institucional extenso.

## 7. Hierarquia mobile-first

### 7.1 Primeiro viewport

Em `320 × 568`, a primeira ocorrência completa do CTA principal deve ficar visível sem rolagem. Se necessário, a prova social e o texto de apoio podem ser compactados, mas a headline, o CTA e a informação de gratuidade não podem ser escondidos.

### 7.2 CTA persistente

Depois que o CTA do hero sair da área visível, uma barra inferior compacta deve manter o WhatsApp acessível. Ela não deve aparecer sobre o CTA original nem ocultar conteúdo.

O Telegram não entra na barra persistente.

### 7.3 Ergonomia

- alvos de toque com pelo menos 48 px de altura;
- CTA principal em largura total no mobile;
- texto legível sem zoom;
- suporte a `safe-area-inset-bottom`;
- nenhum conteúdo ou decoração deve causar rolagem horizontal;
- foco visível para teclado;
- respeito a `prefers-reduced-motion`.

## 8. Direção visual

Preservar:

- rosa vivo como cor de ação;
- vinho como contraste e autoridade;
- creme/rosa muito claro como fundo;
- logo atual;
- linguagem feminina, acolhedora e energética.

Evoluir para:

- composição mais compacta;
- headline grande e direta;
- botão de WhatsApp com contraste máximo;
- pequenos selos e cartões com bordas suaves;
- brilho e movimento muito discretos, somente em CSS;
- decoração abstrata leve, sem imagens externas.

O visual não deve parecer uma página genérica de afiliado nem usar vermelho de alarme em excesso. A energia virá de contraste, escala tipográfica e proximidade entre benefício e ação.

## 9. Comportamento dos links

### 9.1 WhatsApp

Preservar os seis destinos atuais:

- `https://tr.ee/clubedelaspromo-landing1`;
- `https://tr.ee/clubedelaspromo-landing2`;
- `https://tr.ee/clubedelaspromo-landing3`;
- `https://tr.ee/clubedelaspromo-landing4`;
- `https://tr.ee/clubedelaspromo-landing5`;
- `https://tr.ee/clubedelaspromo-landing6`.

Cada CTA escolhe um destino de forma aleatória. Parâmetros `utm_*` e `fbclid` recebidos pela landing devem ser preservados no redirecionamento.

### 9.2 Telegram

Preservar:

`https://t.me/+JslsL6UzXv43OGYx`

### 9.3 Falhas

O link deve continuar abrindo mesmo se analytics, Meta Pixel ou `dataLayer` falharem. Nenhum rastreamento pode bloquear ou atrasar a ação principal.

## 10. Analytics

Preservar o Meta Pixel:

`915964627618020`

Eventos de entrada:

- `PageView`;
- `ViewContent`.

Eventos de CTA:

- `Lead` em todo clique para WhatsApp ou Telegram;
- `content_name` no formato `clube_delas_{platform}_{placement}`;
- envio paralelo ao `dataLayer` com `event: generate_lead`, `platform` e `placement`.

Placements obrigatórios:

- `hero`;
- `final`;
- `mobile_sticky`;
- `telegram_hero`.

Não haverá CTA intermediário dentro dos blocos de benefícios ou bônus. A repetição ficará limitada ao hero, ao fechamento e à barra persistente mobile.

A reformulação visual não deve alterar a identidade do Pixel nem introduzir CAPI, correspondência avançada ou mudanças de desduplicação. Essas integrações ficam fora do escopo desta versão.

## 11. Arquitetura técnica

Preservar a arquitetura atual:

- Vite;
- TypeScript;
- HTML estático;
- CSS próprio;
- JavaScript mínimo somente para links, CTA persistente e analytics;
- sem React, hidratação, biblioteca de componentes ou biblioteca de animação;
- sem chamadas de API necessárias para renderizar a página;
- sem imagens externas;
- fonte local ou pilha de sistema com `font-display: swap` quando aplicável.

O conteúdo principal deve existir no HTML entregue pelo servidor. A página precisa continuar útil se o JavaScript próprio falhar, exceto pela escolha aleatória dinâmica do grupo.

## 12. Orçamento de desempenho

Limites de produção:

- HTML: até 10 KB gzip;
- CSS: até 7 KB gzip;
- JavaScript próprio: até 2 KB gzip;
- imagem crítica: até 15 KB;
- zero JavaScript de framework;
- zero recurso externo bloqueando renderização;
- CLS menor que `0,02`;
- TBT menor que `50 ms`;
- LCP objetivo menor que `1,8 s` no Lighthouse mobile simulado;
- Lighthouse mobile público: objetivo de pelo menos 95 em desempenho e 100 em acessibilidade, práticas recomendadas e SEO.

O LCP deve ser texto ou um elemento local leve. Todos os elementos de imagem devem declarar `width` e `height`.

## 13. SEO e metadados

Preservar indexação e arquivos técnicos válidos:

- título e description coerentes com achadinhos femininos e grupo no WhatsApp;
- canonical da URL pública;
- Open Graph e Twitter Card;
- `robots.txt`;
- `sitemap.xml`;
- `llms.txt`;
- JSON-LD da organização;
- favicon e logo.

Não usar excesso de palavras-chave no conteúdo visível.

## 14. Acessibilidade

- HTML semântico;
- contraste WCAG AA;
- ordem de leitura natural;
- CTA como link, pois navega para destino externo;
- textos alternativos úteis somente em imagens informativas;
- decoração ignorada por tecnologias assistivas;
- foco visível;
- navegação por teclado;
- nenhuma informação comunicada somente por cor;
- movimento reduzido respeitado.

## 15. Critérios de aceite

### Conversão e conteúdo

- WhatsApp é inequivocamente a ação principal;
- Telegram existe sem competir visualmente;
- CTA completo aparece sem rolagem em `320 × 568`;
- headline menciona até 80% OFF e WhatsApp;
- prova de `80 mil+` aparece acima da dobra;
- sorteios mensais, várias ganhadoras e lives aparecem de forma correta;
- nenhuma escassez ou depoimento inventado;
- página possui no máximo as sete regiões descritas na seção 6.

### Funcionalidade

- todos os CTAs de WhatsApp abrem um dos seis destinos;
- Telegram abre o destino correto;
- UTMs e `fbclid` são preservados;
- `Lead` é disparado com platform e placement corretos;
- `PageView` e `ViewContent` continuam no mesmo Pixel;
- o clique funciona mesmo com o script da Meta indisponível.

### Responsividade

Validar pelo menos:

- `320 × 568`;
- `360 × 800`;
- `390 × 844`;
- `768 × 1024`;
- `1440 × 900`.

Em todos:

- sem overflow horizontal;
- sem texto cortado;
- sem sobreposição do CTA persistente;
- alvos de toque adequados;
- hierarquia coerente.

### Qualidade e desempenho

- lint sem erros;
- build de produção concluído;
- orçamentos gzip respeitados;
- Lighthouse mobile dentro das metas;
- sem erros no console;
- sem regressão de acessibilidade ou SEO.

## 16. Medição pós-publicação

Comparar a nova versão com a landing anterior usando:

- `Lead WhatsApp / PageView` como métrica principal;
- `Lead Telegram / PageView` como métrica secundária;
- desempenho segmentado por dispositivo e origem de campanha;
- período e volume suficientes para evitar conclusão baseada em amostra pequena.

Não alterar simultaneamente anúncios, público e landing durante o período de comparação, quando isso puder ser evitado. Caso contrário, a origem do ganho ou perda ficará ambígua.

## 17. Fora de escopo

- formulário de telefone ou email;
- API de Conversões;
- correspondência avançada;
- autenticação;
- banco de dados;
- painel administrativo;
- contador ou vagas dinâmicas;
- depoimentos sem comprovação;
- integração nova com CRM;
- alteração dos grupos ou do Pixel.
