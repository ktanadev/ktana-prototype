/**
 * KTANA Social — Shared Sidebar & Chat Panel
 * Injeta sidebar + chat em qualquer tela interna.
 * Uso: <script src="shared-sidebar.js"></script> no final do <body>
 * Requer: data-active="dashboard" no <body> pra marcar item ativo
 */

(function() {
  const active = document.body.dataset.active || '';

  function isActive(id) { return active === id ? 'nav-item active' : 'nav-item'; }

  const sidebarHTML = `
  <aside class="ss-sidebar" id="ssSidebar">
    <a href="landing.html" class="ss-logo">
      <span class="ss-brand">KTANA</span>
      <span class="ss-product">Social</span>
    </a>

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
      <a class="${isActive('brandbook')}" href="brandbook.html">
        <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        Brand Book
      </a>
      <a class="${isActive('pipeline')}" href="pipeline.html">
        <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        Pipeline
        <span class="ss-badge">23</span>
      </a>
      <a class="${isActive('calendar')}" href="calendar.html">
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Calendario
      </a>
      <a class="${isActive('insights')}" href="insights.html">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        Insights
      </a>
    </div>

    <div class="ss-nav-section">
      <div class="ss-nav-label">Producao</div>
      <a class="${isActive('webinar')}" href="webinar.html">
        <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
        Webinars
      </a>
      <a class="${isActive('approvals')}" href="approvals.html">
        <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Aprovacoes
        <span class="ss-badge ss-badge-red">7</span>
      </a>
      <a class="${isActive('avatar')}" href="avatar-clone.html">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Avatar & Clone
      </a>
      <a class="${isActive('metrics')}" href="metrics.html">
        <svg viewBox="0 0 24 24"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>
        Metricas
      </a>
    </div>

    <div class="ss-nav-section">
      <div class="ss-nav-label">Sistema</div>
      <a class="${isActive('agents')}" href="agents.html">
        <svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M15 17l2 2M7 3l7 7"/></svg>
        Agentes
      </a>
      <a class="${isActive('health')}" href="#">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Saude Contas
      </a>
      <a class="${isActive('connections')}" href="connections.html">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Conexoes
      </a>
      <a class="${isActive('team')}" href="#">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        Equipe
      </a>
      <a class="${isActive('config')}" href="#">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>
        Config
      </a>
    </div>

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

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .ss-sidebar{width:220px;position:fixed;left:0;top:0;bottom:0;background:#FFF;border-right:0.5px solid rgba(0,0,0,0.06);padding:16px 0;overflow-y:auto;z-index:10;display:flex;flex-direction:column}
    .ss-logo{padding:0 16px;margin-bottom:20px;display:flex;align-items:center;gap:6px;text-decoration:none}
    .ss-brand{font-family:'Zen Dots',cursive;font-size:13px;color:#D70030}
    .ss-product{font-family:'Inter',sans-serif;font-size:9px;color:#86868B;background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px}
    .ss-nav-section{margin-bottom:4px}
    .ss-nav-label{font-family:'Inter',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#AEAEB2;padding:14px 16px 6px}
    .nav-item{display:flex;align-items:center;gap:10px;padding:8px 16px;font-family:'Inter',sans-serif;font-size:12px;color:#6E6E73;text-decoration:none;transition:all 0.15s;border-left:2px solid transparent}
    .nav-item:hover{color:#D70030;background:rgba(215,0,48,0.03)}
    .nav-item.active{color:#D70030;border-left-color:#D70030;background:rgba(215,0,48,0.04);font-weight:500}
    .nav-item svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
    .ss-badge{margin-left:auto;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#86868B;background:rgba(0,0,0,0.04);padding:1px 6px;border-radius:980px;min-width:18px;text-align:center}
    .ss-badge-red{color:#FFF;background:#D70030}
    .ss-footer{margin-top:auto;padding:12px 16px;border-top:1px solid rgba(0,0,0,0.04)}
    .ss-user{display:flex;align-items:center;gap:8px}
    .ss-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF}
    .ss-user-info{display:flex;flex-direction:column}
    .ss-user-name{font-family:'Satoshi',sans-serif;font-size:12px;font-weight:500;color:#1D1D1F}
    .ss-user-role{font-family:'Inter',sans-serif;font-size:10px;color:#86868B}
    /* BODY ADJUST */
    body.has-sidebar{padding-left:220px}
    @media(max-width:768px){.ss-sidebar{display:none}body.has-sidebar{padding-left:0}}
  `;
  document.head.appendChild(style);

  // Inject sidebar
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  document.body.classList.add('has-sidebar');
})();
