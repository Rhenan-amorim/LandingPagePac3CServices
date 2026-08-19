// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { ConcentricRings } from "@/components/originkit/ui/hero-06/concentric-rings";
import { Navbar } from "@/components/originkit/ui/hero-06/navbar";
import { SpiralStage } from "@/components/originkit/ui/hero-06/spiral-stage";

export const Section15Hero = () => {
  const handleExplorePeople = () => {
    const el = document.getElementById("etapas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewStories = () => {
    const el = document.getElementById("conceito");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="PAC — Plano Anual de Capacitação da 3C Services"
      className="relative isolate min-h-screen w-full overflow-hidden bg-surface"
    >
      <ConcentricRings />

      <div className="absolute inset-0 z-[2]">
        <SpiralStage
          onExplorePeople={handleExplorePeople}
          onViewStories={handleViewStories}
        />
      </div>

      <Navbar onViewStories={handleViewStories} />
    </section>
  );
};
