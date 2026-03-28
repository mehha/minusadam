# Repository Guidelines

## Project Structure & Module Organization
This repository is a Roots Sage WordPress theme with Acorn conventions. Application PHP lives in `app/` (`Providers/`, `View/Composers/`, helpers, setup). Feature-specific theme code also exists under `mehh/` for bookings, SEO, pages, and contact forms. Source assets live in `resources/`: Blade templates in `resources/views/`, JavaScript in `resources/scripts/`, SCSS in `resources/styles/`, and translation files in `resources/lang/`. Compiled output is written to `public/`; treat `public/scripts` and `public/styles` as build artifacts unless a task explicitly requires editing generated files.

## Build, Test, and Development Commands
- `npm start`: watch assets with Laravel Mix during local theme development.
- `npm run hot`: start hot-reload asset serving.
- `npm run build`: create a development build in `public/`.
- `npm run build:production`: create optimized production assets.
- `npm test`: runs the repo’s lint suite.
- `npm run lint:js`: lint `resources/scripts` with ESLint.
- `npm run lint:css`: lint SCSS/CSS under `resources/` with Stylelint.
- `composer lint`: run PHP_CodeSniffer with PSR-12 against `app/` and `config/`.
- `npm run clear`: clear Acorn caches after config/view changes.

## Coding Style & Naming Conventions
Follow `.editorconfig`: 2 spaces by default, 4 spaces for `*.php`, 2 spaces for Blade templates. Prettier enforces semicolons, single quotes, and trailing commas where valid. Keep JS modules in lowercase file names such as `cookie_banner.js`; keep PHP classes PSR-4 compatible under `App\\`. Prefer editing source files in `resources/` and `app/`, not compiled files in `public/`.

## Testing Guidelines
There is no standalone automated test suite in this theme today. Validation is lint-based: run `npm test` and `composer lint` before opening a PR. If you add reusable behavior, place related logic in `app/` or `resources/scripts/components/` and verify it through the relevant lint command plus a local WordPress smoke test.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects, often lowercase, with optional prefixes like `fix:` or `chore:`. Keep commits focused, for example: `fix: adjust header image styling`. PRs should include a concise description, note any WordPress/admin steps needed to verify, link the related issue when available, and attach screenshots for frontend changes.

## Security & Configuration Tips
Do not commit secrets or environment-specific WordPress settings. Regenerate translation assets with `npm run translate` or the WooCommerce `wp i18n` workflow noted in `README.md` when language files change.
