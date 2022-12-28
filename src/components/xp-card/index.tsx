import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { BiData } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

interface IProps {
  role: "Frontend" | "Backend";
  stacks: string[];
}
export default function ExperienceCard(props: IProps) {
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
        top: pos.top - cardRect.top - (pointRect.height / 2),
        left: pos.left - cardRect.left - (pointRect.width / 2),
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
      className="group noselect overflow-hidden relative border flex flex-col border-primary rounded-md p-6 h-72 bg-secondary hover:bg-transparent lg:bg-transparent lg:hover:bg-secondary transition-colors duration-150 w-96"
    >
      <div className="z-10 flex place-content-center place-items-center">
        <h3 className="text-primary text-xl font-bold relative ">
          {props.role}
          {props.role === "Frontend" ? (
            <HiCode className="text-primary absolute -left-8 top-1 w-5 h-5" />
          ) : (
            <BiData className="text-primary mr-4 absolute -left-8 top-1 w-5 h-5" />
          )}
        </h3>
      </div>
      <div className="z-10 flex-1 flex place-content-center place-items-center ">
        <div className="grid grid-cols-2 gap-6">
          {props.stacks.map((stack, index) => {
            return (
              <div key={index} className="flex place-items-center">
                <BsFillPatchCheckFill className="text-primary " />
                <span className="mx-4 text-md lg:text-xl text-light">{stack}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div
      ref={pointRef}
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        className={`${visible} w-32 h-32 absolute opacity-80 bg-gradient-to-t from-violet-600 to-purple-800 rounded-full blur-2xl`}
      ></div>
    </div>
  );
}
