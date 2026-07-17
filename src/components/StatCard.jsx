function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/10 p-4">
      <strong className="mb-1.5 block text-lg">{value}</strong>
      <span className="text-sm text-emerald-100/80">{label}</span>
    </div>
  );
}

export default StatCard;
