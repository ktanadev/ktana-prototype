# KTANA Prototype -- Review Report
Date: 29/Mar/2026
Total pages: 152

---

## Reviewer 1: PJ Flow (Empresa)

### Pages checked:

**Landing & Auth (6 pages)**
1. pj/landing.html
2. tenant/auth/signup.html
3. tenant/auth/verify.html
4. tenant/auth/login.html
5. tenant/auth/twofa.html
6. tenant/auth/forgot.html
7. tenant/auth/reset.html
8. tenant/auth/kyc.html

**Onboarding (10 pages)**
9. tenant/onboarding/plans.html
10. tenant/onboarding/checkout.html
11. tenant/onboarding/yumi.html
12. tenant/onboarding/team.html
13. tenant/onboarding/brand.html
14. tenant/onboarding/connect.html
15. tenant/onboarding/connect-gmail.html
16. tenant/onboarding/connect-whatsapp.html
17. tenant/onboarding/review.html
18. tenant/onboarding/activate.html
19. tenant/onboarding/agent-config.html

**Dashboard (5 pages)**
20. tenant/dashboard/home.html
21. tenant/dashboard/roi.html
22. tenant/dashboard/insights.html
23. tenant/dashboard/urgent.html
24. tenant/dashboard/empty.html

**Solutions (11 pages)**
25. tenant/solutions/index.html
26. tenant/solutions/builder.html
27. tenant/solutions/sdr-auto.html
28. tenant/solutions/sac-whatsapp.html
29. tenant/solutions/seo-auto.html
30. tenant/solutions/email-marketing.html
31. tenant/solutions/social-posting.html
32. tenant/solutions/smart-billing.html
33. tenant/solutions/dre-auto.html
34. tenant/solutions/objection-breaker.html

**Frameworks (4 pages)**
35. tenant/frameworks/index.html
36. tenant/frameworks/processes.html
37. tenant/frameworks/kpis.html
38. tenant/frameworks/expert-chat.html

**Team (6 pages)**
39. tenant/team/list.html
40. tenant/team/org.html
41. tenant/team/hire-level.html
42. tenant/team/hire-role.html
43. tenant/team/hire-config.html
44. tenant/team/hire-review.html

**Agent (9 pages)**
45. tenant/agent/chat.html
46. tenant/agent/profile.html
47. tenant/agent/config.html
48. tenant/agent/activity.html
49. tenant/agent/memory.html
50. tenant/agent/metrics.html
51. tenant/agent/metacog.html
52. tenant/agent/paused.html
53. tenant/agent/demit-confirm.html

**Approvals (5 pages)**
54. tenant/approvals/list.html
55. tenant/approvals/detail.html
56. tenant/approvals/edit.html
57. tenant/approvals/resolved.html
58. tenant/approvals/empty.html

**Settings (12 pages)**
59. tenant/settings/general.html
60. tenant/settings/models.html
61. tenant/settings/connections.html
62. tenant/settings/security.html
63. tenant/settings/billing.html
64. tenant/settings/notifications.html
65. tenant/settings/ethics.html
66. tenant/settings/spirit.html
67. tenant/settings/brain.html
68. tenant/settings/privacy.html
69. tenant/settings/api.html
70. tenant/settings/whatsapp-setup.html

**Organizations (5 pages)**
71. tenant/organizations/index.html
72. tenant/organizations/members.html
73. tenant/organizations/invite-accept.html
74. tenant/organizations/invite-setup.html
75. tenant/organizations/invite-welcome.html

**Profile (3 pages)**
76. tenant/profile/index.html
77. tenant/profile/graph.html
78. tenant/profile/patterns.html

**Office (3 pages)**
79. tenant/office/index.html
80. tenant/office/panel.html (redirect stub)
81. tenant/office/tooltip.html (redirect stub)

**Other (4 pages)**
82. tenant/terminal.html
83. tenant/whatsapp.html
84. tenant/support.html
85. tenant/landing.html

**PJ-specific (14 pages)**
86. pj/solutions.html
87. pj/onboarding.html
88. pj/org-chart.html
89. pj/dept-finance.html
90. pj/dept-marketing.html
91. pj/dept-hr.html
92. pj/dept-tech.html
93. pj/dept-sales.html
94. pj/dept-ops.html
95. pj/dept-legal.html
96. pj/dept-product.html
97. pj/dept-data.html
98. pj/dept-support.html
99. pj/hire-ceo.html
100. pj/hire-clevel.html
101. pj/hire-leader.html
102. pj/hire-worker.html

### Issues found:

**CRITICAL**
- [CRITICAL] tenant/auth/verify.html: Script tag with "continue" button is placed AFTER the closing `</html>` tag (line 35-38). While browsers typically recover, this is invalid HTML and could fail in strict parsers.

**HIGH**
- [HIGH] tenant/organizations/invite-welcome.html: Broken link `href="../approvals/index.html"` -- file does not exist. Should be `../approvals/list.html`.
- [HIGH] tenant/organizations/invite-welcome.html: Broken link `href="../team/index.html"` -- file does not exist. Should be `../team/list.html`.
- [HIGH] tenant/auth/signup.html: Shared-nav.js is loaded on auth pages where it should NOT be. The nav script injects a full dashboard navigation (sidebar, org switcher, profile dropdown) into signup/login pages. These are pre-auth pages that already have their own minimal nav. The injected nav creates visual clutter and confusing UX on auth pages.
- [HIGH] tenant/auth/login.html: Same shared-nav.js injection issue as signup.html.
- [HIGH] tenant/auth/verify.html: Same shared-nav.js injection issue.
- [HIGH] tenant/auth/twofa.html: Same shared-nav.js injection issue.
- [HIGH] tenant/auth/forgot.html: Same shared-nav.js injection issue.
- [HIGH] tenant/auth/reset.html: Same shared-nav.js injection issue.
- [HIGH] tenant/auth/kyc.html: Same shared-nav.js injection issue.
- [HIGH] pj/landing.html: shared-nav.js is loaded after `</body>` tag (line 57). It injects dashboard navigation into a public landing page, which already has its own nav bar. Dual nav conflict.
- [HIGH] tenant/landing.html: Same dual nav issue -- landing page has own nav but shared-nav.js also injects dashboard nav.
- [HIGH] tenant/office/panel.html: Redirect stub (262 bytes) -- no actual panel content. Redirects to office/index.html. The panel interaction is not prototyped.
- [HIGH] tenant/office/tooltip.html: Redirect stub (267 bytes) -- no actual tooltip content. Redirects to office/index.html. The tooltip interaction is not prototyped.

**MEDIUM**
- [MEDIUM] tenant/auth/signup.html: 1 placeholder `href="#"` link (Termos de Uso). Terms/Privacy links go nowhere.
- [MEDIUM] tenant/auth/signup.html: Second `href="#"` link (Politica de Privacidade) goes nowhere.
- [MEDIUM] tenant/onboarding/review.html: 2 placeholder `href="#"` links (Termos de Uso, Politica de Privacidade). Same as signup.
- [MEDIUM] tenant/onboarding/connect-gmail.html: 1 placeholder `href="#"` link.
- [MEDIUM] tenant/onboarding/connect-whatsapp.html: 2 placeholder `href="#"` links.
- [MEDIUM] tenant/onboarding/connect-whatsapp.html: 1 onclick handler with `return false;` -- button does nothing when clicked.
- [MEDIUM] tenant/landing.html: 5 placeholder `href="#"` links in the landing page navigation/footer.
- [MEDIUM] tenant/settings/billing.html: 1 placeholder `href="#"` link.
- [MEDIUM] tenant/organizations/invite-accept.html: 1 placeholder `href="#"` link.
- [MEDIUM] tenant/agent/config.html: 3 onclick handlers using `alert()` as placeholder ("Adicionar referencia -- em breve", "Adicionar rotina -- em breve", "Adicionar regra -- em breve").
- [MEDIUM] tenant/onboarding/team.html: 1 onclick handler using `alert()` as placeholder ("Contratar novo samurai").

**LOW -- English text in Portuguese BR interface**
- [LOW] tenant/auth/signup.html: Back link uses "Voltar" but Google button text "Continuar com Google" mixes with English OAuth flow expectation. Minor, acceptable for OAuth.
- [LOW] tenant/dashboard/home.html: Contains English words in UI: "Dashboard", "Team", "Close" in code/hidden contexts.
- [LOW] tenant/dashboard/roi.html: "Total" used instead of Portuguese equivalent. Acceptable as financial term.
- [LOW] tenant/solutions/index.html: "Search" and "Dashboard" found in source.
- [LOW] tenant/solutions/builder.html: "Chat" in source.
- [LOW] tenant/settings/billing.html: "Plan" found in source text.
- [LOW] tenant/settings/connections.html: "Settings", "Search", "Filter", "Close" found in source.
- [LOW] tenant/settings/brain.html: "Download" found in source.
- [LOW] tenant/settings/privacy.html: "Download" found in source.
- [LOW] tenant/agent/chat.html: "Chat", "Message" found in source text.
- [LOW] tenant/onboarding/activate.html: "Loading" found in source.
- [LOW] tenant/onboarding/brand.html: "Upload", "Chat" found in source.
- [LOW] tenant/onboarding/checkout.html: "Back" found in source.
- [LOW] tenant/frameworks/expert-chat.html: "Chat", "Team" in source.
- [LOW] tenant/profile/graph.html: "Filter" in source.

**LOW -- Structural**
- [LOW] pj/landing.html: shared-nav.js loaded outside `</body>` tag (invalid HTML placement).
- [LOW] All 64 pages listed in PJ flow above have shared-nav.js referenced outside `</body>` in varying positions. While browsers handle this, it is technically invalid HTML.

### Summary: 102 pages checked, 42 issues found (1 critical, 14 high, 12 medium, 15 low)

---

## Reviewer 2: PF Flow (Pessoa Fisica)

### Pages checked:

**Landing & Auth (shared with PJ)**
1. pf/landing.html
2. tenant/auth/signup.html (shared)
3. tenant/auth/verify.html (shared)

**PF Onboarding (4 pages)**
4. pf/onboarding.html
5. pf/yumi.html
6. pf/connect.html
7. pf/review.html

**PF Dashboard**
8. tenant/dashboard/home-pf.html

**PF Solutions & Builder**
9. pf/solutions.html
10. pf/builder.html

**PF Spirit (Radar Chart)**
11. pf/spirit.html

**PF Areas (8 pages)**
12. pf/area-saude.html
13. pf/area-mente.html
14. pf/area-carreira.html
15. pf/area-financas.html
16. pf/area-proposito.html
17. pf/area-produtividade.html
18. pf/area-relacionamentos.html
19. pf/area-casa.html

**PF Config (2 pages)**
20. pf/mentor-config.html
21. pf/specialist-config.html

### Issues found:

**HIGH**
- [HIGH] pf/landing.html: shared-nav.js is loaded after `</body>` tag (line 62). Injects full PJ dashboard navigation into PF landing page. Landing page already has its own nav. Creates dual nav conflict -- PF user sees PJ org switcher, dashboard links, and team menu that are irrelevant to PF flow.
- [HIGH] pf/review.html: 2 placeholder `href="#"` links (Termos de Uso, Politica de Privacidade). Legal consent links go nowhere.
- [HIGH] pf/yumi.html: The chat flow only has a hardcoded "Configurar" button that goes to onboarding.html. There is no actual conversation flow prototyped -- the Yumi chat for PF is essentially a static screen with one exit button.
- [HIGH] pf/onboarding.html: Only navigation is "Voltar ao inicio" (to landing.html) and one "Ativar Yumi e configurar mentores" button going to mentor-config.html. The PF onboarding flow skips signup entirely -- user goes from landing -> shared signup -> but then PF onboarding has no link FROM the auth flow. There is a gap: after verify.html the user goes to plans.html (PJ flow), not PF onboarding.
- [HIGH] All 18 PF-specific pages: shared-nav.js injects PJ-oriented navigation (Painel, Aprovacoes, Equipe, Solucoes, Config with PJ-specific items like "Escritorio virtual", "Organograma", "Contratar"). PF users would see irrelevant PJ navigation items. The nav system does not detect PF context.

**MEDIUM**
- [MEDIUM] pf/area-casa.html: Page is functional but significantly shorter than other area pages (36 lines, 5446 bytes vs 214-248 lines for saude/mente/financas/carreira). Appears to have less detailed content.
- [MEDIUM] pf/area-produtividade.html: Same issue as area-casa.html (37 lines, 5484 bytes). Less detailed than fully-built area pages.
- [MEDIUM] pf/area-proposito.html: Same issue (37 lines, 5536 bytes). Less detailed.
- [MEDIUM] pf/area-relacionamentos.html: Same issue (37 lines, 5665 bytes). Less detailed.
- [MEDIUM] pf/spirit.html: Contains "Continue" in English in source. No clear CTA or navigation to other pages -- the spirit/radar chart page is somewhat isolated.
- [MEDIUM] pf/connect.html: Back link says "Especialistas" pointing to specialist-config.html. This is correct but the flow ordering (onboarding -> mentor-config -> specialist-config -> connect -> review) is only navigable if user follows exact sequence. No breadcrumb or progress indicator showing current step in the overall PF flow.
- [MEDIUM] tenant/dashboard/home-pf.html: No onclick handlers or navigation links found in the file beyond what shared-nav.js injects. The PF dashboard appears to be a static display with no interactive elements or navigation to PF-specific areas.

**LOW**
- [LOW] pf/landing.html: All 8 area cards in the grid are not clickable links -- they are divs without href or onclick. User cannot navigate to area detail pages from landing.
- [LOW] pf/onboarding.html: Contains "Step" (English) in source.
- [LOW] pf/builder.html: Contains "Chat" (English) in source.
- [LOW] pf/yumi.html: Contains "Chat", "Message" (English) in source.
- [LOW] pf/connect.html: Contains "Open" (English) in source.
- [LOW] All PF pages have shared-nav.js loaded outside `</body>` tag (invalid HTML placement).

### Summary: 21 pages checked, 19 issues found (0 critical, 5 high, 7 medium, 7 low)

---

## Reviewer 3: Admin Flow

### Pages checked:

**Admin Master SPA (1 page, 10 tabs)**
1. admin/index.html -- Tab: Overview
2. admin/index.html -- Tab: Agent Flow
3. admin/index.html -- Tab: Tenants
4. admin/index.html -- Tab: Tenant Detail
5. admin/index.html -- Tab: Agentes
6. admin/index.html -- Tab: System Health
7. admin/index.html -- Tab: Billing
8. admin/index.html -- Tab: Compliance
9. admin/index.html -- Tab: Catalogo
10. admin/index.html -- Tab: Config (settings-admin)

**Admin Sub-pages (16 pages)**
11. admin/agent-detail.html
12. admin/billing-costs.html
13. admin/billing-revenue.html
14. admin/catalog-attributions.html
15. admin/catalog-edit.html
16. admin/compliance-audit.html
17. admin/compliance-lgpd.html
18. admin/health-memory.html
19. admin/health-workers.html
20. admin/settings-admins.html
21. admin/settings-constitution.html
22. admin/settings-environments.html
23. admin/settings-llm.html
24. admin/tenant-activity.html
25. admin/tenant-agents.html
26. admin/tenant-brain.html

**Admin Utilities (2 pages)**
27. admin/impersonate.html
28. admin/support.html

**Redirect Stubs (10 pages)**
29. admin/agents.html (redirects to index.html)
30. admin/billing.html (redirects to index.html)
31. admin/catalog.html (redirects to index.html)
32. admin/compliance.html (redirects to index.html)
33. admin/flow.html (redirects to index.html)
34. admin/health.html (redirects to index.html)
35. admin/overview.html (redirects to index.html)
36. admin/settings.html (redirects to index.html)
37. admin/tenants.html (redirects to index.html)
38. admin/tenant-detail.html (redirects to index.html)

### Issues found:

**HIGH -- Navigation architecture mismatch**
- [HIGH] admin/index.html: The admin master page is a SPA with 10 tab screens rendered via JavaScript `show()` function. The 16 sub-pages (agent-detail, billing-costs, etc.) are SEPARATE full HTML pages with their OWN sidebar navigation. This creates a split architecture: clicking sidebar links on sub-pages navigates to redirect stubs (agents.html, billing.html, etc.) which meta-redirect to index.html, losing the SPA tab state. User ends up on the "Overview" tab instead of the expected tab.
- [HIGH] admin/index.html + shared-nav.js: The shared-nav.js injects a LIGHT MODE tenant navigation on top of the DARK MODE admin interface. The admin page (bg: #0A0A0A) gets a white/light navigation bar injected, creating a visual conflict. The admin has its own sidebar nav which conflicts with the tenant sidebar.
- [HIGH] admin/impersonate.html: shared-nav.js is injected into this dark-mode admin page, creating the same light-on-dark visual conflict.
- [HIGH] admin/support.html: shared-nav.js injected, same visual conflict.

**HIGH -- English labels in admin nav**
- [HIGH] admin/index.html: 6 of 10 sidebar navigation labels are in English: "Overview", "Agent Flow", "Tenants", "Tenant Detail", "System Health", "Billing". Only "Agentes", "Compliance", "Catalogo", and "Config" are in Portuguese. This is inconsistent with the Portuguese BR requirement.

**HIGH -- Redirect stubs**
- [HIGH] admin/agents.html: Is a 230-byte redirect stub (meta-refresh to index.html). When sub-pages (e.g., agent-detail.html) link to "agents.html" in their sidebar, the user loses context and lands on Overview tab of the SPA.
- [HIGH] admin/billing.html: Same redirect stub issue.
- [HIGH] admin/catalog.html: Same redirect stub issue.
- [HIGH] admin/compliance.html: Same redirect stub issue.
- [HIGH] admin/flow.html: Same redirect stub issue.
- [HIGH] admin/health.html: Same redirect stub issue.
- [HIGH] admin/overview.html: Same redirect stub issue.
- [HIGH] admin/settings.html: Same redirect stub issue.
- [HIGH] admin/tenants.html: Same redirect stub issue.
- [HIGH] admin/tenant-detail.html: Same redirect stub issue.

**MEDIUM**
- [MEDIUM] admin/index.html: The `show()` function on line 819 references `event` without it being passed as a parameter: `if(event && event.target.classList.contains('nav-btn'))`. This relies on the deprecated global `event` object which may not work in all browsers (Firefox did not support it until recently).
- [MEDIUM] admin/settings-constitution.html: 1 placeholder `href="#"` link.
- [MEDIUM] admin/compliance-lgpd.html: 1 placeholder `href="#"` link.
- [MEDIUM] admin/index.html: No shared.css referenced -- uses Tailwind CDN via `<script src="https://cdn.tailwindcss.com">` instead. Different tech stack from all other pages. This means the admin master page does not share the KTANA design system tokens.
- [MEDIUM] All 16 sub-pages have their own sidebar nav duplicating the index.html sidebar structure, but linking to redirect stubs instead of using the SPA `show()` pattern. This means navigation from sub-pages always bounces through a redirect.

**LOW -- English content in admin**
- [LOW] admin/index.html "Overview" screen: English labels throughout: "Overview", "Tenants Ativos", "Samurais", "Acoes Hoje", "MRR", "Token Spend" -- mixes English and Portuguese inconsistently.
- [LOW] admin/index.html "Tenant Detail" screen: "Owner", "Email", "Tipo", "Plano", "Criado", "KYC", "2FA", "LLM mode", "Conexoes" -- mixes English and Portuguese field labels.
- [LOW] admin/index.html "Config" screen: "Production", "Staging", "Branch", "Last deploy" in English.
- [LOW] admin/agent-detail.html: "Overview" and "Dashboard" found in source.
- [LOW] admin/billing-costs.html: "Overview", "Total" in English.
- [LOW] admin/billing-revenue.html: "Overview", "Total" in English.
- [LOW] admin/catalog-attributions.html: "Overview" in source.
- [LOW] admin/compliance-audit.html: "Overview", "Dashboard" in source.
- [LOW] admin/compliance-lgpd.html: "Overview", "Total" in source.
- [LOW] admin/health-memory.html: "Overview", "Total" in source.
- [LOW] admin/health-workers.html: "Overview", "Total" in source.
- [LOW] admin/settings-admins.html: "Overview" in source.
- [LOW] admin/settings-constitution.html: "Overview" in source.
- [LOW] admin/settings-environments.html: "Overview" in source.
- [LOW] admin/settings-llm.html: "Overview" in source.
- [LOW] admin/tenant-activity.html: "Overview", "Dashboard" in source.
- [LOW] admin/tenant-agents.html: "Overview" in source.
- [LOW] admin/tenant-brain.html: "Overview" in source.
- [LOW] All admin sub-pages + index.html have shared-nav.js loaded outside `</body>` tag.

### Summary: 38 pages checked (10 tabs + 16 sub-pages + 2 utilities + 10 stubs), 36 issues found (0 critical, 14 high, 5 medium, 19 low)

---

## Cross-Flow Issues (affects all reviewers)

### Structural Issues
1. **shared-nav.js placement**: On 64+ pages, the `<script src="shared-nav.js">` tag is placed AFTER the closing `</body>` or `</html>` tag. While browsers tolerate this, it is invalid HTML and could cause issues with strict HTML parsers or automated testing tools.

2. **shared-nav.js scope**: The navigation system is designed exclusively for the PJ tenant dashboard but is injected into ALL pages including:
   - Auth pages (signup, login, verify, forgot, reset, twofa, kyc) -- where no nav should appear
   - Landing pages (pj/landing, pf/landing, tenant/landing) -- which have their own nav
   - PF-specific pages -- which get PJ-oriented nav items
   - Admin dark-mode pages -- where a light-mode tenant nav clashes visually

3. **No 404/fallback page**: There is no custom 404 page. If a user navigates to a non-existent URL, they get the browser's default error.

4. **No PF-specific auth flow**: The PF landing page links to the same `tenant/auth/signup.html` as PJ. After signup/verify, the user is directed to `tenant/onboarding/plans.html` (PJ pricing plans), not a PF-specific onboarding. There is no branching logic.

### Design System Issues
5. **Admin uses Tailwind CDN, rest uses shared.css**: The admin/index.html SPA uses `<script src="https://cdn.tailwindcss.com">` with custom Tailwind config, while all other 151 pages use shared.css with custom CSS classes. This means design tokens, spacing, and typography may diverge between admin and tenant.

6. **Zero emoji characters found**: All icons are SVG inline -- this is correct per the design system requirements.

### Content Issues
7. **Missing accent marks (tildes, cedillas)**: Throughout the prototype, Portuguese text uses ASCII-only characters. Examples: "acoes" instead of "acoes", "organizacao" instead of "organizacao", "financas" instead of "financas", "Politica" instead of "Politica", etc. This is consistent across all 152 pages, so it appears to be a deliberate prototype decision, but would need to be fixed for production.

---

## Summary Table

| Reviewer | Pages Checked | Critical | High | Medium | Low | Total Issues |
|----------|:------------:|:--------:|:----:|:------:|:---:|:------------:|
| PJ Flow  | 102          | 1        | 14   | 12     | 15  | 42           |
| PF Flow  | 21           | 0        | 5    | 7      | 7   | 19           |
| Admin    | 38           | 0        | 14   | 5      | 19  | 38           |
| **Total**| **152**      | **1**    | **33**| **24** | **41**| **99**      |

Note: Some issues overlap across flows (e.g., shared-nav.js on auth pages affects both PJ and PF reviewers). The total unique issues excluding duplicates is approximately 75.

### Top Priority Fixes
1. Remove shared-nav.js from auth pages (signup, login, verify, forgot, reset, twofa, kyc)
2. Remove shared-nav.js from landing pages (pj/landing, pf/landing, tenant/landing)
3. Fix 2 broken links in invite-welcome.html (approvals/index -> approvals/list, team/index -> team/list)
4. Fix verify.html script placement (move inside `</body>`)
5. Add PF-aware navigation context to shared-nav.js (detect PF vs PJ flow)
6. Resolve admin SPA/sub-page navigation mismatch (redirect stubs lose tab state)
7. Translate admin sidebar labels to Portuguese BR
8. Replace placeholder `href="#"` links with actual terms/privacy pages (or at least /terms.html stubs)
9. Replace `alert()` onclick handlers with proper UI interactions
10. Build out the 4 incomplete PF area pages (casa, produtividade, proposito, relacionamentos)
