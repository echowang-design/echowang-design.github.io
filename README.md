# Echo Wang Portfolio — V0.5

> Portfolio World prototype — structure + interaction first, content later.

## What V0.5 is

V0.5 is a rebuild of the portfolio around the original core idea:

**A Q-version Echo avatar travels through a surreal side-scrolling world to enter the portfolio.**

The site is intentionally built as a static GitHub Pages package:
- `index.html`
- `style.css`
- `script.js`
- `assets/`

No framework, build step, database or external runtime dependency is required.

## Information architecture

The portfolio is **career-stage first, featured-project second**.

Why not sort only by fame:
- A portfolio should show career progression and increasing responsibility.
- Your current role as a visual lead / supervisor should not be buried.
- Project fame can change; career chronology is stable.
- Strong projects are therefore surfaced as `FEATURED` portals while the world itself follows your career timeline.

### Current world order

1. 2019–2020 — Shenzhen Jiu Zuo Culture — foundation / independent visual design
2. 2020–2022 — Tencent START Cloud Gaming — brand / product / H5 / PC operations
3. 2022–2023 — Banana Interactive — game publishing / market-facing creative
4. 2024 — Tianyou Network — product visual / store communication
5. 2024–2025 — Hulai Games — Tokyo Ghoul / Yu Yu Hakusho
6. 2025–NOW — Youyan Games — visual lead / publishing system

### Featured cases currently populated

- Tokyo Ghoul
- Yu Yu Hakusho
- 胖西游
- Digital Girls
- Tencent START
- Foundation / Tencent game-related work

Current Youyan projects are represented as a clean placeholder area:
`Blue Sky / Xuan Ying / V5 / QV1 / F2`

This is deliberate. Do not publish confidential company work until it is cleared for public use.

## Interaction model

### Desktop
- `A / D` or `← / →` — move
- `Space` — jump
- `E` — enter the nearest portal
- `MAP` / `PROJECTS` — bypass the game layer and browse directly

### Mobile
- Swipe horizontally to travel
- Bottom-left movement buttons
- Bottom-right jump button
- Tap a portal to open its case
- `MAP` / menu gives a direct non-game route

The mobile version is **not a scaled-down desktop game**. It is intentionally simplified so the visitor can still reach the work without precise platform-game controls.

## Dalí / surreal direction

The supplied monochrome landscape is kept as the base world.

V0.5 adds a restrained surreal system:
- distorted portal frames
- floating elliptical forms
- impossible / melting geometry
- asymmetric typography
- paper-like visual texture
- non-literal career timeline

The goal is **surreal portfolio world**, not a literal Salvador Dalí imitation.

## Project case-study template

Each case is structured around:

1. Project / period
2. Role
3. Type
4. Market / scope
5. Short project context
6. What I owned
7. Selected work
8. Later: process / result / metrics

This is designed so later content can be added without changing the site's architecture.

## Resume achievement upgrade plan

The current resume describes responsibilities well but underuses measurable outcomes.

**V0.5 does NOT invent performance numbers.**

For V0.7+, collect real evidence where disclosure is allowed:

### Publishing / UA
- Number of campaigns / projects owned
- Monthly or quarterly creative output
- Highest-spend creative share
- CTR / CVR change after creative iteration
- Cost-per-acquisition change
- ROAS / ROI change
- Number of markets / countries shipped

### Team / management
- Team size
- External vendor count
- Number of parallel projects
- Brief-to-delivery cycle time
- Review / revision reduction
- Production capacity before vs. after your process

### Product / brand
- Number of H5 / PC pages shipped
- Page traffic / clicks
- Conversion or engagement lift
- Brand assets / templates standardized
- Launch schedule achieved

### Example rewrite pattern

Weak:
> 负责东京喰种、幽游白书平面需求的安排和跟进。

Stronger:
> 统筹《东京喰种》《幽游白书》两条 IP 项目的平面视觉需求，从需求拆解、视觉方案、外包沟通到最终上线闭环；覆盖商店图、H5、PC 活动页及宣传素材。

With verified data:
> 统筹 2 个 IP 项目、X 个市场版本及 X+ 项视觉资产，建立从需求拆解到上线的视觉交付流程，使平均交付周期由 X 天降至 X 天。

Never fill `X` with an estimated number. Use actual records from your work system.

## Assets

The original uploaded portfolio images were reorganized according to the career/project structure rather than their original folder names.

The resume image itself is **not included** in the public deployment package. It was used only as source material for planning.

Image assets were resized/optimized for web use. Original source files should remain in your private archive.

## How to deploy

1. Replace the contents of your GitHub Pages repository with this folder's contents.
2. Keep the existing GitHub Pages configuration.
3. Commit / push.
4. The existing site URL can remain unchanged.

No domain or GitHub Pages setting needs to be changed for this static package.

## Recommended V0.7 work

1. Replace placeholder Youyan projects with publishable cases.
2. Add real project metrics.
3. Add process boards: brief → concept → iteration → final.
4. Add an experience timeline accessible from the world.
5. Add a dedicated contact / CV route.
6. Add richer avatar states / walking animation.
7. Add sound as an optional toggle, not autoplay.
8. Add a proper mobile map / quick-jump menu.
9. Add image lazy-loading / responsive image variants for a larger archive.
10. Add a "Skip World / View Portfolio" path for recruiters who want the fastest route.

## Privacy / publishing warning

This package is intended for your own GitHub Pages repository.

Before publishing, review every image and remove:
- confidential company materials
- unreleased project information
- internal performance data
- private contact information
- client / partner information that is not cleared for publication



## V0.7 changes
- Echo Wang is explicitly named on the home screen and the character avatar is visible on the landing screen.
- Added Simplified Chinese, Traditional Chinese, English and Korean language switching.
- Typography uses language-specific letter-spacing and line-height variables so CJK, English and Korean do not share a rigid spacing system.
- Career and project order is Recent → Past.
- Added an in-world interaction prompt and current-project portal.
