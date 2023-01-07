import { useEffect, useRef, useState } from "react";
import ContactCard from "../contact-card";
import ContactForm from "../contact-form";
import Section from "../base/section";
import GradientText from "../gradient-text";
import { motion } from "framer-motion";
export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      ref={sectionRef}
      id="contato"
      className="flex pb-6 py-32 flex-col flex-nowrap gap-12 place-items-center place-content-start"
    >
      <GradientText value="Contato" textClass="text-3xl lg:text-5xl font-bold" />
      <div className="flex flex-col-reverse gap-6 lg:gap-32 lg:flex-row place-items-center">
        <div className="flex flex-col gap-6 px-5 w-full lg:w-auto">
          <motion.div
            initial={{ opacity: 0, translateX: "-3rem" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1}}
          >
            <ContactCard href="mailto: willianlouza@gmail.com" isEmail={true} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: "-3rem" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <ContactCard href="https:/wa.me/+5521965597809" isEmail={false} />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: "3rem" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-96 lg:w-[40rem] px-5"
        >
          <ContactForm className="flex-1" />
        </motion.div>
      </div>
    </Section>
  );
}
