import { useEffect, useState } from "react";
import Avatar from "../components/avatar";
import FadeContainer from "../components/base/fade-container";
import Section from "../components/base/section";
import ScrollDownIcon from "../components/scroll-down-icon";
import Title from "../components/title";
interface IProps{
  onClick: () => void;
}
export default function Greet(props:IProps) {
  return (
    <Section className="flex flex-col flex-nowrap">
      <FadeContainer
        direction="right"
        className="flex flex-1 flex-col gap-12 place-items-center place-content-center lg:flex-row lg:w-full lg:justify-around"
      >
        <Title onClick={()=>props.onClick()}/>
        <Avatar />
      </FadeContainer>
      <ScrollDownIcon />
    </Section>
  );
}
