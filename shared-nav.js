// KTANA Shared Navigation — Apple-style with categories + sub-areas
// Include via <script src="../../shared-nav.js"></script> (adjust path)
// Auto-detects current page and highlights correct item

(function() {
  // Detect depth for relative paths
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  const inPrototype = parts.indexOf('ktana-prototype');
  const depth = inPrototype >= 0 ? parts.length - inPrototype - 2 : 0;
  const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  const tPrefix = prefix + (depth === 0 ? 'tenant/' : depth === 1 && !path.includes('/tenant/') ? '../tenant/' : '');

  // Detect base for tenant paths
  function t(p) {
    if (path.includes('/tenant/')) {
      // Already in tenant
      const segs = path.split('/tenant/')[1].split('/');
      const currDepth = segs.length - 1;
      const up = '../'.repeat(currDepth);
      return up + p;
    }
    // From pj/ or pf/ or root
    if (path.includes('/pj/') || path.includes('/pf/')) return '../tenant/' + p;
    return 'tenant/' + p;
  }

  // Ordem: prioridade do empresario (Nielsen frequencia + Jobs valor rapido)
  // 1. Painel = briefing do dia, ROI, insights (abre todo dia)
  // 2. Aprovacoes = desbloqueia o time (urgente, rapido)
  // 3. Equipe = ver quem faz o que (semanal)
  // 4. Solucoes = ativar automacoes (quando quer crescer)
  // 5. Config = raramente muda (ultimo)
  const NAV_ITEMS = [
    {
      label: 'Painel',
      items: [
        { label: 'Visao geral', href: t('dashboard/home.html'), icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
        { label: 'Lucro & ROI', href: t('dashboard/roi.html'), icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
        { label: 'Insights do Conselho', href: t('dashboard/insights.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
        { label: 'Perfil cognitivo', href: t('profile/index.html'), icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z' },
      ]
    },
    {
      label: 'Aprovacoes',
      items: [
        { label: 'Pendentes', href: t('approvals/list.html'), icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
        { label: 'Resolvidas', href: t('approvals/resolved.html'), icon: 'M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3' },
      ]
    },
    {
      label: 'Equipe',
      items: [
        { label: 'Meus samurais', href: t('team/list.html'), icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
        { label: 'Organograma', href: t('team/org.html'), icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
        { label: 'Contratar samurai', href: t('team/hire-level.html'), icon: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M19 8l3 3-3 3M15 11h7' },
        { label: 'Escritorio virtual', href: t('office/index.html'), icon: 'M2 7l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5' },
      ]
    },
    {
      label: 'Solucoes',
      items: [
        { label: 'Modulos prontos', href: t('solutions/index.html'), icon: 'M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z' },
        { label: 'Criar solucao', href: t('solutions/builder.html'), icon: 'M12 5v14M5 12h14' },
        { label: 'Frameworks do segmento', href: t('frameworks/index.html'), icon: 'M4 4h16v16H4zM4 9h16M9 4v16' },
        { label: 'Especialista do setor', href: t('frameworks/expert-chat.html'), icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
      ]
    },
    {
      label: 'Config',
      items: [
        { label: 'Geral', href: t('settings/general.html'), icon: 'M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z' },
        { label: 'Inteligencia (IA)', href: t('settings/models.html'), icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20' },
        { label: 'Conexoes', href: t('settings/connections.html'), icon: 'M15 7h3a5 5 0 010 10h-3M9 17H6a5 5 0 010-10h3M8 12h8' },
        { label: 'Seguranca', href: t('settings/security.html'), icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
        { label: 'Plano & fatura', href: t('settings/billing.html'), icon: 'M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM1 10h22' },
        { label: 'Privacidade & LGPD', href: t('settings/privacy.html'), icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
        { label: 'API & Webhooks', href: t('settings/api.html'), icon: 'M15 7h3a5 5 0 010 10h-3M9 17H6a5 5 0 010-10h3M8 12h8' },
      ]
    },
  ];

  // Build nav HTML
  function buildNav() {
    const currentFile = path.split('/').pop();

    let html = `
    <nav class="kn" id="ktanaNav">
      <div class="kn-inner">
        <a href="${t('dashboard/home.html')}" class="kn-logo">KTANA</a>
        <div class="kn-items">
    `;

    NAV_ITEMS.forEach((cat, i) => {
      const isActive = cat.items.some(item => item.href.endsWith(currentFile));
      html += `
          <div class="kn-cat${isActive ? ' kn-active' : ''}" onmouseenter="showDrop(${i})" onmouseleave="hideDrop(${i})">
            <span class="kn-cat-label">${cat.label}</span>
            <div class="kn-drop" id="knDrop${i}">
              <div class="kn-drop-inner">
      `;
      cat.items.forEach(item => {
        const itemActive = item.href.endsWith(currentFile);
        html += `
                <a href="${item.href}" class="kn-drop-item${itemActive ? ' kn-item-active' : ''}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${item.icon}"/></svg>
                  <span>${item.label}</span>
                </a>`;
      });
      html += `
              </div>
            </div>
          </div>`;
    });

    html += `
        </div>
        <a href="${t('profile/index.html')}" class="kn-avatar" title="Perfil">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </a>
      </div>
    </nav>`;

    return html;
  }

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    .kn { position: sticky; top: 0; z-index: 200; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(245,245,247,0.72); backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px); border-bottom: 0.5px solid rgba(0,0,0,0.06); }
    .kn-inner { width: 100%; max-width: 980px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
    .kn-logo { font-family: 'Zen Dots', cursive; font-size: 14px; color: #D70030; letter-spacing: 0.02em; text-decoration: none; flex-shrink: 0; }
    .kn-items { display: flex; align-items: center; gap: 0; }
    .kn-cat { position: relative; }
    .kn-cat-label { font-family: 'Inter', -apple-system, sans-serif; font-size: 12px; color: #1D1D1F; opacity: 0.5; cursor: default; padding: 16px 18px; display: block; transition: opacity 0.2s; letter-spacing: -0.01em; }
    .kn-cat:hover .kn-cat-label, .kn-active .kn-cat-label { opacity: 1; }
    .kn-drop { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); padding-top: 4px; display: none; z-index: 300; }
    .kn-drop.open { display: block; }
    .kn-drop-inner { background: #FFF; border-radius: 16px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 8px 40px rgba(0,0,0,0.1); padding: 8px; min-width: 200px; animation: knFadeIn 0.15s ease; }
    @keyframes knFadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
    .kn-drop-item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; color: #1D1D1F; text-decoration: none; transition: background 0.12s; white-space: nowrap; }
    .kn-drop-item:hover { background: rgba(0,0,0,0.03); }
    .kn-drop-item svg { color: #86868B; flex-shrink: 0; }
    .kn-drop-item:hover svg { color: #D70030; }
    .kn-item-active { background: rgba(215,0,48,0.04); }
    .kn-item-active svg { color: #D70030 !important; }
    .kn-avatar { width: 30px; height: 30px; border-radius: 50%; background: rgba(0,0,0,0.04); display: flex; align-items: center; justify-content: center; color: #86868B; flex-shrink: 0; transition: background 0.15s; text-decoration: none; }
    .kn-avatar:hover { background: rgba(0,0,0,0.08); color: #1D1D1F; }
    @media (max-width: 768px) {
      .kn-cat-label { font-size: 11px; padding: 14px 8px; }
      .kn-drop { left: 0; transform: none; }
      .kn-inner { padding: 0 16px; }
    }
  `;
  document.head.appendChild(style);

  // Inject nav
  const existing = document.querySelector('.nav, nav.nav, .kn');
  if (existing) {
    existing.outerHTML = buildNav();
  } else {
    document.body.insertAdjacentHTML('afterbegin', buildNav());
  }

  // Dropdown handlers
  window.showDrop = function(i) { document.getElementById('knDrop'+i).classList.add('open'); };
  window.hideDrop = function(i) { document.getElementById('knDrop'+i).classList.remove('open'); };

})();
