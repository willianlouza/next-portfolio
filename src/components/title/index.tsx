import React from "react";
import FadeContainer from "../base/fade-container";
import ContactButton from "../button/btn-contact";
import GradientText from "../gradient-text";
import StackIcons from "../stack-icons";
interface IProps {
  onClick: () => void;
}
export default function Title(props: IProps) {
  return (
    <div className="flex flex-col gap-2 text-center lg:max-w-max lg:text-left lg:gap-6">
      <div>
        <GradientText value="Willian Louza" textClass="text-5xl font-black lg:text-8xl" />
        <h1 className="text-4xl font-bold lg:text-6xl">Desenvolvedor Fullstack</h1>
      </div>
      <FadeContainer
        direction="right"
        delay=".5s"
        className="flex flex-col gap-4 place-items-center lg:flex-row lg:justify-between"
      >
        <StackIcons />
        <ContactButton onClick={() => props.onClick()} />
      </FadeContainer>
    </div>
  );
}
