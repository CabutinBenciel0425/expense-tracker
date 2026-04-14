import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppProvider } from "./context/AppProvider.tsx";
import { UIProvider } from "./context/UIProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <UIProvider>
      <App />
    </UIProvider>
  </AppProvider>,
);
