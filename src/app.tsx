import { LocationProvider } from "preact-iso";
import { ThemeProvider } from "./providers/ThemeProvider";
import { I18nProvider } from "./providers/I18nProvider";
import { Routes } from "./routes";

export function App() {
  return (
    <LocationProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <I18nProvider>
          <Routes />
        </I18nProvider>
      </ThemeProvider>
    </LocationProvider>
  );
}
