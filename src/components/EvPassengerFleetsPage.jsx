import { useMemo, useState } from "react";
import evPassengerFleetImage from "../assets/ev-passenger-fleet.png";

const SEGMENT = {
  segment_id: "ev-passenger-fleets",
  name: "EV Passenger Fleets",
  short_description: "Move cities with clean mobility",
  description:
    "Invest in electric passenger mobility fleets serving airport routes, urban ride-hailing corridors, and premium shuttle operations.",
  image_url: evPassengerFleetImage,
  features: [
    "Airport Transfers",
    "Fleet Telemetry",
    "Ride-Hailing Routes",
    "Recurring Utilization",
  ],
  total_tvl: 24e6,
  investors_count: 1768,
};

const PLANS = [
  {
    plan_id: "airport-shuttle-pool",
    name: "Airport Shuttle Pool",
    min_investment: 300,
    max_investment: 9000,
    apy: 10,
    lock_period_days: 45,
    risk_level: "Low",
    description: "Entry exposure to airport shuttle and hotel transfer EV fleets.",
    tags: ["Frequent daily trips", "Fleet uptime tracking", "Low-ticket entry"],
  },
  {
    plan_id: "urban-ride-fleet",
    name: "Urban Ride Fleet",
    min_investment: 9000,
    max_investment: 35000,
    apy: 12.75,
    lock_period_days: 90,
    risk_level: "Medium",
    description: "Core passenger EV fleet strategy focused on city ride-hailing demand.",
    tags: ["Urban mobility demand", "Driver utilization metrics", "Balanced yield profile"],
  },
  {
    plan_id: "premium-intercity-fleet",
    name: "Premium Intercity Fleet",
    min_investment: 35000,
    max_investment: 125000,
    apy: 15.25,
    lock_period_days: 180,
    risk_level: "Medium",
    description: "Premium allocation into higher-value intercity and executive passenger EV routes.",
    tags: ["Higher ticket rides", "Executive routes", "Stronger revenue mix"],
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function FleetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M10 17h4" />
      <path d="M7 17H5a2 2 0 0 1-2-2v-5l2-5h14l2 5v5a2 2 0 0 1-2 2h-2" />
      <path d="M7 17a2 2 0 1 0 4 0" />
      <path d="M13 17a2 2 0 1 0 4 0" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-cyan-400"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-cyan-400"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-cyan-400"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-cyan-400"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 4 13C4 8 8 4 18 4c0 10-4 14-9 16Z" />
      <path d="M11 20v-8" />
      <path d="M7 12c2.2 0 4.2-.8 6-2.5" />
    </svg>
  );
}

function EvPassengerFleetsPage({ onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlanId, setSelectedPlanId] = useState("airport-shuttle-pool");
  const [investmentAmount, setInvestmentAmount] = useState(300);

  const selectedPlan = useMemo(
    () => PLANS.find((plan) => plan.plan_id === selectedPlanId) ?? PLANS[0],
    [selectedPlanId],
  );

  const dailyReturn = useMemo(
    () => investmentAmount * (selectedPlan.apy / 100) / 365,
    [investmentAmount, selectedPlan],
  );

  const monthlyReturn = useMemo(() => dailyReturn * 30, [dailyReturn]);

  const lockPeriodReturn = useMemo(
    () => investmentAmount * (selectedPlan.apy / 100) * (selectedPlan.lock_period_days / 365),
    [investmentAmount, selectedPlan],
  );

  const totalValue = useMemo(() => investmentAmount + lockPeriodReturn, [investmentAmount, lockPeriodReturn]);

  const sliderPercent = useMemo(() => {
    const range = selectedPlan.max_investment - selectedPlan.min_investment;
    if (range <= 0) {
      return 0;
    }

    return ((investmentAmount - selectedPlan.min_investment) / range) * 100;
  }, [investmentAmount, selectedPlan]);

  const riskMeterWidth = selectedPlan.risk_level === "Low" ? "28%" : "40%";
  const riskColor = selectedPlan.risk_level === "Low" ? "text-emerald-400" : "text-cyan-300";

  return (
    <div className="min-h-screen bg-[#02171b] text-slate-100">
      <section className="relative isolate overflow-hidden min-h-[320px] md:min-h-[420px]">
        <div className="absolute inset-0 h-full pointer-events-none">
          <img src={SEGMENT.image_url} alt={SEGMENT.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041013]/70 via-[#041013]/88 to-[#02171b]" />
        </div>
        <div className="relative mx-auto flex min-h-[320px] max-w-7xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 md:min-h-[420px] md:pb-14">
          <button
            type="button"
            onClick={onBack}
            className="mb-6 inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5"
          >
            <ArrowLeftIcon />
            Back to Segments
          </button>
          <div className="mt-auto flex items-start gap-4">
            <div className="rounded-2xl bg-cyan-400/18 p-4 text-cyan-300 backdrop-blur-sm">
              <FleetIcon />
            </div>
            <div>
              <h1 className="mb-2 font-['Outfit'] text-3xl font-bold text-white md:text-4xl">
                {SEGMENT.name}
              </h1>
              <p className="max-w-2xl text-base text-slate-300 md:text-lg">{SEGMENT.short_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.95fr)_390px]">
          <div className="space-y-8">
            <div className="inline-flex h-11 w-full items-center rounded-2xl border border-white/6 bg-white/[0.04] p-1 text-slate-400">
              {[
                { id: "overview", label: "Overview" },
                { id: "plans", label: "Investment Plans" },
                { id: "sustainability", label: "Sustainability" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#031013] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
                  <h3 className="font-['Outfit'] text-xl font-semibold text-white md:text-2xl">About This Segment</h3>
                  <p className="mt-5 max-w-4xl text-base leading-8 text-slate-100 md:text-lg">{SEGMENT.description}</p>
                  <h4 className="mt-8 text-lg font-semibold text-white">Key Features</h4>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {SEGMENT.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-base text-white md:text-lg">
                        <CheckIcon />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-cyan-400/12 p-4">
                        <TrendingUpIcon />
                      </div>
                      <div>
                        <p className="text-base text-slate-300">Total Value Locked</p>
                        <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">
                          Rs 24.0M
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-cyan-400/12 p-4">
                        <ShieldIcon />
                      </div>
                      <div>
                        <p className="text-base text-slate-300">Active Investors</p>
                        <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">
                          {SEGMENT.investors_count.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "plans" && (
              <div className="space-y-5">
                {PLANS.map((plan) => (
                  <button
                    key={plan.plan_id}
                    type="button"
                    onClick={() => {
                      setSelectedPlanId(plan.plan_id);
                      setInvestmentAmount(plan.min_investment);
                    }}
                    className={`grid w-full gap-6 rounded-[22px] border px-6 py-7 text-left transition-all lg:grid-cols-[minmax(0,1fr)_170px] ${
                      selectedPlanId === plan.plan_id
                        ? "border-cyan-400 bg-[linear-gradient(180deg,rgba(20,40,42,0.92),rgba(12,27,30,0.92))] shadow-[0_0_0_1px_rgba(34,211,238,0.28),0_28px_60px_rgba(0,0,0,0.22)]"
                        : "border-white/10 bg-white/[0.035] shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-['Outfit'] text-xl font-semibold text-white md:text-2xl">{plan.name}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-sm font-semibold text-white">
                          {plan.risk_level} Risk
                        </span>
                      </div>
                      <p className="mt-4 text-base leading-7 text-slate-100">{plan.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {plan.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-white/10 lg:border-l lg:pl-10">
                      <div className="text-right">
                        <div className="text-4xl font-bold tracking-[-0.05em] text-cyan-300 md:text-5xl">
                          {plan.apy}%
                        </div>
                        <div className="mt-1 text-base font-semibold text-white">APY</div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-2 text-base text-slate-200">
                        <ClockIcon />
                        <span>{plan.lock_period_days} days</span>
                      </div>
                      <div className="mt-4 text-right text-base font-semibold text-white">
                        Rs {plan.min_investment.toLocaleString()} - Rs {plan.max_investment.toLocaleString()}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
                <h3 className="font-['Outfit'] text-xl font-semibold text-white md:text-2xl">Environmental Impact</h3>
                <p className="mt-6 max-w-4xl text-base leading-8 text-slate-100 md:text-lg">
                  Your investment in EV Passenger Fleets contributes directly to reducing carbon emissions and
                  supporting the transition to sustainable energy infrastructure.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-[20px] bg-white/[0.03] p-6 text-center">
                    <div className="flex justify-center">
                      <LeafIcon />
                    </div>
                    <div className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">Carbon Neutral</div>
                    <div className="mt-2 text-lg text-slate-100 md:text-xl">Operations</div>
                  </div>
                  <div className="rounded-[20px] bg-white/[0.03] p-6 text-center">
                    <div className="flex justify-center">
                      <TrendingUpIcon />
                    </div>
                    <div className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">100%</div>
                    <div className="mt-2 text-lg text-slate-100 md:text-xl">Renewable Energy</div>
                  </div>
                  <div className="rounded-[20px] bg-white/[0.03] p-6 text-center">
                    <div className="flex justify-center">
                      <ShieldIcon />
                    </div>
                    <div className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">Verified</div>
                    <div className="mt-2 text-lg text-slate-100 md:text-xl">ESG Compliance</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-[22px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
              <div className="font-['Outfit'] text-xl font-semibold text-white md:text-2xl">Investment Calculator</div>

              <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold text-white">{selectedPlan.name}</div>
                  <div className="rounded-full bg-cyan-400 px-4 py-1.5 text-sm font-bold text-[#042124]">
                    {selectedPlan.apy}% APY
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-base text-slate-200">
                  <ClockIcon />
                  <span>{selectedPlan.lock_period_days} days lock period</span>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-lg font-medium text-white">Investment Amount</label>
                  <span className="text-xl font-bold text-cyan-300 md:text-2xl">Rs {investmentAmount.toLocaleString()}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-cyan-400/25">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${sliderPercent}%` }} />
                </div>
                <div className="mt-2 flex justify-between text-sm font-medium text-slate-300 md:text-base">
                  <span>Rs {selectedPlan.min_investment.toLocaleString()}</span>
                  <span>Rs {selectedPlan.max_investment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={selectedPlan.min_investment}
                  max={selectedPlan.max_investment}
                  value={investmentAmount}
                  onChange={(event) => setInvestmentAmount(Number(event.target.value))}
                  className="mt-3 h-0 w-full cursor-pointer appearance-none bg-transparent"
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-3">
                  <label className="text-lg font-medium text-white">Risk Level</label>
                  <span className={`text-xl font-semibold ${riskColor}`}>{selectedPlan.risk_level}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-cyan-400/20">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: riskMeterWidth }} />
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <div className="text-xl font-semibold text-white md:text-2xl">Projected Returns</div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-[18px] bg-white/[0.03] p-4">
                    <div className="text-sm text-slate-300 md:text-base">Daily</div>
                    <div className="mt-2 text-2xl font-bold tracking-[-0.04em] text-cyan-300 md:text-3xl">
                      Rs {dailyReturn.toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-[18px] bg-white/[0.03] p-4">
                    <div className="text-sm text-slate-300 md:text-base">Monthly</div>
                    <div className="mt-2 text-2xl font-bold tracking-[-0.04em] text-cyan-300 md:text-3xl">
                      Rs {monthlyReturn.toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-[18px] bg-white/[0.03] p-4">
                    <div className="text-sm text-slate-300 md:text-base">Lock Period</div>
                    <div className="mt-2 text-2xl font-bold tracking-[-0.04em] text-cyan-300 md:text-3xl">
                      Rs {lockPeriodReturn.toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-[18px] bg-white/[0.03] p-4">
                    <div className="text-sm text-slate-300 md:text-base">Total Value</div>
                    <div className="mt-2 text-2xl font-bold tracking-[-0.04em] text-cyan-300 md:text-3xl">
                      Rs {totalValue.toFixed(3)}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-4 text-lg font-medium text-[#042124] transition hover:bg-cyan-300 md:text-xl"
              >
                Sign In to Invest
              </button>
              <p className="mt-6 text-center text-sm text-slate-400">
                By investing, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EvPassengerFleetsPage;
