# SubDoc Tracker — landing page

Static site for GitHub Pages. No build step needed to publish; `assets/styles.css` is already built.

## Before you send the first email — replace placeholders

1. **`index.html` → `CONFIG`** (bottom of the file, one place):
   - `GA4_ID` → your GA4 Measurement ID (`G-…`). While it stays `G-XXXXXXXXXX`, GA and the cookie banner are switched off.
   - `CAL_URL` → your Cal.com / Calendly link (used by every "Book a 15-min call" button).
   - `LINKEDIN_URL` → your LinkedIn profile.
   - `CONTACT_EMAIL` → contact address (also used in the error message).
   - `FOUNDER_PHOTO` → e.g. `assets/founder.jpg` after you add a square photo. Empty = "AM" initials.
   - `FORM_ENDPOINT` is already set to Formspree.
2. **`index.html` `<head>`** → replace every `YOUR-DOMAIN.com` (canonical + Open Graph tags).
3. **`privacy.html`** → check the contact email and date.

## Links to send prospects

- UK: `https://YOUR-DOMAIN.com/?r=uk&ref=acme-construction`
- UAE: `https://YOUR-DOMAIN.com/?r=uae&ref=emirates-builders`

`r` switches the copy (documents, mockup, form checkboxes, pre-selected country).
`ref` is stored with the form submission and sent to GA4 as `prospect_visit` (needs cookie consent).
Use one `ref` per company so you know who opened the page.

## Publish on GitHub Pages

1. Push this folder to a repo (e.g. `subdoc-tracker-site`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Custom domain: Settings → Pages → Custom domain, then add the DNS records GitHub shows (a `CNAME` file is created for you). Tick "Enforce HTTPS".

## Formspree

- In the Formspree dashboard, add your domain under allowed domains and turn on email notifications.
- `_gotcha` is a honeypot field for spam; `_subject` includes the company and `ref`.

## Changing styles

Only if you add new Tailwind classes:

```
npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify
```
