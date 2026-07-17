function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(10,23,56,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-22px))] items-center justify-between gap-5 py-4 md:w-[min(1180px,calc(100%-32px))]">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/8 px-4 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.16)]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-[18px] bg-gradient-to-br from-cyan-400 via-teal-300 to-emerald-300 text-lg text-slate-950 shadow-[0_12px_24px_rgba(34,211,238,0.28)]">
            ZI
          </span>
          <span className="text-sm font-black uppercase tracking-[0.18em] text-white">
            ZipInvest
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-[0.08em] text-blue-100/80 lg:flex">
          <a className="transition hover:text-white" href="#marketplace">
            Marketplace
          </a>
          <a className="transition hover:text-white" href="#calculator">
            Returns
          </a>
          <a className="transition hover:text-white" href="#top">
            Impact
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#calculator" className="secondary-button !px-5 !py-3">
            Get in Touch
          </a>
          <a href="#marketplace" className="primary-button !px-5 !py-3">
            Invest now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
