import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
interface IProps {
  sending: boolean;
  sended: boolean;
}
export default function ButtonSendMail(props: IProps) {
  return (
    <button type="submit" className="group flex w-32 hover:w-36 transition-all duration-150 drop-shadow-lg bg-violet-500/20 border border-white/25 rounded-full backdrop-blur-md">
      <span className="group flex-1 h-full font-light px-6 py-3 flex items-center gap-4 flex-nowrap">
        {props.sending ? (
          <div className="flex flex-1 place-content-center place-items-center animate-spin">
            <BiLoaderAlt className="" />
          </div>
        ) : props.sended ? (
          <>Enviado!</>
        ) : (
          <>
            <p>Enviar</p>
            <AiOutlineSend className="transition-transform duration-150 group-hover:translate-x-4" />
          </>
        )}
      </span>
    </button>
  );
}
