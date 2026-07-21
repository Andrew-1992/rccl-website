import Link from "next/link";
import Image from "next/image";
import RammedEarthLayers from "./RammedEarthLayers";

const pagesColumn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const otherPagesColumn = [
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
  { href: "#", label: "Privacy Policy" },
];

const phoneNumbers = [
  { display: "+211 92 407 8083", href: "tel:+211924078083" },
  { display: "+211 92 322 8220", href: "tel:+211923228220" },
];

const email = "rammedearth.co@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <RammedEarthLayers bandCount={10} height={36} animate={false} />

      <div className="container-rccl py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Image
                src="/rccl-logo-mark.png"
                alt="RCCL - Rammed Earth Construction Company Limited"
                width={327}
                height={326}
                className="h-9 w-auto"
              />
              <span className="flex flex-col justify-center leading-none">
                <span className="font-display font-bold text-signal text-sm tracking-wide">
                  RAMMED EARTH
                </span>
                <span className="font-display font-bold text-sm tracking-normal mt-1 text-white">
                  Construction Ltd
                </span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-[240px] mb-8">
              REC Ltd is a construction company established in 2022, built around a commitment to sustainable, innovative building methods — with rammed earth construction as its defining specialty.
            </p>
            <h4 className="text-sm font-semibold text-white mb-2">Address</h4>
            <p className="text-white/60 leading-relaxed">
              Cyerdit Plaza, Juba Town
              <br />
              Juba, South Sudan
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">Pages</h4>
            <ul className="space-y-3">
              {pagesColumn.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 hover:text-signal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">Other Pages</h4>
            <ul className="space-y-3">
              {otherPagesColumn.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-signal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-2">Call Us</h4>
            <ul className="space-y-1">
              {phoneNumbers.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-white/65 hover:text-signal transition-colors">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold text-white mb-2 mt-6">Email Us</h4>
            <a href={`mailto:${email}`} className="text-white/65 hover:text-signal transition-colors">
              {email}
            </a>

            <div className="flex gap-3 mt-6">
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

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <span className="text-white/50">
            &copy; {new Date().getFullYear()} Rammed Earth Construction Ltd. All rights reserved.
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
