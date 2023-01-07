import { useEffect, useState } from "react";
import Avatar from "../avatar";
import Section from "../base/section";
import ButtonScrollSection from "../button/btn-scroll-section";
import Title from "../title";
import { motion } from "framer-motion";
export default function Greet() {
  return (
    <Section id="greet" className="flex flex-col flex-nowrap">
      <div className="flex flex-1 flex-col gap-12 place-items-center place-content-center lg:flex-row lg:w-full lg:justify-around">
        <motion.div
          initial={{ opacity: 0, translateX: "-3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <Title />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: "3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <Avatar />
        </motion.div>
      </div>
      <ButtonScrollSection sectionId="exp" position="bottom-4 left-[calc(50%-.75rem)]" />
    </Section>
  );
}
