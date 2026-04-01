# HANDOFF V3 — SaaS Social Media

## PROMPT PARA PRÓXIMA SESSÃO

Cole isso ao iniciar:

> Consulte o cérebro: `POST /api/v1/agent/recall` com query "HANDOFF FINAL SESSAO 3 saas social V3 profundidade". Leia `/Users/juliocesarmacbookblack/ktana-prototype/saas-social-v3/HANDOFF.md` e os 3 docs em `/saas-social-v3/docs/` (product-deep-dive.html, user-stories.html, user-flow.html).
>
> SaaS Social V3 — 66 telas em ktanadev.github.io/ktana-prototype/saas-social-v3/
> V2 preservada em /saas-social/ (58 telas, não mexer)
>
> REGRA ABSOLUTA: profundidade > velocidade. Criar framework de detalhamento ANTES de construir. Cada história de usuário precisa ter: cenário real minuto a minuto, emoção do ator, motivação, frustração, edge case, o que acontece quando dá errado.
>
> PENDENTE CRÍTICO: (1) Refazer histórias de usuário com profundidade absurda. (2) Pipeline global = resumo por cliente. (3) Testar sidebar dinâmica em todas as telas. (4) Admin multi-tenant (várias agências). (5) Cenários críticos como telas. (6) Modo sintético quando founder some.

---

## O QUE É O PRODUTO

Sistema operacional de posicionamento digital para agências que posicionam founders como autoridade (Grupo Silva, Blank, Empire). Motor autopilot com 7 agentes IA que pesquisam, escrevem, desenham, aprovam e publicam 24/7. Modelo híbrido: IA faz volume, humano faz curadoria.

**Problema:** Tudo manual, SM posta pouco, founder some, sem controle de qualidade, não escala.
**Solução:** 7 agentes IA como funcionários digitais + copiloto por funcionário real.
**Modelo:** R$1.000/cliente/mês. Multi-tenant (várias agências).
**Emoção do dono ao abrir:** EMPOLGAÇÃO — imagina a IA guiando ele e transformando o cérebro dos líderes dele em agentes sintéticos de copilot.

---

## 5 ATORES DO SISTEMA

| Ator | Exemplo | O que faz | Copiloto IA |
|------|---------|-----------|-------------|
| **Dono** | Antonio Silva | Configura empresa, monta equipe, delega | — |
| **Gestor** | Felipe Rodrigues | Cadastra clientes, acompanha founders, gerencia SMs | Sensei |
| **SM** | Maria Silva | Revisa o que a IA produziu, aprova, edita | Quill |
| **Designer** | Rafaela Oliveira | Cria designs, templates Figma | Canvas |
| **Founder** | João Mendes | Aprova posts via WA, envia material, vê resultados | Pulse (WA) |

**Admin KTANA** = dono da plataforma, vê TODAS as agências (Grupo Silva, Blank, Empire).

---

## 4 FASES DO FLUXO

### FASE 1 — Dono configura empresa (1x)
```
landing.html → signup.html → setup-empresa.html → agents-overview.html → dashboard.html
```

### FASE 2 — Dono monta equipe
```
team-management.html → team-invite.html → team-accept-invite.html
                     → team-copilot.html → team-permissions.html
```

### FASE 3 — Gestor cadastra clientes (tenants)
```
client-onboarding-wizard.html → client-team-assign.html → agents-client.html → client-invite.html
founder: client-accept-invite.html → client-onboarding.html → client-portal.html
```

### FASE 4 — Operação per-tenant (sidebar dinâmica)
```
Global: dashboard, clientes, minha fila, empresa inteligente, config
Per-client: workspace, pipeline, calendar, aprovações, brand book, métricas, agentes(João)
```

---

## 66 TELAS (58 V2 + 8 novas V3)

### Novas V3
| Tela | Fase | Função |
|------|------|--------|
| `agents-overview.html` | 1+4 | Empresa Inteligente — produção dos 7 agentes |
| `team-invite.html` | 2 | Convidar funcionário + copiloto sugerido |
| `team-accept-invite.html` | 2 | Funcionário aceita, cria conta, vê copiloto |
| `team-copilot.html` | 2 | Vincular funcionário ↔ agente (visual pairs) |
| `team-permissions.html` | 2 | Permissões granulares toggle por toggle |
| `client-team-assign.html` | 3 | Atribuir SM/Designer/Gestor ao tenant |
| `agents-client.html` | 3+4 | Config agentes PER-CLIENT |
| Sidebar dinâmica | 4 | shared-nav-social.js reage ao data-client |

### Docs V3
| Doc | Conteúdo | Status |
|-----|----------|--------|
| `docs/product-deep-dive.html` | Dores reais, 7 agentes detalhados, jornadas minuto a minuto, edge cases, modelo negócio | OK |
| `docs/user-stories.html` | 15 histórias 5 atores | RASO — REFAZER |
| `docs/user-flow.html` | Fluxo visual 4 fases light | OK |

---

## PENDENTE CRÍTICO (PRÓXIMA SESSÃO)

### 1. HISTÓRIAS DE USUÁRIO — REFAZER COM PROFUNDIDADE ABSURDA
Framework de detalhamento por história:
- **Cenário real** minuto a minuto (7:15 Maria abre notebook com café...)
- **Emoção** em cada momento (empolgação, frustração, alívio, orgulho, medo)
- **Motivação** real (ganhar dinheiro, escalar, controlar qualidade)
- **Frustração** com o processo atual (manual, caótico, sem controle)
- **O que acontece quando dá errado** (founder some, crise, token cai, SM sai)
- **Edge cases** com resolução completa
- **Tela que resolve** com critérios de aceite detalhados
- Antonio sente EMPOLGAÇÃO: imagina IA guiando e transformando cérebro dos líderes em agentes sintéticos

### 2. PIPELINE GLOBAL VS PER-CLIENT
- Global: RESUMO por cliente (João: 12 itens | Ana: 3 | Pedro: 1)
- Per-client: kanban detalhado SÓ daquele cliente
- Hoje: kanban de todos misturados com filtro — ERRADO

### 3. SIDEBAR DINÂMICA — TESTAR TODAS AS TELAS
- `data-client="true"` → menu per-client
- Sem `data-client` → menu global
- Verificar 66 telas têm atributo correto
- "← Todos clientes" funciona

### 4. ADMIN MULTI-TENANT
- Admin vê VÁRIAS agências (Grupo Silva 400 clientes, Blank 200, Empire 150)
- Cada agência = tenant nível 1
- Dentro de cada agência: clientes = tenants nível 2
- admin.html precisa mostrar LISTA DE AGÊNCIAS, não só uma

### 5. CENÁRIOS CRÍTICOS COMO TELAS
- Founder some → modo sintético (indicador visual + toggle)
- Crise viral → framework jurídico + marketing (tela de gestão de crise?)
- Token cai → backup GoLogin (indicador em health.html)
- SM sai → redistribuição automática (Sensei notifica)

### 6. MODELO HÍBRIDO
- Quando founder some: IA continua com avatar + Brand Book
- SM aprova conteúdo sintético
- Indicador: "Modo sintético ativo — founder inativo há X dias"
- Quando founder volta: "Publicamos 14 posts enquanto você estava fora"

---

## CENÁRIOS CRÍTICOS DETALHADOS

### Founder some 2+ semanas
- Pulse escala: SM → Gestor → ativa modo sintético
- IA continua: Director gera avatar, Quill escreve com Brand Book, SM aprova
- Founder volta: resumo do que foi publicado, pede validação retroativa

### Post viraliza negativamente
- Metrics detecta em 1h (ER negativo > 5%)
- Framework de crise: pausar agendamentos → analisar causa → opções (apagar, retratar, monitorar, jurídico)
- Template de retratação pré-aprovado
- Gestor decide, founder notificado DEPOIS

### Token expira / conta cai
- Health detecta 401/403
- Publica via perfil GoLogin backup
- Notifica SM pra renovar token
- Perfil principal preservado sempre

### SM sai da empresa
- Sensei redistribui 120 clientes entre outros SMs automaticamente
- Quill já conhece cada cliente (Brand Book, histórico)
- Zero impacto pra founders

### Escala 400 → 800 clientes
- Agentes IA escalam automaticamente (só custo de tokens)
- De 6 SMs pra 9 SMs (não 12) — margem AUMENTA
- 1 SM : 90 clientes (vs 30 clientes na concorrência)

---

## REGRAS ABSOLUTAS

1. **PROFUNDIDADE > VELOCIDADE** — não fazer raso
2. **FRAMEWORK ANTES DE CONSTRUIR** — detalhar antes de codar
3. **UMA TELA POR VEZ** — navegar como usuário
4. **ZERO BOTÕES FAKE** — cada botão funciona
5. **IA-FIRST** — chat é principal
6. **PER-CLIENT** — dados do cliente selecionado
7. **R$1.000/CLIENTE** — não planos fixos
8. **MULTI-TENANT** — várias agências
9. **MODELO HÍBRIDO** — IA + humano
10. **V2 NÃO MEXER** — /saas-social/ intacta
11. **TESTAR NO BROWSER** — screenshot antes de declarar

---

## URLs

| O que | URL |
|-------|-----|
| V3 protótipo | https://ktanadev.github.io/ktana-prototype/saas-social-v3/ |
| V3 dashboard | https://ktanadev.github.io/ktana-prototype/saas-social-v3/dashboard.html |
| V3 fluxo visual | https://ktanadev.github.io/ktana-prototype/saas-social-v3/docs/user-flow.html |
| V3 deep dive | https://ktanadev.github.io/ktana-prototype/saas-social-v3/docs/product-deep-dive.html |
| V3 histórias | https://ktanadev.github.io/ktana-prototype/saas-social-v3/docs/user-stories.html |
| V2 (não mexer) | https://ktanadev.github.io/ktana-prototype/saas-social/ |
| Wireframes | procedure ID `ac84e30e` (buscar no cérebro via GET /api/v2/procedures?tag=wireframes) |
