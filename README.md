# BillBuddy Bot Landing Page

A modern, professional landing page for BillBuddy Bot - a Telegram bot that helps users share and split bills easily in group chats.

## Features

- 🎨 Modern, minimalistic design with blue and white color palette
- 📱 Fully responsive for desktop and mobile devices
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Tailwind CSS for styling
- ✨ Professional animations and hover effects

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Features.tsx     # Features section
│   ├── Testimonials.tsx # Testimonials section
│   ├── CTA.tsx          # Call to action section
│   └── Footer.tsx       # Footer section
└── ...
```

## Build for Production

```bash
pnpm build
pnpm start
```

## Customization

- Update the Telegram bot link in the CTA buttons to your actual bot URL
- Modify colors in `tailwind.config.js`
- Edit content in individual component files
- Add your own images or illustrations as needed

