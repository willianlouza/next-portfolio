import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

interface IProps {
  href: string;
  isEmail: boolean;
  className?:string;
}
export default function ContactCard(props: IProps) {
  return (
    <div className={`${props.className} rounded-md bg-secondary h-48 w-full flex p-6`}>
      {props.isEmail ? (
        <div className="flex-1 flex flex-col place-items-center justify-between">
          <HiOutlineMail className="w-9 h-9 text-light" />
          <h3 className="text-2xl text-light">Email</h3>
          <span className="text-muted">willianlouza@gmail.com</span>
          <Link className="text-link" href={props.href} target="_blank">
            Enviar mensagem
          </Link>
        </div>
      ) : (
        <div className="flex-1 flex flex-col place-items-center justify-between">
          <BsWhatsapp className="w-9 h-9 text-light" />
          <h3 className="text-2xl text-light">Whatsapp</h3>
          <span className="text-muted">+55 (21) 96559-7809</span>
          <Link className="text-link" href={props.href} target="_blank">
            Enviar mensagem
          </Link>
        </div>
      )}
    </div>
  );
}
