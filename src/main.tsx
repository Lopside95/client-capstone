import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Toaster from "./components/Toaster/Toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
