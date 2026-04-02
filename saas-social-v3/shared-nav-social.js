// KTANA Navigation System — IA-first, click-based, collapsible sidebar
// Replaces existing nav on all tenant pages

(function() {
  const path = window.location.pathname;

  // Guard: skip nav injection on auth, landing, admin, onboarding, and legal pages
  const skipPatterns = ['/auth/', '/landing.html', '/login.html', '/signup.html', '/admin.html', '/admin-', '/legal/', '/client-portal', '/client-onboarding', '/client-approve', '/client-upload', '/client-brand', '/setup-'];
  if (skipPatterns.some(p => path.includes(p))) return;
  function t(p) { return p; }
  const currentFile = path.split('/').pop();
  const isPF = false;

  // PF path resolver
  function pf(p) {
    if (path.includes('/pf/')) {
      const segs = path.split('/pf/')[1].split('/');
      return '../'.repeat(segs.length - 1) + p;
    }
    if (path.includes('/tenant/')) {
      const segs = path.split('/tenant/')[1].split('/');
      return '../'.repeat(segs.length) + 'pf/' + p;
    }
    return 'pf/' + p;
  }

  // PJ path resolver
  function pj(p) {
    if (path.includes('/pj/')) {
      const segs = path.split('/pj/')[1].split('/');
      return '../'.repeat(segs.length - 1) + p;
    }
    if (path.includes('/tenant/')) {
      const segs = path.split('/tenant/')[1].split('/');
      return '../'.repeat(segs.length) + 'pj/' + p;
    }
    if (path.includes('/pf/')) {
      const segs = path.split('/pf/')[1].split('/');
      return '../'.repeat(segs.length) + 'pj/' + p;
    }
    return 'pj/' + p;
  }

  // PF-specific sections
  const PF_SECTIONS = [
    { id: 'painel-pf', label: 'Painel', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', items: [
      { label: 'Meu dia', href: pf('dashboard.html'), icon: 'M4 6h16M4 12h16M4 18h7' },
      { label: 'Metas de vida', href: pf('goals.html'), icon: 'M22 11.08V12a10 10 0 11-5.93-9.14' },
      { label: 'Habitos', href: pf('habits.html'), icon: 'M9 11l3 3L22 4' },
      { label: 'Recomendacoes', href: pf('approvals.html'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Insights', href: pf('insights.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { label: 'Atividade', href: pf('activity.html'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    ]},
    { id: 'areas', label: 'Areas da Vida', icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z', items: [
      { label: 'Saude', href: pf('area-saude.html'), icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' },
      { label: 'Mente', href: pf('area-mente.html'), icon: 'M12 2a6 6 0 016 6c0 3-2 5-3 6h-6c-1-1-3-3-3-6a6 6 0 016-6z' },
      { label: 'Carreira', href: pf('area-carreira.html'), icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2' },
      { label: 'Financas', href: pf('area-financas.html'), icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' },
      { label: 'Proposito', href: pf('area-proposito.html'), icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
      { label: 'Produtividade', href: pf('area-produtividade.html'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Relacionamentos', href: pf('area-relacionamentos.html'), icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
      { label: 'Casa', href: pf('area-casa.html'), icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    ]},
    { id: 'mentores', label: 'Mentores', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', items: [
      { label: 'Conversar', href: pf('chat.html'), icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
      { label: 'Configurar mentores', href: pf('mentor-config.html'), icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
      { label: 'Especialistas', href: pf('specialist-config.html'), icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3' },
      { label: 'Meu mapa interior', href: pf('psychology.html'), icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
      { label: 'Minha evolucao', href: pf('evolution.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    ]},
    { id: 'sensei-pf', label: 'SenseiIA', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', items: [
      { label: 'Suas fontes', href: pf('sensei-fontes.html'), icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101' },
      { label: 'Painel', href: pf('sensei-painel.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { label: 'Pessoas', href: pf('sensei-pessoas.html'), icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
      { label: 'Insights', href: pf('sensei-insights.html'), icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3' },
      { label: 'Sessoes', href: pf('sensei-sessoes.html'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Correlacoes', href: pf('sensei-correlacoes.html'), icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z' },
    ]},
    { id: 'cerebro', label: 'Cerebro', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707', items: [
      { label: 'Meu cerebro', href: pf('brain.html'), icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3' },
      { label: 'Frameworks', href: pf('frameworks.html'), icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z' },
      { label: 'Espirito / Ikigai', href: pf('spirit.html'), icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    ]},
    { id: 'solucoes-pf', label: 'Solucoes', icon: 'M13 10V3L4 14h7v7l9-11h-7z', items: [
      { label: 'Automacoes de vida', href: pf('solutions.html'), icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z' },
      { label: 'Builder habitos', href: pf('builder.html'), icon: 'M9 11l3 3L22 4' },
      { label: 'Builder workflows', href: pf('builder-workflows.html'), icon: 'M12 4v16m8-8H4' },
    ]},
    { id: 'config-pf', label: 'Config', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', items: [
      { label: 'Configuracoes', href: pf('settings.html'), icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
      { label: 'Meu perfil', href: pf('profile.html'), icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z' },
      { label: 'Conexoes e fontes', href: pf('connect.html'), icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101' },
    ]},
  ];

  // Check if a client is selected (data-client="true" on body)
  const isClientView = document.body.getAttribute('data-client') === 'true';

  // GLOBAL SECTIONS (no client selected)
  const SECTIONS_GLOBAL = [
    { id: 'painel', label: 'Painel', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', items: [
      { label: 'Dashboard', href: t('dashboard.html'), icon: 'M4 6h16M4 12h16M4 18h7' },
      { label: 'Clientes', href: t('client-list.html'), icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' },
      { label: 'Minha Fila', href: t('sm-inbox.html'), icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', badge: '14' },
    ]},
    { id: 'producao', label: 'Producao', icon: 'M22 12h-4l-3 9L9 3l-3 9H2', items: [
      { label: 'Pipeline', href: t('pipeline.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { label: 'Calendario', href: t('calendar.html'), icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { label: 'Aprovacoes', href: t('approvals.html'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Webinars', href: t('webinar.html'), icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    ]},
    { id: 'agentes', label: 'Agentes', icon: 'M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6', items: [
      { label: 'Empresa Inteligente', href: t('agents-overview.html'), icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
      { label: 'Conexoes', href: t('connections.html'), icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101' },
      { label: 'Saude contas', href: t('health.html'), icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    ]},
    { id: 'config', label: 'Config', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35', items: [
      { label: 'Equipe', href: t('team-management.html'), icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197' },
      { label: 'Copilotos', href: t('team-copilot.html'), icon: 'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71' },
      { label: 'Permissoes', href: t('team-permissions.html'), icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      { label: 'Cobranca', href: t('billing.html'), icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
      { label: 'Configuracoes', href: t('settings.html'), icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0' },
    ]},
  ];

  // PER-CLIENT SECTIONS (client selected in org switcher)
  const SECTIONS_CLIENT = [
    { id: 'voltar', label: '← Todos clientes', icon: 'M19 12H5M12 19l-7-7 7-7', items: [
      { label: 'Dashboard', href: t('dashboard.html'), icon: 'M4 6h16M4 12h16M4 18h7' },
    ]},
    { id: 'cliente', label: 'Joao Mendes', icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z', items: [
      { label: 'Workspace', href: t('client-workspace.html'), icon: 'M4 6h16M4 12h16M4 18h7' },
      { label: 'Pipeline', href: t('pipeline.html'), icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
      { label: 'Calendario', href: t('calendar.html'), icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
      { label: 'Aprovacoes', href: t('approvals.html'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Brand Book', href: t('brandbook.html'), icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { label: 'Metricas', href: t('metrics.html'), icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z' },
      { label: 'Insights', href: t('insights.html'), icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
      { label: 'Webinar', href: t('webinar.html'), icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
      { label: 'Avatar Clone', href: t('avatar-clone.html'), icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    ]},
    { id: 'gestao-client', label: 'Gestao', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0', items: [
      { label: 'Agentes (Joao)', href: t('agents-client.html'), icon: 'M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6' },
      { label: 'Equipe (Joao)', href: t('client-team-assign.html'), icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z' },
      { label: 'Checklist', href: t('client-checklist.html'), icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Atividade', href: t('client-activity.html'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
      { label: 'Modo Sintetico', href: t('synthetic-mode.html'), icon: 'M12 2a6 6 0 016 6c0 3-2 5-3 6h-6c-1-1-3-3-3-6a6 6 0 016-6z' },
      { label: 'Gestao de Crise', href: t('crisis-management.html'), icon: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' },
      { label: 'Saude Conexoes', href: t('connection-health.html'), icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    ]},
  ];

  const SECTIONS = isClientView ? SECTIONS_CLIENT : SECTIONS_GLOBAL;

  function svg(d, size) {
    return `<svg width="${size||16}" height="${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  }

  // Chat contextual por área
  const chatContexts = {
    'dashboard':   { avatar:'S', name:'Sensei — Orquestrador', sender:'Sensei', greeting:'Bom dia! Motor publicou 18 posts e gerou 12 pautas esta noite. 3 aprovacoes atrasadas. Enviar lembrete no WhatsApp?', chips:['Resolver aprovacoes','Ver pipeline','Morning report'] },
    'client-list': { avatar:'S', name:'Sensei — Orquestrador', sender:'Sensei', greeting:'400 clientes gerenciados. 7 com pendencia hoje. Joao Mendes tem aprovacao atrasada 6h. Quer que eu priorize?', chips:['Ver pendencias','Novo cliente','Redistribuir'] },
    'client-workspace': { avatar:'S', name:'Sensei — Contexto do cliente', sender:'Sensei', greeting:'Contexto carregado. 3 posts pendentes de aprovacao e 3 slots vazios na sexta. Concorrente postou sobre delegacao com ER 5.2%. Quer pautas?', chips:['Criar pautas','Ver pipeline','Aprovar posts'] },
    'pipeline':    { avatar:'Sc', name:'Scout — Pipeline', sender:'Scout', greeting:'20 itens em producao agora. Joao Mendes tem 1 aprovacao atrasada 6h. Qual cliente quer ver primeiro?', chips:['Joao Mendes','Ver atrasados','Todos os clientes'] },
    'calendar':    { avatar:'S', name:'Sensei — Calendario', sender:'Sensei', greeting:'18 posts agendados esta semana. 3 slots vazios na sexta. Quer preencher com pautas automaticas?', chips:['Preencher vazios','Ver semana','Reagendar'] },
    'approvals':   { avatar:'S', name:'Sensei — Aprovacoes', sender:'Sensei', greeting:'7 aprovacoes pendentes. 3 atrasadas (SLA excedido). Quer que eu envie cobranca via WhatsApp?', chips:['Aprovar tudo','Cobrar atrasados','Ver detalhes'] },
    'insights':    { avatar:'Sc', name:'Scout — Pesquisador', sender:'Scout', greeting:'2 brechas encontradas nos concorrentes. @ceoinsights postou sobre delegacao com ER 5.2%. Oportunidade pro Joao.', chips:['Ver brechas','Trending hoje','Criar pauta'] },
    'metrics':     { avatar:'M', name:'Metrics — Analista', sender:'Metrics', greeting:'Resumo semanal: 142 posts publicados, ER medio 4.2%, +18% vs semana anterior. Melhor post: Joao carrossel delegacao (ER 6.8%).', chips:['Relatorio completo','Por cliente','Exportar PDF'] },
    'webinar':     { avatar:'D', name:'Director — Video', sender:'Director', greeting:'3 webinars processados. Ultimo: "Delegacao pra CEOs" (1h12min) gerou 47 micro-cortes. Quer enviar pro pipeline?', chips:['Ver cortes','Novo upload','Enviar pro pipeline'] },
    'avatar':      { avatar:'D', name:'Director — Avatar', sender:'Director', greeting:'3 avatares treinados. Joao: 92% semelhanca, 47 fotos. Quer gerar ensaio fotografico?', chips:['Gerar ensaio','Treinar novo','Ver galeria'] },
    'sm-inbox':    { avatar:'S', name:'Sensei — Sua Fila', sender:'Sensei', greeting:'Bom dia Maria! De madrugada produzi 8 roteiros e 3 designs. 3 com SLA vencendo. Joao pediu ajuste em 1. Por onde quer comecar?', chips:['Urgentes primeiro','Ver roteiros','Feedback founder'] },
    'client-activity': { avatar:'S', name:'Sensei — Atividade', sender:'Sensei', greeting:'Timeline completa desse cliente. Tudo que a IA fez, o SM revisou e o founder respondeu. Quer filtrar por tipo?', chips:['So IA','So founder','Ultimos 7 dias'] },
    'brandbook':   { avatar:'Q', name:'Quill — Brand Book', sender:'Quill', greeting:'Brand Book do Joao 86% completo. Faltam: paleta cores, variantes logo, tom secundario. Quer que eu finalize?', chips:['Finalizar','Editar bussola','Ver completo'] },
    'health':      { avatar:'S', name:'Sensei — Saude', sender:'Sensei', greeting:'9 de 12 contas saudaveis. Token LinkedIn do Pedro expira em 3 dias. GoLogin: 12 perfis ativos, 0 alertas.', chips:['Ver alertas','Renovar tokens','Status GoLogin'] },
    'connections':  { avatar:'S', name:'Sensei — Conexoes', sender:'Sensei', greeting:'9 de 12 ferramentas conectadas. Token LinkedIn expira em 3d. X e Blog nao configurados.', chips:['Configurar X','Renovar LinkedIn','Ver todas'] },
    'agents':      { avatar:'S', name:'Sensei — Agentes', sender:'Sensei', greeting:'7 agentes ativos. 342 acoes hoje. Score medio 92%. Quer ajustar algum agente?', chips:['Ver ranking','Configurar','Pausar agente'] },
    'team':        { avatar:'S', name:'Sensei — Equipe', sender:'Sensei', greeting:'8 membros, 400 clientes. Maria Silva com carga alta (120 clientes). Sugestao: redistribuir 20 pro Carlos.', chips:['Redistribuir','Convidar','Ver carga'] },
    'billing':     { avatar:'S', name:'Sensei — Cobranca', sender:'Sensei', greeting:'400 clientes x R$1.000 = R$400K MRR. Consumo tokens: 34%. Tudo sob controle.', chips:['Ver faturas','Consumo tokens','Projecao'] },
    'settings':    { avatar:'S', name:'Sensei — Config', sender:'Sensei', greeting:'Autopilot ativo, aprovacao 2 niveis, anti-bot ligado. Quer mudar algo?', chips:['Anti-bot','Aprovacao','Horarios'] },
  };

  // Resolve chat context based on path
  function getChatCtx() {
    for (var key in chatContexts) {
      if (path.includes(key)) return chatContexts[key];
    }
    // Defaults
    if (isPF) return { avatar:'Y', name:'Yumi — Sua Mentora', sender:'Yumi', greeting:'Oi! Sou a Yumi. Posso te ajudar com qualquer area da sua vida — saude, mente, carreira, financas... O que precisa agora?', chips:['Como dormi?','Metas da semana','Resumo do dia'] };
    return { avatar:'S', name:'Sensei — Orquestrador', sender:'Sensei', greeting:'Bom dia! Posso ajudar com qualquer coisa — "quanto lucrei essa semana", "quem esta atrasado", "ativa o modulo de SEO", "agenda reuniao com o time"...', chips:['Quanto lucrei?','Quem esta atrasado?','Resumo do dia'] };
  }
  const chatCtx = getChatCtx();

  function buildNav() {
    // Use PF sections when in /pf/ path
    const sections = isPF ? PF_SECTIONS : SECTIONS;

    // Determine which section is active
    let activeSection = '';
    sections.forEach(s => {
      if (s.items.some(item => item.href.endsWith(currentFile))) activeSection = s.id;
    });

    let sidebarItems = '';
    sections.forEach(s => {
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
        <div class="kt-org" onclick="toggleOrgSwitcher()">
          <span class="kt-logo">KTANA</span>
          <span class="kt-client-name" style="font-family:'Inter',sans-serif;font-size:12px;color:rgba(255,255,255,0.65);margin-left:8px;">${isPF ? 'Pessoal' : 'Grupo Silva'}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="kt-org-chev"><path d="M6 9l6 6 6-6"/></svg>
          <!-- Context Switcher (inside kt-org for correct positioning) -->
          <div class="kt-org-drop" id="ktOrgDrop">
          ${isPF ? `
          <div class="kt-org-head">Seus perfis</div>
          <div class="kt-org-item kt-org-active" onclick="switchOrg('Pessoal', event)">
            <div class="kt-org-av" style="background:rgba(215,0,48,0.06);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#D70030;">JC</div>
            <div class="kt-org-info"><div class="kt-org-n">Julio Cesar</div><div class="kt-org-p">8 areas · 8 mentores ativos</div></div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#30D158" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <div class="kt-org-sep"></div>
          <div class="kt-org-head">Familia</div>
          <div class="kt-org-item" onclick="switchOrg('Ana', event)">
            <div class="kt-org-av" style="background:rgba(191,90,242,0.08);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#BF5AF2;">AC</div>
            <div class="kt-org-info"><div class="kt-org-n">Ana Cesar</div><div class="kt-org-p">5 areas · 5 mentores</div></div>
          </div>
          <div class="kt-org-item" onclick="switchOrg('Pedro', event)">
            <div class="kt-org-av" style="background:rgba(100,210,255,0.08);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#64D2FF;">PC</div>
            <div class="kt-org-info"><div class="kt-org-n">Pedro Cesar</div><div class="kt-org-p">3 areas · 3 mentores</div></div>
          </div>
          <div class="kt-org-sep"></div>
          <a href="settings.html" class="kt-org-item kt-org-manage">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Adicionar familiar</span>
          </a>
          ` : `
          <div class="kt-org-head">Clientes ativos</div>
          <a href="client-workspace.html" class="kt-org-item kt-org-active" style="text-decoration:none">
            <div class="kt-org-av" style="background:linear-gradient(135deg,#D70030,#A60028);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;">JM</div>
            <div class="kt-org-info"><div class="kt-org-n">Joao Mendes</div><div class="kt-org-p">CEO TechFlow · Fase 4 · Autopilot</div></div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#30D158" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          </a>
          <a href="client-workspace.html" class="kt-org-item" style="text-decoration:none">
            <div class="kt-org-av" style="background:linear-gradient(135deg,#5856D6,#3A38A0);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;">AC</div>
            <div class="kt-org-info"><div class="kt-org-n">Ana Costa</div><div class="kt-org-p">Advogada tributarista · Fase 2</div></div>
          </a>
          <a href="client-workspace.html" class="kt-org-item" style="text-decoration:none">
            <div class="kt-org-av" style="background:linear-gradient(135deg,#007AFF,#0055CC);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;">PS</div>
            <div class="kt-org-info"><div class="kt-org-n">Pedro Souza</div><div class="kt-org-p">Cirurgiao plastico · Fase 1</div></div>
          </a>
          <a href="client-workspace.html" class="kt-org-item" style="text-decoration:none">
            <div class="kt-org-av" style="background:linear-gradient(135deg,#FF9500,#CC7700);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;">MF</div>
            <div class="kt-org-info"><div class="kt-org-n">Maria Fernandes</div><div class="kt-org-p">CEO Consulting · Fase 5 · Autopilot</div></div>
          </a>
          <a href="client-workspace.html" class="kt-org-item" style="text-decoration:none">
            <div class="kt-org-av" style="background:linear-gradient(135deg,#34C759,#248A3D);font-family:'Inter',sans-serif;font-size:10px;font-weight:600;color:#FFF;">RC</div>
            <div class="kt-org-info"><div class="kt-org-n">Roberto Campos</div><div class="kt-org-p">Investidor anjo · Fase 4</div></div>
          </a>
          <div class="kt-org-sep"></div>
          <a href="client-list.html" class="kt-org-item kt-org-manage" style="text-decoration:none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span>Ver todos (400 clientes)</span>
          </a>
          <a href="client-onboarding-wizard.html" class="kt-org-item kt-org-manage" style="text-decoration:none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Cadastrar novo cliente</span>
          </a>
          `}
          </div>
        </div>
        <div class="kt-spacer"></div>
        <button class="kt-ai-btn" onclick="toggleAI()" title="Assistente IA">
          ${svg('M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', 18)}
          <span class="kt-ai-label">Suporte</span>
        </button>
        <button class="kt-avatar" title="Perfil" onclick="toggleProfileDrop()">
          ${svg('M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z', 16)}
        </button>
        <!-- Profile Dropdown — Config da empresa -->
        <div class="kt-profile-drop" id="ktProfileDrop">
          <div style="padding:14px 16px;border-bottom:0.5px solid rgba(0,0,0,0.04);display:flex;align-items:center;gap:10px">
            <div style="width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;font-size:10px;font-weight:700;color:#FFF">GS</div>
            <div><div style="font-family:'Satoshi',sans-serif;font-size:14px;font-weight:600;color:#1D1D1F">Grupo Silva</div><div style="font-family:'Inter',sans-serif;font-size:11px;color:#86868B">400 clientes · R$400K MRR</div></div>
          </div>
          <a href="settings.html" class="kt-profile-item" style="text-decoration:none">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33"/></svg>
            <span>Configuracoes da empresa</span>
          </a>
          <a href="team-management.html" class="kt-profile-item" style="text-decoration:none">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span>Equipe e permissoes</span>
          </a>
          <a href="billing.html" class="kt-profile-item" style="text-decoration:none">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <span>Cobranca</span>
          </a>
          <a href="connections.html" class="kt-profile-item" style="text-decoration:none">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"/></svg>
            <span>Conexoes e APIs</span>
          </a>
          <div class="kt-profile-sep"></div>
          <button class="kt-profile-item kt-profile-logout" onclick="location.href='login.html'">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span>Sair</span>
          </button>
        </div>
        <button class="kt-toggle" onclick="toggleSidebar()" title="Menu">
          ${svg('M4 6h16M4 12h16M4 18h16', 18)}
        </button>
      </div>
    </header>

    <!-- Sidebar (abre pela direita) -->
    <aside class="ks" id="ktSidebar">
      <div class="ks-head">
        <span class="ks-head-label">Menu</span>
        <button class="ks-head-close" onclick="toggleSidebar()">${svg('M6 18L18 6M6 6l12 12', 14)}</button>
      </div>
      <nav class="ks-nav">
        ${sidebarItems}
      </nav>
      <div class="ks-foot">
        <a href="pipeline.html" class="ks-foot-link">${svg('M22 12h-4l-3 9L9 3l-3 9H2', 14)} Pipeline</a>
        <a href="connection-whatsapp.html" class="ks-foot-link">${svg('M3 21l1.65-3.8a9 9 0 113.15 2.85L3 21z', 14)} WhatsApp</a>
        <a href="settings.html" class="ks-foot-link">${svg('M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37', 14)} Suporte</a>
      </div>
    </aside>
    <div class="ks-overlay" id="ksOverlay" onclick="toggleSidebar()"></div>

    <!-- CHAT DO AGENTE (lateral direita, escuro, estilo dashboard) -->
    <div class="kc" id="ktChat">
      <!-- Ambient Glow -->
      <div class="kc-glow">
        <div class="kc-glow-orb"></div>
        <div class="kc-glow-orb"></div>
        <div class="kc-glow-orb"></div>
      </div>
      <!-- Header -->
      <div class="kc-head">
        <div class="kc-agent">
          <div class="kc-avatar">${chatCtx.avatar}</div>
          <div>
            <div class="kc-name">${chatCtx.name}</div>
            <div class="kc-status">Online</div>
          </div>
        </div>
      </div>
      <!-- Messages -->
      <div class="kc-msgs" id="kcMsgs">
        <div class="kc-msg kc-agent-msg">
          <div class="kc-sender">${chatCtx.sender}</div>
          <div class="kc-bubble">${chatCtx.greeting}</div>
          <div class="kc-time">agora</div>
        </div>
        <!-- Typing indicator -->
        <div class="kc-typing" id="kcTyping">
          <div class="kc-typing-dots">
            <div class="kc-typing-dot"></div>
            <div class="kc-typing-dot"></div>
            <div class="kc-typing-dot"></div>
          </div>
          <span class="kc-typing-text">${chatCtx.sender} esta pensando...</span>
        </div>
        <!-- Chips -->
        <div class="kc-chips">
          ${chatCtx.chips.map(c => '<button class="kc-chip" onclick="kcQuick(this)">' + c + '</button>').join('')}
        </div>
      </div>
      <!-- Input com glow border -->
      <div class="kc-input-area">
        <div class="kc-input-outer">
          <div class="kc-input-glow"></div>
          <div class="kc-input-border-spin"></div>
          <div class="kc-input-card">
            <textarea class="kc-input" id="kcInput" placeholder="Fale com ${chatCtx.sender}..." rows="1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();kcSend()}" oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"></textarea>
            <div class="kc-input-footer">
              <button class="kc-add-btn" title="Anexar">+</button>
              <span class="kc-agent-tag">${chatCtx.sender}</span>
              <button class="kc-send" onclick="kcSend()">${svg('M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', 16)}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL DE SUPORTE — Chat Dark Ambient Glow com agente treinado -->
    <div class="ks-support-overlay" id="ksSupportOverlay" onclick="closeSupportModal()"></div>
    <div class="ks-support" id="ksSupportModal">
      <div class="ks-support-head">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#D70030,#8B0000);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;">
            ${svg('M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6', 16)}
            <div style="position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;background:#30D158;border:2px solid #1D1D1F;"></div>
          </div>
          <div>
            <div style="font-family:'Zen Dots',cursive;font-size:12px;color:#FFF;">Suporte KTANA</div>
            <div style="font-family:'Inter',sans-serif;font-size:10px;color:rgba(255,255,255,0.5);">Agente treinado · Resposta imediata</div>
          </div>
        </div>
        <button onclick="closeSupportModal()" style="position:absolute;top:14px;right:14px;width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,0.08);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);">${svg('M6 18L18 6M6 6l12 12', 12)}</button>
      </div>
      <div class="ks-support-msgs" id="ksSupportMsgs">
        <div style="max-width:88%;padding:12px 16px;border-radius:16px 16px 16px 4px;background:rgba(255,255,255,0.08);font-family:'Satoshi',sans-serif;font-size:13px;line-height:1.6;color:rgba(255,255,255,0.9);">
          Oi! Sou o agente de suporte KTANA. Posso ajudar com <strong style="color:#D70030;">conexoes, agentes, cobranca, configuracoes</strong> e qualquer problema tecnico. O que precisa?
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;">
          <button onclick="document.getElementById('ksSupportInput').value='Conexao com Instagram caiu';sendSupport();" style="font-family:'Inter',sans-serif;padding:7px 14px;border-radius:980px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);font-size:11px;color:rgba(255,255,255,0.7);cursor:pointer;transition:all 0.15s;">Conexao caiu</button>
          <button onclick="document.getElementById('ksSupportInput').value='Agente nao esta respondendo';sendSupport();" style="font-family:'Inter',sans-serif;padding:7px 14px;border-radius:980px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);font-size:11px;color:rgba(255,255,255,0.7);cursor:pointer;transition:all 0.15s;">Agente parou</button>
          <button onclick="document.getElementById('ksSupportInput').value='Preciso mudar meu plano';sendSupport();" style="font-family:'Inter',sans-serif;padding:7px 14px;border-radius:980px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);font-size:11px;color:rgba(255,255,255,0.7);cursor:pointer;transition:all 0.15s;">Mudar plano</button>
          <button onclick="document.getElementById('ksSupportInput').value='Problema de cobranca';sendSupport();" style="font-family:'Inter',sans-serif;padding:7px 14px;border-radius:980px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);font-size:11px;color:rgba(255,255,255,0.7);cursor:pointer;transition:all 0.15s;">Cobranca</button>
        </div>
      </div>
      <div class="ks-support-input">
        <input type="text" id="ksSupportInput" placeholder="Descreva seu problema..." onkeydown="if(event.key==='Enter')sendSupport()">
        <button onclick="sendSupport()">${svg('M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', 14)}</button>
      </div>
    </div>`;
  }

  // Styles
  const style = document.createElement('style');
  style.textContent = `
    /* Top Bar */
    .kt { position: fixed; top: 0; left: 0; right: 0; z-index: 200; height: 52px; background: ${isPF ? 'linear-gradient(180deg, #D70030 0%, #C0002A 100%)' : 'linear-gradient(180deg, #1D1D1F 0%, #2C2C2E 100%)'}; backdrop-filter: saturate(180%) blur(20px); -webkit-backdrop-filter: saturate(180%) blur(20px); border-bottom: 0.5px solid rgba(0,0,0,0.1); }
    body { padding-top: 52px; }
    .kt::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 1px; background: ${isPF ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)' : 'linear-gradient(90deg, transparent 0%, rgba(215,0,48,0.08) 50%, transparent 100%)'}; }
    .kt-inner { height: 100%; padding: 0 20px 0 400px; display: flex; align-items: center; gap: 16px; }
    .kt-toggle { width: 36px; height: 36px; border-radius: 10px; border: none; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #FFF; transition: background 0.15s; }
    .kt-toggle:hover { background: rgba(255,255,255,0.1); }
    .kt-logo { font-family: 'Zen Dots', cursive; font-size: 15px; color: ${isPF ? '#FFF' : '#D70030'}; text-decoration: none; }
    .kt-spacer { flex: 1; }
    .kt-ai-btn { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border-radius: 980px; border: none; background: rgba(255,255,255,0.15); cursor: pointer; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; color: #F5F5F7; transition: all 0.2s; }
    .kt-ai-btn:hover { background: rgba(255,255,255,0.25); box-shadow: 0 2px 12px rgba(0,0,0,0.15); }
    .kt-ai-btn svg { color: #F5F5F7; }
    .kt-ai-label { }
    .kt-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.15s; cursor: pointer; }
    .kt-avatar:hover { background: rgba(255,255,255,0.2); color: #FFF; }

    /* Profile Dropdown */
    .kt-profile-drop { position: absolute; top: 48px; right: 20px; width: 260px; background: #FFF; border-radius: 16px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px rgba(0,0,0,0.12); z-index: 400; display: none; overflow: hidden; padding: 6px 0; }
    .kt-profile-drop.open { display: block; animation: kaUp 0.2s cubic-bezier(0.32,0.72,0,1); }
    .kt-profile-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; cursor: pointer; transition: background 0.12s; text-decoration: none; color: #1D1D1F; font-family: 'Inter', -apple-system, sans-serif; font-size: 13px; border: none; background: transparent; width: 100%; text-align: left; }
    .kt-profile-item:hover { background: rgba(0,0,0,0.03); }
    .kt-profile-item svg { color: #86868B; flex-shrink: 0; }
    .kt-profile-sep { height: 1px; background: rgba(0,0,0,0.04); margin: 4px 0; }
    .kt-profile-env-label { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #AEAEB2; padding: 8px 16px 4px; }
    .kt-profile-env-active { cursor: default; }
    .kt-profile-env-active:hover { background: transparent; }
    .kt-env-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .kt-env-dot-active { background: #30D158; box-shadow: 0 0 6px rgba(48,209,88,0.4); }
    .kt-env-current { margin-left: auto; font-size: 10px; font-weight: 500; color: #30D158; background: rgba(48,209,88,0.08); padding: 2px 8px; border-radius: 6px; }
    .kt-profile-env-switch { color: #86868B; }
    .kt-profile-env-switch:hover { color: #1D1D1F; background: rgba(0,0,0,0.03); }
    .kt-profile-logout { color: #86868B; }
    .kt-profile-logout:hover { color: #D70030; background: rgba(215,0,48,0.03); }
    .kt-profile-logout:hover svg { color: #D70030; }

    /* PF WhatsApp Auth */
    .kt-pf-auth { padding: 12px 16px 8px; }
    .kt-pf-auth-msg { font-family: 'Inter', sans-serif; font-size: 11px; color: #86868B; line-height: 1.5; margin-bottom: 10px; }
    .kt-pf-auth-inputs { display: flex; gap: 6px; justify-content: center; }
    .kt-pf-code { width: 34px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.08); background: #F5F5F7; text-align: center; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #1D1D1F; outline: none; transition: border-color 0.15s; }
    .kt-pf-code:focus { border-color: #D70030; box-shadow: 0 0 0 2px rgba(215,0,48,0.08); }
    .kt-client-name { display: flex; align-items: center; }

    /* Org Switcher */
    .kt-org { display: flex; align-items: center; gap: 6px; cursor: pointer; padding: 4px 10px 4px 0; border-radius: 8px; transition: background 0.15s; position: relative; }
    .kt-org:hover { background: rgba(0,0,0,0.03); }
    .kt-org-name { font-family: 'Inter', -apple-system, sans-serif; font-size: 12px; color: #6E6E73; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .kt-org-chev { color: #AEAEB2; transition: transform 0.2s; }
    .kt-org.open .kt-org-chev { transform: rotate(180deg); }

    .kt-org-drop { position: absolute; top: calc(100% + 6px); left: 0; width: 280px; background: #FFF; border-radius: 16px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 12px 48px rgba(0,0,0,0.12); z-index: 400; display: none; overflow: hidden; }
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
    .ks { position: fixed; top: 0; right: 0; bottom: 0; width: 272px; background: #FFF; z-index: 300; transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.4,0,0.2,1); box-shadow: none; display: flex; flex-direction: column; border-left: 0.5px solid rgba(0,0,0,0.06); }
    .ks.open { transform: translateX(0); box-shadow: -20px 0 60px rgba(0,0,0,0.08); }
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

    /* CHAT DO AGENTE — Panel escuro lateral direita (estilo dashboard) */
    .kc { position: fixed; top: 52px; left: 0; width: 420px; height: calc(100vh - 52px); background: #0A0A0A; border-right: 0.5px solid rgba(255,255,255,0.06); z-index: 190; display: flex; flex-direction: column; overflow: hidden; }
    body.kc-open { margin-left: 420px; transition: margin-left 0.3s ease; }

    /* Ambient Glow */
    .kc-glow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
    .kc-glow-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(60px); }
    .kc-glow-orb:nth-child(1) { width: 55%; height: 45%; top: 0; left: -10%; background: radial-gradient(ellipse at center, rgba(215,0,48,0.18) 0%, transparent 70%); animation: kcOrb1 10s ease-in-out infinite; }
    .kc-glow-orb:nth-child(2) { width: 45%; height: 40%; top: 20%; right: -10%; background: radial-gradient(ellipse at center, rgba(160,15,5,0.14) 0%, transparent 70%); animation: kcOrb2 14s ease-in-out infinite; }
    .kc-glow-orb:nth-child(3) { width: 40%; height: 45%; bottom: -5%; left: 20%; background: radial-gradient(ellipse at center, rgba(220,80,25,0.12) 0%, transparent 70%); animation: kcOrb3 12s ease-in-out infinite; }
    @keyframes kcOrb1 { 0%,100% { transform: translate(0,0); } 33% { transform: translate(8%,6%); } 66% { transform: translate(-4%,-4%); } }
    @keyframes kcOrb2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10%,5%); } }
    @keyframes kcOrb3 { 0%,100% { transform: translate(0,0); } 33% { transform: translate(6%,-6%); } 66% { transform: translate(-5%,3%); } }

    /* Header */
    .kc-head { padding: 18px 20px; border-bottom: 0.5px solid rgba(255,255,255,0.06); position: relative; z-index: 1; }
    .kc-agent { display: flex; align-items: center; gap: 12px; }
    .kc-avatar { width: 36px; height: 36px; border-radius: 50%; background: rgba(215,0,48,0.15); display: flex; align-items: center; justify-content: center; font-family: 'Zen Dots', cursive; font-size: 12px; color: #D70030; border: 1.5px solid rgba(215,0,48,0.15); flex-shrink: 0; }
    .kc-name { font-family: 'Satoshi', sans-serif; font-size: 14px; font-weight: 600; color: #E5E5EA; }
    .kc-status { font-family: 'Inter', sans-serif; font-size: 11px; color: #30D158; display: flex; align-items: center; gap: 4px; }
    .kc-status::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #30D158; }

    /* Messages */
    .kc-msgs { flex: 1; overflow-y: auto; padding: 20px; position: relative; z-index: 1; }
    .kc-msg { margin-bottom: 16px; max-width: 90%; animation: kcFade 0.3s ease; }
    @keyframes kcFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    .kc-agent-msg { margin-right: auto; }
    .kc-user-msg { margin-left: auto; }
    .kc-sender { font-family: 'Inter', sans-serif; font-size: 11px; color: #D70030; font-weight: 500; margin-bottom: 4px; }
    .kc-bubble { padding: 12px 16px; border-radius: 18px; font-family: 'Satoshi', sans-serif; font-size: 14px; line-height: 1.6; }
    .kc-agent-msg .kc-bubble { background: rgba(255,255,255,0.04); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.06); color: #E5E5EA; border-bottom-left-radius: 4px; }
    .kc-user-msg .kc-bubble { background: rgba(215,0,48,0.12); border: 1px solid rgba(215,0,48,0.18); color: #F5F5F7; border-bottom-right-radius: 4px; }
    .kc-time { font-family: 'Inter', sans-serif; font-size: 10px; color: rgba(255,255,255,0.35); margin-top: 4px; padding: 0 4px; }
    .kc-user-msg .kc-time { text-align: right; }

    /* Typing indicator */
    .kc-typing { display: none; align-items: center; gap: 8px; padding: 6px 0; margin-bottom: 8px; }
    .kc-typing.active { display: flex; }
    .kc-typing-dots { display: flex; gap: 4px; }
    .kc-typing-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(215,0,48,0.4); animation: kcBounce 1.4s ease infinite; }
    .kc-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .kc-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes kcBounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-3px); } }
    .kc-typing-text { font-family: 'Inter', sans-serif; font-size: 11px; color: rgba(255,255,255,0.35); }

    /* Chips */
    .kc-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; padding: 0 4px; }
    .kc-chip { font-family: 'Inter', sans-serif; padding: 6px 14px; border-radius: 980px; font-size: 12px; color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.03); border: 0.5px solid rgba(255,255,255,0.1); cursor: pointer; transition: all 0.15s; }
    .kc-chip:hover { background: rgba(215,0,48,0.12); color: #F5F5F7; border-color: rgba(215,0,48,0.25); }

    /* Input area com glow + rotating border */
    .kc-input-area { padding: 16px 20px; position: relative; z-index: 1; }
    .kc-input-outer { position: relative; border-radius: 14px; }
    .kc-input-glow { position: absolute; top: 50%; left: 50%; width: 110%; height: 180%; transform: translate(-50%,-50%); pointer-events: none; z-index: 0; filter: blur(30px); opacity: 0.65; background: radial-gradient(ellipse 50% 50% at 30% 40%, rgba(215,0,48,0.45) 0%, transparent 70%), radial-gradient(ellipse 45% 50% at 70% 50%, rgba(160,15,5,0.35) 0%, transparent 65%), radial-gradient(ellipse 40% 45% at 50% 55%, rgba(220,80,25,0.25) 0%, transparent 60%); animation: kcGlow 8s ease-in-out infinite; }
    @keyframes kcGlow { 0% { transform: translate(-50%,-50%) rotate(0deg); } 25% { transform: translate(-45%,-53%) rotate(2deg); } 50% { transform: translate(-55%,-47%) rotate(-1deg); } 75% { transform: translate(-48%,-52%) rotate(1.5deg); } 100% { transform: translate(-50%,-50%) rotate(0deg); } }
    .kc-input-border-spin { position: absolute; inset: -1px; border-radius: 15px; z-index: 1; overflow: hidden; pointer-events: none; }
    .kc-input-border-spin::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(transparent 30%, rgba(140,10,5,0.6) 38%, rgba(215,0,48,0.8) 42%, rgba(220,80,25,0.5) 48%, transparent 55%, transparent 80%, rgba(180,30,8,0.3) 87%, rgba(215,0,48,0.5) 92%, transparent 97%); animation: kcSpin 5s linear infinite; }
    @keyframes kcSpin { to { transform: rotate(360deg); } }
    .kc-input-border-spin::after { content: ''; position: absolute; inset: 1px; border-radius: 14px; background: #111; }
    .kc-input-card { background: #111; border-radius: 14px; position: relative; z-index: 2; display: flex; flex-direction: column; }
    .kc-input { font-family: 'Satoshi', sans-serif; width: 100%; padding: 14px 18px 48px; border-radius: 14px; border: none; background: transparent; font-size: 15px; color: #E5E5EA; outline: none; min-height: 56px; max-height: 120px; resize: none; box-sizing: border-box; }
    .kc-input::placeholder { color: rgba(255,255,255,0.25); }
    .kc-input-footer { position: absolute; bottom: 0; left: 0; right: 0; padding: 8px 14px; display: flex; align-items: center; gap: 8px; border-top: 1px solid rgba(255,255,255,0.04); }
    .kc-add-btn { width: 30px; height: 30px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 16px; transition: all 0.15s; }
    .kc-add-btn:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.7); }
    .kc-agent-tag { font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 5px 10px; }
    .kc-send { margin-left: auto; width: 34px; height: 34px; border-radius: 10px; background: #D70030; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.1s, background 0.15s; flex-shrink: 0; color: #F5F5F7; }
    .kc-send:hover { background: #E5003A; }
    .kc-send:active { transform: scale(0.92); }

    /* MODAL DE SUPORTE — Chat Dark Ambient Glow */
    .ks-support-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 500; display: none; }
    .ks-support-overlay.open { display: block; }
    .ks-support { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 440px; max-height: 600px; background: #1D1D1F; border-radius: 24px; box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06); z-index: 501; display: none; flex-direction: column; overflow: hidden; }
    .ks-support.open { display: flex; }
    .ks-support-head { padding: 16px 18px; position: relative; border-bottom: 1px solid rgba(255,255,255,0.06); }
    .ks-support-msgs { flex: 1; overflow-y: auto; padding: 18px; min-height: 200px; max-height: 380px; display: flex; flex-direction: column; gap: 10px; }
    .ks-support-input { padding: 12px 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; gap: 8px; }
    .ks-support-input input { flex: 1; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); font-family: 'Satoshi', sans-serif; font-size: 13px; color: #FFF; outline: none; }
    .ks-support-input input:focus { border-color: rgba(215,0,48,0.4); }
    .ks-support-input input::placeholder { color: rgba(255,255,255,0.3); }
    .ks-support-input button { width: 34px; height: 34px; border-radius: 10px; background: #D70030; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #FFF; flex-shrink: 0; }
    .ks-support-input button:hover { background: #E5003A; }

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
    .ks-item-active::before { content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 3px; height: 16px; background: #D70030; border-radius: 2px 0 0 2px; }

    /* Hover glow on AI button */
    .kt-ai-btn { position: relative; overflow: hidden; }

    @media (max-width: 640px) {
      .ks { width: 100%; }
      .kc { display: none; }
      body.kc-open { margin-left: 0; }
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

  // Inject client context bar on per-client pages
  if (isClientView) {
    const mainEl = document.querySelector('main, .main, [class*="main"]');
    if (mainEl) {
      const ctxBar = document.createElement('div');
      ctxBar.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 0 16px;margin-bottom:8px;border-bottom:1px solid rgba(0,0,0,0.06);';
      ctxBar.innerHTML = `
        <a href="dashboard.html" style="font-family:Inter,sans-serif;font-size:13px;color:#D70030;font-weight:500;text-decoration:none;display:flex;align-items:center;gap:4px;flex-shrink:0;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Todos clientes
        </a>
        <div style="width:1px;height:20px;background:rgba(0,0,0,0.08);flex-shrink:0"></div>
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#D70030,#A60028);display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:12px;font-weight:700;color:#FFF;flex-shrink:0">JM</div>
        <div style="flex:1;min-width:0">
          <div style="font-family:Satoshi,sans-serif;font-size:15px;font-weight:600;color:#1D1D1F">Joao Mendes</div>
          <div style="font-family:Inter,sans-serif;font-size:12px;color:#86868B">CEO TechFlow — SaaS B2B — Fase 4 — Autopilot</div>
        </div>
        <div style="display:flex;gap:8px;flex-shrink:0">
          <span style="font-family:Inter,sans-serif;font-size:12px;font-weight:600;padding:4px 10px;border-radius:8px;background:rgba(52,199,89,0.08);color:#34C759">Ativo</span>
        </div>
      `;
      mainEl.insertBefore(ctxBar, mainEl.firstChild);
    }
  }

  // Handlers
  // Open sidebar by default on dashboard home (desktop only)
  const isDashboardHome = currentFile === 'home.html' && path.includes('/dashboard/');
  const isDesktop = window.innerWidth > 768;
  let sidebarOpen = isDashboardHome && isDesktop;
  // Chat do agente: skip em telas que já têm chat próprio (builder, dashboard home)
  const skipChat = path.includes('/builder') || (currentFile === 'home.html' && path.includes('/dashboard/')) || currentFile === 'chat.html' || currentFile === 'terminal.html' || currentFile === 'support.html' || currentFile === 'org.html' || (currentFile === 'list.html' && path.includes('/approvals/')) || currentFile === 'expert-chat.html' || (currentFile === 'list.html' && path.includes('/team/')) || currentFile === 'whatsapp.html' || currentFile === 'habits.html' || currentFile.startsWith('sensei-');
  if (skipChat) {
    var chatEl = document.getElementById('ktChat');
    if (chatEl) chatEl.style.display = 'none';
    var headerInner = document.querySelector('.kt-inner');
    if (headerInner) headerInner.style.paddingLeft = '20px';
  } else if (isDesktop) {
    document.body.classList.add('kc-open');
  }

  window.toggleSidebar = function() {
    sidebarOpen = !sidebarOpen;
    document.getElementById('ktSidebar').classList.toggle('open', sidebarOpen);
    document.getElementById('ksOverlay').classList.toggle('open', sidebarOpen);
  };

  window.toggleSection = function(id) {
    const section = document.querySelector(`.ks-section:has(#ks-${id})`);
    if (!section) {
      document.querySelectorAll('.ks-section').forEach(s => {
        if (s.querySelector('#ks-' + id)) s.classList.toggle('ks-open');
      });
      return;
    }
    section.classList.toggle('ks-open');
  };

  // Botão suporte abre modal branco
  window.toggleAI = function() {
    document.getElementById('ksSupportOverlay').classList.toggle('open');
    document.getElementById('ksSupportModal').classList.toggle('open');
  };

  window.goToPF = function() {
    // From any tenant page, navigate to PF dashboard
    var loc = window.location.pathname;
    var base = loc.substring(0, loc.indexOf('/tenant/') !== -1 ? loc.indexOf('/tenant/') : loc.indexOf('/pj/') !== -1 ? loc.indexOf('/pj/') : loc.lastIndexOf('/'));
    window.location.href = base + '/pf/dashboard.html';
  };

  window.closeSupportModal = function() {
    document.getElementById('ksSupportOverlay').classList.remove('open');
    document.getElementById('ksSupportModal').classList.remove('open');
  };

  window.sendSupport = function() {
    const input = document.getElementById('ksSupportInput');
    const val = input.value.trim();
    if (!val) return;
    const msgs = document.getElementById('ksSupportMsgs');
    // User msg — vermelho (mesmo padrao chat principal)
    msgs.innerHTML += '<div style="padding:10px 14px;background:#D70030;color:#FFF;border-radius:16px 16px 4px 16px;align-self:flex-end;max-width:85%;font-family:Satoshi,sans-serif;font-size:13px;">' + val + '</div>';
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
    // Respostas contextuais por tipo de problema
    const responses = {
      'conexao': 'Verificando suas conexoes agora... <strong style="color:#D70030">Instagram</strong> e <strong style="color:#D70030">LinkedIn</strong> estao ativos. Qual rede especificamente esta com problema?',
      'agente': 'Analisando status dos agentes... Todos os 7 agentes estao online. <strong style="color:#D70030">Scout</strong> teve um pico de latencia as 14h mas ja normalizou. Qual agente esta travado?',
      'plano': 'Seu plano atual: <strong style="color:#D70030">400 clientes x R$1.000</strong> = R$400K MRR. Posso ajudar a entender as opcoes de upgrade, desconto por volume, ou ajuste de consumo de tokens.',
      'cobranca': 'Ultima fatura: <strong style="color:#D70030">R$12.400</strong> (tokens + infra). Status: paga em 28/Mar. Proxima vence em 28/Abr. Quer que eu detalhe algum item?'
    };
    const key = val.toLowerCase().includes('conex') ? 'conexao' : val.toLowerCase().includes('agent') || val.toLowerCase().includes('respond') ? 'agente' : val.toLowerCase().includes('plano') || val.toLowerCase().includes('mudar') ? 'plano' : val.toLowerCase().includes('cobran') || val.toLowerCase().includes('fatura') ? 'cobranca' : null;
    setTimeout(function() {
      const reply = key ? responses[key] : 'Entendi. Estou analisando o problema. Vou verificar logs e status dos sistemas. Em casos complexos, escalo automaticamente pro time tecnico com toda a evidencia.';
      msgs.innerHTML += '<div style="padding:12px 16px;background:rgba(255,255,255,0.08);border-radius:16px 16px 16px 4px;max-width:88%;font-family:Satoshi,sans-serif;font-size:13px;line-height:1.6;color:rgba(255,255,255,0.9);">' + reply + '</div>';
      msgs.scrollTop = msgs.scrollHeight;
    }, 800);
  };

  // Chat do agente — enviar mensagem
  window.kcSend = function() {
    const input = document.getElementById('kcInput');
    const val = input.value.trim();
    if (!val) return;
    const msgs = document.getElementById('kcMsgs');
    msgs.innerHTML += '<div class="kc-msg kc-user-msg"><div class="kc-bubble">' + val + '</div><div class="kc-time">' + new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}) + '</div></div>';
    input.value = '';
    input.style.height = 'auto';
    msgs.scrollTop = msgs.scrollHeight;
    // Show typing
    var typing = document.getElementById('kcTyping');
    if (typing) typing.classList.add('active');
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(function() {
      if (typing) typing.classList.remove('active');
      const responses = isPF
        ? ['Entendi! Vou falar com seus mentores sobre isso.', 'Ja estou analisando seus dados. Um momento...', 'Vou ajustar sua rotina com base nisso.']
        : ['Entendi! Vou verificar isso pra voce agora.', 'Ja estou processando. Um momento...', 'Akira consultou a equipe. Aqui esta o resultado...'];
      var agentName = chatCtx.sender;
      msgs.innerHTML += '<div class="kc-msg kc-agent-msg"><div class="kc-sender">' + agentName + '</div><div class="kc-bubble">' + responses[Math.floor(Math.random()*responses.length)] + '</div><div class="kc-time">' + new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}) + '</div></div>';
      msgs.scrollTop = msgs.scrollHeight;
    }, 1200);
  };

  // Chat do agente — quick chips
  window.kcQuick = function(btn) {
    document.getElementById('kcInput').value = btn.textContent;
    kcSend();
  };

  window.toggleOrgSwitcher = function() {
    const drop = document.getElementById('ktOrgDrop');
    const org = document.querySelector('.kt-org');
    drop.classList.toggle('open');
    org.classList.toggle('open');
  };

  window.switchOrg = function(name, e) {
    e.stopPropagation();
    // Update client name in top bar
    const clientName = document.querySelector('.kt-client-name');
    if (clientName) clientName.textContent = name;
    // Update active state in dropdown
    document.querySelectorAll('.kt-org-item').forEach(function(item) {
      item.classList.remove('kt-org-active');
      const check = item.querySelector('svg[stroke="#30D158"]');
      if (check) check.remove();
    });
    const clicked = e.target.closest('.kt-org-item');
    if (clicked) {
      clicked.classList.add('kt-org-active');
      clicked.insertAdjacentHTML('beforeend', '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#30D158" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>');
    }
    // Close dropdown
    toggleOrgSwitcher();
  };

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.kt-org') && !e.target.closest('.kt-org-drop')) {
      const d = document.getElementById('ktOrgDrop');
      const o = document.querySelector('.kt-org');
      if (d) d.classList.remove('open');
      if (o) o.classList.remove('open');
    }
  });

  // Apply initial sidebar state
  if (sidebarOpen) {
    document.getElementById('ktSidebar').classList.add('open');
    document.getElementById('ksOverlay').classList.add('open');
  }

  // Chat starts closed — user opens explicitly

  // Profile dropdown
  let profileOpen = false;
  window.toggleProfileDrop = function() {
    profileOpen = !profileOpen;
    document.getElementById('ktProfileDrop').classList.toggle('open', profileOpen);
  };

  window.showPfAuth = function(e) {
    e.stopPropagation();
    const auth = document.getElementById('ktPfAuth');
    if (auth.style.display === 'none') {
      auth.style.display = 'block';
      const firstInput = auth.querySelector('.kt-pf-code');
      if (firstInput) firstInput.focus();
    } else {
      auth.style.display = 'none';
    }
  };

  // Auto-advance code inputs
  document.addEventListener('input', function(e) {
    if (!e.target.classList.contains('kt-pf-code')) return;
    const val = e.target.value;
    if (val && val.length === 1) {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      const next = document.querySelector('.kt-pf-code[data-idx="' + (idx + 1) + '"]');
      if (next) next.focus();
      // Check if all 6 digits are filled
      if (idx === 5) {
        const codes = document.querySelectorAll('.kt-pf-code');
        let full = '';
        codes.forEach(c => full += c.value);
        if (full.length === 6) {
          // Navigate to PF landing
          // Calculate depth from repo root to get correct relative path to /pf/
          const segs = path.split('/').filter(s => s.length > 0);
          const htmlIdx = segs.findIndex(s => s.endsWith('.html'));
          const depth = htmlIdx > 0 ? htmlIdx : segs.length - 1;
          const prefix = '../'.repeat(depth);
          window.location.href = prefix + 'pf/dashboard.html';
        }
      }
    }
  });
  document.addEventListener('keydown', function(e) {
    if (!e.target.classList.contains('kt-pf-code')) return;
    if (e.key === 'Backspace' && !e.target.value) {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      const prev = document.querySelector('.kt-pf-code[data-idx="' + (idx - 1) + '"]');
      if (prev) { prev.focus(); prev.value = ''; }
    }
  });

  // Close profile dropdown on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.kt-avatar') && !e.target.closest('.kt-profile-drop')) {
      const d = document.getElementById('ktProfileDrop');
      if (d) { d.classList.remove('open'); profileOpen = false; }
    }
  });

  // Close sidebar on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (profileOpen) { toggleProfileDrop(); return; }
      closeSupportModal();
      if (sidebarOpen) toggleSidebar();
    }
  });

})();
