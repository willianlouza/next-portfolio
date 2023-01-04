import { useEffect, useRef, useState } from "react";
import ContactCard from "../components/contact-card";
import ContactForm from "../components/contact-form";
import FadeContainer from "../components/base/fade-container";
import Section from "../components/base/section";
import GradientText from "../components/gradient-text";

export default function Contact() {
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
  }, [isVisible]);
  return (
    <Section
      ref={sectionRef}
      id="contato"
      className="flex pb-6 py-32 flex-col flex-nowrap gap-12 place-items-center place-content-start"
    >
      <FadeContainer direction="top">

      <GradientText value="Contato" textClass="text-3xl lg:text-5xl font-bold" />
      </FadeContainer>
      <div className="flex flex-col-reverse gap-6 lg:gap-32 lg:flex-row place-items-center">
        {isVisible && (
          <>
            <div className="flex flex-col gap-6 px-5 w-full lg:w-auto">
              <FadeContainer direction="right">
                <ContactCard href="mailto: willianlouza@gmail.com" isEmail={true} />
              </FadeContainer>
              <FadeContainer direction="right" delay=".5s">
                <ContactCard href="https:/wa.me/+5521965597809" isEmail={false} />
              </FadeContainer>
            </div>
            <FadeContainer direction="left" className="w-96 lg:w-[40rem] px-5">
              <ContactForm className="flex-1" />
            </FadeContainer>
          </>
        )}
      </div>
    </Section>
  );
}
