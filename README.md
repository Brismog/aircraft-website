# Aircraft ✈️

A responsive multi-page website about aircraft: how modern engines work, the technology behind flight, and where it leads, from airplanes to space exploration. Built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Live site:** https://brismog.github.io/aircraft-website/ <!-- enable GitHub Pages first -->

<!-- Add a screenshot: save it as docs/screenshot.png, then uncomment the next line -->
<!-- ![Home page](docs/screenshot.png) -->

> Created as a web design project at university.

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with a hero section and aircraft-type cards |
| `tech.html` | The technology behind modern aircraft |
| `airplane.html` | A guide to airplane engines |
| `space.html` | Space exploration with NASA |
| `why-space.html` | Why we venture into space |
| `contact.html` | Contact form (demo) |

## What's inside

- **Responsive layout:** CSS Grid and Flexbox with fluid type (`clamp()`), a mobile slide-down menu, and a single-column hero on small screens.
- **Accessible:** semantic landmarks, skip link, keyboard-operable menu with `aria-expanded`, visible focus styles, alt text on every image, and `prefers-reduced-motion` support.
- **Fast:** no frameworks or jQuery, images compressed from about 4.9 MB to about 0.6 MB in total, and SVG illustrations.
- **Maintainable:** design tokens as CSS variables, one shared stylesheet, and a small JavaScript file for the menu and form.
- **Relative paths:** works on GitHub Pages or any static host from any sub-folder.

## Project structure

```
aircraft-website/
├── index.html, tech.html, airplane.html, space.html, why-space.html, contact.html
├── css/
│   ├── stylesheet.css      # layout, components, responsive rules
│   └── contact-form.css    # form styles
├── js/app.js               # mobile menu + demo form handler
├── images/                 # SVG illustrations and compressed photos
├── CREDITS.md
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

Repository **Settings → Pages → Deploy from a branch → `main` / root**. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Contact form

The site is static, so the form is a demo: it validates input and shows a confirmation, but nothing is sent. To make it work, set the form's `action` to a form service such as [Formspree](https://formspree.io), then delete the demo handler in `js/app.js`.

## Credits

See [CREDITS.md](CREDITS.md).
