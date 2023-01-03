import { BiLoaderAlt } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
interface IProps {
  sending: boolean;
  sended: boolean;
}
export default function ButtonSendMail(props: IProps) {
  return (
    <button type="submit" className=" bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 lg:w-32 h-11">
      <span className="px-4 py-2 flex place-items-center place-content-center gap-1 flex-nowrap">
        {props.sending ? (
          <div className="flex flex-1 place-content-center place-items-center animate-spin">
            <BiLoaderAlt className="" />
          </div>
        ) : props.sended ? (
          <>Enviado!</>
        ) : (
          <>
            <p>Enviar</p>
            <TbSend />
          </>
        )}
      </span>
    </button>
  );
}