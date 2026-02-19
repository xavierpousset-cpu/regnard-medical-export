import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Questionnaire from "./pages/Questionnaire";
import OPrepDivan from "./pages/OPrepDivan";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/questionnaire"} component={Questionnaire} />
      <Route path={"/oprep-divan"} component={OPrepDivan} />
      <Route path={"/mentions-legales"} component={LegalNotice} />
      <Route path={"/politique-confidentialite"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
