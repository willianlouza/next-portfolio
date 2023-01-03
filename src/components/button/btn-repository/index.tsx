import { BsGithub } from "react-icons/bs";
interface IProps {
  text?: string;
  className?: string;
  repoUrl: string;
}
export default function ButtonRepository(props: IProps) {
  const value = props.text || "GitHub";
  return (
    <button
      className={`${props.className} flex place-items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-2 hover:bg-light hover:border-light hover:text-dark transition-colors duration-150`}
      onClick={(e) => window.open(props.repoUrl, "blank")}
    >
      {props.text}
      <BsGithub />
    </button>
  );
}
