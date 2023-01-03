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
      className={`${props.className} flex gap-2 place-items-center bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 font-semibold px-6 py-2  transition-all duration-300`}
      onClick={(e) => window.open(props.demoUrl, "blank")}
    >
      {value}
      <VscLiveShare />
    </button>
  );
}
