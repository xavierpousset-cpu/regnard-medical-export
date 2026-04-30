/**
 * Header - Regnard Medical
 * Design: Industrial Minimalism
 * - Navigation sobre et fonctionnelle
 * - Logo texte
 * - Menu déroulant pour les produits
 */

import { Suspense } from "react";
import { HeaderContent } from "./HeaderContent";
import { HeaderErrorBoundary } from "./HeaderErrorBoundary";

// Fallback header sans contexte tRPC
function HeaderFallback() {
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
                className="h-10 w-10"
              />
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                REGNARD MEDICAL
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Complete */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150">
                Nos solutions
              </button>
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

export default function Header() {
  return (
    <HeaderErrorBoundary>
      <Suspense fallback={<HeaderFallback />}>
        <HeaderContent />
      </Suspense>
    </HeaderErrorBoundary>
  );
}
