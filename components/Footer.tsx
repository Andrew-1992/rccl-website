import Link from "next/link";
import Image from "next/image";

// Bare, unlabeled link columns (no "Pages" / "Other Pages" headers).
const columnOne = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Build" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
];

const columnTwo = [
  { href: "/portfolio", label: "Projects" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const phoneNumbers = [
  { display: "+211 92 407 8083", href: "tel:+211924078083" },
  { display: "+211 92 322 8220", href: "tel:+211923228220" },
];

const email = "rammedearth.co@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="container-rccl py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1 — larger brand block, matching Sundt's mark + wordmark + motto */}
          <div>
            <Image
              src="/rccl-logo-mark.png"
              alt="RCCL — Rammed Earth Construction Company Limited"
              width={327}
              height={326}
              className="h-16 w-auto mb-5"
            />
            <span className="flex flex-col leading-[1.05] mb-4">
              <span className="font-display font-bold text-signal text-2xl tracking-wide">
                RAMMED EARTH
              </span>
              <span className="font-display font-bold text-white text-2xl tracking-normal">
                SOUTH SUDAN
              </span>
            </span>
            <p className="text-white/60 text-sm tracking-wide">
              Build Differently
            </p>
          </div>

          {/* Column 2 — bare link list */}
          <nav aria-label="Footer, company">
            <ul className="space-y-4">
              {columnOne.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-white/85 hover:text-signal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — bare link list */}
          <nav aria-label="Footer, more">
            <ul className="space-y-4">
              {columnTwo.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-white/85 hover:text-signal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — direct contact info + Follow Us */}
          <div>
            <ul className="space-y-2 mb-6">
              {phoneNumbers.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-sm font-medium text-white/85 hover:text-signal transition-colors">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${email}`} className="text-sm font-medium text-white/85 hover:text-signal transition-colors">
                  {email}
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <SocialIcon href="https://facebook.com/[X]" label="RCCL on Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/company/[X]" label="RCCL on LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="https://instagram.com/[X]" label="RCCL on Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@[X]" label="RCCL on YouTube">
                <YouTubeIcon />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Separate bottom bar — distinct background, matching Sundt's split-off copyright strip */}
      <div className="bg-black/40 border-t border-white/10">
        <div className="container-rccl py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs">
          <span className="text-white/50">
            Copyright &copy; {new Date().getFullYear()} RAMMED EARTH CONSTRUCTION LTD |All Rights Reserved |{" "}
            <Link href="#" className="text-signal hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/25 text-white/80 hover:border-signal hover:text-signal transition-colors"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.28 1.33 9.68 1.33 12 1.33m0 1.87c-3.14 0-3.5 0-4.74.07-1.02.05-1.57.21-1.94.35-.49.19-.84.42-1.2.79-.38.37-.6.71-.8 1.2-.14.37-.3.92-.35 1.94-.06 1.24-.07 1.6-.07 4.74s0 3.5.07 4.74c.05 1.02.21 1.57.35 1.94.19.49.42.84.79 1.2.37.38.71.6 1.2.8.37.14.92.3 1.94.35 1.24.06 1.6.07 4.74.07s3.5 0 4.74-.07c1.02-.05 1.57-.21 1.94-.35.49-.19.84-.42 1.2-.79.38-.37.6-.71.8-1.2.14-.37.3-.92.35-1.94.06-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.05-1.02-.21-1.57-.35-1.94a3.03 3.03 0 0 0-.79-1.2 3.03 3.03 0 0 0-1.2-.8c-.37-.14-.92-.3-1.94-.35C15.5 4.07 15.14 4.07 12 4.07zm0 3.18a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.87a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76zm4.94-2.06a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.9 21.9 0 0 0 14.3 3.68c-2.35 0-3.96 1.44-3.96 4.07v2.27H7.68v3.08h2.66V21h3.16z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.6V23H8.5V8.25z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}
