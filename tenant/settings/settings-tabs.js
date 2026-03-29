// KTANA Settings Tabs — Auto-collapse with "Mais" dropdown
// Replaces overflow scroll with grouped tabs
(function() {
  const nav = document.querySelector('.settings-nav');
  if (!nav) return;

  const tabs = Array.from(nav.querySelectorAll('.settings-tab'));
  if (tabs.length <= 6) return; // No need to collapse

  // Find active tab
  const activeTab = tabs.find(t => t.classList.contains('active'));
  const activeIdx = tabs.indexOf(activeTab);

  // Show first 5 tabs + active (if not in first 5) + "Mais" dropdown for rest
  const PRIMARY_COUNT = 5;
  const primaryTabs = tabs.slice(0, PRIMARY_COUNT);
  const overflowTabs = tabs.slice(PRIMARY_COUNT);

  // If active is in overflow, swap it into primary
  if (activeIdx >= PRIMARY_COUNT) {
    const swapIdx = PRIMARY_COUNT - 1; // Replace last primary
    primaryTabs[swapIdx] = activeTab;
    overflowTabs.splice(overflowTabs.indexOf(activeTab), 1);
    overflowTabs.unshift(tabs[swapIdx]); // Put swapped one back
  }

  // Rebuild nav
  nav.innerHTML = '';
  primaryTabs.forEach(t => nav.appendChild(t));

  // Create "Mais" dropdown
  const moreWrap = document.createElement('div');
  moreWrap.style.cssText = 'position:relative;display:inline-block;';

  const moreBtn = document.createElement('button');
  moreBtn.className = 'settings-tab';
  moreBtn.textContent = 'Mais';
  moreBtn.style.cssText = 'display:flex;align-items:center;gap:4px;';
  moreBtn.innerHTML = 'Mais <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>';

  // Check if any overflow tab is active
  if (overflowTabs.some(t => t.classList.contains('active'))) {
    moreBtn.style.color = '#D70030';
    moreBtn.style.fontWeight = '500';
  }

  const dropdown = document.createElement('div');
  dropdown.style.cssText = 'display:none;position:absolute;top:calc(100% + 6px);right:0;background:#FFF;border-radius:14px;border:1px solid rgba(0,0,0,0.06);box-shadow:0 8px 32px rgba(0,0,0,0.1);padding:6px;min-width:160px;z-index:100;';

  overflowTabs.forEach(t => {
    const link = document.createElement('a');
    link.href = t.getAttribute('onclick').match(/'([^']+)'/)[1];
    link.textContent = t.textContent;
    link.style.cssText = 'display:block;padding:8px 14px;border-radius:8px;font-family:Inter,-apple-system,sans-serif;font-size:12px;color:#6E6E73;text-decoration:none;transition:background 0.12s;white-space:nowrap;';
    if (t.classList.contains('active')) {
      link.style.color = '#D70030';
      link.style.fontWeight = '500';
      link.style.background = 'rgba(215,0,48,0.04)';
    }
    link.onmouseenter = () => { link.style.background = 'rgba(0,0,0,0.03)'; };
    link.onmouseleave = () => {
      link.style.background = t.classList.contains('active') ? 'rgba(215,0,48,0.04)' : 'transparent';
    };
    dropdown.appendChild(link);
  });

  moreBtn.onclick = (e) => {
    e.stopPropagation();
    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) dropdown.style.animation = 'fadeIn 0.15s ease';
  };

  document.addEventListener('click', () => { dropdown.style.display = 'none'; });

  moreWrap.appendChild(moreBtn);
  moreWrap.appendChild(dropdown);
  nav.appendChild(moreWrap);
})();
