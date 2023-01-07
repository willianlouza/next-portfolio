import React from "react";
import ContactButton from "../button/btn-contact";
import GradientText from "../gradient-text";
import StackIcons from "../stack-icons";
import { motion } from "framer-motion";
export default function Title() {
  return (
    <div className="flex flex-col gap-2 text-center lg:max-w-max lg:text-left lg:gap-6">
      <div>
        <GradientText value="Willian Louza" textClass="text-5xl font-bold lg:text-7xl" />
        <h1 className="text-2xl font-bold lg:text-6xl">Desenvolvedor Fullstack</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: "3rem" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col gap-4 place-items-center lg:flex-row lg:justify-between"
      >
        <StackIcons />
        <ContactButton />
      </motion.div>
    </div>
  );
}
