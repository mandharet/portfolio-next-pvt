"use client";

export default function DotPattern() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)",
        }}
      />
    </div>
  );
}
