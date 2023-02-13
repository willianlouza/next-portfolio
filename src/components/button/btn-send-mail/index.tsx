import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
interface IProps {
  sending: boolean;
  sended: boolean;
}
export default function ButtonSendMail(props: IProps) {
  return (
    <button type="submit" className="group m-auto md:m-0 flex w-36 hover:w-40 hover:translate-x-2 transition-all duration-150 drop-shadow-lg bg-violet-500/20 border border-white/25 rounded-full backdrop-blur-md lg:w-32 h-11">
      <span className="group m-auto h-full font-light px-6 py-3 flex items-center gap-1 flex-nowrap">
        {props.sending ? (
          <div className="flex flex-1 place-content-center place-items-center animate-spin">
            <BiLoaderAlt className="" />
          </div>
        ) : props.sended ? (
          <>Enviado!</>
        ) : (
          <>
            <p>Enviar</p>
            <AiOutlineSend className="transition-transform duration-150 group-hover:translate-x-2" />
          </>
        )}
      </span>
    </button>
  );
}
