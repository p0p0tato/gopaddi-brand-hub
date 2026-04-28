# Logo download plan

Right now the app pages render logo variants as preview tiles only, and the Downloads page has placeholder buttons. Since every logo (main icon + variants) is already imported into the app as SVG modules via Vite, we can give visitors real downloads today — no CDN, backend, or new assets required. The files Vite bundles already have stable hashed URLs, so a simple `<a download>` works.

## What visitors will be able to do

On each app page (e.g. `/apps/pod`):
- **Download the main logo** (the `Icon` component's SVG) from the "Icon at every size" section via a "Download SVG" button.
- **Download each logo variant** (Plain, Isolated, Light, Glass, Grayscale black/white) — each variant tile gets a hover "Download SVG" button.
- **Download all variants as a ZIP** — one "Download all" button at the top of the "Logo variants" section, bundled client-side.

On the Downloads page (`/downloads`):
- The existing per-app "Download" buttons become real — each triggers a client-side ZIP of that app's main logo + all variants.
- The parent "Brand kit (.zip)" button bundles every app's logos into one ZIP.

PNG, ICO, and ICNS exports stay out of scope for this pass (they require rasterization / platform tooling). We'll update the helper text to say "SVG pack" so the UI is honest about what's shipping.

## How it works (technical)

1. **Expose the main logo SVG as a file asset.** Inline React icon components (`PodIcon`, `BooksIcon`, etc. in `AppIcons.tsx`) aren't downloadable as files. Add a `logoSrc: string` field to `AppMeta` pointing to the plain/flat SVG (`podFlat`, `booksFlat`, `pagesFlat`, `slidesFlat`, `workforceFlat`, `booksFlat`, etc.). For apps that already use an `<img>`-based icon (Sheets, Call Connect, Workspace, the four OS solutions), reuse their existing imported SVG. For Pod/Books/Workforce/Docs/Slides, reuse the `*-flat.svg` they already have.

2. **Single-file download helper.** New `src/lib/download.ts` exporting:
   - `downloadFile(url, filename)` — creates an `<a href download>` and clicks it. Works for same-origin Vite-bundled SVG URLs.
   - `downloadZip(files: { name: string; url: string }[], zipName)` — fetches each URL as a blob and builds a ZIP using `jszip` (add dependency).

3. **Per-variant download button.** In `AppPage.tsx`, each variant tile in the "Logo variants" grid gets a small "Download SVG" button in its footer row. Filename pattern: `{app-key}-{variant-slug}.svg` (e.g. `pod-glass.svg`).

4. **"Download all variants" button.** Add a button next to the "Logo variants" section title that ZIPs the main logo + every variant for that app. ZIP filename: `{app-key}-logo-pack.svg.zip`.

5. **Main logo download.** Add a "Download SVG" button to the "Icon at every size" card, pointing to `app.logoSrc`.

6. **Downloads page wiring.** Replace the placeholder click handlers with the same ZIP helper. The "Brand kit" button maps over `APPS` and collects every app's logo + variants into one master ZIP.

7. **Copy tweaks.** Update the Downloads page meta text from "SVG · PNG · ICO · ICNS" to "SVG pack" and remove the "PLACEHOLDER FILES" note for the per-app section. Leave parent brand-kit font/tokens cards as placeholders (they genuinely aren't ready).

## Files touched

- `src/data/apps.ts` — add `logoSrc` to every app (reuse existing imports).
- `src/lib/download.ts` — new helper.
- `src/components/content/AppPage.tsx` — add download buttons on main logo card and each variant tile, plus "Download all" on variants section.
- `src/pages/Downloads.tsx` — wire per-app and brand-kit buttons; adjust copy.
- `package.json` — add `jszip`.

## Out of scope (callout for later)

- PNG / ICO / ICNS generation — needs a build-time rasterizer or a serverless endpoint.
- Real font file hosting — licensing + CDN decision pending.
- Color token JSON export — separate Style Dictionary task.