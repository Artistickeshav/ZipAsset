import SegmentCard from "./SegmentCard";

function SegmentsGrid({ segments, selectedSegmentId, onSelectSegment }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
