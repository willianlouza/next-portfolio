import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function ContactButton() {
  return (
    <a
      href="#contato"
      className="group flex w-36 hover:w-40 hover:translate-x-2 transition-all duration-150 drop-shadow-lg bg-violet-500/20 border border-white/25 rounded-full backdrop-blur-md"
    >
      <span className="group m-auto font-light px-6 py-3 flex place-items-center gap-1 flex-nowrap">
        <p>Contato</p>
        <BsArrowRight className="transition-transform duration-150 group-hover:translate-x-2" />
      </span>
    </a>
  );
}
