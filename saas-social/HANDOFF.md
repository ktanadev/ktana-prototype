# HANDOFF — SaaS Social Media (Protótipo UI/UX)

## O QUE É
Sistema de posicionamento digital para agências que gerenciam presença de founders na internet. Módulo da Empresa Inteligente KTANA, também roda standalone.

## URL DO PROTÓTIPO
https://ktanadev.github.io/ktana-prototype/saas-social/
Repo: ktanadev/ktana-prototype branch main, pasta /saas-social/

## ESTADO ATUAL: 25 TELAS — INCOMPLETO

### O que existe:
- landing.html, login.html, signup.html (chat), setup-empresa.html (cards), setup-team.html (chat), setup-marketing.html (cards)
- dashboard.html, client-list.html, client-workspace.html, pipeline.html, calendar.html, insights.html
- approvals.html, metrics.html, webinar.html, avatar-clone.html, agents.html, agent-detail.html
- connections.html, brandbook.html, health.html, client-onboarding.html, client-portal.html, admin.html
- shared-sidebar.js (com client switcher), index.html (redirect)

### O que está ERRADO e precisa corrigir:
1. **Connections, calendar, webinar, avatar-clone, agents** — ainda layout estático ERP, não IA-first chat-centric
2. **Botões fictícios** — em approvals (Ajustar/Refazer não fazem nada além de mudar texto), agents (Criar novo agente → nada), connections (Configurar → nada)
3. **Faltam ~25-35 sub-telas** pra ser navegável ponta a ponta (ver lista abaixo)
4. **Ícones** — connections e calendar ainda podem ter ícones genéricos misturados
5. **Calendar** — deveria embarcar Google Calendar ou ser interativo de verdade

### TELAS QUE FALTAM CRIAR (~30):

**Fluxo do gestor/social media:**
- post-detail.html — detalhe completo de um post (preview mobile, roteiro completo, scores, comparativo concorrente)
- post-editor.html — editor de conteúdo (chat + preview por rede lado a lado)
- client-onboarding-wizard.html — wizard completo de onboarding de NOVO cliente pelo gestor (10 passos do briefing)
- billing.html — planos, tokens, consumo, faturas
- team-management.html — gerenciar equipe (adicionar/remover colaboradores, roles)
- notifications.html — central de notificações
- settings.html — configurações gerais da agência

**Sub-telas de cada conexão (7 telas):**
- connection-instagram.html — config detalhada Meta (API key, tokens, perfis, rate limits, GoLogin, proxy)
- connection-linkedin.html
- connection-tiktok.html
- connection-x.html
- connection-whatsapp.html — config Evolution + Cloud API + agente
- connection-heygen.html — config avatar, voice ID, créditos
- connection-figma.html — config templates, node IDs

**Sub-telas de agentes (7 telas):**
- agent-sensei.html, agent-scout.html, agent-quill.html, agent-canvas.html, agent-pulse.html, agent-metrics.html, agent-director.html — detalhe configurável de cada agente (skills, prompt, cérebro, permissões)

**Portal do founder (3+ telas):**
- client-approve-detail.html — detalhe completo de um conteúdo pra aprovar (preview + roteiro)
- client-upload.html — tela dedicada de upload de material
- client-brand.html — founder vê seu brand book (read-only)

**Admin KTANA (3+ telas):**
- admin-tenant-detail.html — detalhe de um tenant (métricas, config, billing)
- admin-agents.html — visão de todos os agentes rodando
- admin-billing.html — revenue, custos, MRR

## REGRAS OBRIGATÓRIAS (NUNCA VIOLAR):

1. **IA-FIRST** — toda tela interna tem chat-hero no topo. O agente conversa e mostra dados contextualmente. NUNCA formulário estático.
2. **SVGs KTANA** — viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round". NUNCA emojis, NUNCA unicode genérico.
3. **Client Switcher** — telas per-client (data-client="true") mostram dropdown de troca de cliente no topo da sidebar. Cada cliente é instância separada.
4. **Layout** — single-column max-width 760px centralizado. shared-sidebar.js à esquerda (220px). Chat hero → quick actions → conteúdo contextual.
5. **Calm Tech** — informação aparece quando necessária. Não dashboard lotado. Zero visual noise.
6. **Design System KTANA V2.0** — Zen Dots (headlines), Satoshi (body), Inter (UI). Cores: #D70030 (brand), #1D1D1F (text), #F5F5F7 (bg), #86868B (secondary). Gradient borders. Light mode.
7. **Navegável** — CADA botão leva pra algum lugar. ZERO botões fake. CADA tela tem caminho de volta.
8. **Padrão Empresa Inteligente** — clonar lógica do /pj/ e /tenant/ do protótipo. Onboarding com cards Sim/Não. Config de agentes como hire-ceo.html. Setup via chat.

## FRAMEWORKS DO PRODUTO (estudados e no cérebro):

### Framework 5 Fases (Acelerador de Audiência + Kit Branding + Código da Relevância):
1. Diagnóstico — SWOT, benchmark, brechas concorrentes
2. Identidade — Bússola posicionamento, 12 arquétipos, tom de voz, brand book, clone visual, avatar
3. Estratégia — Linha editorial, microprogramas (200+), mapa distribuição, multi-perfil
4. Produção — Motor Autopilot 12 etapas (pesquisa→pauta→roteiro→design→video→score humanidade→aprovação SM→aprovação founder→agendamento→publicação→métricas→feedback loop)
5. Métricas — Dashboard, feedback loop, saúde contas, anti-bot, contingência

### 7 Agentes IA:
Sensei (orquestrador), Scout (pesquisa), Quill (copy), Canvas (design), Pulse (WhatsApp), Metrics (analista), Director (vídeo)

### 3 Tipos de Posicionamento:
Especialista (problema-solução), Founder (visão de mundo), Creator (lifestyle/audiência)

### Atores:
- KTANA Admin (nós) → Tenant (agência: Grupo Silva, Empire, Blank) → Cliente (founder)
- Cada tenant tem: Master, Gestor CS, Social Media, Designer, Redator, Editor
- Cada founder tem: portal limitado com aprovações, tarefas, upload, relatórios

### Anti-bot:
GoLogin + proxy residencial + perfis backup warm + metadata limpa + humanização de comportamento

### Rate limits por rede:
IG: 100/24h, LI: ~50/dia, TT: 15/24h, X: 500/mês (free), WA: 8 msgs/min (Baileys)

## CÉREBRO
Tudo salvo em memory.ktana.ai:8000. Buscar por:
- "SaaS Social" para contexto geral
- "Kit Branding" / "Criativos do Futuro" para frameworks
- "Empire Business" / "Acelerador de Audiência" para metodologia
- "Instagram 2026" para anti-IA/algorithm changes
- "UI UX framework" para regras de design

## PRÓXIMOS PASSOS:
1. Corrigir as 25 telas existentes (layout, ícones, botões funcionais)
2. Criar as ~30 sub-telas faltantes
3. Testar navegação como cada persona ponta a ponta
4. Versão módulo dentro da Empresa Inteligente (/pj/dept-marketing-social.html)
5. Arquitetura técnica (VPS dedicada, cérebro clone, backup Oracle)
