// KTANA Navigation System — IA-first, click-based, collapsible sidebar
// Replaces existing nav on all tenant pages

(function() {
  const path = window.location.pathname;
  function t(p) {
    if (path.includes('/tenant/')) {
      const segs = path.split('/tenant/')[1].split('/');
      return '../'.repeat(segs.length - 1) + p;
    }
    if (path.includes('/pj/') || path.includes('/pf/')) return '../tenant/' + p;
    return 'tenant/' + p;
  }
  const currentFile = path.split('/').pop();

  const SECTIONS = [
    { id: 'painel', label: 'Painel', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', items: [
      { label: 'Visao geral', href: t('dashboard/home.html'), icon: 'M4 6h16M4 12h16M4 18h7' },
      { label: 'Lucro & ROI', href: t('dashboard/roi.html'), icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
      { label: 'Insights do Conselho', href: t('dashboard/insights.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { label: 'Modo urgente', href: t('dashboard/urgent.html'), icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    ]},
    { id: 'aprovacoes', label: 'Aprovacoes', icon: 'M9 11l3 3L22 4', badge: '3', items: [
      { label: 'Pendentes', href: t('approvals/list.html'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Resolvidas', href: t('approvals/resolved.html'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    ]},
    { id: 'equipe', label: 'Equipe', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', items: [
      { label: 'Meus samurais', href: t('team/list.html'), icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197' },
      { label: 'Organograma', href: t('team/org.html'), icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7' },
      { label: 'Contratar', href: t('team/hire-level.html'), icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' },
      { label: 'Escritorio virtual', href: t('office/index.html'), icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5' },
    ]},
    { id: 'solucoes', label: 'Solucoes', icon: 'M13 10V3L4 14h7v7l9-11h-7z', items: [
      { label: 'Modulos prontos', href: t('solutions/index.html'), icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
      { label: 'Builder (criar)', href: t('solutions/builder.html'), icon: 'M12 4v16m8-8H4' },
      { label: 'Frameworks', href: t('frameworks/index.html'), icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
      { label: 'Especialista', href: t('frameworks/expert-chat.html'), icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ]},
    { id: 'config', label: 'Config', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', items: [
      { label: 'Geral', href: t('settings/general.html'), icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
      { label: 'Inteligencia', href: t('settings/models.html'), icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
      { label: 'Conexoes', href: t('settings/connections.html'), icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
      { label: 'Seguranca', href: t('settings/security.html'), icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
      { label: 'Plano & fatura', href: t('settings/billing.html'), icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { label: 'Notificacoes', href: t('settings/notifications.html'), icon: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0' },
      { label: 'Etica & Regras', href: t('settings/ethics.html'), icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      { label: 'Cerebro', href: t('settings/brain.html'), icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3' },
      { label: 'Privacidade', href: t('settings/privacy.html'), icon: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z' },
      { label: 'API & Webhooks', href: t('settings/api.html'), icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6' },
      { label: 'Terminal', href: t('terminal.html'), icon: 'M4 17l6-6-6-6M12 19h8' },
      { label: 'WhatsApp', href: t('whatsapp.html'), icon: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' },
      { label: 'Organizacoes', href: t('organizations/index.html'), icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5' },
      { label: 'Membros', href: t('organizations/members.html'), icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
    ]},
  ];

  function svg(d, size) {
    return `<svg width="${size||16}" height="${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  }

  function buildNav() {
    // Determine which section is active
    let activeSection = '';
    SECTIONS.forEach(s => {
      if (s.items.some(item => item.href.endsWith(currentFile))) activeSection = s.id;
    });

    let sidebarItems = '';
    SECTIONS.forEach(s => {
      const isOpen = s.id === activeSection;
      const hasActive = s.items.some(item => item.href.endsWith(currentFile));

      sidebarItems += `
        <div class="ks-section${isOpen ? ' ks-open' : ''}">
          <button class="ks-section-btn${hasActive ? ' ks-section-active' : ''}" onclick="toggleSection('${s.id}')">
            <span class="ks-section-icon">${svg(s.icon)}</span>
            <span class="ks-section-label">${s.label}</span>
            ${s.badge ? `<span class="ks-badge">${s.badge}</span>` : ''}
            <span class="ks-chevron">${svg('M6 9l6 6 6-6', 12)}</span>
          </button>
          <div class="ks-section-items" id="ks-${s.id}">
            ${s.items.map(item => {
              const active = item.href.endsWith(currentFile);
              return `<a href="${item.href}" class="ks-item${active ? ' ks-item-active' : ''}">${svg(item.icon, 15)}<span>${item.label}</span></a>`;
            }).join('')}
          </div>
        </div>`;
    });

    return `
    <!-- Top Bar -->
    <header class="kt" id="ktTopBar">
      <div class="kt-inner">
        <button class="kt-toggle" onclick="toggleSidebar()" title="Menu">
          ${svg('M4 6h16M4 12h16M4 18h16', 18)}
        </button>
        <div class="kt-org" onclick="toggleOrgSwitcher()">
          <span class="kt-logo">KTANA</span>
          <span class="kt-org-name">CSB Fintechs</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="kt-org-chev"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <!-- Org Switcher -->
        <div class="kt-org-drop" id="ktOrgDrop">
          <div class="kt-org-head">Suas organizacoes</div>
          <a href="${t('organizations/index.html')}" class="kt-org-item kt-org-active">
            <div class="kt-org-av" style="background:rgba(215,0,48,0.06);color:#D70030;">CSB</div>
            <div class="kt-org-info"><div class="kt-org-n">CSB Fintechs</div><div class="kt-org-p">GUNDAN · 4 samurais</div></div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#30D158" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          </a>
          <a href="${t('organizations/index.html')}" class="kt-org-item">
            <div class="kt-org-av" style="background:rgba(100,210,255,0.08);color:#64D2FF;">KT</div>
            <div class="kt-org-info"><div class="kt-org-n">KTANA</div><div class="kt-org-p">BAKUFU · 8 samurais</div></div>
          </a>
          <a href="${t('organizations/index.html')}" class="kt-org-item">
            <div class="kt-org-av" style="background:rgba(48,209,88,0.08);color:#30D158;">VD</div>
            <div class="kt-org-info"><div class="kt-org-n">Vende Direito</div><div class="kt-org-p">RONIN · 1 samurai</div></div>
          </a>
          <div class="kt-org-sep"></div>
          <a href="${t('organizations/index.html')}" class="kt-org-item kt-org-manage">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Nova organizacao</span>
          </a>
          <a href="${t('organizations/index.html')}" class="kt-org-item kt-org-manage">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44"/></svg>
            <span>Gerenciar organizacoes</span>
          </a>
        </div>
        <div class="kt-spacer"></div>
        <button class="kt-ai-btn" onclick="toggleAI()" title="Assistente IA">
          ${svg('M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', 18)}
          <span class="kt-ai-label">Perguntar</span>
        </button>
        <a href="${t('profile/index.html')}" class="kt-avatar" title="Perfil">
          ${svg('M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z', 16)}
        </a>
      </div>
    </header>

    <!-- Sidebar -->
    <aside class="ks" id="ktSidebar">
      <div class="ks-head">
        <span class="ks-head-label">Menu</span>
        <button class="ks-head-close" onclick="toggleSidebar()">${svg('M6 18L18 6M6 6l12 12', 14)}</button>
      </div>
      <nav class="ks-nav">
        ${sidebarItems}
      </nav>
      <div class="ks-foot">
        <a href="${t('terminal.html')}" class="ks-foot-link">${svg('M4 17l6-6-6-6M12 19h8', 14)} Terminal</a>
        <a href="${t('whatsapp.html')}" class="ks-foot-link">${svg('M3 21l1.65-3.8a9 9 0 113.15 2.85L3 21z', 14)} WhatsApp</a>
        <a href="${t('support.html')}" class="ks-foot-link">${svg('M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829', 14)} Suporte</a>
      </div>
    </aside>
    <div class="ks-overlay" id="ksOverlay" onclick="toggleSidebar()"></div>

    <!-- AI Quick Chat -->
    <div class="ka" id="ktAI">
      <div class="ka-head">
        <div class="ka-head-info">
          <div class="ka-dot"></div>
          <span>Hana — Assistente</span>
        </div>
        <button class="ka-close" onclick="toggleAI()">${svg('M6 18L18 6M6 6l12 12', 14)}</button>
      </div>
      <div class="ka-msgs" id="kaMsgs">
        <div class="ka-msg ka-ai">Como posso ajudar? Pode pedir qualquer coisa — "quanto lucrei essa semana", "quem esta atrasado", "ativa o modulo de SEO"...</div>
      </div>
      <div class="ka-input">
        <input type="text" placeholder="Pergunte ou peca algo..." id="kaInput" onkeydown="if(event.key==='Enter')sendKaMsg()">
        <button onclick="sendKaMsg()">${svg('M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', 16)}</button>
      </div>
    </div>`;
  }

  // Styles
  const style = document.createElement('style');
  style.textContent = `
    /* Top Bar */
    .kt { position: sticky; top: 0; z-index: 200; height: 52px; background: rgba(245,245,247,0.8); backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px); border-bottom: 0.5px solid rgba(0,0,0,0.06); }
    .kt-inner { max-width: 1200px; margin: 0 auto; height: 100%; padding: 0 20px; display: flex; align-items: center; gap: 16px; }
    .kt-toggle { width: 36px; height: 36px; border-radius: 10px; border: none; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #1D1D1F; transition: background 0.15s; }
    .kt-toggle:hover { background: rgba(0,0,0,0.04); }
    .kt-logo { font-family: 'Zen Dots', cursive; font-size: 15px; color: #D70030; text-decoration: none; }
    .kt-spacer { flex: 1; }
    .kt-ai-btn { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 980px; border: 1px solid rgba(0,0,0,0.08); background: #FFF; cursor: pointer; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; color: #6E6E73; transition: all 0.2s; }
    .kt-ai-btn:hover { border-color: #D70030; color: #D70030; box-shadow: 0 2px 12px rgba(215,0,48,0.08); }
    .kt-ai-btn svg { color: #D70030; }
    .kt-ai-label { }
    .kt-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(0,0,0,0.04); display: flex; align-items: center; justify-content: center; color: #86868B; text-decoration: none; transition: background 0.15s; }
    .kt-avatar:hover { background: rgba(0,0,0,0.08); color: #1D1D1F; }

    /* Org Switcher */
    .kt-org { display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 4px 10px 4px 0; border-radius: 8px; transition: background 0.15s; position: relative; }
    .kt-org:hover { background: rgba(0,0,0,0.03); }
    .kt-org-name { font-family: 'Inter', -apple-system, sans-serif; font-size: 12px; color: #6E6E73; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .kt-org-chev { color: #AEAEB2; transition: transform 0.2s; }
    .kt-org.open .kt-org-chev { transform: rotate(180deg); }

    .kt-org-drop { position: absolute; top: 44px; left: 20px; width: 280px; background: #FFF; border-radius: 16px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px rgba(0,0,0,0.12); z-index: 400; display: none; overflow: hidden; }
    .kt-org-drop.open { display: block; animation: kaUp 0.2s cubic-bezier(0.32,0.72,0,1); }
    .kt-org-head { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #AEAEB2; padding: 14px 16px 8px; }
    .kt-org-item { display: flex; align-items: center; gap: 12px; padding: 10px 16px; cursor: pointer; transition: background 0.12s; text-decoration: none; color: inherit; }
    .kt-org-item:hover { background: rgba(0,0,0,0.03); }
    .kt-org-active { background: rgba(215,0,48,0.02); }
    .kt-org-av { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Zen Dots', cursive; font-size: 10px; flex-shrink: 0; }
    .kt-org-info { flex: 1; }
    .kt-org-n { font-family: 'Satoshi', sans-serif; font-size: 13px; font-weight: 600; color: #1D1D1F; }
    .kt-org-p { font-family: 'Inter', sans-serif; font-size: 11px; color: #AEAEB2; }
    .kt-org-sep { height: 1px; background: rgba(0,0,0,0.04); margin: 4px 0; }
    .kt-org-manage { color: #86868B; font-family: 'Inter', sans-serif; font-size: 13px; gap: 10px; }
    .kt-org-manage:hover { color: #1D1D1F; }

    /* Sidebar */
    .ks { position: fixed; top: 0; left: 0; bottom: 0; width: 272px; background: #FFF; z-index: 300; transform: translateX(-100%); transition: transform 0.3s cubic-bezier(0.4,0,0.2,1); box-shadow: none; display: flex; flex-direction: column; border-right: 0.5px solid rgba(0,0,0,0.06); }
    .ks.open { transform: translateX(0); box-shadow: 20px 0 60px rgba(0,0,0,0.08); }
    .ks-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.2); z-index: 299; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
    .ks-overlay.open { opacity: 1; pointer-events: auto; }

    .ks-head { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 0.5px solid rgba(0,0,0,0.04); }
    .ks-head-label { font-family: 'Zen Dots', cursive; font-size: 13px; color: #D70030; }
    .ks-head-close { width: 28px; height: 28px; border-radius: 8px; border: none; background: rgba(0,0,0,0.03); cursor: pointer; display: flex; align-items: center; justify-content: center; color: #86868B; }
    .ks-head-close:hover { background: rgba(0,0,0,0.06); }

    .ks-nav { flex: 1; overflow-y: auto; padding: 8px 12px; }

    /* Section */
    .ks-section { margin-bottom: 2px; }
    .ks-section-btn { width: 100%; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; border: none; background: transparent; cursor: pointer; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; color: #6E6E73; transition: all 0.15s; text-align: left; }
    .ks-section-btn:hover { background: rgba(0,0,0,0.03); color: #1D1D1F; }
    .ks-section-active { color: #1D1D1F; font-weight: 500; }
    .ks-section-icon { display: flex; align-items: center; color: #86868B; flex-shrink: 0; }
    .ks-section-active .ks-section-icon { color: #D70030; }
    .ks-section-label { flex: 1; }
    .ks-badge { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; color: #FFF; background: #D70030; padding: 1px 7px; border-radius: 10px; min-width: 18px; text-align: center; }
    .ks-chevron { display: flex; align-items: center; color: #AEAEB2; transition: transform 0.25s; }
    .ks-open .ks-chevron { transform: rotate(180deg); }

    /* Section items — collapsed by default */
    .ks-section-items { max-height: 0; overflow: hidden; transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s; opacity: 0; padding-left: 38px; }
    .ks-open .ks-section-items { max-height: 300px; opacity: 1; }

    .ks-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; color: #86868B; text-decoration: none; transition: all 0.12s; margin-bottom: 1px; }
    .ks-item:hover { background: rgba(0,0,0,0.03); color: #1D1D1F; }
    .ks-item svg { color: #AEAEB2; flex-shrink: 0; }
    .ks-item:hover svg { color: #6E6E73; }
    .ks-item-active { background: rgba(215,0,48,0.04); color: #D70030; font-weight: 500; }
    .ks-item-active svg { color: #D70030; }

    /* Footer links */
    .ks-foot { padding: 12px 16px; border-top: 0.5px solid rgba(0,0,0,0.04); display: flex; flex-direction: column; gap: 2px; }
    .ks-foot-link { display: flex; align-items: center; gap: 10px; padding: 8px 8px; border-radius: 8px; font-family: 'Inter', sans-serif; font-size: 12px; color: #AEAEB2; text-decoration: none; transition: all 0.12s; }
    .ks-foot-link:hover { color: #6E6E73; background: rgba(0,0,0,0.02); }
    .ks-foot-link svg { flex-shrink: 0; }

    /* AI Quick Chat */
    .ka { position: fixed; bottom: 20px; right: 20px; width: 360px; max-height: 440px; background: #FFF; border-radius: 20px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px rgba(0,0,0,0.12); z-index: 400; display: none; flex-direction: column; overflow: hidden; }
    .ka.open { display: flex; animation: kaUp 0.25s cubic-bezier(0.4,0,0.2,1); }
    @keyframes kaUp { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
    .ka-head { padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; border-bottom: 0.5px solid rgba(0,0,0,0.04); }
    .ka-head-info { display: flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: #1D1D1F; }
    .ka-dot { width: 7px; height: 7px; border-radius: 50%; background: #30D158; box-shadow: 0 0 6px rgba(48,209,88,0.4); }
    .ka-close { width: 28px; height: 28px; border-radius: 50%; background: rgba(0,0,0,0.04); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #86868B; }
    .ka-msgs { flex: 1; overflow-y: auto; padding: 16px; min-height: 120px; max-height: 280px; }
    .ka-msg { font-family: 'Satoshi', sans-serif; font-size: 14px; line-height: 1.6; padding: 10px 14px; border-radius: 16px; margin-bottom: 10px; max-width: 90%; }
    .ka-ai { background: #F5F5F7; color: #1D1D1F; border-bottom-left-radius: 4px; }
    .ka-user { background: #1D1D1F; color: #F5F5F7; border-bottom-right-radius: 4px; margin-left: auto; }
    .ka-input { padding: 12px 14px; border-top: 0.5px solid rgba(0,0,0,0.04); display: flex; gap: 8px; }
    .ka-input input { flex: 1; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06); background: #F5F5F7; font-family: 'Satoshi', sans-serif; font-size: 14px; color: #1D1D1F; outline: none; }
    .ka-input input:focus { border-color: rgba(215,0,48,0.3); }
    .ka-input input::placeholder { color: #AEAEB2; }
    .ka-input button { width: 36px; height: 36px; border-radius: 10px; background: #D70030; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #FFF; flex-shrink: 0; }
    .ka-input button:hover { background: #B5002A; }

    /* Micro-animations (Apple HIG Motion) */
    .kt-toggle:active { transform: scale(0.92); }
    .kt-ai-btn:active { transform: scale(0.96); }
    .ks-section-btn:active { transform: scale(0.98); }
    .ks-item { transform: translateX(0); transition: all 0.15s cubic-bezier(0.4,0,0.2,1); }
    .ks-item:active { transform: scale(0.97); }
    .ks-open .ks-item { animation: ksSlideIn 0.2s cubic-bezier(0.4,0,0.2,1) both; }
    .ks-open .ks-item:nth-child(1) { animation-delay: 0.03s; }
    .ks-open .ks-item:nth-child(2) { animation-delay: 0.06s; }
    .ks-open .ks-item:nth-child(3) { animation-delay: 0.09s; }
    .ks-open .ks-item:nth-child(4) { animation-delay: 0.12s; }
    .ks-open .ks-item:nth-child(5) { animation-delay: 0.15s; }
    @keyframes ksSlideIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }

    /* Sidebar spring open */
    .ks { transition: transform 0.35s cubic-bezier(0.32,0.72,0,1); }
    .ks.open { transition: transform 0.4s cubic-bezier(0.32,0.72,0,1); }
    .ks-overlay { transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1); }

    /* AI chat bounce in */
    @keyframes kaUp { from { opacity: 0; transform: translateY(16px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }

    /* Badge pulse */
    .ks-badge { animation: badgePulse 2s ease-in-out infinite; }
    @keyframes badgePulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }

    /* Active item left accent */
    .ks-item-active { position: relative; }
    .ks-item-active::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 3px; height: 16px; background: #D70030; border-radius: 0 2px 2px 0; }

    /* Hover glow on AI button */
    .kt-ai-btn { position: relative; overflow: hidden; }
    .kt-ai-btn::after { content: ''; position: absolute; inset: -1px; border-radius: 980px; background: linear-gradient(135deg, rgba(215,0,48,0.1), transparent); opacity: 0; transition: opacity 0.3s; }
    .kt-ai-btn:hover::after { opacity: 1; }

    @media (max-width: 640px) {
      .ks { width: 100%; }
      .ka { right: 12px; left: 12px; width: auto; bottom: 12px; }
      .kt-ai-label { display: none; }
    }
  `;
  document.head.appendChild(style);

  // Remove ALL existing navs (aggressive — ensures consistency)
  document.querySelectorAll('.nav, nav.nav, .kn, nav.kn, nav, .top-bar, .header').forEach(el => {
    // Don't remove chat headers or section headers
    if (el.tagName === 'NAV' || el.classList.contains('nav') || el.classList.contains('kn') || el.classList.contains('top-bar')) {
      el.remove();
    }
  });

  // Inject as first child of body
  document.body.insertAdjacentHTML('afterbegin', buildNav());

  // Handlers
  let sidebarOpen = false;
  let aiOpen = false;

  window.toggleSidebar = function() {
    sidebarOpen = !sidebarOpen;
    document.getElementById('ktSidebar').classList.toggle('open', sidebarOpen);
    document.getElementById('ksOverlay').classList.toggle('open', sidebarOpen);
  };

  window.toggleSection = function(id) {
    const section = document.querySelector(`.ks-section:has(#ks-${id})`);
    if (!section) {
      // Fallback for browsers without :has
      document.querySelectorAll('.ks-section').forEach(s => {
        if (s.querySelector('#ks-' + id)) s.classList.toggle('ks-open');
      });
      return;
    }
    section.classList.toggle('ks-open');
  };

  window.toggleAI = function() {
    aiOpen = !aiOpen;
    document.getElementById('ktAI').classList.toggle('open', aiOpen);
    if (aiOpen) document.getElementById('kaInput').querySelector('input').focus();
  };

  window.sendKaMsg = function() {
    const input = document.getElementById('kaInput').querySelector('input');
    const val = input.value.trim();
    if (!val) return;
    const msgs = document.getElementById('kaMsgs');
    msgs.innerHTML += `<div class="ka-msg ka-user">${val}</div>`;
    input.value = '';
    setTimeout(() => {
      msgs.innerHTML += `<div class="ka-msg ka-ai">Entendi! Vou verificar isso pra voce agora. Um momento...</div>`;
      msgs.scrollTop = msgs.scrollHeight;
    }, 800);
    msgs.scrollTop = msgs.scrollHeight;
  };

  window.toggleOrgSwitcher = function() {
    const drop = document.getElementById('ktOrgDrop');
    const org = document.querySelector('.kt-org');
    drop.classList.toggle('open');
    org.classList.toggle('open');
  };
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.kt-org') && !e.target.closest('.kt-org-drop')) {
      const d = document.getElementById('ktOrgDrop');
      const o = document.querySelector('.kt-org');
      if (d) d.classList.remove('open');
      if (o) o.classList.remove('open');
    }
  });

  // Close sidebar on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (aiOpen) toggleAI();
      if (sidebarOpen) toggleSidebar();
    }
  });

})();
