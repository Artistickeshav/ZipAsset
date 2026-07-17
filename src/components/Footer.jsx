function Footer() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7.2 9.3V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11.5 18V13.2C11.5 11.7 12.4 10.7 13.8 10.7C15.1 10.7 15.9 11.6 15.9 13.2V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7.2" cy="6.5" r="1.1" fill="currentColor" />
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 5.5L18 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 5.5L6 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 8.6C19.8 7.6 19 6.8 18 6.6C16.5 6.2 12 6.2 12 6.2C12 6.2 7.5 6.2 6 6.6C5 6.8 4.2 7.6 4 8.6C3.6 10.2 3.6 12 3.6 12C3.6 12 3.6 13.8 4 15.4C4.2 16.4 5 17.2 6 17.4C7.5 17.8 12 17.8 12 17.8C12 17.8 16.5 17.8 18 17.4C19 17.2 19.8 16.4 20 15.4C20.4 13.8 20.4 12 20.4 12C20.4 12 20.4 10.2 20 8.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10.3 14.7V9.3L14.9 12L10.3 14.7Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-12 border-t border-white/10 bg-[#0a1738] text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] py-12 md:w-[min(1180px,calc(100%-32px))]">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[18px] bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-300 text-sm font-black text-slate-950 shadow-[0_12px_24px_rgba(34,211,238,0.24)]">
                ZI
              </span>
              <div>
                <div className="text-lg font-black uppercase tracking-[0.14em] text-white">
                  ZipInvest
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/75">
                  A Product Of Zipbolt Innovations Pvt Ltd
                </div>
              </div>
            </div>

            <div className="mt-5 max-w-md space-y-1 text-sm leading-7 text-blue-100/75">
              <p className="font-black uppercase tracking-[0.12em] text-white">
                ZIPBOLT INNOVATIONS PRIVATE LIMITED
              </p>
              <p className="font-semibold uppercase tracking-[0.08em] text-blue-100/85">
                GSTIN : 06AABCZ8004D1ZM
              </p>
              <p>UG-006, Ground Floor</p>
              <p>MGF Metropolis Mall, Mehrauli – Gurgaon Road</p>
              <p>Gurugram, Haryana 122002, India</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#marketplace"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Explore marketplace
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-105"
              >
                Open simulator
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Platform</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="#top">
                Home
              </a>
              <a className="transition hover:text-white" href="#marketplace">
                Charger opportunities
              </a>
              <a className="transition hover:text-white" href="#calculator">
                Investment simulator
              </a>
              <a className="transition hover:text-white" href="#top">
                Network impact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Resources</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="#calculator">
                Returns preview
              </a>
              <a className="transition hover:text-white" href="#marketplace">
                Asset classes
              </a>
              <a className="transition hover:text-white" href="#top">
                Investor journey
              </a>
              <a className="transition hover:text-white" href="#top">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="mailto:info@zip-bolt.com">
                info@zip-bolt.com
              </a>
              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-blue-100/85 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
                  >
                    <span className="h-5 w-5">{social.icon}</span>
                  </a>
                ))}
              </div>
              <a className="transition hover:text-white" href="#top">
                Schedule a walkthrough
              </a>
              <a className="transition hover:text-white" href="#top">
                Terms & privacy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-100/60">
          <p>© 2026 ZipInvest, a product of Zipbolt Innovations Pvt Ltd.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="#top">
              Back to top
            </a>
            <a className="transition hover:text-white" href="#calculator">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
