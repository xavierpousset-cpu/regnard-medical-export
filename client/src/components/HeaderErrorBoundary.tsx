import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

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
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/BeDJyMcSBxFSTGCS.png"
                    alt="Regnard Medical Logo"
                    className="h-10 w-10"
                  />
                  <span className="font-display font-bold text-lg text-foreground tracking-tight">
                    REGNARD MEDICAL
                  </span>
                </a>
              </div>

              {/* Desktop Navigation - Minimal */}
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Nos services
                </a>
                <a href="/forum" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Forum
                </a>
                <a href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  FAQ
                </a>
                <a href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                  Contact
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
