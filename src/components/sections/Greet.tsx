import Section from "../layout/section";
import ButtonScrollSection from "../button/btn-scroll-section";
import Title from "../title";
import { motion } from "framer-motion";

export default function Greet() {
  return (
    <Section id="greet" className="relative flex flex-col items-start justify-center flex-nowrap">
      <motion.div
        className="md:pl-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateX: 10 }}
        transition={{ duration: 1 }}
      >
        <Title />
      </motion.div>
      <ButtonScrollSection sectionId="exp" position="bottom-16 left-[calc(50%-.75rem)]" />
    </Section>
  );
}
