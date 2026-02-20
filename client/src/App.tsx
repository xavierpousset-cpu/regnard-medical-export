import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QuestionnaireEHPAD from "./pages/QuestionnaireEHPAD";
import OPrepDivan from "./pages/OPrepDivan";
import OPrepAltesse from "./pages/OPrepAltesse";
import AdminDashboard from "./pages/AdminDashboard";
import Forum from "./pages/Forum";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/questionnaire-ehpad"} component={QuestionnaireEHPAD} />
      <Route path={"/oprep-divan"} component={OPrepDivan} />
      <Route path={"/oprep-altesse"} component={OPrepAltesse} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/forum"} component={Forum} />
      <Route path={"/services"} component={Services} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/about"} component={About} />
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
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
