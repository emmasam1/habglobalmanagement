export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Blob */}
      <div
        className="absolute -left-30 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Gold Blob */}
      <div
        className="absolute -right-30 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

    </div>
  );
}
