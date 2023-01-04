import { useEffect, useState } from "react";
import Avatar from "../components/avatar";
import FadeContainer from "../components/base/fade-container";
import Section from "../components/base/section";
import ButtonScrollSection from "../components/button/btn-scroll-section";
import Title from "../components/title";

export default function Greet() {
  return (
    <Section id="greet" className="flex flex-col flex-nowrap">
      <FadeContainer
        direction="right"
        className="flex flex-1 flex-col gap-12 place-items-center place-content-center lg:flex-row lg:w-full lg:justify-around"
      >
        <Title />
        <Avatar />
      </FadeContainer>
      <ButtonScrollSection sectionId="exp" position="bottom-4 left-[calc(50%-.75rem)]"/>
    </Section>
  );
}
