import styled, { keyframes } from "styled-components";

const fadeRight = keyframes`
    0%{opacity: 0;transform: translateX(-3rem);}
    100%{opacity: 1; transform: translateX(0);}
  `;
const fadeLeft = keyframes`
  0%{opacity: 0;transform: translateX(3rem);}
  100%{opacity: 1; transform: translateX(0);}
`;
const fadeTop = keyframes`
  0%{opacity: 0;transform: translateY(3rem);}
  100%{opacity: 1; transform: translateX(0);}
`;
export interface FadeOptions {
  direction: "left" | "right" | "top";
  delay?: string;
}
export const AnimateContainer = styled.div<FadeOptions>`
  animation: ${(props) => (props.direction === "left" ? fadeLeft : props.direction === "right" ? fadeRight : fadeTop)}
    1s ease-in ${(props) => props.delay} forwards;
`;
