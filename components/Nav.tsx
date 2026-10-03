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
 * scroll-down, reveals on scroll-up. No hamburger — all 3 links stay
 * inline at every width, but sizing is now responsive: the full
 * wordmark (two lines of text) is hidden below `sm:` since the logo
 * mark alone is enough to identify the brand on a phone-width screen,
 * and link/button text and spacing scale up from a compact mobile size
 * to the original comfortable desktop size. flex-wrap is kept as a
 * safety net so an unusually narrow device wraps cleanly to a second
 * row instead of overflowing horizontally.
 */
export default function Nav() {
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

  const solid = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_1px_0_0_rgba(10,10,10,0.04),0_8px_24px_-16px_rgba(10,10,10,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-rccl flex flex-wrap items-center justify-between gap-y-2 py-3 md:h-24 md:py-0">
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <span className="relative h-10 w-10 md:h-16 md:w-16 shrink-0">
            <Image
              src="/rccl-logo-mark.png"
              alt="RCCL logo mark"
              fill
              priority
              sizes="(min-width: 768px) 64px, 40px"
              className="object-contain"
            />
          </span>
          <span className="hidden sm:flex flex-col justify-center leading-none">
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

        <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-x-8">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-[11px] md:text-sm font-semibold uppercase tracking-[0.03em] md:tracking-[0.06em] whitespace-nowrap transition-colors duration-300 ${
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
            className="inline-flex items-center rounded-full bg-signal text-white px-3.5 py-1.5 md:px-5 md:py-2.5 text-[11px] md:text-sm font-semibold uppercase tracking-[0.03em] md:tracking-[0.08em] whitespace-nowrap hover:bg-ink active:bg-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
