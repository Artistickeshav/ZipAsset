import { overviewNumbers, platformPillars } from "../data/content";
import Bullet from "./Bullet";
import Section from "./Section";

function OpportunitySection() {
  return (
    <Section
      id="opportunity"
      title="Why ZipAsset can feel credible to users"
      description="A strong EV infrastructure platform needs more than charger cards. It needs an operating story around throughput, uptime, energy margins, and deployment discipline."
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-white/15 bg-white/12 p-7 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl">
          <h3 className="text-2xl font-semibold">Built around real charging economics</h3>
          <p className="mt-3 max-w-none text-base leading-7 text-emerald-100/80">
            Revenue for DC fast-charging sites typically comes from energy sales, session fees,
            location partnerships, fleet agreements, and in some cases storage-driven savings or
            demand-charge optimization.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {overviewNumbers.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-black/10 p-4">
                <strong className="mb-2 block text-lg">{item.value}</strong>
                <span className="text-sm text-emerald-100/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/15 bg-white/12 p-7 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl">
          <h3 className="text-2xl font-semibold">Platform pillars</h3>
          <div className="mt-5 grid gap-3">
            {platformPillars.map((pillar) => (
              <Bullet key={pillar.title} title={pillar.title} text={pillar.text} marker="✓" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default OpportunitySection;
