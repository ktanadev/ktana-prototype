/**
 * KTANA Social — Shared Sidebar with Client Switcher
 * Injeta sidebar com switcher de cliente no topo.
 * Uso: <script src="shared-sidebar.js"></script>
 * data-active="dashboard" no <body> marca item ativo
 * data-client="true" no <body> mostra o client switcher
 */

(function() {
  const active = document.body.dataset.active || '';
  const showClient = document.body.dataset.client === 'true';

  function isActive(id) { return active === id ? 'nav-item active' : 'nav-item'; }

  const clientSwitcher = showClient ? `
    <div class="ss-client-switcher">
      <div class="ss-client-current" onclick="document.querySelector('.ss-client-dropdown').classList.toggle('open')">
        <div class="ss-cl-av">JM</div>
        <div class="ss-cl-info">
          <div class="ss-cl-name">Joao Mendes</div>
          <div class="ss-cl-sub">CEO TechFlow — Fase 4</div>
        </div>
        <svg viewBox="0 0 24 24" class="ss-cl-chev"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="ss-client-dropdown">
        <div class="ss-cl-search"><input type="text" placeholder="Buscar cliente..." class="ss-cl-input"></div>
        <div class="ss-cl-item active"><div class="ss-cl-av">JM</div><span>Joao Mendes</span><span class="ss-cl-phase">F4</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">AC</div><span>Ana Costa</span><span class="ss-cl-phase">F2</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">PS</div><span>Pedro Souza</span><span class="ss-cl-phase">F1</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">MF</div><span>Maria Fernandes</span><span class="ss-cl-phase">F5</span></div>
        <div class="ss-cl-item"><div class="ss-cl-av">RC</div><span>Roberto Campos</span><span class="ss-cl-phase">F4</span></div>
        <a href="client-list.html" class="ss-cl-all">Ver todos os 400 clientes</a>
      </div>
    </div>
  ` : '';

  const clientNav = showClient ? `
    <div class="ss-nav-section">
      <div class="ss-nav-label">Cliente selecionado</div>
      <a class="${isActive('workspace')}" href="client-workspace.html">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        Visao Geral
      </a>
      <a class="${isActive('brandbook')}" href="brandbook.html">
        <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        Brand Book
      </a>
      <a class="${isActive('pipeline')}" href="pipeline.html">
        <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        Pipeline
      </a>
      <a class="${isActive('calendar')}" href="calendar.html">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Calendario
      </a>
      <a class="${isActive('insights')}" href="insights.html">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        Insights
      </a>
      <a class="${isActive('approvals')}" href="approvals.html">
        <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Aprovacoes
      </a>
      <a class="${isActive('metrics')}" href="metrics.html">
        <svg viewBox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
        Metricas
      </a>
      <a class="${isActive('webinar')}" href="webinar.html">
        <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
        Webinars
      </a>
      <a class="${isActive('avatar')}" href="avatar-clone.html">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Avatar & Clone
      </a>
      <a class="${isActive('connections')}" href="connections.html">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9"/></svg>
        Conexoes
      </a>
      <a class="${isActive('health')}" href="health.html">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Saude Contas
      </a>
    </div>
  ` : `
    <div class="ss-nav-section">
      <div class="ss-nav-label">Principal</div>
      <a class="${isActive('dashboard')}" href="dashboard.html">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        Dashboard
      </a>
      <a class="${isActive('clients')}" href="client-list.html">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        Clientes
        <span class="ss-badge">400</span>
      </a>
    </div>
  `;

  const systemNav = `
    <div class="ss-nav-section">
      <div class="ss-nav-label">Sistema</div>
      <a class="${isActive('agents')}" href="agents.html">
        <svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M15 17l2 2M7 3l7 7"/></svg>
        Agentes
      </a>
      <a class="${isActive('team')}" href="team-management.html">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        Equipe
      </a>
      <a class="${isActive('notifications')}" href="notifications.html">
        <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
        Notificacoes
      </a>
      <a class="${isActive('billing')}" href="billing.html">
        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        Cobranca
      </a>
      <a class="${isActive('settings')}" href="settings.html">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9"/></svg>
        Config
      </a>
    </div>
  `;

  const sidebarHTML = `
  <aside class="ss-sidebar" id="ssSidebar">
    <a href="dashboard.html" class="ss-logo">
      <span class="ss-brand">KTANA</span>
      <span class="ss-product">Social</span>
    </a>
    ${clientSwitcher}
    ${clientNav}
    ${systemNav}
    <div class="ss-footer">
      <div class="ss-user">
        <div class="ss-avatar">AS</div>
        <div class="ss-user-info">
          <div class="ss-user-name">Antonio Silva</div>
          <div class="ss-user-role">Master Admin</div>
        </div>
      </div>
    </div>
  </aside>`;

  const style = document.createElement('style');
  style.textContent = `
    .ss-sidebar{width:220px;position:fixed;left:0;top:0;bottom:0;background:#FFF;border-right:0.5px solid rgba(0,0,0,0.06);padding:16px 0;overflow-y:auto;z-index:10;display:flex;flex-direction:column}
    .ss-logo{padding:0 16px;margin-bottom:12px;display:flex;align-items:center;gap:6px;text-decoration:none}
    .ss-brand{font-family:'Zen Dots',cursive;font-size:13px;color:#D70030}
    .ss-product{font-family:'Inter',sans-serif;font-size:9px;color:#86868B;background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px}
    .ss-nav-section{margin-bottom:4px}
    .ss-nav-label{font-family:'Inter',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEAEB2;padding:14px 16px 6px}
    .nav-item{display:flex;align-items:center;gap:10px;padding:8px 16px;font-family:'Inter',sans-serif;font-size:12px;color:#6E6E73;text-decoration:none;transition:all 0.15s;border-left:2px solid transparent}
    .nav-item:hover{color:#D70030;background:rgba(215,0,48,0.03)}
    .nav-item.active{color:#D70030;border-left-color:#D70030;background:rgba(215,0,48,0.04);font-weight:500}
    .nav-item svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
    .ss-badge{margin-left:auto;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#86868B;background:rgba(0,0,0,0.04);padding:1px 6px;border-radius:980px;min-width:18px;text-align:center}
    .ss-footer{margin-top:auto;padding:12px 16px;border-top:1px solid rgba(0,0,0,0.04)}
    .ss-user{display:flex;align-items:center;gap:8px}
    .ss-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF}
    .ss-user-info{display:flex;flex-direction:column}
    .ss-user-name{font-family:'Satoshi',sans-serif;font-size:12px;font-weight:500;color:#1D1D1F}
    .ss-user-role{font-family:'Inter',sans-serif;font-size:10px;color:#86868B}
    body.has-sidebar{padding-left:220px}

    /* CLIENT SWITCHER */
    .ss-client-switcher{padding:0 12px;margin-bottom:12px}
    .ss-client-current{display:flex;align-items:center;gap:8px;padding:10px 12px;background:rgba(215,0,48,0.03);border:1px solid rgba(215,0,48,0.08);border-radius:12px;cursor:pointer;transition:all 0.15s}
    .ss-client-current:hover{border-color:rgba(215,0,48,0.15)}
    .ss-cl-av{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:9px;font-weight:600;color:#FFF;flex-shrink:0}
    .ss-cl-info{flex:1;min-width:0}
    .ss-cl-name{font-family:'Satoshi',sans-serif;font-size:12px;font-weight:600;color:#1D1D1F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .ss-cl-sub{font-family:'Inter',sans-serif;font-size:9px;color:#86868B}
    .ss-cl-chev{width:12px;height:12px;stroke:#86868B;fill:none;stroke-width:2;flex-shrink:0;transition:transform 0.2s}
    .ss-client-dropdown{display:none;position:absolute;left:12px;right:12px;top:100%;background:#FFF;border:1px solid rgba(0,0,0,0.06);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.1);z-index:20;margin-top:4px;overflow:hidden}
    .ss-client-dropdown.open{display:block}
    .ss-cl-search{padding:8px}
    .ss-cl-input{width:100%;font-family:'Inter',sans-serif;font-size:12px;padding:8px 12px;border-radius:8px;border:1px solid rgba(0,0,0,0.06);outline:none;background:#F5F5F7;box-sizing:border-box}
    .ss-cl-input:focus{border-color:rgba(215,0,48,0.3)}
    .ss-cl-item{display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;transition:background 0.1s;font-family:'Inter',sans-serif;font-size:12px;color:#1D1D1F}
    .ss-cl-item:hover{background:rgba(215,0,48,0.03)}
    .ss-cl-item.active{background:rgba(215,0,48,0.04);font-weight:500}
    .ss-cl-item .ss-cl-av{width:24px;height:24px;font-size:8px}
    .ss-cl-phase{margin-left:auto;font-family:'Inter',sans-serif;font-size:9px;font-weight:600;color:#86868B}
    .ss-cl-all{display:block;padding:10px 12px;font-family:'Inter',sans-serif;font-size:11px;color:#D70030;border-top:1px solid rgba(0,0,0,0.04);text-align:center}
    .ss-client-switcher{position:relative}

    @media(max-width:768px){.ss-sidebar{display:none}body.has-sidebar{padding-left:0}}
  `;
  document.head.appendChild(style);
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  document.body.classList.add('has-sidebar');
})();
