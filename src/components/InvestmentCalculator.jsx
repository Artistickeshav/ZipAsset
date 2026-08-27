import { useState } from "react";
import { formatRs } from "../utils/format";

function InvestmentCalculator({
  segments,
  selectedSegmentId,
  investmentAmount,
  selectedSegment,
  annualIncome,
  monthlyIncome,
  onSegmentChange,
  onInvestmentChange,
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const dailyReturn = (investmentAmount * (selectedSegment.yieldRate / 100)) / 365;
  const lockValue = (investmentAmount * (selectedSegment.yieldRate / 100) * selectedSegment.lockDays) / 365;
  const totalValue = investmentAmount + lockValue;

  const riskWidth =
    selectedSegment.riskLevel === "High"
      ? "w-full"
      : selectedSegment.riskLevel === "Medium"
        ? "w-2/3"
        : "w-1/3";

  return (
    <div className="calculator-shell h-full xl:self-stretch">
      <div className="pointer-events-none absolute -right-12 top-10 h-40 w-40 rounded-full bg-cyan-200/70 blur-3xl" />

      <div className={`calculator-panel ${isExpanded ? "calculator-panel-expanded" : "calculator-panel-collapsed"}`}>
        <button
          type="button"
          className="calculator-toggle"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
        >
          <div className="calculator-toggle-main">
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#2a56c6]">
                Investment studio
              </div>
              <h3 className="mt-2 text-[1.9rem] font-black tracking-[-0.04em] text-slate-950">
                Charger Investment Simulator
              </h3>
            </div>

            <div className="calculator-toggle-action">
              <span className="calculator-toggle-label">
                {isExpanded ? "Collapse" : "Expand"}
              </span>
              <span className={`calculator-toggle-icon ${isExpanded ? "is-open" : ""}`}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="calculator-summary-grid">
            <div className="calculator-summary-card calculator-summary-card-primary">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Selected asset
              </div>
              <div className="mt-2 text-lg font-black tracking-[-0.03em] text-slate-950">
                {selectedSegment.power}
              </div>
              <div className="mt-1 text-sm text-slate-600">{selectedSegment.name}</div>
            </div>

            <div className="calculator-summary-card">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Monthly projection
              </div>
              <div className="mt-2 text-lg font-black tracking-[-0.03em] text-slate-950">
                {formatRs(monthlyIncome)}
              </div>
            </div>

            <div className="calculator-summary-card">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Estimated value
              </div>
              <div className="mt-2 text-lg font-black tracking-[-0.03em] text-slate-950">
                {formatRs(totalValue.toFixed(2))}
              </div>
            </div>
          </div>
        </button>

          <div className={`calculator-content ${isExpanded ? "is-expanded" : ""}`}>
          <div className="calculator-content-inner">
            <div className="mt-2 rounded-[24px] border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(220,252,231,0.72))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[1.7rem] font-black tracking-[-0.04em] text-slate-950">
                    {selectedSegment.name}
                  </div>
                  <div className="mt-2 text-[1.05rem] text-slate-600">
                    {selectedSegment.power} • {selectedSegment.useCase}
                  </div>
                </div>
                <div className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                  {selectedSegment.yieldRate}% APY
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="segmentSelect" className="mb-2.5 block text-[1.05rem] font-semibold text-slate-900">
                Select charger class
              </label>
              <select
                id="segmentSelect"
                value={selectedSegmentId}
                onChange={(event) => onSegmentChange(event.target.value)}
                className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                {segments.map((segment) => (
                  <option key={segment.id} value={segment.id}>
                    {segment.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="investmentRange" className="mb-2.5 block text-[1.05rem] font-semibold text-slate-900">
                Investment amount
              </label>
              <div className="mb-2 text-right text-[1.05rem] font-black text-cyan-700">
                {formatRs(investmentAmount)}
              </div>
              <input
                id="investmentRange"
                type="range"
                min={selectedSegment.minAmount}
                max={selectedSegment.maxAmount}
                step="50"
                value={investmentAmount}
                onChange={(event) => onInvestmentChange(Number(event.target.value))}
                className="slider-track w-full"
              />
              <div className="mt-2 flex justify-between text-[1.05rem] text-slate-500">
                <span>{formatRs(selectedSegment.minAmount)}</span>
                <span>{formatRs(selectedSegment.maxAmount)}</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[1.05rem] font-semibold text-slate-900">Risk profile</span>
                <span className="text-[1.05rem] font-bold text-emerald-700">{selectedSegment.riskLevel}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-200">
                <div className={`h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 ${riskWidth}`} />
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="text-[1.9rem] font-black tracking-[-0.04em] text-slate-950">
                Projected returns
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="metric-tile p-4">
                  <div className="text-[1.05rem] text-slate-500">Daily</div>
                  <div className="mt-2 text-[1.7rem] font-black text-slate-950">
                    {formatRs(dailyReturn.toFixed(2))}
                  </div>
                </div>
                <div className="metric-tile p-4">
                  <div className="text-[1.05rem] text-slate-500">Monthly</div>
                  <div className="mt-2 text-[1.7rem] font-black text-slate-950">
                    {formatRs(monthlyIncome.toFixed(2))}
                  </div>
                </div>
                <div className="metric-tile p-4">
                  <div className="text-[1.05rem] text-slate-500">Lock period</div>
                  <div className="mt-2 text-[1.7rem] font-black text-slate-950">
                    {formatRs(lockValue.toFixed(2))}
                  </div>
                </div>
                <div className="metric-tile p-4">
                  <div className="text-[1.05rem] text-slate-500">Estimated value</div>
                  <div className="mt-2 text-[1.7rem] font-black text-slate-950">
                    {formatRs(totalValue.toFixed(2))}
                  </div>
                </div>
              </div>
            </div>

            <button className="primary-button mt-8 w-full justify-center px-6 py-5 text-[1.05rem]">
              Complete KYC first, then proceed to payments
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">
              By investing, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentCalculator;
