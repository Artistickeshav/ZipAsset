function Section({ id, title, description, children }) {
  return (
    <section id={id} className="px-0 py-[26px]">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] md:w-[min(1180px,calc(100%-32px))]">
        <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <h2 className="max-w-[14ch] text-3xl font-black tracking-[-0.03em] md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[48ch] text-base leading-7 text-emerald-100/80">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
