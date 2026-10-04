import Link from "next/link";
import Image from "next/image";

const company = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/sustainability", label: "Sustainability" },
];

const coreServices = [
  "General Construction",
  "Architectural Design",
  "Rammed Earth Construction",
  "Civil & MEP Engineering",
  "Renovation Works",
];

const projectTypes = [
  "Landscape Architecture",
  "Green & Blue Infrastructure",
  "Public Infrastructure Development",
  "Urban Studies & Research",
  "Commercial Development",
];

const email = "rammedearth.co@gmail.com";
const phone = { display: "+211 923 228 220", href: "tel:+211923228220" };
const altPhone = { display: "+211 924 078 083", href: "tel:+211924078083" };

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="container-rccl py-16 md:py-20">
        {/* Top row — brand left, email + phone (with icons) right, matching
            the Brentor reference's contact-row pattern */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 border-b border-white/10">
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
            <p className="text-white/60 text-sm tracking-wide max-w-xs">
              Build Differently
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href={`mailto:${email}`} className="flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-signal transition-colors">
              <span className="text-signal shrink-0"><MailIcon /></span>
              {email}
            </a>
            <span className="hidden md:block w-px h-6 bg-white/15" aria-hidden="true" />
            <a href={phone.href} className="flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-signal transition-colors">
              <span className="text-signal shrink-0"><PhoneIcon /></span>
              {phone.display}
            </a>
            <span className="hidden md:block w-px h-6 bg-white/15" aria-hidden="true" />
            <a href={altPhone.href} className="flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-signal transition-colors">
              <span className="text-signal shrink-0"><PhoneIcon /></span>
              {altPhone.display}
            </a>
          </div>
        </div>

        {/* Column grid — Company / Core Services / Project Types / Social Media */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-8 pt-12">
          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-5">Company</h4>
            <ul className="space-y-4">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-medium text-white/85 hover:text-signal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-5">Core Services</h4>
            <ul className="space-y-4">
              {coreServices.map((item) => (
                <li key={item} className="text-sm text-white/85">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-5">Project Types</h4>
            <ul className="space-y-4">
              {projectTypes.map((item) => (
                <li key={item} className="text-sm text-white/85">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-5">Social Media</h4>
            <div className="flex gap-3">
              <SocialIcon href="https://facebook.com/[X]" label="RESS on Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/company/[X]" label="RESS on LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="https://x.com/[X]" label="RESS on X">
                <XIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@[X]" label="RCCL on YouTube">
                <YouTubeIcon />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/40 border-t border-white/10">
        <div className="container-rccl py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs">
          <span className="text-white/50">
            Copyright &copy; {new Date().getFullYear()} RAMMED EARTH CONSTRUCTION LTD | All Rights Reserved |{" "}
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.6 21.1 2.9 13.4 2.9 3.2 2.9 2.6 3.4 2 4 2h3.4c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5L6.1 22H3l8.1-9.3L2.7 2h6.5l4.5 6ZM17.6 20h1.7L7.5 3.9H5.7L17.6 20Z" />
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
