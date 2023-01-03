import { useEffect, useRef, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
interface IProps{
  onClick: () => void;
}
export default function ContactButton(props:IProps) {
  return (
    <button
      className="group relative border lg:border-2 flex overflow-x-hidden max-w-fit"
      onClick={() => {
        const target = document.getElementById("contato");
        target?.scrollIntoView()
        props.onClick();
      }}
    >
      <span className="w-0 h-full overflow-x-hidden group-hover:w-full absolute top-0 left-0 bg-white text-black transition-all duration-300 ease-in">
        <div className="flex place-items-center gap-1 flex-nowrap px-4 py-2">
          <p>Contato</p>
          <TbArrowUpRight className="min-w-fit" />
        </div>
      </span>
      <span className="px-4 py-2 flex place-items-center gap-1 flex-nowrap bg-black text-white">
        <p>Contato</p>
        <TbArrowUpRight />
      </span>
    </button>
  );
}
