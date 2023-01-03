import { VscLiveShare } from "react-icons/vsc";

interface IProps {
  text?: string;
  demoUrl: string;
  className?: string;
}
export default function ButtonProjectDemo(props: IProps) {
  const value = props.text || "Demo";
  return (
    <button
      className={`${props.className} rounded-md flex gap-2 place-items-center bg-emerald-500 hover:bg-emerald-400 font-semibold px-6 py-2  transition-all duration-300`}
      onClick={(e) => window.open(props.demoUrl, "blank")}
    >
      {value}
      <VscLiveShare />
    </button>
  );
}
