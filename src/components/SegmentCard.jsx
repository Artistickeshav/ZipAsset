import { formatRs } from "../utils/format";

function SegmentCard({ segment, isSelected, onSelect }) {
  const riskClass =
    segment.riskLevel === "High"
      ? "bg-rose-50 text-rose-700 border-rose-200"
      : segment.riskLevel === "Medium"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-emerald-50 text-emerald-700 border-emerald-200";

  const chargerType = segment.power.includes("kW AC") ? "AC" : "DC";
  const powerNum = parseInt(segment.power);
  const typeClass = chargerType === "AC" ? "mkt-type-ac" : "mkt-type-dc";

  const certifications = powerNum >= 120 ? ["ARAI", "CE", "OCPP 1.6J"] : powerNum >= 60 ? ["CE", "OCPP 1.6J"] : ["CE"];

  return (
    <article className="mkt-listing-card group">
      {/* Image area */}
      <div className="mkt-img-container h-52 m-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom,rgba(42,86,198,0.08),transparent_42%)]" />
        <div className="absolute inset-x-8 bottom-3 h-8 rounded-full bg-[rgba(10,23,56,0.06)] blur-xl" />
        <img
          src={segment.image}
          alt={segment.name}
          className="relative z-10 h-full w-full object-contain object-center p-4 transition duration-700 group-hover:scale-[1.05] group-hover:-translate-y-1"
        />
        {/* Power pill */}
        <div className="mkt-power-pill">
          {segment.power}
        </div>
        {/* Risk pill */}
        <span className={`mkt-risk-pill border font-bold text-xs ${riskClass}`}>
          {segment.risk}
        </span>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`mkt-type-chip ${typeClass}`}>{chargerType} Charger</span>
            <span className="mkt-verified-badge">
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                <circle cx="6" cy="6" r="5.5" fill="#10b981" />
                <path d="M3.5 6L5.2 7.7L8.5 4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verified
            </span>
          </div>
          <span className="mkt-apy-badge shrink-0">↑ {segment.yieldRate}%</span>
        </div>

        {/* Name */}
        <h3 className="mt-3 text-lg font-black tracking-[-0.03em] text-slate-950" style={{ fontFamily: "var(--font-head)" }}>
          {segment.name}
        </h3>
        <p className="mt-0.5 text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>{segment.useCase}</p>

        {/* Spec tags */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {certifications.map((c) => (
            <span key={c} className="mkt-tag">{c}</span>
          ))}
          <span className="mkt-tag">{segment.lockDays}d lock</span>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-6 text-slate-500 line-clamp-2">{segment.description}</p>

        {/* Metrics row */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400" style={{ fontFamily: "var(--font-head)" }}>APY</div>
            <div className="mt-0.5 text-xl font-black tracking-[-0.03em] text-slate-950" style={{ fontFamily: "var(--font-mono)" }}>
              {segment.yieldRate}%
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400" style={{ fontFamily: "var(--font-head)" }}>Min. Invest</div>
            <div className="mt-0.5 text-sm font-black text-slate-900" style={{ fontFamily: "var(--font-mono)" }}>
              {formatRs(segment.minAmount / 1000)}K
            </div>
          </div>
        </div>

        {/* Site type */}
        <div className="mt-2.5 flex items-start gap-2 rounded-xl bg-blue-50/60 border border-blue-100/80 px-3 py-2">
          <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500">
            <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
          <span className="text-[11px] leading-5 text-blue-700 font-medium">{segment.site}</span>
        </div>

        {/* CTAs */}
        <div className="mt-3.5 flex gap-2">
          <button
            type="button"
            onClick={() => onSelect(segment.id)}
            className="flex-1 justify-center primary-button !py-2.5 !text-sm"
            style={{ fontFamily: "var(--font-head)" }}
          >
            {isSelected ? "Open Opportunity" : "View Opportunity"}
          </button>
          <button
            type="button"
            onClick={() => onSelect(segment.id)}
            className="mkt-enquiry-btn"
          >
            Enquire →
          </button>
        </div>
      </div>
    </article>
  );
}

export default SegmentCard;
