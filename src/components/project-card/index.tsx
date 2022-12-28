import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ButtonFilled from "../button/filled";
import ButtonOutlined from "../button/outlined";
import Tag from "../tag";
interface IProps {
  hasDemo: boolean;
  tags: string[];
  description: string;
  image: string;
  demoURL?: string;
  githubURL?: string;
}
export default function ProjectCard(props: IProps) {
  const [position, setPosition] = useState<any>({ top: 0, left: 0 });
  const [visible, setVisible] = useState("hidden");
  const cardRef = useRef<HTMLDivElement>(null);
  const pointRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cardRect = cardRef.current?.getBoundingClientRect();
      const pointRect = pointRef.current?.getBoundingClientRect();
      if (!cardRect || !pointRect) return;

      const pos = { top: event.y, left: event.x };

      const localPos = {
        top: pos.top - cardRect.top - pointRect.height / 2,
        left: pos.left - cardRect.left - pointRect.width / 2,
      };

      setPosition({ top: localPos.top, left: localPos.left });
    };
    const handleMouseEnter = () => setVisible("");
    const handleMouseLeave = () => setVisible("hidden");

    cardRef.current?.addEventListener("mousemove", handleMouseMove);
    cardRef.current?.addEventListener("mouseenter", handleMouseEnter);
    cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardRef.current?.removeEventListener("mousemove", handleMouseMove);
      cardRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      cardRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [position]);
  return (
    <div
      ref={cardRef}
      className="group noselect overflow-hidden relative border flex flex-col justify-between border-primary rounded-md p-2 max-w-sm h-96 bg-secondary hover:bg-transparent lg:bg-transparent lg:hover:bg-secondary transition-colors duration-150"
    >
      <div className="z-10 bg-white rounded-md h-48 overflow-hidden">
        <Image
          src={props.image}
          alt="project"
          width={900}
          height={900}
          className="h-full w-full group-hover:scale-125 transition-transform duration-500"
        />
      </div>
      <div className="z-10 flex flex-wrap">
        {props.tags.map((tag, index) => {
          return <Tag key={index} text={tag} className="mr-2" />;
        })}
      </div>
      <div className="z-10 text-start">
        <span className="text-xl">{props.description}</span>
      </div>
      <div className="z-10 flex w-full">
        <ButtonOutlined
          text="Github"
          onClick={() => {
            window.open(props.githubURL, "blank");
          }}
        />
        {props.hasDemo && (
          <ButtonFilled
            text="Demo"
            onClick={() => {
              window.open(props.demoURL, "blank");
            }}
            className="mx-4"
          />
        )}
      </div>
      <div
        ref={pointRef}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        className={`${visible} w-32 h-32 absolute opacity-80 bg-gradient-to-t from-violet-600 to-purple-800 rounded-full blur-2xl`}
      ></div>
    </div>
  );
}
