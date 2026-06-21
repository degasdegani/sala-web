@AGENTS.md

# CLAUDE.md — S.A.L.A. · Spec Mestra

> Documento-fonte único do site institucional da **S.A.L.A.**
> Cole este arquivo no início de cada nova sessão para restaurar contexto.
> A linha `@AGENTS.md` acima importa as regras de agente do Next (geradas pelo scaffold).
> Atualizado ao final de cada fase. Versão: **0.2 (Fase 0 em andamento)**.

---

## 0. O QUE É ESTE PROJETO

Site institucional/portfólio da **S.A.L.A.**, empresa de tecnologia brasileira fundada por **Edu** (dev backend, ex-vendas/account management). A S.A.L.A. é a "casa" por trás de produtos próprios e serviços sob demanda.

- **S.A.L.A.** = **S**ites · **A**gendamentos · **L**anding Pages · **A**utomação.
- **LIVO** = produto-mãe (SaaS de agendamento para barbearias, em produção em `livobarber.com.br`). Aparece aqui como **case/prova**, não como o produto vendido nesta página.
- Este site **não é** o LIVO e **não é** uma landing única. É um **cartão de visitas tecnológico** que prova, pela própria existência, a capacidade da S.A.L.A.

**Critério de sucesso:** quem abre este site precisa sentir, em 5 segundos, que está diante de um estúdio de nível Awwwards — sem nunca quebrar performance ou acessibilidade.

---

## 1. CONCEITO CRIATIVO — A CENA 3D

### Metáfora central: "A SALA"
`S.A.L.A.` também significa **sala** (o cômodo / a casa). A casa por trás dos produtos. A câmera vive **dentro** de um volume preto absoluto — uma sala-void. No centro flutua a alma da marca.

### Objeto central da Home: a **Fita-S**
Reinterpretação 3D do símbolo do logo (o "S" em fita metálica com ponta verde-água):
- Uma **fita contínua extrudada** formando o "S" estilizado, material metal/glass (PBR metálico + leve transmissão).
- Sheen com gradiente **azul-elétrico → branco** ao longo da superfície; **aresta luminosa verde-água** (`#00FFB2`) na "ponta" da fita — o detalhe-assinatura.
- Rotação lenta e contínua + **parallax reativo ao cursor** (a fita "olha" para o mouse).

### Sistema nervoso: o **grafo S·A·L·A**
Quatro **nós luminosos** (Sites, Agendamentos, Landing Pages, Automação) orbitam/ramificam a partir da Fita-S, conectados por **linhas de luz animadas** (bezier com fluxo de partículas) — literalizando em 3D o vocabulário de "diagrama de nós conectados" da referência. Cada nó é o **portal de entrada** da sua seção.

### Navegação = coreografia, não reload
Canvas montado **uma única vez** no layout raiz. Ao navegar:
1. GSAP timeline voa a câmera em direção ao nó da seção alvo.
2. O nó "floresce" na **assinatura 3D** daquela seção.
3. A Fita-S recua/morfa, sem ser destruída. Zustand é a fonte da verdade do estado da cena.

### Ambiente
Campo de partículas/poeira volumétrica sutil, bloom contido, vinheta. **Néon contido sobre preto puro** — nunca blocos de cor sólida.

> Assinaturas 3D por seção (a refinar na fase de design de cada uma):
> - **Home:** Fita-S + grafo dos 4 nós.
> - **Sites & LP:** frames de produto (LIVO) em leve perspectiva 3D, com glow.
> - **Automação:** o grafo de nós vira **interativo e navegável** (arrastar/explorar).
> - **Sobre:** linha do tempo / trajeto (sales → backend) como caminho de luz.
> - **Contato:** a Fita-S reassume o centro, "fechando o ciclo".

---

## 1.5 LOGO — RECRIAÇÃO

**Referência visual:** `reference/sala_logotipo2.png` (gerado por IA — usar como referência **fiel de composição, proporção e cores**, não como asset final).

**Diretriz de execução (não negociável):** recriar o "S" e o lockup completo como **SVG nativo do zero — paths matemáticos**. **Nunca** traçar/auto-vetorizar o PNG.

Elementos a manter no SVG:
- **S** em curva de **fita** com gradiente **azul → branco** (`#00A3FF → #FFFFFF`), traço encorpado/metálico.
- **Ponta verde-água** (`#00FFB2`) na **cauda do S**.
- **A · L · A** com traço mais leve (contorno claro/branco), contraste com o S preenchido.
- **Ponto azul** (`#00A3FF`) sob o 1º **A** (Agendamentos).
- **Barra verde-água** (`#00FFB2`) sob o **L** (Landing Pages).
- **Ponto verde-água** (`#00FFB2`) sob o 2º **A** (Automação).

Assets a produzir (em `public/brand/`):
- `symbol.svg` — só o "S" em fita (favicon, loading spinner, cursor, microinterações).
- `logotype.svg` — lockup completo "SALA" + marcadores.
- `app-icon.svg` / `favicon` — derivados do símbolo.

> A tagline `SITES · AGENDAMENTOS · LANDING PAGES · AUTOMAÇÃO` e o rodapé explicativo da referência **não** integram o lockup final — são material de apoio da imagem-fonte.

---

## 2. DESIGN TOKENS

### 2.1 Cores (hex exatos — usar estes, não aproximar)
```css
--color-black-pure:     #000000; /* fundo base — predominante */
--color-black-soft:     #0A0A0A; /* cards / seções elevadas */
--color-black-elevated: #111111; /* elementos interativos em repouso */

--color-white-pure:     #FFFFFF; /* texto principal, headlines */
--color-gray-light:     #E5E3E5; /* texto secundário */
--color-gray-mid:       #B3B3B3; /* texto terciário, captions, labels */

--color-blue-electric:  #00A3FF; /* primária: ação, Sites, Agendamentos */
--color-green-mint:     #00FFB2; /* secundária: Automação, Landing Pages, sucesso */

--border-subtle: rgba(255,255,255,0.08); /* borda 1px de cards */
```
**Regra:** preto puro domina. Azul/verde-água só como **acentos luminosos** (gradientes, glows, linhas de conexão, hover, 3D).

### 2.2 Tipografia — **Satoshi** (self-host obrigatório)
- Pesos: **SemiBold / Bold / Black** (headings), **Regular / Medium** (corpo).
- Self-host via `@font-face` a partir de `/public/fonts/` (woff2). **Nunca** Google Fonts substituta.
- Headlines dramáticas: `clamp(2.5rem, 8vw, 7rem)`, `letter-spacing` levemente **negativo**.
- Labels de nav / microcopy: caixa-alta, pequenos, `letter-spacing` **positivo** (estilo "DESIGN SYSTEM GENERATOR" da referência).

Escala sugerida (Tailwind theme):
```
display: clamp(2.5rem, 8vw, 7rem) / 0.95 / -0.02em
h1:      clamp(2rem, 5vw, 4rem)   / 1.0  / -0.015em
h2:      clamp(1.5rem, 3vw, 2.5rem)
body:    1rem–1.125rem / 1.6
label:   0.75rem / uppercase / +0.15em
```

### 2.3 Espaçamento & layout
- Base 8px (escala Tailwind padrão).
- Container máx: `1280px`, gutter responsivo.
- Raio de card: `16px`. Borda: `1px var(--border-subtle)`.
- Glow padrão hover: `box-shadow` / `filter: drop-shadow` em azul ou verde-água, baixa opacidade.

---

## 3. ARQUITETURA DE ROTAS

App Router, cada seção é **rota real** (não âncora):

| Rota | Seção | Conteúdo-núcleo |
|------|-------|-----------------|
| `/` | **Home** | Hero cinematográfico (Fita-S + grafo), headline de posicionamento, CTA primário, 4 cards-portal. |
| `/sites` | **Sites & Landing Pages** | Oferta, processo de trabalho, **showcase do LIVO** como case. |
| `/automacao` | **Automação** | Oferta de automação + **grafo 3D interativo** (arrastar/explorar). |
| `/sobre` | **Sobre** | História da S.A.L.A. + narrativa de transição de carreira do Edu (diferencial humano). |
| `/contato` | **Contato** | Formulário **funcional** de orçamento (integração **Resend**). |

> Nomes de rota acima são a proposta inicial. Copywriting completo e organização interna de cada seção definidos na fase de cada uma.

---

## 4. STACK TÉCNICA

> **Versões instaladas no scaffold (Fase 0.1):** `next@16.2.9`, `react@19.2.4`, `react-dom@19.2.4`, TypeScript 5, ESLint 9.
> Next 16 é mais novo que o conhecimento-base do modelo → consultar `node_modules/next/dist/docs/` antes de usar APIs do Next (ver `AGENTS.md`).

- **Next.js 16 (App Router) + TypeScript** — scaffold sem Turbopack (webpack), sem Tailwind do CNA.
- **Tailwind CSS v3** (instalação manual na Fase 0.4 — **não** a v4 padrão do CNA).
- **React Three Fiber + @react-three/drei** (R3F v9 p/ React 19).
- **GSAP + ScrollTrigger** (orquestração de animação / scroll storytelling).
- **Zustand** (estado global: cena 3D + navegação).
- **Lenis** (smooth scroll).
- **Framer Motion / `motion`** (transições de UI 2D fora da cena 3D).
- **Resend** (envio do formulário de contato).
- **Deploy: Vercel**.

---

## 5. ÁRVORE DE PASTAS (alvo)

```
S.A.L.A/
├── CLAUDE.md                        # @AGENTS.md + esta spec mestra
├── AGENTS.md                        # regras de agente do Next (geradas pelo scaffold)
├── next.config.ts
├── tailwind.config.ts               # (Fase 0.4)
├── postcss.config.mjs               # (Fase 0.4)
├── tsconfig.json
├── package.json                     # name: sala-web
├── .env.local                       # RESEND_API_KEY, CONTACT_TO_EMAIL (gitignored)
├── .env.example
├── public/
│   ├── fonts/                       # Satoshi *.woff2 (self-host)
│   ├── brand/                       # logo SVG (símbolo, logotipo, app-icon), favicon
│   └── images/                      # screenshots LIVO, og-image
└── src/
    ├── app/
    │   ├── layout.tsx               # layout raiz: monta Canvas 3D persistente + Lenis + cursor
    │   ├── page.tsx                 # Home
    │   ├── globals.css              # tokens CSS, @font-face Satoshi, base
    │   ├── sites/page.tsx
    │   ├── automacao/page.tsx
    │   ├── sobre/page.tsx
    │   ├── contato/page.tsx
    │   ├── api/contato/route.ts     # handler Resend
    │   ├── opengraph-image.tsx
    │   └── not-found.tsx
    ├── components/
    │   ├── ui/                      # Button, Card, NavLink, Cursor, Loader...
    │   ├── layout/                  # Header, Footer, Nav, PageTransition
    │   └── sections/                # blocos de conteúdo por rota
    ├── three/
    │   ├── Scene.tsx                # <Canvas> raiz, gerencia dpr adaptativo / fallback
    │   ├── Experience.tsx           # conteúdo da cena, lê o store
    │   ├── objects/
    │   │   ├── RibbonS.tsx          # Fita-S central
    │   │   ├── NodeGraph.tsx        # grafo S·A·L·A (nós + linhas de luz)
    │   │   └── Particles.tsx        # campo volumétrico
    │   ├── controllers/
    │   │   └── CameraRig.tsx        # movimento de câmera por rota (GSAP + useFrame)
    │   ├── materials/               # shaders/materiais custom (gradiente, glow)
    │   └── shaders/                 # *.glsl (vertex/fragment)
    ├── store/
    │   └── useSceneStore.ts         # Zustand: rota ativa, alvo de câmera, fase, flags
    ├── hooks/
    │   ├── useReducedMotion.ts
    │   ├── useWebGLSupport.ts
    │   └── useMediaQuery.ts
    ├── lib/
    │   ├── gsap.ts                  # registro de plugins (ScrollTrigger)
    │   ├── lenis.ts                 # provider de smooth scroll
    │   └── resend.ts                # cliente + template de e-mail
    ├── content/                     # copy estruturada por seção (TS/MDX)
    ├── styles/                      # tokens.ts (espelho TS dos CSS vars), se necessário
    └── types/                       # tipos compartilhados
```

---

## 6. PLANO DE FASES

Construção incremental. Cada fase é **pequena, revisável e aprovada antes da próxima**.
Início de fase: `S.A.L.A. • [NOME DA ETAPA]` + `Modo: passo a passo, arquivos completos, comandos exatos, confirmação a cada etapa.`
Fim de fase: atualizar este `CLAUDE.md` com o que foi construído.

| Fase | Nome | Entregável | Status |
|------|------|-----------|--------|
| **0** | **Setup** | scaffold, deps, Satoshi, Tailwind v3 + tokens, layout raiz, 5 rotas, Lenis, logo SVG. | 🔄 em andamento |
| **1** | **Cena base** | `<Canvas>` persistente no layout, Zustand store, Fita-S central, partículas, dpr adaptativo, fallback WebGL/reduced-motion. | — |
| **2** | **Home** | Hero (Fita-S + grafo), headline, CTA, 4 cards-portal funcionais. | — |
| **3** | **Transições de rota** | CameraRig: voo de câmera + morph por rota, coordenado GSAP↔R3F↔DOM. PageTransition + loader com símbolo da marca. | — |
| **4** | **Sites & Landing Pages** | Conteúdo, processo, showcase LIVO em frame 3D. | — |
| **5** | **Automação** | Grafo 3D **interativo** (arrastar/explorar), copy da oferta. | — |
| **6** | **Sobre** | Storytelling S.A.L.A. + trajetória do Edu, scroll storytelling. | — |
| **7** | **Contato** | Formulário funcional + `api/contato` via Resend, validação, estados de sucesso/erro. | — |
| **8** | **Polimento** | Cursor custom, microinterações, glows, performance (lazy 3D, mobile leve), responsividade, a11y/`prefers-reduced-motion`, SEO/OG. | — |

### Sub-etapas da Fase 0
| # | Etapa | Status |
|---|-------|--------|
| 0.1 | Scaffold Next (Next 16 + TS + App Router + src/ + ESLint + alias, sem Tailwind, sem Turbopack) | ✅ feito |
| 0.2 | Deps 3D/anim (R3F, drei, three, gsap, zustand, lenis, motion, resend) | ⏳ |
| 0.3 | Satoshi self-host (`public/fonts/`) | ⏳ |
| 0.4 | Tailwind v3 + tokens (`tailwind.config.ts`, `postcss.config`, `globals.css`) | ⏳ |
| 0.5 | Layout raiz (metadata, fonte, Header/Footer placeholders) | ⏳ |
| 0.6 | Rotas placeholder (`/sites`, `/automacao`, `/sobre`, `/contato`, `not-found`) | ⏳ |
| 0.7 | Lenis smooth scroll | ⏳ |
| 0.8 | Logo SVG nativo (`public/brand/`) | ⏳ |

---

## 7. CONVENÇÕES DE CÓDIGO

- **TypeScript estrito.** Sem `any` salvo justificado. Props tipadas.
- **Componentes:** PascalCase em arquivos `.tsx`; hooks `useX` em `.ts`.
- **Server Components por padrão**; `"use client"` só onde necessário (3D, animação, interação). A cena 3D é client.
- **Tokens nunca hardcoded** em componentes — usar CSS vars / theme Tailwind.
- **3D justifica custo:** todo elemento WebGL precisa de razão de frame. Lazy-load fora do viewport inicial; `dpr` adaptativo; instancing onde couber.
- **Mobile não é afterthought:** versão deliberadamente mais leve da cena (menos partículas, geometria simplificada, possível substituição por mídia otimizada via feature-detection).
- **Acessibilidade:** `prefers-reduced-motion` substitui movimento 3D por equivalente 2D — **nunca remove a experiência por completo**.
- **GSAP:** plugins registrados uma vez em `lib/gsap.ts`; timelines limpas no unmount.
- **Next 16:** consultar `node_modules/next/dist/docs/` antes de usar APIs do framework (APIs podem divergir do conhecimento do modelo).
- **Comandos de terminal sempre explícitos e completos** (paths e flags), prontos para copiar/colar.
- **Commits:** mensagens claras; só commitar/pushar quando o Edu pedir.
- **Segredos** só em `.env.local` (gitignored); `.env.example` documenta as chaves.

---

## 8. LOG DE FASES (preencher ao final de cada fase)

- **Fase 0.1 — Scaffold (feito):** `create-next-app@latest` gerou Next 16.2.9 + React 19.2.4 + TS + App Router + `src/` + ESLint 9 + alias `@/*`, sem Tailwind, sem Turbopack. Scaffold feito em pasta temp (restrição de nome npm com maiúsculas/pontos) e copiado via `cp -a` para `C:\S.A.L.A`. `package.json name` ajustado para `sala-web`. O CNA gerou `AGENTS.md` (regras Next) + `CLAUDE.md`→`@AGENTS.md`; spec mestra restaurada no `CLAUDE.md` com `@AGENTS.md` no topo.
