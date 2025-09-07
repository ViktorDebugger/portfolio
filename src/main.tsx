import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/index.css";

import App from "./App.tsx";
import { ThemeProvider } from "./context/theme-context.tsx";
import { ScrollProvider } from "./context/scroll-context";
import { MobileProvider } from "./context/mobile-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MobileProvider>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </MobileProvider>
    </ThemeProvider>
  </StrictMode>,
);
