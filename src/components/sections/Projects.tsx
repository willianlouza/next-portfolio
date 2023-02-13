import { useEffect, useRef, useState } from "react";
import Section from "../layout/section";
import ProjectGrid from "../project-grid";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} className="flex flex-col flex-nowrap drop-shadow-lg gap-12 place-items-center place-content-start py-24">
      <h1 className="text-3xl lg:text-5xl font-bold">Projetos</h1>
      <div className="flex flex-col gap-6 lg:flex-row">
        <ProjectGrid />
      </div>
    </Section>
  );
}
