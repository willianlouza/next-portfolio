import { SlMouse } from "react-icons/sl";

interface IProps {
  position?: string;
  sectionId: string;
}
export default function ButtonScrollSection(props: IProps) {
  return (
    <a
      href={`#${props.sectionId}`}
      className={`${props.position} absolute hover:text-violet-700 flex flex-col place-items-center animate-bounce cursor-pointer`}
    >
      <SlMouse className="w-6 h-6" />
    </a>
  );
}
