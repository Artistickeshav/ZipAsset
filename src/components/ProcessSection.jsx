import Section from "./Section";

function ProcessSection({ processSteps }) {
  return (
    <Section
      id="how-it-works"
      title="How ZipAsset works"
      description="A streamlined investor journey across all segments: browse opportunities, model your returns, review risk profiles, and deploy capital into live assets."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[28px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl"
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-lime-200/15 font-extrabold text-lime-300">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-emerald-100/80">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProcessSection;
