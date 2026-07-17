import { formatRs } from "../utils/format";

function SegmentCard({ segment }) {
  const riskClass =
    segment.riskLevel === "High"
      ? "bg-rose-100 text-rose-700 border-rose-200"
      : segment.riskLevel === "Medium"
        ? "bg-amber-100 text-amber-700 border-amber-200"
        : "bg-emerald-100 text-emerald-700 border-emerald-200";

  return (
    <article className="decharge-card group">
      <div className="decharge-card-glow" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/88 shadow-[0_26px_70px_rgba(15,23,42,0.1)] backdrop-blur-xl">
        <div className="relative h-[24rem] overflow-hidden bg-[linear-gradient(180deg,#fdfefe_0%,#eef4ff_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom,rgba(42,86,198,0.1),transparent_42%)]" />
          <div className="absolute inset-x-10 bottom-4 h-10 rounded-full bg-[rgba(10,23,56,0.08)] blur-2xl" />
          <img
            src={segment.image}
            alt={segment.name}
            className="relative z-10 h-full w-full object-contain object-center p-6 transition duration-700 group-hover:scale-[1.04] group-hover:-translate-y-1"
          />
          <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
            <span className="soft-pill bg-white/82 text-slate-700 shadow-[0_12px_22px_rgba(15,23,42,0.08)]">
              {segment.power}
            </span>
            <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${riskClass}`}>
              {segment.risk}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-xl font-black tracking-[-0.04em] text-slate-950">{segment.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{segment.useCase}</p>
            </div>
            <div className="rounded-[20px] bg-gradient-to-r from-cyan-400 to-emerald-300 px-3 py-2 text-sm font-black text-slate-950 shadow-[0_14px_24px_rgba(45,212,191,0.24)]">
              {segment.yieldRate}%
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-600">{segment.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="soft-pill">{segment.lockDays}d lock</span>
            <span className="soft-pill">{segment.site}</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="metric-tile">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">APY</div>
              <div className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-950">
                {segment.yieldRate}%
              </div>
            </div>
            <div className="metric-tile">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Min invest
              </div>
              <div className="mt-1 text-sm font-bold text-slate-900">
                {formatRs(segment.minAmount / 1000)}K
              </div>
            </div>
          </div>

          <button className="primary-button mt-5 w-full justify-center">
            View &amp; Invest
          </button>
        </div>
      </div>
    </article>
  );
}

export default SegmentCard;
