"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_1px_0_0_rgba(10,10,10,0.04),0_8px_24px_-16px_rgba(10,10,10,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-rccl flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/rccl-logo-mark.png"
            alt="RCCL logo mark"
            width={327}
            height={326}
            priority
            className="h-10 md:h-12 w-auto shrink-0"
          />
          {/* Same font size on both lines. The width difference is corrected
              with letter-spacing, not font-size: "RAMMED EARTH" keeps
              tracking-wide, "CONSTRUCTION CO. LTD" uses tracking-normal so
              the longer string doesn't blow out past the first line. */}
          <span className="flex flex-col justify-center leading-none">
            <span className="font-display font-semibold text-signal text-sm md:text-lg tracking-wide">
              RAMMED EARTH
            </span>
            <span
              className={`font-display font-semibold text-sm md:text-lg tracking-normal mt-1 transition-colors duration-300 ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              CONSTRUCTION LTD
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium tracking-wide whitespace-nowrap rounded-full px-6 py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 ${
                  active
                    ? "bg-signal text-white"
                    : solid
                    ? "text-ink hover:bg-signal hover:text-white active:bg-signal active:text-white"
                    : "text-white hover:bg-signal hover:text-white active:bg-signal active:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-signal text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink active:bg-ink transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className={`xl:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full transition-colors duration-200 ${
            solid ? "hover:bg-signal/10 active:bg-signal/20" : "hover:bg-white/15 active:bg-white/25"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-5 transition-[transform,background-color] duration-300 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 transition-[opacity,background-color] duration-300 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 transition-[transform,background-color] duration-300 ${solid ? "bg-ink" : "bg-white"} ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-line bg-white">
          <nav className="container-rccl flex flex-col py-4">
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 text-base font-medium border-b border-line last:border-none transition-colors ${
                    active ? "text-signal" : "text-ink active:text-signal"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-signal text-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] active:bg-ink transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}