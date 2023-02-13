import { useRef } from "react";
import Section from "../layout/section";
import ExperienceCard from "../cards/experience-card";
import { motion } from "framer-motion";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section ref={sectionRef} id="exp" className="flex flex-col flex-nowrap gap-12 items-center justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold">Experiência</h1>
      <div className="flex flex-col gap-6  place-content-center lg:flex-row lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, translateX: "-3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <ExperienceCard role="Frontend" stacks={["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript"]} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: "3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <ExperienceCard role="Backend" stacks={["Node JS", "Postgres", "Express", "MySQL", "Prisma"]} />
        </motion.div>
      </div>
    </Section>
  );
}
