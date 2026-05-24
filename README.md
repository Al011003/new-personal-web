# Alfarhad Maulana – Personal Portfolio

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Home page (assembles sections)
│   └── projects/[id]/      # Dynamic project detail pages
├── components/
│   ├── Navbar.tsx          # Glass blur navbar
│   ├── Hero.tsx            # Hero with photo + role cards
│   ├── About.tsx           # About + skill bars
│   ├── Projects.tsx        # Project grid with hover overlay
│   ├── Skills.tsx          # Animated orbit + skill tags + marquee
│   ├── Education.tsx       # Editorial education card
│   ├── Experience.tsx      # Experience cards with image panel
│   ├── Contact.tsx         # Contact links
│   └── Footer.tsx          # Footer
├── lib/
│   └── data.ts             # ← ALL your personal data lives here
├── styles/
│   └── globals.css         # Global CSS + animations
└── public/
    └── images/             # Put your photo here as photo.jpg
```

## 📸 Adding Your Photo

1. Put your photo at `public/images/photo.jpg`
2. In `components/Hero.tsx`, find the comment `{/* Replace with: <Image ...`
3. Replace the emoji `div` with:

```tsx
<Image
  src="/images/photo.jpg"
  alt="Alfarhad Maulana"
  fill
  className="object-cover object-top"
  priority
/>
```

## 📝 Updating Your Data

All personal data is in `lib/data.ts`. Edit:
- `personal` – name, bio, socials, tags
- `skills` – proficiencies, tech categories, orbit items, marquee
- `projects` – project cards + detail pages
- `education` – university, GPA, achievements
- `experience` – work history cards

## 🌐 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect at https://vercel.com

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond + DM Sans (Google Fonts)
- **Animations**: CSS keyframes + Intersection Observer
- **Icons**: Lucide React
