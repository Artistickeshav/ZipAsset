import SegmentCard from "./SegmentCard";

function SegmentsGrid({ segments }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {segments.map((segment) => (
        <SegmentCard key={segment.id} segment={segment} />
      ))}
    </div>
  );
}

export default SegmentsGrid;
