import { Component, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const produitsSubmenu = [
  { label: "Le Divan O-PREP", href: "/oprep-divan" },
  { label: "Le Trône O-PREP", href: "/oprep-altesse" },
];

const servicesSubmenu = [
  { label: "Réparation", href: "/reparation" },
  { label: "Lits médicalisés", href: "/services" },
];

/**
 * HeaderErrorBoundary - ErrorBoundary spécifique pour le Header
 * Capture les erreurs de contexte tRPC et affiche un fallback minimaliste
 */
export class HeaderErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.warn("HeaderErrorBoundary caught error:", error.message);
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("HeaderErrorBoundary error details:", error);
  }

  render() {
    if (this.state.hasError) {
      // Afficher un header minimaliste sans contexte tRPC
      return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <a
                  href="/"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-150"
                >
                  <img
                    src="/logo-regnard.png"
                    alt="Regnard Medical Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-display font-bold text-lg text-foreground tracking-tight">
                    REGNARD MEDICAL
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {/* Nos solutions dropdown */}
                <div className="relative group">
                  <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1">
                    Nos solutions
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {/* Produits médicaux */}
                    <div className="relative group/nested">
                      <button className="w-full text-left block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg flex items-center justify-between">
                        Produits médicaux
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="absolute left-full top-0 ml-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                        {produitsSubmenu.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* Services */}
                    <div className="relative group/nested">
                      <button className="w-full text-left block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 last:rounded-b-lg flex items-center justify-between">
                        Services
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="absolute left-full top-0 ml-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                        {servicesSubmenu.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/forum" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Forum
                </a>
                <a href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  FAQ
                </a>
                <a href="/bibliographie" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Bibliographie
                </a>
                <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  À propos
                </a>
                <a href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Contact
                </a>
                <a href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Connexion
                </a>
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      );
    }

    return this.props.children;
  }
}
