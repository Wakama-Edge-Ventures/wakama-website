# Wakama Website — Brief Stratégique

**Document de référence permanent du projet `wakama-website`.**
À placer à la racine du repo. À lire avant toute modification.

---

## 0. Contexte et objectif

Le site `wakama.farm` actuel (WordPress, hébergé sur Hostinger) est un site Web3/crypto présentant Wakama comme un projet RWA + staking ZRT. Ce positionnement est obsolète depuis le pivot stratégique 2026 vers le modèle credit-as-a-service phygital pour l'agriculture ouest-africaine.

Le présent projet vise à remplacer entièrement ce site par une nouvelle vitrine institutionnelle B2B, inspirée structurellement de getcaruso.com, ciblant en priorité les institutions de microfinance, banques, assureurs paramétriques et investisseurs.

### Migration de domaines

| Domaine | Destination | Statut |
|---|---|---|
| `wakama.farm` | Nouveau site (Next.js, Coolify, VPS) | À déployer |
| `zrt.wakama.farm` | Ancien site WordPress (Hostinger) | À migrer (CNAME) |
| `oracle.wakama.farm` | Dashboard FMI | Existant |
| `farmer.wakama.farm` | App farmer | Existant |
| `api.wakama.farm` | API backend | Existant |

L'ancien site WordPress n'est jamais perdu : il devient le hub Web3/ZRT/DAO sous `zrt.wakama.farm`, en parfaite cohérence avec la stratégie de séparation des narratifs (institutionnel vs crypto).

---

## 1. Positionnement et tone of voice

### 1.1 Pitch en une phrase

**FR** — Wakama est l'infrastructure phygitale de credit-as-a-service pour l'agriculture ouest-africaine.

**EN** — Wakama is the phygital credit-as-a-service infrastructure for West African agriculture.

### 1.2 Tagline hero (3 lignes Caruso-style)

**FR**
> Réduisez le risque. Industrialisez vos opérations. Financez plus d'agriculteurs.
>
> Plateforme de scoring agricole et services managés, opérée par des professionnels, alimentée par une IA conforme BCEAO.

**EN**
> De-risk lending. Industrialize operations. Finance more farmers.
>
> Agricultural credit scoring and managed services, operated by seasoned professionals, powered by BCEAO-compliant AI.

### 1.3 Tone of voice

| Caractéristique | Description |
|---|---|
| Registre | Institutionnel, professionnel, sérieux |
| Phrases | Courtes, déclaratives, verbes d'action |
| Pronoms | "Vous" / "your" pour parler au client |
| Vocabulaire interdit | crypto, token, staking, blockchain, Web3, DAO, RWA, NFT, "révolutionner", "disrupter" |
| Vocabulaire prioritaire | scoring, infrastructure, conformité BCEAO, données vérifiées, IA, opérations terrain, économie unitaire |
| Émojis | Aucun |
| Superlatifs | À éviter ("le meilleur", "leader", "révolutionnaire") |

### 1.4 Trois principes éditoriaux

1. **Bénéfice avant feature** — toujours commencer par ce que le client gagne, jamais par la techno utilisée
2. **Chiffre avant adjectif** — "réduit de 50% le coût d'origination" plutôt que "réduit fortement"
3. **Conformité comme atout** — la compliance BCEAO est mise en avant comme différenciateur, pas cachée

---

## 2. Cible et messages par persona

### 2.1 Personas prioritaires

| Persona | Rôle | Question principale | Message Wakama |
|---|---|---|---|
| Directeur Crédit IMF | Décideur achat | "Comment réduire mon coût d'origination ?" | Wakama Services réduit de 50-70% le coût par dossier |
| Risk Officer Banque | Acheteur technique | "Le scoring est-il fiable et conforme ?" | Conformité BCEAO native, modèle auditable |
| Directeur Souscription Assureur | Acheteur métier | "Comment baisser ma sinistralité ?" | Données NDVI + IoT + scoring agronomique réduisent le PAD |
| VC / Investisseur | Influenceur stratégique | "Le marché est-il vraiment scalable ?" | Page Investors avec traction et roadmap |

### 2.2 Personas secondaires (non prioritaires en V1)

- Coopératives agricoles (futur produit Wakama Verified, hors V1)
- Agriculteurs (déjà servis par farmer.wakama.farm)
- Journalistes spécialisés agritech (page Press)

---

## 3. Charte design

### 3.1 Direction esthétique

Sobre, institutionnel, technique. Inspiré directement de getcaruso.com avec une touche d'identité africaine discrète (palette terre africaine en accents, jamais en surface dominante).

Référence visuelle de fond : Caruso, Stripe, Plaid, Persona, Alloy.

### 3.2 Palette de couleurs

```css
/* Couleurs principales */
--wk-green: #2D7A3E;          /* Vert Wakama, accents et logos */
--wk-green-deep: #1F5A2D;     /* Vert profond, hover states */
--wk-ochre: #C9A227;          /* Or africain, accents premium */

/* Couleurs neutres (dominantes) */
--wk-ink: #0F1A14;            /* Noir/vert très foncé, texte principal */
--wk-graphite: #2A332D;       /* Gris-vert foncé, titres */
--wk-stone: #6B716E;          /* Gris secondaire, captions */
--wk-bone: #F4F1EA;           /* Beige clair, backgrounds sections */
--wk-ivory: #FBF9F4;          /* Blanc cassé, page background */
--wk-paper: #FFFFFF;          /* Blanc pur, cards */

/* États fonctionnels */
--wk-success: #2D7A3E;
--wk-warning: #C9A227;
--wk-error: #B33A3A;
--wk-info: #2D5F7A;
```

**Règles d'application** :
- Backgrounds dominants : `--wk-ivory` (page) et `--wk-bone` (sections alternées)
- Texte courant : `--wk-ink`
- Titres : `--wk-graphite` ou `--wk-ink`
- Accents et CTAs : `--wk-green`
- Touches premium ponctuelles : `--wk-ochre` (max 1-2 occurrences par page)
- Aucun gradient violet / bleu électrique / fluo

### 3.3 Typographie

```css
/* Display font (titres, hero, sections) */
font-family: "Fraunces", "Source Serif 4", Georgia, serif;
/* Caractère, sérieux, légèrement éditorial — évite l'aspect SaaS générique */

/* Body font (paragraphes, navigation, UI) */
font-family: "Inter Tight", "Söhne", system-ui, sans-serif;
/* Lisibilité haute, neutralité technique */

/* Mono (chiffres, code, badges) */
font-family: "JetBrains Mono", "IBM Plex Mono", monospace;
```

**Hiérarchie type** :

| Usage | Font | Size desktop | Weight | Notes |
|---|---|---|---|---|
| Hero H1 | Fraunces | 64-80px | 600 | Optical size variable |
| Section H2 | Fraunces | 40-48px | 500 | |
| Sub-section H3 | Fraunces | 28-32px | 500 | |
| Body large | Inter Tight | 18-20px | 400 | Pour intros et leads |
| Body | Inter Tight | 16px | 400 | Lecture courante |
| Caption | Inter Tight | 13-14px | 500 | Tags, labels |
| Mono | JetBrains Mono | 13-14px | 500 | Stats, code |

**Règles** :
- Line-height généreux (1.6 pour body, 1.15-1.25 pour titres)
- Tracking légèrement négatif sur titres (-0.01em à -0.02em)
- Pas plus de 75 caractères par ligne en body

### 3.4 Composants visuels

**Cards** : fond `--wk-paper` ou `--wk-bone`, border `1px solid rgba(15,26,20,0.08)`, border-radius 16px, padding 32-40px, shadow extrêmement légère (`0 1px 2px rgba(0,0,0,0.04)`).

**Boutons primaires** : fond `--wk-ink`, texte `--wk-paper`, padding 14-28px, border-radius 8px, font-weight 500, transition 200ms.

**Boutons secondaires** : fond transparent, border `1.5px solid --wk-ink`, texte `--wk-ink`.

**Tags/badges** : fond `--wk-bone`, texte `--wk-graphite`, font-mono, uppercase letter-spacing 0.06em, border-radius 6px, padding 4-10px.

**Dividers** : `1px solid rgba(15,26,20,0.08)`, jamais des couleurs vives.

### 3.5 Mise en page

- Grille 12 colonnes, gutter 24px
- Container max-width 1280px
- Padding mobile 24px, tablet 48px, desktop 96px
- Sections verticales : 96-128px de padding vertical, 64px sur mobile

### 3.6 Iconographie

Lucide React pour tous les icônes. Style outline, 1.5px stroke. Couleur `--wk-graphite` ou `--wk-green`.

### 3.7 Imagerie

- Photos terrain authentiques uniquement (pas de stock générique d'agriculteurs souriants)
- Filtre légèrement désaturé pour cohérence
- Aucun rendu 3D type "platform abstraite"
- Schémas et diagrammes en SVG, palette de la marque

### 3.8 Motion

Animations subtiles, jamais ostentatoires :
- Fade-up au scroll (16px translation, 400ms ease-out)
- Stagger 80ms entre éléments d'une même section
- Hover sur cards : translate Y -2px + shadow légère
- Hover sur CTAs : darken background 8%
- Aucune animation JS lourde, aucune parallaxe complexe

Librairie : `framer-motion` pour React.

---

## 4. Sitemap complet

```
wakama.farm/                                  → Home (FR par défaut)
wakama.farm/en                                → Home EN

  /products/score                             → Wakama Score
  /products/services                          → Wakama Services
  /products/insurance                         → Wakama Insurance

  /solutions/imf                              → Solutions pour IMF
  /solutions/banks                            → Solutions pour Banques
  /solutions/insurers                         → Solutions pour Assureurs

  /technology                                 → Plateforme & Idjor (l'IA)
  /compliance                                 → Conformité BCEAO

  /company/about                              → À propos
  /company/team                               → Équipe & Advisors
  /company/newsroom                           → Annonces et presse
  /company/newsroom/[slug]                    → Article individuel

  /investors                                  → Page Investors (pas dans menu)
  /contact                                    → Contact (formulaires différenciés)
  /legal/terms                                → Termes
  /legal/privacy                              → Confidentialité
```

### 4.1 Navigation principale

```
[Logo Wakama]    Products ▼   Solutions ▼   Technology   Compliance   Company ▼   [Contact]   [FR/EN]
```

### 4.2 Navigation footer

```
PRODUCTS               SOLUTIONS              COMPANY                LEGAL
Wakama Score           For MFIs               About                  Terms
Wakama Services        For Banks              Team                   Privacy
Wakama Insurance       For Insurers           Newsroom               Compliance
                                              Investors
                                              Contact

zrt.wakama.farm — Wakama Web3 ecosystem
© 2026 Wakama Edge Ventures. All rights reserved.
```

---

## 5. Wireframe et copywriting page par page

### 5.1 Home (`/`)

**Section 1 — Hero**
- Eyebrow tag (mono) : `BCEAO-COMPLIANT INFRASTRUCTURE` / `INFRASTRUCTURE CONFORME BCEAO`
- H1 : *De-risk lending. Industrialize operations. Finance more farmers.* / *Réduisez le risque. Industrialisez vos opérations. Financez plus d'agriculteurs.*
- Sous-titre : *Agricultural credit scoring and managed services, operated by seasoned professionals, powered by BCEAO-compliant AI.* / *Plateforme de scoring agricole et services managés, opérée par des professionnels, alimentée par une IA conforme BCEAO.*
- CTA primaire : `Request a demo` / `Demander une démo`
- CTA secondaire : `See how it works` / `Voir comment ça marche` (scroll vers section 3)
- Visuel : illustration SVG sobre représentant la plateforme (3 produits connectés) — à produire en V1.5

**Section 2 — Backed by**
- Texte : *Backed by the Solana Foundation and trusted by leading agricultural cooperatives in West Africa.*
- Logos : Solana Foundation + 3-4 logos coop partenaires (REMUCI, ETRA, Sahara Trace coop si autorisé)
- Note : si les logos clients ne sont pas encore signés, mettre une bannière "Currently piloting with [X] microfinance institutions and cooperatives in Côte d'Ivoire"

**Section 3 — One platform, three products**
- H2 : *One platform. Three products. Built for institutional finance.*
- Sous-titre : *Choose what you need today. Add what you need tomorrow.*
- 3 Cards (clickable, redirigent vers /products/[slug]) :
  - **Wakama Score** — *Agricultural credit scoring API enriched with field data, satellite imagery, and behavioral signals.*
  - **Wakama Services** — *Outsourced credit operations: KYC, scoring, monitoring, and assisted recovery — fully BCEAO-compliant.*
  - **Wakama Insurance** — *Field-verified data and risk scoring for parametric crop insurance providers.*

**Section 4 — Stats / Traction**
- Stats à 3 colonnes (à mettre à jour quand les chiffres viennent) :
  - *X farmers instrumented*
  - *Y plots scored*
  - *Z partners across UEMOA*
- Note V1 : si les chiffres ne sont pas prêts, remplacer par des éléments qualitatifs (Solana Grant, BCEAO-aligned, 3 pilot cooperatives)

**Section 5 — Why Wakama**
- H2 : *Modern infrastructure. Local execution.*
- 4 piliers en grid 2x2 :
  - *Field-verified data* — Our agent network captures KYC, parcel data, and behavioral signals where banks cannot reach.
  - *AI-native operations* — Idjor, our embedded AI agent, automates KYC summaries, document extraction, and risk monitoring.
  - *BCEAO-compliant by design* — Built around UMOA Circular 004-2017 and Instruction 003-03-2025. Your audit trail is intact.
  - *Software + services* — Use Wakama as software only, fully outsourced, or hybrid. We adapt to your operating model.

**Section 6 — How it works**
- H2 : *How it works*
- 3 étapes simples (timeline horizontale) :
  1. *Connect* — Integrate the API or onboard your portfolio via our team.
  2. *Score & Operate* — Wakama provides scoring, KYC collection, and ongoing monitoring through its field network.
  3. *Decide* — You retain full credit decision authority. We handle the operational lift.

**Section 7 — For every type of institution**
- H2 : *For every type of institution.*
- 3 cards (redirigent vers /solutions/[type]) :
  - *Microfinance Institutions* (Tier-2 to Tier-1, 1-50 Bn FCFA AUM)
  - *Banks* (agricultural finance arms)
  - *Insurers* (parametric crop insurance)

**Section 8 — Featured insight (Newsroom teaser)**
- H2 : *Latest from Wakama*
- 3 cards Newsroom (les 3 derniers articles ou annonces)
- Lien : *See all news →*

**Section 9 — Final CTA**
- H2 : *Ready to industrialize your agricultural lending?*
- Sous-titre : *Talk to our team to scope a pilot in Côte d'Ivoire or across UEMOA.*
- CTA primaire : `Request a demo`
- CTA secondaire : `Read our compliance overview` (lien vers /compliance)

---

### 5.2 Page produit Wakama Score (`/products/score`)

**Hero**
- Eyebrow : `PRODUCT 01 — SCORE`
- H1 : *Agricultural credit scoring, enriched.*
- Sous-titre : *A scoring API that goes beyond bureau data — enriched with NDVI, weather, IoT, and behavioral signals from cooperatives.*
- CTA : `Request access` / `Demander l'accès`

**Section : The problem**
- H2 : *Bureau data alone doesn't score African farmers.*
- Paragraphe : *BIC-UEMOA aggregates formal banking history. But 80% of West African smallholders have no banking history at all. Wakama Score produces the alternative data they've never had.*

**Section : What's inside**
- H2 : *What goes into a Wakama Score*
- 4 sources, en grid avec icônes :
  - **Satellite imagery** — Multi-season NDVI, parcel boundaries, vegetation health.
  - **IoT field data** — Soil moisture, micro-weather, crop stage indicators.
  - **Cooperative behavior** — Production history, contract reliability, peer endorsement.
  - **Identity & assets** — Verified KYC, land tenure status, livestock and equipment.

**Section : How institutions use it**
- H2 : *Built for production credit workflows.*
- 3 use cases :
  - *Pre-qualification* — Filter applicants before credit committee.
  - *Limit setting* — Calibrate ticket size against real exposure.
  - *Portfolio monitoring* — Re-score active borrowers monthly.

**Section : Pricing snapshot**
- H2 : *Transparent, BCEAO-compatible pricing*
- 3 lignes :
  - *Platform subscription* — 750K to 1.5M FCFA / month
  - *Per-file scored* — 15K to 25K FCFA
  - *Performance bonus (optional)* — 200K FCFA / month if PAD reduction > 30%
- Bouton : `See full pricing →` (vers /contact)

**Section : Compliance card**
- Encadré : *Wakama Score is delivered as a data and recommendation service. The credit decision remains exclusively with the lending institution, in compliance with UMOA banking law.*

**CTA final** : *Score your first 100 files free during a 30-day pilot.* + bouton `Start a pilot`

---

### 5.3 Page produit Wakama Services (`/products/services`)

**Hero**
- Eyebrow : `PRODUCT 02 — SERVICES`
- H1 : *Outsourced credit operations for agricultural lending.*
- Sous-titre : *Industrialize your agricultural credit cycle. Reduce origination cost by 50 to 70%. Keep full decision authority.*
- CTA : `Request scoping call`

**Section : The hidden cost of in-house origination**
- H2 : *Origination is killing your margins.*
- Paragraphe : *For a Tier-2 MFI processing 500 files per month, the all-in origination cost reaches 80 to 195 million FCFA — before counting the cost of risk.*
- Tableau (le tableau de coûts CGAP/FinDev déjà dans le Blueprint)

**Section : What we outsource**
- H2 : *We handle the operational lift. You make the call.*
- Tableau visuel des fonctions externalisables (avec la BCEAO ref) :

| Function | Outsourceable | BCEAO reference |
|---|---|---|
| Scoring & alternative data | ✓ | Circular 004-2017 |
| KYC & document collection | ✓ | Instruction 003-03-2025 |
| Credit decision | ✗ — stays with the institution | Banking law 2018 |
| Disbursement (technical) | ✓ | Circular 004-2017 |
| Field monitoring | ✓ | Approved agent |
| Assisted recovery | ✓ | Under MFI mandate |

**Section : The economics**
- H2 : *The economics, transparently.*
- Visuel : encadré comparatif "in-house vs Wakama Services"
  - *In-house cost (500 files / month) : 80-195M FCFA*
  - *Wakama Services cost : ~13.5M FCFA*
  - *Net savings : 42 to 155M FCFA per month*

**Section : The Idjor advantage**
- H2 : *Idjor — the AI agent inside your operations.*
- Paragraphe : *Idjor doesn't just answer questions. It reads, summarizes, extracts, and monitors. Hours of manual work, handled in seconds.*

**Section : Pricing snapshot** (idem Score, avec grille Services)

**Section : Compliance**
- Encadré conformité BCEAO renforcé, avec mention du contrat type validé par avocat agréé

**CTA final** : `Scope a pilot with our team`

---

### 5.4 Page produit Wakama Insurance (`/products/insurance`)

**Hero**
- Eyebrow : `PRODUCT 03 — INSURANCE`
- H1 : *Field-verified data for parametric crop insurance.*
- Sous-titre : *Reduce loss ratio. Lower underwriting cost. Reach more farmers, profitably.*

**Section : The problem**
- H2 : *Parametric insurance is data-bound.*
- Paragraphe : *Without ground-truth data, your basis risk explodes. Wakama provides verified parcel-level data — NDVI, IoT, weather, agronomic scoring — calibrated to your products.*

**Section : What you get**
- 4 capabilities :
  - *Verified parcels* — GPS-bounded, ground-truthed via our agent network.
  - *Multi-season NDVI history* — calibration baseline for your indices.
  - *Local IoT and weather* — beyond satellite, where it matters.
  - *Agronomic scoring* — farmer-level performance signals.

**Section : Partnership model**
- H2 : *We partner. We don't just sell data.*
- Paragraphe sur le modèle partnership + revenue share, structure CIMA-compliant.

**Section : Pricing snapshot** (grille Insurance)

**CTA final** : `Co-design a product with our team`

---

### 5.5 Page Solutions IMF (`/solutions/imf`)

Page longue qui combine :
- Hero spécifique IMF
- Le problème vu côté IMF (cycle de décision long, coûts d'origination élevés, manque de données alternatives)
- La combinaison de produits recommandée pour une IMF (Score + Services)
- Témoignage placeholder (à compléter quand on aura des clients)
- ROI attendu chiffré
- CTA : `Talk to our MFI specialist`

### 5.6 Page Solutions Banks (`/solutions/banks`)

Variation pour banques avec arm agricole. Mêmes sections, contenu adapté.

### 5.7 Page Solutions Insurers (`/solutions/insurers`)

Variation pour assureurs paramétriques. Focus sur Wakama Insurance.

### 5.8 Page Technology (`/technology`)

**Hero** : *The Wakama platform — built for African agricultural finance.*

**Sections** :
- Architecture overview (schéma)
- The phygital model — software + field network
- Idjor — the AI agent (description détaillée des capacités)
- Data sources we integrate
- Security & uptime (ISO27001 visé, SLA 99.5%)
- API & integration (Swagger placeholder)

### 5.9 Page Compliance (`/compliance`)

Page critique pour la confiance institutionnelle.

**Hero** : *BCEAO-compliant by design.*

**Sections** :
- Le cadre réglementaire UEMOA (Circular 004-2017, Instruction 003-03-2025, Banking law 2018)
- La règle d'or Wakama (encadré spécial)
- Notre structure contractuelle type
- Audit trail et reporting BCEAO
- Notre conseil juridique
- Téléchargement : Wakama Compliance Brief (PDF, à produire ultérieurement)

### 5.10 Page Company / About (`/company/about`)

- Mission
- Vision Phase 2026 → 2028
- Nos valeurs (rigueur, terrain, conformité)
- Notre histoire (depuis le grant Solana, le pivot 2026)

### 5.11 Page Team (`/company/team`)

La page Team présente l'équipe Wakama avec une hiérarchie visuelle claire : Founders en grand format (cards riches en haut de page), puis Leadership Team en grille compacte (cards plus petites, format uniforme).

Note importante : seul le segment opérationnel et institutionnel de l'équipe est affiché sur le site `wakama.farm`. Les rôles dédiés à l'écosystème Web3/DAO (notamment Mervin Cook, Growth & Crypto Marketing) seront présentés sur `zrt.wakama.farm` pour préserver la cohérence du narratif institutionnel B2B.

#### Structure de la page

**Hero**
- H1 : *The team behind Wakama* / *L'équipe derrière Wakama*
- Sous-titre : *Operators, engineers, and advisors building credit infrastructure for African agriculture.* / *Opérateurs, ingénieurs et advisors construisant l'infrastructure de crédit de l'agriculture africaine.*

**Section 1 — Founders & Co-Founders (cards larges)**

Affichage : 2 cards côte à côte sur desktop, stack vertical sur mobile.
Chaque card : photo carrée 320x320px, nom (font-display 28px), rôle (mono uppercase small), accroche courte (1 ligne), lien LinkedIn (icône lucide).

Membres affichés dans cette section :
- Marouane Jebbar — CEO & Founder
- Syntyche Kouadio — Chief Partnerships Officer & Co-Founder

**Section 2 — Leadership Team (grille compacte)**

Affichage : grille 4 colonnes desktop, 2 colonnes tablet, 1 colonne mobile.
Chaque card compacte : photo ronde 120x120px, nom (font-body 18px bold), rôle (font-mono 12px uppercase), icône LinkedIn discrète.

Membres affichés dans cette section :
- Abderrazak Kessam — Quality Management
- Yassine Haoud — Supply Chain & Procurement
- Arthur Brice Konanwa — Agriculture Data Science
- Rabiî El Mourabite — Risk Management & Supply Chain
- Moussa Bakayoko — Chief Security & Compliance Advisor
- Serge Doh — Senior Advisor

**Section 3 — Open positions**

Postes ouverts :
- Head of Operations
- Lead Engineer Backend
- Risk & Compliance Officer
- Sales Lead Côte d'Ivoire

**FinalCTA** : *Want to join us? careers@wakama.farm*

#### Données structurées

Pour standardiser les données de l'équipe, créer dans le projet un fichier `src/data/team.ts` qui contient l'objet team typé. Toutes les bios et libellés viennent de l'i18n pour permettre la traduction FR/EN.

```typescript
// src/data/team.ts
export interface TeamMember {
  id: string
  name: string
  roleKey: string
  photoUrl: string
  linkedinUrl: string
  tier: "founder" | "leadership"
}

export const TEAM: TeamMember[] = [
  { id: "marouane-jebbar", name: "Marouane Jebbar", roleKey: "team.roles.ceoFounder", photoUrl: "/team/marouane-jebbar.jpg", linkedinUrl: "", tier: "founder" },
  { id: "syntyche-kouadio", name: "Syntyche Kouadio", roleKey: "team.roles.cpoCofounder", photoUrl: "/team/syntyche-kouadio.jpg", linkedinUrl: "", tier: "founder" },
  { id: "abderrazak-kessam", name: "Abderrazak Kessam", roleKey: "team.roles.qualityManagement", photoUrl: "/team/abderrazak-kessam.jpg", linkedinUrl: "", tier: "leadership" },
  { id: "yassine-haoud", name: "Yassine Haoud", roleKey: "team.roles.supplyChain", photoUrl: "/team/yassine-haoud.jpg", linkedinUrl: "", tier: "leadership" },
  { id: "arthur-konanwa", name: "Arthur Brice Konanwa", roleKey: "team.roles.dataScience", photoUrl: "/team/arthur-konanwa.jpg", linkedinUrl: "", tier: "leadership" },
  { id: "rabii-el-mourabite", name: "Rabiî El Mourabite", roleKey: "team.roles.riskSupplyChain", photoUrl: "/team/rabii-el-mourabite.jpg", linkedinUrl: "", tier: "leadership" },
  { id: "moussa-bakayoko", name: "Moussa Bakayoko", roleKey: "team.roles.securityCompliance", photoUrl: "/team/moussa-bakayoko.jpg", linkedinUrl: "", tier: "leadership" },
  { id: "serge-doh", name: "Serge Doh", roleKey: "team.roles.seniorAdvisor", photoUrl: "/team/serge-doh.jpg", linkedinUrl: "", tier: "leadership" },
]
```

#### Clés i18n pour les rôles

Clés à ajouter dans `messages/fr.json` et `messages/en.json` (sous la section `team`) :
- `team.roles.ceoFounder` : "CEO & Founder"
- `team.roles.cpoCofounder` : "Chief Partnerships Officer & Co-Founder"
- `team.roles.qualityManagement` : "Quality Management"
- `team.roles.supplyChain` : "Supply Chain & Procurement"
- `team.roles.dataScience` : "Agriculture Data Science"
- `team.roles.riskSupplyChain` : "Risk Management & Supply Chain"
- `team.roles.securityCompliance` : "Chief Security & Compliance Advisor"
- `team.roles.seniorAdvisor` : "Senior Advisor"

#### Photos requises

8 photos à fournir avant le déploiement V1, format JPG carré :
- Founders : 800x800 px
- Leadership : 600x600 px

Si une photo manque au moment du build, le composant doit afficher un placeholder (initiales sur fond `--wk-bone`) plutôt que de planter.

#### Liens LinkedIn

Pour chaque membre, le lien LinkedIn est optionnel : si la chaîne est vide, l'icône LinkedIn ne s'affiche pas sur la card. Les liens peuvent être ajoutés progressivement dans `src/data/team.ts`.

### 5.12 Page Newsroom (`/company/newsroom`)

- Liste des annonces (markdown / MDX)
- Filtres : Press releases, Product updates, Partnerships
- Format article : titre, date, catégorie, intro, body, share

### 5.13 Page Investors (`/investors`)

Pas dans le menu principal. Lien depuis footer.

**Sections** :
- Hero : *Investing in the credit infrastructure of African agriculture.*
- The opportunity (1 paragraphe TAM)
- Our progress (traction, jalons)
- The roadmap (les 5 phases du Blueprint)
- Financials (high-level uniquement, pas de chiffres détaillés en public)
- The team
- CTA : `Request our investor deck` (formulaire dédié)

### 5.14 Page Contact (`/contact`)

Formulaires différenciés par cible (selon réponse Q3) :

```
Who are you?
[ ] Microfinance Institution
[ ] Bank
[ ] Insurer
[ ] Investor
[ ] Press / Journalist
[ ] Other

→ formulaire adapté apparaît avec champs spécifiques
```

Champs communs : nom, email pro, organisation, message.
Champs spécifiques :
- IMF : portfolio size, country, current scoring method
- Bank : agricultural exposure, country
- Insurer : products operated, geography
- Investor : firm name, AUM, focus
- Press : publication, deadline

Pour V1, intégration simple : email envoyé à `contact@wakama.farm` avec routage interne.

---

## 6. Stack technique

### 6.1 Stack principale

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js | 15 (App Router) |
| Language | TypeScript | 5.x strict mode |
| Styling | Tailwind CSS | 4.x |
| i18n | next-intl | dernière |
| UI Components | shadcn/ui | base, customisé |
| Icons | lucide-react | dernière |
| Motion | framer-motion | dernière |
| Forms | react-hook-form + zod | dernière |
| Content (Newsroom) | MDX (Contentlayer ou next-mdx-remote) | dernière |
| Analytics | Plausible (self-hosted ou cloud) | - |
| SEO | next-sitemap + metadata API | - |
| Deployment | Coolify (VPS Hostinger / OVH) | - |

### 6.2 Architecture du repo

```
wakama-website/
├── BRIEF.md                          # Ce document
├── README.md                         # Guide dev + déploiement
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── .env.example
├── .gitignore
├── public/
│   ├── logos/
│   ├── illustrations/
│   ├── photos/
│   └── og/
├── messages/
│   ├── fr.json
│   └── en.json
├── content/
│   └── newsroom/
│       └── 2026-04-launch.mdx
└── src/
    ├── app/
    │   ├── [locale]/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                    # Home
    │   │   ├── products/
    │   │   │   ├── score/page.tsx
    │   │   │   ├── services/page.tsx
    │   │   │   └── insurance/page.tsx
    │   │   ├── solutions/
    │   │   │   ├── imf/page.tsx
    │   │   │   ├── banks/page.tsx
    │   │   │   └── insurers/page.tsx
    │   │   ├── technology/page.tsx
    │   │   ├── compliance/page.tsx
    │   │   ├── company/
    │   │   │   ├── about/page.tsx
    │   │   │   ├── team/page.tsx
    │   │   │   ├── newsroom/page.tsx
    │   │   │   └── newsroom/[slug]/page.tsx
    │   │   ├── investors/page.tsx
    │   │   ├── contact/page.tsx
    │   │   └── legal/
    │   │       ├── terms/page.tsx
    │   │       └── privacy/page.tsx
    │   ├── api/
    │   │   └── contact/route.ts
    │   ├── globals.css
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── LocaleSwitcher.tsx
    │   │   └── Container.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── ProductCards.tsx
    │   │   ├── Stats.tsx
    │   │   ├── Pillars.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── PricingSnapshot.tsx
    │   │   ├── ComplianceCallout.tsx
    │   │   ├── FAQ.tsx
    │   │   └── FinalCTA.tsx
    │   ├── ui/                          # shadcn customisé
    │   ├── forms/
    │   │   └── ContactForm.tsx
    │   └── primitives/
    │       ├── Tag.tsx
    │       ├── Badge.tsx
    │       ├── Card.tsx
    │       └── Button.tsx
    ├── lib/
    │   ├── i18n.ts
    │   ├── seo.ts
    │   └── utils.ts
    ├── styles/
    │   └── tokens.css                   # Variables CSS
    └── types/
        └── index.ts
```

### 6.3 Conventions de code

- TypeScript strict mode obligatoire
- Aucun `any` non justifié
- Composants nommés en PascalCase, fichiers idem
- Props typés avec `interface`, jamais `type` (sauf unions)
- Server Components par défaut, Client Components uniquement quand nécessaire (formulaires, locale switcher)
- Tailwind avec ordre cohérent : layout → spacing → typography → colors → effects
- Pas de styled-components, pas de CSS modules — Tailwind + CSS variables uniquement

### 6.4 i18n (next-intl)

- 2 locales : `fr` (default) et `en`
- Toutes les strings dans `messages/fr.json` et `messages/en.json`
- Aucune string en dur dans les composants
- Routes : `/` = FR par défaut, `/en/...` pour anglais
- Locale switcher dans le header + URL-based detection

### 6.5 Déploiement

- Repo GitHub : `wakama-website` (privé)
- Branche principale : `main`
- Build Next.js → image Docker → Coolify déploie sur VPS
- SSL via Let's Encrypt (Coolify automatique)
- Domaines : `wakama.farm` + `www.wakama.farm` (redirect 301 vers non-www)
- Variables d'env : `.env.production` (non versionné)
- CI/CD : GitHub Actions → Coolify webhook au push

---

## 7. Plan de développement par phases

### Phase 1 — Setup (2-3h)
- Créer repo GitHub privé `wakama-website`
- Init Next.js 15 + TS + Tailwind + i18n
- Configurer ESLint, Prettier, Husky pre-commit
- Charte design dans `tokens.css`
- Layout global (Header, Footer, Container)
- Locale switcher fonctionnel

### Phase 2 — Pages core (1 journée)
- Home complète
- Pages produits (Score, Services, Insurance)
- Page Compliance

### Phase 3 — Pages secondaires (1 journée)
- Solutions (IMF, Banks, Insurers)
- Technology
- Company (About, Team, Newsroom listing)

### Phase 4 — Conversion (1/2 journée)
- Page Contact avec formulaires différenciés
- Page Investors
- API route /api/contact (envoi email simple)

### Phase 5 — Polish (1/2 journée)
- Animations framer-motion
- SEO complet (metadata, OG images, sitemap)
- Tests responsives
- Lighthouse > 90 sur tous critères

### Phase 6 — Déploiement (2-3h)
- Setup Coolify
- DNS migration (zrt.wakama.farm pour ancien WordPress, wakama.farm pour le nouveau)
- Déploiement production
- Vérification finale (analytics, formulaires, redirections)

**Durée totale estimée : 4 à 5 jours de dev focus.**

---

## 8. Critères d'acceptation V1

Pour considérer la V1 livrée :

- [ ] Toutes les pages du sitemap sont accessibles et bilingues
- [ ] Formulaires de contact fonctionnels et différenciés
- [ ] Le site est responsive de 320px à 1920px
- [ ] Lighthouse Performance > 90, Accessibility > 95, SEO 100
- [ ] Aucune occurrence de "ZRT", "token", "staking", "blockchain", "Web3", "RWA", "DAO" sur le site (recherche `grep` à zéro)
- [ ] Le `BRIEF.md` est à jour à la racine du repo
- [ ] Le `README.md` documente l'installation locale + déploiement Coolify
- [ ] L'ancien site WordPress est migré sur `zrt.wakama.farm`
- [ ] `wakama.farm` pointe vers le nouveau site
- [ ] OG images générées pour les pages principales
- [ ] Plausible (ou équivalent) installé et fonctionnel

---

## 9. Évolutions prévues (V2 et au-delà)

**V2** (Q3 2026)
- Section Resources / Blog (avec MDX)
- Études de cas / Témoignages clients
- Wakama Compliance Brief (PDF téléchargeable)
- Investor Deck en téléchargement protégé (data room)

**V3** (Q4 2026)
- Comptes utilisateurs (login pour clients ZRT — branche séparée)
- Customer portal léger
- Status page (connectée à l'API)

**V4** (2027)
- Calculateur ROI interactif pour MFI
- Demo interactive de la plateforme
- Section partenaires détaillée

---

## 10. Mentions et propriété intellectuelle

Ce document est la propriété de Wakama Edge Ventures. Il est destiné à l'usage interne du projet et des prestataires sous NDA. Toute évolution du brief doit être validée par le fondateur avant intégration.

Document maintenu par : Marouane Marrakchi
Version : 1.0
Date : Avril 2026
