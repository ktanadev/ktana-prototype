// PF Chat Widget — IA-first mentor chat at top of every page
// Injects contextual chat based on current page
(function() {
  var path = window.location.pathname;
  var page = path.split('/').pop().replace('.html','');

  // Skip pages that already have their own chat or don't need it
  var skip = ['chat','dashboard','builder','onboarding','yumi','review','landing','wearables'];
  if (skip.some(function(s) { return page === s; })) return;
  if (path.includes('/auth/')) return;

  // Mentor map per page
  var mentors = {
    'area-saude': { name: 'Dr. Kenji', role: 'Mentor de Saude', initial: 'K', color: '#D70030', greeting: 'Como esta sua saude hoje? Posso analisar seus dados de sono, treino ou alimentacao.' },
    'area-mente': { name: 'Sensei Sora', role: 'Mentora de Mente', initial: 'S', color: '#5E6AD2', greeting: 'Como voce esta se sentindo? Posso te guiar em uma meditacao ou analisar seus padroes emocionais.' },
    'area-carreira': { name: 'Hiroshi', role: 'Mentor de Carreira', initial: 'H', color: '#FF9F0A', greeting: 'O que esta acontecendo na sua carreira? Posso ajudar com networking, marca pessoal ou planejamento.' },
    'area-financas': { name: 'Takeshi', role: 'Mentor de Financas', initial: 'T', color: '#30D158', greeting: 'Quer revisar suas financas? Posso analisar gastos, investimentos ou montar um plano.' },
    'area-proposito': { name: 'Sensei Hiro', role: 'Mentor de Proposito', initial: 'H', color: '#BF5AF2', greeting: 'Vamos refletir sobre seu proposito? Posso te guiar no Ikigai ou alinhar seus valores com suas acoes.' },
    'area-produtividade': { name: 'Takeshi', role: 'Mentor de Produtividade', initial: 'T', color: '#FF9F0A', greeting: 'Como esta sua produtividade? Posso otimizar sua rotina, blocos de foco ou prioridades.' },
    'area-relacionamentos': { name: 'Sakura', role: 'Mentora de Relacionamentos', initial: 'S', color: '#FF375F', greeting: 'Como estao seus relacionamentos? Posso ajudar com comunicacao, familia ou vinculos.' },
    'area-casa': { name: 'Mika', role: 'Mentora de Casa', initial: 'M', color: '#64D2FF', greeting: 'Como esta a organizacao da sua casa? Posso ajudar com contas, compras ou rotina domestica.' },
    'goals': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer revisar suas metas? Posso ajustar prioridades ou criar novas metas com base no seu progresso.' },
    'habits': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Como estao seus habitos? Posso sugerir ajustes ou criar novas rotinas baseadas nos seus dados.' },
    'brain': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer explorar seu cerebro? Posso mostrar novas correlacoes ou explicar padroes que descobri.' },
    'psychology': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer aprofundar seu perfil psicologico? Posso fazer mais perguntas ou explicar o que ja descobri.' },
    'evolution': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Vamos ver sua evolucao? Posso mostrar tendencias e sugerir proximos passos.' },
    'activity': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Alguma duvida sobre a atividade dos seus mentores? Posso detalhar qualquer acao.' },
    'insights': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer entender algum insight mais a fundo? Posso cruzar dados e explicar as correlacoes.' },
    'approvals': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Precisa de ajuda com as recomendacoes? Posso explicar o racional de cada uma.' },
    'spirit': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer aprofundar seu Ikigai? Tenho 3 perguntas pra refinar seu perfil.' },
    'profile': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer atualizar algo no seu perfil? Me fala que eu ajusto.' },
    'settings': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Precisa mudar alguma configuracao? Me diz o que quer ajustar.' },
    'solutions': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer explorar uma nova solucao? Me conta o que precisa e eu monto pra voce.' },
    'frameworks': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer aplicar algum framework na sua vida? Me conta a area e eu personalizo.' },
    'connect': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer conectar uma nova plataforma? Me diz qual e eu configuro.' },
    'mentor-config': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer ajustar seus mentores? Me fala o que precisa mudar.' },
    'specialist-config': { name: 'Yumi', role: 'Sua mentora', initial: 'Y', color: '#D70030', greeting: 'Quer configurar um especialista? Me conta a area e eu monto o perfil.' }
  };

  var m = mentors[page];
  if (!m) return;

  // Find insertion point — try multiple container patterns
  var target = document.querySelector('.gradient-header') || document.querySelector('.main') || document.querySelector('main') || document.querySelector('.area-page') || document.querySelector('.page-content') || document.body.querySelector('div');
  if (!target) return;

  // Create chat widget
  var widget = document.createElement('div');
  widget.className = 'pf-chat-widget';
  widget.innerHTML =
    '<div class="pcw-inner">' +
      '<div class="pcw-header">' +
        '<div class="pcw-avatar" style="border-color:' + m.color + '20;"><span style="color:' + m.color + ';">' + m.initial + '</span></div>' +
        '<div class="pcw-info"><span class="pcw-name">' + m.name + '</span><span class="pcw-role">' + m.role + ' · <span class="pcw-online">Online</span></span></div>' +
      '</div>' +
      '<div class="pcw-msgs" id="pcwMsgs">' +
        '<div class="pcw-msg pcw-msg-ai">' +
          '<span class="pcw-sender">' + m.name + '</span>' +
          m.greeting +
        '</div>' +
      '</div>' +
      '<div class="pcw-input-wrap">' +
        '<input type="text" class="pcw-input" id="pcwInput" placeholder="Falar com ' + m.name + '..." onkeydown="if(event.key===\'Enter\')pcwSend()">' +
        '<button class="pcw-send" onclick="pcwSend()">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>';

  // Insert after the page header block (h1 + subtitle)
  var h1 = document.querySelector('h1');
  if (!h1) return;

  // Find the header container (parent of h1 if it's a wrapper div)
  var headerBlock = h1.parentNode;
  // If parent is a small wrapper (area-header, greeting, ikigai-hero), use parent level
  var headerCls = (headerBlock.className || '');
  if (headerCls.includes('header') || headerCls.includes('greeting') || headerCls.includes('hero') || headerBlock.children.length <= 3) {
    // Insert after the header block
    if (headerBlock.nextElementSibling) {
      headerBlock.parentNode.insertBefore(widget, headerBlock.nextElementSibling);
    } else {
      headerBlock.parentNode.appendChild(widget);
    }
  } else {
    // h1 is directly in a large container — walk forward from h1
    var node = h1;
    var found = false;
    while (node.nextElementSibling) {
      node = node.nextElementSibling;
      var cls = node.className || '';
      if (cls.includes('card') || cls.includes('section') || cls.includes('cmd-') || cls.includes('stagger') || (node.tagName === 'DIV' && node.children.length > 2)) {
        node.parentNode.insertBefore(widget, node);
        found = true;
        break;
      }
    }
    if (!found) {
      // Insert after subtitle (p after h1)
      var sub = h1.nextElementSibling;
      if (sub && sub.tagName === 'P') {
        sub.parentNode.insertBefore(widget, sub.nextElementSibling);
      } else {
        h1.parentNode.insertBefore(widget, h1.nextElementSibling);
      }
    }
  }

  // Inject styles
  var style = document.createElement('style');
  style.textContent =
    '.pf-chat-widget { margin-bottom: 24px; }' +
    '.pcw-inner { background: #FFF; border-radius: 24px; border: 1px solid rgba(0,0,0,0.04); padding: 20px; box-shadow: 0 2px 16px rgba(0,0,0,0.03); }' +
    '.pcw-header { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }' +
    '.pcw-avatar { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: #FFF; }' +
    '.pcw-avatar span { font-family: "Zen Dots", cursive; font-size: 11px; }' +
    '.pcw-info { display: flex; flex-direction: column; }' +
    '.pcw-name { font-family: "Satoshi", sans-serif; font-size: 14px; font-weight: 600; color: #1D1D1F; }' +
    '.pcw-role { font-family: "Inter", sans-serif; font-size: 11px; color: #86868B; }' +
    '.pcw-online { color: #30D158; }' +
    '.pcw-online::before { content: ""; display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: #30D158; margin-right: 3px; vertical-align: middle; }' +
    '.pcw-msgs { max-height: 160px; overflow-y: auto; margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px; }' +
    '.pcw-msg { max-width: 90%; padding: 10px 14px; border-radius: 14px; font-family: "Satoshi", sans-serif; font-size: 14px; line-height: 1.5; }' +
    '.pcw-msg-ai { background: #F5F5F7; color: #1D1D1F; border-bottom-left-radius: 4px; align-self: flex-start; }' +
    '.pcw-msg-user { background: #1D1D1F; color: #F5F5F7; border-bottom-right-radius: 4px; align-self: flex-end; }' +
    '.pcw-sender { display: block; font-family: "Inter", sans-serif; font-size: 11px; color: #D70030; font-weight: 500; margin-bottom: 4px; }' +
    '.pcw-input-wrap { display: flex; gap: 8px; align-items: center; }' +
    '.pcw-input { flex: 1; font-family: "Satoshi", sans-serif; background: #F5F5F7; border: 1px solid rgba(0,0,0,0.06); border-radius: 14px; padding: 12px 16px; font-size: 14px; color: #1D1D1F; outline: none; transition: border-color 0.15s; }' +
    '.pcw-input:focus { border-color: rgba(215,0,48,0.3); }' +
    '.pcw-input::placeholder { color: #AEAEB2; }' +
    '.pcw-send { width: 40px; height: 40px; border-radius: 50%; background: #D70030; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: opacity 0.15s; }' +
    '.pcw-send:hover { opacity: 0.9; }';
  document.head.appendChild(style);

  // Chat send function
  window.pcwSend = function() {
    var input = document.getElementById('pcwInput');
    var val = input.value.trim();
    if (!val) return;
    var msgs = document.getElementById('pcwMsgs');
    msgs.innerHTML += '<div class="pcw-msg pcw-msg-user">' + escapeH(val) + '</div>';
    input.value = '';
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(function() {
      var replies = [
        'Entendi. Vou analisar e te respondo em instantes...',
        'Boa pergunta. Deixa eu cruzar com os dados que tenho...',
        'Anotado. Vou ajustar e te mando a atualizacao pelo WhatsApp.',
        'Perfeito. Vou coordenar com os outros mentores e te aviso.'
      ];
      var reply = replies[Math.floor(Math.random() * replies.length)];
      msgs.innerHTML += '<div class="pcw-msg pcw-msg-ai"><span class="pcw-sender">' + m.name + '</span>' + reply + '</div>';
      msgs.scrollTop = msgs.scrollHeight;
    }, 700);
  };

  function escapeH(t) { var d = document.createElement('div'); d.appendChild(document.createTextNode(t)); return d.innerHTML; }
})();
