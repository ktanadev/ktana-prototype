/**
 * KTANA Social — Shared Navigation + Chat Panel
 * Layout: Top bar + Chat dark LEFT + Menu RIGHT (slide-in hamburger)
 * Padrão idêntico ao shared-nav.js da Empresa Inteligente
 *
 * body attributes:
 *   data-active="dashboard" — marca item ativo no menu
 *   data-client="true" — mostra client switcher no topo do chat
 *   data-agent="Sensei" — nome do agente no chat (default: Sensei)
 *   data-agent-context="Dashboard — 7 agentes" — contexto do agente
 */
(function() {
  const active = document.body.dataset.active || '';
  const showClient = document.body.dataset.client === 'true';
  const agentName = document.body.dataset.agent || 'Sensei';
  const agentCtx = document.body.dataset.agentContext || '';

  // --- TOP BAR ---
  const topbar = `
  <nav class="ss-topbar">
    <a href="landing.html" class="ss-logo">KTANA</a>
    <span class="ss-org">Social <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
    <div class="ss-topbar-right">
      <a href="notifications.html" class="ss-topbar-btn ss-suporte"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg></a>
      <div class="ss-topbar-avatar" onclick="document.querySelector('.ss-menu').classList.toggle('open')">AS</div>
      <button class="ss-hamburger" onclick="document.querySelector('.ss-menu').classList.toggle('open')"><svg viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>
    </div>
  </nav>`;

  // --- CLIENT SWITCHER (inside chat panel) ---
  const clientSwitcher = showClient ? `
    <div class="ss-client-sw">
      <div class="ss-cl-current" onclick="this.nextElementSibling.classList.toggle('open')">
        <div class="ss-cl-av">JM</div>
        <div class="ss-cl-info"><div class="ss-cl-name">Joao Mendes</div><div class="ss-cl-sub">CEO TechFlow — Fase 4</div></div>
        <svg viewBox="0 0 24 24" class="ss-cl-chev"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="ss-cl-dropdown">
        <input type="text" class="ss-cl-input" placeholder="Buscar cliente...">
        <div class="ss-cl-item active"><div class="ss-cl-av">JM</div><span>Joao Mendes</span><span class="ss-cl-phase">F4</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">AC</div><span>Ana Costa</span><span class="ss-cl-phase">F2</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">PS</div><span>Pedro Souza</span><span class="ss-cl-phase">F1</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">MF</div><span>Maria Fernandes</span><span class="ss-cl-phase">F5</span></div>
        <a href="client-list.html" class="ss-cl-all">Ver todos os 400 clientes</a>
      </div>
    </div>` : '';

  // --- CHAT PANEL (LEFT, dark, fixed) ---
  const chatPanel = `
  <aside class="ss-chat" id="ssChatPanel">
    <div class="ss-chat-glow">
      <div class="ss-glow-orb"></div><div class="ss-glow-orb"></div><div class="ss-glow-orb"></div>
    </div>
    <div class="ss-chat-inner">
      <div class="ss-chat-header">
        <div class="ss-chat-av"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div><div class="ss-chat-nm">${agentName}</div><div class="ss-chat-st"><span class="ss-chat-dot"></span> Online</div></div>
      </div>
      ${clientSwitcher}
      <div class="ss-chat-msgs" id="ssChatMsgs"></div>
      <div class="ss-chat-shortcuts" id="ssChatShortcuts"></div>
      <div class="ss-chat-input-outer">
        <div class="ss-chat-input-glow"></div>
        <div class="ss-chat-input-spin"></div>
        <div class="ss-chat-input-card">
          <textarea rows="1" placeholder="Fale com ${agentName}..."></textarea>
          <div class="ss-chat-input-footer">
            <button class="ss-chat-add"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>
            <select class="ss-chat-agent"><option>Sensei</option><option>Scout</option><option>Quill</option><option>Canvas</option><option>Pulse</option><option>Metrics</option><option>Director</option></select>
            <button class="ss-chat-send"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>
          </div>
        </div>
      </div>
    </div>
  </aside>`;

  function isA(id) { return active === id ? 'ss-mi active' : 'ss-mi'; }

  // --- MENU (RIGHT, slide-in) ---
  const menu = `
  <aside class="ss-menu" id="ssMenu">
    <div class="ss-menu-header">
      <span class="ss-menu-title">Menu</span>
      <button class="ss-menu-close" onclick="this.closest('.ss-menu').classList.remove('open')"><svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>
    <div class="ss-menu-body">
      <div class="ss-ms">
        <div class="ss-ms-label">Painel</div>
        <a class="${isA('dashboard')}" href="dashboard.html"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Visao geral</a>
        <a class="${isA('clients')}" href="client-list.html"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Clientes <span class="ss-badge">400</span></a>
      </div>
      ${showClient ? `
      <div class="ss-ms">
        <div class="ss-ms-label">Cliente selecionado</div>
        <a class="${isA('workspace')}" href="client-workspace.html"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Visao Geral</a>
        <a class="${isA('brandbook')}" href="brandbook.html"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> Brand Book</a>
        <a class="${isA('pipeline')}" href="pipeline.html"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> Pipeline</a>
        <a class="${isA('calendar')}" href="calendar.html"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg> Calendario</a>
        <a class="${isA('insights')}" href="insights.html"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg> Insights</a>
        <a class="${isA('approvals')}" href="approvals.html"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Aprovacoes</a>
        <a class="${isA('metrics')}" href="metrics.html"><svg viewBox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"/></svg> Metricas</a>
        <a class="${isA('webinar')}" href="webinar.html"><svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> Webinars</a>
        <a class="${isA('avatar')}" href="avatar-clone.html"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Avatar</a>
        <a class="${isA('connections')}" href="connections.html"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33"/></svg> Conexoes</a>
        <a class="${isA('health')}" href="health.html"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Saude</a>
      </div>` : ''}
      <div class="ss-ms">
        <div class="ss-ms-label">Sistema</div>
        <a class="${isA('agents')}" href="agents.html"><svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6"/></svg> Agentes</a>
        <a class="${isA('team')}" href="team-management.html"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Equipe</a>
        <a class="${isA('notifications')}" href="notifications.html"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg> Notificacoes</a>
        <a class="${isA('billing')}" href="billing.html"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Cobranca</a>
        <a class="${isA('settings')}" href="settings.html"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33"/></svg> Config</a>
      </div>
    </div>
    <div class="ss-menu-footer">
      <div class="ss-menu-user">
        <div class="ss-menu-user-av">AS</div>
        <div><div class="ss-menu-user-name">Antonio Silva</div><div class="ss-menu-user-role">Master Admin</div></div>
      </div>
    </div>
  </aside>`;

  // --- STYLES ---
  const style = document.createElement('style');
  style.textContent = `
    /* TOP BAR */
    .ss-topbar{position:fixed;top:0;left:0;right:0;z-index:50;height:48px;display:flex;align-items:center;padding:0 20px;background:rgba(245,245,247,0.72);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-bottom:0.5px solid rgba(0,0,0,0.06)}
    .ss-logo{font-family:'Zen Dots',cursive;font-size:14px;color:#D70030;text-decoration:none}
    .ss-org{font-family:'Inter',sans-serif;font-size:12px;color:#86868B;margin-left:8px;display:flex;align-items:center;gap:2px;cursor:pointer}
    .ss-org svg{width:12px;height:12px;stroke:#86868B;fill:none;stroke-width:1.5}
    .ss-topbar-right{margin-left:auto;display:flex;align-items:center;gap:10px}
    .ss-topbar-btn{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.15s;color:#86868B}
    .ss-topbar-btn:hover{background:rgba(0,0,0,0.04)}
    .ss-topbar-btn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .ss-suporte{background:rgba(0,0,0,0.03);border-radius:980px;padding:0 14px;width:auto;font-family:'Inter',sans-serif;font-size:12px;gap:6px;height:32px}
    .ss-topbar-avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;cursor:pointer}
    .ss-hamburger{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;color:#1D1D1F;padding:0}
    .ss-hamburger svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}

    /* CHAT PANEL — LEFT, dark, fixed */
    .ss-chat{width:380px;position:fixed;left:0;top:48px;bottom:0;background:#0A0A0A;z-index:10;display:flex;flex-direction:column;overflow:hidden}
    .ss-chat-glow{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}
    .ss-glow-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(60px)}
    .ss-glow-orb:nth-child(1){width:55%;height:45%;top:0;left:-10%;background:radial-gradient(ellipse at center,rgba(215,0,48,0.22) 0%,transparent 70%);animation:_sod1 10s ease-in-out infinite}
    .ss-glow-orb:nth-child(2){width:45%;height:40%;top:20%;right:-10%;background:radial-gradient(ellipse at center,rgba(160,15,5,0.18) 0%,transparent 70%);animation:_sod2 14s ease-in-out infinite}
    .ss-glow-orb:nth-child(3){width:40%;height:45%;bottom:-5%;left:20%;background:radial-gradient(ellipse at center,rgba(220,80,25,0.15) 0%,transparent 70%);animation:_sod3 12s ease-in-out infinite}
    @keyframes _sod1{0%,100%{transform:translate(0,0)}33%{transform:translate(8%,6%)}66%{transform:translate(-4%,-4%)}}
    @keyframes _sod2{0%,100%{transform:translate(0,0)}50%{transform:translate(-10%,5%)}}
    @keyframes _sod3{0%,100%{transform:translate(0,0)}33%{transform:translate(6%,-6%)}66%{transform:translate(-5%,3%)}}
    .ss-chat-inner{position:relative;z-index:1;display:flex;flex-direction:column;height:100%;padding:16px 18px}
    .ss-chat-header{display:flex;align-items:center;gap:10px;margin-bottom:16px}
    .ss-chat-av{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#D70030,#8B0000);display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .ss-chat-av svg{width:16px;height:16px;stroke:#FFF;fill:none;stroke-width:1.5}
    .ss-chat-nm{font-family:'Zen Dots',cursive;font-size:12px;color:#F5F5F7}
    .ss-chat-st{font-family:'Inter',sans-serif;font-size:10px;color:#34C759;display:flex;align-items:center;gap:4px}
    .ss-chat-dot{width:5px;height:5px;border-radius:50%;background:#34C759;animation:_sp 2s infinite}
    @keyframes _sp{0%,100%{opacity:1}50%{opacity:0.3}}
    .ss-chat-msgs{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:10px;margin-bottom:12px}
    .ss-chat-shortcuts{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}

    /* Input with glow + spinning border */
    .ss-chat-input-outer{position:relative;border-radius:14px;margin-top:auto}
    .ss-chat-input-glow{position:absolute;top:50%;left:50%;width:110%;height:180%;transform:translate(-50%,-50%);pointer-events:none;z-index:0;filter:blur(30px);opacity:0.65;background:radial-gradient(ellipse 50% 50% at 30% 40%,rgba(215,0,48,0.45) 0%,transparent 70%),radial-gradient(ellipse 45% 50% at 70% 50%,rgba(160,15,5,0.35) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 50% 55%,rgba(220,80,25,0.25) 0%,transparent 60%);animation:_sgm 8s ease-in-out infinite}
    @keyframes _sgm{0%{transform:translate(-50%,-50%) rotate(0)}25%{transform:translate(-45%,-53%) rotate(2deg)}50%{transform:translate(-55%,-47%) rotate(-1deg)}75%{transform:translate(-48%,-52%) rotate(1.5deg)}100%{transform:translate(-50%,-50%) rotate(0)}}
    .ss-chat-input-spin{position:absolute;inset:-1px;border-radius:15px;z-index:1;overflow:hidden;pointer-events:none}
    .ss-chat-input-spin::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(transparent 30%,rgba(140,10,5,0.6) 38%,rgba(215,0,48,0.8) 42%,rgba(220,80,25,0.5) 48%,transparent 55%,transparent 80%,rgba(180,30,8,0.3) 87%,rgba(215,0,48,0.5) 92%,transparent 97%);animation:_srl 5s linear infinite}
    @keyframes _srl{to{transform:rotate(360deg)}}
    .ss-chat-input-spin::after{content:'';position:absolute;inset:1px;border-radius:14px;background:#111}
    .ss-chat-input-card{background:#111;border-radius:14px;position:relative;z-index:2;display:flex;flex-direction:column}
    .ss-chat-input-card textarea{width:100%;padding:14px 18px 48px;border-radius:14px;border:none;background:transparent;font-family:'Satoshi',sans-serif;font-size:15px;color:#E5E5EA;outline:none;min-height:56px;max-height:120px;resize:none;box-sizing:border-box}
    .ss-chat-input-card textarea::placeholder{color:rgba(255,255,255,0.25)}
    .ss-chat-input-footer{position:absolute;bottom:0;left:0;right:0;padding:8px 14px;display:flex;align-items:center;gap:8px;border-top:1px solid rgba(255,255,255,0.04)}
    .ss-chat-add{width:30px;height:30px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.15s}
    .ss-chat-add:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.7)}
    .ss-chat-add svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .ss-chat-agent{font-family:'Inter',sans-serif;font-size:12px;color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:5px 10px;cursor:pointer;-webkit-appearance:none;appearance:none}
    .ss-chat-send{margin-left:auto;width:34px;height:34px;border-radius:10px;background:#D70030;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;color:#F5F5F7}
    .ss-chat-send:hover{background:#E5003A}
    .ss-chat-send svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

    /* CLIENT SWITCHER */
    .ss-client-sw{margin-bottom:12px;position:relative}
    .ss-cl-current{display:flex;align-items:center;gap:8px;padding:10px 12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;cursor:pointer;transition:all 0.15s}
    .ss-cl-current:hover{border-color:rgba(215,0,48,0.2)}
    .ss-cl-av{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:8px;font-weight:600;color:#FFF;flex-shrink:0}
    .ss-cl-info{flex:1;min-width:0}
    .ss-cl-name{font-family:'Satoshi',sans-serif;font-size:12px;font-weight:600;color:#F5F5F7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .ss-cl-sub{font-family:'Inter',sans-serif;font-size:9px;color:rgba(255,255,255,0.35)}
    .ss-cl-chev{width:12px;height:12px;stroke:rgba(255,255,255,0.35);fill:none;stroke-width:2;flex-shrink:0}
    .ss-cl-dropdown{display:none;position:absolute;left:0;right:0;top:100%;background:#1C1C1E;border:1px solid rgba(255,255,255,0.06);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:20;margin-top:4px;overflow:hidden}
    .ss-cl-dropdown.open{display:block}
    .ss-cl-input{width:100%;font-family:'Inter',sans-serif;font-size:12px;padding:10px 12px;border:none;border-bottom:1px solid rgba(255,255,255,0.04);outline:none;background:#1C1C1E;color:#F5F5F7;box-sizing:border-box}
    .ss-cl-input::placeholder{color:rgba(255,255,255,0.25)}
    .ss-cl-item{display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;transition:background 0.1s;font-family:'Inter',sans-serif;font-size:12px;color:#E5E5EA}
    .ss-cl-item:hover{background:rgba(215,0,48,0.08)}
    .ss-cl-item.active{background:rgba(215,0,48,0.1)}
    .ss-cl-phase{margin-left:auto;font-family:'Inter',sans-serif;font-size:9px;font-weight:600;color:rgba(255,255,255,0.35)}
    .ss-cl-all{display:block;padding:10px 12px;font-family:'Inter',sans-serif;font-size:11px;color:#D70030;border-top:1px solid rgba(255,255,255,0.04);text-align:center;text-decoration:none}

    /* MENU — RIGHT slide-in */
    .ss-menu{width:280px;position:fixed;right:-290px;top:0;bottom:0;background:#FFF;border-left:0.5px solid rgba(0,0,0,0.06);z-index:60;display:flex;flex-direction:column;transition:right 0.25s cubic-bezier(0.25,0.1,0.25,1);box-shadow:-4px 0 32px rgba(0,0,0,0)}
    .ss-menu.open{right:0;box-shadow:-4px 0 32px rgba(0,0,0,0.08)}
    .ss-menu-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:0.5px solid rgba(0,0,0,0.06)}
    .ss-menu-title{font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:#D70030}
    .ss-menu-close{width:28px;height:28px;border-radius:50%;border:none;background:rgba(0,0,0,0.03);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#86868B}
    .ss-menu-close svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .ss-menu-body{flex:1;overflow-y:auto;padding:8px 0}
    .ss-ms{margin-bottom:4px}
    .ss-ms-label{font-family:'Inter',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEAEB2;padding:14px 20px 6px}
    .ss-mi{display:flex;align-items:center;gap:10px;padding:8px 20px;font-family:'Inter',sans-serif;font-size:13px;color:#6E6E73;text-decoration:none;transition:all 0.15s;border-left:2px solid transparent}
    .ss-mi:hover{color:#D70030;background:rgba(215,0,48,0.02)}
    .ss-mi.active{color:#D70030;border-left-color:#D70030;background:rgba(215,0,48,0.03);font-weight:500}
    .ss-mi svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
    .ss-badge{margin-left:auto;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#86868B;background:rgba(0,0,0,0.04);padding:1px 6px;border-radius:980px}
    .ss-menu-footer{padding:16px 20px;border-top:0.5px solid rgba(0,0,0,0.06)}
    .ss-menu-user{display:flex;align-items:center;gap:8px}
    .ss-menu-user-av{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF}
    .ss-menu-user-name{font-family:'Satoshi',sans-serif;font-size:12px;font-weight:500;color:#1D1D1F}
    .ss-menu-user-role{font-family:'Inter',sans-serif;font-size:10px;color:#86868B}

    /* BODY LAYOUT */
    body.has-ss{padding-top:48px;padding-left:380px}
    .ss-main{max-width:760px;padding:20px 24px 100px}

    @media(max-width:900px){
      .ss-chat{width:100%;position:relative;top:0;height:50vh}
      body.has-ss{padding-left:0}
    }
  `;
  document.head.appendChild(style);

  // Inject
  document.body.insertAdjacentHTML('afterbegin', topbar + chatPanel + menu);
  document.body.classList.add('has-ss');
})();
