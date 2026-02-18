/**
 * Header - Regnard Medical
 * Design: Industrial Minimalism
 * - Navigation sobre et fonctionnelle
 * - Logo texte
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Expertise", href: "#expertise" },
  { label: "Solutions", href: "#solutions" },
  { label: "Valeurs", href: "#valeurs" },
  { label: "À propos", href: "#about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#expertise") {
      document.querySelector("section")?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#solutions") {
      const sections = document.querySelectorAll("section");
      sections[2]?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#valeurs") {
      const sections = document.querySelectorAll("section");
      sections[3]?.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#about") {
      const sections = document.querySelectorAll("section");
      sections[4]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-150"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663365995358/vsNlBdVUEUdrRtyF.svg"
                alt="Regnard Medical Logo"
                className="h-10 w-10"
              />
              <span className="font-display font-bold text-lg text-foreground tracking-tight">
                REGNARD MEDICAL
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
            >
              Contact
            </Button>
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
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150 w-full"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
