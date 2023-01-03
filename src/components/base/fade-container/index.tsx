import React, { useEffect, useState } from "react";
import { AnimateContainer } from "./styles";
interface IProps {
  className?: string;
  direction: "right" | "left" | "top";
  children?: React.ReactNode;
  delay?: string | "0s";
}
export default function FadeContainer(props: IProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);
  if (!mounted) return null;
  return (
    <AnimateContainer direction={props.direction} delay={props.delay} className={`opacity-0 ${props.className}`}>
      {props.children}
    </AnimateContainer>
  );
}
