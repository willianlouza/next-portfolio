import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

interface IProps {
  href: string;
  isEmail: boolean;
  className?: string;
}
export default function ContactCard(props: IProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 pt-0.5 shadow-lg">
      <div className={`${props.className} bg-neutral-900 h-48 w-full flex py-6 px-16`}>
        {props.isEmail ? (
          <div className="flex-1 flex flex-col place-items-center justify-between">
            <HiOutlineMail className="w-9 h-9 text-light" />
            <h3 className="text-2xl text-light">Email</h3>
            <span className="text-gray-400">willianlouza@gmail.com</span>
            <Link className="text-cyan-500 hover:text-cyan-400" href={props.href} target="_blank">
              Enviar mensagem
            </Link>
          </div>
        ) : (
          <div className="flex-1 flex flex-col place-items-center justify-between">
            <BsWhatsapp className="w-9 h-9 text-light" />
            <h3 className="text-2xl text-light">Whatsapp</h3>
            <span className="text-gray-400">+55 (21) 96559-7809</span>
            <Link className="text-cyan-500 hover:text-cyan-400" href={props.href} target="_blank">
              Enviar mensagem
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
