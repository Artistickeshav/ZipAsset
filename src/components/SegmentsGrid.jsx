import SegmentCard from "./SegmentCard";

function SegmentsGrid({ segments, selectedSegmentId, onSelectSegment }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {segments.map((segment) => (
        <SegmentCard
          key={segment.id}
          segment={segment}
          isSelected={segment.id === selectedSegmentId}
          onSelect={onSelectSegment}
        />
      ))}
    </div>
  );
}

export default SegmentsGrid;
