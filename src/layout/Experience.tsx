import { useEffect, useRef, useState } from "react";
import FadeContainer from "../components/base/fade-container";
import Section from "../components/base/section";
import GradientText from "../components/gradient-text";
import ExperienceCard from "../components/experience-card";
interface IProps{
  visible?: boolean;
}
export default function Experience(props:IProps) {
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
    <Section
      ref={sectionRef}
      id="exp"
      className="flex flex-col flex-nowrap gap-12 place-items-center place-content-center"
    >
      <GradientText value="Experiência" textClass="text-3xl lg:text-5xl font-bold" />
      <div className="flex flex-col gap-6 lg:flex-row lg:w-2/3">
        {(isVisible || props.visible) && (
          <>
            <FadeContainer direction="right" className="w-full">
              <ExperienceCard
                role="Frontend"
                stacks={["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript"]}
              />
            </FadeContainer>
            <FadeContainer direction="left" className="w-full">
              <ExperienceCard role="Backend" stacks={["Node JS", "Postgres", "Express", "MySQL", "Prisma"]} />
            </FadeContainer>
          </>
        )}
      </div>
    </Section>
  );
}
