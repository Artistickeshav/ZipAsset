import { useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import InvestmentCalculator from "./components/InvestmentCalculator";
import SegmentsGrid from "./components/SegmentsGrid";
import Footer from "./components/Footer";
import ChargerOpportunityPage from "./components/ChargerOpportunityPage";
import InvestorDeckPage from "./components/InvestorDeckPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactPage from "./components/ContactPage";
import FAQPage from "./components/FAQPage";
import SegmentsPage from "./components/SegmentsPage";
import BatteryStoragePage from "./components/BatteryStoragePage";
import EvChargingPage from "./components/EvChargingPage";
import EvPassengerFleetsPage from "./components/EvPassengerFleetsPage";
import { marketStats, marketplaceHighlights, segments, steps, trustedCertifications } from "./data/content";
import startupIndiaLogo from "./assets/startup-india-certified.png";
import msmeRegisteredLogo from "./assets/msme-registered.jpg";
import iso9001Logo from "./assets/iso-9001-certified.png";
import iso14001Logo from "./assets/iso-14001-certified.png";

const TRUST_ICONS = [
  startupIndiaLogo,
  msmeRegisteredLogo,
  iso9001Logo,
  iso14001Logo,
];

const getRouteFromHash = () => {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash.startsWith("charger/")) {
    return { page: "charger", segmentId: hash.slice("charger/".length), anchor: null };
  }

  if (hash === "investordeck") {
    return { page: "investordeck", segmentId: null, anchor: null };
  }

  if (hash === "segments") {
    return { page: "segments", segmentId: null, anchor: null };
  }

  if (hash === "contact") {
    return { page: "contact", segmentId: null, anchor: null };
  }

  if (hash === "aboutus") {
    return { page: "aboutus", segmentId: null, anchor: null };
  }

  if (hash === "faq") {
    return { page: "faq", segmentId: null, anchor: null };
  }

  if (hash === "battery-storage") {
    return { page: "battery-storage", segmentId: null, anchor: null };
  }

  if (hash === "ev-charging") {
    return { page: "ev-charging", segmentId: null, anchor: null };
  }

  if (hash === "ev-passenger-fleets") {
    return { page: "ev-passenger-fleets", segmentId: null, anchor: null };
  }

  return { page: "home", segmentId: null, anchor: hash || null };
};

function App() {
  const [selectedSegmentId, setSelectedSegmentId] = useState("charger-60kw");
  const [investmentAmount, setInvestmentAmount] = useState(15000);
  const [route, setRoute] = useState(() => getRouteFromHash());
  const [spotlightIndex, setSpotlightIndex] = useState(
    () => segments.findIndex((segment) => segment.id === "charger-60kw") ?? 0,
  );
  const [isSpotlightPaused, setIsSpotlightPaused] = useState(false);

  const selectedSegment = useMemo(
    () => segments.find((segment) => segment.id === selectedSegmentId) ?? segments[0],
    [selectedSegmentId],
  );

  const spotlightSegment = useMemo(
    () => segments[spotlightIndex] ?? segments[0],
    [spotlightIndex],
  );

  useEffect(() => {
    if (
      investmentAmount < selectedSegment.minAmount ||
      investmentAmount > selectedSegment.maxAmount
    ) {
      setInvestmentAmount(selectedSegment.minAmount);
    }
  }, [investmentAmount, selectedSegment]);

  useEffect(() => {
    if (isSpotlightPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setSpotlightIndex((current) => (current + 1) % segments.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isSpotlightPaused]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (route.page !== "home" || !route.anchor) {
      return undefined;
    }

    const scrollToAnchor = () => {
      if (route.anchor === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.getElementById(route.anchor);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToAnchor, 0);
    return () => window.clearTimeout(timeoutId);
  }, [route]);

  const annualIncome = Math.round(investmentAmount * (selectedSegment.yieldRate / 100));
  const monthlyIncome = Math.round(annualIncome / 12);
  const investorReasons = [
    marketplaceHighlights[0],
    marketplaceHighlights[1],
    "Target yields up to 14% APY across segments with risk-adjusted participation options.",
    "Sustainable mobility exposure built around real deployment, recurring revenue, and disciplined payouts.",
  ];

  const handleOpenOpportunity = (segmentId) => {
    setSelectedSegmentId(segmentId);
    window.location.hash = `charger/${segmentId}`;
  };

  const handleBackToMarketplace = () => {
    window.location.hash = "marketplace";
  };

  const handleOpenSimulator = (segmentId) => {
    setSelectedSegmentId(segmentId);
    window.location.hash = "calculator";
  };

  const routeSegment = route.page === "charger"
    ? segments.find((segment) => segment.id === route.segmentId) ?? selectedSegment
    : null;

  return (
    <div className="app-shell text-slate-900">
      <div className="app-orb app-orb-a" />
      <div className="app-orb app-orb-b" />
      <div className="app-orb app-orb-c" />

      <Header />

      {route.page === "charger" && routeSegment ? (
        <ChargerOpportunityPage
          segment={routeSegment}
          onBackToMarketplace={handleBackToMarketplace}
          onOpenSimulator={() => handleOpenSimulator(routeSegment.id)}
        />
      ) : route.page === "investordeck" ? (
        <InvestorDeckPage />
      ) : route.page === "segments" ? (
        <SegmentsPage />
      ) : route.page === "contact" ? (
        <ContactPage />
      ) : route.page === "aboutus" ? (
        <AboutUsPage />
      ) : route.page === "faq" ? (
        <FAQPage />
      ) : route.page === "battery-storage" ? (
        <BatteryStoragePage onBack={() => (window.location.hash = "segments")} />
      ) : route.page === "ev-charging" ? (
        <EvChargingPage onBack={() => (window.location.hash = "segments")} />
      ) : route.page === "ev-passenger-fleets" ? (
        <EvPassengerFleetsPage onBack={() => (window.location.hash = "segments")} />
      ) : (
      <main id="top" className="pb-12 pt-6 sm:pt-8">
        <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
          <section className="hero-panel hero-panel-zip space-y-8 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className="hero-copy space-y-6">
                <div className="eyebrow-chip eyebrow-chip-zip hero-kicker">
                  Invest in the backbone of electric mobility
                </div>

                <div className="space-y-4">
                  <h1 className="hero-title max-w-4xl text-5xl font-medium uppercase leading-[0.94] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-[5.5rem]">
                    <span className="hero-title-line">Invest in India&apos;s</span>
                    <span className="hero-title-line">Next-Gen Energy</span>
                    <span className="hero-title-line">&amp; Mobility</span>
                    <span className="hero-title-line">Infrastructure</span>
                  </h1>
                  <p className="hero-subtitle max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    Invest in clean energy and mobility infrastructure built for stable returns and long-term growth.
                  </p>
                </div>

                <div className="hero-cta-row flex flex-wrap gap-3">
                  <a href="#calculator" className="primary-button hero-button-primary">
                    Get started
                  </a>
                  <a href="#segments" className="secondary-button hero-button-secondary">
                    View opportunities
                  </a>
                </div>
              </div>

              <div
                className="hero-showcase"
                onMouseEnter={() => setIsSpotlightPaused(true)}
                onMouseLeave={() => setIsSpotlightPaused(false)}
              >
                <div className="hero-showcase-card hero-showcase-card-back" />
                <div className="hero-showcase-card hero-showcase-card-mid" />

                <div className="hero-showcase-front theme-shell">
                  <div className="flex items-center justify-between gap-3">
                    <span className="theme-card-title text-xs font-semibold uppercase tracking-[0.3em]">
                      Network spotlight
                    </span>
                    <span className="theme-badge rounded-full px-3 py-1.5 text-xs font-semibold">
                      Live pool
                    </span>
                  </div>

                  <div className="theme-dark-card mt-6 rounded-[30px] p-6 text-white">
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                      {spotlightSegment.power}
                    </div>
                    <div className="mt-3 text-3xl font-black tracking-[-0.05em]">
                      {spotlightSegment.name}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-blue-100/80">
                      {spotlightSegment.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {spotlightSegment.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="theme-dark-pill rounded-full px-3 py-2 text-xs font-semibold">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="theme-dark-metric rounded-[24px] px-4 py-4 text-slate-950">
                        <div className="text-sm font-semibold text-slate-500">Expected APY</div>
                        <div className="mt-1 text-3xl font-black tracking-[-0.04em]">
                          {spotlightSegment.yieldRate}%
                        </div>
                      </div>
                      <div className="theme-dark-sidecard rounded-[24px] px-4 py-4">
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                          Site type
                        </div>
                        <div className="mt-1 text-base font-semibold text-white">
                          {spotlightSegment.site}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {segments.slice(0, 5).map((segment, index) => (
                        <button
                          key={segment.id}
                          type="button"
                          className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                            index === spotlightIndex
                              ? "theme-dark-chip theme-dark-chip-active text-white"
                              : "theme-dark-chip text-slate-100 hover:-translate-y-0.5"
                          }`}
                          onClick={() => setSpotlightIndex(index)}
                        >
                          {segment.power}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="grid gap-3 sm:grid-cols-3">
                {marketStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="theme-stat-card glass-card glass-card-compact animate-rise"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-black tracking-[-0.05em] text-[#0a1738]">
                      {stat.value}
                    </div>
                    <div className="theme-stat-label mt-2 text-xs font-semibold uppercase tracking-[0.28em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="theme-card glass-card trusted-strip rounded-[30px] p-5">
                <div className="theme-card-title text-xs font-semibold uppercase tracking-[0.32em]">
                  Built for
                </div>
                <div className="trusted-slider mt-4">
                  <div className="trusted-slider-track">
                    {[
                      "Retail investors",
                      "Fleet operators",
                      "Infrastructure partners",
                      "Retail investors",
                      "Fleet operators",
                      "Infrastructure partners",
                    ].map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="trusted-chip"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="calculator" className="mt-8 grid gap-8 xl:items-stretch xl:grid-cols-[1fr_475px]">
            <div className="glass-card flex h-full flex-col rounded-[30px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Opportunity overview
              </p>
              <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.04em] text-slate-950">
                India&apos;s clean energy and mobility infrastructure is scaling across four key segments
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "EV DC Fast Charging",
                    body: "High-power charging stations across retail, fleet, and highway corridors delivering rapid turnaround and premium revenue.",
                  },
                  {
                    title: "Battery Energy Storage",
                    body: "Strategic energy storage systems supporting grid stability, peak shaving, and long-duration energy management.",
                  },
                  {
                    title: "EV Passenger Fleets",
                    body: "Intelligent charging and fleet optimization for passenger transport with adaptive scheduling and uptime maximization.",
                  },
                  {
                    title: "EV Cargo Fleets",
                    body: "Commercial logistics infrastructure linking charging, route efficiency, and delivery schedules for operational optimization.",
                  },
                ].map((item) => (
                  <div key={item.title} className="metric-tile p-5">
                    <div className="text-lg font-bold text-slate-950">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <InvestmentCalculator
              segments={segments}
              selectedSegmentId={selectedSegmentId}
              investmentAmount={investmentAmount}
              selectedSegment={selectedSegment}
              annualIncome={annualIncome}
              monthlyIncome={monthlyIncome}
              onSegmentChange={setSelectedSegmentId}
              onInvestmentChange={setInvestmentAmount}
            />
          </section>

          <section className="segments-trust-shell mt-10">
            <div className="max-w-2xl">
              <span
                className="seg-section-accent"
                style={{ backgroundImage: "linear-gradient(90deg, #2a56c6, #38bdf8)" }}
              />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4d67a8]">
                Trusted & Certified Platform
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#081327]">
                Built on trust, backed by credentials
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustedCertifications.map((item, idx) => (
                <article key={item} className="segments-trust-card">
                  <div className="seg-trust-badge">
                    <img 
                      src={TRUST_ICONS[idx]} 
                      alt={item}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-black tracking-[-0.03em] text-[#081327]">
                    {item}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500">
                    Verified certification for platform operations
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="marketplace" className="mt-10">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  Marketplace
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
                  Available charger opportunities
                </h2>
              </div>
            </div>

            <SegmentsGrid
              segments={segments}
              selectedSegmentId={selectedSegmentId}
              onSelectSegment={handleOpenOpportunity}
            />
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="glass-card rounded-[30px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Why investors choose ZipInvest
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
                Built for scalable clean energy and mobility assets
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {investorReasons.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/80 bg-white/80 p-4 text-sm leading-7 text-slate-600 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="process-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                How it works
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => (
                  <div key={step.title} className="process-step">
                    <div className="text-4xl font-black tracking-[-0.05em] text-slate-950">
                      {index + 1}
                    </div>
                    <h4 className="mt-3 text-lg font-bold text-slate-950">{step.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      )}

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
