# La Jolla Noticeboard

## Purpose
A one-stop shop for parents and students at the La Jolla Resource Center. Everything they need to know in one place: what's happening, how to sign up, key dates, programs, and resources. Replaces the old Microsoft Sway noticeboard.

Shareable via link, viewable on any device, updated monthly by editing `site-data.json`.

## Architecture
- Pure HTML/CSS/JS. No frameworks, no build tools.
- `site-data.json` holds ALL content. Monthly updates = edit this one file.
- `index.html`, `styles.css`, `script.js` are the site.
- EN/ES language toggle stored in localStorage.
- Hosted on GitHub Pages.

## Monthly Update Workflow
1. Edit `site-data.json` with new dates, events, motivation quote, etc.
2. Add new calendar PNG + PDF to `monthly-calendars/`
3. Push to GitHub. Done.

## Design Decisions
- Mobile-first. Most parents view on phones.
- School brand colors: Blue #0071CE, Dark Blue #004A8C, Gold #F3CF45
- Alternating white/light-blue section backgrounds for visual separation (no dividers needed)
- Hero uses `images/Altus 30 background 5.png` anchored right to hide the logo on mobile
- Header uses "Altus Schools header LOGO.png" (works for all campuses, future-proof for Charter School of SD rebrand)

## Branding Transition
School is changing from "Altus Schools Audeo" to "Charter School of San Diego" in July 2026. When that happens:
- Update `school.name` in the JSON
- Swap logos in `school-logos/`
- The header logo already says "Altus Schools" (no Audeo), so it may only need one swap

## Future Plans
- **Subpages for educational opportunities**: As programs get more details (schedules, signup forms, calendars), they'll outgrow the accordion format. Plan is to link out to dedicated subpages, similar to how AVID links out now. These pages can be hidden from the main nav but clickable from the cards.
- **Field trip details**: When new trips are planned, switch from the recap card back to individual trip cards with permission slips, maps, reminders.
- **Calendar images**: Always include a PNG version alongside the PDF so the calendar is visible inline without downloading.

## Content Style
- No em dashes. Use colons, periods, commas, or parentheses instead.
- Write naturally. Avoid overly formal or AI-sounding language.
- Keep text concise. Parents skim on phones.
- Dates use colons for details (e.g. "End of LP12: Credits Due!")
- "School Closed" events use the `closed` type (red color coding)

## Color-Coded Event Types
- `deadline` (orange): Credits due, grad deadlines
- `testing` (amber): CAASPP, science tests
- `activity` (green): Fun stuff, classes, things to join
- `closed` (red): School closed, no regular hours
- `milestone` (blue): Start of learning period, informational
