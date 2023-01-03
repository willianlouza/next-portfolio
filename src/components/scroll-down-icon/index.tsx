import { SlMouse } from "react-icons/sl";

interface IProps {
  className?: string;
}
export default function ScrollDownIcon(props: IProps) {
  return (
    <div
      className={`${props.className} absolute bottom-4 left-[calc(50%-.75rem)] hover:text-emerald-500 flex flex-col place-items-center animate-bounce cursor-pointer`}
      onClick={() => {
        const exp = document.getElementById("exp");
        exp?.scrollIntoView({ block: "start" });
      }}
    >
      <SlMouse className="w-6 h-6" />
    </div>
  );
}
