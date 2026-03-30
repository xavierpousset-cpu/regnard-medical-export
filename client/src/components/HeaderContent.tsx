/**
 * HeaderContent - Composant interne qui utilise useAuth
 * Séparé du Header principal pour éviter les erreurs de contexte
 */

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";

const navItems = [
  {
    label: "Nos solutions",
    href: "#",
    isExternal: false,
    submenu: [
      { label: "Produits médicaux", href: "#", hasCategory: true },
      { label: "Services", href: "#", hasCategory: true },
    ],
  },
  { label: "Forum", href: "/forum", isExternal: false },
  { label: "FAQ", href: "/faq", isExternal: false },
  { label: "À propos", href: "/about", isExternal: false },
];

const produitsSubmenu = [
  // { label: "Le Divan O-SAN", href: "/o-san-divan" }, // Masqué temporairement - en préparation
  { label: "Le Divan O-PREP", href: "/oprep-divan" },
  { label: "Le Trône O-PREP", href: "/oprep-altesse" },
];

const servicesSubmenu = [
  { label: "Réparation", href: "/reparation" },
  { label: "Lits médicalisés", href: "/services" },
];

export function HeaderContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    if (href === "#expertise") {
      document.querySelector("section")?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#valeurs") {
      const sections = document.querySelectorAll("section");
      sections[3]?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#about") {
      const sections = document.querySelectorAll("section");
      sections[4]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    // Si on est sur la homepage, scroll vers la section contact
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Sinon, rediriger vers la page de contact
      setLocation('/contact');
    }
  };

  const getSubmenuItems = (label: string) => {
    if (label === "Produits médicaux") return produitsSubmenu;
    if (label === "Services") return servicesSubmenu;
    return [];
  };

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
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (!item.isExternal && !item.submenu && item.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    } else if (!item.isExternal && !item.submenu && !item.href.startsWith('#')) {
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subitem) => (
                      <div key={subitem.label} className="relative group/nested">
                        <button
                          onClick={() => window.scrollTo(0, 0)}
                          className="w-full text-left block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg flex items-center justify-between"
                        >
                          {subitem.label}
                          {subitem.hasCategory && <ChevronDown className="h-4 w-4" />}
                        </button>

                        {/* Nested Submenu for Categories */}
                        {subitem.hasCategory && (
                          <div className="absolute left-full top-0 ml-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                            {getSubmenuItems(subitem.label).map((nestedItem) => (
                              <a
                                key={nestedItem.label}
                                href={nestedItem.href}
                                onClick={() => window.scrollTo(0, 0)}
                                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                              >
                                {nestedItem.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}


            <Button
              size="sm"
              onClick={handleContactClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
            >
              Contact
            </Button>

            {/* Account Menu */}
            {isAuthenticated && user ? (
              <div className="relative group">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1">
                  Mon compte
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-3 border-b border-border text-sm text-muted-foreground">
                    {user.name || user.email}
                  </div>
                  {user.role === 'admin' && (
                    <a
                      href="/admin"
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
                    >
                      Dashboard Admin
                    </a>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setLocation('/');
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 flex items-center gap-2 rounded-b-lg"
                  >
                    <LogOut className="h-4 w-4" />
                    Déconnexion
                  </button>
                </div>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => (window.location.href = getLoginUrl())}
              >
                Connexion
              </Button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                      } else if (item.href.startsWith('#')) {
                        scrollToSection(item.href);
                      } else {
                        window.scrollTo(0, 0);
                        setLocation(item.href);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === item.label && (
                    <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
                      {item.submenu.map((subitem) => (
                        <div key={subitem.label}>
                          <button
                            onClick={() => {
                              if (subitem.hasCategory) {
                                setOpenNestedSubmenu(openNestedSubmenu === subitem.label ? null : subitem.label);
                              } else {
                                window.scrollTo(0, 0);
                                setLocation(subitem.href);
                                setMobileMenuOpen(false);
                              }
                            }}
                            className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center justify-between"
                          >
                            {subitem.label}
                            {subitem.hasCategory && (
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  openNestedSubmenu === subitem.label ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </button>

                          {/* Mobile Nested Submenu */}
                          {subitem.hasCategory && openNestedSubmenu === subitem.label && (
                            <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
                              {getSubmenuItems(subitem.label).map((nestedItem) => (
                                <a
                                  key={nestedItem.label}
                                  href={nestedItem.href}
                                  onClick={() => {
                                    window.scrollTo(0, 0);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                                >
                                  {nestedItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button
                size="sm"
                onClick={handleContactClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 mt-4"
              >
                Contact
              </Button>

              {/* Mobile Account Menu */}
              {isAuthenticated && user ? (
                <div className="border-t border-border pt-4 mt-4">
                  <div className="text-sm text-muted-foreground mb-3">
                    {user.name || user.email}
                  </div>
                  {user.role === 'admin' && (
                    <a
                      href="/admin"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 mb-3"
                    >
                      Dashboard Admin
                    </a>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setLocation('/');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Déconnexion
                  </button>
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => (window.location.href = getLoginUrl())}
                  className="w-full"
                >
                  Connexion
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
