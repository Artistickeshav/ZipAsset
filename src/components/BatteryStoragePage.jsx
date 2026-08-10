import { useState, useMemo } from "react";
import bessSystemImage from "../assets/bess-system.png";

const SEGMENT = {
  segment_id: "battery-storage",
  name: "Battery Energy Storage",
  short_description: "Store energy, power futures",
  description:
    "Support grid-scale battery storage systems that store renewable energy and stabilize power grids.",
  image_url: bessSystemImage,
  icon: "Battery",
  features: ["Grid Stabilization", "Peak Shaving", "Frequency Regulation", "Backup Power"],
  total_tvl: 32e6,
  investors_count: 1923,
  apy_range: { min: 9, max: 18 },
  risk_level: "Low",
  min_investment: 250,
};

const PLANS = [
  {
    plan_id: "bs-basic",
    segment_id: "battery-storage",
    name: "Cell Pack",
    min_investment: 250,
    max_investment: 10000,
    apy: 9,
    lock_period_days: 30,
    risk_level: "Low",
    description: "Start your journey in energy storage",
    features: ["Stable returns", "Weekly payouts", "Low risk"],
  },
  {
    plan_id: "bs-module",
    segment_id: "battery-storage",
    name: "Module Array",
    min_investment: 10000,
    max_investment: 50000,
    apy: 13.5,
    lock_period_days: 120,
    risk_level: "Medium",
    description: "Scale your energy storage investment",
    features: ["Enhanced APY", "Grid revenue share", "Quarterly bonuses"],
  },
  {
    plan_id: "bs-grid",
    segment_id: "battery-storage",
    name: "Grid Station",
    min_investment: 50000,
    max_investment: 200000,
    apy: 18,
    lock_period_days: 365,
    risk_level: "High",
    description: "Institutional-grade storage investment",
    features: ["Maximum returns", "Asset tokenization", "Governance rights"],
  },
];

function BatteryIcon() {
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
      className="lucide lucide-battery h-6 w-6"
      aria-hidden="true"
    >
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
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
      className="lucide lucide-circle-check-big h-4 w-4 text-teal-400 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
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
      className="lucide lucide-trending-up h-5 w-5 text-teal-400"
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
      className="lucide lucide-shield h-5 w-5 text-teal-400"
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
      className="lucide lucide-clock h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

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
      className="lucide lucide-arrow-left h-4 w-4"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function BatteryStoragePage({ onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlanId, setSelectedPlanId] = useState("bs-basic");
  const [investmentAmount, setInvestmentAmount] = useState(250);

  const selectedPlan = useMemo(
    () => PLANS.find((p) => p.plan_id === selectedPlanId) ?? PLANS[0],
    [selectedPlanId]
  );

  const dailyReturn = useMemo(
    () => (investmentAmount * (selectedPlan.apy / 100) / 365),
    [investmentAmount, selectedPlan]
  );

  const monthlyReturn = useMemo(
    () => dailyReturn * 30,
    [dailyReturn]
  );

  const lockPeriodReturn = useMemo(
    () => investmentAmount * (selectedPlan.apy / 100) * (selectedPlan.lock_period_days / 365),
    [investmentAmount, selectedPlan]
  );

  const totalValue = useMemo(
    () => investmentAmount + lockPeriodReturn,
    [investmentAmount, lockPeriodReturn]
  );

  const sliderPercent = useMemo(() => {
    const range = selectedPlan.max_investment - selectedPlan.min_investment;
    if (range <= 0) return 0;
    return ((investmentAmount - selectedPlan.min_investment) / range) * 100;
  }, [investmentAmount, selectedPlan]);

  const riskColor =
    selectedPlan.risk_level === "Low"
      ? "text-green-400"
      : selectedPlan.risk_level === "Medium"
        ? "text-amber-400"
        : "text-rose-400";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] md:min-h-[420px]">
        <div className="absolute inset-0 h-full pointer-events-none">
          <img
            src={SEGMENT.image_url}
            alt={SEGMENT.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pb-14 min-h-[360px] md:min-h-[420px] flex flex-col">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mb-6 text-slate-200"
          >
            <ArrowLeftIcon />
            Back to Segments
          </button>
          <div className="flex items-start gap-4 mt-auto">
            <div className="p-4 rounded-2xl bg-teal-500/20 backdrop-blur-sm text-teal-400">
              <BatteryIcon />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-2 text-white">
                {SEGMENT.name}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl">{SEGMENT.short_description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="w-full"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-9 items-center rounded-lg bg-slate-900 p-1 text-slate-400 w-full justify-start"
                tabIndex={0}
              >
                {[
                  { id: "overview", label: "Overview" },
                  { id: "plans", label: "Investment Plans" },
                  { id: "sustainability", label: "Sustainability" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`content-${tab.id}`}
                    data-state={activeTab === tab.id ? "active" : "inactive"}
                    id={`trigger-${tab.id}`}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-slate-950 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    data-testid={`tab-${tab.id}`}
                    tabIndex={-1}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Overview Tab */}
              <div
                data-state={activeTab === "overview" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-overview"
                id="content-overview"
                tabIndex={0}
                className={`mt-6 ${activeTab === "overview" ? "" : "hidden"}`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 font-['Outfit']">About This Segment</h3>
                    <p className="text-slate-400 mb-6">{SEGMENT.description}</p>
                    <h4 className="font-semibold mb-3 text-slate-200">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {SEGMENT.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckIcon />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-teal-500/10">
                          <TrendingUpIcon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Total Value Locked</p>
                          <p className="text-2xl font-bold text-white">
                            Rs {(SEGMENT.total_tvl / 1e6).toFixed(1)}M
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-teal-500/10">
                          <ShieldIcon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Active Investors</p>
                          <p className="text-2xl font-bold text-white">
                            {SEGMENT.investors_count.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Plans Tab */}
              <div
                data-state={activeTab === "plans" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-plans"
                id="content-plans"
                tabIndex={0}
                className={`mt-6 ${activeTab === "plans" ? "" : "hidden"}`}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {PLANS.map((plan) => (
                    <div
                      key={plan.plan_id}
                      className={`rounded-xl border p-5 shadow ${
                        selectedPlanId === plan.plan_id
                          ? "border-teal-500/50 bg-slate-900"
                          : "border-slate-800 bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-slate-200">{plan.name}</span>
                        <span className="inline-flex items-center rounded-md border border-transparent bg-teal-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
                          {plan.apy}% APY
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">{plan.description}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                        <ClockIcon />
                        <span>
                          {plan.lock_period_days} days lock period
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Min. Investment</span>
                          <span className="text-slate-200 font-medium">Rs {plan.min_investment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Max. Investment</span>
                          <span className="text-slate-200 font-medium">Rs {plan.max_investment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Risk Level</span>
                          <span className={`font-medium ${plan.risk_level === "Low" ? "text-green-400" : plan.risk_level === "Medium" ? "text-amber-400" : "text-rose-400"}`}>
                            {plan.risk_level}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedPlanId(plan.plan_id)}
                        className={`mt-4 w-full rounded-full py-2.5 text-sm font-medium transition-colors ${
                          selectedPlanId === plan.plan_id
                            ? "bg-teal-500 text-white hover:bg-teal-400"
                            : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                        }`}
                      >
                        {selectedPlanId === plan.plan_id ? "Selected" : "Select Plan"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability Tab */}
              <div
                data-state={activeTab === "sustainability" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-sustainability"
                id="content-sustainability"
                tabIndex={0}
                className={`mt-6 ${activeTab === "sustainability" ? "" : "hidden"}`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow p-6">
                  <h3 className="text-xl font-semibold mb-4 font-['Outfit']">Sustainability Impact</h3>
                  <p className="text-slate-400 mb-6">
                    Battery energy storage systems play a critical role in accelerating the renewable energy transition.
                    By storing excess clean energy and dispatching it during peak demand, BESS assets reduce reliance on
                    fossil-fuel peaker plants and lower overall carbon intensity of the grid.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Carbon Offset Potential</p>
                      <p className="text-2xl font-bold text-white mt-1">50K+ Tons CO₂</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Renewable Integration</p>
                      <p className="text-2xl font-bold text-white mt-1">24/7 Grid Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calculator */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow sticky top-24">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight font-['Outfit'] text-white">
                  Investment Calculator
                </div>
              </div>
              <div className="p-6 pt-0 space-y-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-200">{selectedPlan.name}</span>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-teal-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
                      {selectedPlan.apy}% APY
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <ClockIcon />
                    <span>{selectedPlan.lock_period_days} days lock period</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-200">Investment Amount</label>
                    <span className="text-sm font-bold text-teal-400">
                      Rs {investmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    data-orientation="horizontal"
                    aria-disabled="false"
                    className="relative flex w-full touch-none select-none items-center mb-2"
                    data-testid="investment-slider"
                  >
                    <span
                      data-orientation="horizontal"
                      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-800"
                    >
                      <span
                        data-orientation="horizontal"
                        className="absolute h-full bg-teal-500"
                        style={{ left: `${sliderPercent}%`, right: `${100 - sliderPercent}%` }}
                      />
                    </span>
                    <span
                      style={{
                        transform: `translateX(calc(${sliderPercent}% - 8px))`,
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      <span
                        role="slider"
                        aria-valuemin={selectedPlan.min_investment}
                        aria-valuemax={selectedPlan.max_investment}
                        aria-orientation="horizontal"
                        data-orientation="horizontal"
                        tabIndex={0}
                        className="block h-4 w-4 rounded-full border border-teal-500/50 bg-slate-950 shadow transition-colors"
                        data-radix-collection-item=""
                        aria-valuenow={investmentAmount}
                      />
                    </span>
                  </span>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Rs {selectedPlan.min_investment.toLocaleString()}</span>
                    <span>Rs {selectedPlan.max_investment.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={selectedPlan.min_investment}
                    max={selectedPlan.max_investment}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="sr-only"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-200">Risk Level</label>
                    <span className={`text-sm font-medium ${riskColor}`}>{selectedPlan.risk_level}</span>
                  </div>
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    role="progressbar"
                    data-state="indeterminate"
                    data-max="100"
                    className="relative w-full overflow-hidden rounded-full bg-slate-800 h-2"
                  >
                    <div
                      data-state="indeterminate"
                      data-max="100"
                      className="h-full w-full flex-1 bg-teal-500 transition-all"
                      style={{ transform: "translateX(-75%)" }}
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="font-semibold text-sm text-slate-200">Projected Returns</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Daily</p>
                      <p className="font-semibold text-teal-400">
                        Rs {dailyReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Monthly</p>
                      <p className="font-semibold text-teal-400">
                        Rs {monthlyReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Lock Period</p>
                      <p className="font-semibold text-teal-400">
                        Rs {lockPeriodReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Total Value</p>
                      <p className="font-semibold text-teal-400">
                        Rs {totalValue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors bg-teal-500 text-white shadow hover:bg-teal-400 h-9 px-4 w-full rounded-full py-6 text-lg"
                  data-testid="invest-btn"
                >
                  Sign In to Invest
                </button>
                <p className="text-xs text-center text-slate-500">
                  By investing, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BatteryStoragePage;
