import { useEffect, useRef, useState } from "react";
import Section from "../components/base/section";
import GradientText from "../components/gradient-text";
import ProjectGrid from "../components/project-grid";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const rectOffset = rect.top - rect.height / 2;
      if (rectOffset <= 0 && !isVisible) {
        setIsVisible(true);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section ref={sectionRef} className="flex flex-col flex-nowrap gap-12 mb-24 place-items-center place-content-start py-18 lg:place-content-center">
      <GradientText value="Projetos" textClass="text-3xl lg:text-5xl font-bold" />
      <div className="flex flex-col gap-6 lg:flex-row">{isVisible && <ProjectGrid />}</div>
    </Section>
  );
}
