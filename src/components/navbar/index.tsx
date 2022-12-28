import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeButton from "../theme-button";
import ButtonFilled from "../button/filled";
import ButtonOutlined from "../button/outlined";

export default function Navbar() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 0) {
        setColor("bg-dark");
      } else {
        setColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const downloadCV = () => {
    var link = document.createElement("a");
    link.download = "cv";
    link.href = "/CV.pdf";
    link.click();
  };

  return (
    <div className={`${color} transition-all duration-600 z-50 w-full fixed top-0 left-0 py-2 px-4 flex justify-between lg:px-48`}>
      <Image src="/name-white.png" alt="logo" width={72} height={32} />

      <div className="flex place-items-center">
        <ThemeButton />
        <ButtonFilled text="Baixar CV" onClick={downloadCV} />
      </div>
    </div>
  );
}
