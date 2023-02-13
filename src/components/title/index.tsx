import React from "react";
import Image from "next/image";
import ContactButton from "../button/btn-contact";
import StackIcons from "../stack-icons";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div className="text-left flex flex-col items-start gap-6">
      <div>
        <h1 className="text-5xl lg:text-8xl font-semibold text-white">Willian Louza</h1>
        <div className="stroke-text">
          <h1 className="font-semibold text-4xl lg:text-6xl">Desenvolvedor Fullstack</h1>
        </div>
      </div>

      <StackIcons />
      <ContactButton />
    </div>
  );
}
