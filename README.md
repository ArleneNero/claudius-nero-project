# Claudius Nero Agents — Landing Page

A polished, lightweight, accessible, single-page website for **Claudius Nero Agents**, an early-stage AI automation initiative. Built using **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

- **Live Domain Target:** `claudius-nero-project.web.id`
- **Hosting Platform:** GitHub Pages (via GitHub Actions)

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the page.

### 4. Build for Production
```bash
npm run build
```
The static build artifacts will be generated in the `dist/` directory.

### 5. Code Quality & Lint Checks
```bash
npm run lint
```

---

## 📧 Contact Email Configuration

By default, the contact email is set to an empty string (`""`) in `src/config/site.ts` to maintain absolute honesty regarding early-stage business readiness.

To enable the interactive "Email Us" mailto CTA:
1. Open `src/config/site.ts`.
2. Update `CONTACT_EMAIL` with your domain mailbox address:
```typescript
export const SITE_CONFIG = {
  name: "Claudius Nero Agents",
  domain: "claudius-nero-project.web.id",
  tagline: "Practical AI Automation for Modern Teams",
  CONTACT_EMAIL: "contact@claudius-nero-project.web.id", // <--- Update here
};
```
3. Rebuild or commit your changes. The contact section will automatically render the clickable email button and direct mailto link.

---

## 🌐 GitHub Pages & Custom Domain Setup

### 1. Included Files
- `public/CNAME`: Contains `claudius-nero-project.web.id` for root custom domain routing.
- `.github/workflows/deploy.yml`: Automated GitHub Actions deployment pipeline triggering on push to `main`.

### 2. DNS Configuration (At Your Domain Provider)
Add the following DNS records with your DNS provider (e.g., Cloudflare, Niagahoster, Namecheap):

| Record Type | Host / Name | Value / Target |
| :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `<your-github-username>.github.io` |

### 3. GitHub Pages Repository Settings
1. Go to your GitHub Repository -> **Settings** -> **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Once DNS propagates, verify that **Custom domain** displays `claudius-nero-project.web.id`.
4. Check **Enforce HTTPS** (can take up to 24 hours after DNS verification).

---

## 📋 Project Architecture

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment to Pages
├── public/
│   ├── CNAME                 # Custom domain configuration file
│   ├── favicon.svg           # Site favicon
│   ├── robots.txt            # Search engine crawler instructions
│   └── sitemap.xml           # XML Sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # 1. Header with mobile navigation
│   │   ├── Hero.tsx          # 2. Hero with workflow architecture panel
│   │   ├── ProblemSection.tsx# 3. 3 operational bottleneck cards
│   │   ├── SolutionsSection.tsx # 4. 4 core capabilities cards
│   │   ├── UseCasesSection.tsx  # 5. 3 illustrative application scenarios
│   │   ├── ProcessSection.tsx   # 6. 4-step engagement methodology
│   │   ├── AboutSection.tsx     # 7. Honest early-stage description
│   │   ├── ContactSection.tsx   # 8. Contact area (with pending/active states)
│   │   └── Footer.tsx        # 9. Dynamic copyright & plain domain footer
│   ├── config/
│   │   └── site.ts           # Site configuration & email definition
│   ├── App.tsx               # Main assembly (9 sections in exact order)
│   ├── main.tsx              # React entrypoint
│   └── index.css             # Tailwind v4 CSS & visual styling
├── index.html                # SEO meta tags, Open Graph & Inter Google Font
├── vite.config.ts            # Vite configuration with @tailwindcss/vite plugin
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

---

## 📄 License & Transparency Notice
This website represents an early-stage AI automation initiative. Service descriptions and workflow diagrams represent proposed technical capabilities and concepts rather than completed customer deliveries.
