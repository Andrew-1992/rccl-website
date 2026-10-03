"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/sustainability", label: "Sustainability" },
];

/**
 * Transparent over the hero, solidifying to white on scroll. Hides on
 * scroll-down, reveals on scroll-up.
 *
 * Desktop (md and up): logo + wordmark on the left, links and the
 * Contact Us button inline on the right.
 *
 * Mobile (below md): the same logo + wordmark on the left, and a round
 * hamburger button on the right. All nav items (the 3 links and
 * Contact Us) live in a dropdown panel that opens beneath the bar.
 * The bar is a single fixed-height row, so nothing wraps.
 */
export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function handleScroll() {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollingDown = currentY > lastY;
          const pastThreshold = currentY > 120;
          setHidden(scrollingDown && pastThreshold);
          setScrolled(currentY > 48);
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu after navigating to another page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape, and when the viewport grows to desktop width.
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    const mq = window.matchMedia("(min-width: 768px)");
    function onResize() {
      if (mq.matches) setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  // An open menu forces the bar solid and keeps it on screen.
  const solid = scrolled || open;
  const isHidden = hidden && !open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_1px_0_0_rgba(10,10,10,0.04),0_8px_24px_-16px_rgba(10,10,10,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-rccl flex items-center justify-between gap-3 h-20 md:h-24">
        {/* Logo + wordmark: shown at every width */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 min-w-0">
          <span className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
            <Image
              src="/rccl-logo-mark.png"
              alt="RCCL logo mark"
              fill
              priority
              sizes="(min-width: 768px) 64px, 48px"
              className="object-contain"
            />
          </span>
          <span className="flex flex-col justify-center leading-none whitespace-nowrap">
            <span className="font-display font-semibold text-signal text-sm md:text-lg tracking-wide">
              RAMMED EARTH
            </span>
            <span
              className={`font-display font-semibold text-sm md:text-lg tracking-wide mt-1 transition-colors duration-300 ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              SOUTH SUDAN
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-x-8">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold uppercase tracking-[0.06em] whitespace-nowrap transition-colors duration-300 ${
                  active
                    ? "text-signal"
                    : solid
                    ? "text-ink hover:text-signal"
                    : "text-white hover:text-white/70"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-signal text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] whitespace-nowrap hover:bg-ink active:bg-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile: round hamburger button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`md:hidden relative shrink-0 h-11 w-11 rounded-full flex items-center justify-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 ${
            open
              ? "bg-signal text-white"
              : solid
              ? "bg-ink text-white"
              : "bg-white/15 text-white ring-1 ring-inset ring-white/60 backdrop-blur"
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`overflow-hidden ${open ? "visible" : "invisible"}`}>
          <nav className="container-rccl flex flex-col pb-5 pt-1 border-t border-line">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`py-3.5 text-sm font-semibold uppercase tracking-[0.06em] border-b border-line transition-colors duration-200 ${
                    active ? "text-signal" : "text-ink hover:text-signal"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-signal text-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink active:bg-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
