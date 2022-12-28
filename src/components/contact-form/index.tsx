import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BiLoaderAlt } from "react-icons/bi";

export default function ContactForm() {
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
          }, 3000)
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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full lg:w-[40rem]">
      <input
        type="text"
        name="nome"
        id="nome"
        required
        placeholder="Seu nome"
        className="border bg-transparent border-primary p-3 rounded-md my-2"
      />
      <input
        type="text"
        name="assunto"
        id="assunto"
        required
        placeholder="Assunto"
        className="border bg-transparent border-primary p-3 rounded-md my-2"
      />
      <textarea
        placeholder="Mensagem"
        name="mensagem"
        id="mensagem"
        cols={30}
        rows={10}
        className="resize-none border bg-transparent border-primary p-3 rounded-md my-2"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-primary text-light lg:w-36 w-full h-12
       hover:text-dark font-semibold px-6 py-2 rounded-sm border border-primary
        hover:bg-light hover:border-light transition-colors duration-150 my-2"
      >
        {sending ? (
          <div className="flex flex-1 place-content-center place-items-center animate-spin">
            <BiLoaderAlt className="" />
          </div>
        ) : sended ? (
          <>Enviado!</>
        ) : (
          <>Enviar</>
        )}
      </button>
    </form>
  );
}
