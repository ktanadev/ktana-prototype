TEMPLATE: Todas as telas internas do SaaS Social seguem este padrão:

LAYOUT:
- body: #F5F5F7 (light mode)
- shared-sidebar.js injetado (220px esquerda)
- Main area: max-width 760px centralizada
- Chat hero card no topo (agente conversando com contexto da tela)
- Quick actions abaixo do chat (links SVG pras sub-áreas)
- Conteúdo contextual abaixo (o que o agente mostrou na conversa)

REGRAS:
1. O CHAT é o elemento principal — o usuário pede, o agente responde com dados
2. Não existe "tela de métricas" separada — o agente MOSTRA métricas quando pedido
3. Não existe "formulário de config" — o agente PERGUNTA e configura via conversa
4. Botões de ação SEMPRE levam pra algum lugar ou executam algo
5. SVGs KTANA apenas (stroke, 24x24, 1.5 width)
6. Calm Tech: só mostra o necessário, o resto aparece quando pedido
