# 🚀 Next.js + TypeScript + Material UI Starter

This is a basic starter project using **Next.js**, **TypeScript**, and **Material UI (MUI)** with custom theme setup and basic page routing.

---

## 📁 Project Structure

my-nextjs-app/
├── pages/ # Next.js pages for routing
│ ├── index.tsx # Home page
│ ├── about.tsx # Example route page
│ └── product/ # Product-related routes
│ ├── index.tsx # Product list page
│ └── [id].tsx # Dynamic product details page
├── mui-theme/ # Custom MUI theme setup
│ ├── _muiPalette.ts # Theme color logic
│ ├── _muiTheme.ts # Complete theme config
│ └── MuiThemeProvider.tsx # Theme provider component
├── public/ # Static assets (favicon, images, etc.)
├── styles/ # Global styles (optional)
├── tsconfig.json # TypeScript config
├── next.config.js # Next.js config
└── README.md # Project documentation



---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- [Material UI](https://mui.com/) – UI Component Library
- [Emotion](https://emotion.sh/docs/introduction) – Styling for MUI

---

## 🛠️ Installation

```bash
# 1. Create a Next.js app with TypeScript
npx create-next-app@latest my-nextjs-app --typescript
cd my-nextjs-app

# 2. Install Material UI and Emotion
npm install @mui/material @emotion/react @emotion/styled

```

## 🎨 Custom Material UI Theme Setup

1. mui-theme/muiPalette.ts
