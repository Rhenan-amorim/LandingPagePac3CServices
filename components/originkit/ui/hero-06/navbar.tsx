// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useState, type KeyboardEvent } from "react";
import { Button } from "@/components/originkit/ui/hero-06/button";

const NAV_LINKS = [
  { label: "Contexto", href: "#contexto" },
  { label: "Conceito", href: "#conceito" },
  { label: "Estratégia", href: "#estrategia" },
  { label: "Etapas", href: "#etapas" },
] as const;

type NavbarProps = {
  onViewStories: () => void;
};

export const Navbar = ({ onViewStories }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    scrollTo(href);
    setIsMenuOpen(false);
  };

  const goInscricoes = () => {
    const el = document.getElementById("participar");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-label="Primary" className="absolute inset-x-0 top-0 z-40 w-full">
      <div className="mx-auto flex w-full max-w-[1512px] items-center justify-between px-4 py-5 android-sm:px-8 ipad:px-12 ipad:py-7 desktop-sm:px-[90px]">
        <a
          href="#"
          aria-label="3C Services — início"
          className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <img
            src="/originkit/hero-06/logo-3c.png"
            alt="3C Services"
            width={36}
            height={36}
            className="h-8 w-8 object-contain ipad:h-9 ipad:w-9"
            draggable={false}
          />
          <span className="font-sans text-[17px] font-extrabold leading-none tracking-tight text-ink ipad:text-[20px]">
            3C <span className="font-medium text-body">Services</span>
          </span>
        </a>

        <div className="flex items-center gap-3 desktop-sm:gap-[30px]">
          <ul className="hidden items-center gap-[30px] desktop-sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  tabIndex={0}
                  aria-label={link.label}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  onKeyDown={(event) => handleKeyDown(event, link.href)}
                  className="inline-flex min-h-11 cursor-pointer items-center font-sans text-[15px] font-semibold leading-6 text-ink-soft touch-manipulation whitespace-nowrap transition-opacity duration-200 ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:text-brand-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant="nav"
            aria-label="Quero participar"
            onClick={goInscricoes}
            className="!hidden min-w-[44px] desktop-sm:!inline-flex"
          >
            Quero participar
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
            className="inline-flex size-11 cursor-pointer items-center justify-center touch-manipulation transition-opacity duration-200 ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue desktop-sm:hidden [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80"
          >
            <span className="sr-only">{isMenuOpen ? "Fechar" : "Menu"}</span>
            <span
              aria-hidden="true"
              className="flex size-6 flex-col items-center justify-center gap-[5px]"
            >
              <span className="block h-0.5 w-full rounded-full bg-brand-blue" />
              <span className="block h-0.5 w-full rounded-full bg-brand-blue" />
              <span className="block h-0.5 w-full rounded-full bg-brand-blue" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-line bg-surface/95 px-5 py-4 backdrop-blur-sm desktop-sm:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  tabIndex={0}
                  aria-label={link.label}
                  onKeyDown={(event) => handleKeyDown(event, link.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                    setIsMenuOpen(false);
                  }}
                  className="inline-flex min-h-11 w-full cursor-pointer items-center font-sans text-[16px] font-semibold leading-6 text-ink-soft touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue [-webkit-tap-highlight-color:transparent]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                variant="nav"
                aria-label="Quero participar"
                onClick={() => {
                  goInscricoes();
                  setIsMenuOpen(false);
                }}
                className="w-full"
              >
                Quero participar
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
