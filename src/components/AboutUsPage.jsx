function AboutUsPage() {
  const stats = [
    { label: "Charger Classes", value: "8", desc: "From AC to mega-fast" },
    { label: "Risk Tiers", value: "3", desc: "Low to High" },
    { label: "Min Ticket", value: "Rs 1.5K", desc: "Accessible entry" },
    { label: "APY Range", value: "9.5 - 19.5%", desc: "Competitive returns" },
  ];

  const advisors = [
    {
      name: "CMDE Akash Kapur",
      role: "Board Advisor",
      desc: "B.Tech (Elec), M.Tech IIT Delhi, MBA Marketing, M.Phil DSS, 35+ years in Indian Navy.",
      initials: "AK",
    },
    {
      name: "Mr Veeramuthu M",
      role: "Technical Advisor",
      desc: "Product leader, ex-CTO, data scientist, Gen AI specialist, University of Texas at Austin, 20+ years experience, startup advisor.",
      initials: "VM",
    },
    {
      name: "Mr Ankit Ahuja",
      role: "Overseas Advisor - SE Asia",
      desc: "BITS Pilani, MIT Global SCM, Purdue University, INSEAD. Procurement excellence, digital solutions, and transformation.",
      initials: "AA",
    },
    {
      name: "Mr Harinder Singh",
      role: "Overseas Advisor - GCC",
      desc: "Project management expert based in Abu Dhabi, UAE, with a strong background in managing energy projects.",
      initials: "HS",
    },
    {
      name: "Mr Naveen Srivastava",
      role: "Board Advisor",
      desc: "Executive Director & CEO, Manikaran Group, with 26+ years of experience in lithium refinery project pre-development.",
      initials: "NS",
    },
  ];

  const journeyMilestones = [
    { year: "2022", title: "Founded", desc: "Zipbolt Innovations was established with a vision to democratize EV infrastructure investment." },
    { year: "2023", title: "First Deployments", desc: "Launched our first 6 kW AC and 60 kW retail charging sites across Gurugram and Delhi NCR." },
    { year: "2024", title: "Platform Launch", desc: "ZipInvest marketplace went live, enabling fractional investment in charging assets." },
    { year: "2025", title: "Scaling", desc: "Expanded to 8 charger classes covering retail, fleet, and highway corridors nationwide." },
    { year: "2026", title: "Growing Investor Base", desc: "Empowering retail and institutional investors to own revenue-generating EV infrastructure." },
  ];

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
        <section className="mt-6">
          <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 shadow-[0_30px_80px_rgba(10,23,56,0.4)] md:p-14">
            <h1 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
              <span className="block">Powering India&apos;s</span>
              <span className="mt-2 block text-blue-200">EV Infrastructure</span>
              <span className="mt-1 block text-white">With Investor Capital</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-blue-100/80 sm:text-lg">
              ZipInvest is the marketplace where everyday investors own shares of
              revenue-generating EV charging infrastructure. We combine institutional-grade
              asset selection with accessible, fractional participation, turning the
              charging revolution into a tangible asset class.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#marketplace" className="primary-button px-8 py-4 text-base">
                Explore Opportunities
              </a>
              <a href="#contact" className="secondary-button px-8 py-4 text-base">
                Talk to Us
              </a>
            </div>
          </div>
        </section>

        <section id="story" className="mt-10">
          <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 shadow-[0_30px_80px_rgba(10,23,56,0.4)] md:p-12">
            <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              Our Story
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm leading-7 text-blue-100/80">
                  India is adding millions of electric vehicles to its roads every year.
                  But the charging infrastructure that makes EV ownership practical is
                  struggling to keep pace, not because of technology, but because of
                  capital.
                </p>
                <p className="text-sm leading-7 text-blue-100/80">
                  Zipbolt Innovations saw the gap. Traditional financing models leave
                  charging operators undercapitalized and investors without a clear path
                  to infrastructure exposure. ZipInvest was built to bridge that gap with
                  a model that works for both sides.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm leading-7 text-blue-100/80">
                  We deploy battery-backed DC fast chargers at high-utilization sites:
                  retail centers, logistics parks, highway plazas, and fleet depots.
                  Every charger is instrumented, monitored, and underwritten with
                  transparent performance data.
                </p>
                <p className="text-sm leading-7 text-blue-100/80">
                  Today, ZipInvest offers eight charger classes ranging from entry-level
                  AC installations to flagship mega-fast stations, each priced for
                  fractional ownership with clear return profiles and defined risk
                  tiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="mt-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 shadow-[0_30px_80px_rgba(10,23,56,0.4)] md:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/70">
                Mission
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                Democratize EV Infrastructure
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/80">
                Make revenue-generating charging assets accessible to every investor,
                not just institutions. We believe the EV charging build-out is one
                of the defining infrastructure stories of this decade, and everyone
                should have the opportunity to participate.
              </p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 shadow-[0_30px_80px_rgba(10,23,56,0.4)] md:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/70">
                Vision
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                The Infrastructure Layer for
                <span className="text-blue-200"> India&apos;s Mobility Shift</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/80">
                A future where every EV driver has access to reliable, paid charging
                and where investors earn consistent returns from the backbone of
                that network.
              </p>
            </div>
          </div>
        </section>

        <section id="stats" className="mt-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              At a Glance
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
              By the Numbers
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card glass-card-compact animate-rise border-[#dbe4ff] bg-white"
              >
                <div className="text-3xl font-black tracking-[-0.05em] text-[#0a1738]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-slate-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="mt-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Platform Pillars
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
              Why Investors Choose ZipInvest
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "&#9733;",
                title: "Asset-Backed",
                desc: "Every investment ties to physical hardware deployed at a specific site with real contracts and utilization data.",
              },
              {
                icon: "&#9733;",
                title: "Transparent Underwriting",
                desc: "Site-level performance metrics, yield calculations, and risk drivers are disclosed before you invest.",
              },
              {
                icon: "&#9733;",
                title: "Flexible Entry",
                desc: "Ticket sizes from Rs 1,500 up to Rs 2.2L+ mean you can start small and scale as you learn the asset class.",
              },
              {
                icon: "&#9733;",
                title: "Active Management",
                desc: "We don&apos;t just pool capital; we manage deployment, maintenance, and operator relationships on your behalf.",
              },
              {
                icon: "&#9733;",
                title: "Diversified Classes",
                desc: "Eight charger types across three risk tiers give you the ability to build a balanced infrastructure portfolio.",
              },
              {
                icon: "&#9733;",
                title: "Clear Returns",
                desc: "APY ranges from 9.5% to 19.5% with defined lock periods, so you know what to expect before committing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-[24px] border border-white/10 bg-white/80 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a56c6] text-xl font-black text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="mt-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Our Journey
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
              Milestones That Matter
            </h2>
          </div>
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {journeyMilestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                {index < journeyMilestones.length - 1 && (
                  <div className="absolute left-[22px] right-0 top-6 hidden h-0.5 bg-[#dbe4ff] lg:block" />
                )}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#2a56c6] text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a56c6]">
                      {milestone.year}
                    </div>
                    <h3 className="mt-1 text-base font-bold text-slate-950">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="advisors" className="mt-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Board of Advisors
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">
              Strategic Guidance
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Strategic guidance across technology, energy, and global markets
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="glass-card rounded-[24px] border border-white/10 bg-white/80 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-xl font-black text-white">
                  {advisor.initials}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950">{advisor.name}</h3>
                <div className="mt-1 text-sm font-semibold text-[#2a56c6]">
                  {advisor.role}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{advisor.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mt-10">
          <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-8 text-center shadow-[0_30px_80px_rgba(10,23,56,0.4)] md:p-14">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Ready to Own EV Infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-blue-100/80">
              Start exploring charger opportunities, model your returns in the simulator,
              and deploy your allocation, all in minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#marketplace" className="primary-button px-8 py-4 text-base">
                Browse Opportunities
              </a>
              <a href="#calculator" className="secondary-button px-8 py-4 text-base">
                Open Simulator
              </a>
              <a href="#contact" className="secondary-button px-8 py-4 text-base">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUsPage;
