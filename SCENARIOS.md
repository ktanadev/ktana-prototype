# KTANA Assistant — Cenários de Uso Completos

## ATOR 1: DONO PJ (CEO de Software House)

### Cenário 1.1: Primeiro acesso (nunca usou)
- [x] Ve landing page → entende proposta de valor
- [x] Clica "Comecar gratis" → signup
- [x] Cadastra com Google ou email+senha
- [x] Verifica email (se cadastrou por email)
- [x] Escolhe plano (RONIN free ou pago)
- [x] Se pago: checkout com cartao/PIX/boleto
- [x] Conversa com Yumi (entrevista 4 perguntas)
- [x] Yumi propoe departamentos + equipe
- [x] Ajusta equipe (add/remove samurais)
- [x] Configura cada samurai (9 campos)
- [x] Conecta Gmail + WhatsApp (minimo)
- [x] Revisa + aceita LGPD
- [x] Ativa empresa (animacao de loading)
- [x] Cai no dashboard (empty state - samurais iniciando)

### Cenário 1.2: Dia-a-dia normal
- [x] Abre dashboard → ve briefing do CEO
- [x] Ve aprovacoes pendentes
- [x] Aprova/rejeita/edita cada uma
- [x] Ve equipe com status
- [x] Clica num samurai → chat
- [x] Conversa com samurai sobre tarefa
- [x] Ve feed de atividade

### Cenário 1.3: Urgencia
- [x] Dashboard com banner vermelho pulsando
- [x] Acao critica requer decisao imediata
- [x] Cross-agent: Hana interceptou email, Haruki confirma atraso

### Cenário 1.4: Aprovacao detalhada
- [x] Lista de aprovacoes com urgencia
- [x] Detalhe: contexto, historico, rascunho, recomendacao
- [x] Editar rascunho antes de aprovar
- [x] Nenhuma aprovacao pendente (empty state)

### Cenário 1.5: Gerenciar equipe
- [x] Lista de samurais por departamento
- [x] Organograma visual
- [x] Contratar novo: nivel → cargo → config → review
- [ ] Pausar samurai (estado pausado no perfil)
- [ ] Demitir samurai (confirmacao + consequencias)
- [ ] Promover samurai (mudar nivel)

### Cenário 1.6: Inspecionar samurai
- [x] Chat direto
- [x] Feed de atividade com timeline
- [x] Perfil completo (funcao, refs, atribuicoes, alcada, rotinas)
- [x] Memoria (facts, preferencias, padroes)
- [x] Metricas (KPIs, trends, alinhamento, uso por acao)
- [x] Config (editar, promover, pausar, demitir)
- [x] Metacognicao (auto-reflexao, gaps, ajustes)

### Cenário 1.7: Escritorio virtual
- [x] Canvas dark com nodes animados
- [x] Hover: tooltip com acao atual
- [x] Click: vai pro chat do samurai
- [ ] Conexoes animadas (particulas viajando)
- [ ] Samurai pausado aparece diferente

### Cenário 1.8: Perfil cognitivo
- [x] Tipo Jung (ENTJ) com confianca
- [x] Padroes de decisao, comunicacao, energia
- [x] Alinhamento por samurai
- [x] Padroes detectados (decisao, delegacao, pontos cegos)
- [x] Knowledge graph (nodes, edges, clusters)
- [ ] Editar perfil (corrigir algo que o sistema inferiu errado)

### Cenário 1.9: Configuracoes
- [x] Geral (idioma, fuso, canal, horario)
- [x] Inteligencia (modo economia/equilibrio/qualidade)
- [x] Conexoes (conectadas + disponiveis)
- [x] Cerebro (facts, regras, consolidacao, backup)
- [x] Seguranca (2FA, KYC, tokens, kill switch)
- [x] Privacidade (LGPD, consentimento, exportar, deletar)
- [x] Plano & Uso (plano, uso, custo por samurai)
- [x] Notificacoes (canais, frequencia)
- [x] API & Webhooks
- [x] Etica & Regras (constitution, disclaimers)

### Cenário 1.10: Segundo login
- [x] Login com email+senha
- [x] 2FA (codigo 6 digitos)
- [x] Cai no dashboard (com atividade)

### Cenário 1.11: Recuperar senha
- [x] Esqueci senha → email
- [x] Reset senha → nova senha com strength bar

### Cenário 1.12: KYC
- [x] Documento (CNH/RG/Passaporte)
- [x] Selfie com liveness
- [x] Confirmacao (3 checks)

---

## ATOR 2: USUARIO PF (Diretora Marketing, 38 anos)

### Cenário 2.1: Primeiro acesso
- [x] Ve landing PF → entende que e pessoal
- [x] Signup
- [x] Escolhe plano
- [x] Seleciona areas da vida (8 disponiveis)
- [x] Configura mentor por area (nome, referencias, tom)
- [x] Escolhe especialistas dentro da area
- [x] Conecta ferramentas
- [x] Revisa + LGPD
- [x] Ativa

### Cenário 2.2: Dia-a-dia
- [x] Dashboard (mesmo do PJ mas com linguagem pessoal?)
- [ ] Dashboard PF especifico (metas pessoais, check-ins, progresso)
- [x] Chat com mentor/especialista
- [x] Aprovacoes (coach sugere exercicio, aprovar?)

### Cenário 2.3: Areas individuais
- [x] Saude (mentor + especialistas)
- [x] Mente & Emocional
- [x] Carreira
- [x] Financas Pessoais
- [ ] Proposito (pagina dedicada)
- [ ] Produtividade (pagina dedicada)
- [ ] Relacionamentos (pagina dedicada)
- [ ] Casa (pagina dedicada)

### Cenário 2.4: Disclaimers
- [x] Saude: "nao substitui profissional"
- [x] Mental: "procure CVV 188"
- [x] Financeiro: "nao substitui CVM/contador"

---

## ATOR 3: ADMIN MASTER (God Mode)

### Cenário 3.1: Monitorar plataforma
- [x] Overview: tenants, samurais, acoes, MRR, uptime
- [x] Top tenants por atividade
- [x] System status (workers, memory, redis, postgres, LLM)
- [x] Atividade global em tempo real

### Cenário 3.2: Agent Flow
- [x] Canvas com todos os tenants como clusters
- [ ] Zoom in/out entre tenant e agentes
- [ ] Particulas viajando entre nodes

### Cenário 3.3: Gerenciar tenants
- [x] Lista de tenants com plano, samurais, acoes, health
- [x] Detalhe do tenant (info, samurais, atividade)
- [x] Agentes do tenant
- [x] Atividade do tenant
- [x] Cerebro do tenant
- [ ] Pausar tenant
- [ ] Suspender tenant
- [ ] Impersonar tenant (ver dashboard como ele)

### Cenário 3.4: Agentes globais
- [x] Lista de todos os agentes de todos os tenants
- [x] Detalhe de um agente especifico
- [ ] Forcar parar worker de um agente

### Cenário 3.5: System health detalhado
- [x] Overview (CPU, RAM, disk, services, LLM)
- [x] Workers detail
- [x] Memory API detail
- [ ] Alertas ativos
- [ ] Historico de incidentes

### Cenário 3.6: Billing
- [x] MRR, ARR, custos, margem
- [x] Receita por plano
- [x] Custos de tokens
- [ ] Churn rate
- [ ] LTV medio

### Cenário 3.7: Compliance
- [x] LGPD requests
- [x] Audit logs
- [ ] KYC status por tenant
- [ ] Incidentes de seguranca

### Cenário 3.8: Catalogo
- [x] Lista de cargos com dept, nivel, tipo
- [x] Editar cargo
- [x] Atribuicoes do cargo
- [ ] Criar novo cargo
- [ ] Desativar cargo

### Cenário 3.9: Config do sistema
- [x] Ambientes (dev/staging/prod)
- [x] Constitution (regras eticas)
- [x] LLM defaults
- [x] Admin users
- [ ] Feature flags
- [ ] Rate limits globais

---

## GAPS IDENTIFICADOS (telas faltando)

### CRITICOS (quebram fluxo):
1. Dashboard PF especifico (linguagem pessoal, metas, check-ins)
2. PF areas restantes (proposito, produtividade, relacionamentos, casa)
3. Pausar/demitir samurai (estados no perfil)
4. Impersonar tenant (admin)

### IMPORTANTES (experiencia incompleta):
5. Editar perfil cognitivo (corrigir inferencia errada)
6. Escritorio: samurai pausado visual diferente
7. Escritorio: particulas animadas nas conexoes
8. Admin: pausar/suspender tenant
9. Admin: alertas ativos + historico incidentes
10. Admin: criar novo cargo no catalogo
11. Admin: feature flags + rate limits
12. PF: disclaimer em cada area individual

### NICE TO HAVE (V1.1):
13. Onboarding: estado de "typing" da Yumi
14. Dashboard: notificacao push simulada
15. Agent chat: avatar da personagem KTANA
16. Admin: zoom in/out no agent flow
