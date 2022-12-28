import { MdKeyboardArrowDown } from "react-icons/md";

interface IProps {
  className?: string;
}
export default function ScrollDownIcon(props: IProps) {
  return (
    <div
      className={`${props.className} hover:text-primary flex flex-col place-items-center animate-bounce cursor-pointer`}
      onClick={() => {
        const exp = document.getElementById("exp");
        exp?.scrollIntoView({block: 'start'});
      }}
    >
      <span>Scroll</span>
      <MdKeyboardArrowDown className="w-6 h-6" />
    </div>
  );
}
