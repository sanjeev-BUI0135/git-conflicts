# git-conflicts# BrightUI Vault 2.0 — Update & Security Report
Scope: static review of every file in the zip + the project's own test suite (45 checks, all pass; 3 new ones added for this update) + browser test of the new dialogs.

## 1. What changed (only 2 files)
| File | Change |
|---|---|
| `web/app.js` | Removed all **7** native `confirm()` boxes. Added `confirmBox()`, `alertBox()` and a redesigned `toast()`. Escape key now resolves pending dialogs. |
| `web/style.css` | Styles for the new dialogs and notifications (light/dark theme, mobile, reduced-motion). |
Server, extension, crypto, Docker and `.env` files are **unchanged**. No `alert()` or `prompt()` existed in the code.

Dialogs: Delete credential · Delete collection · Remove collection access · Remove org member · Delete group · Delete organization · Delete SMTP settings. Cancel is focused by default; Esc / backdrop click = Cancel. Failed destructive actions show an error alert; Excel-import and blocked-pop-up warnings are alert boxes. Success/error/warning notifications are stacked, dismissible, colour-coded cards.

## 2. How credentials are stored in the database (SQLite `vault2.db`, in `DATA_DIR`)
| Data | Stored as |
|---|---|
| Master password | **Never stored or sent.** Browser derives keys (PBKDF2-SHA256 → HKDF). Server stores only `scrypt(authHash, salt)`. |
| Vault items (logins, cards, notes, keys, files) | **Ciphertext only** (AES-256-GCM, encrypted in the browser). `items.data`. |
| Collection keys | AES key per collection, wrapped with each member's RSA-2048 public key (`collection_members.wrapped_key`). |
| User keys | `protected_key` (AES-GCM under master-derived key) + RSA private key encrypted. |
| SMTP password | AES-256-GCM, key derived from the server secret (`settings` table). |
| Sign-in / invite codes | Stored as hashes with expiry and attempt counter. |
| Session | Signed HMAC token held in browser memory (extension: `chrome.storage.session`) — not on disk. |
Deleting an item is a soft delete (`deleted=1`); ciphertext remains until the DB is purged.

## 3. Third-party connections, AI, malware
- **No AI/LLM, analytics, telemetry, ads, CDN, or remote scripts.** CSP: `default-src 'self'; connect-src 'self'`.
- Only outbound network call: **SMTP** (nodemailer) to the mail server the owner configures.
- Extension talks only to the vault server URL the user types; no other hosts.
- Single dependency: `nodemailer 6.10.1` (MIT-0, official npm registry, integrity hash pinned).
- No `eval`, `new Function`, `child_process`, obfuscated or encoded payloads, hidden endpoints, or backdoor routes. Image files are valid PNG/JPEG. `.env` contains **no real secrets** (`JWT_SECRET` empty → auto-generated).
- Verdict: **no malware indicators found.** (Static review, not an antivirus scan; run ClamAV/Defender on the zip too.)

## 4. Is updating credentials safe? — Yes
Edit/update encrypts in the browser, then `PUT /api/items/:id` with permission check (`edit`+). Tests confirm: view-only users cannot edit/delete/create; revoked users lose access instantly; server sees only ciphertext; master-password change keeps the vault readable.

## 5. Security fixes applied (second update — no feature changed)
| # | Issue | Fix | Verified by |
|---|---|---|---|
| 1 | Login throttle could be bypassed by faking `X-Forwarded-For` | Header trusted only from a private/loopback proxy (Caddy). New optional `TRUST_PROXY=auto\|true\|false`. | 7 unit checks on the real code |
| 2 | Secret stored in `.secret` beside the DB | Warning at startup, file forced to mode 600, `run-local.sh` now auto-generates `JWT_SECRET` like `start.sh`. Moving to `JWT_SECRET` keeps saved SMTP password readable. | 2 unit checks + startup log |
| 3 | Sessions survived a master-password change | Session token bound to the password salt; old tokens rejected. (Web app already re-prompts sign-in, so users see no difference.) | new test |
| 4 | CORS `*` | Only `APP_URL` and browser-extension origins allowed. Same-origin web app and extension unaffected. | 2 new tests |
| 5 | Extension inserted server error text via `innerHTML` | Text is HTML-escaped. | code review |
Files changed in this update: `server/server.js`, `extension/content.js`, `test.js`, `run-local.sh`, `.env`, `.env.example`, `README.md`.

## 6. Still open / accepted
| Sev | Item | Why |
|---|---|---|
| Low | CSP keeps `style-src 'unsafe-inline'` | The UI uses ~100 inline `style=` attributes; removing it would break the layout. Scripts are already locked to `'self'`. |
| Info | Last-write-wins on concurrent edits; "View (passwords hidden)" is UI-enforced (as in README). | Design limits. |
| Info | Soft-deleted items keep ciphertext in the DB. | Purge DB if required. |
| — | No independent audit / penetration test; static review only. | Required before storing production secrets (README §10). |
