import { useState } from "react";
import {
  investyzSegmentsLive,
  segmentBenefits,
  segmentShowcaseStats,
  trustedCertifications,
} from "../data/content";

const TRUST_ICONS = ["🏆", "🏅", "✅", "🌱"];

function SegmentsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedSegmentId, setExpandedSegmentId] = useState(null);

  const showLive = activeTab === "all" || activeTab === "live";

  return (
    <main className="pb-20 pt-6 sm:pt-10">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] space-y-8 md:w-[min(1180px,calc(100%-32px))]">

        {/* ── HERO ── */}
        <section className="segments-hero">
          <div className="segments-hero-dots" />
          <div className="segments-orbit segments-orbit-a" />
          <div className="segments-orbit segments-orbit-b" />
          <div className="segments-orbit segments-orbit-c" />

          <div className="relative z-10 space-y-6">
            {/* Live pill */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" style={{ animation: "glowPulse 2s ease-in-out infinite" }} />
              Live on Polygon Network
            </div>

            {/* Heading */}
            <div className="max-w-4xl space-y-4">
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #34d399 100%)" }}>
                  AI-Powered
                </span>
                <span className="block text-white">Investment</span>
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)" }}>
                  Segments
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                By integrating Agentic AI, we move beyond diagnostics into self-diagnosing
                infrastructure while you diversify across sustainable categories.
              </p>
            </div>

            {/* Tabs + CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="seg-tab-bar">
                {["all", "live"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`seg-tab${activeTab === tab ? " seg-tab-active" : ""}`}
                  >
                    {tab === "all" ? "All" : "🟢 Live"}
                  </button>
                ))}
              </div>
              <a href="#segment-grid" className="primary-button">
                View All Segments
              </a>
            </div>

            {/* Quick stats strip */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Active Segments", value: "4" },
                { label: "Total TVL", value: "Rs 190M+" },
                { label: "Active Investors", value: "13K+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm backdrop-blur-sm"
                >
                  <span className="font-black text-white">{s.value}</span>
                  <span className="text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIVE SEGMENTS GRID ── */}
        {showLive && (
          <section id="segment-grid" className="space-y-4">
            <div className="flex items-center gap-3 px-1">
              <span className="seg-section-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Live Now
              </p>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-700">
                {investyzSegmentsLive.length} Active
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {investyzSegmentsLive.map((segment) => (
                <article key={segment.id} className="segments-live-card">
                  <div className={`segments-live-glow bg-gradient-to-br ${segment.accent}`} />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="seg-live-icon">{segment.icon}</div>
                      <span className="seg-live-apy-badge">↑ {segment.apy} APY</span>
                    </div>

                    <div className="seg-live-placeholder">
                      <div className="seg-live-placeholder-inner">
                        {segment.image ? (
                          <img 
                            src={segment.image} 
                            alt={segment.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="seg-live-placeholder-label">Image placeholder</span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{segment.category}</p>
                        <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.04em] text-white">{segment.title}</h3>
                      </div>
                      {segment.details && (
                        <button
                          type="button"
                          className={`seg-live-toggle ${expandedSegmentId === segment.id ? 'is-open' : ''}`}
                          onClick={() => setExpandedSegmentId((current) => (current === segment.id ? null : segment.id))}
                          aria-expanded={expandedSegmentId === segment.id}
                        >
                          <span>{expandedSegmentId === segment.id ? 'Hide' : 'Details'}</span>
                          <svg viewBox="0 0 20 20" fill="none" className="seg-live-toggle-icon" aria-hidden="true">
                            <path d="M5 8.5l5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className="mt-2 text-sm font-semibold text-cyan-200">{segment.metric}</div>

                    <p className="mt-3 text-sm leading-7 text-slate-300">{segment.description}</p>

                    {segment.details && expandedSegmentId === segment.id && (
                      <div className="segments-live-expansion">
                        <div className="segments-live-expansion-heading">{segment.details.title}</div>
                        <p className="segments-live-expansion-copy">{segment.details.subtitle}</p>
                        <div className="segments-live-expansion-features">
                          {segment.details.features.map((feature) => (
                            <span key={feature} className="segments-live-expansion-tag">{feature}</span>
                          ))}
                        </div>
                        <div className="segments-live-expansion-stats">
                          {segment.details.snapshot.map((item) => (
                            <div key={item.label} className="segments-live-expansion-stat">
                              <div className="segments-live-expansion-stat-label">{item.label}</div>
                              <div className="segments-live-expansion-stat-value">{item.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {segment.tags.map((tag) => (
                        <span key={tag} className="seg-live-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="seg-metric-block">
                      <div className="seg-metric-item-light">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Total TVL</div>
                        <div className="mt-1.5 text-lg font-black tracking-[-0.04em] text-slate-950">{segment.tvl}</div>
                      </div>
                      <div className="seg-metric-item">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Investors</div>
                        <div className="mt-1.5 text-lg font-black tracking-[-0.04em] text-white">{segment.investors}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── SHOWCASE STATS ── */}
        <section className="segments-stats-shell">
          <div className="mb-6">
            <span className="seg-section-accent" />
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#081327]">
              Platform at a Glance
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {segmentShowcaseStats.map((item) => (
              <article key={item.label} className="segments-stat-card">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </div>
                <div className="mt-3 seg-stat-counter">
                  {item.value}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="segments-benefits-shell">
          <div className="max-w-2xl">
            <span className="seg-section-accent" style={{ backgroundImage: "linear-gradient(90deg, #34d399, #38bdf8)" }} />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Why ZipInvest?
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
              Combining the power of DeFi with real-world sustainable infrastructure
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {segmentBenefits.map((item) => (
              <article key={item.title} className="segments-benefit-card">
                <div className="seg-benefit-icon">{item.icon}</div>
                <div className="text-lg font-black tracking-[-0.03em] text-white">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
                <div className="mt-5 text-4xl font-black tracking-[-0.05em] text-white">
                  {item.stat}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/80">
                  {item.statLabel}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TRUSTED & CERTIFIED ── */}
        <section className="segments-trust-shell">
          <div className="max-w-2xl">
            <span className="seg-section-accent" style={{ backgroundImage: "linear-gradient(90deg, #2a56c6, #38bdf8)" }} />
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
                <div className="seg-trust-badge">{TRUST_ICONS[idx]}</div>
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

      </div>
    </main>
  );
}

export default SegmentsPage;
