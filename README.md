# Echo Wang Portfolio — V0.8

## Direction
V0.8 combines the strongest parts of the previous versions:

- V0.2: playable side-scrolling portfolio interaction, camera follow, movement, jump, portals and mobile controls.
- V0.7: recent-to-past project structure and editorial project case-study panels.
- New art direction: the supplied monochrome city background and new Echo character. The Dalí-inspired background has been removed.

## Files
- `index.html`
- `style.css`
- `script.js`
- `assets/character/`
- `assets/background/`
- `assets/works/`

## Controls
Desktop: A/D or ←/→ to move, Space to jump, E to enter a nearby project, Esc to close panels.
Mobile: swipe horizontally or use the on-screen controls; tap a portal to open a project.

## World
The supplied 2016×864 background is repeated as four horizontal segments; every second segment is mirrored so the world can continue beyond the source image without a hard visual reset.

## Languages
Simplified Chinese, Traditional Chinese, English and Korean. Language selection is persisted in localStorage. Typography variables adjust letter spacing and line height per language.

## Content
Project data is ordered recent → past. The project panel is intentionally image-led but keeps role, type, market/scope and responsibilities visible before the gallery.

## Notes
- Current-project galleries can be added later without changing the world structure.
- Performance metrics are intentionally marked as data-to-add rather than invented.
- Replace assets inside `assets/` to iterate visual direction without rewriting the interaction layer.
