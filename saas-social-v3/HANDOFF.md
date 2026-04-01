# HANDOFF V3 — SaaS Social Media

## PROMPT PARA PRÓXIMA SESSÃO

Cole isso ao iniciar:

> Consulte o cérebro: `POST /api/v1/agent/recall` com query "HANDOFF SESSAO 2 FINAL saas social". Leia também `/Users/juliocesarmacbookblack/ktana-prototype/saas-social/HANDOFF.md` e a procedure `ac84e30e` (wireframes).
>
> SaaS Social Media — 52 telas em ktanadev.github.io/ktana-prototype/saas-social/
> shared-nav-social.js é a base (copiado do shared-nav.js principal, adaptado).
>
> PROBLEMA PRINCIPAL: o sistema mistura visão do GESTOR com visão do FOUNDER. Precisa separação clara.

---

## O QUE FICOU CONFUSO (corrigir PRIMEIRO)

O protótipo mistura duas visões que deveriam ser separadas:

### VISÃO GESTOR (funcionário Grupo Silva — usa shared-nav-social.js)
- Vê TODOS os clientes via org switcher no topo
- Opera pipeline, aprova conteúdo, configura agentes, gerencia conexões
- Seleciona cliente no switcher → telas per-client mostram dados DAQUELE cliente
- Brand Book: GESTOR alimenta e edita via chat com Quill
- Telas: dashboard, client-list, client-workspace, pipeline, calendar, approvals, insights, metrics, webinar, avatar-clone, brandbook, health, connections, agents, team-management, billing, settings, post-detail, post-editor, notifications

### VISÃO FOUNDER (João Mendes — usa nav simples própria)
- Vê SÓ o dele
- Aprova via WhatsApp (1/2/3) ou portal simplificado
- Envia fotos/vídeos, responde brand book, grava vídeo
- Vê relatórios e métricas do posicionamento dele
- Brand Book: FOUNDER também envia informações (bússola, tom, fotos)
- Telas: client-portal, client-onboarding, client-approve-detail, client-upload, client-brand

### VISÃO ADMIN (KTANA — usa sidebar dark própria)
- Gerencia tenants, agentes globais, billing
- Telas: admin, admin-tenant-detail, admin-agents, admin-billing

---

## O QUE FALTA CORRIGIR

### Pipeline (pipeline.html)
- Filtro de cliente no topo está MUITO APAGADO — precisa barra destacada
- Chat do Sensei deveria perguntar "qual cliente quer ver primeiro?"
- Kanban drag&drop funciona mas precisa de mais destaque visual no filtro

### Brand Book (brandbook.html)
- É PER-CLIENT — habilitado quando seleciona um cliente
- DUAS fontes: gestor alimenta + founder envia informações
- Ambos podem setar/editar

### Setup-empresa (setup-empresa.html)
- Passo 1 (Essência) é formulário — deveria ser via CHAT (IA-first)
- Passo 2 (Metodologia builder drag&drop) funciona

### Team-management (team-management.html)
- RBAC tabela OK, mas falta: visão por role (o que cada perfil vê)
- CS precisa ver atendimento ao cliente

### Suporte
- NÃO é chat simplório branco — é chat dark com agente treinado (mesmo padrão Ambient Glow)

### Geral
- CADA tela per-client deve mostrar no topo QUAL CLIENTE está selecionado
- Org switcher funciona (5 clientes + ver todos + cadastrar)
- Profile dropdown = config empresa (settings, equipe, cobrança, conexões)
- Footer links corrigidos (Pipeline, WhatsApp, Suporte)

---

## ESTADO TÉCNICO

- **52 telas HTML** em /saas-social/
- **shared-nav-social.js** (66KB) — layout: chat dark LEFT, menu RIGHT, top bar
- **Pricing:** R$1.000/cliente/mês (não planos fixos)
- **7 agentes:** Sensei, Scout, Quill, Canvas, Pulse, Metrics, Director
- **18 chat contexts** no shared-nav-social.js (um por tela)
- **Wireframes completos:** procedure `ac84e30e` no cérebro

---

## REGRAS ABSOLUTAS (NÃO REPETIR ERROS)

1. **UMA TELA POR VEZ** — navegar como usuário final ANTES de avançar
2. **ZERO BOTÕES FAKE** — cada botão leva a tela real
3. **IA-FIRST** — chat é o elemento principal, dados aparecem contextualmente
4. **INTERATIVO** — kanban drag, calendário clicável, toggles funcionais
5. **SEPARAR GESTOR vs FOUNDER** — nunca misturar visões
6. **PER-CLIENT** — telas internas mostram dados do cliente selecionado
7. **R$1.000/CLIENTE** — não planos fixos
8. **SVGs KTANA** — viewBox 0 0 24 24, stroke, nunca emojis
9. **TESTAR NO BROWSER** — screenshot antes de declarar pronto
10. **LER WIREFRAMES ANTES DE CODAR** — procedure ac84e30e no cérebro
