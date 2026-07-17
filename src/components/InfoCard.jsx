function InfoCard({ title, text }) {
  return (
    <article className="rounded-[28px] border border-white/15 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,31,17,0.28)] backdrop-blur-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-emerald-100/80">{text}</p>
    </article>
  );
}

export default InfoCard;
