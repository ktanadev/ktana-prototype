# HANDOFF COMPLETO — SaaS Social Media

## PROMPT PARA PRÓXIMA SESSÃO

Cole isso ao iniciar:

> Consulte o cérebro: `POST /api/v1/agent/recall` com query "HANDOFF SAAS SOCIAL wireframes". Leia também o arquivo /Users/juliocesarmacbookblack/ktana-prototype/saas-social/HANDOFF.md e o procedure ID ac84e30e-4391-42fb-ba6d-434a7bd7b789 no cérebro (GET /api/v2/procedures/ac84e30e-4391-42fb-ba6d-434a7bd7b789).
>
> Esse é o projeto SaaS Social Media. Protótipo com 25 telas em ktanadev.github.io/ktana-prototype/saas-social/. PRECISA de refatoração profunda + ~30 sub-telas faltantes.
>
> REGRAS ABSOLUTAS:
> 1. IA-FIRST: toda tela tem chat-hero com agente. NUNCA formulário estático.
> 2. SVGs KTANA: viewBox 0 0 24 24, fill none, stroke currentColor, width 1.5. NUNCA emojis.
> 3. Client Switcher: data-client="true" nas per-client. Cada cliente é instância separada.
> 4. Layout: single-column 760px, shared-sidebar.js esquerda. Padrão /pj/ e /tenant/.
> 5. Calm Tech: informação só quando necessária. Zero visual noise.
> 6. ZERO botões fake: cada botão leva pra algum lugar real.
> 7. 50-60 telas no total pra ser navegável ponta a ponta.
>
> Os wireframes completos estão no cérebro como procedure (tag saas-social,wireframes). Leia TODOS antes de codar.
>
> Comece corrigindo as 25 telas existentes, depois crie as ~30 faltantes. Teste como cada persona.

---

## O QUE É O PRODUTO

Sistema operacional de posicionamento digital para agências que posicionam founders como autoridade na internet (Grupo Silva, Empire Business, Blank School). Motor autopilot 24/7 que pesquisa, cria, aprova via WhatsApp e publica. Conteúdo humano, escala de máquina.

**2 versões:** Standalone (SaaS independente) + Módulo da Empresa Inteligente (/pj/dept-marketing-social.html).

---

## ERROS COMETIDOS NESTA SESSÃO (NÃO REPETIR)

1. **Fiz formulários ao invés de chat** — signup e setup-team eram formulários. Corrigido pra chat, mas precisa verificar todas as telas.
2. **Usei emojis como ícones** — várias telas tinham ícones unicode/emoji. Regra: SÓ SVGs KTANA stroke-based.
3. **Layout 3 colunas ERP** — dashboard e client-workspace tinham sidebar+main+chat. Corrigido pra single-column.
4. **LP dark mode** — deveria ser light mode como Empresa Inteligente. Corrigido.
5. **LP falava "400 clientes"** — deveria ser genérico pra qualquer empresa de posicionamento. Corrigido.
6. **Links da LP iam pro dashboard** — deveria ir pro signup/login. Corrigido.
7. **Botões fake** — muitos botões que não levam a nada. Precisa criar sub-telas.
8. **Telas misturadas** — métricas, aprovações, insights mostravam TODOS os clientes juntos. Deveria ser POR CLIENTE (client switcher). Corrigido com data-client="true".
9. **Sidebar duplicada** — shared-sidebar.js conflitava com sidebars inline. Corrigido.
10. **Corri demais** — fiz 25 telas rápido ao invés de fazer 10 perfeitas. Próxima sessão: uma por vez, testando navegação.
11. **Não naveguei como usuário** — deveria ter testado o fluxo completo como cada ator antes de construir novas telas.
12. **Não segui Calm Tech** — telas com informação demais de uma vez.

---

## BRIEFING V3 — VISÃO COMPLETA DO PRODUTO

### Conceito
O founder NÃO tem problema de autoridade. Tem problema de DISTRIBUIÇÃO. O sistema resolve isso com:
- **Pilar 1 IDENTIDADE**: Clone visual, avatar vídeo, brand book, design system, bússola posicionamento
- **Pilar 2 CONTEÚDO**: Microprogramas, roteiros calibrados, webinar→50+ peças, modelo híbrido (real+IA)
- **Pilar 3 DISTRIBUIÇÃO**: Motor autopilot 24/7, multi-perfil, anti-bot, métricas + feedback loop

### Framework 5 Fases
1. **Diagnóstico** — SWOT, benchmark, brechas concorrentes, mapa riscos/alavancas
2. **Identidade** — Bússola posicionamento, 12 arquétipos, tom de voz, público alvo (4 dimensões + dores + desejos), brand book, design system Figma (5 logos), clone visual (38-50 fotos), avatar HeyGen
3. **Estratégia** — Linha editorial temática (dia/tema/hashtag/dor), microprogramas (3-5 de 200+, frequência+padrão+apresentador), mapa produção/distribuição, ecossistema multi-perfil (como G4: vários perfis→mesmo funil)
4. **Produção** — Motor Autopilot 12 etapas + Copilot assistido + Webinar→micro-cortes + Modelo híbrido (real+IA)
5. **Métricas** — Dashboard, feedback loop, saúde contas, anti-bot, contingência, relatórios automáticos

### 3 Tipos Posicionamento (Empire)
- **Especialista**: problema-solução, ensina, quebra objeções (médico, advogado, consultor)
- **Founder**: visão de mundo, tese central, liderança (CEO, empresário)
- **Creator**: lifestyle, audiência (influenciador)

### 7 Agentes IA
| Agente | Cor | Função |
|--------|-----|--------|
| Sensei | #D70030 red | Orquestrador — coordena todos, prioridades, consistência |
| Scout | #007AFF blue | Pesquisador — concorrentes, trending, brechas |
| Quill | #5856D6 purple | Copywriter — roteiros, legendas, tom de voz, score humanidade |
| Canvas | #FF2D55 pink | Designer — templates Figma, carrosséis, identidade visual |
| Pulse | #34C759 green | WhatsApp — aprovações, cobrança, interação grupo |
| Metrics | #FF9500 orange | Analista — engajamento, relatórios, feedback loop |
| Director | #5AC8FA teal | Vídeo — avatar HeyGen, ensaios fotográficos, roteiros visuais |

### Atores
- **KTANA Admin** (nós) — gerencia plataforma, tenants, billing
- **Tenant** (agência: Grupo Silva) — Master, Gestor CS, Social Media, Designer, Redator, Editor
- **Founder** (cliente do tenant) — portal limitado: aprovar, upload, relatórios, tarefas WhatsApp

### Anti-bot & Contingência
- GoLogin anti-detect: 1 perfil = 1 fingerprint = 1 conta = 1 proxy residencial
- Comportamento humanizado: navegar 30-90s, curtir 1-3 posts, delays 50-200ms
- Perfis backup warm: criados 30d antes, 2-3x/semana orgânico
- Monitoramento: semáforos verde/amarelo/vermelho/preto
- Dual WhatsApp: Evolution (interno) + Cloud API (cliente)

### Rate Limits Reais
- Instagram: 100 posts/24h (carrossel = 1)
- LinkedIn: ~50-100/dia (varia por app)
- TikTok: 15/24h, 6 uploads/min
- X: Free 500/mês, Basic 100/15min
- WhatsApp Baileys: 8 msgs/min (seguro)
- HeyGen: 1 crédito/min vídeo, $99/mês API Pro
- Blog: sem limite prático

---

## ESTADO ATUAL: 25 TELAS

### Existentes:
| # | Tela | Tipo | Client Switcher | Chat-hero |
|---|------|------|-----------------|-----------|
| 1 | landing.html | LP | - | - |
| 2 | login.html | Auth | - | - |
| 3 | signup.html | Auth (chat) | - | - |
| 4 | setup-empresa.html | Setup (cards) | - | - |
| 5 | setup-team.html | Setup (chat) | - | - |
| 6 | setup-marketing.html | Setup (cards) | - | - |
| 7 | dashboard.html | Geral | Não | Sim |
| 8 | client-list.html | Geral | Não | Não |
| 9 | client-workspace.html | Per-client | Sim | Sim |
| 10 | pipeline.html | Per-client | Sim | Sim |
| 11 | calendar.html | Per-client | Sim | Sim |
| 12 | insights.html | Per-client | Sim | Sim |
| 13 | approvals.html | Per-client | Sim | Sim |
| 14 | metrics.html | Per-client | Sim | Sim |
| 15 | webinar.html | Per-client | Sim | Sim |
| 16 | avatar-clone.html | Per-client | Sim | Sim |
| 17 | agents.html | Geral | Não | Sim |
| 18 | agent-detail.html | Geral | Não | Não |
| 19 | connections.html | Per-client | Sim | Sim |
| 20 | brandbook.html | Per-client | Sim | Sim |
| 21 | health.html | Per-client | Sim | Sim |
| 22 | client-onboarding.html | Founder | - | - |
| 23 | client-portal.html | Founder | - | - |
| 24 | admin.html | Admin (dark) | - | - |
| 25 | index.html | Redirect | - | - |

### Sub-telas que FALTAM (~30):

**Fluxo gestor (7):**
- post-detail.html — detalhe post (preview mobile + roteiro completo + scores + comparativo)
- post-editor.html — editor conteúdo (chat + preview por rede)
- client-onboarding-wizard.html — wizard onboarding NOVO cliente pelo gestor (10 passos briefing)
- billing.html — planos, tokens, consumo
- team-management.html — gerenciar equipe
- notifications.html — central notificações
- settings.html — config geral

**Config por rede (7):**
- connection-instagram.html, connection-linkedin.html, connection-tiktok.html, connection-x.html, connection-whatsapp.html, connection-heygen.html, connection-figma.html

**Config por agente (7):**
- agent-sensei.html, agent-scout.html, agent-quill.html, agent-canvas.html, agent-pulse.html, agent-metrics.html, agent-director.html

**Portal founder (3):**
- client-approve-detail.html, client-upload.html, client-brand.html

**Admin (3):**
- admin-tenant-detail.html, admin-agents.html, admin-billing.html

---

## WIREFRAMES

Todos salvos no cérebro como procedure ID `ac84e30e-4391-42fb-ba6d-434a7bd7b789` (tag: saas-social, wireframes).

Consultar via: `GET /api/v2/procedures/ac84e30e-4391-42fb-ba6d-434a7bd7b789`

Contém 10 wireframes detalhados:
1. Motor Autopilot 12 etapas (fluxo completo)
2. Ambiente Social Media (dashboard, pipeline, calendario, insights, aprovacoes)
3. Webinar Micro-cortes (upload, transcricao, cortes)
4. Avatar Clone 5 etapas (guia fotos, upload validacao, estilos, treinamento, galeria)
5. Conexões detalhadas por rede (API keys, tokens, rate limits, proxy, GoLogin)
6. Agentes configuráveis (prompt, skills, cerebro, permissoes, LLM)
7. Portal Founder completo (tarefas, WhatsApp preview, aprovacoes, metricas)
8. Anti-bot completo (GoLogin, proxy, contingencia, monitoramento)
9. Onboarding Founder 6 passos
10. Brand Book completo (bussola, arquetipos, tom, publico, concorrentes, visual)

---

## REFERÊNCIAS TÉCNICAS

- Design System: ktanadev.github.io/ktana-prototype/design-system.html
- Empresa Inteligente PJ: ktanadev.github.io/ktana-prototype/pj/landing.html
- Onboarding PJ: /pj/onboarding.html (padrão cards Sim/Não)
- Config agente: /pj/hire-ceo.html (padrão skills+permissões)
- Terminal: /tenant/terminal.html (padrão chat fullscreen)
- Tenant signup: /tenant/auth/signup.html
- shared.css: tokens, cores, fonts, componentes base

---

## CÉREBRO

URL: http://memory.ktana.ai:8000
Key: cm-2026-ktana-memory-secret-key-x9z
Agent: claude_code

Buscar:
- "HANDOFF SAAS SOCIAL" — este handoff
- "Kit Branding" / "Criativos do Futuro" — frameworks visuais
- "Empire Business" / "Acelerador de Audiência" — metodologia microprogramas
- "Instagram 2026 algorithm" — anti-IA, metadata detection
- "UI UX framework katana way" — regras de design
- "saas-social wireframes" — wireframes das telas (procedure)
