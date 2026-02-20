/**
 * Header - Regnard Medical
 * Design: Industrial Minimalism
 * - Navigation sobre et fonctionnelle
 * - Logo texte
 * - Menu déroulant pour les produits
 */

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();

  const navItems = [
    {
      labelKey: "header.products",
      href: "#",
      isExternal: false,
      submenu: [
        { label: "O-PREP®DIVAN", href: "/oprep-divan" },
        { label: "O-PREP®ALTESSE", href: "/oprep-altesse" },
      ],
    },
    { labelKey: "header.services", href: "/services", isExternal: false },
    { labelKey: "header.forum", href: "/forum", isExternal: false },
    { labelKey: "header.faq", href: "/faq", isExternal: false },
    { labelKey: "header.about", href: "/about", isExternal: false },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.labelKey} className="relative group">
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
                  {t(item.labelKey)}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Language Selector */}
            <LanguageSelector />

            <Button
              size="sm"
              onClick={handleContactClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
            >
              {t('header.contact')}
            </Button>

            {/* Account Menu */}
            {isAuthenticated && user ? (
              <div className="relative group">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1">
                  {t('header.account')}
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
                      {t('header.admin_dashboard')}
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
                    {t('header.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => (window.location.href = getLoginUrl())}
              >
                {t('header.login')}
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
                <div key={item.labelKey}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setOpenSubmenu(openSubmenu === item.labelKey ? null : item.labelKey);
                      } else {
                        setMobileMenuOpen(false);
                        if (!item.isExternal && item.href.startsWith('#')) {
                          scrollToSection(item.href);
                        } else if (!item.isExternal) {
                          window.scrollTo(0, 0);
                          setLocation(item.href);
                        }
                      }
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 flex items-center gap-1 w-full text-left"
                  >
                    {t(item.labelKey)}
                    {item.submenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === item.labelKey ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === item.labelKey && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenSubmenu(null);
                            window.scrollTo(0, 0);
                          }}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <LanguageSelector />
              </div>

              <Button
                size="sm"
                onClick={handleContactClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
              >
                {t('header.contact')}
              </Button>

              {isAuthenticated && user ? (
                <button
                  onClick={() => {
                    logout();
                    setLocation('/');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 flex items-center gap-2 rounded-lg"
                >
                  <LogOut className="h-4 w-4" />
                  {t('header.logout')}
                </button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => (window.location.href = getLoginUrl())}
                >
                  {t('header.login')}
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setLanguage('fr')}
        className={`text-xs font-semibold px-2 py-1 rounded transition-colors duration-150 ${
          language === 'fr'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`text-xs font-semibold px-2 py-1 rounded transition-colors duration-150 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
}
