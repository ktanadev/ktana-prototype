# Auditoria UI/UX — KTANA Prototype
**Data:** 29/03/2026 | **Auditor:** Claude QA

---

## RESUMO

| Categoria | Quantidade |
|-----------|-----------|
| Links quebrados (404) | 3 |
| Fluxos quebrados | 2 |
| Telas SEM estado de erro | 22 |
| Telas SEM estado de loading | 22 |
| Telas SEM navegacao "Voltar" | 3 |
| Paginas com botoes sem acao | 8 (94 botoes mortos) |

---

## 1. LINKS QUEBRADOS (CRITICO)

| Origem | Link | Problema |
|--------|------|----------|
| `pf/auth/signup.html` | "Criar conta PJ" | Aponta para `pj/auth/signup.html` que NAO existe. Corrigir para `../../tenant/auth/signup.html` |
| `pf/evolution.html` | "Falar com mentor" | Path relativo errado `pf/chat.html` resolve para `pf/pf/chat.html`. Corrigir para `chat.html` |
| `pf/psychology.html` | "Falar com mentor" | Mesmo erro — `pf/chat.html` resolve para `pf/pf/chat.html`. Corrigir para `chat.html` |

---

## 2. FLUXOS QUEBRADOS (CRITICO)

| Fluxo | De | Para | Problema |
|-------|-----|------|----------|
| Tenant Signup | `tenant/onboarding/team.html` | `tenant/onboarding/brand.html` | Team nao linka para Brand — pula direto |
| Tenant Forgot | `tenant/auth/forgot.html` | `tenant/auth/reset.html` | Forgot redireciona para `verify.html` (signup) em vez de `reset.html` |

---

## 3. ESTADOS DE ERRO FALTANDO (ALTO)

### PF Auth (3 telas sem erro)
- `pf/auth/signup.html` — Falta: email ja cadastrado, senha fraca, campos vazios, email invalido
- `pf/auth/verify.html` — Falta: codigo errado (shake+vermelho), codigo expirado, limite tentativas
- `pf/auth/forgot.html` — Falta: email nao encontrado

### Tenant Auth (6 telas sem erro)
- `tenant/auth/login.html` — Falta: email/senha incorretos (ZERO feedback)
- `tenant/auth/verify.html` — Falta: link expirado, email errado
- `tenant/auth/forgot.html` — Falta: email nao encontrado + redireciona errado
- `tenant/auth/reset.html` — Falta: senhas nao coincidem, link expirado
- `tenant/auth/twofa.html` — Falta: codigo errado, expirado, "Reenviar" sem funcionalidade
- `tenant/auth/kyc.html` — Falta: camera falhou, documento ilegivel, sem opcao pular

### Onboarding (13 telas sem erro)
- `pf/onboarding.html` — Falta: input desabilitado sem indicacao visual
- `pj/onboarding.html` — Falta: validacao de selecao
- `tenant/onboarding/*` — 11 telas sem nenhum estado de erro

---

## 4. ESTADOS DE LOADING FALTANDO (ALTO)

22 telas de auth/onboarding sem indicador de carregamento:
- TODOS os auth PF (signup, verify, forgot)
- TODOS os auth Tenant (signup, login, verify, forgot, reset, twofa, kyc)
- TODOS os onboarding (PF, PJ, 11 Tenant)

**Unica excecao:** `pf/auth/login.html` tem spinner no botao (funciona)

---

## 5. NAVEGACAO "VOLTAR" FALTANDO (MEDIO)

| Tela | Problema |
|------|----------|
| `pf/auth/verify.html` | Sem botao voltar — usuario fica preso se errou email |
| `tenant/auth/reset.html` | Sem link para voltar ao login |
| `tenant/auth/kyc.html` | Sem opcao pular — usuario fica preso sem documento |

---

## 6. BOTOES SEM ACAO (MEDIO)

| Pagina | Botoes mortos | Contexto |
|--------|-------------|----------|
| `pf/solutions.html` | 38 | Cards de solucoes sem onclick |
| `pf/connect.html` | 23 | Botoes de conexao sem acao |
| `tenant/dashboard/insights.html` | 10 | Acoes sem funcionalidade |
| `tenant/dashboard/urgent.html` | 8 | Botoes de urgencia sem acao |
| `pf/settings.html` | 7 | Toggles sem funcionalidade |
| `tenant/onboarding/connect.html` | 5 | Conexoes sem acao |
| `tenant/onboarding/plans.html` | 4 | Selecao de plano parcial |
| `pf/activity.html` | 3 | Filtros sem funcionalidade |

---

## 7. FRICOES UX IDENTIFICADAS (MEDIO)

| Tela | Friccao | Recomendacao |
|------|---------|-------------|
| `pf/auth/signup.html` | Foto no cadastro | Mover para perfil pos-cadastro |
| `pf/auth/signup.html` | Areas da vida no signup | Mover para onboarding (Yumi ja faz isso) |
| `tenant/auth/kyc.html` | KYC no auth | Mover para pos-onboarding |
| `pf/onboarding.html` | Sem botao sair/voltar | Adicionar opcao cancelar |
| Tenant onboarding | 8+ telas sem progress claro | Consolidar ou mostrar "passo X de Y" |

---

## 8. COMPONENTES UI A CRIAR

Para resolver todos os problemas, precisam ser criados estes componentes reutilizaveis:

### 8.1 Error Toast / Inline Error
- Mensagem de erro inline abaixo de inputs
- Toast flutuante para erros gerais
- Shake animation para inputs invalidos
- Cor: #FF453A (ja usada no pf/login)

### 8.2 Loading Button
- Spinner dentro do botao ao submeter
- Botao desabilitado durante loading
- Texto muda para "Processando..." ou similar

### 8.3 Success State
- Check verde com mensagem de confirmacao
- Animacao de transicao suave
- Auto-redirect apos X segundos

### 8.4 Back Navigation
- Chevron + "Voltar" no topo esquerdo
- Consistente em todas as telas de fluxo

### 8.5 Progress Indicator
- Steps numerados "Passo X de Y"
- Barra visual com progresso
- Labels das etapas visiveis

### 8.6 Empty State
- Ilustracao + mensagem + CTA
- Para listas sem dados, dashboards vazios

### 8.7 Validation Feedback
- Tempo real nos inputs (email formato, senha forca)
- Check verde quando valido
- X vermelho quando invalido

### 8.8 Confirmation Dialog
- Modal de confirmacao para acoes destrutivas
- "Tem certeza?" com botoes Cancelar/Confirmar

---

## 9. PLANO DE CORRECAO POR PRIORIDADE

### Sprint 1 — Critico (quebra fluxo)
1. Corrigir 3 links quebrados (signup PJ, evolution, psychology)
2. Corrigir fluxo tenant/forgot -> reset (nao verify)
3. Corrigir fluxo tenant/onboarding team -> brand

### Sprint 2 — Alto (usuario sem feedback)
4. Criar error states em 22 telas
5. Criar loading states em 22 telas
6. Adicionar back nav em 3 telas

### Sprint 3 — Medio (friccao/polish)
7. Remover foto do signup PF
8. Mover areas da vida do signup para onboarding
9. Ativar botoes mortos (ou adicionar estado "em breve")
10. Adicionar progress indicator no onboarding

---

*Gerado automaticamente pela auditoria QA UI/UX do KTANA Prototype*
