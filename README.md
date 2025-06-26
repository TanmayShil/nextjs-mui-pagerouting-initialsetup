# 🚀 Next.js + TypeScript + Material UI Starter

This is a basic starter project using **Next.js**, **TypeScript**, and **Material UI (MUI)** with custom theme setup and basic page routing.

---

## 📁 Project Structure

<pre><code>
  
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

</code></pre>

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

1. mui-theme/_muiPalette.ts
  ```bash
 import { PaletteMode, PaletteOptions } from "@mui/material";

const getMuiPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === "light"
    ? {
        primary: { main: "#1976d2" },
        secondary: { main: "#9c27b0" },
        background: { default: "#f5f5f5" },
      }
    : {
        primary: { main: "#90caf9" },
        secondary: { main: "#ce93d8" },
        background: { default: "#121212" },
      }),
});

export default getMuiPalette;
```

 2. mui-theme/_muiTheme.ts
```bash

import { createTheme } from "@mui/material/styles";
import getMuiPalette from "./_muiPalette";

const theme = createTheme({
  palette: getMuiPalette("light"), // Change to "dark" if needed
});

export default theme;

```
 3. mui-theme/MuiThemeProvider.tsx
```bash

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./_muiTheme";
import { ReactNode } from "react";

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

```


## _app.tsx Setup

```bash

// pages/_app.tsx
import type { AppProps } from "next/app";
import MuiThemeProvider from "@/mui-theme/MuiThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

```

## 🧭 Page Routing Overview

---
<pre><code>
## Static Routes

File	                        Route
pages/index.tsx	                /
pages/about.tsx	                /about

## Nested + Dynamic Routes

File	                         Route	                Description
pages/product/index.tsx	        /product	             Product list page
pages/product/[id].tsx	        /product/123	          Product details by ID

</code></pre>

---

## Example: pages/product/[id].tsx

```bash
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function ProductDetail() {
  const { query } = useRouter();
  const { id } = query;

  return <Typography variant="h4">Product ID: {id}</Typography>;
}
```

