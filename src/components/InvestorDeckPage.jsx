import { useState, useEffect } from "react";
import { segments, marketStats, steps, marketplaceHighlights } from "../data/content";

function Slide({ children, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[min(1180px,calc(100%-22px))] md:w-[min(1180px,calc(100%-32px))] ${className}`}
    >
      {children}
    </div>
  );
}

function DeckSlide({ title, subtitle, children, accent = "brand" }) {
  const accentColors = {
    brand: "border-l-[#2a56c6] bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738]",
    cyan: "border-l-cyan-400 bg-gradient-to-br from-[#0a1738] via-[#0c1f3a] to-[#0a1738]",
    emerald: "border-l-emerald-400 bg-gradient-to-br from-[#0a1738] via-[#0c1f2e] to-[#0a1738]",
    amber: "border-l-amber-400 bg-gradient-to-br from-[#0a1738] via-[#1f1a0a] to-[#0a1738]",
  };

  return (
    <div
      className={`relative rounded-[20px] border border-white/10 ${accentColors[accent] || accentColors.brand} p-8 md:p-12 shadow-[0_30px_80px_rgba(10,23,56,0.4)]`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]" />
      <div className="ml-4">
        {title && (
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 text-sm leading-7 text-blue-200/80 md:text-base">
            {subtitle}
          </p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

function StatGrid({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
        >
          <div className="text-2xl font-black tracking-[-0.04em] text-white">
            {stat.value}
          </div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/70">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function RiskBadge({ level }) {
  const styles = {
    Low: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    Medium: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    High: "border-rose-400/30 bg-rose-400/10 text-rose-300",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${styles[level] || styles.Low}`}
    >
      {level} Risk
    </span>
  );
}

function InvestorDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slideComponents = [
    <Slide key="cover">
      <div className="flex min-h-[65vh] flex-col items-center justify-center text-center rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 md:p-12 shadow-[0_30px_80px_rgba(10,23,56,0.4)]">
        <div className="eyebrow-chip mb-6 inline-flex bg-white/10 border-white/20 text-blue-200">
          Investor Deck
        </div>
        <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
          <span className="block">ZipInvest</span>
          <span className="block mt-2 text-blue-200">EV Charging</span>
          <span className="block mt-1 text-white">Infrastructure</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
          Invest in revenue-generating EV charging assets across India&apos;s
          fastest-growing mobility corridors. Fractional ownership, transparent
          underwriting, and asset-backed returns.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentSlide(1)}
            className="primary-button px-8 py-4 text-base"
          >
            Explore the Deck
          </button>
          <a
            href="#calculator"
            onClick={() => setCurrentSlide(0)}
            className="secondary-button px-8 py-4 text-base"
          >
            Try the Simulator
          </a>
        </div>
        <div className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/50">
          Use arrow keys to navigate
        </div>
      </div>
    </Slide>,

    <Slide key="opportunity">
      <DeckSlide
        title="The Opportunity"
        subtitle="India&apos;s EV charging infrastructure is at an inflection point"
        accent="brand"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm leading-7 text-blue-100/80">
              India&apos;s EV market is projected to grow at over 40% CAGR through
              2030, driven by government incentives, fleet electrification, and
              rising fuel costs. Charging infrastructure is the critical backbone
              â€” and the bottleneck.
            </p>
            <p className="text-sm leading-7 text-blue-100/80">
              ZipInvest provides fractional access to high-utilization DC fast
              charging assets deployed across retail, fleet, and highway
              corridors. Every charger is backed by real site contracts,
              deployed hardware, and transparent performance monitoring.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Why Now
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-blue-100/80">
                <li>Government PLI schemes accelerating charger deployment</li>
                <li>Rising EV adoption creating urgent demand at corridors</li>
                <li>Limited institutional capital serving the infra gap</li>
                <li>Digital marketplace enabling retail investor participation</li>
              </ul>
            </div>
            <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Asset Class
              </div>
              <p className="mt-3 text-sm leading-7 text-blue-100/80">
                Physical EV charging infrastructure with long-term host-site
                contracts, monitored utilization, and predictable cash flows.
              </p>
            </div>
          </div>
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="market">
      <DeckSlide
        title="Market Overview"
        subtitle="Key metrics from the ZipInvest charging network"
        accent="cyan"
      >
        <StatGrid stats={marketStats} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
              Network Reach
            </div>
            <div className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
              8 Charger Classes
            </div>
            <div className="mt-2 text-sm text-blue-100/70">
              From 6 kW AC residential to 350 kW mega-fast across retail, fleet,
              and highway locations
            </div>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
              Deployment Model
            </div>
            <div className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
              Site-Level Assets
            </div>
            <div className="mt-2 text-sm text-blue-100/70">
              Each investment backs a specific charger at a specific site with
              transparent utilization and return data
            </div>
          </div>
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="assets">
      <DeckSlide
        title="Asset Classes"
        subtitle="Diversified infrastructure opportunities across charging, storage, and fleet segments"
        accent="emerald"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="rounded-[16px] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-lg font-black tracking-[-0.04em] text-white">
                  {segment.power}
                </span>
                <RiskBadge level={segment.riskLevel} />
              </div>
              <div className="mt-2 text-sm font-semibold text-blue-100/80">
                {segment.name}
              </div>
              <div className="mt-2 text-xs text-blue-200/60">{segment.site}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xl font-black tracking-[-0.04em] text-white">
                  {segment.yieldRate}%
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-200/60">
                  APY
                </span>
              </div>
              <div className="mt-2 text-xs text-blue-200/60">
                {segment.lockDays}d lock
              </div>
            </div>
          ))}
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="returns">
      <DeckSlide
        title="Return Profile"
        subtitle="Projected returns across the asset spectrum"
        accent="brand"
      >
        <div className="overflow-hidden rounded-[16px] border border-white/10 bg-white/8 backdrop-blur-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  Charger Class
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  Risk
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  APY
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  Min Ticket
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  Max Ticket
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-blue-200/70">
                  Lock
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {segments.map((segment) => (
                <tr
                  key={segment.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="whitespace-nowrap px-5 py-3 font-semibold text-white">
                    {segment.name}
                  </td>
                  <td className="px-5 py-3">
                    <RiskBadge level={segment.riskLevel} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right font-black text-white">
                    {segment.yieldRate}%
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right text-blue-100/70">
                    Rs {segment.minAmount.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right text-blue-100/70">
                    Rs {segment.maxAmount.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right text-blue-100/70">
                    {segment.lockDays}d
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
            Note
          </div>
          <p className="mt-2 text-sm leading-7 text-blue-100/70">
            Returns are modeled based on site utilization, power output, and
            energy pricing. Actual returns may vary based on operational
            performance, utilization rates, and market conditions. Past
            projections are not guarantees of future results.
          </p>
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="risk">
      <DeckSlide
        title="Risk Framework"
        subtitle="Every asset is categorized by its risk profile and return mechanics"
        accent="amber"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              level: "Low",
              color: "emerald",
              examples: "6 kW AC, 12 kW AC, 30 kW Urban",
              desc: "Steady demand from residential and workplace parking. Lower revenue per session but consistent utilization with minimal downtime.",
            },
            {
              level: "Medium",
              color: "amber",
              examples: "60 kW Retail, 120 kW Highway, 180 kW Ultra-Fast",
              desc: "Higher throughput and yield, with exposure to traffic variability, grid dependencies, and host-site commercial dynamics.",
            },
            {
              level: "High",
              color: "rose",
              examples: "240 kW Flagship, 350 kW Mega-Fast",
              desc: "Next-gen infrastructure with the highest yield potential. Sensitive to EV adoption curves, grid readiness, and long-term utilization ramps.",
            },
          ].map((risk) => (
            <div
              key={risk.level}
              className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
            >
              <RiskBadge level={risk.level} />
              <div className="mt-4 text-sm font-bold text-white">
                Examples
              </div>
              <div className="mt-1 text-sm text-blue-100/70">{risk.examples}</div>
              <div className="mt-4 text-sm font-bold text-white">
                Profile
              </div>
              <p className="mt-1 text-sm leading-7 text-blue-100/70">
                {risk.desc}
              </p>
            </div>
          ))}
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="why">
      <DeckSlide
        title="Why ZipInvest"
        subtitle="Platform differentiators that matter for infrastructure investors"
        accent="brand"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {marketplaceHighlights.map((item) => (
            <div
              key={item}
              className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2a56c6] text-white text-sm font-bold">
                  &#10003;
                </div>
                <p className="text-sm leading-7 text-blue-100/80">{item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
            Platform Pillars
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {[
              { label: "Asset-Backed", desc: "Every investment tied to physical hardware" },
              { label: "Transparent", desc: "Site-level data and utilization visible" },
              { label: "Flexible", desc: "Tickets from Rs 1.5K to Rs 2.2L+" },
              { label: "Active", desc: "Managed infrastructure not passive speculation" },
            ].map((pillar) => (
              <div key={pillar.label} className="text-center">
                <div className="text-sm font-bold text-white">
                  {pillar.label}
                </div>
                <div className="mt-1 text-xs text-blue-100/60">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="process">
      <DeckSlide
        title="How It Works"
        subtitle="From discovery to deployment in three steps"
        accent="cyan"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2a56c6] text-2xl font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-blue-100/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
            Investor Journey
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-100/70">
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              Home
            </span>
            <span className="text-blue-200/40">&#8594;</span>
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              Marketplace
            </span>
            <span className="text-blue-200/40">&#8594;</span>
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              Simulator
            </span>
            <span className="text-blue-200/40">&#8594;</span>
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
              Deploy
            </span>
          </div>
        </div>
      </DeckSlide>
    </Slide>,

    <Slide key="contact">
      <DeckSlide
        title="Get In Touch"
        subtitle="Ready to explore clean energy and mobility infrastructure as an asset class?"
        accent="brand"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Contact
              </div>
              <div className="mt-3 space-y-2 text-sm text-blue-100/80">
                <p>info@zip-bolt.com</p>
                <p>ZipInvest, a product of Zipbolt Innovations Pvt Ltd</p>
                <p>UG-006, Ground Floor</p>
                <p>MGF Metropolis Mall, Mehrauli - Gurgaon Road</p>
                <p>Gurugram, Haryana 122002, India</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Next Steps
              </div>
              <ul className="mt-3 space-y-2 text-sm text-blue-100/80">
                <li>1. Explore charger opportunities on the Marketplace</li>
                <li>2. Use the Investment Simulator to model returns</li>
                <li>3. Review the Risk Disclosure and KYC / AML Policy</li>
                <li>4. Sign in and deploy your allocation</li>
              </ul>
            </div>
            <div className="rounded-[16px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Legal Resources
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                <a href="/legal/terms-of-use.html" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition">Terms of Use</a>
                <a href="/legal/privacy-policy.html" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition">Privacy Policy</a>
                <a href="/legal/risk-disclosure.html" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition">Risk Disclosure</a>
                <a href="/legal/kyc-aml-policy.html" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition">KYC / AML Policy</a>
                <a href="/legal/investor-eligibility.html" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition">Investor Eligibility</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#calculator" className="primary-button px-8 py-4 text-base">
            Open Investment Simulator
          </a>
          <a href="#marketplace" className="secondary-button px-8 py-4 text-base">
            View Opportunities
          </a>
        </div>
      </DeckSlide>
    </Slide>,
  ];

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
        {/* Slide indicator */}
        <div className="sticky top-0 z-10 -mx-4 bg-[rgba(10,23,56,0.92)] backdrop-blur-xl border-b border-white/10 px-4 py-3 sm:mx-0 sm:rounded-none sm:border-none sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/70">
                Slide {currentSlide + 1} of {totalSlides}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                disabled={currentSlide === 0}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/8 text-blue-100/80 transition hover:bg-white/12 hover:text-white disabled:opacity-30 disabled:hover:translate-y-0"
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
                disabled={currentSlide === totalSlides - 1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/8 text-blue-100/80 transition hover:bg-white/12 hover:text-white disabled:opacity-30 disabled:hover:translate-y-0"
                aria-label="Next slide"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2a56c6] to-[#5f88f4] transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Slide content */}
        <div className="mt-6" key={currentSlide}>
          {slideComponents[currentSlide]}
        </div>

        {/* Slide dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-8 bg-[#2a56c6]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default InvestorDeckPage;
