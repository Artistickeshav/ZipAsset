import SegmentsShowcase from "./SegmentsShowcase";

function SegmentsPage() {
  return (
    <main className="pb-20 pt-6 sm:pt-10">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] space-y-8 md:w-[min(1180px,calc(100%-32px))]">
        <SegmentsShowcase />
      </div>
    </main>
  );
}

export default SegmentsPage;
