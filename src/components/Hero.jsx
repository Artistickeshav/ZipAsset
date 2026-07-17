import { heroInfoPanels, metrics } from "../data/content";

function Hero() {
  return (
    <section className="px-0 py-9 md:py-16">
      <div className="mx-auto grid w-[min(1180px,calc(100%-22px))] gap-7 md:w-[min(1180px,calc(100%-32px))] xl:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/12 p-7 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.03em] text-emerald-100/85 md:text-sm">
            DC Fast Charging • Fractional Infra Access
          </div>
          <h1 className="mt-5 max-w-[10ch] text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Invest in the buildout of EV charging.
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-7 text-emerald-100/85 md:text-[1.05rem]">
            ZipInvest is a concept platform for backing different kinds of EV DC fast-charging
            assets, from highway charging hubs to fleet depots and battery-backed urban stations,
            while keeping the bold green-first theme from your attached EV design.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#segments"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lime-300 to-lime-100 px-5 py-3 font-bold text-emerald-950 shadow-[0_14px_30px_rgba(216,255,114,0.25)] transition hover:-translate-y-0.5"
            >
              Explore Charger Types
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-8 grid gap-3.5 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-black/10 p-4"
              >
                <strong className="mb-2 block text-2xl">{metric.value}</strong>
                <span className="text-sm text-emerald-100/80">{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(216,255,114,0.16),transparent_70%)]" />
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(216,255,114,0.12),transparent_45%),rgba(255,255,255,0.06)]">
              <div className="absolute right-4 top-6 h-[220px] w-[220px] rounded-full border border-white/20" />
              <div className="absolute right-14 top-14 h-[150px] w-[150px] rounded-full border border-white/20" />
              <div className="absolute inset-x-8 bottom-6 top-6 grid place-items-center">
                <div className="relative h-[190px] w-[55%] max-w-[230px] min-w-[170px] rounded-[30px] border border-white/20 bg-gradient-to-b from-white/20 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                  <div className="absolute left-7 right-7 top-6 h-[76px] rounded-[22px] border border-white/20 bg-gradient-to-b from-lime-200/30 to-white/10" />
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 text-4xl text-lime-300">
                    {"\u26A1"}
                  </div>
                </div>
                <div className="absolute bottom-[18%] right-[9%] h-[110px] w-[110px] rounded-br-[44px] border-b-[7px] border-r-[7px] border-white/80" />
                <div className="absolute bottom-[calc(18%-20px)] right-[calc(9%-10px)] h-10 w-[30px] rounded-lg bg-white/95">
                  <div className="absolute -top-2.5 left-[7px] h-3.5 w-1.5 rounded-full bg-white/95" />
                  <div className="absolute -top-2.5 right-[7px] h-3.5 w-1.5 rounded-full bg-white/95" />
                </div>
              </div>
            </div>
          </div>

          {heroInfoPanels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-[28px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl"
            >
              <div className="rounded-3xl border border-white/10 bg-emerald-950/25 p-5">
                <h3 className="mb-3 text-base font-semibold text-white">{panel.title}</h3>
                <p className="text-sm leading-6 text-emerald-100/80">{panel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
