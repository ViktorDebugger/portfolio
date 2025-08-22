import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/theme-context.tsx";
import { ScrollProvider } from "./context/scroll-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </StrictMode>,
);
