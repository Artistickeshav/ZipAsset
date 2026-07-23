import { useState, useEffect, useRef } from "react";
import BrandLogo from "./BrandLogo";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNav = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(10,23,56,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-22px))] items-center justify-between gap-5 py-4 md:w-[min(1180px,calc(100%-32px))]">
        <a href="#top" className="flex min-w-0 items-center">
          <BrandLogo
            className="min-w-0"
            imgClassName="h-9 sm:h-10 md:h-11 drop-shadow-[0_10px_18px_rgba(34,211,238,0.14)]"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-[0.08em] text-blue-100/80 lg:flex">
          <a className="transition hover:text-white" href="#marketplace">Marketplace</a>
          <a className="transition hover:text-white" href="#calculator">Returns</a>
          <a className="transition hover:text-white" href="#top">Impact</a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#calculator" className="secondary-button !px-5 !py-3">Get in Touch</a>
          <a href="#marketplace" className="primary-button !px-5 !py-3">Invest now</a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          className="flex items-center justify-center rounded-xl border border-white/12 bg-white/8 p-2.5 text-blue-100/80 transition hover:bg-white/12 hover:text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[min(1180px,calc(100%-22px))] border-t border-white/10 py-6 md:w-[min(1180px,calc(100%-32px))]">
          <nav className="flex flex-col gap-2">
            <a href="#marketplace" onClick={handleNav} className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.08em] text-blue-100/80 transition hover:bg-white/8 hover:text-white">Marketplace</a>
            <a href="#calculator" onClick={handleNav} className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.08em] text-blue-100/80 transition hover:bg-white/8 hover:text-white">Returns</a>
            <a href="#top" onClick={handleNav} className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.08em] text-blue-100/80 transition hover:bg-white/8 hover:text-white">Impact</a>
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a href="#calculator" onClick={handleNav} className="secondary-button !w-full !justify-center !px-5 !py-3">Get in Touch</a>
            <a href="#marketplace" onClick={handleNav} className="primary-button !w-full !justify-center !px-5 !py-3">Invest now</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
