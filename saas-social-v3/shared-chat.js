/**
 * KTANA Social — Shared Chat Zone (Dark Ambient Glow Compact Widget)
 * Injeta CSS + HTML do chat zone dark em qualquer tela interna.
 *
 * Uso: <script src="shared-chat.js" data-agent="Sensei" data-context="Dashboard — 7 agentes ativos"></script>
 * O agente e contexto vem dos data attributes.
 * Mensagem inicial vem do atributo data-msg no script tag.
 */
(function() {
  const script = document.currentScript;
  const agent = script?.dataset?.agent || 'Sensei';
  const context = script?.dataset?.context || '';
  const msg = script?.dataset?.msg || '';
  const agentColor = {
    'Sensei':'#D70030','Scout':'#007AFF','Quill':'#5856D6',
    'Canvas':'#FF2D55','Pulse':'#34C759','Metrics':'#FF9500','Director':'#5AC8FA'
  }[agent] || '#D70030';

  // Agent SVG icons
  const agentSvg = {
    'Sensei':'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/>',
    'Scout':'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" stroke-linecap="round" stroke-linejoin="round"/>',
    'Quill':'<path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke-linecap="round" stroke-linejoin="round"/>',
    'Canvas':'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21" stroke-linecap="round" stroke-linejoin="round"/>',
    'Pulse':'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round"/>',
    'Metrics':'<path d="M12 20V10M18 20V4M6 20v-4" stroke-linecap="round" stroke-linejoin="round"/>',
    'Director':'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" stroke-linecap="round" stroke-linejoin="round"/>'
  }[agent] || agentSvg['Sensei'];

  const style = document.createElement('style');
  style.textContent = `
    .cz{background:#0A0A0A;border-radius:16px;position:relative;overflow:hidden;margin:20px 0;padding:0;box-shadow:0 4px 32px rgba(0,0,0,0.18),0 0 0 1px rgba(255,255,255,0.04)}
    .cz .ag{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}
    .cz .ao{position:absolute;border-radius:50%;pointer-events:none;filter:blur(60px)}
    .cz .ao:nth-child(1){width:55%;height:45%;top:0;left:-10%;background:radial-gradient(ellipse at center,rgba(215,0,48,0.22) 0%,transparent 70%);animation:_od1 10s ease-in-out infinite}
    .cz .ao:nth-child(2){width:45%;height:40%;top:20%;right:-10%;background:radial-gradient(ellipse at center,rgba(160,15,5,0.18) 0%,transparent 70%);animation:_od2 14s ease-in-out infinite}
    .cz .ao:nth-child(3){width:40%;height:45%;bottom:-5%;left:20%;background:radial-gradient(ellipse at center,rgba(220,80,25,0.15) 0%,transparent 70%);animation:_od3 12s ease-in-out infinite}
    @keyframes _od1{0%,100%{transform:translate(0,0)}33%{transform:translate(8%,6%)}66%{transform:translate(-4%,-4%)}}
    @keyframes _od2{0%,100%{transform:translate(0,0)}50%{transform:translate(-10%,5%)}}
    @keyframes _od3{0%,100%{transform:translate(0,0)}33%{transform:translate(6%,-6%)}66%{transform:translate(-5%,3%)}}
    .cz .czi{position:relative;z-index:1;padding:20px 22px 18px}
    .cz .czl{font-family:'Inter',sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#D70030;margin-bottom:14px;display:flex;align-items:center;gap:8px}
    .cz .czd{width:6px;height:6px;border-radius:50%;background:#34C759;animation:_p 2s infinite}
    @keyframes _p{0%,100%{opacity:1}50%{opacity:0.3}}
    .cz .czm{max-height:240px;overflow-y:auto;margin-bottom:16px;display:flex;flex-direction:column;gap:10px}
    .cz .cm{max-width:85%;padding:12px 16px;border-radius:16px;font-family:'Satoshi',sans-serif;font-size:14px;line-height:1.5}
    .cz .cma{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);color:#E5E5EA;border-bottom-left-radius:4px;align-self:flex-start}
    .cz .cmu{background:rgba(215,0,48,0.12);border:1px solid rgba(215,0,48,0.18);color:#F5F5F7;border-bottom-right-radius:4px;align-self:flex-end}
    .cz .cma strong{color:#F5F5F7}
    .cz .hl{color:#D70030;font-weight:600}
    .cz .cs{font-family:'Inter',sans-serif;font-size:11px;color:#D70030;font-weight:500;margin-bottom:4px}
    .cz .czsc{display:flex;gap:6px;flex-wrap:wrap}
    .cz .czs{font-family:'Inter',sans-serif;font-size:12px;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.03);border:0.5px solid rgba(255,255,255,0.1);border-radius:980px;padding:6px 14px;cursor:pointer;transition:all 0.15s;text-decoration:none}
    .cz .czs:hover{background:rgba(215,0,48,0.12);color:#F5F5F7;border-color:rgba(215,0,48,0.25)}
    .cz .cio{position:relative;border-radius:14px;margin-top:16px}
    .cz .cig{position:absolute;top:50%;left:50%;width:110%;height:180%;transform:translate(-50%,-50%);pointer-events:none;z-index:0;filter:blur(30px);opacity:0.65;background:radial-gradient(ellipse 50% 50% at 30% 40%,rgba(215,0,48,0.45) 0%,transparent 70%),radial-gradient(ellipse 45% 50% at 70% 50%,rgba(160,15,5,0.35) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 50% 55%,rgba(220,80,25,0.25) 0%,transparent 60%);animation:_gm 8s ease-in-out infinite}
    @keyframes _gm{0%{transform:translate(-50%,-50%) rotate(0)}25%{transform:translate(-45%,-53%) rotate(2deg)}50%{transform:translate(-55%,-47%) rotate(-1deg)}75%{transform:translate(-48%,-52%) rotate(1.5deg)}100%{transform:translate(-50%,-50%) rotate(0)}}
    .cz .cis{position:absolute;inset:-1px;border-radius:15px;z-index:1;overflow:hidden;pointer-events:none}
    .cz .cis::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(transparent 30%,rgba(140,10,5,0.6) 38%,rgba(215,0,48,0.8) 42%,rgba(220,80,25,0.5) 48%,transparent 55%,transparent 80%,rgba(180,30,8,0.3) 87%,rgba(215,0,48,0.5) 92%,transparent 97%);animation:_rl 5s linear infinite}
    @keyframes _rl{to{transform:rotate(360deg)}}
    .cz .cis::after{content:'';position:absolute;inset:1px;border-radius:14px;background:#111}
    .cz .cic{background:#111;border-radius:14px;position:relative;z-index:2;display:flex;flex-direction:column}
    .cz .cic textarea{width:100%;padding:14px 18px 48px;border-radius:14px;border:none;background:transparent;font-family:'Satoshi',sans-serif;font-size:15px;color:#E5E5EA;outline:none;min-height:56px;max-height:120px;resize:none;box-sizing:border-box}
    .cz .cic textarea::placeholder{color:rgba(255,255,255,0.25)}
    .cz .cif{position:absolute;bottom:0;left:0;right:0;padding:8px 14px;display:flex;align-items:center;gap:8px;border-top:1px solid rgba(255,255,255,0.04)}
    .cz .cab{width:30px;height:30px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:transparent;color:rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.15s}
    .cz .cab:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.7)}
    .cz .cab svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    .cz .cas{font-family:'Inter',sans-serif;font-size:12px;color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:5px 10px;cursor:pointer;-webkit-appearance:none;appearance:none}
    .cz .csb{margin-left:auto;width:34px;height:34px;border-radius:10px;background:#D70030;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;color:#F5F5F7}
    .cz .csb:hover{background:#E5003A}
    .cz .csb svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
  `;
  document.head.appendChild(style);

  // Find the chat zone placeholder and inject
  const placeholder = document.getElementById('chat-zone');
  if (!placeholder) return;

  placeholder.className = 'cz';
  placeholder.innerHTML = `
    <div class="ag"><div class="ao"></div><div class="ao"></div><div class="ao"></div></div>
    <div class="czi">
      <div class="czl"><span class="czd"></span> ${agent} — ${context}</div>
      <div class="czm" id="czMsgs">
        ${msg ? `<div class="cm cma"><div class="cs">${agent}</div>${msg}</div>` : ''}
      </div>
      <div class="czsc" id="czShortcuts"></div>
      <div class="cio">
        <div class="cig"></div>
        <div class="cis"></div>
        <div class="cic">
          <textarea rows="1" placeholder="Pergunte ao ${agent}..."></textarea>
          <div class="cif">
            <button class="cab"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>
            <select class="cas"><option>Sensei</option><option>Scout</option><option>Quill</option><option>Canvas</option><option>Pulse</option><option>Metrics</option><option>Director</option></select>
            <button class="csb"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></button>
          </div>
        </div>
      </div>
    </div>
  `;
})();
