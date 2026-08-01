# Clube Delas Landing V2 Implementation Plan

**Goal:** Entregar uma nova landing page independente, mobile-first e orientada à entrada nos grupos de WhatsApp.

**Architecture:** SPA estática com React, TypeScript e Vite. A página concentra conteúdo e rastreamento em um único componente, usa CSS próprio para evitar dependências visuais pesadas e mantém integrações em `src/config.ts`.

**Tech Stack:** React 19, TypeScript, Vite, Lucide React, CSS nativo.

## Task 1: Base do projeto

- [x] Criar estrutura Vite/React em pasta separada.
- [x] Configurar TypeScript, ESLint e Vercel rewrite.
- [x] Reutilizar logo e fonte local da marca.

## Task 2: Conversão e conteúdo

- [x] Centralizar links e Pixel.
- [x] Criar evento de Lead e preservar UTMs.
- [x] Escrever copy com promessa, mecanismo, prova, segurança e FAQ.
- [x] Manter apenas WhatsApp como conversão primária.

## Task 3: Experiência visual

- [x] Implementar hero editorial e mockup de ofertas.
- [x] Criar seções responsivas e CTA fixo mobile.
- [x] Adicionar animações com fallback para movimento reduzido.

## Task 4: Qualidade

- [x] Instalar dependências.
- [x] Executar lint e build.
- [x] Verificar desktop, mobile, CTA e console no navegador.
