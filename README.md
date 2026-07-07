# Personal Portfolio Website — CloudExify Web Dev Month 1, Project 1

**Name:** Mehdi Ali
**Registration Number:** _[add your CloudExify registration number here]_
**Build Track Chosen:** Terminal Coder
**Signature Feature(s) Implemented:**
- Boot-sequence + typewriter hero intro (typed role lines, looping)
- Scroll-triggered ASCII-style skill bars (animate once, on scroll into view)
- Live project tech-tag filter (bonus, from Project 2's mechanic list — added for extra polish)

**GitHub Repository:** `CloudExify-Project-1` (must be **public**)
**Live Vercel Link:** _[add after deployment — see steps below]_
**Submission Deadline:** 15 July

---

## Tech Stack
Plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

## Project Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── resume.pdf   ← add your actual resume PDF here
└── README.md
```

## Before You Deploy
1. Add your real resume as `assets/resume.pdf` (the download button in the nav and hero already points to this path).
2. Update the registration number above.
3. Optionally swap in a real GitHub link per-project if you split repos later (currently all point to your GitHub profile).

## Deploying
1. Create a **public** GitHub repo named exactly `CloudExify-Project-1`.
2. Push this folder's contents to it.
3. Add at least 2 screenshots (desktop + mobile) to the repo.
4. Go to vercel.com → sign in with GitHub → **Add New Project** → import the repo.
5. Framework preset: **Other** (static site, no build command).
6. Click **Deploy**. You'll get a live link like `mehdi-ali-portfolio.vercel.app`.
7. Test the live link (not localhost) before submitting.
8. Fill in this README (already done) as your report — it stays in the repo as required.

## Testing Checklist
- [ ] Live Vercel link loads correctly (not localhost)
- [ ] Hamburger menu opens/closes correctly on mobile width
- [ ] Boot sequence + typewriter hero plays on load
- [ ] Skill bars animate once when scrolled into view (not repeatedly)
- [ ] Project filter buttons show/hide matching cards correctly
- [ ] Contact form shows validation errors on empty/invalid input, success message on valid submit
- [ ] All nav/footer/social links work, no 404s
- [ ] Layout tested on mobile + desktop widths
- [ ] No console errors on load

## Submission
Wait for the official submission form in the group (posted after 15 July) and paste your GitHub repo link + details there. Do not remove or make the repo private after submitting.
