import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
export default function ContactButton() {
  return (
    <Link
      href="#contato"
      className="group flex max-w-fit drop-shadow-md shadow-white group"
    >
      <span className="px-6 py-3 flex place-items-center gap-1 flex-nowrap bg-gradient-to-r from from-cyan-500 to-emerald-500  group-hover:from-cyan-400 group-hover:to-emerald-400 rounded-md">
        <p>Contato</p>
        <TbArrowUpRight />
      </span>
    </Link>
  );
}
