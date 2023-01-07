import { useEffect, useRef, useState } from "react";
import Section from "../base/section";
import GradientText from "../gradient-text";
import ProjectGrid from "../project-grid";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} className="flex flex-col flex-nowrap gap-12 place-items-center place-content-start py-24">
      <GradientText value="Projetos" textClass="text-3xl lg:text-5xl font-bold" />
      <div className="flex flex-col gap-6 lg:flex-row">
        <ProjectGrid />
      </div>
    </Section>
  );
}
