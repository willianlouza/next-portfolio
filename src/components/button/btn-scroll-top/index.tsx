import { RxDoubleArrowUp } from "react-icons/rx";

interface IProps {
  position?: string;
  targetId: string;
}
export default function ButtonScrollTop(props: IProps) {
  return (
    <a
      href={`#${props.targetId}`}
      className={`${props.position} absolute hover:text-emerald-500 flex flex-col place-items-center animate-bounce cursor-pointer`}
    >
      <RxDoubleArrowUp className="w-9 h-9" />
    </a>
  );
}
