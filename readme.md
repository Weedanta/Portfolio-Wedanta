<div align="center">

# 👋 Hi, I'm Bagus Wedanta

### Front-end Web & Mobile Developer from Indonesia

[![Website](https://img.shields.io/badge/website-baguswedanta.com-black?style=for-the-badge&logo=vercel)](https://baguswedanta.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-baguswedanta-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/baguswedanta/)
[![GitHub](https://img.shields.io/badge/GitHub-Weedanta-181717?style=for-the-badge&logo=github)](https://github.com/Weedanta)

This is the source code for my personal portfolio — built to showcase my projects, professional experience, and skills as an Information Technology student and full-stack developer.

</div>

---

## ✨ Overview

A fast, responsive, and animated personal portfolio site built with **Next.js 14** (App Router) and **TypeScript**. It features smooth scroll-based navigation, dark/light theme support, and a playful mouse-glow canvas effect.

- 🏠 **Home** — introduction, resume download, and social links
- 👤 **About** — background, skills, and tech stack
- 💼 **Projects** — a growing collection of real-world web & mobile projects
- 🧭 **Experience** — a vertical timeline of professional and organizational roles
- ✉️ **Contact** — a working contact form powered by EmailJS

## 🛠️ Tech Stack

| Category | Stack |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/), [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Icons | [Lucide](https://lucide.dev/) + [Simple Icons](https://simpleicons.org/) via `react-icons` |
| Email | [EmailJS](https://www.emailjs.com/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| SEO | [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) |
| Tooling | ESLint, Prettier, Husky, lint-staged, Jest |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Weedanta/Portfolio-Wedanta.git
cd Portfolio-Wedanta
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Required — used to power the contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Optional
SITE_URL=
GOOGLE_SITE_VERIFICATION_ID=
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` / `lint:fix` | Lint the codebase |
| `npm run format:check` / `format:write` | Check / apply Prettier formatting |
| `npm run typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
src/
├── app/            # Next.js App Router entry (layout, page, metadata)
├── components/     # UI sections and reusable components
├── hooks/          # Custom React hooks
├── lib/            # Site data, config, types, and utilities
└── styles/         # Global styles
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/) at **[baguswedanta.com](https://baguswedanta.com)**.

## 📬 Contact

Have a project in mind or just want to connect?

- 📧 [baguswedanta17@gmail.com](mailto:baguswedanta17@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/baguswedanta/)
- 🐙 [GitHub](https://github.com/Weedanta)

---

<div align="center">

Made with ❤️ and lots of ☕ by **Bagus Wedanta**

</div>
