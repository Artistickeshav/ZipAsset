import { formatRs } from "../utils/format";

function ChargerOpportunityPage({ segment, onBackToMarketplace, onOpenSimulator }) {
  const planMidpoint = Math.round((segment.minAmount + segment.maxAmount) / 2);
  const plans = [
    {
      label: "Starter ticket",
      amount: segment.minAmount,
      note: "Entry allocation for first-pass exposure to this charger class.",
    },
    {
      label: "Core allocation",
      amount: planMidpoint,
      note: "Balanced participation for investors comparing yield and lock period.",
    },
    {
      label: "Full allocation",
      amount: segment.maxAmount,
      note: "Highest modeled allocation within the current opportunity range.",
    },
  ];

  const annualReturn = (amount) => Math.round(amount * (segment.yieldRate / 100));

  return (
    <main className="pb-10 pt-4 sm:pt-6 md:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-16px))] sm:w-[min(1480px,calc(100%-24px))] md:w-[min(1480px,calc(100%-32px))]">
        <section className="hero-panel hero-panel-zip overflow-visible p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBackToMarketplace}
              className="secondary-button"
            >
              Back to marketplace
            </button>
            <div className="rounded-full border border-[#dbe4ff] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2a56c6]">
              Opportunity detail
            </div>
          </div>

          <div className="mt-4 grid gap-6 sm:mt-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="eyebrow-chip bg-white text-[#0a1738]">
                {segment.power} • {segment.useCase}
              </div>
              <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.05em] text-slate-950 sm:text-4xl sm:mt-5 lg:text-[4.6rem]">
                {segment.name}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 sm:mt-5 md:text-lg">
                {segment.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {segment.features.map((feature) => (
                  <span key={feature} className="soft-pill bg-white text-slate-700">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenSimulator}
                  className="primary-button"
                >
                  Continue to investment studio
                </button>
                <button
                  type="button"
                  onClick={onBackToMarketplace}
                  className="secondary-button"
                >
                  Compare other chargers
                </button>
              </div>
            </div>

            <div className="glass-card rounded-[26px] p-4 sm:rounded-[32px] sm:p-5">
              <div className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#fdfefe_0%,#eef4ff_100%)] sm:rounded-[28px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_bottom,rgba(42,86,198,0.1),transparent_42%)]" />
                <img
                  src={segment.image}
                  alt={segment.name}
                  className="relative z-10 mx-auto h-[16rem] w-full object-contain p-4 sm:h-[20rem] sm:p-6 md:h-[24rem]"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="metric-tile">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Expected APY
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
                    {segment.yieldRate}%
                  </div>
                </div>
                <div className="metric-tile">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Lock period
                  </div>
                  <div className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
                    {segment.lockDays}d
                  </div>
                </div>
                <div className="metric-tile">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Minimum ticket
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
                    {formatRs(segment.minAmount)}
                  </div>
                </div>
                <div className="metric-tile">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Ideal site type
                  </div>
                  <div className="mt-2 text-base font-bold text-slate-950">
                    {segment.site}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[1fr_0.96fr]">
          <div className="glass-card rounded-[30px] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Opportunity context
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
              What this charger is built to do
            </h2>

            <div className="mt-6 grid gap-4">
              <div className="metric-tile p-5">
                <div className="text-lg font-bold text-slate-950">Deployment fit</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  This opportunity is structured around <strong>{segment.site}</strong>, where the
                  operational thesis depends on {segment.useCase.toLowerCase()} and repeatable site-level demand.
                </p>
              </div>
              <div className="metric-tile p-5">
                <div className="text-lg font-bold text-slate-950">Return profile</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The current modeled profile targets <strong>{segment.yieldRate}% APY</strong> with
                  a <strong>{segment.lockDays}-day</strong> lock period, positioning this charger in the
                  <strong> {segment.riskLevel.toLowerCase()}</strong> risk bucket used on ZipAsset.
                </p>
              </div>
            </div>
          </div>

          <div className="process-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Investment plans
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
              Example allocation paths
            </h2>
            <div className="mt-6 grid gap-4">
              {plans.map((plan) => (
                <div key={plan.label} className="process-step">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-bold text-slate-950">{plan.label}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{plan.note}</p>
                    </div>
                    <div className="rounded-[18px] bg-white px-4 py-3 text-right shadow-[0_12px_24px_rgba(15,23,42,0.06)]">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Ticket size
                      </div>
                      <div className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">
                        {formatRs(plan.amount)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="metric-tile">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Annual projection
                      </div>
                      <div className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">
                        {formatRs(annualReturn(plan.amount))}
                      </div>
                    </div>
                    <div className="metric-tile">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Lock period return
                      </div>
                      <div className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">
                        {formatRs((plan.amount * (segment.yieldRate / 100) * segment.lockDays / 365).toFixed(2))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-[#dbe4ff] bg-white p-5">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2a56c6]">
                Next step
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                When you are ready, continue to the investment studio to set a ticket size, preview
                daily and monthly return estimates, and review the selected charger inside the platform workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="glass-card rounded-[30px] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Risk drivers
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
              What could affect outcomes
            </h2>
          <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
              {segment.riskDrivers.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/80 bg-white/80 p-4 text-sm leading-7 text-slate-600 shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ChargerOpportunityPage;
