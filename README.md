# GS4S Dartboard Tool

An interactive figure showing the combinations of strategies that multinational companies in Germany, Estonia, Switzerland and the Netherlands have used to close skill shortages in four sectors: IT, manufacturing, health and construction. Choose a sector, then click a wedge to see one pathway: the conditions the companies faced, the strategies they combined, and the lesson for policy.

The tool is based on the forthcoming publication *On Target: Sector Pathways to Close Skill Shortages* by Daniël Speldekamp and Ayse Saka-Helmhout. The data comes from the policy brief *Closing Europe’s Skills Gap: Sector-Specific Lessons for EU Skills Policy* ([Saka-Helmhout et al., 2026](https://doi.org/10.5281/zenodo.20676416)). It is part of GS4S – Global Strategy for Skills, Migration and Development, a Horizon Europe project ([gs4s.eu](https://gs4s.eu/)) funded by the European Union under grant agreement No. 101132377.

## Live version

<https://speldekamp.github.io/gs4s-dartboard/>, deployed to GitHub Pages by GitHub Actions (`.github/workflows/pages.yml`) on every push to `main`.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page: header band, Overview, Dartboard Tool, About and Download sections, footer |
| `js/dartboard.js` | The tool: data (`DATA`), drawing and behaviour. Plain JavaScript, no libraries; it builds an SVG |
| `css/dartboard.css` | Styling and layout of the tool |
| `css/stylesheet.css` | Page styling and the dark theme in the GS4S house style (GS4S Visual Identity Manual v1.0), built on a few rules from the PaperMod / hugo-website styles; also the pink header band and the footer |
| `css/theme.css` | Light theme and the Dark/Light toggle in the header band |
| `js/theme.js` | Toggle behaviour: follows the system setting until the visitor picks a theme, then remembers it (`localStorage` key `pref-theme`). The figure's colours follow the page theme |
| `fonts/lora/`, `fonts/jetbrains-mono/` | Self-hosted fonts: Lora (body text, 400 and 600) and JetBrains Mono ExtraBold (titles, headings, buttons, labels). The page makes no requests to other sites |
| `img/gs4s-logo.svg` | GS4S logo (from the GS4S Visual Identity Manual), in the header band |
| `favicon.svg` | Favicon: the GS4S butterfly icon on a Jacarta disc, one version for both themes |
| `favicon.ico`, `apple-touch-icon.png` | The same icon as a 16/32/48 px `.ico` and a 180 px touch icon (on a Jacarta square) |
| `share.png` | Preview image for links shared on social media and in chat apps (1200 × 630) |

No build step: edit the files and push. To view locally, run `python3 -m http.server` in this folder and open <http://localhost:8000>.

## Licences

Code: MIT (see `LICENSE`). The page styling is based on [PaperMod](https://github.com/adityatelange/hugo-PaperMod) and [hugo-website](https://github.com/pmichaillat/hugo-website) (both MIT), and the Lora and JetBrains Mono fonts are under the SIL Open Font License; their licence texts are in `licenses/`. The GS4S logo and butterfly icon belong to the GS4S project and are not covered by the MIT licence.
