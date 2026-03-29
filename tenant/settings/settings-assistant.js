// KTANA Settings Assistant — Akira (contextual chat helper)
// Injected in all settings pages

const INSIGHTS = {
  'general': [
    { msg: 'Seu fuso horario esta como America/Sao_Paulo. Se tiver equipe em outro fuso, os samurais ajustam automaticamente o horario de envio de mensagens.', delay: 2000 },
    { msg: 'Dica: ativar modo silencioso fora do horario comercial evita que samurais enviem mensagens aos seus clientes de madrugada.', delay: 0 },
  ],
  'models': [
    { msg: 'Voce esta usando Sonnet 4.6 para execucao — otimo custo-beneficio. Para decisoes criticas (acima de R$5k), recomendo Opus 4.6 que erra 3x menos.', delay: 2000 },
    { msg: 'Dica: o modo "auto" escolhe o modelo por complexidade da tarefa. 80% das acoes usam Haiku (barato), so escala pra Opus quando precisa.', delay: 0 },
  ],
  'connections': [
    { msg: 'Voce tem 5 conexoes ativas. O Gmail esta com token expirando em 12 dias — recomendo reconectar antes pra evitar interrupcao.', delay: 2000 },
    { msg: 'Vi que o HubSpot esta disponivel mas nao conectado. Seu SDR Samurai poderia gerar 40% mais leads com CRM integrado.', delay: 0 },
  ],
  'brain': [
    { msg: 'Seu cerebro tem 234 fatos e 412 conexoes. Esta saudavel. Recomendo rodar uma consolidacao a cada 30 dias pra limpar dados duplicados.', delay: 2000 },
    { msg: 'Os fatos sobre o Cliente X estao desatualizados (60+ dias). Quer que eu verifique se ainda sao validos?', delay: 0 },
  ],
  'security': [
    { msg: 'Otimo: 2FA esta ativo e sessoes expiram em 24h. Considere reduzir pra 8h se acessa de computadores compartilhados.', delay: 2000 },
    { msg: 'Nenhum incidente de seguranca nos ultimos 90 dias. Seus samurais estao dentro da alcada configurada.', delay: 0 },
  ],
  'privacy': [
    { msg: 'Seus dados estao em Sao Paulo (Brasil) com criptografia AES-256. Conforme LGPD, voce pode exportar tudo a qualquer momento.', delay: 2000 },
    { msg: 'Recomendo revisar as permissoes de acesso a emails trimestralmente. Ultimo review foi ha 45 dias.', delay: 0 },
  ],
  'billing': [
    { msg: 'Voce esta no plano GUNDAN (R$297/mes) usando 62% das acoes. Se continuar crescendo, vale migrar pro BAKUFU no proximo trimestre.', delay: 2000 },
    { msg: 'O CFO Samurai gasta R$420/mes em tokens mas gera R$10.6k de economia. ROI de 25x so nesse agente.', delay: 0 },
  ],
  'notifications': [
    { msg: 'Voce recebe em media 12 notificacoes por dia. Recomendo agrupar em 2 briefings (manha e noite) — Calm Technology.', delay: 2000 },
    { msg: 'As notificacoes de aprovacao sao as mais importantes. Mantenha push ativo pra essas e desative o resto.', delay: 0 },
  ],
  'api': [
    { msg: 'Sua API key tem 90 dias. Recomendo rotacionar a cada 60 dias por seguranca. Posso automatizar isso.', delay: 2000 },
    { msg: 'Rate limit atual: 100 req/min. Se integrar com sistema externo de alta frequencia, posso aumentar sob demanda.', delay: 0 },
  ],
  'ethics': [
    { msg: 'A constitution tem 24 regras inviolaveis. Nenhuma foi violada nos ultimos 90 dias. Os samurais estao alinhados.', delay: 2000 },
    { msg: 'Recomendo adicionar uma regra sobre comunicacao em periodo eleitoral se sua empresa atua no setor publico.', delay: 0 },
  ],
};

function detectPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop().replace('.html', '');
  return INSIGHTS[file] ? file : 'general';
}

function createAssistant() {
  const page = detectPage();
  const msgs = INSIGHTS[page] || INSIGHTS['general'];

  const html = `
  <style>
    .ka-fab { position: fixed; bottom: 24px; right: 24px; z-index: 100; }
    .ka-btn { width: 52px; height: 52px; border-radius: 50%; background: #1D1D1F; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.15); transition: all 0.2s; }
    .ka-btn:hover { transform: scale(1.05); box-shadow: 0 6px 28px rgba(0,0,0,0.2); }
    .ka-btn svg { color: #FFF; }
    .ka-badge { position: absolute; top: -2px; right: -2px; width: 18px; height: 18px; border-radius: 50%; background: #D70030; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; color: #FFF; border: 2px solid #F5F5F7; }

    .ka-panel { position: fixed; bottom: 88px; right: 24px; width: 340px; max-height: 460px; background: #FFF; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px rgba(0,0,0,0.12); z-index: 100; display: none; flex-direction: column; overflow: hidden; animation: kaSlideUp 0.25s cubic-bezier(0.25,0.1,0.25,1); }
    .ka-panel.open { display: flex; }
    @keyframes kaSlideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

    .ka-header { padding: 14px 18px; border-bottom: 0.5px solid rgba(0,0,0,0.04); display: flex; align-items: center; gap: 10px; }
    .ka-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(215,0,48,0.08); display: flex; align-items: center; justify-content: center; font-family: 'Zen Dots', cursive; font-size: 10px; color: #D70030; flex-shrink: 0; }
    .ka-name { font-family: 'Satoshi', sans-serif; font-size: 13px; font-weight: 600; color: #1D1D1F; }
    .ka-status { font-family: 'Inter', sans-serif; font-size: 10px; color: #30D158; }
    .ka-close { margin-left: auto; width: 28px; height: 28px; border-radius: 50%; background: rgba(0,0,0,0.04); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #86868B; }

    .ka-msgs { flex: 1; overflow-y: auto; padding: 16px; max-height: 300px; }
    .ka-msg { margin-bottom: 12px; }
    .ka-bubble { font-family: 'Satoshi', sans-serif; font-size: 13px; line-height: 1.6; color: #1D1D1F; background: #F5F5F7; padding: 10px 14px; border-radius: 14px; border-bottom-left-radius: 4px; }
    .ka-bubble strong { color: #D70030; font-weight: 600; }
    .ka-user-bubble { font-family: 'Satoshi', sans-serif; font-size: 13px; line-height: 1.6; color: #F5F5F7; background: #1D1D1F; padding: 10px 14px; border-radius: 14px; border-bottom-right-radius: 4px; margin-left: auto; max-width: 85%; }
    .ka-time { font-family: 'Inter', sans-serif; font-size: 10px; color: #AEAEB2; margin-top: 3px; }

    .ka-input { padding: 12px 16px; border-top: 0.5px solid rgba(0,0,0,0.04); display: flex; gap: 8px; align-items: center; }
    .ka-input input { flex: 1; padding: 8px 12px; background: #F5F5F7; border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; font-family: 'Satoshi', sans-serif; font-size: 13px; color: #1D1D1F; outline: none; }
    .ka-input input::placeholder { color: #AEAEB2; }
    .ka-input input:focus { border-color: rgba(215,0,48,0.3); }
    .ka-send { width: 32px; height: 32px; border-radius: 8px; background: #D70030; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #FFF; flex-shrink: 0; }

    @media (max-width: 480px) { .ka-panel { right: 12px; left: 12px; width: auto; bottom: 80px; } }
  </style>

  <div class="ka-fab" id="kaFab">
    <button class="ka-btn" onclick="toggleKA()">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <span class="ka-badge" id="kaBadge">${msgs.length}</span>
    </button>
  </div>

  <div class="ka-panel" id="kaPanel">
    <div class="ka-header">
      <div class="ka-avatar">A</div>
      <div>
        <div class="ka-name">Akira — Conselheiro</div>
        <div class="ka-status">Analisando suas configuracoes...</div>
      </div>
      <button class="ka-close" onclick="toggleKA()">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="ka-msgs" id="kaMsgs"></div>
    <div class="ka-input">
      <input type="text" placeholder="Pergunte sobre essa configuracao..." id="kaInput" onkeydown="if(event.key==='Enter')sendKA()">
      <button class="ka-send" onclick="sendKA()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  </div>`;

  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);

  // Load initial messages with delay
  const container = document.getElementById('kaMsgs');
  msgs.forEach((m, i) => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'ka-msg';
      el.innerHTML = `<div class="ka-bubble">${m.msg}</div><div class="ka-time">Akira · agora</div>`;
      el.style.animation = 'kaSlideUp 0.25s ease';
      container.appendChild(el);
      container.scrollTop = container.scrollHeight;
    }, m.delay || (i * 1500 + 1000));
  });
}

let kaOpen = false;
function toggleKA() {
  kaOpen = !kaOpen;
  document.getElementById('kaPanel').classList.toggle('open', kaOpen);
  if (kaOpen) document.getElementById('kaBadge').style.display = 'none';
}

function sendKA() {
  const input = document.getElementById('kaInput');
  const val = input.value.trim();
  if (!val) return;

  const container = document.getElementById('kaMsgs');

  // User message
  const userEl = document.createElement('div');
  userEl.className = 'ka-msg';
  userEl.innerHTML = `<div class="ka-user-bubble">${val}</div><div class="ka-time" style="text-align:right;">Voce · agora</div>`;
  container.appendChild(userEl);
  input.value = '';

  // Simulate response
  setTimeout(() => {
    const respEl = document.createElement('div');
    respEl.className = 'ka-msg';
    respEl.innerHTML = `<div class="ka-bubble">Boa pergunta! Deixa eu analisar... Com base no seu historico e no que os melhores clientes fazem, recomendo manter essa configuracao como esta. Se quiser, posso fazer um teste A/B com uma variacao por 7 dias.</div><div class="ka-time">Akira · agora</div>`;
    respEl.style.animation = 'kaSlideUp 0.25s ease';
    container.appendChild(respEl);
    container.scrollTop = container.scrollHeight;
  }, 1200);

  container.scrollTop = container.scrollHeight;
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createAssistant);
} else {
  createAssistant();
}
