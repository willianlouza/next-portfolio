import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ButtonSendMail from "../button/btn-send-mail";
interface IProps {
  className?: string;
}
export default function ContactForm(props: IProps) {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);

  const sendEmail = (e: any) => {
    if (!form.current) return;
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("portfolio-site", "template_sv6ti95", form.current, "NPIx3sZ-IVmge8m6n")
      .then(
        (result) => {
          console.log(result.text);
          setSended(true);
          setTimeout(() => {
            setSended(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={`${props.className} flex flex-col w-full`}>
      <input
        type="text"
        name="nome"
        id="nome"
        required
        placeholder="Seu nome"
        className="border bg-transparent border-cyan-500 p-3 my-2 focus:outline-none focus:border-cyan-300"
      />
      <input
        type="text"
        name="assunto"
        id="assunto"
        required
        placeholder="Assunto"
        className="border bg-transparent border-cyan-500 p-3 my-2 focus:outline-none focus:border-cyan-300"
      />
      <textarea
        placeholder="Mensagem"
        name="mensagem"
        id="mensagem"
        cols={30}
        rows={10}
        className="resize-none border bg-transparent border-cyan-500 p-3 my-2 focus:outline-none focus:border-cyan-300"
        required
      ></textarea>
      <ButtonSendMail  sended={sended} sending={sending} />
    </form>
  );
}
