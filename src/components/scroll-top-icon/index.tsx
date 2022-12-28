import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

interface IProps {
  className?: string;
}
export default function ScrollTopIcon(props: IProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${props.className} border border-primary z-50 flex flex-col place-items-center place-content-center animate-bounce cursor-pointer p-4 bg-secondary rounded-lg hover:bg-muted-blue transition-colors duration-150`}
      onClick={() => {
        const exp = document.getElementById("home");
        exp?.scrollIntoView();
      }}
    >
      <MdKeyboardArrowUp className="w-8 h-8" />
    </div>
  );
}
