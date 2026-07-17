function Bullet({ marker, title, text }) {
  return (
    <div className="flex items-start gap-3 text-emerald-100/80">
      <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-lime-200/15 text-sm font-black text-lime-300">
        {marker}
      </span>
      <span className="text-sm leading-6">
        <strong className="text-white">{title}:</strong> {text}
      </span>
    </div>
  );
}

export default Bullet;
