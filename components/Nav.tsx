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
 * Transparent over the hero at the top of the page (blends into whatever
 * dark background/media the Hero or PageHero is showing), solidifying to
 * a white bar with a shadow once scrolled past it. Hides on scroll-down,
 * reveals on scroll-up, in whichever background state matches the current
 * scroll position — so a reveal near the top comes back transparent, a
 * reveal further down comes back solid. Hamburger removed — the 3 links
 * are always shown inline, at every screen width.
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
      <div className="container-rccl flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="relative h-14 md:h-16 w-14 md:w-16 shrink-0">
            <Image
              src="/rccl-logo-mark.png"
              alt="RCCL logo mark"
              fill
              priority
              sizes="64px"
              className="object-contain"
            />
          </span>
          <span className="flex flex-col justify-center leading-none">
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

        <nav className="flex items-center gap-6 md:gap-8">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-300 ${
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
            className="inline-flex items-center rounded-full bg-signal text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink active:bg-ink transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}