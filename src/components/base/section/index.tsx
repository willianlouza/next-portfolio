import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
const Section = React.forwardRef((props:IProps, ref:any) => {
  return (
    <div ref={ref} id={props.id} className={`snap-start min-h-screen text-center px-6 ${props.className}`}>
      {props.children}
    </div>
  );
});

Section.displayName = "Section";

export default Section;
