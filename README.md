# GS4S Dartboard Tool

The interactive policy dartboard tool developed for the Horizon Europe project GS4S – Global Strategy for Skills, Migration and Development ([gs4s.eu](https://gs4s.eu/)). Deliverable D4.3 in task T4.3, *On Target: Sector Pathways to Close Skill Shortages*.

The tool shows consistent ways in which multinational enterprises in Germany, Estonia, Switzerland and the Netherlands successfully address skill shortages, in four sectors: IT, Manufacturing, Health and Construction. It is based on GS4S Policy brief no. 4.

Authors: Daniël Speldekamp and Ayse Saka-Helmhout.

## Live version

Deployed to GitHub Pages by GitHub Actions (`.github/workflows/pages.yml`) on every push to `main`: <https://speldekamp.github.io/gs4s-dartboard/>

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (overview text, footer) |
| `js/dartboard.js` | The tool: data (`DATA`), drawing and behaviour. Plain JavaScript, no libraries; it builds an SVG |
| `css/dartboard.css` | Styling and layout of the tool |
| `css/stylesheet.css` | Page styling (dark theme): the rules this page uses from the PaperMod / hugo-website styles and the site's own overrides |
| `css/theme.css` | Light theme and the Dark/Light toggle beside the title |
| `js/theme.js` | Toggle behaviour: follows the system setting until the visitor picks a theme, then remembers it (`localStorage` key `pref-theme`). The figure's colours follow the page theme |
| `fonts/newsreader/` | Self-hosted Newsreader font |
| `favicon-dark.svg`, `favicon-light.svg` | Favicon (two rings and a dot), switched with the page theme by `js/theme.js` |
| `favicon.svg` | The same favicon following the browser's dark/light setting (used without JavaScript) |
| `favicon.ico`, `apple-touch-icon.png` | Fallbacks for browsers without SVG favicons (the `.ico` is grey, so it shows on light and dark tabs) |

No build step: edit the files and push. To view locally, run `python3 -m http.server` in this folder and open <http://localhost:8000>.

## Licences

Code: MIT (see `LICENSE`). The page styling is based on [PaperMod](https://github.com/adityatelange/hugo-PaperMod) and [hugo-website](https://github.com/pmichaillat/hugo-website) (both MIT), and the Newsreader font is under the SIL Open Font License; their licence texts are in `licenses/`.
